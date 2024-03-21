'use server';
import { getSession, login } from "@/auth";

export async function ActLoging(formData: FormData) {
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  if (!email || !password) throw Error('Invalid credentials');

  const result = await login(email, password);

  if (result) {
    return true
  };

  return false;
}


export async function ActGetSession() {
  return await getSession()
}