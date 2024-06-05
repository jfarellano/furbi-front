"use client";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const MatchesTable = ({
  matches,
  groupId,
}: {
  matches: any[];
  groupId: string;
}) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>List Date</TableCell>
            <TableCell>Confirm Date</TableCell>
            <TableCell>Players</TableCell>
            <TableCell>Result</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matches.map((match, index) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={index}
              onClick={() => {
                window.location.href = `/groups/${groupId}/matches/${match.id}/show`;
              }}
            >
              <TableCell component="th" scope="row">
                {match.matchPlace}
              </TableCell>
              <TableCell component="th" scope="row">
                {new Date(match.matchDatetime).toLocaleDateString()} { new Date(match.matchDatetime).toLocaleTimeString()}
              </TableCell>
              <TableCell suppressHydrationWarning>
                {new Date(match.listStartDatetime).toLocaleDateString()} { new Date(match.listStartDatetime).toLocaleTimeString()}
              </TableCell>
              <TableCell>
                {new Date(match.listConfirmDatetime).toLocaleDateString()} { new Date(match.listConfirmDatetime).toLocaleTimeString()}
              </TableCell>
              <TableCell>
                {match.playerList.length}
              </TableCell>
              <TableCell>
                {match.result ? match.result : "Not Started"}
              </TableCell>
              <TableCell>
                {match.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
