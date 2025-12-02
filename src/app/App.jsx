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
import ProductPage from '../ui/views/ProductPage';
import Dashboard from '../ui/views/Dashboard';
import Home from '../ui/views/Home';
import BuyerPanel from '../ui/views/BuyerPanel';
import Catalogo from '../ui/views/Catalogo';
import Login from '../ui/views/Login';
import ProductCreate from '../ui/views/ProductCreate';
import RegisterArtisan from '../ui/views/RegisterArtisan';
import RegisterType from '../ui/views/RegisterType';
import RegisterBuyer from '../ui/views/RegisterBuyer';
import ArtisanStoriesList from '../ui/views/ArtisanStoriesList';
import ImpactStatistics from '../ui/views/ImpactStatistics';
import UserManagement from '../ui/views/UserManagement';
import ReviewBuyers from '../ui/views/ReviewBuyers';
import ValidateArtisans from '../ui/views/ValidateArtisans';
import ReportsMetrics from '../ui/views/ReportsMetrics';
import PaymentManagement from '../ui/views/PaymentManagement';
import ProductManagement from '../ui/views/ProductManagement';
import MenuGeneral from '../ui/views/MenuGeneral';


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

        
        {/* Ruta Admin: Muestra el Panel creado */}
        <Route path="/comprador" element={<BuyerPanel />} />


        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/cart" element={<ShoppingCart />} />

        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/home" element={<Home />} />

        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/producto" element={<ProductPage />} />

        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/catalogo" element={<Catalogo />} />

        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/dash" element={<Dashboard />} />

        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/login" element={<Login/>} />

       {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/pcreate" element={<ProductCreate/>} />

       {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/registerart" element={<RegisterArtisan/>} />

       {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/registertype" element={<RegisterType/>} />

         {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/registerbuyer" element={<RegisterBuyer/>} />

         {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/listahistorias" element={<ArtisanStoriesList/>} />


        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/impacto" element={<ImpactStatistics />} />


        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/user" element={<UserManagement />} />

        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/review" element={<ReviewBuyers/>} />

        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/validate" element={<ValidateArtisans/>} />

        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/report" element={<ReportsMetrics/>} />

        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/paymanage" element={<PaymentManagement/>} />

        {/* Ruta Carrito: Muestra el Carrito creado */}
        <Route path="/productManage" element={<ProductManagement/>} />

        <Route path="/MenuGeneral" element={<MenuGeneral/>} />



        {/* Ruta para capturar errores 404 (opcional) */}
        <Route path="*" element={<h2 style={{textAlign:'center', margin:'50px'}}>Página no encontrada</h2>} />
      </Routes>

      {/* El Footer siempre visible */}
      <Footer />
    </>
  );
}

export default App;