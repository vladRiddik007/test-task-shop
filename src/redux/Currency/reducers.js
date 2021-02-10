import types from "./types";

const INITIAL_STATE = {
  currency: {
    label: "UAH",
    value: 1,
  },
};

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_CURRENCY_SUCCESS:
      return {
        ...state,
        currency: action.payload
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default currencyReducer;
