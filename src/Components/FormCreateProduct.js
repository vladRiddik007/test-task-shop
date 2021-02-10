import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
  };

  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <TextField label="Name of product" variant="outlined" />
      <TextField label="Price" variant="outlined" type="number" />
      <TextField label="Description" multiline rows={4} variant="outlined" />
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <Button variant="contained" color="primary" type="submit">
        Save
      </Button>
    </form>
  );
}
