import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {


const [count, setCount] = useState(0);
const [speed, setSpeed] = useState(0);



  return (
    <div className="App">
      <header className="App-header">
        
      <p>Text</p>
      <p>Hodnota počtu: {count} </p>
        <div>
          <button onClick={()=>{setCount(count+1)}}>Přičti</button>
        </div>
       <p>Speed: {speed}</p>
      </header>
    </div>
  );
}

export default App;
