'use server';
import { createMatch } from "@/api/matches";

export async function ActCreateMatch(group: any) {
  return await createMatch(group)
}