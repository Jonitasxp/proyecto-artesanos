import React from "react";
import "./RegisterArtisan.css";

const RegisterArtisan = () => {
  return (
    <div className="rart-page">
      <div className="rart-card">
        <div className="rart-header">
          <h1 className="rart-title">Regístrate como artesano</h1>
          <div className="rart-icon">🏺</div>
        </div>

        <form className="rart-form">
          <div className="rart-row">
            <div className="rart-field">
              <label>CURP o RFC</label>
              <input className="rart-input" />
            </div>
            <div className="rart-field">
              <label>Nombre completo</label>
              <input className="rart-input" />
            </div>
          </div>

          <div className="rart-row">
            <div className="rart-field">
              <label>Comunidad</label>
              <input className="rart-input" />
            </div>
            <div className="rart-field">
              <label>Tipo de artesanía</label>
              <input className="rart-input" />
            </div>
          </div>

          <div className="rart-row">
            <div className="rart-field">
              <label>Correo electrónico</label>
              <input className="rart-input" type="email" />
            </div>
            <div className="rart-field">
              <label>Contraseña</label>
              <input className="rart-input" type="password" />
            </div>
          </div>

          <div className="rart-field">
            <label>Foto (opcional)</label>
            <button type="button" className="rart-upload-btn">
              📎 Subir foto
            </button>
          </div>

          <button type="button" className="rart-submit">
            Regístrate
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterArtisan;
