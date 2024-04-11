"use client";
import {
  Box,
  FormGroup,
  FormLabel,
  Typography,
} from "@mui/material";
import { HelpTooltip } from "../HelpTooltip";


export const BaseField = ({
  label,
  helpText,
  children,
  required = false
}: {
  label: string;
  helpText?: string;
  children: React.ReactNode,
  required: boolean
}) => {
  return (
    <FormGroup>
      <FormLabel component="legend">{required ? <Box display='flex'><><Typography>{label}</Typography><Typography color='error'> *</Typography></></Box> : label}{helpText ? <HelpTooltip helpText={helpText}/> : <></>}</FormLabel>
      {children}
    </FormGroup>
  );
};
