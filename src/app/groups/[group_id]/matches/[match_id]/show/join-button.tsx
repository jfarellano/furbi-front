"use client";
import { exitMatch, joinMatch } from "@/api/matches";
import {
  Button,
} from "@mui/material";

export const JoinButton = ({
  matchId,
  joined,
}: {
  joined: boolean;
  matchId: string;
}) => {

  const changeMatchPrescence = async () => {
    if(joined) await exitMatch(matchId)
    else await joinMatch(matchId)
    window.location.reload()
  }

  return <Button  onClick={() => changeMatchPrescence()}>{joined ? 'Un Join' : 'Join'}</Button>;
};
