import React from 'react';

const Titulo = ({ texto, nivel = 1 }) => {
  const Etiqueta = `h${nivel}`;
  return <Etiqueta className="titulo">{texto}</Etiqueta>;
};

export default Titulo;