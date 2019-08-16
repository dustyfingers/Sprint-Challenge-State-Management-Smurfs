import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

// import { state } from '../data';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const res = await axios.get('http://localhost:3333/smurfs');
      console.log(res.data)
        ; setSmurfs(res.data);
    };
    fetchAPI();
  }, []);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {smurfs.map(({ name, age, height, id }) => (
        <div key={id}>
          <p>{name}</p>
          <p>{age}</p>
          <p>{height}</p>
        </div>
      ))}
      <div>Have fun!</div>
    </div>
  );
}

export default App;
