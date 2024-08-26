import { Typography } from "@mui/material"
import { getGroup } from "@/api/groups"
import { getMatch } from "@/api/matches"
import { JoinButton } from "./join-button"
import { getProfile } from "@/api/users"
import { ConfirmButton } from "./confirm-button"

export default async function Page({params}:{params: {group_id: string, match_id: string}}) {
  const group = await getGroup(params.group_id)
  const match = await getMatch(params.match_id)
  const user = await getProfile()

  const confirmed = (id: string) => {
    return match.playerList.some((player:any) => {
      return `${player.userId}` == `${id}` && player.confirmDatetime
    })
  }

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

      {
      (new Date(match.matchDatetime)) > new Date() && <>
        {
          (new Date(match.listStartDatetime)) < new Date() && <JoinButton matchId={match.id} joined={match.playerList.some((player:any) => player.userId == user?.id) }/>
        }
        { 
          (new Date(match.listConfirmDatetime)) > new Date() && <ConfirmButton matchId={match.id} confirmed={confirmed(user.id)} joined={match.playerList.some((player:any) => player.userId == user?.id)} />
        }
      </>
      }
      
      <ol>
        {
          match.playerList.map((player: any) => {
            return <li key={player.userId}>{player.confirmDatetime ? '✅' : '❌'} {group.players.find((gPlayer:any) => gPlayer.id == player.userId).nickname}</li>
          })
        }
      </ol>
    </>
  ) : 'Error loaging group'
}