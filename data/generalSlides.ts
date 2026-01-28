import { SlideContent, SlideType } from "../types";

export const generalSlides: SlideContent[] = [
  {
    type: SlideType.TITLE,
    title: "Zero Trust: A Lifestyle",
    subtitle: "General Security Awareness",
    mainText: "Security doesn't stop when you badge out. It travels with you.",
    speakerNotes:
      "<strong>Script:</strong> Welcome to the General Awareness session. In the AGM deck, we talked about compliance. Here, we talk about survival. Hackers don't just target 'The Company'. They target YOU—your habits, your curiosity, and your trust. This session covers how to stay safe at work, at home, and in the coffee shop.",
    bullets: ["Social Engineering", "Physical Security", "Digital Hygiene"],
  },
  {
    type: SlideType.BIG_NUMBER,
    title: "The Human Element",
    subtitle: "The Weakest Link",
    highlightStat: "95%",
    highlightText: "of cybersecurity breaches are caused by human error.",
    bullets: [
      "<strong>Phishing:</strong> 3.4 billion malicious emails are sent daily.",
      "<strong>Password Reuse:</strong> 65% of people use the same password for multiple accounts.",
      "<strong>Speed:</strong> It takes <20 minutes for a hacker to move from a compromised laptop to the server.",
    ],
    footnotes: ["Source: World Economic Forum", "Source: IBM Security Report"],
    speakerNotes:
      "We spend millions on firewalls, but the easiest way into our network is through a helpful employee who holds the door open for a stranger or clicks a link because they thought it was from HR.",
  },
  {
    type: SlideType.SECTION_TITLE,
    title: "Phase I: Social Engineering",
    subtitle: "Hacking the Human Mind",
    mainText: "Attackers don't break in; they are invited in. They manipulate fear, urgency, and curiosity.",
    speakerNotes: "Social engineering is the art of manipulation. It's not code; it's psychology. Attackers are behavioral psychologists with bad intentions."
  },
  {
    type: SlideType.CONTENT_SLIDE,
    title: "What is Social Engineering?",
    subtitle: "The Art of Human Hacking",
    mainText: "Social engineering is psychological manipulation used to trick people into divulging confidential information or performing actions that compromise security.",
    bullets: [
      "It exploits human psychology, not technical vulnerabilities",
      "Attackers study human behavior patterns and decision-making",
      "No system is secure if humans can be manipulated",
      "It's the #1 attack vector because it works"
    ],
    speakerNotes: "Before we dive into specific tactics, let's understand what we're dealing with. Social engineering isn't about clever code—it's about understanding how humans think, react, and make decisions under pressure."
  },
  {
    type: SlideType.SECTION_TITLE,
    title: "How Attackers Manipulate You",
    subtitle: "Fear, Urgency, and Curiosity",
    mainText: "Every social engineering attack exploits at least one of these core human emotions.",
    speakerNotes: "Attackers don't break in; they are invited in. How? By manipulating three fundamental human responses. Let's break each one down in detail."
  },
  {
    type: SlideType.CONTENT_SLIDE,
    title: "Weaponizing Fear",
    subtitle: "The Threat Manipulation",
    image: "/images/phish1.png",
    mainText: "Fear bypasses rational thinking. When scared, people act first and think later.",
    bullets: [
      "<strong>Fear of Loss:</strong> 'Your account will be closed,' 'You'll lose access'",
      "<strong>Fear of Authority:</strong> 'The CEO is asking,' 'Compliance requires this'",
      "<strong>Live Example:</strong> Notice the threat of 'Your email will stop working in 72 hours'."
    ],
    speakerNotes: "Fear is the most powerful tool in an attacker's arsenal. Look at this real example received by a team member. It threatens an immediate loss of service to force a click."
  },
  {
    type: SlideType.CASE_STUDY,
    title: "Case Study: The KRA Scam",
    subtitle: "How Fear Cost Kenyans Millions",
    caseStudy: {
      scenario: "In 2023, thousands of Kenyans received official-looking emails claiming they owed KRA back taxes with threats of asset seizure and arrest. The emails looked legitimate, used KRA logos, and referenced real tax laws.",
      whatHappened: [
        "Victims clicked links leading to fake KRA portals",
        "They entered their KRA PINs and banking details to 'verify' their accounts",
        "Within hours, their bank accounts were drained",
        "Total losses exceeded KES 150 million"
      ],
      redFlags: [
        "KRA never sends payment links via email",
        "Official KRA emails come from @kra.go.ke, not @kra-portal.com",
        "KRA gives 30+ days notice, not '24 hours'"
      ],
      lesson: "Fear makes you blind. Always pause, verify through official channels, and never click links in threatening emails."
    },
    speakerNotes: "This actually happened. Professional people handed over their life savings because they were scared. The attackers weaponized the fear of the taxman."
  },
  {
    type: SlideType.CONTENT_SLIDE,
    title: "The Urgency Trap",
    subtitle: "Why Deadlines Work Against You",
    image: "/images/phish3.png",
    mainText: "Urgency removes your ability to verify. Attackers know you won't fact-check if you're racing against time.",
    bullets: [
      "<strong>Time Pressure:</strong> 'Respond within 1 hour,' 'Act now'",
      "<strong>Emergency Language:</strong> 'URGENT,' 'CRITICAL,' 'IMMEDIATE ATTENTION'",
      "<strong>Live Example:</strong> A fake password expiry notice forcing you to 'Keep My Current Password' via a malicious link."
    ],
    speakerNotes: "Legitimate IT teams and companies don't create artificial time bombs. This real-life attack uses a countdown to password expiry to bypass your skepticism."
  },
  {
    type: SlideType.CASE_STUDY,
    title: "Case Study: The CEO Email Scam",
    subtitle: "How Urgency Cost a Company $2.4M",
    caseStudy: {
      scenario: "A finance manager received an email from what appeared to be the CEO's address at 4:47 PM on a Friday asking for an urgent wire transfer to finalize a merger.",
      whatHappened: [
        "The manager saw 'CEO' and 'urgent' and didn't want to delay a major deal",
        "She initiated the $2.4M wire transfer",
        "The email was spoofed; money went to a criminal account",
        "The money was never recovered"
      ],
      redFlags: [
        "Slight variation in email domain (company-global.com vs company.co.ke)",
        "No wire transfer should be initiated via email alone",
        "CEO would never prohibit verification calls"
      ],
      lesson: "No multimillion-dollar deal happens via a single unsolicited email with a countdown clock."
    },
    speakerNotes: "This is Business Email Compromise. The attacker timed it for Friday evening when people are tired and want to go home."
  },
  {
    type: SlideType.CONTENT_SLIDE,
    title: "Curiosity Kills More Than Cats",
    subtitle: "The Bait You Can't Resist",
    mainText: "Humans are wired to seek information. Attackers exploit this relentlessly.",
    bullets: [
      "<strong>Mystery Subject Lines:</strong> 'Is this you?,' 'Look what I found'",
      "<strong>Personal Relevance:</strong> 'Your name came up in a conversation'",
      "<strong>Exclusive Access:</strong> 'Private document,' 'Confidential file'",
      "<strong>Gossip & Drama:</strong> 'Office scandal,' 'Who got fired?'"
    ],
    speakerNotes: "Curiosity isn't rational. You know you shouldn't click, but... what if? That's all the attacker needs."
  },
  {
    type: SlideType.CASE_STUDY,
    title: "Case Study: The USB Drop Attack",
    subtitle: "When Curiosity Breached a Bank",
    caseStudy: {
      scenario: "A major bank suffered a ransomware attack after an employee plugged in a USB drive found in the parking lot labeled 'Employee Salaries 2022 - CONFIDENTIAL'.",
      whatHappened: [
        "Attackers scattered 20 weaponized USB drives around the campus",
        "An employee plugged one into their work laptop to see the salaries",
        "Within 4 hours, 300+ workstations were encrypted",
        "The bank paid $750,000 in Bitcoin to decrypt systems"
      ],
      redFlags: [
        "HR doesn't store salary data on random USB drives in parking lots",
        "Company policy explicitly forbids unknown USB devices"
      ],
      lesson: "If it's designed to make you curious, it's designed to make you click. Hand found devices to security."
    },
    speakerNotes: "USB drops have an 80% success rate in studies. We're human; we see 'confidential' and we want to know."
  },
  {
    type: SlideType.CONTENT_SLIDE,
    title: "The Perfect Storm",
    subtitle: "When Layers Combine",
    image: "/images/phish2.png",
    mainText: "The most sophisticated attacks layer fear, urgency, and curiosity into a single message.",
    bullets: [
      "<strong>FEAR:</strong> 'Avoid account restrictions.'",
      "<strong>URGENCY:</strong> 'Within 24 hours.'",
      "<strong>CURIOSITY:</strong> 'Verifying email addresses associated with compliance.'",
      "<strong>REAL ATTACK:</strong> This email was sent to our info@ address to harvest credentials."
    ],
    speakerNotes: "Notice how this real-world example uses 'Regulatory Compliance' to sound official, '24 hours' to rush you, and 'Avoid restrictions' to scare you into clicking."
  },
  {
    type: SlideType.GRID_CARDS,
    title: "Expert Advice: Google Safety",
    subtitle: "Protect Your Digital Life",
    cards: [
      {
        title: "Account Security",
        items: [
          "Use a strong, unique password for every account.",
          "Enable 2nd-Step Verification (2SV).",
          "Perform a periodic Google Security Checkup."
        ]
      },
      {
        title: "Browse Safely",
        items: [
          "Check for 'https://' and the lock icon.",
          "Don't ignore browser warnings about unsafe sites.",
          "Keep your Chrome browser updated."
        ]
      },
      {
        title: "Communication",
        items: [
          "Be skeptical of unsolicited messages.",
          "Don't share private info in response to emails.",
          "Report phishing emails immediately."
        ]
      }
    ],
    speakerNotes: "Google's safety tips emphasize that security starts with strong authentication and constant vigilance when browsing."
  },
  {
    type: SlideType.GRID_CARDS,
    title: "Kaspersky's Top Rules",
    subtitle: "Preemptive Safety Essentials",
    cards: [
      {
        title: "Personal Data",
        items: [
          "Keep professional and personal data separate.",
          "Be cautious about what you share on social media.",
          "Use a Password Manager."
        ]
      },
      {
        title: "Network & Devices",
        items: [
          "Avoid using public Wi-Fi for sensitive tasks.",
          "Always use a VPN.",
          "Keep all software and OS updated."
        ]
      },
      {
        title: "External Risks",
        items: [
          "Never click on suspicious links or attachments.",
          "Be wary of 'too good to be true' offers.",
          "Disable auto-run on USB devices."
        ]
      }
    ],
    speakerNotes: "Kaspersky's research highlights the importance of separating work and life, and never trusting public networks."
  },
  {
    type: SlideType.INTERACTIVE_QUIZ,
    title: "Challenge: Spot the Phish",
    subtitle: "Real-Life Scenarios",
    speakerNotes: "Let's play. I'll show you a message. You tell me if it's safe or a trap.",
    quizItems: [
      {
        scenario: "SMS: 'KPLC: Your meter 1456... will be disconnected in 2 hours. Pay KES 500 via M-PESA to Till 888999.'",
        verdict: "BREACH",
        explanation: "Official utilities never demand instant payment to personal Tills via SMS."
      },
      {
        scenario: "Email from CEO: 'I am in a meeting. I need you to buy 5 iTunes gift cards. I will reimburse you.'",
        verdict: "BREACH",
        explanation: "Executives do not ask staff to buy gift cards. Always verify unusual requests via voice call."
      },
      {
        scenario: "IT Support Call: 'Hi, this is Mike from IT. We need your MFA code to resync your account.'",
        verdict: "BREACH",
        explanation: "IT will NEVER ask for your password or MFA code."
      },
      {
        scenario: "LinkedIn: A recruiter connects and sends a ZIP file labeled 'JobDescription_SeniorRole.zip'.",
        verdict: "BREACH",
        explanation: "Recruiters send PDFs or links, not ZIP files containing executable malware."
      }
    ]
  },
  {
    type: SlideType.PROCESS_FLOW,
    title: "Anatomy of a Hack",
    subtitle: "How You Get Compromised",
    mainText: "It rarely happens all at once. It is a chain reaction.",
    steps: [
      { title: "1. Reconnaissance", desc: "Attacker checks your social media to find details about your life and work." },
      { title: "2. The Hook", desc: "Sends a targeted email based on your interests or recent activities." },
      { title: "3. The Payload", desc: "You click a link or attachment that runs a silent malicious script." },
      { title: "4. The Pivot", desc: "Attacker uses your compromised account to attack others in the company." }
    ],
    speakerNotes: "Your oversharing on social media feeds the attack. Default to skepticism."
  },
  {
    type: SlideType.SECTION_TITLE,
    title: "Phase II: Physical & Environmental",
    subtitle: "Beyond the Screen",
    mainText: "A locked laptop is useless if the office door is propped open.",
    speakerNotes: "Now let's talk about the physical world. Coffee shops, office doors, and airports."
  },
  {
    type: SlideType.CONTENT_SLIDE,
    title: "Tailgating: The Polite Breach",
    subtitle: "How Being Helpful Gets You Hacked",
    mainText: "Attackers exploit social norms. We're taught to be polite, and they use this against us.",
    bullets: [
      "<strong>The Delivery Person:</strong> 'Heavy boxes, can you hold the door?'",
      "<strong>The Forgetful Employee:</strong> 'Left my badge at my desk'",
      "<strong>The Contractor:</strong> 'I'm here to fix the AC, facilities called me'"
    ],
    speakerNotes: "In tests, 70% of employees hold doors for strangers. Real employees have badges; real contractors check in at reception."
  },
  {
    type: SlideType.CONTENT_SLIDE,
    title: "What Are You Broadcasting?",
    subtitle: "Visual Hacking in Public Spaces",
    mainText: "Your screen is readable from 6 feet away. Welcome to visual hacking.",
    bullets: [
      "<strong>Privacy screens:</strong> Prevent neighbors from reading your screen",
      "<strong>Screen positioning:</strong> Back to wall, never facing open spaces",
      "<strong>Keyboard awareness:</strong> Shield password entry with your hand",
      "<strong>VPN always:</strong> Encrypt your data transmission in public"
    ],
    speakerNotes: "Don't work on sensitive material in public unless you're using a privacy screen and your back is to a wall."
  },
  {
    type: SlideType.INTERACTIVE_QUIZ,
    title: "Challenge: In the Wild",
    subtitle: "Are you exposed?",
    speakerNotes: "Scenario time again. Outside the office.",
    quizItems: [
      {
        scenario: "You connect to 'CoffeeShop_Free_Wifi' which requires no password.",
        verdict: "BREACH",
        explanation: "Open Wi-Fi allows anyone nearby to intercept your traffic. Always use a VPN or Hotspot."
      },
      {
        scenario: "You work on a confidential presentation on a train using a privacy screen filter.",
        verdict: "SAFE",
        explanation: "Privacy screens prevent visual hacking."
      }
    ]
  },
  {
    type: SlideType.GRID_CARDS,
    title: "Home Hygiene",
    subtitle: "Protecting Your Personal Life",
    cards: [
      {
        title: "The Router",
        items: [
          "Change default admin password.",
          "Update firmware regularly.",
          "Create a separate 'Guest' network."
        ]
      },
      {
        title: "Accounts",
        items: [
          "<strong>MFA Everywhere:</strong> WhatsApp, Gmail, Instagram.",
          "<strong>No Reuse:</strong> Different passwords for different accounts.",
          "<strong>Manager:</strong> Use Bitwarden or 1Password."
        ]
      },
      {
        title: "Devices",
        items: [
          "<strong>Updates:</strong> Patch immediately.",
          "<strong>Backups:</strong> Use cloud or offline drives.",
          "<strong>Webcams:</strong> Cover them when not in use."
        ]
      }
    ],
    speakerNotes: "Take this home. Secure your home router; a hacker there can jump to your work laptop."
  },
  {
    type: SlideType.CLOSING,
    title: "Stay Vigilant",
    mainText: "Security is a state of mind, not a checklist.",
    highlightText: "Trust nothing. Verify everything.",
    bullets: [
      "Report Phishing: phishing@mediantinternational.com",
      "Google Safety: safety.google/security-tips/",
      "Kaspersky Tips: bit.ly/kaspersky-safety",
      "Watch: Kevin Mitnick - Art of Deception (YouTube)"
    ],
    speakerNotes: "Thank you. Stay safe out there. Check the resources on the slide for deeper learning."
  }
];
