import React, { useState } from 'react';
import './App.css';
import Pokemon, {Pokemon_t} from './components/Pokemon';
import Search from './components/Search';

function App() {
  const [find, setFind] = useState(false);
  const [pokemon, setPokemon] = useState<Pokemon_t>();
  
  return (
    <div className="App">
      <h1 className='App-title'>My Pokedex</h1>
      <Search setPokemon={setPokemon} setFind={setFind}/>
      {find === true && pokemon &&
      <Pokemon pokemonInfo={pokemon}/>}
    </div>
  );
}

export default App;

