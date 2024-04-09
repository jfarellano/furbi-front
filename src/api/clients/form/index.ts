"use server"

import { DELETE, GET, PATCH, POST } from "../../fetch"

export const getClientForm = async (id:string) => {
  const response = await GET(`/client-forms/${id}`, {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const updateClientForm = async (id: string, form: any) => {
  const response = await PATCH(`/client-forms/${id}`, {
    data: form,
    auth: true
  })

  if(!response.ok) return false

  return true
}