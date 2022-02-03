import React from "react";
import { useState } from "react";

const Main = () => {
  const [eur, setEur] = useState(0);
  const [usd, setUsd] = useState(0);

  const convertEur = (event) => {
    setEur(event.target.value);
    setUsd(event.target.value * 1.14);
  };
  const convertUsd = (event) => {
    setUsd(event.target.value);
    setEur(event.target.value * 0.87);
  };
  return (
    <div className="main">
      <div className="line">
        <input type="text" value={eur} onChange={convertEur} />€
      </div>
      <div className="symbol">🔽 🔼</div>
      <div className="line">
        <input type="text" value={usd} onChange={convertUsd} /> $
      </div>
    </div>
  );
};

export default Main;
