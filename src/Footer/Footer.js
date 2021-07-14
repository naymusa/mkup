import React from "react";
import Newsletter from "./Newsletter";

import "./Footer.css"

function Footer() {
    return(
        <div className="wrap">
            <Newsletter />
        <div className="wrap-footer">
            <section className="categorias">
           <p>Categorias</p>
           <ul>
               <li>Ojos</li>
               <li>Brochas</li>
               <li>Maquillaje</li>
           </ul>
           </section>

            <section className="acerca">
           <p>Acerca de nosotros</p>
           <ul>
               <li>¿Quienes somos?</li>
               <li>Contacto</li>
           </ul>
           </section>

           <section className="ayuda">
               <p>Centro de Ayuda</p>
               <ul>
                   <li>¿Cómo comprar</li>
                   <li>Métodos de pago</li>
               </ul>
           </section>         
        </div>
        <footer className="derechos">© 2021 Marca registrada. Empresa 100% Mexicana. Derechos reservados. | musa.com.mx</footer>
        </div>
    )
}

export default Footer;