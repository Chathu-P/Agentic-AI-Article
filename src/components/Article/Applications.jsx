import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Headphones,
  HeartPulse,
  Leaf,
  Megaphone,
  Scale,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Users,
  X,
} from "lucide-react";
import ArticleSection from "./ArticleSection";
import {
  applicationsConclusion,
  applicationsIntroduction,
  default as applications,
} from "../../data/applications";

const iconMap = {
  code: Code2,
  headphones: Headphones,
  search: Search,
  shield: ShieldCheck,
  graduation: GraduationCap,
  heart: HeartPulse,
  megaphone: Megaphone,
  shopping: ShoppingCart,
  truck: Truck,
  leaf: Leaf,
  users: Users,
  scale: Scale,
};

const accentClasses = {
  cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-300",
  violet: "border-violet-300/30 bg-violet-300/10 text-violet-300",
  fuchsia: "border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-300",
  emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-300",
  amber: "border-amber-300/30 bg-amber-300/10 text-amber-300",
  rose: "border-rose-300/30 bg-rose-300/10 text-rose-300",
  orange: "border-orange-300/30 bg-orange-300/10 text-orange-300",
  pink: "border-pink-300/30 bg-pink-300/10 text-pink-300",
  blue: "border-blue-300/30 bg-blue-300/10 text-blue-300",
  lime: "border-lime-300/30 bg-lime-300/10 text-lime-300",
  indigo: "border-indigo-300/30 bg-indigo-300/10 text-indigo-300",
  slate: "border-slate-300/30 bg-slate-300/10 text-slate-300",
};

function Applications() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedApplication, setSelectedApplication] = useState(null);
  const categories = useMemo(
    () => ["All", ...new Set(applications.map(({ category }) => category))],
    [],
  );
  const visibleApplications =
    activeCategory === "All"
      ? applications
      : applications.filter(({ category }) => category === activeCategory);

  return (
    <ArticleSection id="applications" number="07" title="Applications">
      <div className="mb-8 text-justify flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-full">
          <p className="text-slate-300 leading-7">
            Agentic AI is increasingly being applied across industries to
            automate complex tasks, support decision-making, and coordinate
            activities that previously required continuous human involvement.
            Explore an application to see how agents transform a high-level
            objective into practical work.
          </p>
          <p className="mt-4 text-slate-400 leading-7">
            {applicationsIntroduction}
          </p>
        </div>
        <span className="shrink-0 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-sm text-cyan-200">
          {applications.length} application domains
        </span>
      </div>

      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${
              activeCategory === category
                ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-200"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visibleApplications.map((application) => {
          const Icon = iconMap[application.icon] || BriefcaseBusiness;
          const accent = accentClasses[application.accent];

          return (
            <button
              key={application.title}
              type="button"
              onClick={() => setSelectedApplication(application)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 text-left transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={application.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                  <span
                    className={`rounded-xl border p-3 backdrop-blur-sm ${accent}`}
                  >
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="flex items-center gap-2 text-xs font-mono text-white/70">
                    {application.number}
                    <ArrowUpRight
                      size={15}
                      className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
                    />
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                  {application.category}
                </p>
                <h3 className="relative mt-2 text-xl font-semibold text-white">
                  {application.title}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-slate-400">
                  {application.summary}
                </p>
                <span className="relative mt-5 inline-block text-sm font-medium text-cyan-300">
                  Explore application →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-violet-300/20 bg-violet-300/[0.05] p-5 sm:p-6">
        <p className="text-sm leading-7 text-slate-300">
          <span className="font-semibold text-violet-200">
            The broader impact:
          </span>{" "}
          {applicationsConclusion}
        </p>
      </div>

      {selectedApplication && (
        <div
          role="presentation"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
          onClick={() => setSelectedApplication(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-details-title"
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-cyan-300/20 bg-slate-950 p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {selectedApplication.number} / {selectedApplication.category}
                </p>
                <h3
                  id="application-details-title"
                  className="text-2xl font-bold text-white sm:text-3xl"
                >
                  {selectedApplication.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedApplication(null)}
                aria-label="Close application details"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <p className="text-base leading-7 text-slate-300">
              {selectedApplication.description}
            </p>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-5">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-300">
                Key applications
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {selectedApplication.keyApplications.map((item) => (
                  <li key={item} className="text-sm leading-6 text-slate-300">
                    <span className="mr-2 text-cyan-300">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 rounded-xl border border-emerald-300/20 bg-emerald-300/[0.05] p-5">
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-300">
                Impact
              </h4>
              <p className="text-sm leading-6 text-slate-300">
                {selectedApplication.impact}
              </p>
            </div>
            {selectedApplication.note && (
              <p className="mt-4 text-xs leading-5 text-amber-200/80">
                Note: {selectedApplication.note}
              </p>
            )}
          </div>
        </div>
      )}
    </ArticleSection>
  );
}

export default Applications;
