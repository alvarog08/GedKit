import React from 'react';
import './FirstHeader.css'; // Importa el archivo CSS
import logoProvisional from '../assets/Header/logoProvisional.png';
import hamburguerMenu from '../assets/Header/hamburguerMenu.png';
import perfilAnonimo from '../assets/Header/perfilAnonimo.png';

const FirstHeader = () => {
  return (

    <nav className="first-header">

      {/* Aquí puedes colocar el logo y los enlaces de navegación */}
      <div className="logo">
        <img src={logoProvisional} alt="" />
        <span className="site-name">GedKit</span> {/* Agrega el nombre del sitio */}
      </div>

      {/* Aquí colocamos el elemento pulsable */}
      <div className="ofreceServicios">
        <span className="pulsable">Ofrece tus servicios</span> {/* Usamos un span como elemento pulsable */}
      </div>

      {/* Aquí puedes colocar opciones de inicio de sesión y registro */}
      <div className="auth-links">
        <button className="buttonInicial">
            <img src={hamburguerMenu} width={40} height={40} alt=""/>
            <img src={perfilAnonimo} width={40} height={40} alt=""/>
        </button>
      </div>

    </nav>
  );
};

export default FirstHeader;
