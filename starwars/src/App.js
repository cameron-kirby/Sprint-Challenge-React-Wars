import React, { useState, useEffect } from 'react';
import axios from 'axios'// Import Axios
import styled from 'styled-components'; // Import styled-components

import Character from './components/Character'

import './App.css'

const ContainerStyle = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  let [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    // get the first set of characters
    axios.get(`https://swapi.py4e.com/api/people/`)
      .then(response => {
          console.log(response.data.results)
          setCharacters(response.data.results)
      })
      .catch(error => {})
  }, []);

  console.log(characters)

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <ContainerStyle>
        {
          characters.map((character, index) => {
            return <Character key={index} character={character} />
          })
        }
      </ContainerStyle>
    </div>
  );
}

export default App;
