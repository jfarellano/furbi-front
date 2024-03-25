"use server"

import { getClients } from "@/api/clients"
import { getSession } from "@/auth"
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { redirect } from "next/navigation"
import { ClientDelete } from "./delete-button"


export default async function Page() {
  const session = await getSession()
  const clients: any[] = await getClients()

  if(!session) redirect('/')

  return clients ? (
    <Box sx={{
      width: '100%'
    }}>
      <Typography variant="h3">
        Clients
      </Typography>
      <Button sx={{marginLeft: 'auto'}} variant="contained" href="/clients/new">Create</Button>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client) => (
            <TableRow
              key={client.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {client.name}
              </TableCell>
              <TableCell align="right">
                <Button href={`/clients/${client.id}`}>EDIT</Button>
                <ClientDelete id={client.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  ) : 'Error cargando los usuarios'
}