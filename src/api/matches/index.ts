"use server"

import { DELETE, GET, PATCH, POST } from "../fetch"

export const getMatches = async (id: string) => {
  const response = await GET(`/matches?group=${id}`, {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const getMatch = async (id:string) => {
  const response = await GET(`/matches/${id}`, {
    auth: true
  })

  if(!response.ok) return null

  return await response.json()
}

export const updateMatch = async (id: string, matche: any) => {
  const response = await PATCH(`/matches/${id}`, {
    data: matche,
    auth: true
  })

  if(!response.ok) return false

  return true
}

export const createMatch = async (matche: any) => {
  const response = await POST(`/matches`, {
    data: matche,
    auth: true
  })
  
  if(!response.ok) return false

  return await response.json()
}

export const deleteMatch = async (id: string) => {
  const response = await DELETE(`/matches/${id}`, {
    auth: true
  })
  
  if(!response.ok) return false

  return true
}