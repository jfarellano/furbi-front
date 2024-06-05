import { Button, Typography } from "@mui/material"
import { getGroup } from "@/api/groups"
import { MatchesTable } from "./matches-table"
import { getMatch } from "@/api/matches"

export default async function Page({params}:{params: {group_id: string, match_id: string}}) {
  const group = await getGroup(params.group_id)
  const match = await getMatch(params.match_id)

  return group ? (
    <>
      <Typography variant="h3">
        Match {new Date(match.matchDatetime).toLocaleDateString()} { new Date(match.matchDatetime).toLocaleTimeString()}
      </Typography>
      <Typography variant="h5">
        List start: {new Date(match.listStartDatetime).toLocaleDateString()} { new Date(match.listStartDatetime).toLocaleTimeString()}
      </Typography>
      <Typography variant="h5">
        Confirmation deadline: {new Date(match.listConfirmDatetime).toLocaleDateString()} { new Date(match.listConfirmDatetime).toLocaleTimeString()}
      </Typography>

      <Button variant="contained" href={`matches/new`}>Create</Button>
      {/* <MatchesTable matches={matches} groupId={params.group_id}/> */}
    </>
  ) : 'Error loaging group'
}