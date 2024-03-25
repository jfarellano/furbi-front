"use client"
import { Button } from "@mui/material"
import { ActDeleteUser } from "./actions"

export const UserDelete = ({id}:{id:string}) => {

  const handleDelete = async () => {
    const result = await ActDeleteUser(id)

    if(result) location.reload()
  }

  return <Button onClick={handleDelete}>DELETE</Button>
}