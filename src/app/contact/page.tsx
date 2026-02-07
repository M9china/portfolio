"use client";

import { useState, FormEvent } from "react";
import { submitContact } from "./actions";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Cast to HTMLFormElement to safely use `.reset()`
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await submitContact(formData);
      setSuccess("Your message has been sent! 🎉");
      form.reset(); // <- safe now
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError(String(e));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-xl mx-auto py-24 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border rounded-md p-3"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border rounded-md p-3"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="border rounded-md p-3 h-32"
          required
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-green-600 mt-2">{success}</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </section>
  );
}
