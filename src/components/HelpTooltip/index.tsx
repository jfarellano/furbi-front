import { Help } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export const HelpTooltip = ({helpText}:{helpText: string}) => {
  return (
    <Tooltip title={helpText}>
      <Help color="primary" fontSize="small" sx={{marginLeft: 1, marginBottom: '-5px'}}/>
    </Tooltip>
  );
};
