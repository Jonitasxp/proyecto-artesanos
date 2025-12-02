import React from 'react';
import './UserManagement.css';

const UserManagement = () => {
  // Datos simulados (Hardcoded data)
  const users = [
    { id: 1, name: "Elena Martínez", role: "Artesana", email: "elena@example.com", status: "Activo", date: "15 de abril de 2024" },
    { id: 2, name: "Carlos García", role: "Comprador", email: "carlos@example.com", status: "Pendiente", date: "15 de abril de 2024" },
    { id: 3, name: "Laura Gómez", role: "Artesana", email: "laura@example.com", status: "Suspendido", date: "15 de abril de 2024" },
    { id: 4, name: "Pedro Rodriguez", role: "Comprador", email: "pedro@example.com", status: "Activo", date: "15 de abril de 2024" },
  ];

  // Función para asignar la clase de color según el estado
  const getStatusClass = (status) => {
    switch (status) {
      case 'Activo': return 'status-active';
      case 'Pendiente': return 'status-pending';
      case 'Suspendido': return 'status-suspended';
      default: return '';
    }
  };

  return (
    <div className="user-management-container">
      <h1 className="page-title">Gestión de Usuarios</h1>

      {/* Filtros */}
      <div className="filters-container">
        <select className="filter-select">
          <option value="">Tipo de usuario</option>
          <option value="artesana">Artesana</option>
          <option value="comprador">Comprador</option>
        </select>

        <select className="filter-select">
          <option value="">Estado</option>
          <option value="activo">Activo</option>
          <option value="pendiente">Pendiente</option>
          <option value="suspendido">Suspendido</option>
        </select>
      </div>

      {/* Tabla */}
      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Correo</th>
              <th>Estado</th>
              <th>Fecha de registro</th>
              <th></th> {/* Columna vacía para la acción "Ver" */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.date}</td>
                <td>
                  <span className="action-link">Ver</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;