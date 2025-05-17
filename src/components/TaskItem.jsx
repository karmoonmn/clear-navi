import React from 'react';

const TaskItem = ({ detail, index, isCompleted, toggleTaskCompletion, stepId }) => {
   return (
      <div className="flex p-3 hover:bg-gray-50 rounded-md border border-navyblue-200 items-center">
         <button
            onClick={() => toggleTaskCompletion(stepId, index)}
            className={`flex items-center justify-center w-8 h-8 rounded-full border-2 mt-0.5 ${isCompleted
               ? 'bg-green-600 border-green-700'
               : 'bg-white border-navyblue-400 hover:bg-navyblue-50'
               }`}
         >
            {isCompleted && (
               <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
               </svg>
            )}
         </button>
         <span className={`ml-4 text-lg font-medium text-navyblue-800 ${isCompleted ? 'line-through text-gray-400' : ''}`}>
            {detail.text || detail.step}
            {/* {detail.link && (
               // <a
               //    href={detail.link}
               //    target="_blank"
               //    rel="noopener noreferrer"
               //    className="ml-2 text-navyblue-500 hover:text-navyblue-700 underline"
               // >
               //    Link
               // </a>
            )} */}
         </span>
      </div>
   );
};

export default TaskItem; 