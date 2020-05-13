import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonSearch from './components/PokemonSearch';
//<PokemonSearch name="John Doe" numberOfPokemons={5}/>
function App() {
  return (
    <div className="App">
      <PokemonSearch name="John Doe" numberOfPokemons={5}/>
    </div>
  );
}

export default App;
