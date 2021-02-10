import React from "react";
import { Box, Container, Divider, Grid } from "@material-ui/core";
import { CardProduct } from "./Components/CardProduct";
import { makeStyles } from "@material-ui/core/styles";
import { FilterPrice } from "./Components/FilterPrice";
import { FormCreateProduct } from "./Components/FormCreateProduct";
import { CurrencyToggle } from "./Components/CurrencyToggle";
import { useSelector } from "react-redux";
import { SortProducts } from "./Components/SortProducts";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    marginTop: 30,
  },
  wrapFilters: {
    minWidth: 300,
    borderRight: "1px solid",
    marginRight: 10,
    paddingRight: 10,
  },
  wrapProducts: {
    height: 580,
    overflowY: "scroll",
  },
}));

function App() {
  const classes = useStyles();
  const {
    productsReducer: { data },
  } = useSelector((state) => state);
  React.useEffect(() => {
    setProducts(data.sort((a, b) => b.price - a.price));
  }, [data]);
  const [products, setProducts] = React.useState([]);

  return (
    <>
      <Container className={classes.root}>
        <Box className={classes.wrapFilters}>
          <Box mt={4}>
            <FilterPrice />
          </Box>
          <Box mt={4}>
            <CurrencyToggle />
          </Box>
          <Box mt={4}>
            <SortProducts />
          </Box>
        </Box>
        <Divider orientation="vertical" />
        <Box className={classes.wrapProducts}>
          <Grid container style={{ gridGap: 10 }} justify="space-between">
            {products.map((product) => (
              <Grid item xs={12} sm={5} key={product.id}>
                <CardProduct product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <FormCreateProduct />
    </>
  );
}

export default App;
