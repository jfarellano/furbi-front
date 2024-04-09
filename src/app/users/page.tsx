"use server"
import { redirect } from "next/navigation"
import { getSession } from "@/auth"
import { getUsers } from "@/api/users"
import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { UserDelete } from "./delete-button"

export default async function Page() {
  const session = await getSession()
  const users: any[] = await getUsers()

  if(!session) redirect('/')

  return users ? (
    <Box sx={{
      width: '100%'
    }}>
      <Typography variant="h3">
        Users
      </Typography>
      <Button sx={{marginLeft: 'auto'}} variant="contained" href="/users/new">Create</Button>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell align="right">
                <Button href={`/users/${user.id}`}>EDIT</Button>
                <UserDelete id={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  ) : 'Error cargando los usuarios'
}