import { Typography } from "@mui/material"
import { GroupsForm } from "./form"

export default async function Page() {
  return (
    <>
      <Typography variant="h3">
        Creacion de Grupo
      </Typography>
      <GroupsForm/>
    </>
  )
}