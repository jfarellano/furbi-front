"use server"

import { DELETE, GET, PATCH, POST } from "../fetch"

export const getGroups = async () => {
  const response = await GET('/groups', {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const getProfile = async () => {
  const response = await GET('/groups/profile', {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const getGroup = async (id:string) => {
  const response = await GET(`/groups/${id}`, {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const updateGroup = async (id: string, group: any) => {
  const response = await PATCH(`/groups/${id}`, {
    data: group,
    auth: true
  })

  if(!response.ok) return false

  return true
}

export const createGroup = async (group: any) => {
  const response = await POST(`/groups`, {
    data: group,
    auth: true
  })
  
  if(!response.ok) return false

  return await response.json()
}

export const deleteGroup = async (id: string) => {
  const response = await DELETE(`/groups/${id}`, {
    auth: true
  })
  
  if(!response.ok) return false

  return true
}