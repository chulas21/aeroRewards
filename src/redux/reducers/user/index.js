import * as types from '../../action-types';

const initialState = {
  name: '',
  points: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case types.SET_POINTS:
      return {
        ...state,
        points: action.payload,
      };

    default:
      break;
  }
};
