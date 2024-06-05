"use client";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";
import { ActCreateMatch } from "./actions";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Form = styled("form")((theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

const Field = styled(TextField)(() => ({
  maxWidth: 500,
}));
export const MatchesForm = ({group}: {group: any}) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const theme = useTheme();
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());


  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setError(false);
    const formData = new FormData(event.currentTarget);

    const macth = {
      matchDatetime: new Date(formData.get("matchDatetime")?.toString()).toISOString(),
      listStartDatetime: new Date(formData.get("listStartDatetime")?.toString()).toISOString(),
      listConfirmDatetime: new Date(formData.get("listConfirmDatetime")?.toString()).toISOString(),
      matchPlace: formData.get("matchPlace")?.toString(),
      teams: {
        team1ID: group.teams[0].id,
        team2ID: group.teams[1].id
      },
      matchLocation: {
        latitude: 45.497865, 
        longitude: 9.244192
      },
      group: group.id
    };
    const result = await ActCreateMatch(macth);

    if (result) router.push("/matches");
    else setError(true);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Form onSubmit={handleSubmit}>
      <DateTimePicker label="Match date" name="matchDatetime"/>
      <DateTimePicker label="List start" name="listStartDatetime"/>
      <DateTimePicker label="List confirm" name="listConfirmDatetime"/>
      <Field name="matchPlace" label="Match place" />

      {error ? (
        <Typography color="error">Hubo un error salvando el grupo</Typography>
      ) : (
        <></>
      )}
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <Button variant="contained" type="submit">
          Crear
        </Button>
        <Button variant="outlined" href="/matches">
          Cancelar
        </Button>
      </Box>
    </Form>
    </LocalizationProvider>
  );
};
