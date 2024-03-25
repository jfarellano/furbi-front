import { Typography } from "@mui/material"
import { UsersForm } from "./form"

export default async function Page() {
  return (
    <>
      <Typography variant="h3">
        Creacion de usuario
      </Typography>
      <UsersForm/>
    </>
  )
}