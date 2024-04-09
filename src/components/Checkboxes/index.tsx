"use client";
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material";

export const Checkboxes = ({
  options,
  selection,
  setSelection,
  name,
  label
}: {
  name: string;
  options: { name: string; key: string }[];
  selection: string[] | null;
  setSelection: Function;
  label: string
}) => {
  const checked = (key: string) => {
    return selection ? selection.includes(key) : false;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const checked = event.target.checked;
    const newSelection = selection ? selection : []
    setSelection({
      target: {
        name,
        value: checked
          ? [...newSelection, key]
          : newSelection.filter((select) => select != key),
      }
    });
  };

  return (
    <FormGroup>
      <FormLabel component="legend">{label}</FormLabel>
      {options.map((option) => {
        return (
          <FormControlLabel
            key={option.key}
            control={
              <Checkbox
                name={option.key}
                checked={checked(option.key)}
                onChange={handleChange}
              />
            }
            label={option.name}
          />
        );
      })}
    </FormGroup>
  );
};
