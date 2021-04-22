import React from 'react';
import './Card.css';
import pokemonTypes from '../../Helpers/pokemonTypes';

export function Card({ pokemon, selectPokemon,openModal }) {
  return (
    <div className='card'>
      <div className='card__image__container'>
        <img className='card__image' src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      </div>
      <div className='card__name'>
        {pokemon.name}
      </div>
      <div className='card__types'>
        {pokemon.types.map(type => (
          <div className='card__type' key={type.slot} style={{ backgroundColor: pokemonTypes[type.type.name] }}>
            {type.type.name}
          </div>
        ))}
      </div>
      <button type='button' onClick={() => {
        selectPokemon(pokemon.id);
        openModal();
      }}>Info</button>
    </div>
  );
}

