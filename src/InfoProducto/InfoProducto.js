import React from "react";
import { Link } from "react-router-dom";

import "./InfoProducto.css"

function InfoProducto ({ producto, agregarCarrito} = {}) {
    return (

        <div className="wrap-infoproducto">
            <Link to= {`/detalle-producto/${producto._id}`}>
                <div className="wrap-infoproducto-img" style={{
                    backgroundImage: `url(${producto.image})`,
                    }} 
                />
                <div className='wrap-infoProducto-info'>
                    <h4>{producto.product_name}</h4>
                    <p>{producto.price}</p>
                </div>
            </Link>

            <button className='wrap-infoProducto-button' 
            onClick={() => agregarCarrito(producto)}
            >Comprar</button>
        </div>
    )
} 

export default InfoProducto;