const agentTypes = [
  /*Simple Reflex Agents*/ 
  {
    number: "01",
    name: "Simple Reflex",
    eyebrow: "The rule follower",
    description:
      "Selects actions based only on the current input or observation. It follows predefined condition-action rules without memory.",
    detailedDescription:
      "A Simple Reflex Agent is the most basic type of intelligent agent in artificial intelligence. It selects actions based entirely on the current perception of its environment, using predefined condition-action rules. These rules determine how the agent should respond to particular situations, without considering previous experiences, maintaining an internal memory of past states, or planning for future outcomes.",
    process:
      "Simple reflex agents operate according to the principle of condition-action rules, commonly expressed as IF-THEN statements. The agent receives information from its environment through sensors, identifies the current situation, applies the corresponding rule, and performs the selected action through actuators. This process allows the agent to respond quickly and consistently to clearly defined environmental conditions.",
    suitability:
      "Simple reflex agents are particularly suitable for environments that are predictable, fully observable, and governed by well-defined rules. Their straightforward decision-making mechanism makes them computationally efficient and relatively easy to design and implement. However, because they do not maintain information about previous states, they may struggle in partially observable, dynamic, or complex environments where successful decision-making requires memory, learning, or long-term planning.",
    workingMechanism: [
      ["Perception", "The agent receives information about its environment through sensors. This information is known as a percept."],
      ["Interpretation", "The agent identifies the relevant condition from the current percept to determine the situation it is facing."],
      ["Rule Matching", "It compares the identified condition with its predefined condition-action rules to find a matching rule."],
      ["Action Selection", "Based on the matching rule, the agent selects the appropriate action."],
      ["Action Execution", "The selected action is performed through actuators, affecting the environment."],
    ],
    advantages: [
      "Simple architecture that is easy to understand, design, and implement.",
      "Fast responses because decisions are based on current perceptions and predefined rules.",
      "Low computational requirements compared with more complex agent architectures.",
      "Effective in predictable environments with clearly defined conditions and actions.",
    ],
    limitations: [
      "Does not maintain internal memory of previous percepts or environmental states.",
      "Cannot learn from past experiences or automatically improve its decision-making.",
      "Has limited ability to handle partially observable or unpredictable environments.",
      "Cannot independently plan a sequence of actions to achieve long-term goals.",
      "May repeatedly produce inappropriate responses when predefined rules are insufficient for unfamiliar situations.",
    ],
    example:
      "A thermostat switches on the heating when the temperature falls below a specified threshold.",
    signal: "IF → THEN",
    response: "IF the Obstacle is detected → THEN Turn left",
    capabilities: ["Current input"],
    outcome: "It reacts immediately when it detects an obstacle, but it does not remember previous situations or know whether turning left is safe, so it makes decisions based only on the current sensor input.",
    route: ["START", "OBSTACLE", "TURN LEFT", "CUSTOMER"],
    metric: "Fast reaction",
  },


  /*Model-Based Reflex Agents*/ 
  {
    number: "02",
    name: "Model-Based Reflex",
    eyebrow: "The state keeper",
    description:
      "Maintains an internal representation of its environment, combining current observations with stored information about previous states.",
    detailedDescription:
      "A Model-Based Reflex Agent is a type of intelligent agent that maintains an internal representation, known as an internal model or world model, to keep track of its environment. Unlike simple reflex agents, which make decisions solely based on their current perceptions, model-based reflex agents use both current sensory information and previously stored knowledge to determine appropriate actions. The internal model represents the agent's understanding of the environment, including previously observed information, the current estimated state, and knowledge of how the environment may change over time. By maintaining this internal state, the agent can infer information that is not directly available through its sensors at a particular moment.",
    process:
      "A model-based reflex agent operates through a continuous perception-state update-action cycle. It receives percepts through sensors, updates its internal state using the latest percept, the previous internal state, the previous action, and its model of environmental changes, then applies predefined condition-action rules to the updated state. The selected action is executed through actuators, causing a change in the environment, and the agent repeats the cycle as new percepts arrive. Its architecture includes sensors, an internal model, a reasoning and decision-making component, and actuators.",
    suitability:
      "Model-based reflex agents are particularly useful in partially observable and dynamic environments, where the agent cannot obtain complete information about its surroundings through a single observation. They are used in robotics and navigation, autonomous vehicles, gaming AI, industrial automation, and smart home systems. For example, a mobile robot can continue tracking an obstacle after it moves behind a wall, while an autonomous vehicle can estimate the positions of temporarily obscured vehicles and pedestrians.",
    workingMechanism: [
      ["Perception", "The agent receives information about its surroundings through sensors. These observations, known as percepts, describe current environmental conditions."],
      ["Internal State Updating", "It combines the latest percept with its previous internal state, previous action, and model of environmental changes to estimate the current state."],
      ["Condition-Action Rules", "It applies predefined IF-THEN rules to the updated internal state rather than relying exclusively on the latest sensory input."],
      ["Action Selection", "The reasoning component identifies the appropriate response based on the estimated state and matching rule."],
      ["Action Execution", "Actuators carry out the selected action, changing the environment and providing information for the next cycle."],
    ],
    advantages: [
      "Maintains an internal representation of the environment using previous observations and current percepts.",
      "Handles partially observable environments more effectively than simple reflex agents.",
      "Supports more informed decision-making by considering previously observed environmental conditions.",
      "Can account for the expected effects of actions and changes in the environment through its internal model.",
      "Provides a more flexible decision-making architecture for dynamic environments.",
    ],
    limitations: [
      "Maintaining and updating an internal model can require additional computational resources.",
      "Decision-making depends on the accuracy and completeness of the internal model.",
      "Incorrect or outdated environmental information can lead to inappropriate decisions.",
      "Cannot independently learn new condition-action rules in the classical model-based reflex architecture.",
      "Does not inherently perform long-term planning or optimize competing objectives.",
      "May struggle when environmental changes cannot be adequately represented by its predefined model and rules.",
    ],
    example:
      "A robotic vacuum remembers which areas it has cleaned and adjusts its movements around obstacles.",
    signal: "SENSE → STATE",
    response: "Left turn was blocked before → Try the right route",
    capabilities: ["Current input", "Memory"],
    outcome: "It uses its internal map to avoid repeating a blocked turn and chooses a remembered open route.",
    route: ["START", "REMEMBER", "REROUTE", "CUSTOMER"],
    metric: "Context aware",
  },


  /*Goal-Based Agents*/ 
  {
    number: "03",
    name: "Goal-Based",
    eyebrow: "The planner",
    description:
      "Considers a desired goal or target state, evaluating possible actions and planning steps toward the intended outcome.",
    additionalContent: {
      overview:
        "A Goal-Based Agent is an intelligent agent that selects actions by considering a specific objective or desired state that it needs to achieve. Unlike simple reflex agents, which respond directly to current environmental conditions, and model-based reflex agents, which use an internal representation of their environment, goal-based agents consider how different actions can lead to future states and whether those states satisfy a defined goal.",
      centralIdea:
        "The central idea behind this architecture is that an agent should not only understand its current situation but also determine what it needs to accomplish. To achieve this, the agent uses information about its current state, available actions, and the possible outcomes of those actions to identify a suitable sequence of steps. This process is commonly associated with problem-solving, search, and AI planning.",
      example:
        "For example, consider an AI-powered university examination scheduling system. Its objective is to generate an examination timetable in which every examination is assigned a suitable time slot and examination hall, while ensuring that students do not have overlapping examinations and that room capacities are not exceeded. Instead of assigning examinations randomly or following isolated predefined rules, the agent can examine the existing schedule, identify available options, and develop a sequence of assignments that satisfies the required conditions.",
      distinction:
        "Goal-based agents are particularly useful for problems that require multiple actions to reach a clearly defined outcome. However, achieving a goal does not necessarily mean finding the most efficient or valuable solution. Their primary concern is reaching a state that satisfies the specified goal conditions, whereas utility-based agents additionally evaluate and compare the quality of possible outcomes.",
      architectureIntro:
        "The architecture of a goal-based agent extends the capabilities of simpler agent architectures by introducing explicit goal information and a planning or search mechanism. It uses its understanding of the current environment together with the desired outcome to determine which actions should be performed.",
      architectureComponents: [
        ["Sensors", "Collect information from the environment and provide the agent with percepts about its current situation. For example, an examination scheduling agent may receive information about examination subjects, student registrations, available halls, and existing timetable assignments."],
        ["Internal State or World Model", "Represents the agent's current understanding of the environment. It stores relevant information about the current situation and how available actions may change that situation."],
        ["Goal Representation", "Defines the desired state or conditions that the agent must achieve. Goals can consist of one or multiple conditions that determine whether the task has been completed successfully."],
        ["Planning and Search Component", "Examines possible actions and their expected outcomes to identify a sequence of actions that can transform the current state into a goal state. Depending on the problem, it may use search algorithms or automated planning techniques."],
        ["Actuators", "Execute the selected actions and allow the agent to interact with the environment. These actions may involve physical operations, software commands, database updates, or communication with external systems."],
      ],
      goalIntro:
        "The goal is the central element that distinguishes goal-based agents from simpler reflex architectures. It provides a clear description of the desired outcome and guides the agent's decision-making process.",
      goalRepresentation:
        "A goal is generally represented through a goal condition or a goal test that determines whether a particular state satisfies the required objective. The goal may contain several conditions that must all be fulfilled before the task is considered complete.",
      goalExampleIntro:
        "For example, an examination scheduling agent may have the following goal conditions:",
      goalConditions: [
        "Every examination must be assigned to an available time slot.",
        "Every examination must be allocated to a suitable examination hall.",
        "No student should have two examinations scheduled at the same time.",
        "The assigned examination hall must have sufficient seating capacity.",
      ],
      planning:
        "Once the goal has been established, the agent evaluates the current state and identifies the actions required to achieve it. It considers possible sequences of actions, examines their outcomes, and selects a suitable plan.",
      search:
        "This process is commonly implemented using AI search and planning techniques. Algorithms such as Breadth-First Search (BFS), Depth-First Search (DFS), and A* Search can be used in appropriate problem formulations to explore possible states and identify paths towards a goal. The choice of algorithm depends on the structure of the problem, available information, and solution requirements.",
      optimization:
        "It is important to distinguish goal satisfaction from optimization. A goal-based agent may find a timetable that satisfies all required constraints without necessarily finding the timetable with the shortest examination period or the most convenient distribution of examination times. Selecting the best outcome according to such preferences introduces utility-based decision-making.",
      planningTitle: "Goal Representation and Planning",
      workingStages: [
        ["Goal Definition", "The agent receives an objective and identifies the conditions that must be satisfied to consider the task successful. The goal provides a clear direction for its subsequent actions."],
        ["Current State Assessment", "The agent gathers relevant information about the environment through sensors or available data sources. It establishes the current state and identifies the differences between the existing situation and the desired goal state."],
        ["Problem Formulation and Planning", "The agent defines the possible actions, their expected effects, and the conditions required to achieve the goal. It explores alternative action sequences using appropriate search or planning techniques and identifies a suitable plan."],
        ["Action Selection", "Based on the generated plan, the agent selects the next action or sequence of actions that will move the environment closer to the goal."],
        ["Action Execution and Monitoring", "The selected actions are performed through the agent's actuators. The agent monitors the resulting environmental changes to determine whether the planned steps are progressing as expected."],
        ["Goal Verification and Replanning", "The agent checks whether the desired conditions have been achieved. If the goal has not been reached or unexpected changes make the existing plan unsuitable, it can reassess the current state and formulate an alternative plan."],
      ],
      applications: [
        ["University Examination Scheduling", "An intelligent scheduling agent can generate an examination timetable by assigning subjects to suitable time slots and examination halls while satisfying constraints related to student availability, room capacity, and examination conflicts."],
        ["Navigation and Route Planning", "A navigation agent can determine a route from a starting location to a specified destination. It examines available roads, possible movements, and the expected outcomes of different routes to identify a sequence of actions that reaches the destination."],
        ["Robotic Task Execution", "A service robot assigned to deliver an object to a particular location can identify the required steps, such as locating the object, navigating through the environment, and placing it at the destination. It can revise its plan if an obstacle prevents the intended movement."],
        ["Automated Software Testing", "A testing agent may be given the goal of verifying that a particular software feature works correctly. It can identify the necessary test operations, execute them in sequence, examine the results, and perform additional tests when the expected conditions are not satisfied."],
        ["Travel and Trip Planning", "A travel-planning agent can work towards an objective such as preparing a complete itinerary for a specified destination and travel period. It can identify required activities, check available transportation and accommodation information, and coordinate the necessary planning steps."],
      ],
      applicationsIntro:
        "These examples illustrate how goal-based agents can transform a high-level objective into a sequence of actions. In practical applications, the complete system may combine goal-based reasoning with other agent architectures, optimization techniques, and learning mechanisms.",
      advantages: [
        "Supports goal-oriented decision-making by focusing on clearly defined objectives.",
        "Considers possible future states instead of relying exclusively on immediate environmental conditions.",
        "Can develop sequences of actions to solve problems that require multiple steps.",
        "Provides flexibility to reconsider or revise plans when environmental conditions change.",
        "Can be applied to a wide range of problem-solving, scheduling, navigation, and automation tasks.",
      ],
      limitations: [
        "Requires goals to be represented clearly enough for the agent to determine whether they have been achieved.",
        "Searching through large numbers of possible states and action sequences can require considerable computational resources.",
        "The quality of the generated plan depends on the accuracy of the agent's information about the environment and available actions.",
        "A goal-based agent may identify a valid solution without necessarily selecting the most efficient or desirable one.",
        "Unexpected environmental changes can make previously generated plans unsuitable, requiring additional planning.",
        "Handling multiple competing objectives and evaluating trade-offs may require utility-based reasoning or other advanced decision-making mechanisms.",
      ],
    },
    example:
      "A GPS identifies a destination and adapts its route when traffic conditions change.",
    signal: "PLAN → ARRIVE",
    response: "Map a sequence of turns that reaches the customer",
    capabilities: ["Current input", "Memory", "Goals"],
    outcome: "It looks beyond the immediate obstacle and plans several steps from its current position to the customer.",
    route: ["START", "PLAN", "WAYPOINTS", "CUSTOMER"],
    metric: "Goal reached",
  },

    /*Utility-Based Agents*/ 

  {
    number: "04",
    name: "Utility-Based",
    eyebrow: "The trade-off maker",
    description:
      "Uses a utility function to select the most desirable outcome, balancing cost, time, efficiency, risk, and other competing factors.",
    additionalContent: {
      overview:
        "A Utility-Based Agent is an intelligent agent that makes decisions by evaluating the desirability of different possible outcomes and selecting actions that provide the greatest expected benefit. Unlike goal-based agents, which primarily focus on achieving a specified objective, utility-based agents consider how beneficial each achievable outcome is and compare alternative actions according to their expected results.",
      centralIdea:
        "The central concept behind this architecture is utility, which represents the degree of preference or desirability associated with a particular outcome. A utility-based agent uses a mathematical representation called a utility function to assign numerical values to possible outcomes. These values allow the agent to compare alternatives and make decisions when several factors influence the quality of a result.",
      example:
        "This approach becomes particularly important in complex environments where achieving a goal is not the only consideration. Factors such as safety, time, cost, efficiency, reliability, and resource availability may influence which action is most appropriate. Furthermore, when the results of an action are uncertain, the agent must consider the likelihood of different possible outcomes rather than assuming that a particular action will always produce the same result.",
      distinction:
        "For example, consider an intelligent emergency ambulance dispatch system. When an emergency call is received, several ambulances may be available to respond. Although multiple vehicles might be capable of reaching the patient, they may differ in travel time, distance, available medical equipment, current workload, and traffic conditions. A utility-based agent can evaluate these factors and select the ambulance that provides the most beneficial response according to its defined priorities.",
      architectureIntro:
        "Utility-based agents are particularly useful in decision-making problems involving competing objectives and uncertain outcomes. By evaluating the expected desirability of possible results, they provide a more flexible approach to decision-making than systems that simply check whether a particular goal has been achieved.",
      architectureComponents: [
        ["Sensors", "Collect information from the environment and provide percepts required for decision-making. In an ambulance dispatch system, these may include GPS information, traffic updates, ambulance availability, emergency location details, and patient priority information."],
        ["Internal Model", "Represents the agent's understanding of the current environment and the possible effects of its actions. It may contain information about available resources, current conditions, and how the environment is expected to change. In uncertain environments, the model may also represent the probabilities of different outcomes."],
        ["Utility Function", "Assigns numerical values to possible outcomes based on the agent's preferences and decision-making priorities. It allows the agent to compare different alternatives by considering factors such as response time, safety, cost, and resource availability."],
        ["Action Selection Mechanism", "Evaluates the possible actions and their expected outcomes using the utility function. It selects the action that provides the highest expected utility according to the agent's model and defined preferences."],
        ["Actuators", "Execute the selected action and allow the agent to interact with its environment. In a digital dispatch system, these may include software commands that assign an ambulance, update dispatch records, and notify emergency personnel."],
      ],
      planningTitle: "Utility Function and Expected Utility",
      goalIntro:
        "The utility function is the central element of a utility-based agent. It represents the agent's preferences by assigning numerical values to different possible outcomes. A higher utility value indicates that an outcome is more desirable according to the priorities established for the agent.",
      goalRepresentation:
        "For example, an ambulance dispatch system may evaluate potential assignments using several factors:",
      goalExampleIntro: "",
      goalConditions: [
        "Expected response time to the emergency location.",
        "Availability of the required medical equipment.",
        "Distance between the ambulance and the patient.",
        "Current traffic and road conditions.",
        "Availability of other ambulances to handle additional emergencies.",
      ],
      planning:
        "These factors can be incorporated into a utility function that reflects the relative importance of each consideration. The agent can then compare possible ambulance assignments rather than selecting a vehicle based only on its distance from the patient.",
      search:
        "However, real-world decisions often involve uncertainty. An ambulance may encounter unexpected traffic, road closures, or delays. Therefore, evaluating an action based only on its most likely outcome may not be sufficient. To address this issue, utility-based agents use the concept of expected utility. Expected utility considers both the utility of possible outcomes and the probability of each outcome occurring. The agent calculates the expected utility of available actions and selects the action with the highest expected value. This allows it to make more informed decisions when outcomes are uncertain or when several objectives must be considered simultaneously.",
      optimization:
        "Importantly, utility values are not universal measurements of quality. They depend on the preferences, priorities, and constraints defined for the particular application. Therefore, designing an appropriate utility function is essential for achieving decisions that align with the intended performance requirements.",
      workingStages: [
        ["Perception", "The agent collects information about the current environment through its sensors. This information provides the context required to evaluate available decisions."],
        ["Internal Modeling", "The agent updates its internal representation using the latest percepts. It identifies relevant environmental conditions, available resources, and possible changes that may affect the outcomes of its actions."],
        ["Action Generation", "Based on the current state, the agent identifies a set of possible actions that could be performed. These alternatives represent the available choices for achieving the intended task."],
        ["Outcome Prediction", "The agent estimates the possible outcomes of each action using its internal model. When the environment is uncertain, it considers the probabilities associated with different possible results."],
        ["Utility Evaluation", "The utility function evaluates the possible outcomes by assigning numerical values according to the agent's priorities. The agent calculates the expected utility of each action by considering both outcome values and their probabilities."],
        ["Action Selection", "The agent compares the expected utility values and selects the action that provides the highest expected utility."],
        ["Action Execution and Monitoring", "The selected action is performed through the agent's actuators. The agent then receives new environmental information and repeats the decision-making process as conditions change."],
      ],
      applications: [
        ["Emergency Service Dispatch", "An intelligent dispatch system can evaluate available ambulances based on response time, location, equipment, traffic conditions, and emergency priority. It can select an assignment that provides the greatest expected benefit while considering the availability of resources for other emergencies."],
        ["Autonomous Vehicles", "Self-driving vehicle systems must consider several factors when selecting driving actions, including passenger safety, pedestrian safety, traffic conditions, travel time, and vehicle efficiency. Utility-based decision-making can help evaluate alternative actions according to their expected consequences. Real autonomous driving systems use a combination of planning, perception, control, and optimization techniques."],
        ["Smart Home Energy Management", "An intelligent home energy management system can balance indoor comfort, electricity consumption, energy costs, and environmental conditions. For example, it may adjust air-conditioning settings or schedule electrical appliances to reduce energy expenses while maintaining an acceptable level of comfort."],
        ["Healthcare Resource Allocation", "Hospital management systems can evaluate the allocation of limited resources such as intensive care beds, medical equipment, and available staff. Decisions can consider urgency, resource availability, patient requirements, and operational constraints. Such systems should support, rather than replace, qualified healthcare professionals."],
        ["Logistics and Delivery Management", "Delivery management systems can compare alternative delivery routes and vehicle assignments using factors such as travel time, fuel consumption, delivery deadlines, traffic conditions, and operating costs. The agent can select an option that provides the highest expected overall benefit."],
        ["Recommendation Systems", "Intelligent recommendation systems can evaluate different items or services according to user preferences, relevance, availability, and contextual information. A utility-based approach can help rank alternatives according to the value they are expected to provide to a particular user."],
      ],
      applicationsIntro:
        "Utility-based agents are particularly useful in applications where decisions require balancing multiple factors and selecting the most desirable outcome from several alternatives.",
      advantages: [
        "Supports decision-making when multiple objectives or competing priorities must be considered.",
        "Evaluates and compares different possible outcomes instead of treating all goal-achieving states equally.",
        "Can incorporate uncertainty by considering the probabilities of different outcomes.",
        "Provides a flexible approach to selecting actions based on changing environmental conditions.",
        "Can balance factors such as safety, cost, time, efficiency, and resource availability through a defined utility function.",
        "Supports more informed decision-making in complex environments where several alternatives are available.",
      ],
      limitations: [
        "Designing an appropriate utility function can be difficult because different objectives and preferences must be translated into numerical values.",
        "Incorrectly assigned utility values or priorities may lead to undesirable decisions.",
        "Evaluating numerous actions and possible outcomes can require significant computational resources.",
        "Accurate decision-making depends on the quality of the internal model and the estimated probabilities of possible outcomes.",
        "Balancing competing objectives may involve subjective or ethical considerations, particularly in healthcare and autonomous transportation.",
        "A conventional utility-based agent does not necessarily learn or update its utility function automatically; additional learning mechanisms are required for that capability.",
      ],
    },
    example:
      "A route planner balances travel time, distance, fuel consumption, and traffic conditions.",
    signal: "COMPARE → CHOOSE",
    response: "Compare routes → Choose the best time, energy, and safety balance",
    capabilities: ["Current input", "Memory", "Goals", "Trade-offs"],
    outcome: "It compares the available routes and selects the one with the highest overall utility.",
    route: ["START", "COMPARE", "BEST ROUTE", "CUSTOMER"],
    metric: "Value optimized",
  },

  /*Learning Agents*/ 
  {
    number: "05",
    name: "Learning",
    eyebrow: "The improver",
    description:
      "Improves performance through experience, feedback, and learning mechanisms instead of relying entirely on fixed rules.",
    additionalContent: {
      overview:
        "A Learning Agent is a type of intelligent agent that improves its performance by acquiring knowledge from experience, observing the results of its actions, and adapting its decision-making process based on feedback. Unlike agents that depend entirely on predefined rules, models, goals, or utility values, learning agents can modify aspects of their behaviour as they interact with the environment.",
      centralIdea:
        "One of the main characteristics of learning agents is their ability to operate in environments where the complete knowledge required for effective decision-making may not be available initially. Through continuous interaction, they can identify patterns, recognize changes, evaluate previous decisions, and improve their future actions. This enables them to become more competent than they were with their initial knowledge alone.",
      example:
        "For example, consider an intelligent warehouse inventory management system responsible for maintaining the availability of products in a distribution centre. Initially, the system may use historical sales records and predefined stock thresholds to determine when products should be reordered. However, customer demand can change due to seasonal variations, promotions, market trends, and unexpected purchasing patterns. A learning agent can analyse sales data, monitor inventory movements, and evaluate the outcomes of previous replenishment decisions. If certain products repeatedly run out of stock or excessive inventory remains unused, the agent can use this feedback to improve its future demand predictions and stock recommendations.",
      distinction:
        "The main objective of a learning agent is therefore not simply to perform a task, but to improve the way that task is performed over time. Learning can be applied to different types of intelligent agents, including model-based, goal-based, and utility-based agents. Consequently, learning is not a completely separate decision-making strategy; it is a capability that can enhance an agent's existing architecture.",
      architectureIntro:
        "A learning agent consists of four main conceptual components: the performance element, learning element, critic, and problem generator. These components work together to enable the agent to perform actions, evaluate its performance, identify opportunities for improvement, and acquire new experiences. The architecture separates the component responsible for selecting actions from the component responsible for improving the agent's behaviour.",
      architectureComponents: [
        ["Performance Element", "Responsible for selecting and performing actions based on the agent's current knowledge and incoming percepts. It represents the decision-making part of the agent and determines how the agent interacts with its environment. In the warehouse inventory system, it may analyse current stock levels and demand estimates to recommend replenishment quantities."],
        ["Learning Element", "Responsible for improving the performance element by modifying its knowledge, decision rules, or internal models based on experience and feedback. It identifies areas where the agent's performance can be improved and updates the relevant components. For example, it may refine demand predictions after identifying differences between predicted and actual sales."],
        ["Critic", "Evaluates the agent's performance against a predefined performance standard and provides feedback to the learning element. The critic determines whether the agent's actions have produced satisfactory results. In the inventory system, it may evaluate whether stock recommendations reduced product shortages, unnecessary storage, and replenishment costs."],
        ["Problem Generator", "Suggests exploratory actions that can provide new and useful experiences. Instead of always selecting actions that appear best according to its current knowledge, the agent may explore alternative strategies to discover potentially better approaches. For example, it may test different replenishment quantities in a controlled simulation to determine which strategy performs more effectively."],
      ],
      planningTitle: "How Learning Agents Work",
      goalIntro:
        "Learning agents operate through a continuous cycle of perception, action, evaluation, and improvement. The performance element initially selects actions using the agent's existing knowledge. After the actions are performed, the critic evaluates the results and provides feedback to the learning element. The learning element then uses this information to improve the agent's future performance.",
      goalRepresentation:
        "In addition to these four conceptual components, learning agents interact with their environments through sensors and actuators. Sensors collect environmental information, while actuators execute the selected actions.",
      goalExampleIntro: "",
      goalConditions: [],
      planning: "",
      search: "",
      optimization: "",
      workingStages: [
        ["Environmental Perception", "The agent collects information from its environment through sensors or other data sources. This information may include current conditions, historical records, user interactions, and the results of previous actions."],
        ["Action Selection", "The performance element analyses the available information and selects an appropriate action using its current knowledge. For example, the warehouse inventory agent may recommend ordering additional units of a product based on its estimated demand and current stock level."],
        ["Action Execution", "The selected action is carried out through the agent's actuators or connected systems. In the warehouse example, the system may generate a replenishment request or update an inventory management platform."],
        ["Performance Evaluation", "The critic examines the results of the action and compares them with the predefined performance standard. For example, it may determine whether the recommended quantity was sufficient to meet customer demand without creating excessive remaining stock."],
        ["Learning and Improvement", "The learning element receives feedback from the critic and identifies opportunities to improve the agent's knowledge or decision-making process. It may update prediction models, adjust decision rules, or refine other internal components."],
        ["Exploration and New Experiences", "The problem generator may suggest alternative actions or experiments that help the agent discover better strategies. These experiences provide additional information that can be used to improve future decisions."],
        ["Continuous Adaptation", "The improved performance element continues interacting with the environment using its updated knowledge. This cycle repeats, allowing the agent to adapt as new information and environmental conditions become available."],
      ],
      learningApproaches: [
        ["Supervised Learning", "Supervised learning uses labelled training data to identify relationships between inputs and their corresponding outputs. The agent's underlying model learns from examples where the expected result is already known. For example, a warehouse inventory system may use historical sales records labelled with actual demand values to train a model that predicts future product requirements. The model can then use these predictions to support replenishment decisions."],
        ["Unsupervised Learning", "Unsupervised learning identifies hidden patterns, structures, or relationships in datasets without relying on predefined output labels. It is useful when the agent needs to discover meaningful information from large amounts of unlabelled data. For example, a warehouse system may analyse purchasing patterns and group products according to similarities in customer demand. These patterns can help identify products that experience similar seasonal changes or purchasing behaviour."],
        ["Reinforcement Learning", "Reinforcement learning enables an agent to learn through interactions with an environment. The agent performs actions and receives rewards or penalties based on the results. Over repeated interactions, it learns to select actions that maximize the cumulative reward. For example, an inventory management agent may receive positive rewards for maintaining sufficient stock while minimizing storage costs, and negative rewards when products become unavailable or excessive inventory accumulates. Through repeated interactions, it can learn replenishment strategies that improve overall performance."],
      ],
      learningApproachesIntro:
        "These approaches provide different ways of acquiring knowledge and improving performance. A learning agent may use one or combine multiple approaches depending on the requirements of its application.",
      applicationsIntro:
        "Learning agents are useful in applications where environmental conditions, user behaviour, or operational requirements change over time. Their ability to improve through experience makes them suitable for tasks that require continuous adaptation.",
      applications: [
        ["Personalized Recommendation Systems", "E-commerce platforms use learning-based systems to analyse browsing activities, purchase histories, ratings, and user interactions. By identifying individual preferences and behavioural patterns, these systems can improve the relevance of product recommendations over time."],
        ["Fraud Detection", "Financial institutions use learning-based systems to analyse transaction patterns and identify potentially suspicious activities. As new transaction data and confirmed fraud cases become available, models can be updated to recognize emerging patterns and improve detection performance."],
        ["Autonomous Robotics", "Robots can use learning algorithms to improve movement, object manipulation, and navigation through repeated interactions with their environments. For example, a warehouse robot may improve its movement strategy by learning from successful and unsuccessful navigation attempts."],
        ["Predictive Maintenance", "Industrial monitoring systems can analyse equipment sensor readings, operational history, and maintenance records to identify patterns associated with potential failures. Learning models can improve their ability to recognize early warning signs as additional operational data becomes available."],
        ["Intelligent Traffic Management", "Learning-based traffic systems can analyse vehicle movement, congestion patterns, and traffic signal data to improve traffic flow predictions and signal-control strategies. Their decisions can be refined as traffic conditions change."],
        ["Demand Forecasting and Inventory Management", "Businesses can use learning agents to analyse historical sales, seasonal trends, promotions, and customer behaviour. By learning from differences between predicted and actual demand, these systems can improve future forecasts and support better inventory planning."],
      ],
      advantages: [
        "Continuous Improvement: Learning agents can improve their performance by incorporating feedback and experiences from previous interactions.",
        "Adaptability: They can adjust their behaviour when environmental conditions, user preferences, or operational requirements change.",
        "Reduced Dependence on Manual Programming: Instead of requiring every decision rule to be explicitly specified, learning mechanisms can identify useful patterns and relationships from data.",
        "Handling Unknown Environments: They can develop useful knowledge when complete information about the environment is not available initially.",
        "Improved Decision-Making: By learning from previous outcomes, they can refine predictions and select more effective actions.",
        "Exploration of New Strategies: They can investigate alternative actions and discover approaches that may perform better than their existing strategies.",
      ],
      limitations: [
        "Data Requirements: Many learning approaches require sufficient quantities of relevant and representative data to produce reliable results.",
        "Training and Computational Costs: Developing, training, and updating learning models can require significant processing power, time, and infrastructure.",
        "Unreliable or Biased Feedback: Inaccurate, incomplete, or biased feedback can cause the agent to learn inappropriate behaviour.",
        "Exploration Risks: Trying unfamiliar actions may produce poor outcomes, especially in safety-critical environments. Exploration therefore needs appropriate constraints and supervision.",
        "Changing Environments: Models trained on historical data may become less accurate when environmental conditions change significantly, requiring monitoring and retraining.",
        "Explainability: Some complex learning models make decisions that are difficult for humans to interpret, which can create challenges in applications requiring transparency and accountability.",
      ],
    },
    example:
      "A recommendation system learns from user interactions to improve future recommendations.",
    signal: "TRY → LEARN",
    response: "That route caused delays → Learn and improve the next delivery",
    capabilities: ["Current input", "Memory", "Goals", "Trade-offs", "Feedback"],
    outcome: "It records the delivery result and uses that feedback to make a better choice next time.",
    route: ["START", "FEEDBACK", "ADAPT", "CUSTOMER"],
    metric: "Gets better",
  },
];

export default agentTypes;
