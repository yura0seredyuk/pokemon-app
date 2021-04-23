import React from 'react';
import pokemonTypes from '../../Helpers/pokemonTypes';
import './Details.css';

export function Details({ pokemon, closeModal }) {
  return (
    <div className='pokemon__details__container pokemon__details--fadeIn' onClick={closeModal}>

      <div className='pokemon__details__height__container'>
        <span className='pokemon__details__height'>
          <div>
            Height:
          </div>
          <div>
            {`${pokemon.height / 10} m`}
          </div>
        </span>
      </div>

      <div className='pokemon__details__weight__container'>
        <span className='pokemon__details__weight'>
          <div>
            Weight:
          </div>
          <div>
            {`${pokemon.weight / 100} kg`}
          </div>
        </span>
      </div>

      <div className='pokemon__details__image__container'>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt={pokemon.name} className="pokemon__details__image"
        />
      </div>

      <div className='pokemon__details__name'>
        {`${pokemon.name} #${pokemon.id.toString().padStart(3, '0')}`}
      </div>

      <div className='pokemon__details__types'>
        {pokemon.types.map(type => (
          <div
            className='pokemon__details__type'
            key={type.slot}
            style={{ backgroundColor: pokemonTypes[type.type.name] }}
          >
            {type.type.name}
          </div>
        ))}
      </div>

      <div className="pokemon__details__stats">
        {pokemon.stats.map(stat => (
          <div className='pokemon__details__stat__container' key={stat.stat.name}>
            <div className="pokemon__details__stat-name">
              {stat.stat.name}
            </div>
            <div className='pokemon__details__base-stat'>
              <progress id='file' max='150' value={stat.base_stat}></progress>
              <span className='pokemon__details__base-stat__value'>{stat.base_stat}</span>
            </div>
          </div>
        ))}
      </div>

      <div className='pokemon__details__moves'>
        {`Total moves: ${pokemon.moves.length}`}
      </div>
    </div>
  );
}

