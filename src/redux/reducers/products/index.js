import * as types from "../../action-types";

const initialState = {
  productList: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        productList: action.payload,
      };

    default: {
      return state;
    }
  }
};

export default productReducer;
