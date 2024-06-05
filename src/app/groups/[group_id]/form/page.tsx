import { Typography } from "@mui/material"
import { ClientForm } from "./form"
import { getClientForm } from "@/api/clients/form"

export default async function Page({params}:{params: {client_id: string}}) {
  const clientForm = await getClientForm(params.client_id)

  return clientForm ? (
    <>
      <Typography variant="h3">
        Formulario AVC
      </Typography>
      <ClientForm clientForm={clientForm} client_id={params.client_id}/>
    </>
  ) : 'Error cargando el cliente'
}