"use client";

export const runtime = "nodejs";
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

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await submitContact(formData);
      setSuccess("Your message has been sent! 🎉");
      form.reset();
    } catch (e: unknown) {
      if (e instanceof Error) setError(e.message);
      else setError(String(e));
    } finally {
      setLoading(false);
    }
  };

  // WhatsApp link
  const phoneNumber = "27790814991"; 
  const whatsappMessage = encodeURIComponent(
    "Hi! I would like to get in touch with you regarding a project."
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <section className="max-w-xl mx-auto py-24 px-4 flex flex-col gap-8">
      <h2 className="text-3xl font-bold text-[#c9d1d9] text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border rounded-md p-3 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border rounded-md p-3 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="border rounded-md p-3 h-32 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          required
        />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {success && <p className="text-green-500 mt-2">{success}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      <div className="text-center mt-4">
        <p className="mb-2 text-gray-600 dark:text-gray-300">Or reach me via WhatsApp:</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}
