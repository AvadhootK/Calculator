import React, {useState} from "react"
import './App.css';
import * as math from 'mathjs'

function App() {
  const[result,setResult] = useState("")

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const clear = () => {
    setResult("")
  }

  const backspace = () => {
    setResult(result.slice(0,-1))
  }

  const calculate = () => {
    /*const a = result[result.length-1]
    if(a === "+" || a === "-" || a === "/" || a === "%" || a === "x" ) {
      alert("Invalid format used")
    }
    else {
      setResult(math.evaluate(result).toString())
    }*/
    try {
      setResult(math.evaluate(result).toString())
    }
    catch(err) {
      setResult("Error")
    }
    
  }

  return (
    <>
      <div className="container">
        <form>
          <input id="input" type="text" value={result} />
        </form><hr></hr>
        <div className="keypad">
          <button id="clear" className="button" onClick={clear}>Clear</button>
          <button className="button active" onClick={backspace}>C</button>
          <button className="button active" name="%" onClick={handleClick}>%</button>
          <button className="button active" name="/" onClick={handleClick}>/</button>
          <button className="button" name="7" onClick={handleClick}>7</button>
          <button className="button" name="8" onClick={handleClick}>8</button>
          <button className="button" name="9" onClick={handleClick}>9</button>
          <button className="button active" name="*" onClick={handleClick}>x</button>
          <button className="button" name="4" onClick={handleClick}>4</button>
          <button className="button" name="5" onClick={handleClick}>5</button>
          <button className="button" name="6" onClick={handleClick}>6</button>
          <button className="button active" name="-" onClick={handleClick}>-</button>
          <button className="button" name="1" onClick={handleClick}>1</button>
          <button className="button" name="2" onClick={handleClick}>2</button>
          <button className="button" name="3" onClick={handleClick}>3</button>
          <button className="button active" name="+" onClick={handleClick}>+</button>
          <button className="button" name="0" onClick={handleClick}>0</button>
          <button className="button" name="." onClick={handleClick}>.</button>
          <button id="result" className="button" onClick={calculate}>=</button>
        </div>
        
      </div>
    </>
  );
}

export default App;
