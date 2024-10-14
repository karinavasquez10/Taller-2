import React, { useState } from 'react';
import PaginaInicio from './components/Paginas/PaginaInicio';
import PaginaProductos from './components/Paginas/PaginaProductos';
import PaginaAgregar from './components/Paginas/PaginaAgregar';
import Boton from './components/Atomos/Boton';
import './estilos/estilos.css';

function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');
  const [pokemons, setPokemons] = useState([]);

  const cambiarPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  const agregarPokemon = (nuevoPokemon) => {
    setPokemons([nuevoPokemon, ...pokemons]);
  };

  return (
    <div className="App">
      <nav>
        <Boton texto="Inicio" onClick={() => cambiarPagina('inicio')} />
        <Boton texto="Pokémon" onClick={() => cambiarPagina('productos')} />
        <Boton texto="Agregar" onClick={() => cambiarPagina('agregar')} />
      </nav>

      {paginaActual === 'inicio' && <PaginaInicio />}
      {paginaActual === 'productos' && <PaginaProductos pokemons={pokemons} />}
      {paginaActual === 'agregar' && <PaginaAgregar agregarPokemon={agregarPokemon} />}
    </div>
  );
}

export default App;