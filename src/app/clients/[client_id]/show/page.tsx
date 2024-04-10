import { Box, Button, Typography } from "@mui/material"
import { getClient } from "@/api/clients"

export default async function Page({params}:{params: {client_id: string}}) {
  const client = await getClient(params.client_id)

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
      <Box width='100%' height={200} bgcolor='gray'>

      </Box>
    </>
  ) : 'Error cargando el cliente'
}