"use client"
import { Button, TextField, useTheme } from "@mui/material"
import { FormEvent, useEffect, useState } from "react"
import { ActGetSession, ActLoging } from "./actions"
import { useRouter } from "next/navigation"

export default async function Page() {
  const router = useRouter()
  const [error, setError] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    ActGetSession().then(session => {
      if(session) router.push('/')
    })
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = await ActLoging(new FormData(event.currentTarget))
    if(!result) setError(true)
    else router.push('/')
  }

  return (
    <>
      <h1>Login</h1>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
      }} onSubmit={handleSubmit}>
        <TextField type="email" name="email" label="Email" required />
        <TextField type="password" name="password" label="Password" required />
        { error ? <p color="error">Error</p> : <></>}
        <Button variant="contained" type="submit">Login</Button>
      </form>
    </>
  )
}