import React from "react";

const Line = ({ currency, cur, convertCur, curType, handleCurChange }) => {
  return (
    <div className="line">
      <input type="text" value={cur} onChange={convertCur} />
      <div>
        <select
          value={curType}
          onChange={handleCurChange}
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
  );
};

export default Line;
