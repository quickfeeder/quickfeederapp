// pages/api/auth/login.ts

import type { NextApiRequest, NextApiResponse } from "next";

import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma"; // adjust path to your Prisma client
import { setCookie } from "cookies-next";

// if you use Prisma: 


const JWT_SECRET = process.env.JWT_SECRET!; // set this in your .env.local

type LoginResponse = { success: true } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const email = req.body.get?.("email") ?? req.body.email;
  const password = req.body.get?.("password") ?? req.body.password;

  if (!email || !password) {
    return res.status(400).json({ error: "Missing email or password" });
  }

  // 1) Fetch the user from your database
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // 2) Compare the password
  const isValid = await compare(password.toString(), user.passwordHash);
  if (!isValid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // 3) Create a JWT
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  // 4) Set the cookie
  setCookie("auth_token", token, {
    req,
    res,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return res.status(200).json({ success: true });
}
