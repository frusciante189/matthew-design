import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function verifyPassword(password: string): Promise<boolean> {
  return password === ADMIN_PASSWORD;
}

export function generateAuthToken(): string {
  return jwt.sign(
    {
      admin: true,
      timestamp: Date.now(),
    },
    JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );
}

export function verifyAuthToken(token: string): boolean {
  try {
    jwt.verify(token, JWT_SECRET);
    return true;
  } catch {
    return false;
  }
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin-auth")?.value;

    if (!token) return false;

    return verifyAuthToken(token);
  } catch {
    return false;
  }
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set("admin-auth", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60, // 24 hours
    path: "/",
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete("admin-auth");
}
