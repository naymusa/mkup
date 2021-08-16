import "./Header.css";

import React, { useState, useEffect } from "react";

import useFilter from "../../Home/Recomendados/useFilter.js";
import Productos from "../../Home/Productos/Productos";


function Buscador() {
  const [catalogo, setProducto] = useState([]);
  const [formulario, setValores] = useState({ term: "" });
  const { prodFilter } = useFilter(catalogo, formulario.term);

  //Obtiene la información que se ingresa en el input
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setValores({ ...formulario, [name]: value });
    // ... > combina el valor que tiene el formulario con el valor de name y lo convierte a objeto
  };

  useEffect(() => {
    fetch(
      "https://hungry-jang-a05289.netlify.app/.netlify/functions/server/catalogoApi/productos"
    )
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
      });
  },[]);

  return (
    <div className="navbar-section-info-search">
      <input
        placeholder="Quiero comprar..."
        name="term"
        onChange={handleInputChange}
      />
      <div className="container">
        <ul className="vitrinas">
          {formulario.term === "" ? null : prodFilter.map((productoIndividual) => {
            return (
              <li key={productoIndividual._id}>
                <Productos datosDeProducto={productoIndividual} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Buscador;