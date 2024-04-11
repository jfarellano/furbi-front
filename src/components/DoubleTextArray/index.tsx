"use client";
import { Add, Delete } from "@mui/icons-material";
import {
  Box,
  FormGroup,
  FormLabel,
  IconButton,
  TextField,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { HelpTooltip } from "../HelpTooltip";
import { BaseField } from "../BaseField";

const emptyVal = (fields: {name: string, key:string}[]) => {
  return {
    [fields[0].key]: '',
    [fields[1].key]: '',
  }
}

export const DoubleTextArray = ({
  options,
  setOptions,
  name,
  label,
  fields,
  helpText
}: {
  name: string;
  fields: {name: string, key:string}[]
  options: any[] | undefined;
  setOptions: Function;
  label: string;
  helpText?: string;
}) => {
  const theme = useTheme();
  const [newValue, setNewValue] = useState(emptyVal(fields));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = event.target.name.split(':')[0];
    const field = event.target.name.split(':')[1];
    const value = event.target.value;
    const newSelection = options || [];
    newSelection[+index] = {
      ...newSelection[+index],
      [field]: value
    };
    setOptions({
      target: {
        name,
        value: newSelection,
      },
    });
  };

  const addEntry = () => {
    setOptions({ target: { name, value: [...(options || []), newValue] } });
    setNewValue(emptyVal(fields));
  };

  const deleteEntry = (index: number) => {
    let newOptions: string[] = JSON.parse(JSON.stringify(options));
    if (options) newOptions.splice(index, 1);
    setOptions({ target: { name, value: newOptions } });
  };

  const canAdd = () => {
    return !newValue[fields[0].key] || !newValue[fields[1].key] || options?.some((value) => !value[fields[1].key] || !value[fields[0].key])
  }

  return (
    <BaseField label={label} helpText={helpText}>
      {(options || []).map((option, index) => {
        return (
          <Box
            key={index}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            marginTop={1}
          >
            <TextField
              label={fields[0].name}
              sx={{ width: "calc(50% - 66px)" }}
              error={!option[fields[0].key]}
              helperText={!option ? "Este valor no puede estar vacio" : null}
              variant="outlined"
              value={option[fields[0].key]}
              name={`${index}:${fields[0].key}`}
              onChange={handleChange}
            />
            <TextField
              label={fields[1].name}
              sx={{ width: "calc(50% - 66px)" }}
              error={!option[fields[1].key]}
              helperText={!option ? "Este valor no puede estar vacio" : null}
              variant="outlined"
              value={option[fields[1].key]}
              name={`${index}:${fields[1].key}`}
              onChange={handleChange}
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={50}
              height={50}
              borderRadius={50}
              sx={{
                backgroundColor: theme.palette.error.main,
              }}
            >
              <IconButton onClick={() => deleteEntry(index)}>
                <Delete sx={{ color: "white" }} />
              </IconButton>
            </Box>
          </Box>
        );
      })}
      <Box display="flex" flexDirection="row" justifyContent="space-between" marginTop={1}>
        <TextField
          label={fields[0].name}
          sx={{ width: "calc(50% - 66px)" }}
          variant="outlined"
          value={newValue[fields[0].key]}
          name={`${fields[0].key}`}
          onChange={(event) => setNewValue({
            ...newValue,
            [fields[0].key]: event.target.value
          })}
        />
        <TextField
          label={fields[1].name}
          sx={{ width: "calc(50% - 66px)" }}
          variant="outlined"
          value={newValue[fields[1].key]}
          name={`${fields[1].key}`}
          onChange={(event) => setNewValue({
            ...newValue,
            [fields[1].key]: event.target.value
          })}
        />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={50}
          height={50}
          borderRadius={50}
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <IconButton
            disabled={canAdd()}
            onClick={addEntry}
          >
            <Add sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </BaseField>
  );
};
