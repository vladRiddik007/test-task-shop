import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    maxWidth: 450,
    border: "1px solid",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  description: {
    height: 50,
    overflowY: "scroll",
  },
}));

export function CardProduct({ product }) {
  const classes = useStyles();
  const {
    currencyReducer: { currency },
  } = useSelector((state) => state)

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img
              className={classes.img}
              alt={product.name}
              src={`./img/${product.image}`}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                style={{ height: 56 }}
              >
                {product.name}
              </Typography>
              <Typography gutterBottom variant="subtitle1">{`${Math.round(
                product.price / currency.value
              )} ${currency.label}`}</Typography>
              <Typography
                variant="body2"
                gutterBottom
                className={classes.description}
              >
                {product.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
