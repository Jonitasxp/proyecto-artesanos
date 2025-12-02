import React from 'react';
// Importamos Recharts para el gráfico de línea
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import './ReportsMetrics.css';

const ReportsMetrics = () => {
  
  // Datos para el gráfico (Ventas Mensuales)
  const chartData = [
    { name: 'ene', ventas: 1000 },
    { name: 'feb', ventas: 1500 },
    { name: 'mar', ventas: 1500 },
    { name: 'abr', ventas: 1800 },
    { name: 'may', ventas: 2100 },
    { name: 'juin', ventas: 2900 }, // Sic de la imagen (juin)
    { name: 'jul', ventas: 2800 },
    { name: 'agot', ventas: 3500 },
    { name: 'dic', ventas: 3900 },
  ];

  return (
    <div className="reports-container">
      <h1 className="reports-title">Reportes y métricas</h1>

      {/* --- KPIs --- */}
      <div className="metrics-kpi-grid">
        <div className="metric-kpi-card">
          <p className="kpi-label-text">Usuarios registrados</p>
          <h2 className="kpi-number-text">1.250</h2>
        </div>
        <div className="metric-kpi-card">
          <p className="kpi-label-text">Ventas totales</p>
          <h2 className="kpi-number-text">3500 MXN</h2>
        </div>
        <div className="metric-kpi-card">
          <p className="kpi-label-text">Artesanos activos</p>
          <h2 className="kpi-number-text">480</h2>
        </div>
        <div className="metric-kpi-card">
          <p className="kpi-label-text">Productos activos</p>
          <h2 className="kpi-number-text">1.120</h2>
        </div>
      </div>

      {/* --- DASHBOARD PRINCIPAL (Tarjeta Blanca Grande) --- */}
      <div className="dashboard-main-card">
        
        {/* COLUMNA 1: Gráfico y Categorías Abajo */}
        <div className="chart-column">
          <div>
            <h3 className="section-header">Ventas mensuales</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid vertical={false} stroke="#EAEAEA" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#666', fontSize: 12}} 
                    interval={0}
                  />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="ventas" 
                    stroke="#5D9CEC" /* Azul similar a la imagen */
                    strokeWidth={3} 
                    dot={false} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Lista inferior izquierda */}
          <div style={{marginTop: '1rem'}}>
            <h3 className="section-header">Categorías más vendidas</h3>
            <ul className="simple-list bullet-list">
              <li>Joyería</li>
              <li>Textiles</li>
              <li>Ceramica</li>
            </ul>
          </div>
        </div>

        {/* COLUMNA 2: Categorías Arriba e Impacto Social */}
        <div>
          <div style={{marginBottom: '3rem'}}>
            <h3 className="section-header">Categorías más vendidas</h3>
            <ul className="simple-list bullet-list">
              <li>Joyería</li>
              <li>Textiles</li>
              <li>Cerámica</li>
            </ul>
          </div>

          <div>
            <h3 className="section-header">Impacto social</h3>
            <div className="impact-row">
              <span className="impact-name">San Juan</span>
              <span className="impact-val">600 MXN</span>
            </div>
            <div className="impact-row">
              <span className="impact-name">Tzimol</span>
              <span className="impact-val">450 MXN</span>
            </div>
            <div className="impact-row">
              <span className="impact-name">Zinacantán</span>
              <span className="impact-val">300 MXN</span>
            </div>
          </div>
        </div>

        {/* COLUMNA 3: Arte Popular y Productos Vistos */}
        <div>
          <div style={{marginBottom: '3rem'}}>
            <h3 className="section-header">Arte popular por región</h3>
            <ul className="simple-list">
              <li>Oaxaca</li>
              <li>Chiapas</li>
              <li>Yucatán</li>
            </ul>
          </div>

          <div>
            <h3 className="section-header">Productos más vistos</h3>
            <ul className="simple-list">
              <li>Collar de jade</li>
              <li>Blusa bordada a mano</li>
              <li>Vasija de barro</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReportsMetrics;