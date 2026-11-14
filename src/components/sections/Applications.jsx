import {
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  CircleDollarSign,
  Headphones,
  HeartPulse,
  Megaphone,
  Network,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

const applications = [
  {
    title: "Customer Service",
    description:
      "Investigate issues, retrieve customer information, update service requests, and escalate complex problems.",
    example:
      "A telecom agent can diagnose a connection problem and arrange a technician visit.",
    icon: Headphones,
    tag: "Resolve faster",
  },
  {
    title: "Finance & Fraud Detection",
    description:
      "Monitor transactions, identify unusual patterns, assess fraud risks, and accelerate responses to suspicious activity.",
    icon: ShieldCheck,
    tag: "Protect every transaction",
  },
  {
    title: "Operations & Supply Chain",
    description:
      "Monitor inventory, detect supply disruptions, compare suppliers, and recommend alternative delivery schedules.",
    icon: Network,
    tag: "Adapt in real time",
  },
  {
    title: "Sales & Marketing",
    description:
      "Identify prospects, prepare personalized emails, schedule follow-ups, update customer records, and manage pipelines.",
    icon: Megaphone,
    tag: "Grow relationships",
  },
  {
    title: "Healthcare",
    description:
      "Document consultations, summarize patient information, and manage administrative work while clinicians retain oversight.",
    icon: HeartPulse,
    tag: "Give time back to care",
  },
  {
    title: "HR & IT Services",
    description:
      "Support recruitment, onboarding, routine HR questions, IT tickets, and common technical troubleshooting.",
    icon: BriefcaseBusiness,
    tag: "Streamline support",
  },
];

function Applications() {
  return (
    <section
      id="applications"
      className="applications-section scroll-mt-24 min-h-screen bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="applications-heading">
          <div>
            <span className="eyebrow">From potential to practice</span>
            <h2 className="mt-5 text-4xl font-bold text-white">
              Real-World Applications
            </h2>
          </div>

          <p className="max-w-2xl text-justify leading-8 text-slate-400">
            Agentic AI is gradually moving beyond experimentation and finding
            practical applications across industries. By combining reasoning,
            memory, and the ability to use tools, AI agents can automate
            workflows, support decisions, and complete tasks with less manual
            effort.
          </p>
        </div>

        <div className="applications-grid">
          {applications.map(
            ({ title, description, example, icon: Icon, tag }, index) => (
              <article className="application-card" key={title}>
                <div className="application-card-header">
                  <span className="application-number">0{index + 1}</span>
                  <div className="application-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <ChevronRight className="application-arrow" size={20} aria-hidden="true" />
                </div>
                <span className="application-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                {example && <small>{example}</small>}
              </article>
            ),
          )}
        </div>

        <div className="productivity-banner">
          <div className="productivity-icon">
            <Sparkles size={24} aria-hidden="true" />
          </div>
          <div>
            <span>Everyday advantage</span>
            <h3>Personal Productivity</h3>
            <p>
              Organize emails, manage calendars, conduct research, summarize
              documents, and delegate complete daily workflows to an AI agent.
            </p>
          </div>
          <div className="productivity-tools" aria-hidden="true">
            <CalendarDays size={20} />
            <CircleDollarSign size={20} />
            <ShoppingCart size={20} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Applications;
