import React, { useContext } from "react";
import { AuthContext } from "../../Context/Auth/Auth.js";

import { Link } from "react-router-dom";
import "./Productos.css";



function Productos(props) {
  console.log(props)
  // const { session , agregarCarrito , quitarDeCarrito} = useContext(AuthContext);
    const {agregarCarrito , quitarDeCarrito} = useContext(AuthContext);

  return (
    <div className="contenedor-cards">
      <div className="cards">

        <Link to={`/detalle-producto/${props.datosDeProducto._id}`}>
          <img alt="maquillaje" clasName="imagenProducto" src={props.datosDeProducto.image} />
        </Link>

        <p>{props.datosDeProducto.product_name}</p>
        <p>${props.datosDeProducto.price}</p>
        {props.carrito ? (

        <button type="button" className=" btn btn-rojo" onClick={() => {
          quitarDeCarrito(props.datosDeProducto);
        }}>Eliminar</button> ) : (

        <button type="button" className=" btn btn-verde" onClick={() => {
          agregarCarrito(props.datosDeProducto);
        }} > Agregar al carrito </button> )}

       
        {/* /* ternario: 3 partes- Si el usuario está logueado ENTONCES aparecerá el botón*/}
      </div>
    </div>
  );
}

export default Productos;
