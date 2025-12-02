import "./buyerPanel.css";
import { IoCubeOutline } from "react-icons/io5";

export default function BuyerPanel() {
  return (
    <div className="buyer-container">
      <h1 className="buyer-title">Panel del Comprador</h1>

      {/* FOTO DEL USUARIO */}
      <div className="buyer-photo">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg"
          alt="Foto de usuario"
        />
        <p className="buyer-name">Sofia</p>
      </div>

      {/* TARJETA PRINCIPAL */}
      <div className="buyer-card">

        {/* HISTORIAL DE PEDIDOS */}
        <section className="buyer-section">
          <h2>Historial de Pedidos</h2>

          <div className="order-box">
            <IoCubeOutline className="order-icon" />

            <div className="order-info">
              <h3>Order No.1234</h3>
              <p>Enviado el 15 de abril de 2024</p>
            </div>

            <button className="order-link">Ver pedidos</button>
          </div>
        </section>

        <hr />

        {/* VISTO RECIENTEMENTE */}
        <section className="buyer-section">
          <h2>Lo que viste recientemente</h2>

          <div className="recent-item">
            <img
              src="https://images.pexels.com/photos/16349990/pexels-photo-16349990.jpeg"
              alt="Producto"
            />

            <p>Cesta tejida</p>
          </div>
        </section>

        <hr />

        {/* DIRECCIÓN DE ENVÍO */}
        <section className="buyer-section">
          <h2>Dirección de Envío</h2>

          <div className="shipping-row">
            <p>Calle Falsa 123, Ciudad de México, 12345</p>
            <button className="edit-link">Editar</button>
          </div>
        </section>

        <hr />

        {/* MÉTODO DE PAGO */}
        <section className="buyer-section">
          <h2>Método de Pago</h2>
          <p>Visa •••• 4242</p>
        </section>

        <hr />

        {/* AJUSTES */}
        <section className="buyer-section">
          <h2>Ajustes</h2>
        </section>
      </div>
    </div>
  );
}