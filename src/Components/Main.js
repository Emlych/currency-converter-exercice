import React from "react";
import { useState } from "react";
import rates from "../assets/currency";

const Main = () => {
  //   const [eur, setEur] = useState(0);
  //   const [usd, setUsd] = useState(0);

  //   const convertEur = (event) => {
  //     setEur(event.target.value);
  //     setUsd(event.target.value * 1.14);
  //   };
  //   const convertUsd = (event) => {
  //     setUsd(event.target.value);
  //     setEur(event.target.value * 0.87);
  //   };

  const [cur1, setCur1] = useState(0);
  const [cur2, setCur2] = useState(0);
  const [curType1, setCurType1] = useState("EUR");
  const [curType2, setCurType2] = useState("USD");

  const currency = Object.keys(rates);

  const handleCurChange1 = (event) => {
    console.log("currency ===>", event.target.value);
    setCurType1(event.target.value);
    console.log("taux de conversion ===>", rates[event.target.value]);
  };
  const handleCurChange2 = (event) => {
    console.log("currency ===>", event.target.value);
    setCurType2(event.target.value);
    console.log("taux de conversion ===>", rates[event.target.value]);
  };

  const convertCur1 = (event) => {
    setCur1(event.target.value);
    setCur2(event.target.value * rates[curType1]);
  };
  const convertCur2 = (event) => {
    setCur2(event.target.value);
    setCur1(event.target.value * rates[curType2]);
  };

  return (
    <div className="main">
      <div className="line">
        <input type="text" value={cur1} onChange={convertCur1} />
        <div>
          <select
            value={curType1}
            onChange={handleCurChange1}
            name="currency"
            className="currencySelect"
            id="currency-select"
          >
            {currency.map((element, index) => {
              return (
                <option key={index} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="symbol">🔽 🔼</div>
      <div className="line">
        <input type="text" value={cur2} onChange={convertCur2} />
        <div>
          <select
            value={curType2}
            onChange={handleCurChange2}
            name="currency"
            className="currencySelect"
            id="currency-select"
          >
            {currency.map((element, index) => {
              return (
                <option key={index} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Main;
