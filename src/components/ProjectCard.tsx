// components/ProjectCard.tsx
export const ProjectCard = () => {
  return (
    <div className="rounded-2xl border border-[#30363d] p-6 flex flex-col gap-6 hover:shadow-md transition">
      <div className="h-48 bg-gray-100 rounded-xl" />

      <h3 className="text-xl font-semibold text-[#c9d1d9]">
        EduGlory Platform
      </h3>

      <p className="text-sm text-[#c9d1d9]">
        A full-stack platform designed to showcase academic excellence and curated learning resources.
      </p>

      <p className="text-sm font-medium text-[#58a6ff]">
        Next.js • TypeScript • Prisma
      </p>
    </div>
  )
}
