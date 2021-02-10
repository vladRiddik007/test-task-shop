import types from "./types";
import data from "../../products.json";

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(data.products));
}

const INITIAL_STATE = {
  data: JSON.parse(localStorage.getItem("products")),
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PRODUCTS_FILTER_PRICE:
      const newProducts = JSON.parse(localStorage.getItem("products")).filter(
        (product) =>
          product.price >= action.payload[0] &&
          product.price <= action.payload[1]
      );
      return {
        ...state,
        data: newProducts,
      };
    case types.PRODUCTS_SORT_EXPENSIVE:
      const EXPENSIVE = state.data.sort((a, b) => b.price - a.price);
      return {
        ...state,
        data: EXPENSIVE,
      };
    case types.PRODUCTS_SORT_CHEAP:
      const CHEAP = state.data.sort((a, b) => a.price - b.price);
      return {
        ...state,
        data: CHEAP,
      };
    case types.PRODUCTS_SORT_ALPHABETICALLY:
      const ALPHABETICALLY = state.data.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
      return {
        ...state,
        data: ALPHABETICALLY,
      };
    case types.PRODUCT_CREATE:
      return {
        ...state,
        data: action.payload,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default productsReducer;
