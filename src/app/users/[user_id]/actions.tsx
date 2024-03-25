'use server';
import { getUser, updateUser } from "@/api/users";

export async function ActGetUser(id: string) {
  return await getUser(id)
}

export async function ActUpdateUser(id: string, user: any) {
  return await updateUser(id, user)
}