'use server';
import { getClient, updateClient } from "@/api/clients";

export async function ActGetClient(id: string) {
  return await getClient(id)
}

export async function ActUpdateClient(id: string, client: any) {
  return await updateClient(id, client)
}