import { useSelector, useDispatch } from "react-redux";
import { setDiscount } from "../redux/actions/discountAction";

const useDiscount = () => {
  const discount = useSelector((state) => state.discount);
  const dispatch = useDispatch();

  const setDiscountValue = (discount) => {
    dispatch(setDiscount(discount));
  };

  return {
    discount,
    setDiscount: setDiscountValue,
  };
};

export default useDiscount;
