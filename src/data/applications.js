import softwareImage from "../assests/Sortware.jpg";
import customerSupportImage from "../assests/customersupport.jpg";
import educationImage from "../assests/education.jpg";
import healthcareImage from "../assests/healthacre.jpg";
import financeImage from "../assests/finance.jpg";
import researchImage from "../assests/researchassistance.jpg";
import overviewImage from "../assests/overview.png";
import workflowImage from "../assests/HowItWoks.png";
import salesImage from "../assests/sales.webp";
import retailImage from "../assests/retail.webp";
import transportImage from "../assests/transport.webp";
import agricultureImage from "../assests/agri.webp";

export const applicationsIntroduction =
  "From developing software and assisting customers to managing financial operations and optimizing supply chains, Agentic AI is creating opportunities to improve productivity, reduce repetitive workloads, and deliver more personalized services. The following applications demonstrate how these systems are transforming different industries and business functions.";

export const applicationsConclusion =
  "Across these applications, the main value of Agentic AI comes from its ability to coordinate multiple steps rather than simply perform isolated tasks. An agent can retrieve information, make decisions, interact with connected systems, evaluate results, and continue working towards an objective. However, the level of autonomy varies depending on the application. Some systems only recommend actions, while others can execute approved tasks independently. Activities involving financial transactions, medical decisions, legal matters, or sensitive personal information require stronger safeguards and appropriate human oversight. As agentic systems continue to develop, their impact will depend not only on their ability to perform tasks but also on how reliably, securely, and responsibly they are integrated into real-world environments.";

