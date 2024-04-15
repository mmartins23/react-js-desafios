import { useState } from "react"

const Toggle = () => {

    const [isOn, setIsOn] = useState(true);
    
  return (
    <div>
        <button onClick={() => setIsOn(!isOn)}>{isOn ? 'ON': 'OFF'}</button>
    </div>
  )
}

export default Toggle