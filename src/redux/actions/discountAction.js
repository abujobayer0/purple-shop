export const SET_DISCOUNT = "SET_DISCOUNT";

export const setDiscount = (discount) => {
  return {
    type: SET_DISCOUNT,
    payload: discount,
  };
};
