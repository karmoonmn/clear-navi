import React, { useCallback, useEffect } from 'react';
import ReactFlow, {
   Background,
   Controls,
   useNodesState,
   useEdgesState,
   MarkerType,
   Panel,
   BaseEdge,
   EdgeLabelRenderer,
   getStraightPath
} from 'reactflow';
import dagre from 'dagre';
import 'reactflow/dist/style.css';

// Custom node component to maintain the same look and feel
const CustomNode = ({ data }) => {
   const titleLines = data.title.split('\n');
   const completedCount = data.completedCount;
   const totalCount = data.totalCount;
   const isCompleted = data.completed;
   const isSelected = data.isSelected;

   // Calculate dynamic width based on content
   const width = Math.max(200, titleLines[0].length * 8 + 50);

   return (
      <div
         className={`border-2 rounded-lg p-4 flex flex-col items-center justify-center ${isCompleted
            ? 'bg-green-500 border-green-600 text-white'
            : isSelected
               ? 'bg-indigo-600 border-indigo-700 text-white'
               : 'bg-white border-indigo-200 text-gray-700 hover:bg-indigo-100'
            }`}
         style={{
            width: `${width}px`,
            minHeight: '70px',
            transition: 'all 0.3s ease'
         }}
      >
         {isCompleted && (
            <div className="absolute top-4 left-4">
               <div className="relative w-5 h-5 bg-white rounded-full border border-green-600">
                  <svg
                     className="absolute inset-0"
                     viewBox="0 0 20 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M5 10L8 13L15 7"
                        stroke="green"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                     />
                  </svg>
               </div>
            </div>
         )}

         <div className="font-semibold text-base text-center">
            {titleLines.map((line, i) => (
               <div key={i}>{line}</div>
            ))}
         </div>

         <div className="text-sm mt-2">
            {completedCount}/{totalCount} complete
         </div>
      </div>
   );
};

// Custom edge with label
const LabeledEdge = ({ id, source, target, label, style, markerEnd }) => {
   const [edgePath, labelX, labelY] = getStraightPath({
      sourceX: source.x,
      sourceY: source.y,
      targetX: target.x,
      targetY: target.y,
   });

   return (
      <>
         <BaseEdge id={id} path={edgePath} style={style} markerEnd={markerEnd} />
         {label && (
            <EdgeLabelRenderer>
               <div
                  style={{
                     position: 'absolute',
                     transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                     padding: '4px 8px',
                     borderRadius: '4px',
                     fontSize: 12,
                     fontWeight: 500,
                     background: 'white',
                     color: '#667',
                     border: '1px solid #ccc',
                     pointerEvents: 'all',
                  }}
                  className="nodrag nopan"
               >
                  {label}
               </div>
            </EdgeLabelRenderer>
         )}
      </>
   );
};

// Node and edge types mappings
const nodeTypes = {
   custom: CustomNode,
};

const edgeTypes = {
   labeled: LabeledEdge,
};

// This helper function uses dagre to calculate node positions
const getLayoutedElements = (nodes, edges, direction = 'TB') => {
   const dagreGraph = new dagre.graphlib.Graph();
   dagreGraph.setDefaultEdgeLabel(() => ({}));

   // Configure graph settings
   dagreGraph.setGraph({
      rankdir: direction,
      nodesep: 80,  // Increased spacing between nodes horizontally
      ranksep: 120, // Increased spacing between ranks (vertical levels)
      edgesep: 30,  // Spacing between edges
      ranker: 'network-simplex' // The algorithm to use (alternatives: 'tight-tree', 'longest-path')
   });

   // Set node dimensions
   nodes.forEach((node) => {
      const width = Math.max(200, (node.data.title?.length || 0) * 8 + 50);
      dagreGraph.setNode(node.id, {
         width: width,
         height: 100
      });
   });

   // Add edges to the graph
   edges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
   });

   // Calculate the layout
   dagre.layout(dagreGraph);

   // Apply the calculated positions to the nodes
   const layoutedNodes = nodes.map((node) => {
      const dagreNode = dagreGraph.node(node.id);

      // Position the node at its center
      return {
         ...node,
         position: {
            x: dagreNode.x - dagreNode.width / 2,
            y: dagreNode.y - dagreNode.height / 2,
         },
      };
   });

   return { nodes: layoutedNodes, edges };
};

