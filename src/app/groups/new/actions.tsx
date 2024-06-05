'use server';
import { createGroup } from "@/api/groups";

export async function ActCreateGroup(group: any) {
  return await createGroup(group)
}