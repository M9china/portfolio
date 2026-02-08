import { ProjectDTO } from "./projectDTO";

export const projectData: ProjectDTO[] = [
  {
    id: 1,
    title: "GoodAction",
    description:
      "GoodAction is a SaaS platform for nonprofits and organisations to share impact and enable community engagement with storytelling, impact tracking, and donations.",
    techStack: ["React", "TypeScript", "MongoDB", "Tailwind CSS", "Node.js", "Stripe", "Twilio"],
    imageUrl: "/goodaction.png",
  },
  {
    id: 2,
    title: "Wits Induction Gamification",
    description:
      "A mobile application designed to help users track their health and fitness goals, providing personalized workout plans, nutrition advice, and progress monitoring.",
    techStack: ["Next.js", "TypeScript", "Prisma", "Node.js"],
    imageUrl: "/images/healthtrack.png",
  },
  {
    id: 3,
    title: "E-Commerce ",
    description:
      "Labh is a web application built for a client to showcase and manage their business offering. The project was completed up to a functional prototype stage but was not publicly launched.",
    techStack: ["Next.js", "TypeScript", "Prisma", "OAuth", "Stripe", "Tailwind CSS"],
    imageUrl: "/labh.png",
  },
];