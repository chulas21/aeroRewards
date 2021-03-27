import * as types from "../../action-types";
import { BASE_DIR, API_TOKEN } from "../../../res/api-const";
const axios = require("axios").default;

export const getUserData = () => {
  return function (dispatch) {
    axios({
      url: `${BASE_DIR}/user/me`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
    })
      .then((res) => {
        dispatch({ type: types.SET_DATA, payload: res.data });
        return true;
      })
      .catch(() => false);
  };
};

export const redeemProduct = (p) => {
  return function (dispatch) {
    axios({
      url: `${BASE_DIR}/redeem`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: "application/json",
      },
      data: {
        productId: p._id,
      },
    }).then(() => {
      dispatch({ type: types.REDEEM_PRODUCT, payload: p });
    });
  };
};
