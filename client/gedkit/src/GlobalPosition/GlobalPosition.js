import React from 'react';
import './GlobalPosition.css'; // Importa el archivo CSS (estilo)
import FirstHeader from '../Header/FirstHeader';
import SecondHeader from '../Header/SecondHeader';

const GlobalPosition = () => {
  return (

    <div> {/* Añade un contenedor padre */}

      <FirstHeader /> {/* Renderiza el primer header componente */}
      <SecondHeader /> {/* Renderiza el segundo header componente */}
    </div>

  );
};

export default GlobalPosition;
