import React from "react";
import "./InfoCarrito.cc";

function InfoCarrito ( { producto, agregarCarrito} = {}) {
    
    return (
        <div className="infoCarrito">
            <div className="infoCarrito-image" style={{
                backgroundImage: `url(${producto.image})`,
            }} />

            <div className="infoCarrito-info">
                <h4>{producto.product_name}</h4>
                <p>{producto.price}</p>
            </div>

            <button className='infoProducto-button' 
                onClick={() => agregarCarrito(producto)}>Comprar
            </button>
        

        </div>
    )

}

export default InfoCarrito;