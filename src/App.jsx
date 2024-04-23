import "./App.css"
import { useState } from "react"
import calculate from "./calculation"

function App() {

const [firstOperand, setFirstOperand] = useState("0")
const [secondOperand, setSecondOperand] = useState("0")
const [operator, setOperator] = useState("+")

function handleFirst(num) {
  
  if(firstOperand === "0" && num !== "0") {
    setFirstOperand(num)
  } else if(firstOperand!=="0") {
    setFirstOperand(firstOperand + num)
    return
  }
  
  
}

function clearFirst(){
  setFirstOperand("0")
}

function handleSecond(num) {
  
  if(secondOperand === "0" && num !== "0") {
    setSecondOperand(num)
  }
  
  if(secondOperand!=="0"){
    setSecondOperand(secondOperand + num)
  }
}

function clearSecond(){
  setSecondOperand('0')
}

  return (
    <div className="calculator">
      <div className="panel">
        <p>{firstOperand}</p>
        <div className="numbers">
          <button onClick={() => handleFirst('1')}>1</button>
          <button onClick={() => handleFirst('2')}>2</button>
          <button onClick={() => handleFirst('3')}>3</button>
          <button onClick={() => handleFirst('4')}>4</button>
          <button onClick={() => handleFirst('5')}>5</button>
          <button onClick={() => handleFirst('6')}>6</button>
          <button onClick={() => handleFirst('7')}>7</button>
          <button onClick={() => handleFirst('8')}>8</button>
          <button onClick={() => handleFirst('9')}>9</button>
          <button onClick={() => handleFirst('0')}>0</button>
          <button onClick={clearFirst}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>[{operator}]</p>
        <div className="numbers">
          <button onClick={() => setOperator('+')}>+</button>
          <button onClick={() => setOperator('-')}>-</button>
          <button onClick={() => setOperator('*')}>*</button>
          <button onClick={() => setOperator('÷')}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>0</p>
        <div className="numbers">
          <button onClick={() => handleSecond('1')}>1</button>
          <button onClick={() => handleSecond('2')}>2</button>
          <button onClick={() => handleSecond('3')}>3</button>
          <button onClick={() => handleSecond('4')}>4</button>
          <button onClick={() => handleSecond('5')}>5</button>
          <button onClick={() => handleSecond('6')}>6</button>
          <button onClick={() => handleSecond('7')}>7</button>
          <button onClick={() => handleSecond('8')}>8</button>
          <button onClick={() => handleSecond('9')}>9</button>
          <button onClick={() => handleSecond('0')}>0</button>
          <button onClick={clearSecond}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>0</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
