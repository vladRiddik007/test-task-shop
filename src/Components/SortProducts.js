import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  productsAlpha,
  productsCheap,
  productsExpensive,
} from "../redux/Products/actions";

export function SortProducts() {
  const dispatch = useDispatch();
  const [sort, setSort] = React.useState("expensive");

  const handleChange = (event) => {
    const sort = event.target.value;
    if (sort === "expensive") {
      dispatch(productsExpensive());
    } else if (sort === "cheap") {
      dispatch(productsCheap());
    } else if (sort === "alphabetically") {
      dispatch(productsAlpha());
    }
    setSort(sort);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Sort</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={sort}
        onChange={handleChange}
      >
        <FormControlLabel
          value="cheap"
          control={<Radio />}
          label="Price from low to higt"
        />
        <FormControlLabel
          value="expensive"
          control={<Radio />}
          label="Price from higt to low"
        />
        <FormControlLabel
          value="alphabetically"
          control={<Radio />}
          label="Alphabetically"
        />
      </RadioGroup>
    </FormControl>
  );
}
