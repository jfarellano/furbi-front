"use client";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { FormEvent, useState } from "react";
// import { ActCreateClient } from "./actions";
import { useRouter } from "next/navigation";
import { Checkboxes } from "@/components/Checkboxes";
import { ActUpdateUser } from "./actions";

const Form = styled("form")((theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: 8,
}));

const Field = styled(TextField)(() => ({
  maxWidth: 500,
}));

export const UserProfileForm = ({profile, positions}: {profile: any, positions: any[]}) => {
  const [state, setState] = useState(profile)
  const router = useRouter();
  const [error, setError] = useState(false);

  const handleChange = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(false);

    const user = {
      name: state.name,
      nickname: state.nickname,
      phone: state.phone,
      positions: state.positions
    }

    const result = await ActUpdateUser(profile.id, user);

    if (result) router.push("/");
    else setError(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="Name"
        value={state.name}
        onChange={handleChange}
        required
      />
      <Field
        name="nickname"
        label="Nickname"
        onChange={handleChange}
        value={state.nickname}
        required
      />
      <Field
        name="phone"
        label="Phone"
        onChange={handleChange}
        value={state.phone}
        type="number"
        required
      />
      <Checkboxes
        name={'positions'}
        options={Object.entries(positions).map(([key, name]) => ({name, key}))}
        selection={state.positions}
        setSelection={handleChange}
        label={"Choose your positions"}
      />
      {error ? (
        <Typography color="error">There was an error saving your profile</Typography>
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
          Save
        </Button>
        <Button
          variant="outlined"
          href="/"
        >
          Cancel
        </Button>
      </Box>
    </Form>
  );
};
