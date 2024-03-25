'use server';
import { deleteUser } from "@/api/users";

export async function ActDeleteUser(id: string) {
  return await deleteUser(id)
}