"use client"
import { styled } from "@mui/material";
import { alpha } from "@mui/material/styles";

const ColorPickerComp = styled("div")(({ theme }) => ({
  width: 500,
  height: 50,
  borderRadius: 4,
  backgroundColor: theme.palette.primary.main,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.8),
  },
}));

export const ColorPicker = ({
  color,
  onChange,
}: {
  color: string;
  onChange: (newColor: string) => void;
}) => {
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <ColorPickerComp
      style={{ backgroundColor: color }}
      onClick={() => {
        const input = document.createElement("input");
        input.type = "color";
        input.value = color;
        input.click();
        input.addEventListener("change", handleColorChange);
      }}
    />
  );
};