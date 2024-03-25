'use server';
import { deleteClient } from "@/api/clients";

export async function ActDeleteClient(id: string) {
  return await deleteClient(id)
}