const applications = [
  {
    number: "01",
    title: "Software Development",
    summary: "Code, debug, test, review, and coordinate the software delivery lifecycle.",
    description:
      "Agentic AI can interpret development tasks, explore existing codebases, identify relevant files, implement changes, execute tests, and analyze errors. More advanced workflows can involve specialized agents working together on requirements, implementation, testing, and documentation.",
    keyApplications: [
      "Code generation and refactoring.",
      "Automated debugging and error investigation.",
      "Software testing and test-case generation.",
      "Code documentation and technical explanation.",
      "Dependency upgrades and codebase migration.",
      "Reviewing code changes and identifying potential issues.",
    ],
    impact: "Improves developer productivity, reduces repetitive development work, and accelerates software delivery.",
    category: "Technology",
    icon: "code",
    accent: "cyan",
    image: softwareImage,
  },
  {
    number: "02",
    title: "Customer Support and Service Management",
    summary: "Resolve requests, retrieve information, and coordinate service workflows.",
    description:
      "Agentic customer service systems can understand a request, retrieve account information, interact with business applications, and perform appropriate actions. For example, an agent can investigate a delayed delivery, check logistics systems, create a support ticket, or initiate an approved resolution.",
    keyApplications: [
      "Handling customer inquiries and service requests.",
      "Retrieving customer information from CRM systems.",
      "Tracking orders, deliveries, and service requests.",
      "Creating and updating support tickets.",
      "Identifying issues through sentiment analysis.",
      "Escalating complex or sensitive cases to human representatives.",
    ],
    impact: "Enables faster customer support, improves service availability, and reduces team workload.",
    category: "Service",
    icon: "headphones",
    accent: "violet",
    image: customerSupportImage,
  },
  {
    number: "03",
    title: "Research and Knowledge Assistance",
    summary: "Discover, analyze, compare, and summarize information from multiple sources.",
    description:
      "A research agent can receive a question, identify search terms, gather information from approved sources, extract findings, compare perspectives, and prepare a structured summary with supporting references.",
    keyApplications: [
      "Searching and collecting information from multiple sources.",
      "Summarizing academic papers, reports, and technical documents.",
      "Comparing research findings and identifying common themes.",
      "Organizing references and research notes.",
      "Supporting literature reviews and research planning.",
      "Generating preliminary research reports for human review.",
    ],
    impact: "Reduces information-gathering time so researchers can focus on critical analysis and interpretation.",
    category: "Knowledge",
    icon: "search",
    accent: "fuchsia",
    image: researchImage,
  },
  {
    number: "04",
    title: "Finance and Banking",
    summary: "Monitor transactions, process documents, and identify financial risks.",
    description:
      "Agentic AI can monitor transaction patterns, identify unusual activity, analyze financial information, and coordinate routine administrative processes. It can support fraud monitoring, compliance, preliminary loan reviews, and financial documentation.",
    keyApplications: [
      "Fraud detection and suspicious transaction monitoring.",
      "Preliminary loan application analysis.",
      "Financial document processing.",
      "Compliance monitoring and reporting.",
      "Customer financial assistance.",
      "Supporting investment and portfolio analysis.",
    ],
    impact: "Helps financial organizations process information efficiently and improve operational decision-making.",
    category: "Finance",
    icon: "shield",
    accent: "emerald",
    image: financeImage,
  },
  {
    number: "05",
    title: "Education and Personalized Learning",
    summary: "Adapt learning experiences to individual progress, needs, and knowledge gaps.",
    description:
      "An intelligent learning assistant can monitor quiz performance, identify topics that need improvement, recommend learning materials, generate exercises, and explain concepts when a student struggles.",
    keyApplications: [
      "Personalized learning recommendations.",
      "AI-powered tutoring and academic assistance.",
      "Automatic generation of exercises and practice questions.",
      "Monitoring learning progress and identifying knowledge gaps.",
      "Research assistance and document summarization.",
      "Simulated interviews and language-learning conversations.",
    ],
    impact: "Supports individualized learning, increases access to academic assistance, and helps educators identify areas needing support.",
    category: "Education",
    icon: "graduation",
    accent: "amber",
    image: educationImage,
  },
  {
    number: "06",
    title: "Healthcare and Medical Administration",
    summary: "Support administration, information access, and patient monitoring workflows.",
    description:
      "Healthcare agents can coordinate appointment information, medical records, diagnostic reports, and hospital operations. They can support scheduling, information retrieval, administrative requests, and monitoring alerts for clinical staff.",
    keyApplications: [
      "Appointment scheduling and administrative coordination.",
      "Medical record organization and information retrieval.",
      "Patient monitoring and health-risk alerts.",
      "Supporting clinical research and literature reviews.",
      "Hospital resource and workflow management.",
      "Routine documentation and authorization support.",
    ],
    impact: "Reduces administrative workloads and supports timely information access while professionals retain oversight.",
    category: "Healthcare",
    icon: "heart",
    accent: "rose",
    image: healthcareImage,
    note: "Clinical decisions, diagnoses, and treatment recommendations require appropriate professional oversight.",
  },
  {
    number: "07",
    title: "Sales and Marketing",
    summary: "Understand customers, prioritize opportunities, and coordinate campaigns.",
    description:
      "Sales and marketing agents can analyze customer information, identify opportunities, coordinate communication, monitor campaign performance, and prepare personalized follow-ups through connected CRM systems.",
    keyApplications: [
      "Lead generation and qualification.",
      "Customer behavior and preference analysis.",
      "Personalized marketing content and recommendations.",
      "Campaign planning and performance monitoring.",
      "Customer follow-up scheduling.",
      "Sales forecasting and opportunity identification.",
    ],
    impact: "Improves customer engagement, supports data-driven marketing, and helps teams manage more prospects.",
    category: "Business",
    icon: "megaphone",
    accent: "orange",
    image: salesImage,
  },
  {
    number: "08",
    title: "Retail and E-commerce",
    summary: "Personalize shopping, forecast demand, and support inventory operations.",
    description:
      "An e-commerce shopping agent can understand requirements, compare products, identify suitable options, and help complete an authorized purchase. Inventory agents can monitor stock and identify potential shortages.",
    keyApplications: [
      "Personalized product recommendations.",
      "Intelligent shopping assistance.",
      "Inventory monitoring and replenishment support.",
      "Demand forecasting and trend analysis.",
      "Dynamic merchandising and promotion planning.",
      "Automated customer service.",
    ],
    impact: "Creates more personalized shopping experiences and helps retailers respond to changing demand.",
    category: "Commerce",
    icon: "shopping",
    accent: "pink",
    image: retailImage,
  },
  {
    number: "09",
    title: "Transportation and Logistics",
    summary: "Coordinate routes, vehicles, deliveries, and changing operational conditions.",
    description:
      "A delivery management agent can examine requests, vehicle availability, traffic, and priorities to recommend routes. If a road closure occurs, it can identify an alternative and update the delivery schedule.",
    keyApplications: [
      "Intelligent delivery route optimization.",
      "Vehicle fleet coordination and dispatching.",
      "Real-time delivery monitoring.",
      "Predictive vehicle maintenance.",
      "Warehouse and shipment coordination.",
      "Adjusting plans based on traffic and weather.",
    ],
    impact: "Reduces delays, improves resource utilization, and supports efficient transportation services.",
    category: "Operations",
    icon: "truck",
    accent: "blue",
    image: transportImage,
  },
  {
    number: "10",
    title: "Agriculture and Energy Management",
    summary: "Monitor environmental conditions, equipment, and resource usage.",
    description:
      "In agriculture, agents can analyze weather forecasts and soil conditions to support planting and irrigation. In energy, they can monitor equipment, identify maintenance needs, and help balance supply and demand.",
    keyApplications: [
      "Agricultural weather and soil monitoring.",
      "Irrigation and planting schedule recommendations.",
      "Predictive equipment maintenance.",
      "Energy consumption monitoring.",
      "Electricity supply and demand management.",
      "Identifying potential equipment failures.",
    ],
    impact: "Supports efficient resource utilization, reduces operational costs, and contributes to sustainable management.",
    category: "Sustainability",
    icon: "leaf",
    accent: "lime",
    image: agricultureImage,
  },
  {
    number: "11",
    title: "Human Resources and Business Operations",
    summary: "Coordinate employee services, internal requests, and business processes.",
    description:
      "HR and operations agents can assist with recruitment, onboarding, employee questions, inventory, service requests, and workflow coordination across enterprise applications.",
    keyApplications: [
      "Resume screening and recruitment coordination.",
      "Interview scheduling and employee onboarding.",
      "Employee support and frequently asked questions.",
      "Leave request and administrative workflow management.",
      "Inventory and supply monitoring.",
      "Business process coordination and compliance checks.",
    ],
    impact: "Reduces administrative effort and allows employees to focus on judgment and creative work.",
    category: "Business",
    icon: "users",
    accent: "indigo",
    image: financeImage,
  },
  {
    number: "12",
    title: "Legal Services",
    summary: "Organize legal documents, retrieve case information, and support preliminary analysis.",
    description:
      "A legal research agent can search relevant materials, identify related cases, summarize findings, and prepare an initial memo. Contract agents can identify unusual clauses and highlight sections requiring professional review.",
    keyApplications: [
      "Legal research and case information retrieval.",
      "Contract analysis and clause identification.",
      "Summarization of legal documents.",
      "Preparation of preliminary research memos.",
      "Document organization and review assistance.",
      "Monitoring relevant regulatory requirements.",
    ],
    impact: "Reduces time spent on document-heavy tasks while supporting legal professionals with organized information.",
    category: "Professional Services",
    icon: "scale",
    accent: "slate",
    image: researchImage,
  },
];

export default applications;
