import React, { useRef, useState, useEffect } from 'react';
import StepDetails from './StepDetails';
import { DocumentTextIcon, DocumentIcon, ClockIcon, CheckCircleIcon, ExclamationCircleIcon, CircleStackIcon, DocumentChartBarIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

const SimpleFlowDiagram = ({ steps, activeStep, handleStepClick, toggleTaskCompletion, handleAskAboutStepClick }) => {
   const containerRef = useRef(null);
   const nodeRefs = useRef({});
   const [animatedNodes, setAnimatedNodes] = useState([]);
   const [hasAnimated, setHasAnimated] = useState(false); // Add this state

   // Create a joined array of all steps, with main steps first, then nested steps
   const allSteps = steps.filter(step => !step.id.startsWith('node3') || step.id === 'node3');

   // Find nested steps for node3
   const nestedSteps = steps.filter(step =>
      (step.id.startsWith('node3') && step.id !== 'node3') ||
      step.id === 'DOC_DIRECTOR_IC' ||
      step.id === 'DOC_TSP_QUOTATION'
   );

   // Animation sequence for nodes on page load
   useEffect(() => {
      if (allSteps.length > 0 && !hasAnimated) {
         // Start with an empty array of animated nodes
         setAnimatedNodes([]);

         // Sequentially animate nodes with a delay
         const animationDelay = 150; // milliseconds between each node animation

         // Main steps animation
         allSteps.forEach((step, index) => {
            setTimeout(() => {
               setAnimatedNodes(prev => [...prev, step.id]);
            }, index * animationDelay);
         });

         // Nested steps animation (start after main steps)
         if (nestedSteps.length > 0) {
            const nestedStartDelay = allSteps.length * animationDelay;

            nestedSteps.forEach((nestedStep, index) => {
               setTimeout(() => {
                  setAnimatedNodes(prev => [...prev, nestedStep.id]);
               }, nestedStartDelay + (index * animationDelay));
            });
         }
         setHasAnimated(true); // Mark as animated
      }
   }, [steps, hasAnimated]); // Re-run when steps change

   // Get the step icon based on ID
   const getStepIcon = (stepId) => {
      switch (stepId) {
         case 'A':
            return <DocumentTextIcon className="w-full h-full" />;
         case 'B':
            return <DocumentChartBarIcon className="w-full h-full" />;
         case 'C':
            return <ClockIcon className="w-full h-full" />;
         case 'D':
            return <CheckCircleIcon className="w-full h-full" />;
         case 'E':
            return <ExclamationCircleIcon className="w-full h-full" />;
         case 'NODE_START':
            return (
               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" />
                  <path d="M10 8l6 4-6 4V8z" fill="currentColor" />
               </svg>
            );
         case 'NODE_END':
            return (
               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor" />
                  <path d="M16 16H8V8h8v8z" fill="currentColor" />
               </svg>
            );
         default:
            return <ClipboardDocumentCheckIcon className="w-full h-full" />;
      }
   };

   // Vertical stacked layout for nodes with side details
   return (
      <div className="relative w-full bg-gray-50 rounded-lg p-6">
         <div className="flex flex-col lg:flex-row gap-2">
            {/* Left side: Flow diagram */}
            <div
               className="lg:w-2/5 overflow-y-auto"
               style={{ minHeight: '500px' }}
            >
               <div
                  ref={containerRef}
                  className="relative w-full"
               >
                  <div className="space-y-4">
                     {/* Main steps first */}
                     {allSteps.map((step) => (
                        <div key={step.id} className="mb-6">
                           <div className="flex items-start">
                              <div
                                 ref={el => nodeRefs.current[step.id] = el}
                                 onClick={() => handleStepClick(step)}
                                 className={`
                                    w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shrink-0
                                    ${step.completed
                                       ? 'bg-green-600 text-white'
                                       : activeStep && activeStep.id === step.id
                                          ? 'bg-navyblue-400 text-white'
                                          : 'bg-white text-gray-700'
                                    }
                                    border-2 ${step.completed
                                       ? 'border-green-700'
                                       : activeStep && activeStep.id === step.id
                                          ? 'border-navyblue-500'
                                          : 'border-navyblue-200'
                                    }
                                    transition-all duration-300 transform
                                    ${animatedNodes.includes(step.id) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                                 `}
                                 style={{
                                    transitionDelay: `${animatedNodes.indexOf(step.id) * 50}ms`
                                 }}
                              >
                                 <div className="w-8 h-8">
                                    {getStepIcon(step.id)}
                                 </div>
                              </div>

                              <div className={`ml-4 flex-1 transition-all duration-300 transform 
                                 ${animatedNodes.includes(step.id) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                 style={{
                                    transitionDelay: `${animatedNodes.indexOf(step.id) * 50 + 100}ms`
                                 }}
                              >
                                 <div className="font-semibold text-gray-800">
                                    {step.title}
                                 </div>
                                 {step.id !== 'NODE_START' && step.id !== 'NODE_END' && (
                                    <div className="text-xs text-gray-600 mt-1">
                                       {step.details && step.details.length ?
                                          `${step.details.filter(d => d.completed).length}/${step.details.length} complete` :
                                          "0/0 complete"}
                                    </div>
                                 )}
                              </div>
                           </div>

                           {/* If this is node3, render its nested steps */}
                           {step.id === 'node3' && nestedSteps.length > 0 && (
                              <div className="mt-4 ml-10 pl-6 border-l-2 border-navyblue-400 space-y-6">
                                 {nestedSteps.map((nestedStep) => (
                                    <div key={nestedStep.id} className="flex items-start">
                                       <div
                                          ref={el => nodeRefs.current[nestedStep.id] = el}
                                          onClick={() => handleStepClick(nestedStep)}
                                          className={`
                                             w-16 h-16 rounded-full flex items-center justify-center cursor-pointer shrink-0
                                             ${nestedStep.completed
                                                ? 'bg-green-500 text-white'
                                                : activeStep && activeStep.id === nestedStep.id
                                                   ? 'bg-navyblue-600 text-white'
                                                   : 'bg-white text-gray-700'
                                             }
                                             border-2 ${nestedStep.completed
                                                ? 'border-green-600'
                                                : activeStep && activeStep.id === nestedStep.id
                                                   ? 'border-navyblue-700'
                                                   : 'border-navyblue-200'
                                             }
                                             transition-all duration-300 transform
                                             ${animatedNodes.includes(nestedStep.id) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                                          `}
                                          style={{
                                             transitionDelay: `${animatedNodes.indexOf(nestedStep.id) * 50}ms`
                                          }}
                                       >
                                          <div className="w-8 h-8">
                                             {getStepIcon(nestedStep.id)}
                                          </div>
                                       </div>

                                       <div className={`ml-4 flex-1 transition-all duration-300 transform 
                                          ${animatedNodes.includes(nestedStep.id) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                          style={{
                                             transitionDelay: `${animatedNodes.indexOf(nestedStep.id) * 50 + 100}ms`
                                          }}
                                       >
                                          <div className="font-semibold text-gray-800">
                                             {nestedStep.title}
                                          </div>
                                          {nestedStep.id !== 'NODE_START' && nestedStep.id !== 'NODE_END' && (
                                             <div className="text-xs text-gray-600 mt-1">
                                                {nestedStep.details && nestedStep.details.length ?
                                                   `${nestedStep.details.filter(d => d.completed).length}/${nestedStep.details.length} complete` :
                                                   "0/0 complete"}
                                             </div>
                                          )}
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           )}
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Right side: Step details */}
            <div className={`lg:w-3/5 transition-all duration-500 ${activeStep ? 'opacity-100' : 'opacity-0'}`}>
               {activeStep && (
                  <StepDetails
                     activeStep={activeStep}
                     steps={steps}
                     handleStepClick={handleStepClick}
                     toggleTaskCompletion={toggleTaskCompletion}
                     handleAskAboutStepClick={handleAskAboutStepClick}
                     getStepIcon={getStepIcon}
                     onClose={() => handleStepClick(null)}
                  />
               )}
            </div>
         </div>
      </div>
   );
};

export default SimpleFlowDiagram; 