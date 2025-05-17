// Predefined responses for common questions about each step
const stepResponses = {
  A: {
    "What documents do I need?":
      "For name reservation, you'll need to prepare your identification documents, business details, and proposed company name.",
    "How do I check name availability?":
      "You can search for name availability through the MyCoID 2016 portal before submitting your reservation.",
    "How much is the reservation fee?":
      "The name reservation fee is RM50 and is valid for 30 days once approved.",
    "How long does name approval take?":
      "Name approval typically takes 1-3 business days depending on the complexity and uniqueness of your proposed name.",
  },
  B: {
    "What documents are needed for incorporation?":
      "You'll need director and shareholder details, company address, business activity codes (MSIC), and consent forms.",
    "Do I need a company constitution?":
      "You can either prepare your own company constitution or adopt the standard one provided under the Companies Act 2016.",
    "Who can be a company director?":
      "Directors must be at least 18 years old, not bankrupt, and not convicted of any relevant offenses under the Companies Act.",
    "What is the Section 14 declaration?":
      "This is a declaration of compliance that confirms all requirements for registration have been met, typically signed by your company secretary.",
  },
  C: {
    "How do I submit the incorporation application?":
      "Applications are submitted through the MyCoID portal by filling in the Superform and uploading all supporting documents.",
    "How much is the incorporation fee?":
      "The incorporation fee for a Sdn. Bhd. company is RM1,000.",
    "What payment methods are accepted?":
      "MyCoID accepts online banking, credit/debit cards, and other electronic payment methods.",
    "How long does approval take?":
      "SSM typically processes applications within 1-3 working days if all documents are in order.",
  },
  D: {
    "What is the Notice of Registration?":
      "This document serves as your incorporation certificate and contains your company registration number.",
    "How do I appoint a company secretary?":
      "You must appoint a licensed company secretary within 30 days of incorporation. They can be found through professional associations.",
    "What documents do I need for a corporate bank account?":
      "You'll need the Notice of Registration, company constitution, director IDs, and board resolution authorizing the account opening.",
    "How do I register for taxes?":
      "Register with LHDN for a tax file number within 3 months of incorporation.",
  },
  E: {
    "Do I need to register for SST?":
      "You only need to register for SST if your annual revenue exceeds RM500,000 for taxable goods or services.",
    "What is Malaysia Digital?":
      "Malaysia Digital (formerly MSC) provides incentives for tech companies. If eligible, you can apply after incorporation.",
    "What annual compliance is required?":
      "Companies must hold Annual General Meetings, file annual returns with SSM, and prepare audited financial statements.",
    "How do I set up accounting systems?":
      "You should implement proper accounting and record-keeping systems, either using software or through an accounting service provider.",
  },
};

const ChatService = {
  getResponseForQuestion: async (userMessage, activeStep) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          step: activeStep?.id || null,
        }),
      });

      const data = await response.json();
      return data.reply;
    } catch (err) {
      console.error("Error calling backend:", err);
      return "Sorry, something went wrong. Try again later.";
    }
  },


  getFAQsForStep: (stepId) => {
    return stepResponses[stepId] ? Object.keys(stepResponses[stepId]) : [];
  },

  getInitialMessage: () => {
    return {
      sender: "bot",
      text: "Hi there! Need help with your company registration? Click on any step in the process diagram or select a common question below.",
    };
  },

  getContextUpdateMessage: (step) => {
    return {
      sender: "bot",
      text: `You're now viewing "${step.id}: ${step.title}". What would you like to know about this step?`,
      isContextUpdate: true,
    };
  },

  getCelebrationMessage: (stepTitle, hasNextSteps) => {
    return {
      sender: "bot",
      text: `🎉 Great job! You've completed all tasks for "${stepTitle}". ${
        hasNextSteps
          ? "You're ready to move to the next step!"
          : "You've reached the end of this process path!"
      }`,
    };
  },
};

export default ChatService;
