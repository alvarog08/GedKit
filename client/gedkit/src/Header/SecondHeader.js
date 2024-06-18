import React from 'react';
import './SecondHeader.css'; // Importa el archivo CSS

const SecondHeader = () => {

  return (

    <section className="second-header">

      <div className="container">
        <div className="flex-container">
        <a href="#" className="link">Clínicas</a>
          <span className="separator">|</span> {/* Separador */}
          <a href="#" className="link">Especialistas</a>
          <span className="separator">|</span> {/* Separador */}
          <a href="#" className="link">Ubicación</a>
        </div>
      </div>

    </section>
  );

};

export default SecondHeader;