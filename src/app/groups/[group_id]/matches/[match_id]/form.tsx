"use client";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";
import { ActUpdateClient } from "./actions";
import { useRouter } from "next/navigation";

const Form = styled("form")((theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

const Field = styled(TextField)(() => ({
  maxWidth: 500,
}));

export const ClientForm = (client: any | null) => {
  const router = useRouter();
  const [formClient, setFormClient] = useState(client.client);
  const [error, setError] = useState(false);

  const handleChange = (event: any) => {
    setFormClient({
      ...formClient,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    setError(false);
    const result = await ActUpdateClient(formClient.id, formClient);

    if (result) window.location.href = "/clients";
    else setError(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        onChange={handleChange}
        name="name"
        label="Nombre"
        value={formClient.name}
        required
      />
      {error ? (
        <Typography color="error">Hubo un error salvando el cliente</Typography>
      ) : (
        <></>
      )}
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <Button
          variant="contained"
          type="submit"
        >
          Guardar
        </Button>
        <Button
          variant="outlined"
          href="/clients"
        >
          Cancelar
        </Button>
      </Box>
    </Form>
  );
};
