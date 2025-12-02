// src/ui/views/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const categorias = [
  { id: 1, name: "Textiles", image: "https://images.pexels.com/photos/5942394/pexels-photo-5942394.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 2, name: "Cerámica", image: "https://images.pexels.com/photos/4109992/pexels-photo-4109992.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 3, name: "Joyas", image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 4, name: "Decoración", image: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

const productosDestacados = [
  { id: 1, title: "Textil tejido", price: 350, image: "https://images.pexels.com/photos/5942394/pexels-photo-5942394.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 2, title: "Bol de cerámica", price: 120, image: "https://images.pexels.com/photos/4109992/pexels-photo-4109992.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 3, title: "Collar de cuentas", price: 80, image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

export default function Home() {
  return (
    <div className="home-container">
      {/* HERO / BANNER */}
      <section className="hero">
        <h1>Bienvenido a Proyecto Artesanos</h1>
        <p>Descubre productos únicos hechos a mano por artesanos locales</p>
        <Link to="/catalogo" className="btn">Ver Catálogo</Link>
      </section>

      {/* CATEGORÍAS */}
      <section className="categorias">
        <h2>Categorías</h2>
        <div className="categorias-grid">
          {categorias.map(cat => (
            <div key={cat.id} className="categoria-card">
              <img src={cat.image} alt={cat.name} />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className="destacados">
        <h2>Productos Destacados</h2>
        <div className="productos-grid">
          {productosDestacados.map(prod => (
            <div key={prod.id} className="producto-card">
              <img src={prod.image} alt={prod.title} />
              <h3>{prod.title}</h3>
              <p>${prod.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONÓCENOS */}
      <section className="conocenos">
        <div className="conocenos-text">
          <h2>Conócenos</h2>
          <p>
            Proyecto Artesanos nace para conectar artesanos locales con amantes de lo hecho a mano.
            Apoyamos la tradición y creatividad en cada pieza. Cada compra ayuda a mantener viva
            la cultura artesanal. Nuestra misión es empoderar a los artesanos y dar visibilidad a sus creaciones,
            ofreciendo una experiencia única a quienes buscan productos auténticos y con historia.
          </p>
          <p>
            Cada sección de nuestra tienda está cuidadosamente seleccionada para garantizar calidad y originalidad.
            Creemos en un comercio justo y sostenible, fomentando prácticas responsables con la comunidad y el medio ambiente.
          </p>
        </div>
        <div className="conocenos-img">
          {/* Aquí pondrás tu imagen */}
        </div>
      </section>
    </div>
  );
}
