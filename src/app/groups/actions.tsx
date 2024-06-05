'use server';
import { deleteGroup } from "@/api/groups";

export async function ActDeleteGroup(id: string) {
  return await deleteGroup(id)
}