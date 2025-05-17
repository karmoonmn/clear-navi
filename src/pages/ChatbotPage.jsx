import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ChatbotPage = () => {
   const { t } = useTranslation();
   const navigate = useNavigate();
   const [messages, setMessages] = useState([
      { sender: 'bot', text: t('chatbotInitialMessage') }
   ]);
   const [inputValue, setInputValue] = useState('');
   const [isTyping, setIsTyping] = useState(false);
   const messagesEndRef = useRef(null);

   // Suggested questions for initial guidance
   const suggestedQuestions = [
      t('chatbotQuestion1'),
      t('chatbotQuestion2'),
      t('chatbotQuestion3'),
      t('chatbotQuestion4'),
   ];

   useEffect(() => {
      scrollToBottom();
   }, [messages]);

   const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
   };

   const handleSendMessage = (e) => {
      e.preventDefault();
      if (!inputValue.trim()) return;

      // Add user message
      setMessages(prev => [...prev, { sender: 'user', text: inputValue }]);
      setInputValue('');
      setIsTyping(true);

      // Simulate AI response with a delay
      setTimeout(() => {
         const response = getAIResponse(inputValue);
         setMessages(prev => [...prev, { sender: 'bot', text: response }]);
         setIsTyping(false);
      }, 1000);
   };

   const handleSuggestedQuestion = (question) => {
      setMessages(prev => [...prev, { sender: 'user', text: question }]);
      setIsTyping(true);

      // If user wants to see the process, navigate there
      if (question === t('chatbotQuestion4')) {
         setTimeout(() => {
            setMessages(prev => [...prev, {
               sender: 'bot',
               text: t('chatbotQuestion4Answer')
            }]);
            setTimeout(() => navigate('/registration'), 1500);
         }, 1000);
         return;
      }

      // Regular question handling
      setTimeout(() => {
         const response = getAIResponse(question);
         setMessages(prev => [...prev, { sender: 'bot', text: response }]);
         setIsTyping(false);
      }, 1000);
   };

   const getAIResponse = (question) => {
      // Simple response logic - in a real app, this would be more sophisticated
      const questionLower = question.toLowerCase();

      if (questionLower.includes(t('whatIs')) || questionLower.includes(t('whatAre')) || questionLower.includes(t('digitalizationGrant'))) {
         return t('chatbotResponseWhatIs');
      }

      if (questionLower.includes(t('eligible')) || questionLower.includes(t('who')) || questionLower.includes(t('eligibility'))) {
         return t('chatbotResponseEligibility');
      }

      if (questionLower.includes(t('value')) || questionLower.includes(t('how much')) || questionLower.includes(t('amount'))) {
         return t('chatbotResponseValue');
      }

      if (questionLower.includes(t('see')) || questionLower.includes(t('process')) || questionLower.includes(t('steps'))) {
         return t('chatbotResponseProcess');
      }

      if (questionLower.includes("milk tea")) {
         return "Nice! Opening a milk tea shop sounds delicious and fun! Do you already have a business plan?";
      }

      if (questionLower.includes("business plan")) {
         return "That's a great start. Are you planning to go online or use any digital tools to manage your business?";
      }

      if (
         questionLower.includes("grant") ||
         questionLower.includes("government help") ||
         questionLower.includes("digitalisation")
      ) {
         return "You might want to check out the Geran Digitalisasi PMKS! It can cover up to 50% or RM5,000 of your digital expenses.";
      }

      if (questionLower.includes("how to apply")) {

         setTimeout(() => {
            setMessages(prev => [...prev, {
               sender: 'bot',
               text: t('chatbotQuestion4Answer')
            }]);
            setTimeout(() => navigate('/registration'), 1500);
         }, 2000);


         return ''

      }

      // return t('chatbotResponseDefault');
   };

   return (
      <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-navyblue-100">
         {/* Header */}
         <div className="bg-navyblue-700 text-white p-4">
            <div className="container mx-auto">
               <h1 className="text-2xl font-bold">{t('chatbotGreeting')}</h1>
               <p className="text-sm opacity-80">{t('chatbotTitle')}</p>
            </div>
         </div>

         {/* Chat Container */}
         <div className="flex-1 overflow-hidden flex flex-col container mx-auto max-w-3xl px-4 py-6">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto mb-4">
               <div className="space-y-4">
                  {messages.map((message, index) => (
                     <div
                        key={index}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                     >
                        <div
                           className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user'
                              ? 'bg-navyblue-600 text-white rounded-tr-none'
                              : 'bg-white text-gray-800 shadow-md rounded-tl-none'
                              }`}
                        >
                           {message.text}
                        </div>
                     </div>
                  ))}

                  {isTyping && (
                     <div className="flex justify-start">
                        <div className="bg-white p-3 rounded-lg shadow-md rounded-tl-none">
                           <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                           </div>
                        </div>
                     </div>
                  )}

                  <div ref={messagesEndRef} />
               </div>
            </div>

            {/* Suggested Questions */}
            <div className="mb-4 flex flex-wrap gap-2">
               {suggestedQuestions.map((question, index) => (
                  <button
                     key={index}
                     onClick={() => handleSuggestedQuestion(question)}
                     className="bg-navyblue-100 text-navyblue-700 px-3 py-1.5 rounded-full text-sm hover:bg-navyblue-200 transition-colors"
                  >
                     {question}
                  </button>
               ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="flex gap-2">
               <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t('questionPlaceholder')}
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navyblue-500"
               />
               <button
                  type="submit"
                  className="bg-navyblue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-navyblue-700"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
               </button>
            </form>

            {/* View Process Button */}
            <div className="mt-4 flex justify-center">
               <button
                  onClick={() => navigate('/registration')}
                  className="bg-navyblue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-navyblue-700 transition-colors"
               >
                  {t('chatbotViewApplicationProcess')}
               </button>
            </div>
         </div>
      </div>
   );
};

export default ChatbotPage; 