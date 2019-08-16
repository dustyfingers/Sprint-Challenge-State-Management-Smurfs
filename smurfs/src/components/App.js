import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import SmurfContext from "../contexts/SmurfContext";
import NewSmurfForm from './NewSmurfForm';
import SmurfsDashboard from './SmurfsDashboard';


const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const { data } = await axios.get('http://localhost:3333/smurfs');
      setSmurfs([...data]);
    };
    fetchAPI();
  }, []);

  console.log(smurfs);
  return (
    <SmurfContext.Provider value={smurfs}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={SmurfsDashboard} />
          <Route exact path="/new-smurf" component={NewSmurfForm} />
        </Switch>
      </div>
    </SmurfContext.Provider >
  );
}

export default App;
