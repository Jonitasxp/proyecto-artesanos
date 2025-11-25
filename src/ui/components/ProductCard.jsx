import React from 'react';
import './ProductCard.css';

function ProductCard({ title, author, price, image }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          src={image}
          alt={title}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h2 className="product-title">{title}</h2>
        <p className="product-author">{author}</p>
        <p className="product-price">${price}</p>
      </div>
    </article>
  );
}

export default ProductCard;
