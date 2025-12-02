import React from 'react';
import './ValidateArtisans.css';

const ValidateArtisans = () => {
  // Datos simulados (Mock Data)
  const pendingArtisans = [
    {
      id: 1,
      name: "Julia Gómez",
      location: "San Juan Chamula",
      category: "Textiles",
      date: "21 de abril de 2024",
      docs: "INE , foto del taller",
      img: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 2,
      name: "Manuel Hernández",
      location: "Santa Ana del Valle",
      category: "Cerámica",
      date: "20 de abril de 2024",
      docs: "INE , foto del taller",
      img: "https://images.unsplash.com/photo-1588731234159-8b9963143fca?auto=format&fit=crop&q=80&w=200"
    },
    {
      id: 3,
      name: "Rosa Martínez",
      location: "Pátzcuaro",
      category: "Cestería",
      date: "18 de abril de 2024",
      docs: "INE , foto del taller",
      img: "https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <div className="validate-container">
      <h1 className="page-title">Validar Artesanos Nuevos</h1>

      {/* --- FILTROS --- */}
      <div className="filters-row">
        <select className="filter-dropdown">
          <option>Comunidad</option>
          <option>San Juan Chamula</option>
          <option>Pátzcuaro</option>
        </select>
        
        <select className="filter-dropdown">
          <option>Categoría</option>
          <option>Textiles</option>
          <option>Cerámica</option>
        </select>

        <select className="filter-dropdown">
          <option>Fecha de registro</option>
          <option>Más recientes</option>
          <option>Más antiguos</option>
        </select>
      </div>

      {/* --- LISTA DE TARJETAS --- */}
      <div className="artisans-list">
        {pendingArtisans.map((artisan) => (
          <div key={artisan.id} className="artisan-card">
            
            {/* Izquierda: Foto + Estado */}
            <div className="card-left">
              <img src={artisan.img} alt={artisan.name} className="artisan-photo" />
              <span className="status-badge-pending">Pendiente</span>
            </div>

            {/* Centro: Info */}
            <div className="card-info">
              <h2 className="artisan-name">{artisan.name}</h2>
              <p className="artisan-detail">{artisan.location}</p>
              <p className="artisan-detail">{artisan.category}</p>
              <p className="artisan-detail">{artisan.date}</p>
              <p className="artisan-docs">Documentos: {artisan.docs}</p>
            </div>

            {/* Derecha: Botones */}
            <div className="card-actions">
              <button className="btn-approve">Aprobar</button>
              <button className="btn-reject">Rechazar</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ValidateArtisans;
