import React from 'react';
import './Card.css'

export function Card({ pokemon }) {
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
          <div className='card__type' key={type.slot}>
            {type.type.name}
          </div>
        ))}
      </div>
    </div>
  );
}

