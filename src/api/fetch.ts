"use server"

import { getSession, getToken } from "@/auth"
import { redirect } from "next/navigation"

type ExtraAttrs = {
  auth?: boolean 
  data?: any
}

export const GET = async (url: string, request: RequestInit & ExtraAttrs) => {
  request.method = 'GET'
  return makeRequest(url, request)
}

export const POST = async (url: string, request: RequestInit & ExtraAttrs) => {
  request.method = 'POST'
  return makeRequest(url, request)
}

export const PUT = async (url: string, request: RequestInit & ExtraAttrs) => {
  request.method = 'PUT'
  return makeRequest(url, request)
}

export const PATCH = async (url: string, request: RequestInit & ExtraAttrs) => {
  request.method = 'PATCH'
  return makeRequest(url, request)
}

export const DELETE = async (url: string, request: RequestInit & ExtraAttrs) => {
  request.method = 'DELETE'
  return makeRequest(url, request)
}

const getBackUrl = () => {
  return process.env.NEXT_PUBLIC_BACK_URL
}

const makeRequest = async (url: string, request: RequestInit & ExtraAttrs) => {

  if(request.auth) {
    const token = await getToken()
    if(!token) redirect('/login')
    request.headers = {
      ...request.headers,
      authorization: `Bearer ${token}`
    }
  }

  if (request.data) {
    request.headers = {
      ...request.headers,
      "Content-Type": "application/json",
    }
    request.body = JSON.stringify(request.data)
  }

  return await fetch(`${getBackUrl()}${url}`, request)
}