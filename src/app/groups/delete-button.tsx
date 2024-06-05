"use client"
import { Button } from "@mui/material"
import { ActDeleteGroup } from "./actions"

export const GroupDelete = ({id}:{id:string}) => {

  const handleDelete = async () => {
    const result = await ActDeleteGroup(id)

    if(result) location.reload()
  }

  return <Button onClick={handleDelete}>DELETE</Button>
}