'use server';
import { createUser } from "@/api/users";

export async function ActCreateUser(user: any) {
  return await createUser(user)
}