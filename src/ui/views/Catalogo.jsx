import React from "react";
import "./Catalogo.css";

const products = [
  { id: 1, title: "Textil tejido", author: "Ana Lopez", price: 350, image: "https://images.pexels.com/photos/5942394/pexels-photo-5942394.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 2, title: "Bol de cerámica", author: "Francisco Gómez", price: 120, image: "https://images.pexels.com/photos/4109992/pexels-photo-4109992.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 3, title: "Bolsa tejida", author: "Maria Herrera", price: 250, image: "https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 4, title: "Taza de barro", author: "Juan Martinez", price: 50, image: "https://images.pexels.com/photos/1416373/pexels-photo-1416373.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 5, title: "Tapiz artesanal", author: "Rosa Chávez", price: 440, image: "https://images.pexels.com/photos/5942324/pexels-photo-5942324.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 6, title: "Collar de cuentas", author: "Lúz Aguilar", price: 80, image: "https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 7, title: "Cesta artesanal", author: "Antonia Ruiz", price: 150, image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { id: 8, title: "Aretes de plata", author: "Carios Núñez", price: 180, image: "https://images.pexels.com/photos/1158438/pexels-photo-1158438.jpeg?auto=compress&cs=tinysrgb&w=800" },
];

function Catalogo() {
  return (
    <section className="catalog-page">
      <div className="catalog-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p className="author">{p.author}</p>
            <p className="price">${p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalogo;
