import React from "react";
import data from "./products.json";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { CardProduct } from "./Components/CardProduct";
import { makeStyles } from "@material-ui/core/styles";
import { PriceComponent } from "./Components/PriceComponent";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  wrapSorting: {
    minWidth: 300,
  },
  wrapProducts: {
    height: 580,
    overflowY: "scroll",
  },
}));

function App() {
  const classes = useStyles();
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

  let max = data.products.reduce((acc, curr) =>
    acc.price > curr.price ? acc : curr
  );

  let min = data.products.reduce((acc, curr) =>
    acc.price < curr.price ? acc : curr
  );

  const [filterPrice, setFilterPrice] = React.useState([min.price, max.price]);

  const handleCount = () => {
    let newProducts = [...data.products];
    newProducts = newProducts.filter(
      (product) =>
        product.price >= filterPrice[0] && product.price <= filterPrice[1]
    );
    setProducts(newProducts);
  };

  const [currency, setCurrency] = React.useState({
    label: "UAH",
    value: 1,
  });

  return (
    <Container className={classes.root}>
      <Box className={classes.wrapSorting}>
        <Box mt={4}>
          <PriceComponent
            value={filterPrice}
            setValue={setFilterPrice}
            min={min.price}
            max={max.price}
            count={handleCount}
          />
        </Box>
        <Box mt={4}>
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button onClick={() => setCurrency({ label: "USD", value: 27.8 })}>
              USD
            </Button>
            <Button onClick={() => setCurrency({ label: "UAH", value: 1 })}>
              UAH
            </Button>
          </ButtonGroup>
        </Box>
        <Box mt={4}>
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
        </Box>
      </Box>
      <Divider orientation="vertical" />
      <Box className={classes.wrapProducts}>
        <Grid container style={{ gridGap: 10 }} justify="space-between">
          {products.map((product) => (
            <Grid item xs={12} sm={5} key={product.id}>
              <CardProduct product={product} currency={currency} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
