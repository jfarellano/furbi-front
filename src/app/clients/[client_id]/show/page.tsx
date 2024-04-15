import { Box, Button, Typography } from "@mui/material"
import { clientFolder, getClient } from "@/api/clients"
import { FilesTable } from "./files-table"

export default async function Page({params}:{params: {client_id: string}}) {
  const client = await getClient(params.client_id)
  const folder = await clientFolder(params.client_id)

  return client ? (
    <>
      <Typography variant="h3">
        {client.name}
      </Typography>
      <Typography variant="h4">
        Acciones
      </Typography>
      <Box display='flex'>
        <Button variant="contained" href={`/clients/${client.id}/form`}>Formulario AVC</Button>
      </Box>
      <Typography variant="h4">
        Archivos
      </Typography>
      <FilesTable files={folder} clientId={params.client_id} />
    </>
  ) : 'Error cargando el cliente'
}