import React from "react";
import data from "./products.json";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

export function SortProducts() {
  const [products, setProducts] = React.useState(
    data.products.sort((a, b) => b.price - a.price)
  );

  const [sort, setSort] = React.useState("expensive");

  const handleChange = (event) => {
    const sort = event.target.value;
    const sortProducts = [...products];
    if (sort === "expensive") {
      sortProducts.sort((a, b) => b.price - a.price);
    } else if (sort === "cheap") {
      sortProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "alphabetically") {
      sortProducts.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    setSort(sort);
    setProducts(sortProducts);
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
