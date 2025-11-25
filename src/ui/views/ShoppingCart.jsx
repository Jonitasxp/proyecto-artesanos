import React, { useState } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

const ShoppingCart = () => {
    // Datos simulados
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Handwoven Tote Bag', artisan: 'Artesano Juan', price: 50.00, qty: 1, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80' },
        { id: 2, name: 'Ceramic Vase', artisan: 'Artesana Maria', price: 55.00, qty: 1, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=300&q=80' }
    ]);

    const displaySubtotal = 115.00; // Valor fijo para coincidir con diseño

    return (
        <div className="shopping-cart-layout">
            <div className="shopcart-header">
                <div className="Literata-title" style={{color: '#7B442A', fontWeight: 'bold', fontSize: '1.2em'}}>ShopCart</div>
                <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <span style={{cursor: 'pointer'}}>Categories</span>
                    <span style={{cursor: 'pointer'}}>Lo que viste recientemente</span>
                    <span style={{cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px'}}>
                        Cart <RiShoppingCartLine size={20}/>
                    </span>
                </div>
            </div>
            
            <h1 className="Literata-title" style={{ marginTop: '30px' }}>Shopping Cart</h1>

            <div className="cart-content-grid">
                {/* Lista de productos */}
                <div>
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-img" />
                            <div style={{flex: 1}}>
                                <h4>{item.name}</h4>
                                <p style={{color: '#666', fontSize: '0.9em', margin: '5px 0'}}>{item.artisan}</p>
                                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px', alignItems: 'center'}}>
                                    <span style={{fontWeight: '600', fontSize: '1.1em'}}>${item.price.toFixed(2)}</span>
                                    <div style={{display: 'flex', alignItems: 'center'}}>
                                        <div className="qty-control">
                                            <button>-</button>
                                            <span style={{padding: '0 10px'}}>{item.qty}</span>
                                            <button>+</button>
                                        </div>
                                        <span style={{color: '#7B442A', cursor: 'pointer', fontSize: '0.9em', textDecoration: 'underline'}}>Remove</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Total y Vistos Recientemente (Texto) */}
                     <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '1.2em', fontWeight: 'bold'}}>
                        <span>Total</span>
                        <span>${displaySubtotal.toFixed(2)}</span>
                    </div>
                </div>

                {/* Resumen de Orden */}
                <div>
                    <div className="order-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${displaySubtotal.toFixed(2)}</span>
                        </div>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;