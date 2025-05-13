import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%', backgroundColor: "#444444" },
      }}
      // validate
      autoComplete="off"
    >
      <div>
        <TextField
          sx={{ width: "100%" }}
          id="filled-multiline-static"
          label="Enter message"
          multiline
          rows={3}
          variant="filled"
          color="secondary"
          fullWidth
        />
      </div>
    </Box>
  );
}
