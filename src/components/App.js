

import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    const [value,setCount]=useState(0)
    const onClick =()=>{
      setCount(value+1);
    }
    <p>Button clicked {value} times</p>
    <button onclick={onClick}>Click me</button>
    </div>
  )
}

export default App
