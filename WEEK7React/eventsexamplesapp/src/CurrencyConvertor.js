import React, { useState } from "react";

function CurrencyConvertor() {
  const [inr, setInr] = useState("");
  const [euro, setEuro] = useState("");

  function handleSubmit() {
    const converted = parseFloat(inr) * 0.011;
    setEuro(converted.toFixed(2));
  }

  function handleReverse() {
    const converted = parseFloat(euro) / 0.011;
    setInr(converted.toFixed(2));
  }

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        value={inr}
        placeholder="INR"
        onChange={(e) => setInr(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert to Euro</button>
      <br />
      <input
        type="number"
        value={euro}
        placeholder="Euro"
        onChange={(e) => setEuro(e.target.value)}
      />
      <button onClick={handleReverse}>Convert to INR</button>
    </div>
  );
}

export default CurrencyConvertor;
