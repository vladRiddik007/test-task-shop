import React from "react";
import { Box, Button, Input } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { productsPrice } from "../redux/Products/actions";

export const FilterPrice = () => {
  const data = JSON.parse(localStorage.getItem("products"));
  const dispatch = useDispatch();

  let max = data.reduce((acc, curr) => (acc.price > curr.price ? acc : curr));
  let min = data.reduce((acc, curr) => (acc.price < curr.price ? acc : curr));

  const [filterPrice, setFilterPrice] = React.useState([min.price, max.price]);

  const handleInputChange = (event, index) => {
    const newValue = [...filterPrice];
    newValue[index] =
      event.target.value === "" ? "" : Number(event.target.value);
    setFilterPrice(newValue);
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
          value={filterPrice[0]}
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
          value={filterPrice[1]}
          margin="dense"
          onChange={(e) => handleInputChange(e, 1)}
          inputProps={{
            step: 1,
            min,
            max,
            type: "number",
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(productsPrice(filterPrice))}
        >
          Ok
        </Button>
      </Box>
    </Box>
  );
};
