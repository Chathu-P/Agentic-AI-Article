import ArticleSection from "./ArticleSection";

const topicClassName =
  "group rounded-xl border border-white/10 bg-slate-950/30 px-5 transition open:border-cyan-400/30 open:bg-slate-900/40";
const summaryClassName =
  "flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden";

function Fundamentals() {
  return (
    <ArticleSection
      id="fundamentals"
      number="02"
      title="Fundamentals"
      label="The Theoretical Foundations"
    >
      <div className="space-y-5 text-justify text-slate-300 leading-7">
        <p>
          An intelligent agent is more than a system that simply receives
          information and produces an output. It is an entity capable of
          perceiving its surroundings, interpreting available information,
          making decisions, and taking actions to achieve particular objectives.
          The theoretical foundations of intelligent agents explain how these
          capabilities work together to produce goal-directed behaviour. They
          also provide the conceptual basis for modern Agentic AI systems.
        </p>

        <div className="space-y-3">
          <details className={topicClassName}>
            <summary className={summaryClassName}>
              <span>2.1 Intelligent Agents and Environments</span>
              <span className="text-cyan-300 transition group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <div className="space-y-5 border-t border-white/10 pb-5 pt-4">
              <p>
                An <strong className="text-white">intelligent agent</strong> is
                a system that perceives its environment through sensors and acts
                upon that environment through actuators. The environment refers
                to the external world or digital space in which the agent
                operates, while sensors and actuators provide the mechanisms
                through which the agent interacts with it.
              </p>
              <p>
                An agent may be a physical system, such as a robot that uses
                cameras and other sensors to understand its surroundings, or a
                software-based system that receives information through user
                inputs, files, databases, and APIs. Similarly, its actions may
                involve physical movements or digital operations such as
                retrieving information, updating records, sending messages, and
                executing software commands.
              </p>
              <p>
                The relationship between an agent and its environment is central
                to intelligent behaviour. An agent does not operate in
                isolation; its decisions depend on the information it receives
                and the conditions in which it operates. Therefore, the design
                of an intelligent agent must consider both its internal
                capabilities and the characteristics of its environment.
              </p>
              <p>
                For example, an autonomous delivery robot operates in a physical
                environment containing roads, pedestrians, obstacles, and
                traffic signals. It must interpret information from its sensors
                and select appropriate actions to navigate safely towards its
                destination.
              </p>
            </div>
          </details>

          <details className={topicClassName}>
            <summary className={summaryClassName}>
              <span>2.2 Goal-Oriented Behaviour</span>
              <span className="text-cyan-300 transition group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <div className="space-y-5 border-t border-white/10 pb-5 pt-4">
              <p>
                One of the defining characteristics of an intelligent agent is
                its ability to work towards a specific goal rather than merely
                respond to individual inputs.{" "}
                <strong className="text-white">Goal-oriented behaviour</strong>{" "}
                refers to the ability of an agent to select and perform actions
                that contribute to achieving a desired outcome.
              </p>
              <p>
                A goal provides direction for the agent&apos;s decision-making
                process. Instead of executing a fixed sequence of instructions
                in every situation, an intelligent agent can consider the
                current state of its environment, identify the actions available
                to it, and determine which actions are likely to move it closer
                to its objective.
              </p>
              <p>
                For instance, if a delivery robot is assigned the goal of
                delivering a package to a particular address, it must determine
                a suitable route, navigate around obstacles, respond to changes
                in road conditions, and continue adjusting its actions until the
                delivery is completed. The exact actions may change depending on
                the circumstances, but the overall objective remains the same.
              </p>
              <p>
                In classical AI, an agent&apos;s success can be evaluated using
                a <strong className="text-white">performance measure</strong>,
                which specifies how desirable its outcomes are. This helps
                distinguish between actions that merely produce a response and
                actions that contribute effectively to the agent&apos;s
                objective.
              </p>
              <p>
                Goal-oriented behaviour is particularly important in Agentic AI
                because users often provide high-level objectives rather than
                detailed step-by-step instructions. The agent must interpret the
                intended outcome and determine an appropriate course of action.
              </p>
            </div>
          </details>

          <details className={topicClassName}>
            <summary className={summaryClassName}>
              <span>2.3 Autonomy and Rationality</span>
              <span className="text-cyan-300 transition group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <div className="space-y-5 border-t border-white/10 pb-5 pt-4">
              <p>
                Two important theoretical properties of intelligent agents are{" "}
                <strong className="text-white">autonomy</strong> and{" "}
                <strong className="text-white">rationality</strong>. Although
                they are closely related, they describe different aspects of
                intelligent behaviour.
              </p>
              <p>
                <strong className="text-white">Autonomy</strong> refers to an
                agent&apos;s ability to operate and make decisions without
                requiring continuous direct human intervention. An autonomous
                agent uses its available information, internal knowledge, and
                previous experiences to determine what actions to perform. Its
                behaviour is not entirely controlled by a predefined sequence of
                instructions; instead, it can respond to changing circumstances
                within the boundaries established by its design.
              </p>
              <p>
                For example, an autonomous scheduling agent may arrange meetings
                by considering participants&apos; availability, existing
                calendar events, and scheduling constraints. It can identify
                suitable time slots and make scheduling decisions without
                requiring a user to specify every individual step.
              </p>
              <p>
                <strong className="text-white">Rationality</strong>, on the
                other hand, concerns how effectively an agent selects its
                actions. A rational agent selects the action expected to
                maximise its performance measure based on the information it has
                perceived, its available knowledge, and the actions it can
                perform.
              </p>
              <p>
                Rationality does not mean that an agent always makes perfect
                decisions or knows the future. Instead, it means that the agent
                chooses the most appropriate action based on the evidence and
                information available at the time. Its decisions may still be
                affected by incomplete information, uncertainty, or limitations
                in its capabilities. Autonomy, reactivity, and proactiveness are
                important properties of intelligent agents. In particular,
                proactiveness describes the ability to take initiative and
                pursue goals rather than simply react to environmental changes.
              </p>
              <p>
                Autonomy and rationality therefore complement each other.
                Autonomy enables an agent to make decisions independently, while
                rationality provides a basis for selecting actions that are
                expected to produce desirable outcomes. Together, they support
                intelligent and goal-directed behaviour.
              </p>
            </div>
          </details>

          <details className={topicClassName}>
            <summary className={summaryClassName}>
              <span>2.4 Perception and Action</span>
              <span className="text-cyan-300 transition group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <div className="space-y-5 border-t border-white/10 pb-5 pt-4">
              <p>
                <strong className="text-white">Perception and action</strong>{" "}
                form the fundamental mechanisms through which an intelligent
                agent interacts with its environment. Perception enables an
                agent to collect and interpret information, while action allows
                it to influence the environment based on that information.
              </p>
              <p>
                In classical AI, the information received by an agent through
                its sensors is known as a{" "}
                <strong className="text-white">percept</strong>. A percept may
                represent a single observation at a particular moment, while a
                percept sequence represents the complete history of observations
                received by the agent. The agent uses this information, together
                with its built-in knowledge, to determine an appropriate action.
              </p>
              <p>
                The nature of perception and action depends on the type of
                agent:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong className="text-white">Physical agents:</strong>{" "}
                  Robots may use cameras, infrared sensors, GPS, and other
                  devices to perceive their surroundings. Their actions may
                  include moving, turning, picking up objects, or avoiding
                  obstacles.
                </li>
                <li>
                  <strong className="text-white">Software agents:</strong>{" "}
                  Digital agents may receive information through text prompts,
                  databases, documents, websites, and APIs. Their actions may
                  include searching for information, updating files, calling
                  external services, or generating responses.
                </li>
              </ul>
              <p>
                Perception and action are not isolated operations. Information
                collected through perception influences the agent&apos;s
                decisions, while the results of its actions may change the
                environment and create new information for subsequent decisions.
              </p>
            </div>
          </details>

          <details className={topicClassName}>
            <summary className={summaryClassName}>
              <span>2.5 Agent–Environment Interaction</span>
              <span className="text-cyan-300 transition group-open:rotate-180">
                ⌄
              </span>
            </summary>
            <div className="space-y-5 border-t border-white/10 pb-5 pt-4">
              <p>
                The interaction between an agent and its environment is a
                continuous process in which the agent observes conditions,
                selects actions, and receives new information about the
                resulting situation. This interaction provides the foundation
                for adaptive and responsive intelligent behaviour.
              </p>
              <p>
                The process can be understood through the following sequence:
              </p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong className="text-white">Perception:</strong> The agent
                  receives information about the current state of its
                  environment.
                </li>
                <li>
                  <strong className="text-white">Interpretation:</strong> It
                  processes the available information to understand the
                  situation.
                </li>
                <li>
                  <strong className="text-white">Decision-making:</strong> It
                  evaluates possible actions based on its objectives and
                  available knowledge.
                </li>
                <li>
                  <strong className="text-white">Action:</strong> It performs
                  the selected action through its actuators or connected tools.
                </li>
                <li>
                  <strong className="text-white">Feedback:</strong> It observes
                  the consequences of the action and receives updated
                  information from the environment.
                </li>
              </ol>
              <p>
                This process continues as the agent responds to new conditions
                and works towards its objective. If an action does not produce
                the expected result, the agent may need to reconsider its
                decision and select an alternative action.
              </p>
              <p>
                For example, when an autonomous delivery robot encounters a
                blocked road, it perceives the obstacle, evaluates alternative
                routes, selects a suitable path, and moves accordingly. It then
                observes the updated surroundings and continues navigating
                towards its destination. This illustrates how intelligent
                behaviour depends not only on selecting an action but also on
                responding to the consequences of that action.
              </p>
              <p>
                In modern Agentic AI systems, this interaction can involve
                digital environments, external tools, APIs, databases, and
                software applications. The agent may execute an operation,
                examine the returned result, and determine whether additional
                actions are necessary. This ability to use feedback to guide
                subsequent decisions is an important foundation for systems that
                perform complex, multi-step tasks.
              </p>
            </div>
          </details>
        </div>

        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-5">
          <h3 className="mb-3 text-xl font-semibold text-white">
            Bringing the Fundamentals Together
          </h3>
          <p>
            The theoretical foundations of intelligent agents can be understood
            as a combination of interconnected capabilities. An agent operates
            within an environment, perceives information from that environment,
            uses its knowledge to make rational decisions, and performs actions
            directed towards specific goals. Autonomy allows it to carry out
            these activities with a degree of independence, while continuous
            interaction and feedback enable it to respond to changing
            conditions.
          </p>
          <p className="mt-5">
            These principles provide the conceptual foundation for modern
            Agentic AI. Although contemporary systems introduce advanced
            capabilities such as large language models, memory mechanisms,
            planning techniques, and external tool integration, their underlying
            purpose remains connected to the fundamental idea of an intelligent
            agent: perceiving, deciding, and acting to achieve an objective.
          </p>
        </div>
      </div>
    </ArticleSection>
  );
}

export default Fundamentals;
