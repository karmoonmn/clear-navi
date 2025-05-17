export const grantProcessSteps = [
  {
    id: "NODE_START",
    title: "START: Digitalisation Grant Application for MSMEs",
    connections: ["node1"],
    completed: false,
    number: 0,
  },
  {
    id: "node1",
    number: 1,
    title: "Phase 1: Eligibility Check",
    mainSummary:
        "Before proceeding, ensure your business (Aminah's Creative Batik) meets the basic eligibility criteria for the Digitalisation Grant for MSMEs.",
    detailedPoints: [
      "Valid MSME status in Malaysia (Micro, Small, or Medium).",
      "At least 60% equity owned by Malaysian citizens.",
      "Operating for at least six (6) months (or three (3) months for SMEs in Sabah/Sarawak).",
      "Annual revenue or full-time staff count in line with the current MSME definition.",
      "Not blacklisted by any financial institution or government agency.",
    ],
    details: [
      {
        step: "Refer to the Latest Official Guidelines (BSN/MDEC)",
        completed: false,
        link: "#placeholder_official_guidelines_url",
      },
      {
        step: "Use Online Eligibility Checker Tool (if available)",
        completed: false,
        link: "#placeholder_eligibility_checker_tool",
      },
    ],
    importantNotes: [
      "Eligibility criteria may be updated by the organizer.",
      "Each SME is only eligible to receive this grant once.",
    ],
    connections: ["node2"],
    completed: false,
  },
  {
    id: "node2",
    number: 2,
    title: "Phase 2: Select TSP",
    mainSummary:
        "Choose a valid Technology Solution Provider (TSP) listed by MDEC. Obtain a quotation for an E-commerce system and Inventory Management solution.",
    detailedPoints: [
      "Only expenses with MDEC-appointed TSPs are eligible for the grant.",
      "Identify TSPs that offer E-commerce solutions (e.g., website development, marketplace integration) AND/OR Inventory Management systems.",
      "Request at least one (1) detailed official quotation.",
    ],
    details: [
      {
        step: "Check the TSP Panel List on the MDEC Portal",
        completed: false,
        link: "#placeholder_mdec_tsp_list_url",
      },
      {
        step: "Contact several TSPs for discussion & demo (if needed).",
        completed: false,
      },
      {
        step: "Request Official Quotation (Ensure it covers E-commerce & Inventory scope).",
        completed: false,
      },
    ],
    importantNotes: [
      "The grant is a 50% matching or up to RM5,000, whichever is lower, for each SME.",
      "Choose a reputable TSP who understands Aminah’s Creative Batik’s needs.",
    ],
    connections: ["node3"],
    completed: false,
  },
  {
    id: "node3",
    number: 3,
    title: "Phase 3: Document Preparation",
    connections: ["node4"],
    completed: false,
    mainSummary:
        "Collect and prepare all required documents according to the official checklist. Ensure all copies are clear, complete, and up to date.",
    detailedPoints: [
      "Each document is important for verifying business information and application validity.",
      "Organize documents in digital format (PDF or high-quality image) for upload to BSN portal.",
    ],
    details: [
      { step: "Make a personalized document checklist based on official guide.", completed: false },
      { step: "Scan all physical documents into digital format.", completed: false },
      { step: "Clearly name digital files (e.g., AminahBatik_SSM_Cert.pdf).", completed: false },
    ],
    importantNotes: [
      "Incomplete or unclear documents may cause delays or rejection.",
    ],
    nestedSteps: [
      {
        id: "node31",
        number: 3.1,
        title: "3.1 SSM Certificate & Company Profile",
        mainSummary:
            "Provide a copy of your Business Registration Certificate from SSM and the latest Company Profile from MyData SSM or e-Info SSM.",
        detailedPoints: [
          "For Businesses (ROB): Form D (Registration Cert.) & Business Profile.",
          "For Companies (ROC): Certificate of Incorporation (formerly Form 9), Form 24, Form 49 & Company Profile.",
          "For LLPs: LLP Registration Certificate & Business Profile.",
          "Company Profile should contain current owner and address info.",
        ],
        details: [
          {
            step: "Obtain the latest Company Profile from MyData SSM.",
            completed: false,
            link: "https://www.mydata-ssm.com.my/",
          },
          {
            step: "Ensure all SSM certificate pages are fully scanned.",
            completed: false,
          },
        ],
        importantNotes: [
          "Make sure the SSM certificate is valid and not expired.",
          "Company name on the SSM cert must match the bank account and TSP quotation.",
        ],
        connections: ["node32"],
        completed: false,
      },
      {
        id: "node32",
        number: 3.2,
        title: "3.2 Bank Statement",
        mainSummary:
            "A copy of the company’s bank statements for the two (2) most recent months before the application date.",
        detailedPoints: [
          "Statement must show company name (Aminah's Creative Batik), account number, and bank name.",
          "All transactions must be clear and readable.",
          "Only current business accounts accepted. Personal accounts are not allowed.",
        ],
        details: [
          { step: "Download e-statements from company’s internet banking.", completed: false },
          { step: "Ensure both months are consecutive and latest.", completed: false },
        ],
        importantNotes: [
          "Account balance is not the main factor, but active transactions show ongoing business.",
        ],
        connections: ["node33"],
        completed: false,
      },
      {
        id: "node33",
        number: 3.3,
        title: "3.3 Director/Owner ID Copy",
        mainSummary:
            "Copy of MyKad (front and back) for ALL company directors or business owners (for Aminah's Creative Batik, likely just Puan Aminah).",
        detailedPoints: [
          "Ensure the copy is clear, not blurry, and both sides are scanned.",
          "For non-citizens (if minority ownership applies), a passport copy is needed.",
        ],
        details: [
          { step: "Scan ID card with good resolution.", completed: false },
        ],
        connections: ["node34"],
        completed: false,
      },
      {
        id: "node34",
        number: 3.4,
        title: "3.4 TSP Quotation",
        mainSummary:
            "Complete and official quotation from the selected Technology Solution Provider (TSP) for the E-commerce and Inventory Management system.",
        detailedPoints: [
          "Quotation must be from a valid TSP and addressed to Aminah’s Creative Batik.",
          "Clearly state scope of work, item/module cost breakdown, total amount, and quotation validity period.",
          "Include the TSP’s MDEC registration number (if available).",
        ],
        details: [
          { step: "Review quotation to ensure all information is complete before uploading.", completed: false },
        ],
        importantNotes: [
          "This is a crucial document to justify the requested grant amount.",
        ],
        completed: false,
      },
    ],
  },
  {
    id: "node4",
    number: 4,
    title: "Phase 4: Online Application (BSN)",
    mainSummary:
        "Once all supporting documents are ready, the Digitalisation Grant application must be submitted online via Bank Simpanan Nasional’s (BSN) official portal.",
    detailedPoints: [
      "You must register an account on the BSN portal (if not already registered).",
      "Carefully fill in the online application form.",
      "Upload all supporting documents in digital format (usually PDF, JPG).",
    ],
    details: [
      { step: "Prepare all digital files before starting the online application.", completed: false },
      {
        step: "Visit the correct BSN portal for grant application.",
        completed: false,
        link: "#placeholder_bsn_application_portal",
      },
      { step: "Save the application reference number after successful submission.", completed: false },
    ],
    importantNotes: [
      "The online process may take time, ensure stable internet connection.",
      "Double-check all filled-in information to avoid errors.",
    ],
    connections: ["node5"],
    completed: false,
  },
  {
    id: "node5",
    number: 5,
    title: "Phase 5: Evaluation & Decision",
    mainSummary:
        "BSN/related agency will review and evaluate your application. Evaluation duration may vary.",
    detailedPoints: [
      "The agency may contact you for additional information if needed.",
      "Results (approved or rejected) will be informed via email or portal.",
    ],
    details: [
      { step: "Check your email and BSN portal regularly for application status.", completed: false },
    ],
    connections: ["NODE_END"],
    completed: false,
  },
  {
    id: "NODE_END",
    title: "INITIAL APPLICATION PROCESS COMPLETE",
    connections: [],
    completed: false,
  },
];
