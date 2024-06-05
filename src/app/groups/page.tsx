"use server";

import { getGroups } from "@/api/groups";
import { getSession } from "@/auth";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { redirect } from "next/navigation";
import GroupTableRow from "./group-table-row";

export default async function Page() {
  const session = await getSession();
  const groups: any[] = await getGroups();

  if (!session) redirect("/");

  return groups ? (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography variant="h3">Groups</Typography>
      <Button
        sx={{ marginLeft: "auto" }}
        variant="contained"
        href="/groups/new"
      >
        Create
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map((group) => (
              <GroupTableRow key={group.id} group={group} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  ) : (
    "Error cargando los usuarios"
  );
}
