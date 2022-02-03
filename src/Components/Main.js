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

  const currency = Object.keys(rates);

  const selectedCur = document.getElementById("currency-select");
  //l'idée sera de récupérer rates.selectedCur.value   (eg{rates.AED})
  //selectedCur.value ne rend pas la valeur sélectionnée.

  const convertCur1 = (event) => {
    console.log(selectedCur.options.value);
    setCur1(event.target.value);
    setCur2(event.target.value * selectedCur.options.value);
  };
  const convertCur2 = (event) => {
    setCur2(event.target.value);
    setCur1(event.target.value * selectedCur.value);
  };

  return (
    <div className="main">
      <div className="line">
        <input type="text" value={cur1} onChange={convertCur1} />
        <span>€</span>
        <div>
          <select
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
        <input type="text" value={cur2} onChange={convertCur2} /> $
      </div>
    </div>
  );
};

export default Main;
