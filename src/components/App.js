

import React from "react";
import './../styles/App.css';

const App = () => {
  const [count,setCount]=useState(0);
    // const onClick=()=>{
    //   setCount(value+1);
    // }
  return (
    <div>
        {/* Do not remove the main div */}
    
    
    <p>Button clicked {count} times</p>
    <button oonClick={()=>setCount(count+1)}>Click me</button>
    </div>
  )
}

export default App
