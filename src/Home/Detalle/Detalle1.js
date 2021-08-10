import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Detalle1 () {

    const [producto, setProducto] = useState({
        image: null,
        nombre: null,
        descripcion: null,
        price: 0,
        isActive: false,
        brand: null
    });

    let { idProducto } = useParams();
    console.log(idProducto)
  
    useEffect(() => {
      fetch("https://hungry-jang-a05289.netlify.app/.netlify/functions/server/catalogoApi/catalogo/" + idProducto)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setProducto(data)});
    }, [idProducto]);
   


        return (
            <div>
                <h3>Detalle de Producto</h3>

                <div>

                    <h4>{producto.product_name}</h4>

                    <img src={producto.image} alt="maquillaje"></img>
                    <p>{producto.description}</p>
                    <p>$ {producto.price}</p>
                    {/* <img alt="maquillaje">{producto.image}</img> */}
                    {producto.isActive ? <button>Comprar</button> : <p>Agotado</p>}
                </div>
 
            </div>
        )

}

export default Detalle1;