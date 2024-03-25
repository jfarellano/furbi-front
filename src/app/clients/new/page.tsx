import { Typography } from "@mui/material"
import { ClientsForm } from "./form"

export default async function Page() {
  return (
    <>
      <Typography variant="h3">
        Creacion de cliente
      </Typography>
      <ClientsForm/>
    </>
  )
}