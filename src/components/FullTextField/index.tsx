"use client";
import {
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";

export const FullTextField = ({
  value,
  setValue,
  label,
  name
}: {
  value: string | undefined;
  setValue: (event:any) => void;
  label: string;
  name: string
}) => {
  return (
    <FormGroup>
      <FormLabel component="legend">{label}</FormLabel>
      <TextField value={value} onChange={setValue} name={name}/>
    </FormGroup>
  );
};
