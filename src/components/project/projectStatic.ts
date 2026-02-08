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
    title: "Zembelani Transport & Projects",
    description:
      `A professional business website built for a company operating in the transportation and construction sector.
The site presents the company’s services, projects, and capabilities with a clear structure.`,
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    imageUrl: "/zembelani.png",
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