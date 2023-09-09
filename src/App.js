import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superpower, setSuperpower] = useState("");
  const [displayCharater, setDisplayCharater] = useState(false);

  return (
    <div className="App">
      <h1>Build a hero</h1>
      <div>
      <label>Name: </label>
      <input
        type="text"
        style={{ margin: 10 }}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <label>Age: </label>
      <input type="number" style={{ margin: 10 }}  onChange={(event) => {
          setAge(event.target.value);
        }}></input>
      <label>Height: </label>
      <input type="number" style={{ margin: 10 }}  onChange={(event) => {
          setHeight(event.target.value);
        }}></input>
      <label>Superpower: </label>
      <input type="text" style={{ margin: 10 }}  onChange={(event) => {
          setSuperpower(event.target.value);
        }}></input>
  
    </div>
        <button onClick={()=>{setDisplayCharater(true)}}>Display Character</button>
            <div><h1>SuperHero Info</h1>
            
            {displayCharater && (
                <ul>

                <li>
                Name : {name}
                </li>
                <li>
                Age: {age}
                </li>
                <li>
                Height: {height}
                </li>
                <li>
                SuperPower: {superpower}
                </li>


                </ul>




            )}
            
            
            
            
            </div>
    </div>
  );
}

export default App;
