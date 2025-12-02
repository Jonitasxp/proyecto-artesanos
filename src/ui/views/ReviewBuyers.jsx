import React from 'react';
import './ReviewBuyers.css';

const ReviewBuyers = () => {
  // Datos simulados idénticos a la imagen
  const buyers = [
    { id: 1, name: "Julía Pérez", email: "j.perez@example.com", role: "Comprador", status: "Activo", date: "5 mar 2024" },
    { id: 2, name: "Natalia Rodríguez", email: "n.rodriguez@example.com", role: "Comprador", status: "Suspendido", date: "12 feb 2024" },
    { id: 3, name: "Laura Gómez", email: "l.gomez@example.com", role: "Comprador", status: "Activo", date: "20 ene 2024" },
    { id: 4, name: "María Ruiz", email: "m.ruiz@example.com", role: "Comprador", status: "Activo", date: "8 ene 2024" },
    { id: 5, name: "Antonio Sánchez", email: "a.sanchez@example.cc", role: "Comprador", status: "Activo", date: "15 dic 2023" },
  ];

  return (
    <div className="review-buyers-container">
      <h1 className="page-title">Revisar Compradores / Roles</h1>

      {/* --- MÉTRICAS --- */}
      <div className="metrics-grid">
        <div className="metric-card">
          <p className="metric-label">Clientes activos</p>
          <h2 className="metric-value">1,210</h2>
        </div>
        <div className="metric-card">
          <p className="metric-label">Clientes suspendidos</p>
          <h2 className="metric-value">5</h2>
        </div>
        <div className="metric-card">
          <p className="metric-label">Clientes nuevos (30 días)</p>
          <h2 className="metric-value">65</h2>
        </div>
      </div>

      {/* --- TABLA --- */}
      <div className="table-card">
        <table className="buyers-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo electrónico</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Fecha de registro</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer) => (
              <tr key={buyer.id}>
                <td>{buyer.name}</td>
                <td>{buyer.email}</td>
                <td>
                  <span className="badge badge-role">{buyer.role}</span>
                </td>
                <td>
                  <span className={`badge ${buyer.status === 'Activo' ? 'badge-active' : 'badge-suspended'}`}>
                    {buyer.status}
                  </span>
                </td>
                <td>{buyer.date}</td>
                <td>
                  {/* Lógica simple: Si está activo mostramos botón suspender, si no, modificar */}
                  {buyer.status === 'Activo' ? (
                     buyer.id === 1 ? ( 
                       /* Caso especial para el primer usuario que tiene "Modificar rol" en la imagen */
                       <button className="btn-action">Modificar rol</button>
                     ) : (
                       <button className="btn-action">Suspender</button>
                     )
                  ) : (
                    <button className="btn-action">Suspender</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Espacio extra abajo como en la imagen */}
        <div style={{height: '50px', backgroundColor: 'white'}}></div>
      </div>

    </div>
  );
};

export default ReviewBuyers;
