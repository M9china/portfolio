"use server";

import { pool } from "@/lib/db";

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    throw new Error("Missing fields");
  }

  await pool.query(
    `INSERT INTO contacts (name, email, message)
     VALUES ($1, $2, $3)`,
    [name, email, message],
  );
}
