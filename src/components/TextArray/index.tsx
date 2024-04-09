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

export const TextArray = ({
  options,
  setOptions,
  name,
  label,
}: {
  name: string;
  options: string[] | null;
  setOptions: Function;
  label: string;
}) => {
  const theme = useTheme();
  const [newValue, setNewValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = event.target.name;
    const value = event.target.value;
    const newSelection = options || [];
    newSelection[+index] = value;
    setOptions({
      target: {
        name,
        value: newSelection,
      },
    });
  };

  const addEntry = () => {
    setOptions({ target: { name, value: [...(options || []), newValue] } });
    setNewValue("");
  };

  const deleteEntry = (index: number) => {
    let newOptions: string[] = JSON.parse(JSON.stringify(options));
    if (options) newOptions.splice(index, 1);
    setOptions({ target: { name, value: newOptions } });
  };

  return (
    <FormGroup>
      <FormLabel component="legend">{label}</FormLabel>
      {(options || []).map((option, index) => {
        return (
          <Box
            key={index}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            marginBottom={1}
          >
            <TextField
              sx={{ width: "calc(100% - 58px)" }}
              error={!option}
              helperText={!option ? "Este valor no puede estar vacio" : null}
              variant="outlined"
              value={option}
              name={`${index}`}
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
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <TextField
          variant="outlined"
          value={newValue}
          onChange={(event) => setNewValue(event.target.value)}
          sx={{ width: "calc(100% - 58px)" }}
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
            disabled={!newValue || options?.some((value) => !value)}
            onClick={addEntry}
          >
            <Add sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </FormGroup>
  );
};
