import React from 'react';
import './PaymentManagement.css';

const PaymentManagement = () => {
  // Datos simulados basados en la imagen
  const payments = [
    { 
      id: 1, 
      name: "Emma Rodríguez", 
      amount: "$ 380,00", 
      commission: "$ 19,00", 
      status: "Retenido", 
      actionType: "mark_paid", // Para decidir qué botón mostrar
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" 
    },
    { 
      id: 2, 
      name: "José Martínez", 
      amount: "$ 420,00", 
      commission: "$ 21,00", 
      status: "Pendiente", 
      actionType: "pay",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100" 
    },
    { 
      id: 3, 
      name: "Maria Gómez", 
      amount: "$ 250,00", 
      commission: "$ 12,50", 
      status: "Pagado", 
      actionType: "paid",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=100" 
    },
  ];

  // Renderizado condicional del botón según el tipo de acción
  const renderActionButton = (type) => {
    switch (type) {
      case 'mark_paid':
        return <button className="btn-pay-action btn-mark-paid">Marcar como pagado</button>;
      case 'pay':
        return <button className="btn-pay-action btn-outline-pay">Pagar</button>; // Corregido de "Apadar"
      case 'paid':
        return <button className="btn-pay-action btn-disabled-pay">Pagado</button>;
      default:
        return null;
    }
  };

  return (
    <div className="payments-container">
      <h1 className="page-title">Gestión de Pagos / Comisiones</h1>

      {/* --- KPIs --- */}
      <div className="kpi-wrapper">
        <div className="pay-kpi-card">
          <p className="kpi-label-pay">Total de pagos<br/>este mes</p>
          <h2 className="kpi-amount-pay">$5.230,00</h2>
        </div>
        <div className="pay-kpi-card">
          <p className="kpi-label-pay">Pagos pendientes</p>
          <h2 className="kpi-amount-pay">$1.175,00</h2>
        </div>
        <div className="pay-kpi-card">
          <p className="kpi-label-pay">Comisiones<br/>generadas</p>
          <h2 className="kpi-amount-pay">$485,00</h2>
        </div>
        <div className="pay-kpi-card">
          <p className="kpi-label-pay">Artesanos pagados<br/>este mes</p>
          <h2 className="kpi-amount-pay">18</h2>
        </div>
      </div>

      {/* --- TABLA --- */}
      <div className="pay-table-card">
        <table className="pay-table">
          <thead>
            <tr>
              <th>Nombre del artesano</th>
              <th>Monto</th>
              <th>Comisión</th>
              <th>Estado</th>
              <th style={{textAlign: 'right'}}>Acciones</th> 
              {/* La imagen dice "Fecha" en la columna de botones, lo cual es confuso. 
                  He puesto "Acciones" para que sea lógico, y la fecha abajo. */}
            </tr>
          </thead>
          <tbody>
            {payments.map((row) => (
              <React.Fragment key={row.id}>
                <tr>
                  <td>
                    <div className="artisan-cell">
                      <img src={row.img} alt={row.name} className="artisan-avatar" />
                      <span className="artisan-name-text">{row.name}</span>
                    </div>
                  </td>
                  <td>{row.amount}</td>
                  <td>{row.commission}</td>
                  <td>{row.status}</td>
                  <td style={{textAlign: 'right'}}>
                    {renderActionButton(row.actionType)}
                  </td>
                </tr>
                {/* Fila extra para la fecha, simulando el diseño de la imagen */}
                <tr className="table-footer-row">
                  <td colSpan="5" style={{paddingTop: '0', paddingBottom: '1.5rem'}}>
                    15 de abril de 2024
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default PaymentManagement;