import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const ManagementRow = ({ label }) => (
    <div className="list-item">
        <span>{label}</span>
        <IoIosArrowForward className="arrow-icon" />
    </div>
);

const StatCard = ({ title, value, isCurrency = false, className = '' }) => (
    <div className="stat-item">
        <span>{title}</span>
        <span className={`stat-value ${className}`}>
            {isCurrency ? `$${value.toLocaleString('en-US')}` : value.toLocaleString('en-US')}
        </span>
    </div>
);

const AdminPanel = () => {
    return (
        <div className="admin-layout">
            <h1 className="Literata-title">Panel del Administrador</h1>

            <div className="admin-grid">
                {/* 1. Gestión de Usuarios */}
                <div className="card-panel">
                    <h3>Gestión de Usuarios</h3>
                    <ManagementRow label="Artesanos" />
                    <ManagementRow label="Compradores" />
                </div>

                {/* 2. Revisión de Productos */}
                <div className="card-panel">
                    <h3>Revisión de Productos</h3>
                    <div className="stat-item">
                        <span>Pendiente</span>
                        <span className="stat-value">5</span>
                    </div>
                </div>

                {/* 3. Estadísticas */}
                <div className="card-panel">
                    <h3>Estadísticas</h3>
                    <StatCard title="Ventas Totales" value={120370} isCurrency={true} />
                    <StatCard title="Artesanías Vendidas" value={1534} />
                    <StatCard title="Impacto Social" value={151} className="impacto-social" />
                </div>

                {/* 4. Configuración */}
                <div className="card-panel">
                    <h3>Configuración</h3>
                    <ManagementRow label="Comisiones" />
                    <ManagementRow label="Ajustes de la Plataforma" />
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;