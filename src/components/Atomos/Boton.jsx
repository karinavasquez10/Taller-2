import React from 'react';

const Boton = ({ texto, onClick, tipo = 'button' }) => {
  return (
    <button type={tipo} onClick={onClick} className="boton">
      {texto}
    </button>
  );
};

export default Boton;
