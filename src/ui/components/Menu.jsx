import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="menu-container">
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰ Menú
      </button>

      {open && (
        <div className="menu-dropdown">
          <Link to="/">Inicio</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/carrito">Carrito</Link>
          <Link to="/dashboard">Admin</Link>
        </div>
      )}
    </nav>
  );
}
