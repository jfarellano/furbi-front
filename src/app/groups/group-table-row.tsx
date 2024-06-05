"use client";

import {
  Button,
  TableCell,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { GroupDelete } from "./delete-button";

export default async function GroupTableRow({ group }: { group: any }) {
  const router = useRouter();

  return (
    <TableRow
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      onClick={() => router.push(`/groups/${group.id}/show`)}
    >
      <TableCell component="th" scope="row">
        {group.name}
      </TableCell>
      <TableCell align="right">
        <Button href={`/groups/${group.id}`}>EDIT</Button>
        <GroupDelete id={group.id} />
      </TableCell>
    </TableRow>
  );
}
