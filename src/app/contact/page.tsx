import { submitContact } from "./actions";

export default function ContactPage() {
  return (
    <section className="max-w-xl mx-auto py-24 px-4">
      <h1 className="text-3xl font-bold mb-4">
        Get in touch
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Tell me a bit about your project and I’ll get back to you.
      </p>

      <form action={submitContact} className="space-y-4">
        <input
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-lg border px-4 py-3 bg-transparent"
        />

        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="w-full rounded-lg border px-4 py-3 bg-transparent"
        />

        <textarea
          name="message"
          placeholder="Project details"
          rows={5}
          required
          className="w-full rounded-lg border px-4 py-3 bg-transparent"
        />

        <button
          type="submit"
          className="
            w-full rounded-lg px-4 py-3 font-medium
            bg-black text-white
            dark:bg-white dark:text-black
          "
        >
          Send message
        </button>
      </form>
    </section>
  );
}
