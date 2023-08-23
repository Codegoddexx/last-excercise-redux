import { useSelector, useDispatch } from "react-redux";

const CustomButton = ({ currency, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{currency}</button>
    </div>
  );
};

export default CustomButton;
