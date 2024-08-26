"use client";
import { confirmMatch } from "@/api/matches";
import {
  Button,
} from "@mui/material";

export const ConfirmButton = ({
  matchId,
  confirmed,
  joined
}: {
  confirmed: boolean;
  joined: boolean;
  matchId: string;
}) => {

  const changeMatchConfirmation = async () => {
    await confirmMatch(matchId)
    window.location.reload()
  }

  return !confirmed && joined ? <Button  onClick={() => changeMatchConfirmation()}>Confirm</Button> : <></>;
};
