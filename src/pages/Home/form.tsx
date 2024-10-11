import { useState } from "react";
import * as ethereum from "../../lib/ethereum";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [labelText, setLabelText] = useState("");

  const handleButtonClick = async () => {
    const balance = await ethereum.getBalance(inputValue);
    setLabelText(`Balance: ${balance}`);
  };

  return (
    <div>
      <p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter ETH wallet address to get balance"
          style={{ padding: "5px", width: "320px" }}
        />
      </p>
      <button onClick={handleButtonClick} style={{ padding: "5px" }}>
        Click Me
      </button>
      <p style={{ padding: "5px", fontSize: "16px", fontWeight: "bold" }}>
        {labelText}
      </p>
    </div>
  );
}
