import React, { useEffect, useState } from 'react';
import { Card } from './Components/Card';
import { getAllPokemon, getPokemon } from './Services/service';
import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [loading, setLoading] = useState(true);
  const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=12';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(URL);
      setNextPage(response.next);
      setPrevPage(response.prev);
      await loadingPokemon(response.results);
      setLoading(false);
    }

    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let pokemon = await Promise.all(data.map(async pokemon => {
      return await getPokemon(pokemon.url);
    }));

    setPokemonData(pokemon);
  };

  //TODO delete console
  console.log(pokemonData);

  return (
    <>
      {loading ? <h1>Loading...</h1> : (
        <>
          {}
        </>
      )}
    </>
  );
}

export default App;
