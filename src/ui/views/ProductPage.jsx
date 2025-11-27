import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
// IMPORTANTE: Aquí importamos los estilos
import './ProductPage.css';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const relatedProducts = [
    { id: 1, name: "Tapiz de Pared", price: 75, img: "https://teterete.com/mx/wp-content/uploads/2023/07/tapiz-artesanal.jpeg" },
    { id: 2, name: "Cojín Bordado", price: 39, img: "https://molycata.com/wp-content/uploads/Tenango_1b_900px.jpg" },
    { id: 3, name: "Cesta de Mimbre", price: 43, img: "https://m.media-amazon.com/images/I/71YVZM4PxaL.jpg" },
    { id: 4, name: "Tote Bag Mini", price: 750, img: "https://www.bolsaartesanal.mx/cdn/shop/files/tote-mediano-piel-broche-274926.jpg?v=1745297425&width=1445" },
  ];

  return (
    <div className="product-page-container">
      
      <main className="main-content">
        <p style={{color: '#888', marginBottom: '20px'}}>Lo que viste recientemente</p>

        {/* --- Grid Principal --- */}
        <div className="product-grid">
          
          {/* Imagen */}
          <div className="product-image-container">
            <img 
              src="https://http2.mlstatic.com/D_Q_NP_2X_732452-MLM96921026676_112025-T-louis-vuitton-onthego-bolso-bandolera-regalo.webp" 
              alt="Tote Bag Tejido" 
            />
          </div>

          {/* Detalles */}
          <div className="product-info">
            <h1 className="product-title">Tote Bag Tejido a Mano</h1>
            <p className="product-price">$750</p>

            <div className="quantity-selector">
              <label style={{display:'block', marginBottom:'5px', fontWeight:'bold'}}>Cantidad</label>
              <div style={{position: 'relative', width: 'fit-content'}}>
                <select 
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="quantity-select"
                >
                  {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}</option>)}
                </select>
              </div>
            </div>

            <button className="add-to-cart-btn">
              Añadir al carrito
            </button>

            <p style={{fontStyle: 'italic', color: '#666', marginBottom: '2rem'}}>Hecho a mano en México</p>

            {/* Historia / Artesano */}
            <div className="artisan-section">
              <h3 style={{fontSize: '1.5rem', marginBottom: '1rem'}}>Descripción</h3>
              <div className="artisan-card">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" 
                  alt="Elena" 
                  className="artisan-img"
                />
                <div>
                  <h4 style={{fontSize: '1.2rem', margin: '0'}}>Elena</h4>
                  <p style={{fontSize: '0.8rem', textTransform: 'uppercase', color: '#666', margin: '5px 0'}}>Artesana Zapoteca • Oaxaca</p>
                  <p style={{lineHeight: '1.5'}}>
                    Es una artesana con gran experiencia. Lleva tejiendo fibras naturales por más de veinte años.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Historia Extendida --- */}
        <div style={{marginBottom: '4rem', maxWidth: '800px'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '1rem'}}>Historia del Artesano</h2>
          <p style={{lineHeight: '1.6', fontSize: '1.1rem'}}>
            Este Tote Bag es tejido a mano con fibras naturales y teñido con tintes orgánicos. Es un legado durable y espacioso. Cada pieza cuenta una historia única de la comunidad y apoya la economía local.
          </p>
        </div>

        {/* --- Productos Relacionados --- */}
        <section className="related-section">
          <h2 style={{fontSize: '2rem', marginBottom: '2rem'}}>Productos Relacionados</h2>
          <div className="related-grid">
            {relatedProducts.map((product) => (
              <div key={product.id} className="related-card">
                <img src={product.img} alt={product.name} />
                <h3 style={{fontSize: '1.1rem', margin: '10px 0 5px 0'}}>{product.name}</h3>
                <p style={{color: '#5C4A3F'}}>${product.price}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default ProductPage;