import React from "react";
import "./ArtisanStoriesList.css";

const ArtisanStoriesList = () => {
  return (
    <div className="aslist-page">
      <div className="aslist-card">
        <div className="aslist-header">
          <h1 className="aslist-title">Historias del Artesano</h1>
          <button className="aslist-add-btn">Agregar historia</button>
        </div>

        <div className="aslist-table-wrap">
          <table className="aslist-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Idioma</th>
                <th>Fecha</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mi viaje como artesano</td>
                <td>Español</td>
                <td>22 de abril de 2024</td>
                <td><button className="aslist-btn-small">Editar</button></td>
              </tr>
              <tr>
                <td>Tradiciones de nuestra comunidad</td>
                <td>Español</td>
                <td>18 de abril de 2024</td>
                <td><button className="aslist-btn-small">Editar</button></td>
              </tr>
              <tr>
                <td>Inspiración para mis creaciones</td>
                <td>Español</td>
                <td>10 de abril de 2024</td>
                <td><button className="aslist-btn-small">Editar</button></td>
              </tr>
              <tr>
                <td>Técnicas de tejido ancestral</td>
                <td>Español</td>
                <td>2 de abril de 2024</td>
                <td><button className="aslist-btn-danger">Eliminar</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArtisanStoriesList;
