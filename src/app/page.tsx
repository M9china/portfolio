import { CTA, FeaturedProjects, Hero, TechStack } from "@/components";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between pt-32 px-8 bg-[#0d1117] sm:items-start">
        <Hero/>
        <FeaturedProjects/>
        <TechStack/>
        <CTA/>
      </main>
    </div>
  );
}
