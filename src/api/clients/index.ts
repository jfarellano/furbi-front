"use server"

import { DELETE, GET, PATCH, POST } from "../fetch"

export const getClients = async () => {
  const response = await GET('/clients', {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const getClient = async (id:string) => {
  const response = await GET(`/clients/${id}`, {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const updateClient = async (id: string, client: any) => {
  const response = await PATCH(`/clients/${id}`, {
    data: client,
    auth: true
  })

  if(!response.ok) return false

  return true
}

export const createClient = async (client: any) => {
  const response = await POST(`/clients`, {
    data: client,
    auth: true
  })
  
  if(!response.ok) return false

  return await response.json()
}

export const deleteClient = async (id: string) => {
  const response = await DELETE(`/clients/${id}`, {
    auth: true
  })
  
  if(!response.ok) return false

  return true
}


export const clientFolder = async (id: string) => {
  const response = await GET(`/clients/folder/${id}`, {
    auth: true
  })
  
  if(!response.ok) return null

  return await response.json()
}

export const clientFile = async (name: string) => {
  const response = await POST(`/clients/file`, {
    data: {
      name
    },
    auth: true
  })
  
  if(!response.ok) return null
  
  return response
}