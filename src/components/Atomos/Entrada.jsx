import React from 'react';

const Entrada = ({ tipo, placeholder, valor, onChange, requerido = false }) => {
  return (
    <input
      type={tipo}
      placeholder={placeholder}
      value={valor}
      onChange={onChange}
      required={requerido}
      className="entrada"
    />
  );
};

export default Entrada;

