import Link from "next/link";

export const CTA = () => {
  return (
    <section className="py-24 w-full flex flex-col items-center text-center gap-6">
      <h2 className="text-3xl text-[#c9d1d9] font-bold">Have a project in mind?</h2>

      <p className="text-[#c9d1d9] py-4 max-w-xl">
        {`Let’s build something clean, fast, and scalable together.`}
      </p>

      <Link href="/contact" className="primary-btn border bg-[#22C55E] text-white py-3 px-3 rounded-2xl">
        Start a project
      </Link>

      <div className="text-sm text-[#2563EB] ">
        Or reach me on{" "}
        <a href="https://wa.me/27790814991" className="underline">
          WhatsApp
        </a>
      </div>
    </section>
  );
};
