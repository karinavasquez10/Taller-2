import React, { useState } from 'react';
import Titulo from '../Atomos/Titulo';
import Entrada from '../Atomos/Entrada';
import Boton from '../Atomos/Boton';

const PaginaAgregar = ({ agregarPokemon }) => {
  const [nombre, setNombre] = useState('');
  const [imagen, setImagen] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoPokemon = {
      name: nombre,
      sprites: { front_default: imagen },
      types: [{ type: { name: tipo } }]
    };
    agregarPokemon(nuevoPokemon);
    setNombre('');
    setImagen('');
    setTipo('');
  };

  return (
    <div className="pagina-agregar">
      <Titulo texto="Agregar un nuevo Pokémon" nivel={1} />
      <form onSubmit={handleSubmit}>
        <Entrada
          tipo="text"
          placeholder="Nombre del Pokémon"
          valor={nombre}
          onChange={(e) => setNombre(e.target.value)}
          requerido={true}
        />
        <Entrada
          tipo="url"
          placeholder="URL de la imagen"
          valor={imagen}
          onChange={(e) => setImagen(e.target.value)}
          requerido={true}
        />
        <Entrada
          tipo="text"
          placeholder="Tipo de Pokémon"
          valor={tipo}
          onChange={(e) => setTipo(e.target.value)}
          requerido={true}
        />
        <Boton texto="Agregar Pokémon" tipo="submit" />
      </form>
    </div>
  );
};

export default PaginaAgregar;