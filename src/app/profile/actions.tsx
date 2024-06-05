'use server';

import { updateUser } from "@/api/users";

export async function ActUpdateUser(id: string, user: any) {

  const result = await updateUser(id, user);

  if (result) {
    return true
  };

  return false;
}