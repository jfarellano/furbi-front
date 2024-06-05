'use server';
import { getSession, register } from "@/auth";

export async function ActRegister(formData: FormData) {
  const phone = formData.get('phone')?.toString();
  const password = formData.get('password')?.toString();
  const name = formData.get('name')?.toString();

  if (!phone || !password || !name) throw Error('Invalid credentials');

  const result = await register({
    phone,
    name,
    password
  });

  if (result) {
    return true
  };

  return false;
}


export async function ActGetSession() {
  return await getSession()
}