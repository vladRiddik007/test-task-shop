import React from "react";
import { Box, Button, Input } from "@material-ui/core";

export const FilterPrice = ({ value, setValue, min, max, count }) => {
  const handleInputChange = (event, index) => {
    const newValue = [...value];
    newValue[index] =
      event.target.value === "" ? "" : Number(event.target.value);
    setValue(newValue);
  };
  return (
    <Box>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          aliginItems: "center",
        }}
      >
        <Input
          value={value[0]}
          margin="dense"
          onChange={(e) => handleInputChange(e, 0)}
          inputProps={{
            step: 1,
            min,
            max,
            type: "number",
          }}
        />
        <div>
          <span
            style={{
              marginLeft: 4,
              marginRight: 4,
              color: "#a6a5a5",
              verticalAlign: "sub",
            }}
          >
            -
          </span>
        </div>

        <Input
          value={value[1]}
          margin="dense"
          onChange={(e) => handleInputChange(e, 1)}
          inputProps={{
            step: 1,
            min,
            max,
            type: "number",
          }}
        />
        <Button variant="contained" color="primary" onClick={() => count()}>
          Ok
        </Button>
      </Box>
    </Box>
  );
};
