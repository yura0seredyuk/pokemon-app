import React from 'react';
import pokemonTypes from '../../Helpers/pokemonTypes';

export function Details({ pokemon }) {
  return (
    <div className='pokemon__details__container'>
      <div className="pokemon__details__image__container">
        <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={pokemon.name} className="pokemon__details__image"/>
      </div>

      <div className="pokemon__details__name">
        {pokemon.name}
      </div>

      <div className="pokemon__details__types">
        {pokemon.types.map(type => (
          <div className='pokemon__details__type' key={type.slot} style={{ backgroundColor: pokemonTypes[type.type.name] }}>
            {type.type.name}
          </div>
        ))}
      </div>
    </div>
  );
}

