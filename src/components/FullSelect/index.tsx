"use client";
import {
  FormGroup,
  FormLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export const FullSelect = ({
  options,
  value,
  setValue,
  name,
  label,
}: {
  name: string;
  options: { name: string; key: string }[];
  value: string | undefined;
  setValue: Function;
  label: string;
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
    <FormGroup>
      <FormLabel component="legend">{label}</FormLabel>
      <Select value={value || undefined} label="Age" onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option.key} value={option.key}>{option.name}</MenuItem>
        ))}
      </Select>
    </FormGroup>
  );
};
