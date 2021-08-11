import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../Context/Auth/Auth.js"
import "./Detalle1.css"


function Detalle1 (props) {

    const {agregarCarrito} = useContext(AuthContext);

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

                <div className="wrap-pdp">

                    <img className="img-pdp" src={producto.image} alt="maquillaje"></img>

                    <section className="datos-producto-pdp">
                        <h3>{producto.product_name}</h3>
                        <h4>{producto.brand}</h4>
                        <p className="precio-producto-pdp">$ {producto.price}</p>
                        <p>{producto.description}</p>
                        
                        {/* <img alt="maquillaje">{producto.image}</img> */}
                        {producto.isActive ? <button type="button" className=" btn btn-verde" onClick={() => {
                        agregarCarrito(props.datosDeProducto);
                        }} > Comprar ahora </button>  : <p>Agotado</p>}
                        <br></br>
                        <button type="button">Agregar a mis favoritos</button>
                    </section>
                </div>
 
            </div>
        )

}

export default Detalle1;