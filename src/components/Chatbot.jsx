import React from 'react';

const Chatbot = ({
   chatbotOpen,
   activeStep,
   chatMessages,
   suggestedQuestions,
   newMessage,
   setNewMessage,
   handleSendMessage,
   handleSuggestedQuestionClick,
   handleChatbotToggle
}) => {
   return (
      <>
         {/* Chatbot Toggle Button */}
         <button
            onClick={handleChatbotToggle}
            className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${chatbotOpen ? 'bg-red-500' : 'bg-navyblue-600 hover:bg-navyblue-700'
               }`}
         >
            {chatbotOpen ? (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
               </svg>
            ) : (
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
               </svg>
            )}
         </button>

         {/* Chatbot Dialog */}
         {chatbotOpen && (
            <div className="fixed bottom-24 right-6 w-100 md:w-100 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden flex flex-col transition-all duration-300 ease-in max-h-96">
               <div className="bg-navyblue-600 text-white px-4 py-3 flex justify-between items-center">
                  <h3 className="font-medium">Registration Assistant</h3>
                  <div className="flex items-center">
                     {activeStep && (
                        <span className="mr-2 text-xs bg-white text-navyblue-700 px-2 py-0.5 rounded-full">
                           Step {activeStep.id}
                        </span>
                     )}
                     <span className="text-xs bg-green-500 px-2 py-0.5 rounded-full">Online</span>
                  </div>
               </div>

               <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-44">
                  {chatMessages.map((msg, index) => (
                     <div
                        key={index}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                     >
                        <div
                           className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'user'
                              ? 'bg-navyblue-100 text-gray-800'
                              : msg.isContextUpdate
                                 ? 'bg-navyblue-50 text-navyblue-700 border border-navyblue-100'
                                 : 'bg-gray-100 text-gray-800'
                              }`}
                        >
                           {msg.text}
                        </div>
                     </div>
                  ))}
               </div>

               {/* Suggested Questions */}
               {suggestedQuestions.length > 0 && (
                  <div className="border-t border-gray-200 p-3 bg-gray-50">
                     <p className="text-xs text-gray-500 mb-2">Suggested questions:</p>
                     <div className="flex flex-wrap gap-2">
                        {suggestedQuestions.map((question, index) => (
                           <button
                              key={index}
                              onClick={() => handleSuggestedQuestionClick(question)}
                              className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1 hover:bg-navyblue-50 hover:border-navyblue-300 transition-colors"
                           >
                              {question}
                           </button>
                        ))}
                     </div>
                  </div>
               )}

               <div className="border-t border-gray-200 p-3 flex">
                  <input
                     type="text"
                     value={newMessage}
                     onChange={(e) => setNewMessage(e.target.value)}
                     onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                     placeholder={activeStep ? `Ask about ${activeStep.title}...` : "Ask about any step..."}
                     className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-navyblue-500"
                  />
                  <button
                     onClick={handleSendMessage}
                     className="bg-navyblue-600 text-white px-4 py-2 rounded-r-lg hover:bg-navyblue-700 transition-colors"
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                     </svg>
                  </button>
               </div>
            </div>
         )}
      </>
   );
};

export default Chatbot; 