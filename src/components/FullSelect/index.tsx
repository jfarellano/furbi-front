"use client";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { BaseField } from "../BaseField";

export const FullSelect = ({
  options,
  value,
  setValue,
  name,
  label,
  helpText,
  required = false
}: {
  name: string;
  options: { name: string; key: string }[];
  value: string | undefined;
  setValue: Function;
  label: string;
  helpText?: string;
  required?: boolean;
}) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    setValue({
      target: {
        name,
        value: event.target.value,
      },
    });
  };

  return (
    <BaseField label={label} helpText={helpText} required={required}>
      <Select value={value || undefined} label="Age" onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option.key} value={option.key}>{option.name}</MenuItem>
        ))}
      </Select>
    </BaseField>
  );
};
