import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatService from '../services/ChatService';

const ChatbotPage = () => {
   const navigate = useNavigate();
   const [messages, setMessages] = useState([
      { sender: 'bot', text: 'Welcome to the NaviClear! I\'m here to help you with the application process. What would you like to know about the Digitalization Grant for E-commerce and Inventory Management?' }
   ]);
   const [inputValue, setInputValue] = useState('');
   const [isTyping, setIsTyping] = useState(false);
   const messagesEndRef = useRef(null);

   // Suggested questions for initial guidance
   const suggestedQuestions = [
      'What is the PMKS Digitalization Grant?',
      'Who is eligible to apply?',
      'How much grant funding can be obtained?',
      'I want to see the application process',
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
      if (question === 'I want to see the application process') {
         setTimeout(() => {
            setMessages(prev => [...prev, {
               sender: 'bot',
               text: 'Great, I\'ll show you the PMKS Digitalization Grant application process step by step.'
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

      if (questionLower.includes('what is') || questionLower.includes('what are') || questionLower.includes('digitalization grant')) {
         return 'The PMKS Digitalization Grant is a government initiative to help Micro, Small, and Medium Enterprises (PMKS) adopt digital solutions such as e-commerce and inventory management systems. It aims to enhance business productivity and competitiveness.';
      }

      if (questionLower.includes('eligible') || questionLower.includes('who') || questionLower.includes('eligibility')) {
         return 'Eligible businesses include valid Malaysian PMKS with at least 60% equity owned by Malaysian citizens, operational for at least 6 months (3 months for Sabah/Sarawak), and not blacklisted by any government or financial agency.';
      }

      if (questionLower.includes('value') || questionLower.includes('how much') || questionLower.includes('amount')) {
         return 'This is a 50:50 matching grant, where the government will fund 50% of the digital solution costs (E-commerce and/or Inventory), subject to certain maximum limits. For the latest information, please refer to the official guidelines.';
      }

      if (questionLower.includes('see') || questionLower.includes('process') || questionLower.includes('steps')) {
         return 'I can show you the application process visually. Click the "View Application Process" button to proceed to the step-by-step guide.';
      }

      return 'For more information about the PMKS Digitalization Grant, please click the "View Application Process" button to see the detailed guide or ask another specific question.';
   };

   return (
      <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-navyblue-100">
         {/* Header */}
         <div className="bg-navyblue-700 text-white p-4">
            <div className="container mx-auto">
               <h1 className="text-2xl font-bold">Welcome to NaviClear</h1>
               <p className="text-sm opacity-80">Virtual Assistant for Grant & Regulation</p>
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
                  placeholder="Type your question here..."
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
                  View Application Process
               </button>
            </div>
         </div>
      </div>
   );
};

export default ChatbotPage; 