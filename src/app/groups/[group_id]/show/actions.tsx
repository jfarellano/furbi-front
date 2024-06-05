'use server';
import { clientFile } from "@/api/clients";

export async function ActGetFile(name: string) {
  return await clientFile(name)
}