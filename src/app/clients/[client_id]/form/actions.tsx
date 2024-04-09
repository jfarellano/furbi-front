'use server';
import { getClient, updateClient } from "@/api/clients";
import { updateClientForm } from "@/api/clients/form";

export async function ActGetClient(id: string) {
  return await getClient(id)
}

export async function ActUpdateClient(id: string, client: any) {
  return await updateClient(id, client)
}

export async function ActSaveForm(id:string, form: any) {
  return await updateClientForm(id, form)
}