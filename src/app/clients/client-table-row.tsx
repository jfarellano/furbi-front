"use client";

import {
  Button,
  TableCell,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { ClientDelete } from "./delete-button";

export default async function ClientTableRow({ client }: { client: any }) {
  const router = useRouter();

  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      onClick={() => router.push(`/clients/${client.id}/show`)}
    >
      <TableCell component="th" scope="row">
        {client.name}
      </TableCell>
      <TableCell align="right">
        <Button href={`/clients/${client.id}`}>EDIT</Button>
        <ClientDelete id={client.id} />
      </TableCell>
    </TableRow>
  );
}
