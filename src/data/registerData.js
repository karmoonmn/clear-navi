export const registrationSteps = [
  {
    id: "A",
    title: "Name Reservation",
    description:
      "Choose and reserve your company name with SSM via the MyCoID portal.",
    details: [
      { text: "Login or register on MyCoID 2016 portal", completed: false },
      { text: "Search and verify name availability", completed: false },
      { text: "Submit name reservation application", completed: false },
      { text: "Pay RM50 reservation fee", completed: false },
      {
        text: "Receive name approval confirmation (valid for 30 days)",
        completed: false,
      },
    ],
    position: { x: 100, y: 150 },
    connections: ["B"],
    completed: false,
  },
  {
    id: "B",
    title: "Prepare Incorporation Documents",
    description: "Gather and prepare necessary documents for incorporation.",
    details: [
      {
        text: "Details of directors and shareholders (IC or passport)",
        completed: false,
      },
      {
        text: "Company address and business activity codes (MSIC)",
        completed: false,
      },
      {
        text: "Consent to act as director (Section 201 form)",
        completed: false,
      },
      {
        text: "Declaration of compliance by company secretary/lodger (Section 14)",
        completed: false,
      },
      {
        text: "Optional: Prepare company constitution (or adopt standard)",
        completed: false,
      },
    ],
    position: { x: 300, y: 150 },
    connections: ["C"],
    completed: false,
  },
  {
    id: "C",
    title: "Submit Incorporation Application",
    description: "Apply for incorporation online via the MyCoID portal.",
    details: [
      {
        text: "Fill in Superform (Application for Registration)",
        completed: false,
      },
      { text: "Upload all supporting documents", completed: false },
      {
        text: "Pay incorporation fee (RM1,000 for Sdn. Bhd.)",
        completed: false,
      },
      { text: "Submit application through MyCoID", completed: false },
      {
        text: "Wait for SSM approval (usually 1–3 working days)",
        completed: false,
      },
    ],
    position: { x: 500, y: 150 },
    connections: ["D"],
    completed: false,
  },
  {
    id: "D",
    title: "Post-Incorporation Setup",
    description: "Complete post-registration formalities and start operations.",
    details: [
      {
        text: "Receive Notice of Registration (acts as incorporation certificate)",
        completed: false,
      },
      {
        text: "Appoint licensed company secretary within 30 days",
        completed: false,
      },
      {
        text: "Open corporate bank account with necessary documents",
        completed: false,
      },
      {
        text: "Register with LHDN for tax file (within 3 months)",
        completed: false,
      },
      {
        text: "Register for EPF, SOCSO, and EIS if hiring employees",
        completed: false,
      },
    ],
    position: { x: 700, y: 150 },
    connections: ["E"],
    completed: false,
  },
  {
    id: "E",
    title: "Optional Registrations and Compliance",
    description: "Optional steps to ensure business growth and compliance.",
    details: [
      {
        text: "Register for SST if revenue > RM500k for taxable goods/services",
        completed: false,
      },
      {
        text: "Apply for Malaysia Digital or other grants if eligible",
        completed: false,
      },
      { text: "Setup accounting and record-keeping systems", completed: false },
      { text: "Create company website and online presence", completed: false },
      {
        text: "Ensure annual compliance (AGM, filings, audit)",
        completed: false,
      },
    ],
    position: { x: 900, y: 150 },
    connections: [],
    completed: false,
  },
];
