// components/TechStack.tsx
export const TechStack = () => {
  return (
    <section className="flex flex-col gap-8 pt-12">
      <h2 className="text-3xl font-semibold">Tech I Work With</h2>

      <div className="flex flex-wrap gap-4 text-sm">
        {[
          "Next.js",
          "TypeScript",
          "Prisma",
          "PostgreSQL",
          "Tailwind CSS",
          "Firebase",
          "Docker",
        ].map((tech) => (
          <span key={tech} className="px-4 py-2 border rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};
