import { Button, Typography } from "@mui/material"
import { getGroup } from "@/api/groups"
import { MatchesTable } from "./matches-table"
import { getMatches } from "@/api/matches"

export default async function Page({params}:{params: {group_id: string}}) {
  const group = await getGroup(params.group_id)
  const matches = await getMatches(params.group_id)

  return group ? (
    <>
      <Typography variant="h3">
        {group.name}
      </Typography>
      <Typography variant="h4">
        Matches
      </Typography>
      <Button variant="contained" href={`matches/new`}>Create</Button>
      <MatchesTable matches={matches} groupId={params.group_id}/>
    </>
  ) : 'Error loaging group'
}