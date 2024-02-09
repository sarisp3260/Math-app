import { useState } from 'react'
import { GiRaiseZombie } from "react-icons/gi";
import { FaBone } from "react-icons/fa";
import './styles/App.sass'

function App() {

  const [factorial, setFactorial] = useState(0);
  const [sumFatorial, setSumFatorial] = useState(0);

  //sum of a range on factorial
  function sumRangeFactorial() {
    let sum = 1;
    for (let i = 1; i <= factorial; i++) {
      sum *= i;
    }
    setSumFatorial(sum);
  }

  const handleSumbit = (event) => {
    event.preventDefault();
    sumRangeFactorial(factorial);

    setFactorial("");
  }

  return (
    <>
      <div className="App">
        <div className="title-container">
          <div className="zombie">
          </div>
          <span className="title-app">Math Zomb</span>
          <div className="zombie" id="bone">
            <GiRaiseZombie />
            <FaBone />
          </div>
          <span className="title-app">e</span>
          </div>

          <form className="form-container" >
            <div className="form-group">
              <label htmlFor="input">Factorial</label>
              <input type="number" id="input" value={factorial} onChange={(e) => setFactorial(e.target.value)} required/>
            </div>
            <button type="submit" onClick={handleSumbit}>Calculate</button>
          </form>

          <div className="result-container">
            <span className="result">Result: {sumFatorial}</span>
          </div>
      </div>
    </>
  )
}

export default App
