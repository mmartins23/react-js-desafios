import { useState } from "react"

const ToggleMultiple = () => {
  const [isOn, setIsOn] = useState(true);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsOn(!isOn);
    setCount(prevCount => prevCount + 1);
  }
  return (
    <div>
      <p>You have clicked {count} times.</p>
      <button onClick={handleClick}>{isOn ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default ToggleMultiple;