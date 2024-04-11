"use client";
import {
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import { HelpTooltip } from "../HelpTooltip";
import { BaseField } from "../BaseField";

export const FullTextField = ({
  value,
  setValue,
  label,
  name,
  helpText
}: {
  value: string | undefined;
  setValue: (event:any) => void;
  label: string;
  name: string
  helpText?: string;
}) => {
  return (
    <BaseField label={label} helpText={helpText}>
      <TextField value={value} onChange={setValue} name={name}/>
    </BaseField>
  );
};
