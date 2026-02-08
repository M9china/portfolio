import { CTA, FeaturedProjects, Footer, Hero, NavBar, TechStack } from "@/components";


export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between pt-32 px-8 bg-[#0d1117] sm:items-start">
        <NavBar/>
        <Hero/>
        <FeaturedProjects/>
        <TechStack/>
        <CTA/>
        <Footer/>
      </main>
    </div>
  );
}
