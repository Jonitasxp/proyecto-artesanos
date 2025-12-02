import React from "react";
import "./ProductCreate.css";

const ProductCreate = () => {
  return (
    <div className="pcreate-page">
      <div className="pcreate-card">
        <div className="pcreate-header">
          <h1 className="pcreate-title">Agregar nuevo producto</h1>
          <div className="pcreate-icon">🧺</div>
        </div>

        <div className="pcreate-grid">
          <form className="pcreate-form">
            <div className="pcreate-field">
              <label>Nombre del producto</label>
              <input className="pcreate-input" />
            </div>

            <div className="pcreate-row">
              <div className="pcreate-field">
                <label>Precio</label>
                <input className="pcreate-input" />
              </div>
              <div className="pcreate-field">
                <label>Stock</label>
                <input className="pcreate-input" />
              </div>
            </div>

            <div className="pcreate-field">
              <label>Categoría</label>
              <select className="pcreate-input">
                <option>Selecciona una categoría</option>
              </select>
            </div>

            <div className="pcreate-field">
              <label>Estado de publicación</label>
              <select className="pcreate-input">
                <option>Borrador</option>
              </select>
            </div>

            <div className="pcreate-field">
              <label>Descripción</label>
              <textarea className="pcreate-textarea" />
            </div>

            <div className="pcreate-field">
              <label>Materiales</label>
              <input className="pcreate-input" />
            </div>

            <div className="pcreate-field">
              <label>Tiempo de elaboración (opcional)</label>
              <input className="pcreate-input" />
            </div>
          </form>

          <div className="pcreate-side">
            <div className="pcreate-field">
              <label>Multimedia</label>
              <div className="pcreate-drop">
                <div className="pcreate-drop-icon">⬆️</div>
                <div>Agregar fotos</div>
                <div className="pcreate-drop-sub">Mín. 1 máx. 5</div>
              </div>
            </div>

            <div className="pcreate-field">
              <label>Notas adicionales (opcional)</label>
              <textarea className="pcreate-textarea" />
            </div>
          </div>
        </div>

        <div className="pcreate-actions">
          <button className="pcreate-btn-secondary" type="button">
            Cancelar
          </button>
          <button className="pcreate-btn-primary" type="button">
            Guardar producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
