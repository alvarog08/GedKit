import React from 'react';
import { FaUserMd, FaHospital, FaAppleAlt, FaFlag, FaCommentMedical, FaBrain } from 'react-icons/fa';
import './ThirdHeader.css'; // Importa el archivo CSS

const ThirdHeader = () => {

  return (

    <section className="third-header">
      <div className="content">

        <div className="services">

          <div className="service">
            <div className="icon-bg">
              <FaBrain className="icon" />
            </div>
            <div className="service-title">Psicólogo</div>
          </div>

          <div className="service">
            <div className="icon-bg">
              <FaUserMd className="icon" />
            </div>
            <div className="service-title">Terapeuta</div>
          </div>

          <div className="service">
            <div className="icon-bg">
              <FaCommentMedical className="icon" />
            </div>
            <div className="service-title">Logopeda</div>
          </div>

          <div className="service">
            <div className="icon-bg">
              <FaHospital className="icon" />
            </div>
            <div className="service-title">Enfermero</div>
          </div>

          <div className="service">
            <div className="icon-bg">
              <FaAppleAlt className="icon" />
            </div>
            <div className="service-title">Nutricionista</div>
          </div>

          <div className="service">
            <div className="icon-bg">
              <FaFlag className="icon" />
            </div>
            <div className="service-title">Fisioterapeuta</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ThirdHeader;