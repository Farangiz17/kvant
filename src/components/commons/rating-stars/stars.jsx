import React, { useState } from "react";
import { Rating } from "@mui/material";
import Box from "@mui/material/Box";
export default function Stars() {
  const [value, setValue] = useState(4)
  return (
    <Box
      sx={{"& > legend": { mt: 2 },}}
    >
      <Rating
    //   style={{width:'100px'}}
    name="size-small" 
    defaultValue={2}
     size="small"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
