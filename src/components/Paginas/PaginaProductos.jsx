import React, { useEffect, useState } from 'react';
import Titulo from '../Atomos/Titulo';
import ListaTarjetas from '../Organismos/ListaTajetas';

const PaginaProductos = ({ pokemons }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      if (pokemons.length === 0) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const data = await response.json();
        const detailedData = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );
        setPokemonData(detailedData);
      } else {
        setPokemonData(pokemons);
      }
    };

    fetchPokemons();
  }, [pokemons]);

  return (
    <div className="pagina-productos">
      <Titulo texto="Pokémon" nivel={1} />
      <ListaTarjetas pokemons={pokemonData} />
    </div>
  );
};

export default PaginaProductos;