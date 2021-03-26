import * as types from '../../action-types';
import { BASE_DIR, API_TOKEN } from '../../../res/api-const';
const axios = require('axios').default;

export const getProductList = () => {
  return function (dispatch) {
    axios({
      url: `${BASE_DIR}/products`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`,
        Accept: 'application/json',
      },
    }).then((res) => {
      dispatch({ type: types.GET_PRODUCTS, payload: res.data });
    });
  };
};
