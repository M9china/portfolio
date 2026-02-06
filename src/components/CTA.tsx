import Link from "next/link";

export const CTA = () => {
  return (
    <section className="py-24 flex flex-col items-center text-center gap-6">
      <h2 className="text-4xl font-bold">Have a project in mind?</h2>

      <p className="text-muted-foreground max-w-xl">
        Let’s build something clean, fast, and scalable together.
      </p>

      <Link
        href="/contact"
        className="px-8 py-4 rounded-xl bg-black text-white font-medium"
      >
        Get in touch
      </Link>
    </section>
  );
};
