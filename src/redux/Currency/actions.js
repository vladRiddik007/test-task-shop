import types from "./types";

export const currencyChange = (data) => (dispatch) => {
  dispatch(currencySuccess(data));
};

export const currencyStarted = () => {
  return {
    type: types.CHANGE_CURRENCY_START,
  };
};
export const currencySuccess = (payload) => {
  return {
    type: types.CHANGE_CURRENCY_SUCCESS,
    payload,
  };
};

export const currencyError = (message) => {
  return {
    type: types.CHANGE_CURRENCY_ERROR,
    message,
  };
};
