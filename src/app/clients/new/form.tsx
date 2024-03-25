"use client";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { FormEvent, useState } from "react";
import { ActCreateClient } from "./actions";
import { useRouter } from "next/navigation";

const Form = styled("form")((theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

const Field = styled(TextField)(() => ({
  maxWidth: 500,
}));

export const ClientsForm = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(false);
    const formData = new FormData(event.currentTarget)
    const client = {
      name: formData.get('name')?.toString(),
    }
    const result = await ActCreateClient(client);

    if (result) router.push("/clients");
    else setError(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="Nombre"
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
          Crear
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
