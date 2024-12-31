import React, { useState } from "react";
import { evaluate } from "mathjs"; 

function App() {
  const [expression, setExpression] = useState("");
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleButtonClick = (value) => {
    if (isResultDisplayed) {
      setExpression(value); 
      setIsResultDisplayed(false);
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const handleOperation = (op) => {
    if (isResultDisplayed) {
      setExpression((prev) => `${prev} ${op} `);
      setIsResultDisplayed(false);
    } else {
      setExpression((prev) => `${prev.trimEnd()} ${op} `);
    }
  };

  const calculateResult = () => {
    try {
      const result = evaluate(expression.trim());
      setExpression(result.toString());
      setIsResultDisplayed(true);
    } catch (error) {
      setExpression("Error");
      setIsResultDisplayed(true);
    }
  };

  const resetCalculator = () => {
    setExpression("");
    setIsResultDisplayed(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-black rounded-lg shadow-lg p-4 max-w-sm w-full">
        <input
          type="text"
          value={expression}
          readOnly
          placeholder="0"
          className="w-full text-right text-3xl p-4 mb-3 bg-gray-900 text-white border border-gray-700 rounded"
        />
        <div className="grid grid-cols-4 gap-2">
          {/* Row 1 */}
          <button
            onClick={resetCalculator}
            className="col-span-2 bg-red-500 text-white py-3 rounded hover:bg-red-600 text-lg"
          >
            AC
          </button>
          <button
            onClick={() => handleOperation("/")}
            className="bg-gray-700 text-white py-3 rounded hover:bg-gray-600 text-lg"
          >
            ÷
          </button>
          <button
            onClick={() => handleOperation("*")}
            className="bg-gray-700 text-white py-3 rounded hover:bg-gray-600 text-lg"
          >
            ×
          </button>

          {/* Row 2 */}
          {["7", "8", "9"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="bg-gray-800 text-white py-3 rounded hover:bg-gray-700 text-lg"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={() => handleOperation("-")}
            className="bg-gray-700 text-white py-3 rounded hover:bg-gray-600 text-lg"
          >
            −
          </button>

          {/* Row 3 */}
          {["4", "5", "6"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="bg-gray-800 text-white py-3 rounded hover:bg-gray-700 text-lg"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={() => handleOperation("+")}
            className="bg-gray-700 text-white py-3 rounded hover:bg-gray-600 text-lg"
          >
            +
          </button>

          {/* Row 4 */}
          {["1", "2", "3"].map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="bg-gray-800 text-white py-3 rounded hover:bg-gray-700 text-lg"
            >
              {btn}
            </button>
          ))}
          <button
            onClick={calculateResult}
            className="row-span-2 bg-green-500 text-white py-6 rounded hover:bg-green-600 text-lg"
          >
            =
          </button>

          {/* Row 5 */}
          <button
            onClick={() => handleButtonClick("0")}
            className="col-span-2 bg-gray-800 text-white py-3 rounded hover:bg-gray-700 text-lg"
          >
            0
          </button>
          <button
            onClick={() => handleButtonClick(".")}
            className="bg-gray-800 text-white py-3 rounded hover:bg-gray-700 text-lg"
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