const FlowDiagramDagre = ({
   steps,
   activeStep,
   handleStepClick
}) => {
   // Initialize with empty arrays, will be updated by useEffect
   const [nodes, setNodes, onNodesChange] = useNodesState([]);
   const [edges, setEdges, onEdgesChange] = useEdgesState([]);

   // Layout direction state
   const [direction, setDirection] = React.useState('TB'); // TB = top to bottom

   // Create nodes without positions
   const createNodes = () => steps.map((step) => {
      const completedCount = step.details.filter(detail => detail.completed).length;

      return {
         id: step.id,
         type: 'custom',
         // Temporary position that will be updated by layout algorithm
         position: { x: 0, y: 0 },
         data: {
            title: step.title,
            completed: step.completed,
            isSelected: step.id === (activeStep?.id || ''),
            completedCount: completedCount,
            totalCount: step.details.length,
            onNodeClick: () => handleStepClick(step)
         },
      };
   });

   // Create edges from connections with labels
   const createEdges = () => {
      // Get all connections from the steps data
      return steps.flatMap(step =>
         step.connections.map(targetId => {
            // See if we can find a connection label in the step's metadata
            const connLabel = getEdgeLabel(step.id, targetId);

            return {
               id: `${step.id}-${targetId}`,
               source: step.id,
               target: targetId,
               type: 'labeled',  // Use our custom labeled edge
               animated: false,
               label: connLabel,  // Set the label from our data
               style: {
                  stroke: step.completed ? '#10B981' : '#6366F1',
                  strokeWidth: 2
               },
               markerEnd: {
                  type: MarkerType.ArrowClosed,
                  color: step.completed ? '#10B981' : '#6366F1',
               },
               data: {
                  edgeType: 'connection'
               }
            };
         })
      );
   };

   // Helper to find edge labels from our predefined connections
   const getEdgeLabel = (sourceId, targetId) => {
      // Common labels for specific transitions
      if (sourceId === 'NODE_PHASE1_ELIGIBILITY_OVERVIEW' && targetId === 'NODE_PHASE2_TSP_SELECTION') {
         return 'Layak? Pilih TSP';
      }
      if (sourceId === 'NODE_PHASE2_TSP_SELECTION' && targetId === 'NODE_PHASE3_DOC_PREP_OVERVIEW') {
         return 'Dapat Sebut Harga? Sedia Dokumen';
      }
      if (sourceId === 'NODE_PHASE3_DOC_PREP_OVERVIEW' && targetId === 'DOC_SSM_CERT_PROFILE') {
         return 'Mula dengan SSM';
      }
      if (sourceId === 'NODE_PHASE3_DOC_PREP_OVERVIEW' && targetId === 'NODE_PHASE4_SUBMISSION_BSN') {
         return 'Hantar Permohonan';
      }
      if (sourceId === 'NODE_PHASE4_SUBMISSION_BSN' && targetId === 'NODE_PHASE5_WAITING_APPROVAL') {
         return 'Tunggu Keputusan';
      }
      if (sourceId === 'DOC_TSP_QUOTATION' && targetId === 'NODE_PHASE4_SUBMISSION_BSN') {
         return 'Semua Dokumen Lengkap?';
      }

      // Default: no label
      return '';
   };

   // Apply layout and update nodes/edges when steps change
   useEffect(() => {
      if (steps.length === 0) return;

      const initialNodes = createNodes();
      const initialEdges = createEdges();

      // Apply the layout algorithm
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
         initialNodes,
         initialEdges,
         direction
      );

      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
   }, [steps, activeStep, handleStepClick, direction]);

   // Handle node click
   const onNodeClick = useCallback((_, node) => {
      const step = steps.find(s => s.id === node.id);
      if (step) {
         handleStepClick(step);
      }
   }, [handleStepClick, steps]);

   // Handle layout direction change
   const onLayoutDirectionChange = useCallback((newDirection) => {
      setDirection(newDirection);
   }, []);

   return (
      <div className="w-full h-[600px] bg-blue-50 rounded-lg overflow-hidden">
         <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
            attributionPosition="bottom-right"
            fitViewOptions={{ padding: 0.2 }}
            defaultEdgeOptions={{
               type: 'labeled',
               animated: false,
            }}
         >
            <Controls />
            <Background />
            <Panel position="top-right" className="bg-white p-2 rounded shadow-md">
               <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">Layout Direction:</span>
                  <button
                     className={`px-2 py-1 rounded text-xs ${direction === 'TB' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                     onClick={() => onLayoutDirectionChange('TB')}
                  >
                     Top to Bottom
                  </button>
                  <button
                     className={`px-2 py-1 rounded text-xs ${direction === 'LR' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                     onClick={() => onLayoutDirectionChange('LR')}
                  >
                     Left to Right
                  </button>
               </div>
            </Panel>
         </ReactFlow>
      </div>
   );
};

export default FlowDiagramDagre; 