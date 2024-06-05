"use client"
import { Button, TextField, Typography, useTheme } from "@mui/material"
import { FormEvent, useEffect, useState } from "react"
import { ActGetSession, ActRegister } from "./actions"
import { useRouter } from "next/navigation"

export default function Page() {
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
    const result = await ActRegister(new FormData(event.currentTarget))
    if(!result) setError(true)
    else router.push('/')
  }

  return (
    <>
      <h1>Register</h1>
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2)
      }} onSubmit={handleSubmit}>
        <TextField type="number" name="phone" label="Phone" required />
        <TextField type="text" name="name" label="Name" required />
        <TextField type="password" name="password" label="Password" required />
        { error ? <Typography fontSize={12} color='error'>There was an error creating your user</Typography> : <></>}
        <Button variant="contained" type="submit">Register</Button>
        <Button variant="outlined" href="/login">Cancel</Button>
      </form>
    </>
  )
}