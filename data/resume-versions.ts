export type ResumeData = {
  name: string
  location: string
  phone: string
  email: string
  linkedin: string
  github: string
  profileImage?: string
  skills: string[]
  hobbies: string[]
  profile: string
  employment: Array<{
    title: string
    company: string
    location?: string
    period: string
    achievements: string[]
  }>
  education: Array<{
    degree: string
    institution: string
    location?: string
    period: string
    grades?: string
  }>
  internships: Array<{
    title: string
    company: string
    location?: string
    period: string
    achievements: string[]
  }>
}

// Version 1: Digital Transformation Principal - Default version (original content)
export const resumeVersion1: ResumeData = {
  name: "SHASHANK SHEKHAR",
  location: "INDIA",
  phone: "+91 9599 440 392",
  email: "shashank.1911@gmail.com",
  linkedin: "LinkedIn",
  github: "Github",
  profileImage: "/professional-headshot.png",

  skills: [
    "Agile Transformation",
    "AI Engineering",
    "Business Strategy",
    "Business Operations",
    "Change Management",
    "Communication Skills",
    "Cost Rationalization",
    "Cross-Functional Leadership",
    "Customer Success",
    "Data Analysis",
    "Delivery Services",
    "Design Thinking",
    "EBITDA Improvement",
    "Entrepreneurship",
    "GenAI (RAG) Solutioning",
    "International Business",
    "Operational Excellence",
    "Process Automation",
    "Professional Services",
    "Project Management",
    "Product Design",
    "Product Management",
    "Legacy Modernization",
    "Solution Architecture",
    "Stakeholder Management",
    "Technical Due Diligence",
  ],

  hobbies: ["Travelling (~25 countries)", "Cultural exploration", "Music", "Marathon"],

  profile:
    "An experienced **Transformation Leader (10 YoE)** with a unique hybrid skillset in **Strategy, Process Excellence, Customer Success and Applied AI**. I bridge the gap between strategy and execution, having successfully led major digital shifts, including implementing Agile-based delivery and automating mission-critical workflows at high-growth AI ventures. My strength is driving value in uncharted territories, helping multi-billion dollar clients (Japan/Asia) make better strategic decisions and implementing the necessary operational change to see them through",

  employment: [
    {
      title: "Senior Manager, Technical Customer Success",
      company: "AiDash",
      location: "Gurgaon",
      period: "February 2023 — Present",
      achievements: [
        "Hopped between multiple functions like Customer Success, Project/Program Management and Product Management to solve complex technical problems requiring holistic understanding. Currently, reporting to **Field CTO**",
        "(Digital Transformation) Led a massive org-wide shift from ad-hoc operations to **Jira-enabled Agile processes**, significantly increasing delivery throughput and transparency",
        "(Process Automation) Spearheaded the digitization of client onboarding, while accommodating **Human-In-The-Loop (HITL)** interventions, utilizing workflow orchestration to **slash cycle time by 90%** (2 weeks to 1 day)",
        "(Value Creation) Delivered **$150K annual savings** by re-engineering data acquisition processes, optimizing for no-vegetation areas to reduce unnecessary spend",
        "(Client Success) Oversaw digital adoption for 30+ enterprise accounts ($15M+ ARR), achieving **over-100% NDR** through value-driven consulting and deep cross-functional alignment",
        "(Innovation) Deployed a **GenAI (RAG) solution** to transform the customer support function, automating responses and enabling predictive issue pattern recognition. @Demo video here@(https://www.loom.com/share/cbfc9a2870864efabc589efcd0dcb367)",
        "(Governance) Established a rigorous qualification framework for customisation requests, preventing operational bloat and ensuring alignment with long-term strategic goals"
      ],
    },
    {
      title: "Co-Founder / CEO (Product)",
      company: "Gramoday",
      location: "Noida",
      period: "April 2020 — October 2022",
      achievements: [
        'Conceptualized and executed on Gramoday- A B2B social network marketplace for farmers, traders and bulk buyers ("LinkedIn for Agriculture") that solves for market information asymmetry and discovery for P2P transactions (Android App & Web App)',
        "Grew the mobile app adoption to 20% DAU/MAU, 4.5-star rating, 25%+ terminal retention rates and 50K+ users (over-90% being organically acquired), along with 2 web products (external and internal facing)",
        "Built a strong founding team of IIT graduates with 5+ years of experience from diverse backgrounds each on a shoestring budget and raised a small angel equity capital round and equity-free grant from Govt. of India",
        "Owned the product and design side of product development including writing extensive PRDs for developers, prioritizing issues, agile-based development processes and designing the high-fidelity prototypes (UI/UX) for all 3 products and co-designing the web services and databases",
        "Reduced the on-boarding time for new engineers to 2 days by designing a self-serving workflow on Jira starting from knowing about Gramoday to fixing a bug in tech-debt",
        "Tools used - Jira, Bitbucket, Confluence, Google Play Console, Firebase, Docker, AWS, Google Analytics, MongoDB Compass, etc.",
        "Self taught System and Database Design Basics, Programming (Python), UI/UX designing (Figma), etc.",
        "Had to shut down finally due to limited market potential in discovery and (non-lending) P2P transaction enablement",
      ],
    },
    {
      title: "Co-Founder / CEO (Operations)",
      company: "Agrilinks",
      location: "Noida",
      period: "January 2019 — March 2020",
      achievements: [
        "Conceptualized and executed on Agrilinks - a full stack managed marketplace for fruits and vegetables connecting farmers, mandis and retailers",
        "Operated a daily throughput of 1.5 tons per day of produce totaling to over INR 25+ lakhs in sales over 6 months with a 20% operating margin",
        "Provided over 20% premium to farmers for farm-sourced SKUs",
        "Ensured timely delivery and sub-1% returns (industry benchmark is 15%+) by setting up SOPs at the warehouses, mapping transportation routes and training labor",
      ],
    },
    {
      title: "Management Consultant",
      company: "Nomura",
      location: "Gurgaon",
      period: "July 2015 — October 2018",
      achievements: [
        "Co-started Food and Agribusiness consulting practice in India office for Asian and Middle East markets and generated total sales of over INR 15 million",
        "Executed and led engagements in verticals like Food and Agriculture, Infrastructure, etc. across Asia, Australasia, Middle East and Africa",
        "Selected for Global Mobility Program to work out of Singapore office on a strategic project for the Nomura Group",
        "Traveled to 13 countries across Asia, Middle East, Africa and Oceania as part of consulting engagements",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech. (Civil)",
      institution: "IIT Bombay",
      location: "Mumbai",
      period: "July 2011 — June 2015",
      grades: "CGPA 8.2/10",
    },
    {
      degree: "Level 3 Candidate",
      institution: "CFA Institute",
      period: "August 2026",
    },
  ],

  internships: [
    {
      title: "Risk Management Intern (Summer)",
      company: "Citi Retail Services",
      location: "Mumbai",
      period: "May 2014 — July 2014",
      achievements: [
        "Awarded a Pre-Placement Offer. Results appreciated by Chief Risk Officer, Citibank",
        "Developed an acquisition scorecard by fitting a Logistic Regression model on existing bureau data as well as alternate data to predict delinquency probability",
        "Created an alternative model for low information segment using Random Forest",
      ],
    },
    {
      title: "Summer Intern",
      company: "IIM Ahmedabad (Finance & Accounting)",
      location: "Ahmedabad",
      period: "May 2013 — July 2013",
      achievements: [
        "Applied Time Series Analysis to fit a Vector Auto Regressive model on the spot and futures market to estimate lead lag informational relationships",
        "Calculated Information Shares and Granger Causality to find information flow direction and sharing",
      ],
    },
  ],
}

// Version 2: PE Operating Partner / Director of Portfolio Operations
export const resumeVersion2: ResumeData = {
  name: "SHASHANK SHEKHAR",
  location: "INDIA",
  phone: "+91 9599 440 392",
  email: "shashank.1911@gmail.com",
  linkedin: "LinkedIn",
  github: "Github",
  profileImage: "/professional-headshot.png",

  skills: [
    "AI Engineering",
    "Business Process Re-engineering",
    "Business Strategy",
    "Change Management",
    "Cost Rationalization",  
    "Cross-Functional Leadership", 
    "Customer Success",
    "Delivery Services",
    "EBITDA Enhancement",
    "Entrepreneurship",
    "Executive Advisory",  
    "Market Research",
    "Organizational Design",
    "Operational Excellence",
    "P&L Management",
    "Product Management",
    "Professional Services",
    "Project Management",
    "SaaS Unit Economics",
    "Strategic Transformation",
    "Technical Due Diligence",
  ],

  hobbies: ["Travelling (~25 countries)", "Cultural exploration", "Music", "Marathon"],

  profile:
    "A Value Creation Specialist (10 YoE) focused on optimising corporate performance across commercial and operational levers. My profile combines Investment Acumen (CFA Level 3 Candidate & Nomura Investment Strategy) with deep SaaS Operating Expertise (scaling Customer Success/Delivery for a Series-C AI/SaaS platform). I possess a proven ability to diagnose bottlenecks, fix operational inefficiencies, implement margin-boosting initiatives, and drive strategic shifts (e.g., multi-tenant architecture migration) to maximise enterprise asset value for exit",

  employment: [
    {
      title: "Senior Manager, Technical Customer Success",
      company: "AiDash",
      location: "Gurgaon",
      period: "February 2023 — Present",
      achievements: [
        "Hopped between multiple functions like Customer Success, Project/Program Management and Product Management to solve complex technical problems requiring holistic understanding. Currently, reporting to **Field CTO**",
        "(P&L Impact) Protected and grew $15M+ ARR (50% of revenue), securing **over-100% Net Dollar Retention** through rigorous business value consulting and **operational excellence** in delivering satellite analytics and software deployment for 30+ enterprise customers",
        "(Cost Rationalisation) Directly improved **EBITDA margins** by re-engineering satellite imagery acquisition and optimising for area of interest to detect no-vegetation areas to reduce unnecessary spend, thereby, saving **$150K annually**",
        "(Operational Scalability) Fixed a critical bottleneck by automating customer onboarding, reducing **Time-To-Value from 2 weeks to 1 day** to accelerate revenue recognition and customer activation",
        "(Operational Efficiency) Established a rigorous **global prioritisation framework** for high-cost (human and infrastructure) tasks across a constrained supply chain to optimise resource efficiency and prevent operational bloat",
        "(Tech Due Diligence) Classified and ranked software customisations implemented across 50+ customers as part of moving the system from single-tenancy to multi-tenancy. Contributed to multiple NFR-focused initiatives by consolidating inputs from customer success function",
        "(Tech Enablement) Leveraged **Agentic AI** to automate low-value support tasks, reducing headcount pressure and improving resolution times. @Demo video here@(https://www.loom.com/share/cbfc9a2870864efabc589efcd0dcb367)"
      ],
    },
    {
      title: "Co-Founder / CEO (Product)",
      company: "Gramoday",
      location: "Noida",
      period: "April 2020 — October 2022",
      achievements: [
        'Conceptualized and executed on Gramoday- A B2B social network marketplace for farmers, traders and bulk buyers ("LinkedIn for Agriculture") that solves for market information asymmetry and discovery for P2P transactions (Android App & Web App)',
        "Grew the mobile app adoption to 20% DAU/MAU, 4.5-star rating, 25%+ terminal retention rates and 50K+ users (over-90% being organically acquired), along with 2 web products (external and internal facing)",
        "Built a strong founding team of IIT graduates with 5+ years of experience from diverse backgrounds each on a shoestring budget and raised a small angel equity capital round and equity-free grant from Govt. of India",
        "Owned the product and design side of product development including writing extensive PRDs for developers, prioritizing issues, agile-based development processes and designing the high-fidelity prototypes (UI/UX) for all 3 products and co-designing the web services and databases",
        "Reduced the on-boarding time for new engineers to 2 days by designing a self-serving workflow on Jira starting from knowing about Gramoday to fixing a bug in tech-debt",
        "Tools used - Jira, Bitbucket, Confluence, Google Play Console, Firebase, Docker, AWS, Google Analytics, MongoDB Compass, etc.",
        "Self taught System and Database Design Basics, Programming (Python), UI/UX designing (Figma), etc.",
        "Had to shut down finally due to limited market potential in discovery and (non-lending) P2P transaction enablement",
      ],
    },
    {
      title: "Co-Founder / CEO (Operations)",
      company: "Agrilinks",
      location: "Noida",
      period: "January 2019 — March 2020",
      achievements: [
        "Conceptualized and executed on Agrilinks - a full stack managed marketplace for fruits and vegetables connecting farmers, mandis and retailers",
        "Operated a daily throughput of 1.5 tons per day of produce totaling to over INR 25+ lakhs in sales over 6 months with a 20% operating margin",
        "Provided over 20% premium to farmers for farm-sourced SKUs",
        "Ensured timely delivery and sub-1% returns (industry benchmark is 15%+) by setting up SOPs at the warehouses, mapping transportation routes and training labor",
      ],
    },
    {
      title: "Management Consultant",
      company: "Nomura",
      location: "Gurgaon",
      period: "July 2015 — October 2018",
      achievements: [
        "Co-started Food and Agribusiness consulting practice in India office for Asian and Middle East markets and generated total sales of over INR 15 million",
        "Executed and led engagements in verticals like Food and Agriculture, Infrastructure, etc. across Asia, Australasia, Middle East and Africa",
        "Selected for Global Mobility Program to work out of Singapore office on a strategic project for the Nomura Group",
        "Traveled to 13 countries across Asia, Middle East, Africa and Oceania as part of consulting engagements",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech. (Civil)",
      institution: "IIT Bombay",
      location: "Mumbai",
      period: "July 2011 — June 2015",
      grades: "CGPA 8.2/10",
    },
    {
      degree: "Level 3 Candidate",
      institution: "CFA Institute",
      period: "August 2026",
    },
  ],

  internships: [
    {
      title: "Risk Management Intern (Summer)",
      company: "Citi Retail Services",
      location: "Mumbai",
      period: "May 2014 — July 2014",
      achievements: [
        "Awarded a Pre-Placement Offer. Results appreciated by Chief Risk Officer, Citibank",
        "Developed an acquisition scorecard by fitting a Logistic Regression model on existing bureau data as well as alternate data to predict delinquency probability",
        "Created an alternative model for low information segment using Random Forest",
      ],
    },
    {
      title: "Summer Intern",
      company: "IIM Ahmedabad (Finance & Accounting)",
      location: "Ahmedabad",
      period: "May 2013 — July 2013",
      achievements: [
        "Applied Time Series Analysis to fit a Vector Auto Regressive model on the spot and futures market to estimate lead lag informational relationships",
        "Calculated Information Shares and Granger Causality to find information flow direction and sharing",
      ],
    },
  ],
}

// Version 3: Director of Product Management
export const resumeVersion3: ResumeData = {
  name: "SHASHANK SHEKHAR",
  location: "INDIA",
  phone: "+91 9599 440 392",
  email: "shashank.1911@gmail.com",
  linkedin: "LinkedIn",
  github: "Github",
  profileImage: "/professional-headshot.png",

  skills: [
    "Agile/Scrum Methodologies",
    "AI Engineering",
    "Business Strategy",
    "Communication Skills",
    "Customer Success",
    "Cross-Functional Alignment",
    "Customer Discovery",
    "Data Analysis",
    "Design Thinking",
    "Entrepreneurship",
    "Feature Prioritization",
    "Go-to-Market (GTM) Strategy",
    "Leadership",
    "Market Research",
    "Process Excellence",
    "Product Management",
    "Professional Services",
    "Project Management",
    "SaaS Unit Economics",
    "Technical Debt Management"
  ],

  hobbies: ["Travelling (~25 countries)", "Cultural exploration", "Music", "Marathon"],

  profile:
    "A multi-disciplinary leader (10 YoE) with a unique hybrid skillset in Strategy, Product, Applied AI and Customer Success. With experience of working with AI-SaaS for Enterprises and Market Network Platform for Rural India, my background combines the 0-to-1 mindset of a Founder (scaling a venture to 50K+ users) with the 1-to-N scaling expertise of a Series-C AI-SaaS leader. With foundational training from IIT and global market exposure (Asia, ME, US), I excel at translating complex C-suite needs into clear, revenue-driving product roadmaps and managing technical debt to deliver durable value",

  employment: [
    {
      title: "Senior Manager, Technical Customer Success",
      company: "AiDash",
      location: "Gurgaon",
      period: "February 2023 — Present",
      achievements: [
        "Hopped between multiple functions like Customer Success, Project/Program Management and Product Management to solve complex technical problems requiring holistic understanding. Currently, reporting to **Field CTO**",
        "(Customer Success) Led business value consulting and project management for analytics delivery and software deployment for 30+ enterprise customers ($15M ARR) resulting in **over-100% NDR** and gaining insight into future revenue-generating features for large enterprises",
        "(Platform Scalability) Led the strategic migration from single-tenant to multi-tenant architecture, converting bespoke customisations to 50+ customers into scalable General Availability (GA) features and building qualification framework for new customisation requests",
        "(Onboarding Efficiency) Reduced **Time-To-Value from 2 weeks to 1 day** by building an internal orchestration tool to automate customer onboarding while accommodating Human-In-The-Loop (HITL) interventions",
        "(Feature Prioritisation) Instituted a **Global Priority framework** to manage resource-constrained backlogs for 80+ enterprise customers, balancing technical debt against new feature requests",
        "(AI Product Leadership) Deployed a **RAG-based agentic AI system** for intelligent classification of support tickets across themes, severity, etc. and generating client-facing responses, thereby, improving SLAs for First Response Time and Resolution Time. @Demo video here@(https://www.loom.com/share/cbfc9a2870864efabc589efcd0dcb367)",
        "(Unit Economics) Improved product margins by optimising the satellite imagery algorithm, cutting data acquisition costs by **15% ($150K/year)**"
      ],
    },
    {
      title: "Co-Founder / CEO (Product)",
      company: "Gramoday",
      location: "Noida",
      period: "April 2020 — October 2022",
      achievements: [
        'Conceptualized and executed on Gramoday- A B2B social network marketplace for farmers, traders and bulk buyers ("LinkedIn for Agriculture") that solves for market information asymmetry and discovery for P2P transactions (Android App & Web App)',
        "Grew the mobile app adoption to 20% DAU/MAU, 4.5-star rating, 25%+ terminal retention rates and 50K+ users (over-90% being organically acquired), along with 2 web products (external and internal facing)",
        "Built a strong founding team of IIT graduates with 5+ years of experience from diverse backgrounds each on a shoestring budget and raised a small angel equity capital round and equity-free grant from Govt. of India",
        "Owned the product and design side of product development including writing extensive PRDs for developers, prioritizing issues, agile-based development processes and designing the high-fidelity prototypes (UI/UX) for all 3 products and co-designing the web services and databases",
        "Reduced the on-boarding time for new engineers to 2 days by designing a self-serving workflow on Jira starting from knowing about Gramoday to fixing a bug in tech-debt",
        "Tools used - Jira, Bitbucket, Confluence, Google Play Console, Firebase, Docker, AWS, Google Analytics, MongoDB Compass, etc.",
        "Self taught System and Database Design Basics, Programming (Python), UI/UX designing (Figma), etc.",
        "Had to shut down finally due to limited market potential in discovery and (non-lending) P2P transaction enablement",
      ],
    },
    {
      title: "Co-Founder / CEO (Operations)",
      company: "Agrilinks",
      location: "Noida",
      period: "January 2019 — March 2020",
      achievements: [
        "Conceptualized and executed on Agrilinks - a full stack managed marketplace for fruits and vegetables connecting farmers, mandis and retailers",
        "Operated a daily throughput of 1.5 tons per day of produce totaling to over INR 25+ lakhs in sales over 6 months with a 20% operating margin",
        "Provided over 20% premium to farmers for farm-sourced SKUs",
        "Ensured timely delivery and sub-1% returns (industry benchmark is 15%+) by setting up SOPs at the warehouses, mapping transportation routes and training labor",
      ],
    },
    {
      title: "Management Consultant",
      company: "Nomura",
      location: "Gurgaon",
      period: "July 2015 — October 2018",
      achievements: [
        "Co-started Food and Agribusiness consulting practice in India office for Asian and Middle East markets and generated total sales of over INR 15 million",
        "Executed and led engagements in verticals like Food and Agriculture, Infrastructure, etc. across Asia, Australasia, Middle East and Africa",
        "Selected for Global Mobility Program to work out of Singapore office on a strategic project for the Nomura Group",
        "Traveled to 13 countries across Asia, Middle East, Africa and Oceania as part of consulting engagements",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech. (Civil)",
      institution: "IIT Bombay",
      location: "Mumbai",
      period: "July 2011 — June 2015",
      grades: "CGPA 8.2/10",
    },
    {
      degree: "Level 3 Candidate",
      institution: "CFA Institute",
      period: "August 2026",
    },
  ],

  internships: [
    {
      title: "Risk Management Intern (Summer)",
      company: "Citi Retail Services",
      location: "Mumbai",
      period: "May 2014 — July 2014",
      achievements: [
        "Awarded a Pre-Placement Offer. Results appreciated by Chief Risk Officer, Citibank",
        "Developed an acquisition scorecard by fitting a Logistic Regression model on existing bureau data as well as alternate data to predict delinquency probability",
        "Created an alternative model for low information segment using Random Forest",
      ],
    },
    {
      title: "Summer Intern",
      company: "IIM Ahmedabad (Finance & Accounting)",
      location: "Ahmedabad",
      period: "May 2013 — July 2013",
      achievements: [
        "Applied Time Series Analysis to fit a Vector Auto Regressive model on the spot and futures market to estimate lead lag informational relationships",
        "Calculated Information Shares and Granger Causality to find information flow direction and sharing",
      ],
    },
  ],
}

// Version 4: Chief of Staff / Director of Strategy & Operations
export const resumeVersion4: ResumeData = {
  name: "SHASHANK SHEKHAR",
  location: "INDIA",
  phone: "+91 9599 440 392",
  email: "shashank.1911@gmail.com",
  linkedin: "LinkedIn",
  github: "Github",
  profileImage: "/professional-headshot.png",

  skills: [
    "AI Engineering",
    "Business Operations (BizOps)",
    "Cross-Functional Alignment",
    "Communication Skills",
    "Customer Success",
    "Data Analysis",
    "Design Thinking",
    "Delivery Services",
    "Entrepreneurship",
    "Founder's Office Leadership",
    "International Business",
    "Market Research",
    "Leadership",
    "Operational Efficiency",
    "Organizational Design",
    "Process Excellence",
    "Professional Services",
    "Program Management",
    "Project Management",
    "Strategic Initiatives", 
  ],

  hobbies: ["Travelling (~25 countries)", "Cultural exploration", "Music", "Marathon"],

  profile:
    "A high-impact, T-shaped Generalist and former Founder with 10 years of experience operating at the nexus of strategy, execution, and technology. With an IIT and CFA foundation in education, I thrive in managing ambiguous, high-priority initiatives for the CEO/CTO. My expertise spans starting a tech venture, scaling an AI-SaaS organisation globally (US/Asia), and providing C-suite advisory (Nomura). I am the ideal proxy for driving cross-functional alignment and delivering value where traditional organisational structures cannot",

  employment: [
    {
      title: "Senior Manager, Technical Customer Success",
      company: "AiDash",
      location: "Gurgaon",
      period: "February 2023 — Present",
      achievements: [
        "Hopped between multiple functions like Customer Success, Project/Program Management and Product Management to solve complex technical problems requiring holistic understanding. Currently, reporting to **Field CTO**",
        "(Program Management) Led business value consulting and project management for analytics delivery and software deployment for 30+ enterprise customers ($15M ARR) resulting in **over-100% NDR** through deep cross-functional alignment across Product, Engineering, GIS, Data Science, Platform and Professional Services",
        "(Operational Efficiency) Led a massive **org-wide shift** from ad-hoc operations of satellite analytics and software delivery operations to **Jira-enabled Agile processes**, significantly improving on-time delivery rates and resolving communication silos",
        "(Executive Projects) Led high-stakes cost optimisation exercise with a goal to **improve Gross Margin by 6%**. Directly contributed to satellite imagery cost reduction by optimising area of interest algorithm to detect no-vegetation areas, resulting in **$150K savings**",
        "(Innovation Culture) Championed internal AI adoption by building a **RAG-based support agent**, demonstrating the practical application of GenAI to leadership. @Demo video here@(https://www.loom.com/share/cbfc9a2870864efabc589efcd0dcb367)",
        "(Workflow Optimisation) Diagnosed and fixed a slow broken onboarding process, building an automation tool that reduced **setup time by 90%** (2 weeks to 1 day)",
      ],
    },
    {
      title: "Co-Founder / CEO (Product)",
      company: "Gramoday",
      location: "Noida",
      period: "April 2020 — October 2022",
      achievements: [
        'Conceptualized and executed on Gramoday- A B2B social network marketplace for farmers, traders and bulk buyers ("LinkedIn for Agriculture") that solves for market information asymmetry and discovery for P2P transactions (Android App & Web App)',
        "Grew the mobile app adoption to 20% DAU/MAU, 4.5-star rating, 25%+ terminal retention rates and 50K+ users (over-90% being organically acquired), along with 2 web products (external and internal facing)",
        "Built a strong founding team of IIT graduates with 5+ years of experience from diverse backgrounds each on a shoestring budget and raised a small angel equity capital round and equity-free grant from Govt. of India",
        "Owned the product and design side of product development including writing extensive PRDs for developers, prioritizing issues, agile-based development processes and designing the high-fidelity prototypes (UI/UX) for all 3 products and co-designing the web services and databases",
        "Reduced the on-boarding time for new engineers to 2 days by designing a self-serving workflow on Jira starting from knowing about Gramoday to fixing a bug in tech-debt",
        "Tools used - Jira, Bitbucket, Confluence, Google Play Console, Firebase, Docker, AWS, Google Analytics, MongoDB Compass, etc.",
        "Self taught System and Database Design Basics, Programming (Python), UI/UX designing (Figma), etc.",
        "Had to shut down finally due to limited market potential in discovery and (non-lending) P2P transaction enablement",
      ],
    },
    {
      title: "Co-Founder / CEO (Operations)",
      company: "Agrilinks",
      location: "Noida",
      period: "January 2019 — March 2020",
      achievements: [
        "Conceptualized and executed on Agrilinks - a full stack managed marketplace for fruits and vegetables connecting farmers, mandis and retailers",
        "Operated a daily throughput of 1.5 tons per day of produce totaling to over INR 25+ lakhs in sales over 6 months with a 20% operating margin",
        "Provided over 20% premium to farmers for farm-sourced SKUs",
        "Ensured timely delivery and sub-1% returns (industry benchmark is 15%+) by setting up SOPs at the warehouses, mapping transportation routes and training labor",
      ],
    },
    {
      title: "Management Consultant",
      company: "Nomura",
      location: "Gurgaon",
      period: "July 2015 — October 2018",
      achievements: [
        "Co-started Food and Agribusiness consulting practice in India office for Asian and Middle East markets and generated total sales of over INR 15 million",
        "Executed and led engagements in verticals like Food and Agriculture, Infrastructure, etc. across Asia, Australasia, Middle East and Africa",
        "Selected for Global Mobility Program to work out of Singapore office on a strategic project for the Nomura Group",
        "Traveled to 13 countries across Asia, Middle East, Africa and Oceania as part of consulting engagements",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech. (Civil)",
      institution: "IIT Bombay",
      location: "Mumbai",
      period: "July 2011 — June 2015",
      grades: "CGPA 8.2/10",
    },
    {
      degree: "Level 3 Candidate",
      institution: "CFA Institute",
      period: "August 2026",
    },
  ],

  internships: [
    {
      title: "Risk Management Intern (Summer)",
      company: "Citi Retail Services",
      location: "Mumbai",
      period: "May 2014 — July 2014",
      achievements: [
        "Awarded a Pre-Placement Offer. Results appreciated by Chief Risk Officer, Citibank",
        "Developed an acquisition scorecard by fitting a Logistic Regression model on existing bureau data as well as alternate data to predict delinquency probability",
        "Created an alternative model for low information segment using Random Forest",
      ],
    },
    {
      title: "Summer Intern",
      company: "IIM Ahmedabad (Finance & Accounting)",
      location: "Ahmedabad",
      period: "May 2013 — July 2013",
      achievements: [
        "Applied Time Series Analysis to fit a Vector Auto Regressive model on the spot and futures market to estimate lead lag informational relationships",
        "Calculated Information Shares and Granger Causality to find information flow direction and sharing",
      ],
    },
  ],
}

// Version 5: Director of Solutions Engineering
export const resumeVersion5: ResumeData = {
  name: "SHASHANK SHEKHAR",
  location: "INDIA",
  phone: "+91 9599 440 392",
  email: "shashank.1911@gmail.com",
  linkedin: "LinkedIn",
  github: "Github",
  profileImage: "/professional-headshot.png",

  skills: [
    "AI Engineering",
    "Business Operations",
    "Client Engagement",
    "Communication Skills",
    "Cross-Functional Collaboration",
    "Customer Value Realization",
    "Delivery Services",
    "Design Thinking",
    "Enterprise Software Delivery",
    "Entrepreneurship",
    "Leadership",
    "Post-Sales Transition",
    "Product Management",
    "Project Management",
    "Scalable Deployment",
    "SLA Management",
    "Strategic Customization",
    "Technical Discovery",
    "Workflow Automation"
  ],

  hobbies: ["Travelling (~25 countries)", "Cultural exploration", "Music", "Marathon"],

  profile:
    "A Technically Fluent Leader (10 YoE) specialising in advanced AI-SaaS deployment and Customer Value Realisation. My experience includes leading professional services for a high-growth AI platform, implementing complex satellite analytics solutions for global enterprises. I combine strong technical understanding and business acumen with deep hands-on experience in workflow automation and leveraging emerging tech like GenAI to architect and deliver scalable, high-impact technical solutions for key accounts",

  employment: [
    {
      title: "Senior Manager, Technical Customer Success",
      company: "AiDash",
      location: "Gurgaon",
      period: "February 2023 — Present",
      achievements: [
        "Hopped between multiple functions like Customer Success, Project/Program Management and Product Management to solve complex technical problems requiring holistic understanding. Currently, reporting to **Field CTO**",
        "(Value Consulting) Orchestrated end-to-end value journeys for 30+ enterprise accounts ($15M+ ARR), navigating complex multi-disciplinary environments (Data Science, GIS, Engineering) to achieve >100% NDR and secure long-term renewals through data-driven business cases and executive-level roadmaps",
        "(Operational Efficiency) Led the product developement of an in-house workflow orchestration tool that reduced customer onboarding Time-to-Value from ~2 weeks to <1 day, removing critical bottlenecks in the deployment phase of the customer value journey",
        "(Process Intelligence) Led the organizational transition from single-tenant to multi-tenant systems by analyzing business flows across 50+ customers; identified and standardized high-value customizations into GA product features, effectively reducing technical debt while accelerating platform adoption",
        "(AI Innovation) Won the AiDASH AI Hackathon by developing a RAG-based agentic AI system to classify support ticket patterns and automate client-facing responses; improved First Response and Resolution Time SLAs, demonstrating the ability to turn emerging AI tech into measurable business impact.  @Demo video here@(https://www.loom.com/share/cbfc9a2870864efabc589efcd0dcb367)",
        "(Value Engineering) Identified and captured a $150K (15%) annual cost-saving opportunity in satellite imagery spend by architecting an AOI optimization algorithm; balanced technical error budgets with customer pricing tiers to maximize margin without compromising data integrity",
        "(Change Management) Conceptualized and spearheaded an org-wide shift to a templatized, Jira-enabled agile delivery framework for satellite analytics; optimized delivery operations to increase throughput and transparency, directly improving Time-to-Value for global enterprise stakeholders."
      ],
    },
    {
      title: "Co-Founder / CEO (Product)",
      company: "Gramoday",
      location: "Noida",
      period: "April 2020 — October 2022",
      achievements: [
        'Conceptualized and executed on Gramoday- A B2B social network marketplace for farmers, traders and bulk buyers ("LinkedIn for Agriculture") that solves for market information asymmetry and discovery for P2P transactions (Android App & Web App)',
        "Grew the mobile app adoption to 20% DAU/MAU, 4.5-star rating, 25%+ terminal retention rates and 50K+ users (over-90% being organically acquired), along with 2 web products (external and internal facing)",
        "Built a strong founding team of IIT graduates with 5+ years of experience from diverse backgrounds each on a shoestring budget and raised a small angel equity capital round and equity-free grant from Govt. of India",
        "Owned the product and design side of product development including writing extensive PRDs for developers, prioritizing issues, agile-based development processes and designing the high-fidelity prototypes (UI/UX) for all 3 products and co-designing the web services and databases",
        "Reduced the on-boarding time for new engineers to 2 days by designing a self-serving workflow on Jira starting from knowing about Gramoday to fixing a bug in tech-debt",
        "Tools used - Jira, Bitbucket, Confluence, Google Play Console, Firebase, Docker, AWS, Google Analytics, MongoDB Compass, etc.",
        "Self taught System and Database Design Basics, Programming (Python), UI/UX designing (Figma), etc.",
        "Had to shut down finally due to limited market potential in discovery and (non-lending) P2P transaction enablement",
      ],
    },
    {
      title: "Co-Founder / CEO (Operations)",
      company: "Agrilinks",
      location: "Noida",
      period: "January 2019 — March 2020",
      achievements: [
        "Conceptualized and executed on Agrilinks - a full stack managed marketplace for fruits and vegetables connecting farmers, mandis and retailers",
        "Operated a daily throughput of 1.5 tons per day of produce totaling to over INR 25+ lakhs in sales over 6 months with a 20% operating margin",
        "Provided over 20% premium to farmers for farm-sourced SKUs",
        "Ensured timely delivery and sub-1% returns (industry benchmark is 15%+) by setting up SOPs at the warehouses, mapping transportation routes and training labor",
      ],
    },
    {
      title: "Management Consultant",
      company: "Nomura",
      location: "Gurgaon",
      period: "July 2015 — October 2018",
      achievements: [
        "Co-started Food and Agribusiness consulting practice in India office for Asian and Middle East markets and generated total sales of over INR 15 million",
        "Executed and led engagements in verticals like Food and Agriculture, Infrastructure, etc. across Asia, Australasia, Middle East and Africa",
        "Selected for Global Mobility Program to work out of Singapore office on a strategic project for the Nomura Group",
        "Traveled to 13 countries across Asia, Middle East, Africa and Oceania as part of consulting engagements",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech. (Civil)",
      institution: "IIT Bombay",
      location: "Mumbai",
      period: "July 2011 — June 2015",
      grades: "CGPA 8.2/10",
    },
    {
      degree: "Level 3 Candidate",
      institution: "CFA Institute",
      period: "August 2026",
    },
  ],

  internships: [
    {
      title: "Risk Management Intern (Summer)",
      company: "Citi Retail Services",
      location: "Mumbai",
      period: "May 2014 — July 2014",
      achievements: [
        "Awarded a Pre-Placement Offer. Results appreciated by Chief Risk Officer, Citibank",
        "Developed an acquisition scorecard by fitting a Logistic Regression model on existing bureau data as well as alternate data to predict delinquency probability",
        "Created an alternative model for low information segment using Random Forest",
      ],
    },
    {
      title: "Summer Intern",
      company: "IIM Ahmedabad (Finance & Accounting)",
      location: "Ahmedabad",
      period: "May 2013 — July 2013",
      achievements: [
        "Applied Time Series Analysis to fit a Vector Auto Regressive model on the spot and futures market to estimate lead lag informational relationships",
        "Calculated Information Shares and Granger Causality to find information flow direction and sharing",
      ],
    },
  ],
}

export const resumeVersions = {
  "Version 1: Digital Transformation": resumeVersion1,
  "Version 2: Portfolio Operations": resumeVersion2,
  "Version 3: Product Management": resumeVersion3,
  "Version 4: Strategy & Operations": resumeVersion4,
  "Version 5: Solutions Engineering": resumeVersion5,
}
