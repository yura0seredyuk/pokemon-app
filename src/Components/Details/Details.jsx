import React from 'react';
import pokemonTypes from '../../Helpers/pokemonTypes';
import './Details.css';

export function Details({ pokemon, closeModal }) {
  return (
    <div className='details__container' onClick={closeModal}>

      <div className='details__height__container'>
        <span className='details__height'>
          <div>
            Height:
          </div>
          <div>
            {`${pokemon.height / 10} m`}
          </div>
        </span>
      </div>

      <div className='details__weight__container'>
        <span className='details__weight'>
          <div>
            Weight:
          </div>
          <div>
            {`${pokemon.weight / 100} kg`}
          </div>
        </span>
      </div>

      <div className='details__image__container'>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt={pokemon.name} className="details__image"
        />
      </div>

      <div className='details__name'>
        {`${pokemon.name} #${pokemon.id.toString().padStart(3, '0')}`}
      </div>

      <div className='details__types'>
        {pokemon.types.map(type => (
          <div
            className='details__type'
            key={type.slot}
            style={{ backgroundColor: pokemonTypes[type.type.name] }}
          >
            {type.type.name}
          </div>
        ))}
      </div>

      <div className='details__stats'>
        {pokemon.stats.map(stat => (
          <div className='details__stat__container' key={stat.stat.name}>
            <div className='details__stat-name'>
              {stat.stat.name}
            </div>
            <div className='details__base-stat'>
              <progress
                max='150'
                id='progressBar'
                value={stat.base_stat}>{stat.base_stat}
              </progress>
              <span className='details__base-stat__value'>
                {stat.base_stat}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className='details__moves'>
        {`Total moves: ${pokemon.moves.length}`}
      </div>
    </div>
  );
}

