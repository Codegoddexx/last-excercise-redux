import { useSelector } from "react-redux";

const CustomCards = ({ image, name, price, dollarPrice, nairaPrice }) => {
  const currency = useSelector((state) => state.auth.currency);
  console.log(currency);
  return (
    <div>
      <img src={image} alt="" />
      <p>{name}</p>
      <p>{currency === "$" ? dollarPrice : nairaPrice}</p>
    </div>
  );
};

export default CustomCards;
