import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Artesanos</div>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={open ? "menu open" : "menu"}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Conócenos</a></li>
        <li><a href="#">Suscripciones</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}
