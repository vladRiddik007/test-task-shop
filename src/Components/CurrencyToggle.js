import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { currencyChange } from "../redux/Currency/actions";

export function CurrencyToggle() {
  const dispatch = useDispatch();
  return (
    <ButtonGroup disableElevation variant="contained" color="primary">
      <Button
        onClick={() => dispatch(currencyChange({ label: "USD", value: 27.8 }))}
      >
        USD
      </Button>
      <Button
        onClick={() => dispatch(currencyChange({ label: "UAH", value: 1 }))}
      >
        UAH
      </Button>
    </ButtonGroup>
  );
}
