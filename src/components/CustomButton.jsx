import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./counterSlice";

const CustomButton = ({ currency, onClick }) => {
  //   const count = useSelector((state) => state.auth.value);
  //   const dispatch = useDispatch();
  return (
    <div>
      <button onClick={onClick}>{currency}</button>
    </div>
  );
};

export default CustomButton;
