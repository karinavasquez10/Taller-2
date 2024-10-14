import React from 'react';
import MiembroEquipo from '../Moleculas/MiembroEquipo';

const ListaMiembros = ({ miembros }) => {
  return (
    <div className="lista-miembros">
      {miembros.map((miembro) => (
        <MiembroEquipo key={miembro.id} {...miembro} />
      ))}
    </div>
  );
};

export default ListaMiembros;
