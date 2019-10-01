import React, { useState, useEffect } from 'react';
import './App.css';
import { getAllStarships } from './services/sw-api'
// import axios from 'axios';
import { Link, Route } from 'react-router-dom'
import Starship from './components/Starship/Starship'

function App() {

  const [starships, setStarships] = useState({results: []})

  useEffect(() => {
    (async () => {
      const starships = await getAllStarships()
      setStarships(starships)
    })()
  }, [])

  return (
    <div className="App">
      <header>STAR WARS STARSHIPS</header>
        <div className="container">
          <Route path="/" exact>
            {starships.results.map((starship, idx) => {
              return (
                  <Link key={starship.name} to={`/${idx}`}>
                    <div className="starship">{starship.name}</div>
                  </Link> 
              )
            })}
          </Route>
          {starships.results.map((props, idx) => {
            return (
              <Route key={idx} path={`/${idx}`} exact>
                <Starship {...props} />
              </Route>
            )
          })}
      </div>
    </div>
  );
}

export default App;
