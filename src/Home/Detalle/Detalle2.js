import React, { useState } from "react";

function detalle2(props) {
  const item = {
    image: null,
    nombre: props.idItem.product_name,
    descripcion: props.idItem,
    price: props.idItem,
    isActive: false,
  };

  const [producto, setProducto] = useState(item);

  return (
    <div>
      <h3>Detalle de Producto</h3>

      <div>
        <h4>{nombre}</h4>

        <p>{descripcion}</p>
        <p>$ {price}</p>
        {/* <img>{this.state.image}</img> */}
        {isActive ? <button>Comprar</button> : <p>Agotado</p>}
      </div>
    </div>
  );
}

export default detalle2;

/* En home declaramos detalle2 así:
<detalle2 iditem={listaProductos[0]} */
