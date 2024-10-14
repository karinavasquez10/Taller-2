import React from 'react';
import Titulo from '../Atomos/Titulo';
import ListaMiembros from '../Organismos/ListaMiembros';

const PaginaInicio = () => {
  const miembros = [
    {
      id: 1,
      nombre: 'Karina Audoro Vasquez',
      rol: 'Desarrolladora',
      imagen: '/images/Imagen de WhatsApp 2024-10-14 a las 12.17.23_879c9573.jpg',
      github: 'https://github.com/karinavasquez10',
      linkedin: 'https://www.linkedin.com/in/karina-vasquez-169aa3316?trk=contact-info'
    },
  
  ];

  return (
    <div className="pagina-inicio">
      <Titulo texto="Equipo de Trabajo" nivel={1} />
      <ListaMiembros miembros={miembros} />
    </div>
  );
};

export default PaginaInicio;
