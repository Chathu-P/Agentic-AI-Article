import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  CircleDollarSign,
  Handshake,
  Layers3,
  LockKeyhole,
  ShieldAlert,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

const challenges = [
  {
    title: "Reliability & Trust",
    description:
      "Agents can misunderstand instructions, make incorrect decisions, or produce unexpected results. Accuracy and consistency remain essential.",
    icon: ShieldAlert,
    tone: "cyan",
  },
  {
    title: "Security & Privacy",
    description:
      "When agents access personal information, business data, and external systems, sensitive information must stay protected.",
    icon: LockKeyhole,
    tone: "violet",
  },
  {
    title: "Human Oversight",
    description:
      "Independent systems may miss context that requires judgment, experience, or common sense. Human supervision still matters.",
    icon: UserRoundCheck,
    tone: "blue",
  },
  {
    title: "Integration & Complexity",
    description:
      "Connecting agents with applications, databases, and business systems is difficult when data quality and technical limits vary.",
    icon: Layers3,
    tone: "fuchsia",
  },
  {
    title: "Cost & Implementation",
    description:
      "Building, maintaining, and managing agents requires resources, technical knowledge, and careful planning.",
    icon: CircleDollarSign,
    tone: "amber",
  },
];

const futureIdeas = [
  {
    title: "Smarter AI Assistants",
    description: "Understand preferences and manage everyday activities.",
    icon: Bot,
  },
  {
    title: "Collaborative AI Agents",
    description: "Work together to complete complex tasks and solve problems.",
    icon: Handshake,
  },
  {
    title: "Autonomous Workflows",
    description: "Manage entire business processes with less manual effort.",
    icon: BrainCircuit,
  },
  {
    title: "Personalized Experiences",
    description: "Provide services and recommendations based on individual needs.",
    icon: Sparkles,
  },
];

function Challenges() {
  return (
    <section
      id="challenges"
      className="challenges-section scroll-mt-24 min-h-screen bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="challenges-heading">
          <div>
            <span className="eyebrow">The responsibility layer</span>
            <h2 className="mt-5 text-4xl font-bold text-white">
              Challenges and the Future
            </h2>
          </div>
          <p className="max-w-2xl text-justify leading-8 text-slate-400">
            Although Agentic AI offers exciting possibilities, giving systems
            the ability to make decisions and take actions independently raises
            important questions about trust, control, and responsible adoption.
          </p>
        </div>

        <div className="challenge-timeline">
          <div className="timeline-label">
            <ShieldAlert size={20} aria-hidden="true" />
            <span>Before agents act independently</span>
          </div>
          {challenges.map(({ title, description, icon: Icon, tone }, index) => (
            <article className={`timeline-item timeline-item-${tone}`} key={title}>
              <div className="timeline-marker">
                <Icon size={20} aria-hidden="true" />
              </div>
              <div className="timeline-content">
                <span className="timeline-number">0{index + 1} / Challenge</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="future-timeline">
          <div className="future-timeline-heading">
            <span className="eyebrow">What comes next</span>
            <h3>The future is collaborative.</h3>
            <p>
              As AI technologies advance, more capable agents will work
              alongside people, combining machine efficiency with human
              creativity and judgment.
            </p>
          </div>
          <div className="future-circles">
            {futureIdeas.map(({ title, description, icon: Icon }, index) => (
              <article className="future-circle-item" key={title}>
                <div className="future-circle">
                  <Icon size={24} aria-hidden="true" />
                  <span>0{index + 1}</span>
                </div>
                <div className="future-circle-content">
                  <span>Future possibility</span>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="human-ai-banner">
          <div className="human-ai-icon">
            <CheckCircle2 size={24} aria-hidden="true" />
          </div>
          <div>
            <span>The guiding principle</span>
            <h3>Human judgment, amplified by intelligent action.</h3>
          </div>
          <p>
            The goal is not to replace people, but to help them focus on the
            decisions and ideas that matter most.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Challenges;
