import types from "./types";

export const productsPrice = (data) => async (dispatch) => {
  dispatch(productsFilterPrice(data));
};

export const productsFilterPrice = (payload) => {
  return {
    type: types.PRODUCTS_FILTER_PRICE,
    payload,
  };
};

export const productsExpensive = () => async (dispatch) => {
  dispatch(productsSortExpensive());
};
export const productsSortExpensive = () => {
  return {
    type: types.PRODUCTS_SORT_EXPENSIVE,
  };
};

export const productsCheap = () => async (dispatch) => {
  dispatch(productsSortCheap());
};
export const productsSortCheap = () => {
  return {
    type: types.PRODUCTS_SORT_CHEAP,
  };
};

export const productsAlpha = () => async (dispatch) => {
  dispatch(productsSortAlpha());
};
export const productsSortAlpha = () => {
  return {
    type: types.PRODUCTS_SORT_ALPHABETICALLY,
  };
};

export const productCreate = (product) => async (dispatch) => {
  const data =  JSON.parse(localStorage.getItem("products"))
  data.push(product)
  localStorage.setItem("products", JSON.stringify(data));
  dispatch(newProduct(data));
};
export const newProduct = (payload) => {
  return {
    type: types.PRODUCT_CREATE,
    payload,
  };
};
