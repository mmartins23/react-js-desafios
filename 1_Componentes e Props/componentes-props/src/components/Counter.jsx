import { useState } from "react"

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <p>{number}</p>
            <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Increment</button>
        </div>
    )
}

export default Counter