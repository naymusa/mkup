// import React from "react";
import "./Header.css";
import "./Header-mob.css";

import Buscador from "./Buscador.js";

import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/Auth/Auth.js";

function Header() {
  const { session, metodos } = useContext(AuthContext);
  const { isSignedIn, user } = session;

  const { carrito } = useContext(AuthContext);

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-cintillo">
          <p>Compra hasta 12 MSI en compras mínimas $1,500</p>
        </div>
        <div className="navbar-section-info">
          <div className="navbar-section-info-logo">
            <Link to="/">
              <img
                alt="maquillaje-musa-logo"
                src="https://www.postoverde.cl/wp-content/uploads/2021/04/Logo_Musa-01-1-2.png"
              />
            </Link>
          </div>

          <div className="mobile-header">
            <div className="navbar-section-info-search">
              <Buscador />
            </div>

            <div className="navbar-section-info-help">
              <div className="navbar-boton">
                {/* <img className="telefono"
                    src="https://img.icons8.com/material/452/phone--v1.png"/> */}
                <button>Contacto</button>
              </div>
              <div className="navbar-boton">
                {/* <img className="ayuda"
                        src="https://image.flaticon.com/icons/png/512/18/18436.png"/> */}
                <button>Ayuda</button>
              </div>

              <div className="navbar-boton">
                {!isSignedIn && (
                  <Link to="/login">
                    <button>Inicia sesión</button>
                  </Link>
                )}
                {isSignedIn && (
                  <button onClick={metodos.logout}>
                    Hola, {user.displayName}
                  </button>
                )}
              </div>

              <div className="navbar-boton">
                {/* <img
                        className="carrito"
                    src="https://image.flaticon.com/icons/png/512/126/126083.png"/> */}
                <Link to="/carrito">
                  <button>Carrito ({carrito.length})</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <section className="Categorias">
          <p className="catego">Maquillaje </p>
          <p className="catego">Brochas </p>
          <p className="catego">Ojos </p>
        </section>
      </nav>
    </header>
  );
}

export default Header;

// function Header() {
//     return (
//       <div className="contenedor">
//           <div className="header-principal">
//               <div className="logo">
//                   <img
//                   clasName="logotipo"
//                   src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2019/03/0059_t_cherie_s-beauty-logo_11.png"/>
//               </div>
//               <div className="buscador">
//                   <input placeholder="Quiero comprar..."></input>
//               </div>
//               <div className="contenedor-menu">
//                   <div className="contacto">
//                       <img className="telefono"
//                       src="https://img.icons8.com/material/452/phone--v1.png"/>
//                       <p>Contacto </p>
//                   </div>
//                   <div className="Ayuda">
//                       <img className="ayuda"
//                           src="https://image.flaticon.com/icons/png/512/18/18436.png"/>
//                       <p>Ayuda </p>
//                   </div>
//                   <div className="UserInfo">
//                       <img
//                           className="Avatar"
//                           src="https://image.flaticon.com/icons/png/512/709/709722.png"/>
//                       <p>Hola (usuario)</p>
//                   </div>
//                   <div className="carrito-compras">
//                       <img
//                           className="carrito-img"
//                       src="https://image.flaticon.com/icons/png/512/126/126083.png"/>
//                       <p>Carrito</p>
//                   </div>
//               </div>
//               <NavBar />
//           </div>
//         <section className="Categorias">
//           <p>Maquillaje </p>
//           <p>Brochas </p>
//           <p>Pestañas </p>
//         </section>
//       </div>
//     );
//   }

//   export default Header;
