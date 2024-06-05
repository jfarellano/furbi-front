import { Typography } from "@mui/material"
import { MatchesForm } from "./form"
import { getGroup } from "@/api/groups"

export default async function Page({params}:{params: {group_id: string}}) {
  const group = await getGroup(params.group_id)

  return (
    <>
      <Typography variant="h3">
        Creacion de Partido
      </Typography>
      <MatchesForm group={group}/>
    </>
  )
}