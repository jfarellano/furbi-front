'use server';
import { createClient } from "@/api/clients";

export async function ActCreateClient(client: any) {
  return await createClient(client)
}