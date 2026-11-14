import {
  BrainCircuit,
  CheckCircle2,
  Eye,
  Lightbulb,
  RefreshCw,
  Sparkles,
  Target,
  Wrench,
} from "lucide-react";
import howItWorksImage from "../../assests/how-it-works.png";

const steps = [
  {
    letter: "S",
    title: "Sense",
    description:
      "Gathers information from its environment, including data, applications, and other relevant sources.",
    icon: Eye,
    color: "cyan",
  },
  {
    letter: "P",
    title: "Plan",
    description:
      "Understands the goal, breaks it into smaller tasks, and decides which actions to take.",
    icon: Target,
    color: "violet",
  },
  {
    letter: "A",
    title: "Act",
    description:
      "Uses tools, APIs, and software to execute the planned tasks and move the goal forward.",
    icon: Wrench,
    color: "blue",
  },
  {
    letter: "R",
    title: "Reflect",
    description:
      "Evaluates the results, identifies mistakes, and adjusts its next actions when necessary.",
    icon: RefreshCw,
    color: "fuchsia",
  },
];

const capabilities = [
  {
    title: "Action",
    description: "Interacts with tools and external systems.",
    icon: Wrench,
  },
  {
    title: "Reasoning",
    description: "Analyses situations and plans steps towards a goal.",
    icon: BrainCircuit,
  },
  {
    title: "Memory",
    description: "Retains relevant information and context when needed.",
    icon: CheckCircle2,
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="how-it-works-section scroll-mt-24 min-h-screen bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="how-it-works-heading">
          <div>
            <span className="eyebrow">The agent loop</span>
            <h2 className="mt-5 text-4xl font-bold text-white">
              How Agentic AI Works
            </h2>
          </div>
          <p className="max-w-xl text-justify leading-8 text-slate-400">
            Most traditional AI applications respond to instructions by
            generating text, images, or answers. Agentic AI goes further by
            combining reasoning with tools and the ability to take action.
            Instead of simply answering a question, it works towards a specific
            goal through multiple steps, with varying levels of human
            supervision.
          </p>
        </div>

        <div className="spar-intro">
          <Sparkles size={18} aria-hidden="true" />
          <span>One continuous cycle</span>
          <strong>SPAR framework</strong>
          <span className="hidden sm:inline">Sense · Plan · Act · Reflect</span>
        </div>

        <div className="spar-grid">
          {steps.map(
            ({ letter, title, description, icon: Icon, color }, index) => (
              <article className={`spar-card spar-card-${color}`} key={title}>
                <div className="spar-card-top">
                  <span className="spar-letter">{letter}</span>
                  <Icon size={22} aria-hidden="true" />
                  <span className="spar-step">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {index < steps.length - 1 && (
                  <span className="spar-connector" aria-hidden="true">
                    →
                  </span>
                )}
              </article>
            ),
          )}
        </div>

        <div className="capabilities-layout">
          <div>
            <span className="eyebrow">What makes it possible</span>
            <h3 className="capabilities-title">
              Intelligence that can move from thought to execution.
            </h3>
          </div>
          <div className="capabilities-grid">
            {capabilities.map(({ title, description, icon: Icon }) => (
              <article className="capability-card" key={title}>
                <Icon size={22} aria-hidden="true" />
                <h4>{title}</h4>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="ai-difference">
          <div className="ai-difference-label">
            <Lightbulb size={20} aria-hidden="true" />
            <span>The key difference</span>
          </div>
          <p className="ai-difference-sentence">
            Generative AI focuses on creating responses, while Agentic AI
            focuses on achieving goals through actions.
          </p>
        </div>

        <figure className="how-it-works-visual">
          <img
            src={howItWorksImage}
            alt="Agentic AI cycle showing Sense, Plan, Act, and Reflect"
          />
          <figcaption>
            Agentic AI turns a goal into a repeatable cycle of action and
            learning.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default HowItWorks;
