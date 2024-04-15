import { useState } from "react"

const Counter = () => {
    const [number, setNumber] = useState(0);
  return (
    <div>
        <p>{number}</p>
        <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Increase</button>
    </div>
  )
}

export default Counter;