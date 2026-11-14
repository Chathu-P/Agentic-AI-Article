import ArticleSection from "./ArticleSection";

function AgenticAIVsTraditionalAI() {
  const comparisons = [
    [
      "Traditional AI systems are designed to perform specific tasks using predefined rules, statistical methods, or trained machine learning models.",
      "Agentic AI systems are designed to achieve goals through reasoning, planning, decision-making, tool usage, and multi-step execution.",
    ],
    [
      "Primarily focuses on solving well-defined problems such as classification, prediction, regression, forecasting, and pattern recognition.",
      "Focuses on accomplishing broader objectives by coordinating multiple related tasks and actions.",
    ],
    [
      "Receives input data, processes it using a trained model or predefined logic, and produces an output.",
      "Receives a goal, determines the necessary steps, executes actions, evaluates results, and adjusts its approach when needed.",
    ],
    [
      "Generally performs specific predictions or follows predefined processing workflows.",
      "Can dynamically coordinate multiple steps and workflows to achieve an assigned objective.",
    ],
    [
      "Typically responds to input data, user requests, or predefined triggers.",
      "Can respond to inputs and environmental changes while determining appropriate subsequent actions.",
    ],
    [
      "Usually waits for input or predefined conditions before performing its assigned task.",
      "Can proactively identify and initiate necessary actions towards an assigned objective, within its permitted boundaries.",
    ],
    [
      "Uses statistical models, learned patterns, predefined rules, and algorithms to generate predictions or decisions.",
      "Uses contextual reasoning, goal-oriented planning, and feedback to determine and adapt its actions.",
    ],
    [
      "Usually performs a specific function, such as detecting defective products or predicting customer demand.",
      "Can break complex objectives into smaller tasks and coordinate their execution.",
    ],
    [
      "Commonly uses predefined integrations, APIs, databases, or processing pipelines to perform assigned functions.",
      "Can select and interact with available tools, APIs, databases, and external systems according to its objectives and permissions.",
    ],
    [
      "Often relies on structured historical datasets for training and prediction, although it can also process images, audio, and text.",
      "Can gather and use information from multiple sources, including databases, documents, APIs, real-time data, and external tools.",
    ],
    [
      "Commonly improves through model training, retraining, updated rules, and parameter optimization.",
      "Can adapt task execution using feedback, contextual information, memory, and repeated evaluation. This does not necessarily mean that its underlying model automatically learns or retrains.",
    ],
    [
      "Often processes individual inputs or predefined datasets, although some systems maintain historical information or state.",
      "Can maintain task context and use memory and environmental information to guide decisions across multiple steps.",
    ],
    [
      "Typically performs explicitly specified tasks, such as classifying an image or predicting sales.",
      "Can receive a high-level objective and determine the sequence of tasks required to achieve it.",
    ],
    [
      "Commonly interacts through predefined interfaces, APIs, or direct user inputs.",
      "Can coordinate interactions between users, tools, external services, and other AI agents.",
    ],
    [
      "Humans generally define tasks, configure models, interpret results, and initiate subsequent actions.",
      "Humans can delegate objectives, establish permissions, supervise execution, and approve sensitive or consequential actions.",
    ],
    [
      "Commonly integrated into applications, analytics pipelines, databases, and business intelligence systems.",
      "Often implemented using interconnected AI models, orchestration frameworks, tools, APIs, memory systems, and other agents.",
    ],
    [
      "Examples include spam detection, image recognition, medical image classification, credit risk prediction, customer segmentation, and demand forecasting.",
      "Examples include autonomous research assistants, AI coding agents, intelligent customer support agents, business process automation, and multi-agent systems.",
    ],
  ];

  const practicalExamples = [
    [
      "Email management",
      "Classifies incoming emails as spam or legitimate.",
      "Reviews, prioritizes, organizes emails, and prepares replies based on user instructions.",
    ],
    [
      "Manufacturing",
      "Analyzes product images to identify defects.",
      "Coordinates inspection results, records defects, and initiates authorized quality-control workflows.",
    ],
    [
      "Sales forecasting",
      "Predicts future sales using historical data.",
      "Uses forecasts and business information to coordinate inventory analysis and recommend appropriate actions.",
    ],
    [
      "Customer management",
      "Predicts customer churn and groups customers into segments.",
      "Investigates customer issues and coordinates appropriate support activities.",
    ],
    [
      "Healthcare",
      "Analyzes medical images to identify potential abnormalities.",
      "Coordinates approved information-gathering and administrative workflows under professional supervision.",
    ],
    [
      "Software development",
      "Identifies code patterns, errors, or potential defects.",
      "Analyzes a codebase, proposes changes, executes tests, and revises its work based on results.",
    ],
  ];

  return (
    <ArticleSection
      id="agentic-ai-vs-traditional-ai"
      number="06"
      title="Agentic AI vs Traditional AI"
    >
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm text-slate-300">
          <thead>
            <tr className="bg-white/5 text-base text-white">
              <th className="w-1/2 border-b border-r border-white/10 px-6 py-4 font-semibold">
                Traditional AI
              </th>
              <th className="w-1/2 border-b border-white/10 px-6 py-4 font-semibold">
                Agentic AI
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map(([traditional, agentic]) => (
              <tr key={traditional} className="align-top even:bg-white/[0.03]">
                <td className="border-b border-r border-white/10 px-6 py-4 leading-7">
                  {traditional}
                </td>
                <td className="border-b border-white/10 px-6 py-4 leading-7">
                  {agentic}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Practical examples
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Traditional AI and Agentic AI in action
          </h3>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-cyan-300/20 bg-slate-950/30 shadow-2xl shadow-cyan-950/20">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm text-slate-300">
            <thead>
              <tr className="bg-cyan-300/10 text-white">
                <th className="w-1/4 border-b border-r border-cyan-300/20 px-6 py-4 font-semibold">
                  Scenario
                </th>
                <th className="w-1/3 border-b border-r border-cyan-300/20 px-6 py-4 font-semibold">
                  Traditional AI
                </th>
                <th className="w-5/12 border-b border-cyan-300/20 px-6 py-4 font-semibold">
                  Agentic AI
                </th>
              </tr>
            </thead>
            <tbody>
              {practicalExamples.map(([scenario, traditional, agentic]) => (
                <tr key={scenario} className="align-top even:bg-white/[0.03]">
                  <th className="border-b border-r border-cyan-300/10 px-6 py-5 font-semibold text-cyan-100">
                    {scenario}
                  </th>
                  <td className="border-b border-r border-cyan-300/10 px-6 py-5 leading-7">
                    {traditional}
                  </td>
                  <td className="border-b border-cyan-300/10 px-6 py-5 leading-7">
                    {agentic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-violet-300/20 bg-violet-300/10 px-6 py-5 text-base leading-7 text-slate-200">
        Traditional AI is not necessarily incapable of decision-making, tool
        usage, or autonomous operation. The main difference is that Agentic AI
        emphasizes goal-oriented reasoning, dynamic planning, coordination of
        multiple actions, and feedback-driven execution
      </div>
    </ArticleSection>
  );
}

export default AgenticAIVsTraditionalAI;
