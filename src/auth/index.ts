import { POST } from "@/api/fetch";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const SESSION_DURATION =  3600 * 1000

export async function login(phone: string, password: string) : Promise<string|null> {
  const response = await POST('/auth/login', {
    data: {
      phone,
      password
    } 
  })

  if (!response.ok) return null

  const expires = new Date(Date.now() + SESSION_DURATION);
  const access_token = (await response.json()).access_token

  cookies().set("session", access_token, { expires });

  return access_token
}

export async function register(body: any) : Promise<boolean> {
  const response = await POST('/auth/register', {
    data: body
  })

  if (!response.ok) return false

  return true
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

type Session = {
  email: string,
  name: string
}

export async function getSession(): Promise<Session | null> {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await jwtDecode(session);
}

export function getToken(): string|null {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return session;
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const expires = new Date(Date.now() + SESSION_DURATION);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: session,
    httpOnly: true,
    expires: expires,
  });
  return res;
}