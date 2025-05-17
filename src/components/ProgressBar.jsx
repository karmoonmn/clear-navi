import React from 'react';
import { useTranslation } from 'react-i18next';

const ProgressBar = ({ progressPercentage }) => {
   const { t } = useTranslation();
   return (
      <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-md p-4 mb-6">
         <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 font-medium">{t('applicationProgress')}</span>
            <span className="text-indigo-600 font-medium">{progressPercentage}%</span>
         </div>
         <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
               className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
               style={{ width: `${progressPercentage}%` }}
            ></div>
         </div>
      </div>
   );
};

export default ProgressBar; 