"use client";
import { Checkbox, FormControlLabel } from "@mui/material";
import { BaseField } from "../BaseField";

export const Checkboxes = ({
  options,
  selection,
  setSelection,
  name,
  label,
  helpText,
  required = false
}: {
  name: string;
  options: { name: string; key: string }[];
  selection: string[] | null;
  setSelection: Function;
  label: string
  helpText?: string;
  required?: boolean;
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
    <BaseField label={label} helpText={helpText} required={required}>
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
    </BaseField>
  );
};
