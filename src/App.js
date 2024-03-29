import { useState } from "react";
function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  // const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    setCalc(calc + value);
  };
  const handleCalculate = () => {
    setCalc(eval(calc).toString());
  };
  const createDigit = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>(0)</span> : ""}
          {calc || "0"}
        </div>
        <div className="operator">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={()=>setCalc("")}>DEL</button>
        </div>
        <div className="digits">
          {createDigit()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
