
import './App.css';
import {useState} from "react";
function App() {
  const[count,setCount]=useState(0);
  function decHandler(){
    setCount(count-1);
  }
  function incHandler(){
    setCount(count+1);
  }
  
  function resetHandler(){
    setCount(0);
  }
  return (
    <div className="Wrapper">
     <div>Increament && Decrement</div>
     <div className="container">
      <button className="dec" onClick={decHandler}>
      -
      </button>
      <div className="text">
     {count}
      </div>
      <button className="inc" onClick={incHandler}>+</button>
     </div>
     <button className="reset"onClick={resetHandler}>
      Reset
     </button>
    </div>
  );
}

export default App;
