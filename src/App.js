import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Card } from './Components/Card';
import { Details } from './Components/Details';
import { getAllPokemon, getPokemon } from './Services/service';
import { CSSTransition } from 'react-transition-group';
import { modalStyles } from './Helpers/modalStyles';
import './App.css';

Modal.setAppElement('#root')

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=12';
  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(URL);
      setNextPage(response.next);
      setPrevPage(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }

    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let pokemon = await Promise.all(
      data.map(async pokemon => {
        return await getPokemon(pokemon.url);
      }
    ));

    setPokemonData(pokemon);
  };

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextPage);
    await loadingPokemon(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevPage) return;
    setLoading(true);
    let data = await getAllPokemon(prevPage);
    await loadingPokemon(data.results);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  }

  const handlePokemonSelection = (pokemonId) => {
    setSelectedPokemon(pokemonData.filter(pokemon => pokemon.id === pokemonId));
  }

  return (
    <>
      <header className='header'>Pokedex</header>
      {loading ? (
        <>
          <div className='loader__container'>
            <div className='loader'>
            </div>
          </div>
        </>
      ) : (
        <div className='main'>
          <div className="main__container">
            {pokemonData.map(pokemon => (
              <Card
                key={pokemon.id}
                pokemon={pokemon}
                openModal={openModal}
                selectPokemon={handlePokemonSelection}
              />
            ))}
          </div>

          <div className='main__button__container'>
            <button
              className='main__button main__next__button'
              onClick={next}
            >
              Load more
            </button>
          </div>

          {prevPage && (
            <button
              className='main__button main__prev__button'
              onClick={prev}
            >
              &lt;
            </button>
          )}

          <CSSTransition
            timeout={300}
            classNames='main__dialog'
          >
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={modalStyles}
              contentLabel='Example Modal'
              closeTimeoutMS={500}
            >
              <div>
                {selectedPokemon.map(pokemon => (
                  <Details
                    pokemon={pokemon}
                    key={pokemon.id}
                    closeModal={closeModal}
                  />
                ))}
              </div>
            </Modal>
          </CSSTransition>

          <footer className='footer'>
            <div className='footer__content'>
              &copy; Pokedex
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
