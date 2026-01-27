import { SlideContent, SlideType } from '../types';

export const slides: SlideContent[] = [
  {
    type: SlideType.TITLE,
    title: "Data Protection & Privacy",
    subtitle: "AGM Operational Playbook",
    mainText: "Compliance is not just a legal obligation—it is the currency of trust.",
    speakerNotes: "<strong>Script:</strong> Welcome. Today we are shifting our mindset. Data protection isn't just about avoiding fines; it's about maintaining the trust of our customers and protecting our colleagues. We will cover how we handle external customer data, how we manage internal employee information, and exactly what to do if things go wrong.",
    bullets: ["Operational Behaviours", "Incident Response", "Implementation Roadmap"]
  },
  {
    type: SlideType.BIG_NUMBER,
    title: "The Business Case",
    subtitle: "Why We Are Here",
    highlightStat: "KES 5M",
    highlightText: "Potential Administrative Penalty",
    bullets: [
      "<strong>Enforcement is Active:</strong> The ODPC is actively investigating and fining Kenyan organizations.",
      "<strong>Reputational Risk:</strong> Loss of customer trust often costs more than the fine itself.",
      "<strong>Personal Liability:</strong> Criminal sanctions exist for obstruction or gross negligence."
    ],
    footnotes: ["Source: ODPC Penalty Notices", "Source: Data Protection Act 2019"],
    speakerNotes: "The figure on the screen is real. 5 Million Shillings or 1% of turnover. But beyond the money, imagine the headline: 'Company X leaks customer data'. That is what we are here to prevent."
  },
  {
    type: SlideType.SECTION_TITLE,
    title: "Phase I: Protecting Our Customers",
    subtitle: "External Data Handling & Communication",
    mainText: "Our customers trust us with their identities. We must honor that trust in every interaction.",
    speakerNotes: "Let's start with the people who pay our bills: our customers. How do we handle their data on a daily basis?"
  },
  {
    type: SlideType.TWO_COLUMN,
    title: "The Rules of Engagement",
    subtitle: "Collecting & Using Customer Data",
    mainText: "We must adhere to strict principles when gathering information from the public. If you don't need it, don't ask for it.",
    columns: {
      leftTitle: "The Side-Hustle Rule (Purpose)",
      leftContent: [
        "<strong>Principle:</strong> Data collected for Purpose A cannot be used for Purpose B.",
        "<strong>Example:</strong> Collecting a phone number for delivery updates means you cannot use it for marketing calls.",
        "<strong>Action:</strong> Check the consent box. Did they explicitly say 'Yes' to marketing? If not, do not send."
      ],
      rightTitle: "The Nosy-Neighbor Rule (Minimization)",
      rightContent: [
        "<strong>Principle:</strong> Collect only the absolute minimum data required to perform the task.",
        "<strong>Example:</strong> Do not ask for 'Tribe' or 'Marital Status' if you just need to deliver a package.",
        "<strong>Action:</strong> Audit your forms. Remove any field that isn't legally or operationally necessary."
      ]
    },
    footnotes: ["DPA 2019: Principles of Data Protection"],
    speakerNotes: "Two simple rules to live by. 1. The Side Hustle Rule: Don't use data for things the customer didn't sign up for. 2. The Nosy Neighbor Rule: Stop asking for unnecessary details. It's a liability."
  },
  {
    type: SlideType.PROCESS_FLOW,
    title: "Communication Protocols",
    subtitle: "Confidentiality in Action",
    mainText: "Most breaches aren't hackers—they are employees sending emails to the wrong people.",
    steps: [
      { title: "Mass Communication", desc: "Never use 'CC' for multiple clients. Use 'BCC' or, preferably, our CRM tools which mask recipients automatically." },
      { title: "File Transfers", desc: "Never send customer databases via WhatsApp or personal email. Use approved, encrypted company channels (SharePoint/Teams)." },
      { title: "The 'Check Twice' Rule", desc: "Before hitting send on any email containing PII, pause for 5 seconds. Verify the recipient and the attachment." }
    ],
    speakerNotes: "The 'CC' vs 'BCC' mistake is the most common cause of reported breaches. If you CC 500 customers, you have just breached the data of 500 people. Use the tools provided."
  },
  {
    type: SlideType.INTERACTIVE_QUIZ,
    title: "Scenario Challenge: External Customers",
    subtitle: "Breach or Safe?",
    speakerNotes: "Let's test your judgment on customer scenarios. Click to reveal the verdict.",
    quizItems: [
      {
        scenario: "Marketing sends an SMS blast to existing customers promoting a similar product, including an 'Opt-Out' link.",
        verdict: "SAFE",
        explanation: "This is generally 'Soft Opt-in'. Allowed if they are existing customers, the product is similar, and they can easily opt-out."
      },
      {
        scenario: "A sales agent downloads the client list to a USB drive to work from a cyber café over the weekend.",
        verdict: "BREACH",
        explanation: "Unsecured transfer to an uncontrolled environment. High risk of loss or theft."
      },
      {
        scenario: "You accidentally email a client's contract to another client with the same first name.",
        verdict: "BREACH",
        explanation: "This is a data breach involving unauthorized disclosure. It must be reported internally immediately."
      },
      {
        scenario: "A customer calls asking for their spouse's transaction history for 'family budgeting'.",
        verdict: "BREACH",
        explanation: "You cannot disclose data to a third party without explicit written consent from the data subject, even if they are married."
      }
    ]
  },
  {
    type: SlideType.SECTION_TITLE,
    title: "Phase II: Protecting Our People",
    subtitle: "Internal Data & Operational Security",
    mainText: "We hold sensitive data about our colleagues. This requires an even higher standard of care.",
    speakerNotes: "Now let's look inward. We hold health data, financial data, and family data of our own colleagues. How do we protect each other?"
  },
  {
    type: SlideType.TWO_COLUMN,
    title: "Internal Data Handling",
    subtitle: "HR, Finance & Administration",
    mainText: "Internal data often includes 'Sensitive Personal Data' which carries higher risk.",
    columns: {
      leftTitle: "Sensitive Data (The Vault)",
      leftContent: [
        "<strong>Health Records:</strong> Sick leave forms, insurance claims.",
        "<strong>Financials:</strong> Payslips, KRA PINs, bank details.",
        "<strong>Biometrics:</strong> Fingerprint data for access control."
      ],
      rightTitle: "Required Behaviours",
      rightContent: [
        "<strong>Digital Lock:</strong> Payroll and Health folders must be restricted to specific authorized personnel only.",
        "<strong>Clean Desk:</strong> Never leave payslips or contracts on printers or desks.",
        "<strong>Screen Lock:</strong> Auto-lock set to 30 seconds for HR/Finance. Win+L every time you stand up."
      ]
    },
    footnotes: ["DPA 2019: Sensitive Personal Data Categories"],
    speakerNotes: "Treat colleague data like a vault. If you work in HR or Finance, you are a custodian of secrets. Do not discuss colleague health at the water cooler—that is a privacy violation."
  },
  {
    type: SlideType.GRID_CARDS,
    title: "Operational Security (OpSec)",
    subtitle: "Closing the Backdoors",
    cards: [
      {
        title: "Shadow IT",
        items: [
          "<strong>Rule:</strong> Do not use personal Google Drives or Dropboxes for company work.",
          "<strong>Why:</strong> We lose control of retention and security.",
          "<strong>Alt:</strong> Use the official company SharePoint/OneDrive."
        ]
      },
      {
        title: "The WhatsApp Trap",
        items: [
          "<strong>Rule:</strong> No PII or passwords via WhatsApp.",
          "<strong>Why:</strong> If a phone is lost/stolen, the data is compromised.",
          "<strong>Alt:</strong> Use Teams or encrypted email for sensitive files."
        ]
      },
      {
        title: "Vendor Management",
        items: [
          "<strong>Rule:</strong> No data sharing without a Data Processing Agreement (DPA).",
          "<strong>Why:</strong> If the vendor leaks it, we are liable.",
          "<strong>Alt:</strong> Check with Legal before sending data to consultants."
        ]
      }
    ],
    speakerNotes: "Shadow IT is a silent killer. We know WhatsApp is convenient, but it mixes personal and business data dangerously. Keep company secrets on company apps."
  },
  {
    type: SlideType.INTERACTIVE_QUIZ,
    title: "Scenario Challenge: Internal Ops",
    subtitle: "Breach or Safe?",
    speakerNotes: "Time for round two. Internal scenarios.",
    quizItems: [
      {
        scenario: "HR announces a colleague is out sick with 'Violent diarrhea' in the general WhatsApp group to explain their absence.",
        verdict: "BREACH",
        explanation: "Health status is Sensitive Personal Data. 'Out sick' is fine; specifying the disease requires consent."
      },
      {
        scenario: "You find a USB drive in the parking lot and plug it into your laptop to see who owns it.",
        verdict: "BREACH",
        explanation: "Never plug unknown drives in. It could be malware. Hand it to IT Security."
      },
      {
        scenario: "Finance requires a 2-factor authentication code to access the payroll system.",
        verdict: "SAFE",
        explanation: "This is a security best practice (MFA) and is highly encouraged."
      },
      {
        scenario: "A manager keeps a folder of CVs of unsuccessful applicants from 3 years ago 'just in case'.",
        verdict: "BREACH",
        explanation: "Violation of Storage Limitation. If the recruitment period is over and no consent to retain was given, delete them."
      }
    ]
  },
  {
    type: SlideType.SECTION_TITLE,
    title: "Phase III: Incident Response",
    subtitle: "The 72-Hour Rule",
    mainText: "Speed is everything. It is better to report a false alarm than to hide a real fire.",
    speakerNotes: "We've covered prevention. Now, what happens when things go wrong? Because they will."
  },
  {
    type: SlideType.PROCESS_FLOW,
    title: "The 72-Hour Countdown",
    subtitle: "Mandatory Reporting Timeline",
    mainText: "The clock starts the moment we become 'aware' of a potential breach.",
    steps: [
      { title: "0 Hours: Detection", desc: "You notice something wrong (lost laptop, strange email, file locked by ransomware). DO NOT PANIC. Report to DPO/IT immediately." },
      { title: "2-24 Hours: Assessment", desc: "IT & Legal assess the scope. Is it personal data? Is it high risk? We must contain it (disconnect, reset passwords)." },
      { title: "< 72 Hours: Notification", desc: "If there is a risk to rights/freedoms, we MUST report to the ODPC. We also notify affected individuals if risk is high." }
    ],
    speakerNotes: "72 Hours. That includes weekends. If you find a breach on Friday night, do not wait until Monday morning. Call the emergency line."
  },
  {
    type: SlideType.TWO_COLUMN,
    title: "How to Report",
    subtitle: "Your Responsibility",
    mainText: "We have a 'No Blame' reporting culture. We punish hiding breaches, not reporting them.",
    columns: {
      leftTitle: "What to Report",
      leftContent: [
        "Sent email to wrong recipient.",
        "Lost or stolen company device.",
        "System lockout or ransomware.",
        "Unusual database activity.",
        "Vendor security failure."
      ],
      rightTitle: "Who to Contact",
      rightContent: [
        "<strong>Primary:</strong> DPO@mediantinternational.com",
        "<strong>Urgent:</strong> IT Security Hotline (Ext 1234)",
        "<strong>External:</strong> Do not speak to press/social media. Refer all inquiries to Legal."
      ]
    },
    footnotes: ["Internal Policy: Incident Management Standard"],
    speakerNotes: "Memorize the DPO email. If you make a mistake, tell us. We can fix a mistake. We cannot fix a cover-up."
  },
  {
    type: SlideType.SECTION_TITLE,
    title: "Phase IV: Implementation",
    subtitle: "The Road Ahead",
    mainText: "Knowledge without action is useless. Here is our plan for the next quarter.",
    speakerNotes: "So, what do we do when we leave this room?"
  },
  {
    type: SlideType.PROCESS_FLOW,
    title: "90-Day Roadmap",
    subtitle: "From Compliance to Culture",
    steps: [
      { title: "Month 1: Foundation", desc: "MFA enforcement on all accounts. Clean-desk policy active. DPO registration completed." },
      { title: "Month 2: Clean Up", desc: "Data inventory & mapping. Deletion of legacy files (Statutory retention check). Vendor contract review." },
      { title: "Month 3: Testing", desc: "Tabletop breach simulation exercise. Full departmental audit. refresher training." }
    ],
    speakerNotes: "We are moving fast. By Month 3, I want us to simulate a breach and see if our 72-hour process actually works."
  },
  {
    type: SlideType.GRID_CARDS,
    title: "Departmental Checklists",
    subtitle: "Your Immediate Next Steps",
    cards: [
      {
        title: "Sales & Marketing",
        items: [
          "Review CRM permissions.",
          "Check 'Opt-In' status of lists.",
          "Stop using personal email for leads."
        ]
      },
      {
        title: "HR & Admin",
        items: [
          "Lock sensitive filing cabinets.",
          "Enforce 'Clean Desk' policy.",
          "Audit employee data access logs."
        ]
      },
      {
        title: "IT & Security",
        items: [
          "Verify Backup integrity.",
          "Enforce 30s screen lock.",
          "Deploy USB blocking policy."
        ]
      }
    ],
    speakerNotes: "Take a picture of this slide. This is your homework."
  },
  {
    type: SlideType.CLOSING,
    title: "Commitment to Trust",
    mainText: "Data Protection is not a department. It is a behavior.",
    highlightText: "Trust is our currency.",
    bullets: [
      "Report Incidents: dpo@mediantinternational.com",
      "Resource Hub: Intranet/Privacy",
      "Regulator: odpc.go.ke"
    ],
    speakerNotes: "Thank you for your time. Let's go out there and build a company that deserves the trust of its customers."
  }
];
