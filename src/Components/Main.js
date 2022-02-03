import React from "react";
import { useState } from "react";

const Main = () => {
  const [money, setmoney] = useState(0);
  const handleMoney = (event) => {
    setmoney(event.target.value);
  };
  return (
    <div className="main">
      <div className="line">
        <input type="text" value={money} onChange={handleMoney} />€
      </div>
      <div className="symbol">🔽</div>
      <div className="line">
        <input type="text" value={money * 1.14} /> $
      </div>
    </div>
  );
};

export default Main;
