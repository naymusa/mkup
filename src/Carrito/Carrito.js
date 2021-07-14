import React, { useContext } from "react";

import { AuthContext } from "../Context/Auth/Auth";
import Productos from "../Home/Productos/Productos";

import useCarrito from "./useCarrito.js"


function Carrito () {
    const { carrito } = useContext (AuthContext);
    const {total } = useCarrito (carrito);

    return (

        <div>
            <h2>Tu carrito de compra</h2>
            <h3>Total de compra: $ {total}</h3>

            <ul>
                {carrito.map((productoIndividual) => 
                <li>
                    <Productos datosDeProducto={productoIndividual} carrito={true} />
                </li>
                )}
            </ul>
        </div>
    )
}

export default Carrito;