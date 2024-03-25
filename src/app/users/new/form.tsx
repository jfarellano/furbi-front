"use client";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { FormEvent, useState } from "react";
import { ActCreateUser } from "./actions";
import { useRouter } from "next/navigation";

const Form = styled("form")((theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

const Field = styled(TextField)(() => ({
  maxWidth: 500,
}));

export const UsersForm = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(false);
    const formData = new FormData(event.currentTarget)
    const user = {
      email: formData.get('email')?.toString(),
      name: formData.get('name')?.toString(),
      password: formData.get('password')?.toString(),
    }
    const result = await ActCreateUser(user);

    if (result) router.push("/users");
    else setError(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="Nombre"
        required
      />
      <Field
        type="email"
        name="email"
        label="Email"
        required
      />
      <Field
        type="password"
        name="password"
        label="Contraseña"
        required
      />
      {error ? (
        <Typography color="error">Hubo un error salvando el usuario</Typography>
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
          href="/users"
        >
          Cancelar
        </Button>
      </Box>
    </Form>
  );
};
