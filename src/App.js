//import React from "react";
import { useState } from 'react';
import './App.css';

function App(){

  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");

  function changeName(e){
    setName(e.target.value);
  }
  async function fetchData(e) {
    e.preventDefault();
   console.log(name); 
    setCountries(
      await (
        await fetch('https://api.nationalize.io/?name='+name)
        ).json()
    );
    //console.log(countries.name);
  }

  return <div className="App">
    <form onSubmit={fetchData}>
      <input
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={changeName} />
        <button type="submit">Search</button>
    </form>
    <ul>
    <li> Probable Country match </li>
    <li>
      {countries.country[0].country_id}
    </li>
    </ul>
  </div>
}


export default App;

