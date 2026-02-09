"use server";

import {pool} from "@/lib/db";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message too short"),
});

export async function submitContact(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Basic runtime check
  if (!name || !email || !message)
    throw new Error("Missing fields");

  // Validate using Zod
  const result = contactSchema.safeParse({ name, email, message });
  if (!result.success) {
    throw new Error(result.error.issues.map(i => i.message).join(", "));
  }

  // Insert into DB
  await pool.query(
    `INSERT INTO contacts (name, email, message)
     VALUES ($1, $2, $3)`,
    [name, email, message]
  );

  return true;
}
