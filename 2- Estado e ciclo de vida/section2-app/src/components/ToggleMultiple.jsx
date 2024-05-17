import { useState } from "react"

const ToggleMultiple = () => {

    const [isOn, setIsOn] = useState(true);
    const [count, setCount] = useState(0);

    const handleCount = () => {
      setIsOn(!isOn);
      setCount(prevCount => prevCount + 1);
    }
    
  return (
    <div>
        <p>You have click {count} times!</p>
        <button onClick={handleCount}>Increase</button>
    </div>
  )
}

export default ToggleMultiple;