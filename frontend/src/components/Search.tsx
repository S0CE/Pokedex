import React, { useState, Dispatch, SetStateAction } from "react";
import { Pokemon_t } from "./Pokemon";
import './Search.css'

interface SearchProps {
    setPokemon: Dispatch<SetStateAction<Pokemon_t | undefined>>;
    setFind: Dispatch<SetStateAction<boolean>>;
}

export default function Search({setPokemon, setFind}: SearchProps) {
  const [id, setId] = useState('');
  const [err, setErr] = useState('');

  const setPokemonInfo = (data: any) => {
      const newPokemon: Pokemon_t = {
          name: data.name,
          id: data.id,
          types: [...data.types],
          image: data.sprites.front_default
        }
        setPokemon(newPokemon);
    }
    
    const handlePokemonSearch = async (id: any) => {
    try {
        const response = await fetch('/api', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ number: id })
        })
        const data = await response.json();
      if (response.ok) {
        setPokemonInfo(data);
        setFind(true);
        setErr('');
        setId('');
      } else {
        setErr('Not found');
        setFind(false);
      }
    } catch (error) {
      setErr('Empty');
      setFind(false);
    };
  }

  const handleChange = (event: React.ChangeEvent) => {
    setId((event.target as HTMLInputElement).value);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handlePokemonSearch(id);
  };

  return (
    <div className="Search">
      <form className='Search-bar' action='submit' onSubmit={handleSubmit}>
        <input className='Search-input'
               value={id}
               type='text'
               placeholder='Enter the pokemon number'
               onChange={handleChange}>
        </input>
        <button className='Search-button'>Search</button>
      </form>
      <p className="Search-result">{err}</p>
    </div>
  )
}