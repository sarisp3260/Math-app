import { useState } from 'react'

const Fibonacci = () => {

  const [fibonacci, setFibonacci] = useState(0);
  const [sumFibonacci, setSumFibonacci] = useState(0);
  const [fibonacciSequence, setFibonacciSequence] = useState([]);

  // Function to calculate Fibonacci sequence and sum
  function sumRangeFibonacci() {
    let sum = 0;
    let sequence = [];
    let a = 0, b = 1;

    for (let i = 0; i < fibonacci; i++) {
      sequence.push(a);
      const temp = a + b;
      a = b;
      b = temp;
      sum += a;
    }
    setSumFibonacci(sum);
    setFibonacciSequence(sequence);
  }

  const handleSumbit = (event) => {
    event.preventDefault();
    sumRangeFibonacci(fibonacci);
    setFibonacci("");
  }

  return (
    <div className='main'>
      <h1>Fibonacci</h1>

      <form>
        <div>
          <label htmlFor="input">Number</label>
          <input type="number" id="input" onChange={(e)=> setFibonacci(e.target.value)} required />
        </div>
        <button type="submit" onClick={handleSumbit}>Calculate</button>
      </form>

      <div>
        <span>Result: {sumFibonacci}</span>
      </div>

      <div>
        <span>Sequence: {fibonacciSequence.join(', ')}</span>
      </div>
    </div>
  )
}

export default Fibonacci