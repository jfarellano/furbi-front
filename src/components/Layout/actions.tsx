"use server"

import { logout } from "@/auth"

export const ActLogout = async () => {
  await logout()
}