import React from "react";
import { useNavigate } from "react-router-dom";
import "./MenuGeneral.css"; // opcional

const MenuGeneral = () => {
  const navigate = useNavigate();

  const rutas = [
    { nombre: "Inicio", ruta: "/" },    
    { nombre: "Admin Panel", ruta: "/admin" },
    { nombre: "Comprador", ruta: "/comprador" },
    { nombre: "Carrito", ruta: "/cart" },
    { nombre: "Home", ruta: "/home" },
    { nombre: "Producto", ruta: "/producto" },
    { nombre: "Catálogo", ruta: "/catalogo" },
    { nombre: "Dashboard", ruta: "/dash" },
    { nombre: "Login", ruta: "/login" },
    { nombre: "Crear Producto", ruta: "/pcreate" },
    { nombre: "Registrar Artesano", ruta: "/registerart" },
    { nombre: "Registrar Tipo Artesanía", ruta: "/registertype" },
    { nombre: "Registrar Comprador", ruta: "/registerbuyer" },
    { nombre: "Historias Artesanos", ruta: "/listahistorias" },
    { nombre: "Impacto", ruta: "/impacto" },
    { nombre: "Usuarios", ruta: "/user" },
    { nombre: "Revisar Compradores", ruta: "/review" },
    { nombre: "Validar Artesanos", ruta: "/validate" },
    { nombre: "Reportes / Métricas", ruta: "/report" },
    { nombre: "Gestión Pagos", ruta: "/paymanage" },
    { nombre: "Gestión Productos", ruta: "/productManage" },
  ];

  return (
    <div className="menu-container">
      <h1>Menú General</h1>

      <div className="menu-grid">
        {rutas.map((item, index) => (
          <button 
            key={index}
            className="menu-btn"
            onClick={() => navigate(item.ruta)}
          >
            {item.nombre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuGeneral;
