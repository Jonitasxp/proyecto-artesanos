import React from 'react';
import { Home } from 'lucide-react';
// Importamos los componentes necesarios de Recharts
import { 
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import './ImpactStatistics.css';

const ImpactStatistics = () => {
  // --- DATOS SIMULADOS (Fake Data) ---

  // Datos para el gráfico de líneas (Ventas por mes)
  const dataLineChart = [
    { name: 'May', ventas: 12 },
    { name: 'Aug', ventas: 16 },
    { name: 'Sep', ventas: 22 },
    { name: 'Oct', ventas: 29 },
    { name: 'Nov', ventas: 27 },
    { name: 'Dec', ventas: 40 },
    { name: 'Api', ventas: 29 },
  ];

  // Datos para el gráfico de barras (Tráfico)
  const dataBarChart = [
    { name: 'Mes 1', trafico: 22 },
    { name: 'Mes 2', trafico: 28 },
    { name: 'Mes 3', trafico: 38 },
  ];

  // Datos para la tabla
  const tableData = [
    { id: 1, producto: "Bolsa bordada", valor: 28, ranking: 1 },
    { id: 2, producto: "Camino de mesa", valor: 20, ranking: 2 },
    { id: 3, producto: "Bufanda de lana", valor: 17, ranking: 3 },
  ];

  return (
    <div className="stats-container">
      <h1 className="main-title">Estadísticas de Impacto Personal</h1>

      {/* --- SECCIÓN SUPERIOR: Métricas --- */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <h2 className="kpi-value">240</h2>
          <p className="kpi-label">Productos<br />vendidos</p>
        </div>
        <div className="kpi-card">
          <h2 className="kpi-value">$85,320</h2>
          <p className="kpi-label">Ingresos<br />generados</p>
        </div>
        <div className="kpi-card">
          <h2 className="kpi-value">180</h2>
          <p className="kpi-label">Clientes<br />alcanzados</p>
        </div>
        <div className="kpi-card">
          <h2 className="kpi-value">
            3 <Home size={24} color="#A0522D" style={{marginLeft: '5px'}} />
          </h2>
          <p className="kpi-label">Comunidades<br />Impactadas</p>
        </div>
      </div>

      {/* --- SECCIÓN MEDIA: Gráficos --- */}
      <div className="charts-grid">
        
        {/* Gráfico de Línea (Área) */}
        <div className="chart-card">
          <h3 className="card-title">Ventas por mes</h3>
          <div className="chart-container">
            {/* ResponsiveContainer hace que el gráfico se adapte al ancho del padre */}
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={dataLineChart}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0D6C6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#666'}} />
                <Tooltip contentStyle={{backgroundColor: '#F8F5F0', border: '1px solid #E0D6C6'}} />
                {/* Usamos Area en vez de Line para el relleno debajo de la línea */}
                <Area type="monotone" dataKey="ventas" stroke="#A0522D" fill="#D2B48C" fillOpacity={0.3} strokeWidth={2} dot={{ fill: '#A0522D', r: 4 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de Barras */}
        <div className="chart-card">
          <h3 className="card-title">Tráfico a tus productos</h3>
          <div className="chart-container">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={dataBarChart}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0D6C6" />
                <XAxis dataKey="name" hide={true} /> {/* Ocultamos eje X según imagen */}
                <YAxis hide={true} /> {/* Ocultamos eje Y según imagen */}
                <Tooltip cursor={false} contentStyle={{backgroundColor: '#F8F5F0', border: '1px solid #E0D6C6'}} />
                <Bar dataKey="trafico" fill="#C49A6C" radius={[4, 4, 0, 0]} barSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="chart-subtitle">Últimos 3 meses</p>
        </div>

      </div>

      {/* --- SECCIÓN INFERIOR: Tabla --- */ }
      <div className="table-card">
        <h3 className="card-title">Productos más vendidos</h3>
        <div className="table-container-scroll">
          <table className="products-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Valor Cultural / Horas</th>
                <th style={{textAlign: 'center'}}>Ranking</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td>{row.producto}</td>
                  <td>{row.valor}</td>
                  <td style={{textAlign: 'center', fontWeight: 'bold'}}>{row.ranking}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ImpactStatistics;