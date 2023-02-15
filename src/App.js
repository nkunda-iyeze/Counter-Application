
import './App.css';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
      <h3> Simple Counter App</h3>
      <ButtonSate/>
    </div>
  );
}

function ButtonSate() {
  const [count,setCount] = useState(0);
  
  const incrementCount = () => {
    setCount(count + 5);
  }
  const decrementCount = () => {
    setCount(count - 5);
  }
  const resetCount = () => {
    setCount(0);
  }
  return (
    
    <div className="Container">
       <Data count={count}/>
       <div>
        <button onClick={resetCount} className="Reset">Reset</button>
        <button onClick={incrementCount} className="Increment">Increment</button>
        <button onClick={decrementCount} className="Decrement">Decrement</button>
      </div>

      </div>
  );
}

function Data(props) {



  return (
    <div>
     
      <div className="Container">
      <p className="Counter"> <span>Counter - {props.count }</span></p>
      </div>
    </div>
  );
}
export default App;
