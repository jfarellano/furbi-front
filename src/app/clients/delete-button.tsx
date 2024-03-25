"use client"
import { Button } from "@mui/material"
import { ActDeleteClient } from "./actions"

export const ClientDelete = ({id}:{id:string}) => {

  const handleDelete = async () => {
    const result = await ActDeleteClient(id)

    if(result) location.reload()
  }

  return <Button onClick={handleDelete}>DELETE</Button>
}