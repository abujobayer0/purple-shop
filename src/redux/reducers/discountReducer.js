import { SET_DISCOUNT } from "../actions/discountAction";

const initialState = {
  discount: 0,
};

const discountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DISCOUNT:
      return {
        ...state,
        discount: action.payload,
      };
    default:
      return state;
  }
};

export default discountReducer;
