"use client";
import {
  TextField,
} from "@mui/material";
import { BaseField } from "../BaseField";

export const FullTextField = ({
  value,
  setValue,
  label,
  name,
  helpText,
  required = false
}: {
  value: string | undefined;
  setValue: (event:any) => void;
  label: string;
  name: string
  helpText?: string;
  required?: boolean;
}) => {
  return (
    <BaseField label={label} helpText={helpText} required={required}>
      <TextField value={value} onChange={setValue} name={name}/>
    </BaseField>
  );
};
