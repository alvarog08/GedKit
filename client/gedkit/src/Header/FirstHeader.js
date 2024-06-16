import React from 'react';
import './FirstHeader.css'; // Importa el archivo CSS
import logoProvisional from '../assets/logoProvisional.png';

const FirstHeader = () => {
  return (

    <nav className="first-header">

      {/* Aquí puedes colocar el logo y los enlaces de navegación */}
      <div className="logo">
        <img src={logoProvisional} alt="" />
        <span className="site-name">GedKit</span> {/* Agrega el nombre del sitio */}
      </div>

      <ul className="nav-links">
        <li><a href="#">Alojamientos</a></li>
        <li><a href="#">Experiencias</a></li>
        <li><a href="#">Lugares</a></li>
      </ul>

      {/* Aquí puedes colocar opciones de inicio de sesión y registro */}
      <div className="auth-links">
        <a href="#">Iniciar sesión</a>
        <a href="#">Registrarse</a>
      </div>

    </nav>
  );
};

export default FirstHeader;
