import React from 'react';
import { Routes, Route } from 'react-router-dom';

// === Importación de componentes UI ===
import Navbar from '../ui/components/navbar.jsx';
import Footer from '../ui/components/footer.jsx';
import Banner from '../ui/components/banner.jsx';

// === Importación de Vistas ===
import AdminPanel from '../ui/views/AdminPanel.jsx';
import ShoppingCart from '../ui/views/ShoppingCart.jsx';  // Pantalla "Gracias por tu compra"
import Catalogo from '../ui/views/Catalogo.jsx';           // Catálogo de productos
function App() {
  return (
    <>
      {/* Navbar siempre visible */}
      <Navbar />

      {/* Rutas de la aplicación */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<Banner />} />

        {/* Catálogo */}
        <Route path="/catalogo" element={<Catalogo />} />

        {/* Panel Admin */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* Carrito / Pantalla Gracias */}
        <Route path="/gracias" element={<ShoppingCart />} />

        {/* 404 NOT FOUND */}
        <Route
          path="*"
          element={
            <h2
              style={{
                textAlign: 'center',
                margin: '50px',
                fontFamily: 'Inter',
              }}
            >
              Página no encontrada
            </h2>
          }
        />
      </Routes>

      {/* Footer siempre visible */}
      <Footer />
    </>
  );
}

export default App;
