export const promst = [
  {
    id: "1",
    name: "Generate documentation",
    message: "I want to generate the technical documentation.",
    prompt: `   
    Produce detailed technical documentation suitable for developers, based on a set of technical specifications. 
    Technical documentation with sections like: System Architecture (with diagrams), Component Descriptions, API Specifications, Data Models/Schema and Technology Stack. 
    Also include a A text document outlining such as High-level project goals, Target users, Functional requirements (what the software should do), Non-functional requirements (performance, security, scalability, etc.).
    The set of technical specifications should be the following: 
    `,
  },
  {
    id: "2",
    name: "Generate an user manual",
    message: "I want to generate the user manual.",
    prompt: `   
    Create a user-friendly manual. With sections like: Introduction, Installation, Getting Started, User Interface, Features, Troubleshooting, FAQ, Simple explanations of how to use each function and an Example usage scenarios and input/output explanations. 
    For a code project, include a section on how to interact with the codebase, and how to run the project locally.
   The user-friendly manual will explain how to interact with and use the functionality based on the following: `,
  },
  {
    id: "3",
    name: "Generate System Architecture from High-level Specifications",
    message:
      "I want to generateSystem Architecture from High-level Specifications.",
    prompt: `
    Produce detailed technical documentation suitable for developers.
    The Architecture should has a visual diagram (e.g., UML component diagram, or a box-and-arrow style) depicting: major system components (frontend, backend, database, message queues, etc.), interactions and data flow between components and  textual explanations of technology choices and design reasoning.
    Based on the following set of technical specifications:`,
  },
];
