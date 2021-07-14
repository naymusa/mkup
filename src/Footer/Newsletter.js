import React from "react";

import "./Footer.css"

function Newsletter() {

    return (

        <div>
            <section className="newsletter">
                <h4>Suscríbete a nuestro newsletter</h4>
                <p>Sólo necesitas tu correo para entérate de nuestras promociones y nuestro resurtido.</p>
                <div className="wrap-input-newsletter">
                <input placeholder="Ingresa aquí tu correo" className="input-newsletter"></input> <button className="boton-input-newsletter">Suscribirme</button>
                <hr /> 
                </div>
            </section>

        </div>
    )
}
export default Newsletter;