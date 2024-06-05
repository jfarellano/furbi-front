"use server"

import { DELETE, GET, PATCH, POST } from "../fetch"

export const getUsers = async () => {
  const response = await GET('/users', {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const getPositions = async () => {
  const response = await GET('/users/positions', {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const getProfile = async () => {
  const response = await GET('/users/profile', {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const getUser = async (id:string) => {
  const response = await GET(`/users/${id}`, {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const updateUser = async (id: string, user: any) => {
  const response = await PATCH(`/users/${id}`, {
    data: user,
    auth: true
  })

  if(!response.ok) return false

  return true
}

export const createUser = async (user: any) => {
  const response = await POST(`/users`, {
    data: user,
    auth: true
  })
  
  if(!response.ok) return false

  return await response.json()
}

export const deleteUser = async (id: string) => {
  const response = await DELETE(`/users/${id}`, {
    auth: true
  })
  
  if(!response.ok) return false

  return true
}