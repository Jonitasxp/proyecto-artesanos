import React from "react";
import "./RegisterType.css";

const RegisterType = () => {
  return (
    <div className="rtype-page">
      <div className="rtype-card">
        <h1 className="rtype-title">Registro</h1>
        <p className="rtype-subtitle">
          ¡Comienza tu experiencia! <br />
          Selecciona tu tipo de perfil.
        </p>

        <div className="rtype-options">
          <button className="rtype-option rtype-option--artisan">
            <div className="rtype-icon">🏺</div>
            <span>Soy Artesano</span>
          </button>

          <button className="rtype-option">
            <div className="rtype-icon">👜</div>
            <span>Soy Comprador</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterType;
