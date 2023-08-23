import { useState } from "react";
import "./App.css";
import CustomCards from "./components/CustomCards";
import CustomButton from "./components/CustomButton";
import { useSelector, useDispatch } from "react-redux";
import {
  currency,
  changeCurrency,
  changeToNaira,
} from "./redux/slice/authSlice";

const goods = [
  {
    image:
      "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "signature briefcase",
    dollarPrice: "$234",
    nairaPrice: "₦130,000",
  },
  {
    image:
      "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "black briefcase",
    dollarPrice: "$134",
    nairaPrice: "₦80,000",
  },
  {
    image:
      "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "black briefcase",
    dollarPrice: "$334",
    nairaPrice: "₦230,000",
  },
  {
    image:
      "https://www.detailafrica.com/wp-content/uploads/2021/03/Detail-Africa-Signature-Briefcase-Front-View-570x718.png",
    name: "red briefcase",
    dollarPrice: "$364",
    nairaPrice: "₦730,000",
  },
];

function App() {
  const dispatch = useDispatch();

  return (
    <>
      {goods.map((theCards, index) => {
        return (
          <CustomCards
            style={{
              display: "flex",
              width: "6rem",
            }}
            key={index}
            {...theCards}
            image={theCards.image}
            name={theCards.name}
            dollarPrice={theCards.dollarPrice}
            nairaPrice={theCards.nairaPrice}
          />
        );
      })}
      <CustomButton
        currency={"#"}
        onClick={() => {
          dispatch(changeToNaira());
          console.log("clicked");
        }}
      />
      <CustomButton
        currency={"$"}
        onClick={() => {
          dispatch(changeCurrency());
          console.log("clicked");
        }}
      />
      <div className="cartItems"></div>
    </>
  );
}

export default App;
