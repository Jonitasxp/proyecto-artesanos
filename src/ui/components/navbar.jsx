import { useState } from "react";
import { Link } from "react-router-dom";
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
        <li>
          <Link to="/home" onClick={() => setOpen(false)}>Inicio</Link>
        </li>
        <li>
          <Link to="/catalogo" onClick={() => setOpen(false)}>Catalogo</Link>
        </li>
        <li>
          <Link to="/admin" onClick={() => setOpen(false)}>Dashboard</Link>
        </li>
        <li>
          <Link to="/Login" onClick={() => setOpen(false)}>Login o Register</Link>
        </li>
      </ul>
    </nav>
  );
}
