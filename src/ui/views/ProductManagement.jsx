import React from 'react';
import './ProductManagement.css';

const ProductManagement = () => {
  // Datos simulados según la imagen
  const products = [
    { 
      id: 1, 
      name: "Jarro de cerámica", 
      price: "25,00 €", 
      status: "Publicado", 
      category: "Cerámica", 
      img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=100" 
    },
    { 
      id: 2, 
      name: "Bolsa tejida a mano", 
      price: "40,00 €", 
      status: "Pendiente", 
      category: "Textiles", 
      img: "https://images.unsplash.com/photo-1590874103328-27cf2de6a978?auto=format&fit=crop&q=80&w=100" 
    },
    { 
      id: 3, 
      name: "Máscara tallada", 
      price: "60,00 €", 
      status: "Publicado", 
      category: "Escultura", 
      img: "https://images.unsplash.com/photo-1555518423-87a412857410?auto=format&fit=crop&q=80&w=100" 
    },
    { 
      id: 4, 
      name: "Camino de mesa bordado", 
      price: "35,00 €", 
      status: "Publicado", 
      category: "Artesura", // Sic de la imagen (probablemente Artesanía o Costura)
      img: "https://images.unsplash.com/photo-1605218457221-87265a7f920f?auto=format&fit=crop&q=80&w=100" 
    },
    { 
      id: 5, 
      name: "Escultura en madera", 
      price: "75,00 €", 
      status: "Suspendid", // Sic de la imagen
      category: "Joyería", // Sic de la imagen
      img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=100" 
    },
    { 
      id: 6, 
      name: "Aretes de plata", 
      price: "30,00 €", 
      status: "Pendiente", 
      category: "Sofía M.", // Parece ser el nombre del artesano en la columna categoría por error en mockup original, pero lo replicamos
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=100" 
    },
  ];

  return (
    <div className="pm-container">
      <h1 className="page-title">Gestión de Productos</h1>

      {/* --- KPIs --- */}
      <div className="kpi-row">
        <div className="pm-kpi-card">
          <h2 className="kpi-number">120</h2>
          <p className="kpi-text">Productos publicados</p>
        </div>
        <div className="pm-kpi-card">
          <h2 className="kpi-number">25</h2>
          <p className="kpi-text">Pendientes</p>
        </div>
        <div className="pm-kpi-card">
          <h2 className="kpi-number">5</h2>
          <p className="kpi-text">Suspendidos</p>
        </div>
      </div>

      {/* --- FILTROS --- */}
      <div className="filters-box">
        <div className="filters-grid">
          <div className="filter-group">
            <label className="filter-label">Filtros</label>
            <select className="filter-select">
              <option>Estado</option>
              <option>Publicado</option>
              <option>Pendiente</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Categoría</label>
            <select className="filter-select">
              <option>Categoría</option>
              <option>Cerámica</option>
              <option>Textiles</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Artesano</label>
            <select className="filter-select">
              <option>Artesano</option>
              <option>Sofía M.</option>
              <option>Juan P.</option>
            </select>
          </div>
        </div>
      </div>

      {/* --- TABLA --- */}
      <div className="pm-table-card">
        <table className="pm-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre del producto</th>
              <th>Preció</th>
              <th>Estado</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>
                  <img src={prod.img} alt={prod.name} className="prod-thumb" />
                </td>
                <td style={{fontWeight: '500'}}>{prod.name}</td>
                <td>{prod.price}</td>
                <td>
                  <span className={prod.status === 'Publicado' ? 'status-published' : 'status-alert'}>
                    {prod.status}
                  </span>
                </td>
                <td>{prod.category}</td>
                <td>
                  <button className="btn-approve-outline">Aprobar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ProductManagement;