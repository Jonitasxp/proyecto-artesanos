import React from 'react';
import { 
  Menu, User, Package, FileText, DollarSign, 
  BarChart3, Edit, Plus, ExternalLink 
} from 'lucide-react';
import './Dashboard.css'; // Conectamos los estilos

const Dashboard = () => {
  // Datos simulados para los productos
  const products = [
    { id: 1, name: "Bolso de hombro tejido a mano", price: 50, img: "https://i5.walmartimages.com/asr/6af1b162-f6dc-4bbf-b1df-0acfc8388d5a.3d0a11aee25b7fd718fe0d2b844a8283.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" },
    { id: 2, name: "Jarrón de barro", price: 75, img: "https://casanochipa.com/cdn/shop/files/24.png?v=1738609861&width=533" },
    { id: 3, name: "Camino de mesa artesanal", price: 40, img: "https://m.media-amazon.com/images/I/81J0VQkMyLL._AC_UF894,1000_QL80_.jpg" },
    { id: 3, name: "Chapatas", price: 40, img: "blob:https://web.whatsapp.com/3e6aab23-8902-4ca5-a6e2-ba66efb85357" },
  ];

  return (
    <div className="dashboard-container">
      
      {/* --- SIDEBAR IZQUIERDA --- */}
      <aside className="sidebar">
        <div className="profile-section">
          <img 
            src="https://www.wwe.com/f/styles/talent_champion_lg/public/2025/11/John_Cena_PROFILE.png" 
            alt="Profile" 
            className="profile-img"
          />
          <div className="profile-name">Jhon cena</div>
        </div>

        <nav className="nav-menu">
          <a href="#" className="nav-item active">
            <User size={20} />
            <span>Profile</span>
          </a>
          <a href="#" className="nav-item">
            <Package size={20} />
            <span>My Products</span>
          </a>
          <a href="#" className="nav-item">
            <FileText size={20} />
            <span>Artisan Stories</span>
          </a>
          <a href="#" className="nav-item">
            <DollarSign size={20} />
            <span>Earnings</span>
          </a>
          <a href="#" className="nav-item">
            <BarChart3 size={20} />
            <span>Statistics</span>
          </a>
        </nav>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="dashboard-content">
        
        {/* Header superior */}
        <header className="dashboard-header">
          <h1 className="dashboard-title">Tablero del Artesano </h1>
          <button className="menu-btn-mobile">
            <Menu size={24} />
          </button>
        </header>

        {/* Sección: Mis Productos */}
        <h2 className="section-title">Mis productos</h2>
        <div className="card">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-info-group">
                <img src={product.img} alt={product.name} className="product-thumb" />
                <div>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-sub">${product.price},00</p>
                </div>
              </div>
              
              <div className="product-actions">
                <span style={{fontWeight: 'bold'}}>${product.price}</span>
                <Edit size={18} className="cursor-pointer text-gray-500 hover:text-black" />
              </div>
            </div>
          ))}

          <button className="add-btn">
            <Plus size={18} />
            Add New Product
          </button>
        </div>

        {/* Grid Inferior de 2 columnas */}
        <div className="dashboard-grid">
          
          {/* Tarjeta: Historia */}
          <div className="card">
            <h3 className="section-title" style={{fontSize: '1.2rem'}}>Artisan Story</h3>
            <p style={{color: '#555', lineHeight: '1.5'}}>
              Jhon Cena es una artesana del estado de Oaxaca, Mexico...
            </p>
          </div>

          {/* Tarjeta: Ganancias */}
          <div className="card">
            <h3 className="section-title" style={{fontSize: '1.2rem'}}>Earnings</h3>
            <p className="stat-value">$1,250.00</p>
            <p className="stat-sub">Paid in Sandbox Mode</p>
          </div>

          {/* Tarjeta: Traducción */}
          <div className="card">
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <h3 className="section-title" style={{fontSize: '1.2rem', marginBottom:0}}>Translation</h3>
              <ExternalLink size={18} color="#007AFF" />
            </div>
            <p style={{marginTop: '10px', color: '#555'}}>Google Translate</p>
          </div>

          {/* Tarjeta: Estadísticas */}
          <div className="card">
            <h3 className="section-title" style={{fontSize: '1.2rem'}}>Impact Statistics</h3>
            <div style={{display:'flex', justifyContent:'space-between', marginTop:'1rem'}}>
              <div>
                <span style={{fontSize: '1.5rem', fontWeight:'bold'}}>450</span>
                <p className="stat-sub">Views</p>
              </div>
              <div>
                <span style={{fontSize: '1.5rem', fontWeight:'bold'}}>120</span>
                <p className="stat-sub">Sales</p>
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default Dashboard;