"use client";
import {
  FormGroup,
  FormLabel,
} from "@mui/material";
import { HelpTooltip } from "../HelpTooltip";


export const BaseField = ({
  label,
  helpText,
  children
}: {
  label: string;
  helpText?: string;
  children: React.ReactNode
}) => {
  return (
    <FormGroup>
      <FormLabel component="legend">{label}{helpText ? <HelpTooltip helpText={helpText}/> : <></>}</FormLabel>
      {children}
    </FormGroup>
  );
};
