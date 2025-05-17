import React, { useRef } from 'react';
import StepDetails from './StepDetails';

const SimpleFlowDiagram = ({ steps, activeStep, handleStepClick, toggleTaskCompletion, handleAskAboutStepClick }) => {
   const containerRef = useRef(null);
   const nodeRefs = useRef({});

   // Create a joined array of all steps, with main steps first, then nested steps
   const allSteps = steps.filter(step => !step.id.startsWith('node3') || step.id === 'node3');

   // Find nested steps for node3
   const nestedSteps = steps.filter(step =>
      (step.id.startsWith('node3') && step.id !== 'node3') ||
      step.id === 'DOC_DIRECTOR_IC' ||
      step.id === 'DOC_TSP_QUOTATION'
   );

   // Get the step icon based on ID
   const getStepIcon = (stepId) => {
      switch (stepId) {
         case 'A':
            return (
               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="currentColor" />
                  <path d="M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor" />
               </svg>
            );
         case 'B':
            return (
               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10v10h14V10H5zm0-2h14V4H5v4zM3 2h18c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z" fill="currentColor" />
                  <path d="M12 16l-4-4h8l-4 4z" fill="currentColor" />
               </svg>
            );
         case 'C':
            return (
               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor" />
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="currentColor" />
               </svg>
            );
         case 'D':
            return (
               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor" />
               </svg>
            );
         case 'E':
            return (
               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" fill="currentColor" />
               </svg>
            );
         case 'NODE_START':
            return (
               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor" />
               </svg>
            );
         case 'NODE_END':
            return (
               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor" />
               </svg>
            );
         default:
            return (
               <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor" />
               </svg>
            );
      }
   };

   // Vertical stacked layout for nodes with side details
   return (
      <div className="relative w-full bg-blue-50 rounded-lg p-4">
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
                                       ? 'bg-green-500 text-white'
                                       : activeStep && activeStep.id === step.id
                                          ? 'bg-indigo-600 text-white'
                                          : 'bg-white text-gray-700'
                                    }
                                    border-2 ${step.completed
                                       ? 'border-green-600'
                                       : activeStep && activeStep.id === step.id
                                          ? 'border-indigo-700'
                                          : 'border-indigo-200'
                                    }
                                    transition-all duration-300 hover:opacity-90
                                 `}
                              >
                                 <div className="w-8 h-8">
                                    {getStepIcon(step.id)}
                                 </div>
                              </div>

                              <div className="ml-4 flex-1">
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
                              <div className="mt-4 ml-10 pl-6 border-l-2 border-indigo-400 space-y-6">
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
                                                   ? 'bg-indigo-600 text-white'
                                                   : 'bg-white text-gray-700'
                                             }
                                             border-2 ${nestedStep.completed
                                                ? 'border-green-600'
                                                : activeStep && activeStep.id === nestedStep.id
                                                   ? 'border-indigo-700'
                                                   : 'border-indigo-200'
                                             }
                                             transition-all duration-300 hover:opacity-90
                                          `}
                                       >
                                          <div className="w-8 h-8">
                                             {getStepIcon(nestedStep.id)}
                                          </div>
                                       </div>

                                       <div className="ml-4 flex-1">
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
            <div className="lg:w-3/5">
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