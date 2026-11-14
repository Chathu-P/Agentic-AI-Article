import { useEffect, useState } from "react";
import ArticleSection from "./ArticleSection";
import introductionImage from "../../assests/intro.png";

function Introduction() {
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    if (!isImageOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsImageOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isImageOpen]);

  return (
    <ArticleSection id="introduction" number="01" title="Introduction">
      <div className="space-y-8 text-justify text-slate-300 leading-7">
        <div className="space-y-5">
          <p>
            Artificial Intelligence (AI) has undergone significant
            transformation over the past decades, evolving from rule-based
            systems and traditional machine learning algorithms to deep learning
            and generative AI technologies capable of understanding language,
            generating content, and supporting complex decision-making. These
            advancements have transformed how individuals and organizations
            interact with intelligent systems. However, despite their
            capabilities, many conventional AI applications remain primarily
            focused on responding to specific inputs, generating predictions, or
            performing predefined tasks, often requiring human involvement to
            coordinate subsequent activities.
          </p>

          <p>
            The increasing demand for intelligent systems capable of handling
            complex, multi-step objectives has contributed to the emergence of{" "}
            <strong className="text-white">
              Agentic Artificial Intelligence (Agentic AI)
            </strong>
            . This emerging approach represents a significant development in the
            evolution of AI, shifting the focus from systems that primarily
            provide information or recommendations towards systems that can
            independently pursue objectives, make decisions, and execute
            sequences of actions within defined boundaries.
          </p>

          <p>
            The foundations of Agentic AI are closely connected to the concept
            of intelligent agents in classical artificial intelligence.
            Intelligent agents are systems that perceive their environments and
            take actions to achieve specified objectives. Building upon this
            foundation, modern Agentic AI combines advances in Large Language
            Models (LLMs), autonomous decision-making, and external software
            integrations to create more flexible and goal-oriented intelligent
            systems. These developments highlight the growing potential of AI
            agents to perform increasingly complex tasks through coordinated
            reasoning and action.
          </p>

          <p>
            Unlike conventional AI applications that primarily focus on
            individual tasks, Agentic AI introduces the possibility of
            delegating broader objectives to intelligent systems. This
            development creates opportunities to transform how digital workflows
            are managed, how decisions are supported, and how humans collaborate
            with intelligent technologies. Its applications extend across
            software development, healthcare, finance, education, business
            operations, retail, transportation, and scientific research.
          </p>

          <p>
            Nevertheless, increasing AI autonomy also raises important questions
            concerning reliability, transparency, security, accountability, and
            human oversight. Understanding these opportunities and limitations
            is essential for developing and deploying agentic systems
            responsibly.
          </p>

          <p>
            This article explores the foundations, architecture, core
            components, operational mechanisms, agent types, applications,
            technologies, challenges, and future directions of Agentic AI,
            providing a comprehensive understanding of this emerging field and
            its potential impact on modern society.
          </p>
        </div>

        <figure className="mx-auto w-full max-w-2xl overflow-hidden rounded-xl border border-cyan-400/20 bg-slate-900/60">
          <button
            type="button"
            onClick={() => setIsImageOpen(true)}
            aria-label="Open the Agentic AI workflow comparison image"
            className="block w-full cursor-zoom-in transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset"
          >
            <img
              src={introductionImage}
              alt="Comparison of Agentic AI and Traditional AI workflows"
              className="h-auto w-full object-cover"
            />
          </button>
          <figcaption className="px-4 py-3 text-center text-sm text-slate-400">
            Agentic AI observes, plans, acts, and evaluates results, while
            traditional AI returns a response for a human to act upon.
          </figcaption>
        </figure>
      </div>
      {isImageOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Agentic AI workflow comparison"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={() => setIsImageOpen(false)}
        >
          <div
            className="relative max-h-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsImageOpen(false)}
              aria-label="Close image popup"
              className="absolute right-2 top-2 rounded-full bg-slate-950/80 px-3 py-1 text-2xl leading-none text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              &times;
            </button>
            <img
              src={introductionImage}
              alt="Comparison of Agentic AI and Traditional AI workflows"
              className="max-h-[90vh] max-w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </ArticleSection>
  );
}

export default Introduction;
