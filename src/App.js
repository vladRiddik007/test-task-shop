import React from "react";
import data from "./products.json";
import { Container } from "@material-ui/core";
import { CardProduct } from "./Components/CardProduct";

function App() {
  const [products, setProducts] = React.useState(data.products);

  return (
    <Container>
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default App;
