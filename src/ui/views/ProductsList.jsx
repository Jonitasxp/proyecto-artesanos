import React from "react";
import "./ProductsList.css";

const ProductsList = () => {
  return (
    <div className="plist-page">
      <div className="plist-card">
        <div className="plist-header">
          <h1 className="plist-title">Mis Productos</h1>
          <button className="plist-add-btn">Agregar nuevo producto</button>
        </div>

        <div className="plist-table-wrap">
          <table className="plist-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bolsa de Yute</td>
                <td>25,00 €</td>
                <td>15</td>
                <td><span className="plist-badge plist-badge--ok">Publicado</span></td>
                <td><button className="plist-btn-small">Editar ⌄</button></td>
              </tr>
              <tr>
                <td>Jarrón de Cerámica</td>
                <td>40,00 €</td>
                <td>8</td>
                <td><span className="plist-badge plist-badge--ok">Publicado</span></td>
                <td><button className="plist-btn-small">Editar ⌄</button></td>
              </tr>
              <tr>
                <td>Tapiz Tejido</td>
                <td>60,00 €</td>
                <td>5</td>
                <td><span className="plist-badge plist-badge--pending">Pendiente</span></td>
                <td><button className="plist-btn-small">Editar ⌄</button></td>
              </tr>
              <tr>
                <td>Aretes de Plata</td>
                <td>30,00 €</td>
                <td>0</td>
                <td><span className="plist-badge plist-badge--bad">Rechazado</span></td>
                <td><button className="plist-btn-small">Editar ⌄</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
