import React from "react";
import { useState } from "react";
import rates from "../assets/currency";
import Line from "./Line";

const Main = () => {
  const [cur1, setCur1] = useState(0);
  const [cur2, setCur2] = useState(0);
  const [curType1, setCurType1] = useState("EUR");
  const [curType2, setCurType2] = useState("USD");

  const currency = Object.keys(rates);

  const handleCurChange1 = (event) => {
    setCurType1(event.target.value);
  };
  const handleCurChange2 = (event) => {
    setCurType2(event.target.value);
  };

  const convertCur1 = (event) => {
    setCur1(event.target.value);
    setCur2((event.target.value * rates[curType2]) / rates[curType1]);
  };
  const convertCur2 = (event) => {
    setCur2(event.target.value);
    setCur1((event.target.value * rates[curType1]) / rates[curType2]);
  };

  return (
    <div className="main">
      <Line
        currency={currency}
        cur={cur1}
        convertCur={convertCur1}
        curType={curType1}
        handleCurChange={handleCurChange1}
      />
      <div className="symbol">🔽 🔼</div>
      <Line
        currency={currency}
        cur={cur2}
        convertCur={convertCur2}
        curType={curType2}
        handleCurChange={handleCurChange2}
      />
    </div>
  );
};

export default Main;
