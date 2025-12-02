import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">Iniciar sesión</h1>

        <div className="login-tabs">
          <button className="login-tab login-tab--active">Iniciar sesión</button>
          <button className="login-tab">Registro</button>
        </div>

        <form className="login-form">
          <div className="login-field">
            <label>Correo electrónico</label>
            <input className="login-input" type="email" />
          </div>

          <div className="login-field">
            <label>Contraseña</label>
            <input className="login-input" type="password" />
          </div>

          <div className="login-forgot">
            ¿Olvidaste tu contraseña?
          </div>

          <button type="button" className="login-button">
            Iniciar sesión
          </button>
        </form>

        <div className="login-bottom-text">
          ¿Nuevo en la plataforma?{" "}
          <span className="login-link">Crear cuenta</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
