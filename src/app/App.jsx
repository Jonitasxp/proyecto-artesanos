import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importación de Componentes UI (Ajusta la cantidad de ../ según donde esté este archivo)
// Si este archivo está en src/App.jsx, usa './ui/...'
// Si está en src/app/routes/App.jsx, usa '../../ui/...'
import Navbar from '../ui/components/Navbar'; 
import Banner from '../ui/components/Banner';
import Footer from '../ui/components/Footer';

// Importación de las Vistas Nuevas
import AdminPanel from '../ui/views/AdminPanel';
import ShoppingCart from '../ui/views/ShoppingCart';

function App() {
  return (
    <>
      {/* El Navbar siempre visible */}
      <Navbar />

      {/* Área de contenido cambiante */}
      <Routes>
        {/* Ruta Home: Muestra el Banner */}
        <Route path="/" element={<Banner />} />

        {/* Ruta Admin: Muestra el Panel creado */}
        <Route path="/admin" element={<AdminPanel />} />

        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/cart" element={<ShoppingCart />} />
        
        {/* Ruta para capturar errores 404 (opcional) */}
        <Route path="*" element={<h2 style={{textAlign:'center', margin:'50px'}}>Página no encontrada</h2>} />
      </Routes>

      {/* El Footer siempre visible */}
      <Footer />
    </>
  );
}

export default App;