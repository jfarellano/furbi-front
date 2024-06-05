'use server';
import { getSession, login } from "@/auth";

export async function ActLoging(formData: FormData) {
  const phone = formData.get('phone')?.toString();
  const password = formData.get('password')?.toString();

  if (!phone || !password) throw Error('Invalid credentials');

  const result = await login(phone, password);

  if (result) {
    return true
  };

  return false;
}


export async function ActGetSession() {
  return await getSession()
}