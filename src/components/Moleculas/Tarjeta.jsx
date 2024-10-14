import React from 'react';

const Tarjeta = ({ pokemon }) => {
  return (
    <div className="tarjeta">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p>Tipo: {pokemon.types[0].type.name}</p>
    </div>
  );
};

export default Tarjeta;