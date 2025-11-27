import React from 'react';
import { Menu, Plus, ExternalLink } from 'lucide-react';
import './Home.css';

const Home = () => {
  const products = [
    { id: 1, name: "Bolso de hombro tejido a mano", price: 50, img: "https://i5.walmartimages.com/asr/6af1b162-f6dc-4bbf-b1df-0acfc8388d5a.3d0a11aee25b7fd718fe0d2b844a8283.jpeg" },
    { id: 2, name: "Jarrón de barro", price: 75, img: "https://casanochipa.com/cdn/shop/files/24.png?v=1738609861&width=533" },
    { id: 3, name: "Camino de mesa artesanal", price: 40, img: "https://m.media-amazon.com/images/I/81J0VQkMyLL._AC_UF894,1000_QL80_.jpg" },
  ];

  return (
    <div className="home-container">
      
      {/* Header */}
      <header className="home-header">
        <h1>Bienvenido, Jhon Cena</h1>
        <button className="menu-btn-mobile">
          <Menu size={24} />
        </button>
      </header>

      {/* Sección de Productos Destacados */}
      <section className="home-products">
        <h2>Productos Destacados</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} className="product-thumb" />
              <h3>{product.name}</h3>
              <p>${product.price},00</p>
            </div>
          ))}
        </div>
        <button className="add-btn">
          <Plus size={18} /> Agregar Producto
        </button>
      </section>

      {/* Sección de Estadísticas Rápidas */}
      <section className="home-stats">
        <div className="stat-card">
          <h3>Vistas</h3>
          <p>450</p>
        </div>
        <div className="stat-card">
          <h3>Ventas</h3>
          <p>120</p>
        </div>
        <div className="stat-card">
          <h3>Traducción</h3>
          <p>Google Translate <ExternalLink size={16} /></p>
        </div>
      </section>

    </div>
  );
};

export default Home;
