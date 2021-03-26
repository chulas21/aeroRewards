import * as types from '../../action-types';

const initialState = {
  name: '',
  points: 0,
  redeemHistory: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        name: action.payload.name,
        points: action.payload.points,
        redeemHistory: action.payload.redeemHistory,
      };
    default: {
      return state;
    }
  }
};

export default userReducer;
