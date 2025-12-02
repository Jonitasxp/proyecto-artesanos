import React from "react";
import "./RegisterBuyer.css";

const RegisterBuyer = () => {
  return (
    <div className="rbuy-page">
      <div className="rbuy-card">
        <div className="rbuy-header">
          <h1 className="rbuy-title">Regístrate como comprador</h1>
          <div className="rbuy-icon">🧺</div>
        </div>

        <form className="rbuy-form">
          <div className="rbuy-field">
            <label>CURP o RFC (opcional)</label>
            <input className="rbuy-input" />
          </div>
          <div className="rbuy-field">
            <label>Nombre completo</label>
            <input className="rbuy-input" />
          </div>
          <div className="rbuy-field">
            <label>Correo electrónico</label>
            <input className="rbuy-input" type="email" />
          </div>

          <button type="button" className="rbuy-submit">
            Regístrate
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterBuyer;
