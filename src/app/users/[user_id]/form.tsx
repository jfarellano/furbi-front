"use client";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";
import { ActUpdateUser } from "./actions";
import { useRouter } from "next/navigation";

const Form = styled("form")((theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

const Field = styled(TextField)(() => ({
  maxWidth: 500,
}));

export const UsersForm = (user: any | null) => {
  const router = useRouter();
  const [formuUser, setFormUser] = useState(user.user);
  const [error, setError] = useState(false);

  const handleChange = (event: any) => {
    setFormUser({
      ...formuUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    setError(false);
    const result = await ActUpdateUser(formuUser.id, formuUser);

    if (result) window.location.href = "/users";
    else setError(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        onChange={handleChange}
        name="name"
        label="Nombre"
        value={formuUser.name}
        required
      />
      <Field
        onChange={handleChange}
        type="email"
        name="email"
        label="Email"
        value={formuUser.email}
        required
      />
      <Field
        onChange={handleChange}
        type="password"
        name="password"
        label="Contraseña"
        value={formuUser.password}
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
          Guardar
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
