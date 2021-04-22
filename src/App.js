import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Card } from './Components/Card';
import { Details } from './Components/Details';
import { getAllPokemon, getPokemon } from './Services/service';
import './App.css';

Modal.setAppElement('#root')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=12';
  const [modalIsOpen,setIsOpen] = useState(false);
  var subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal(){
    setIsOpen(false);
  }

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

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextPage);
    await loadingPokemon(data.results);
    setNextPage(data.next);
    setLoading(false);
  }

  const handlePokemonSelection = (pokemonId) => {
    setSelectedPokemon(pokemonData.filter(pokemon => pokemon.id === pokemonId));
  }

  //TODO delete console
  console.log(pokemonData);
  console.log(selectedPokemon);

  return (
    <>
      <div className='title'>Pokedex</div>
      {loading ? <h1>Loading...</h1> : (
        <>
          <div className="container">
            {pokemonData.map(pokemon => (
              <Card key={pokemon.id} pokemon={pokemon} openModal={openModal} selectPokemon={handlePokemonSelection} />
            ))}
          </div>

          <div className='button__container'>
            <button className='button' onClick={next}>Load more</button>
          </div>

          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >

            <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
            <button onClick={closeModal}>close</button>

            <div className='details'>
              {selectedPokemon.map(pokemon => (
                <Details pokemon={pokemon} key={pokemon.id} />
              ))}
            </div>

          </Modal>

          <footer className='footer'>
            <div className='footer__content'>
              &copy; Pokedex
            </div>
          </footer>
        </>
      )}
    </>
  );
};

export default App;
