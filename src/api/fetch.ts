// import { getSession } from "@/auth/server"

import { getSession } from "@/auth"

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
    const session = await getSession()
    console.log(session)
    request.headers = {
      ...request.headers,
      authorization: `Bearer ${'replace_with_token'}`
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