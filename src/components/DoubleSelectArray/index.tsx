"use client";
import { Add, Delete } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  FormGroup,
  FormLabel,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { HelpTooltip } from "../HelpTooltip";


export const DoubleSelectArray = ({
  options,
  setOptions,
  selection,
  selection_field,
  name,
  label,
  field,
  helpText
}: {
  name: string;
  field: {name: string, key:string}
  options: any[] | null;
  setOptions: Function;
  label: string;
  selection: string[];
  selection_field: string;
  helpText?: string;
}) => {
  const theme = useTheme();
  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

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
    setOptions({ target: { name, value: [...(options || []), {
      [selection_field]: inputValue,
      [field.key]: '',
    }] } });
    setValue(null);
    setInputValue('')
  };

  const deleteEntry = (index: number) => {
    let values: string[] = JSON.parse(JSON.stringify(options));
    if (options) values.splice(index, 1);
    setOptions({ target: { name, value: values } });
  };

  const canAdd = () => {
    return !inputValue || options?.some((value) => !value[field.key])
  }

  return (
    <FormGroup>
      <FormLabel component="legend">{label}{helpText ? <HelpTooltip helpText={helpText}/> : <></>}</FormLabel>
      {(options || []).map((option, index) => {
        return (
          <Box
            key={index}
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-between"
            marginTop={1}
          >
            <Typography width='100%' marginBottom={1} variant="body1">{option[selection_field]}</Typography>
            <TextField
              label={field.name}
              sx={{ width: "calc(100% - 58px)" }}
              error={!option}
              helperText={!option ? "Este valor no puede estar vacio" : null}
              variant="outlined"
              value={option[field.key]}
              name={`${index}:${field.key}`}
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
        <Autocomplete
          freeSolo
          sx={{ width: "calc(100% - 58px)" }}
          options={selection.map((option) => option)}
          renderInput={(params) => <TextField {...params} />}
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
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
    </FormGroup>
  );
};
