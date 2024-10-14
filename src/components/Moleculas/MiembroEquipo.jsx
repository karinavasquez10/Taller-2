import React from 'react';
import Boton from '../Atomos/Boton';

const MiembroEquipo = ({ nombre, rol, imagen, github, linkedin }) => {
  return (
    <div className="miembro-equipo">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{rol}</p>
      <div>
        <Boton texto="GitHub" onClick={() => window.open(github, '_blank')} />
        <Boton texto="LinkedIn" onClick={() => window.open(linkedin, '_blank')} />
      </div>
    </div>
  );
};

export default MiembroEquipo;