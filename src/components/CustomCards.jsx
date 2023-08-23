import { useSelector } from "react-redux";

const CustomCards = ({ image, name, dollarPrice, nairaPrice }) => {
  const currency = useSelector((state) => state.auth.currency);
  console.log(currency);
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        width: "4rem",
        height: "6rem",
      }}
    >
      <img src={image} alt="" />
      <p>{name}</p>
      <p>{currency === "$" ? dollarPrice : nairaPrice}</p>
    </div>
  );
};

export default CustomCards;
