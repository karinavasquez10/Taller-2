import React from 'react';
import Tarjeta from '../Moleculas/Tarjeta';

const ListaTarjetas = ({ pokemons }) => {
  return (
    <div className="lista-tarjetas">
      {pokemons.map((pokemon) => (
        <Tarjeta key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default ListaTarjetas;