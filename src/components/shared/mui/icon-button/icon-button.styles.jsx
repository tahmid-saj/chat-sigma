import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function IconButtons() {
  return (
      <IconButton sx={{ backgroundColor: "#C08B5C", marginLeft: "1%", width: "60px", height: "60px" }} color="secondary" aria-label="send message" size="large">
        <KeyboardDoubleArrowUpIcon />
      </IconButton>
  );
}
