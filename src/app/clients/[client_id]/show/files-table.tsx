"use client";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ActGetFile } from "./actions";
import { Download } from "@mui/icons-material";

export const FilesTable = ({
  files,
  clientId,
}: {
  files: any[];
  clientId: string;
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Ultima Actualización</TableCell>
            <TableCell align="right">Descargar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {files.map((file) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={file.ETag}
            >
              <TableCell component="th" scope="row">
                {file.Key}
              </TableCell>
              <TableCell align="right" suppressHydrationWarning>
                {new Date(file.LastModified).toLocaleString()}
              </TableCell>
              <TableCell align="right">
              <IconButton aria-label="Descargar" color="primary" href={`/download/${clientId}/${file.Key}`}>
                <Download />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
