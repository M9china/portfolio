import Link from "next/link"

export const Hero = () => {
  return (
    <section className=" flex flex-col justify-center gap-6">
      <h1 className="text-4xl text-[#c9d1d9] md:text-6xl font-bold leading-tight max-w-4xl">
        {`Hi I'm Nqobile — I build fast, scalable web applications that help businesses grow.`}
      </h1>

      <p className="text-lg text-[#c9d1d9] text-muted-foreground max-w-2xl">
        Full-stack developer focused on modern UX, performance, and real-world reliability.
      </p>

      <div className="flex gap-4 mt-6">
        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl border border-[#30363d] bg-[#001A4B] text-white font-medium"
        >
          Let’s work together
        </Link>

        <Link
          href="/projects"
          className="px-6 py-3 rounded-xl border border-[#30363d] text-white font-medium"
        >
          View my work
        </Link>
      </div>
    </section>
  )
}
