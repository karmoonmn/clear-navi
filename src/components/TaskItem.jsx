import React from 'react';

const TaskItem = ({ detail, index, isCompleted, toggleTaskCompletion, stepId }) => {
   return (
      <div className="flex items-start">
         <button
            onClick={() => toggleTaskCompletion(stepId, index)}
            className={`flex items-center justify-center w-6 h-6 rounded-full border mt-0.5 ${isCompleted
               ? 'bg-green-600 border-green-700'
               : 'bg-white border-gray-300 hover:bg-gray-100'
               }`}
         >
            {isCompleted && (
               <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
               </svg>
            )}
         </button>
         <span className={`ml-3 text-sm text-gray-600 ${isCompleted ? 'line-through text-gray-400' : ''}`}>
            {detail.text || detail.step}
            {detail.link && (
               <a
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-navyblue-500 hover:text-navyblue-700 underline"
               >
                  Link
               </a>
            )}
         </span>
      </div>
   );
};

export default TaskItem; 