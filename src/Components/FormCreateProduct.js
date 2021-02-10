import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";
import { ImgFile } from "./ImgFile";
import { useDispatch } from "react-redux";
import { productCreate } from "../redux/Products/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  input: {
    display: "none",
  },
}));

export function FormCreateProduct() {
  const classes = useStyles();
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const dispatch = useDispatch();
  const handleChange = (prop) => (event) => {
    setNewProduct({ ...newProduct, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      productCreate({
        id: Math.random(),
        name: newProduct.name,
        price: Number(newProduct.price),
        description: newProduct.description,
        image: newProduct.image,
      })
    );
  };

  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <Box mt={4}>
        <TextField
          required
          label="Name of product"
          variant="outlined"
          value={newProduct.name}
          onChange={handleChange("name")}
        />
      </Box>
      <Box mt={4}>
        <TextField
          required
          label="Price"
          variant="outlined"
          type="number"
          value={newProduct.price}
          onChange={handleChange("price")}
        />
      </Box>
      <Box mt={4}>
        <TextField
          required
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          value={newProduct.description}
          onChange={handleChange("description")}
        />
      </Box>
      <Box mt={4}>
        <ImgFile item={newProduct} changeItem={setNewProduct} />
      </Box>

      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
    </form>
  );
}
