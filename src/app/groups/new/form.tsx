"use client";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";
import { ActCreateGroup } from "./actions";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import { v4 as uuidv4 } from 'uuid';

const Form = styled("form")((theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

const Field = styled(TextField)(() => ({
  maxWidth: 500,
}));
export const GroupsForm = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const theme = useTheme();

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    setError(false);
    const formData = new FormData(event.currentTarget);
    const group = {
      name: formData.get("name")?.toString(),
      teams: [
        {
          id: uuidv4(),
          name: formData.get("team1")?.toString(),
          color: '#ffffff'
        },
        {
          id: uuidv4(),
          name: formData.get("team2")?.toString(),
          color: '#ffffff'
        }
      ]
    };
    const result = await ActCreateGroup(group);

    if (result) router.push("/groups");
    else setError(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field name="name" label="Nombre" required />
      <Field name="team1" label="Nombre del equipo 1" required />
      <Field name="team2" label="Nombre del equipo 2" required />
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
        <Button variant="outlined" href="/groups">
          Cancelar
        </Button>
      </Box>
    </Form>
  );
};
