import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { grantProcessSteps } from '../data/data';
import ProgressBar from '../components/ProgressBar';
import SimpleFlowDiagram from '../components/SimpleFlowDiagram';
import Chatbot from '../components/Chatbot';
import ChatService from '../services/ChatService';
import { LanguageCode } from '../lang/LanguageCode';

export default function RegistrationProcess() {
   const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)

  const handleChangeLanguage = () => {
      const newLanguage = currentLanguage === LanguageCode.ENGLISH ? LanguageCode.MELAYU : LanguageCode.ENGLISH;
      setCurrentLanguage(newLanguage);
      changeLanguage(newLanguage);
   }
   const navigate = useNavigate();
   const [steps, setSteps] = useState([]);
   const [activeStep, setActiveStep] = useState(null);
   const [chatbotOpen, setChatbotOpen] = useState(false);
   const [chatMessages, setChatMessages] = useState([
      ChatService.getInitialMessage(t)
   ]);
   const [newMessage, setNewMessage] = useState('');
   const [suggestedQuestions, setSuggestedQuestions] = useState([]);

   // Use grant process steps data when component mounts
   useEffect(() => {
      setSteps(grantProcessSteps);
   }, []);

   // Calculate overall progress
   const totalTasks = steps.reduce((acc, step) => {
      // Count details directly on the step
      let count = step.details ? step.details.length : 0;
      // Count details in nested steps if they exist
      if (step.nestedSteps) {
         count += step.nestedSteps.reduce((nestedAcc, nestedStep) =>
            nestedAcc + (nestedStep.details ? nestedStep.details.length : 0), 0);
      }
      return acc + count;
   }, 0);

   const completedTasks = steps.reduce((acc, step) => {
      // Count completed details directly on the step
      let count = step.details ? step.details.filter(detail => detail.completed).length : 0;
      // Count completed details in nested steps if they exist
      if (step.nestedSteps) {
         count += step.nestedSteps.reduce((nestedAcc, nestedStep) =>
            nestedAcc + (nestedStep.details ? nestedStep.details.filter(detail => detail.completed).length : 0), 0);
      }
      return acc + count;
   }, 0);

   const progressPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

   // Handle step click to view details
   const handleStepClick = (step) => {
      setActiveStep(step);
      // Don't close chatbot if open
      if (chatbotOpen) {
         updateChatbotContext(step);
      }
   };

   const updateChatbotContext = (step) => {
      if (!step) return;

      setSuggestedQuestions(ChatService.getFAQsForStep(step.id));

      // Add a contextual message to the chat
      setChatMessages(prevMessages => [
         ...prevMessages,
         ChatService.getContextUpdateMessage(step)
      ]);
   };

   const toggleTaskCompletion = (stepId, taskIndex) => {
      const updatedSteps = [...steps];

      // Find if this is a main step or nested step
      let stepIndex = updatedSteps.findIndex(s => s.id === stepId);
      let step = null;
      let isNested = false;

      if (stepIndex !== -1) {
         // Found as main step
         step = updatedSteps[stepIndex];
      } else {
         // Look in nested steps
         for (let i = 0; i < updatedSteps.length; i++) {
            if (!updatedSteps[i].nestedSteps) continue;

            const nestedIndex = updatedSteps[i].nestedSteps.findIndex(ns => ns.id === stepId);
            if (nestedIndex !== -1) {
               step = updatedSteps[i].nestedSteps[nestedIndex];
               stepIndex = i;
               isNested = true;
               break;
            }
         }
      }

      if (!step) return;

      // Toggle task completion
      if (isNested) {
         updatedSteps[stepIndex].nestedSteps.find(ns => ns.id === stepId).details[taskIndex].completed =
            !updatedSteps[stepIndex].nestedSteps.find(ns => ns.id === stepId).details[taskIndex].completed;

         // Check if all tasks in this nested step are completed
         const allNestedCompleted = updatedSteps[stepIndex].nestedSteps.find(ns => ns.id === stepId).details
            .every(detail => detail.completed);

         updatedSteps[stepIndex].nestedSteps.find(ns => ns.id === stepId).completed = allNestedCompleted;
      } else {
         updatedSteps[stepIndex].details[taskIndex].completed = !updatedSteps[stepIndex].details[taskIndex].completed;

         // Check if all tasks in this step are completed
         const allCompleted = updatedSteps[stepIndex].details.every(detail => detail.completed);
         updatedSteps[stepIndex].completed = allCompleted;
      }

      if (step.completed) {
         // Add celebration message to chatbot if open
         if (chatbotOpen) {
            setChatMessages(prev => [
               ...prev,
               ChatService.getCelebrationMessage(
                  step.title,
                  step.connections && step.connections.length > 0
               )
            ]);
         }
      }

      setSteps(updatedSteps);
   };

   const handleChatbotToggle = () => {
      setChatbotOpen(!chatbotOpen);

      // If opening the chatbot and a step is selected, update the context
      if (!chatbotOpen && activeStep) {
         setTimeout(() => updateChatbotContext(activeStep), 100);
      }
   };

   const handleSuggestedQuestionClick = (question) => {
      // Add the question as if the user had typed it
      setChatMessages(prev => [...prev, { sender: 'user', text: question }]);

      // Generate the response
      setTimeout(() => {
         let botResponse = t('botResponse');

         // Check if we have a predefined answer
         if (activeStep) {
            botResponse = ChatService.getResponseForQuestion(question, activeStep);
         }

         setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      }, 500);
   };

   const handleSendMessage = () => {
      if (!newMessage.trim()) return;

      // Add user message
      setChatMessages([...chatMessages, { sender: 'user', text: newMessage }]);

      // Generate bot response
      setTimeout(() => {
         const botResponse = ChatService.getResponseForQuestion(newMessage, activeStep);
         setChatMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      }, 500);

      setNewMessage('');
   };

   // Handle "Ask about this step" button click
   const handleAskAboutStepClick = () => {
      setChatbotOpen(true);
      updateChatbotContext(activeStep);
   };

   // Prepare a flat steps array for the diagram that includes nested steps
   const getAllSteps = () => {
      const flatSteps = [];

      steps.forEach(step => {
         flatSteps.push(step);
         if (step.nestedSteps && step.nestedSteps.length) {
            step.nestedSteps.forEach(nestedStep => {
               flatSteps.push(nestedStep);
            });
         }
      });

      return flatSteps;
   };

   return (
      <div className="w-full min-h-screen

      bg-gray-100
      font-sans p-4">
         <div className="max-w-screen-xl mx-auto">
            {/* Back to Chatbot Button */}
            <div className="mb-4 flex justify-between items-center">
               <button
                  onClick={() => navigate('/')}
                  className="flex items-center text-navyblue-600 hover:text-navyblue-800 font-medium"
               >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  {t('back')}
               </button>
               <button onClick={handleChangeLanguage}>
                  {currentLanguage === LanguageCode.MELAYU ? 'Inggeris' : 'Malay'}
               </button>
            </div>

            <h1 className="text-3xl font-bold text-navyblue-800 text-center mb-4">
               {t('title')}
            </h1>
            <p className="text-center text-gray-700 mb-6">
               {t('description')}
            </p>

            {/* Progress Bar */}
            <ProgressBar progressPercentage={progressPercentage} />

            {/* Process Flow Diagram using custom SimpleFlowDiagram */}
            <SimpleFlowDiagram
               steps={getAllSteps()}
               activeStep={activeStep}
               handleStepClick={handleStepClick}
               toggleTaskCompletion={toggleTaskCompletion}
               handleAskAboutStepClick={handleAskAboutStepClick}
            />



            {/* Chatbot */}
            <Chatbot
               chatbotOpen={chatbotOpen}
               activeStep={activeStep}
               chatMessages={chatMessages}
               suggestedQuestions={suggestedQuestions}
               newMessage={newMessage}
               setNewMessage={setNewMessage}
               handleSendMessage={handleSendMessage}
               handleSuggestedQuestionClick={handleSuggestedQuestionClick}
               handleChatbotToggle={handleChatbotToggle}
            />

            <p className="text-center text-gray-500 mt-8">
               {t('stepDetails.clickToView')}
            </p>
         </div>
      </div>
   );
} 