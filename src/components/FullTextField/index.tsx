"use client";
import {
  FormGroup,
  FormLabel,
  TextField,
} from "@mui/material";
import { HelpTooltip } from "../HelpTooltip";

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
    <FormGroup>
      <FormLabel component="legend">{label}{helpText ? <HelpTooltip helpText={helpText}/> : <></>}</FormLabel>
      <TextField value={value} onChange={setValue} name={name}/>
    </FormGroup>
  );
};
