import { getClient } from "@/api/clients"
import { Typography } from "@mui/material"
import { ClientForm } from "./form"

export default async function Page({params}:{params: {client_id: string}}) {
  const client: any = await getClient(params.client_id)

  return client ? (
    <>
      <Typography variant="h3">
        Edicion de cliente
      </Typography>
      <ClientForm client={client} />
    </>
  ) : 'Error cargando el cliente'
}