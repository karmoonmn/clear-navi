import React from 'react';
import TaskItem from './TaskItem';

const StepDetails = ({
   activeStep,
   steps,
   handleStepClick,
   toggleTaskCompletion,
   handleAskAboutStepClick,
   getStepIcon,
   onClose
}) => {
   if (!activeStep) return null;

   // Find the step in the flat steps array or look for nested steps
   let currentStep = null;

   // First check if it's a main step
   const mainStep = steps.find(s => s.id === activeStep.id);
   if (mainStep) {
      currentStep = mainStep;
   } else {
      // Look for the step in nested steps
      for (const step of steps) {
         if (step.nestedSteps) {
            const nestedStep = step.nestedSteps.find(ns => ns.id === activeStep.id);
            if (nestedStep) {
               currentStep = nestedStep;
               break;
            }
         }
      }
   }

   if (!currentStep) {
      currentStep = activeStep; // Fallback to the passed activeStep
   }

   // Safely check for details array
   const details = currentStep.details || [];

   return (
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-200 relative max-w-3xl mx-auto">
         <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            onClick={onClose}
         >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
         </button>

         <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-2 flex items-center">
               <span className="w-8 h-8 inline-flex items-center justify-center bg-indigo-100 rounded-full mr-2 text-indigo-700">
                  {getStepIcon(activeStep)}
               </span>
               {currentStep.title}
            </h2>
            <p className="text-gray-600 mb-6">{currentStep.mainSummary || currentStep.description}</p>

            {details.length > 0 && (
               <>
                  <h3 className="font-medium mb-4">Required Steps:</h3>
                  <div className="space-y-3">
                     {details.map((detail, idx) => {
                        const isCompleted = detail.completed || false;

                        return (
                           <TaskItem
                              key={idx}
                              detail={detail}
                              index={idx}
                              isCompleted={isCompleted}
                              toggleTaskCompletion={toggleTaskCompletion}
                              stepId={currentStep.id}
                           />
                        );
                     })}
                  </div>
               </>
            )}

            {currentStep.detailedPoints && currentStep.detailedPoints.length > 0 && (
               <>
                  <h3 className="font-medium mb-4 mt-6">Key Information:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                     {currentStep.detailedPoints.map((point, idx) => (
                        <li key={idx}>{point}</li>
                     ))}
                  </ul>
               </>
            )}

            {currentStep.importantNotes && currentStep.importantNotes.length > 0 && (
               <>
                  <h3 className="font-medium mb-4 mt-6">Important Notes:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 bg-yellow-50 p-3 rounded-md">
                     {currentStep.importantNotes.map((note, idx) => (
                        <li key={idx} className="text-amber-700">{note}</li>
                     ))}
                  </ul>
               </>
            )}

            <div className="mt-8 flex justify-between">
               <button
                  onClick={handleAskAboutStepClick}
                  className="flex items-center text-indigo-600 hover:text-indigo-800 border border-indigo-200 bg-indigo-50 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Ask
               </button>

               {currentStep.connections && currentStep.connections.length > 0 && (
                  <div className="flex items-center">
                     <span className="mr-2 text-gray-500">Next step:</span>
                     {currentStep.connections.map(id => {
                        // Find next step in main steps or nested steps
                        let nextStep = steps.find(s => s.id === id);

                        if (!nextStep) {
                           // Look in nested steps
                           for (const step of steps) {
                              if (step.nestedSteps) {
                                 const nestedNextStep = step.nestedSteps.find(ns => ns.id === id);
                                 if (nestedNextStep) {
                                    nextStep = nestedNextStep;
                                    break;
                                 }
                              }
                           }
                        }

                        return nextStep ? (
                           <button
                              key={id}
                              className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium ml-2 bg-indigo-50 px-3 py-1 rounded-full hover:bg-indigo-100 transition-colors"
                              onClick={() => handleStepClick(nextStep)}
                           >
                              {nextStep.title}
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                 <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                           </button>
                        ) : null;
                     })}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default StepDetails; 