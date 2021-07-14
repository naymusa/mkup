import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import Productos from "../Productos/Productos";


function Recomendados() {
  // salida //[]
  //const [productos, setProductos] = useState(listaProductos);

  const [catalogo, setProducto] = useState([]);
  const [formulario, setValores] = useState ({ term: ""});
  
  // use efect ejecuta codigo escuchando a las dependencias ([])
  // las dependencias son el arreglo, y dentro se le mandan valores
  // si algun valor de la dependencia cambia se vuelve a ejecutar el codigo.


useEffect(() => {
  fetch("http://localhost:3003/catalogo/")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        setProducto(data.makeup)});
});

  

  return (
    <ul className="vitrinas">
      {catalogo.map((productoIndividual) => {
        return (
          <li key={productoIndividual._id}>
            <Productos datosDeProducto={productoIndividual} />
          </li>
        );
      })}
    </ul>
  );
}

export default Recomendados;

const listaProductos = [
  {
    isActive: true,
    _id: "elf-velvet",
    product_name: "Base Elf",
    modelo: "Color medio",
    description:
      "Maquillaje con media cobertura. Esta es la indicada para esos eventos especiales, duración hasta por 10hrs y sin bloqueador para que no reflejes en las fotos.",
    price: 360,
    category: "Maquillaje",
    brand: "Elf",
    sku: "elf-velvet",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image:
      "https://www.delsol.com.mx/wp-content/uploads/2020/05/7502261714090.jpg",
  },
  {
    isActive: true,
    _id: "Pestañas-lilly",
    product_name: "lilly Lashes",
    modelo: "mink lilly",
    description:
      "Tu makeup necesita ponerse más perrita y lo sabes, estas pestañas tienen el tamaño perfecto entre postisa y natural.",
    price: 65,
    category: "Pestañas",
    brand: "Lilly",
    sku: "Pestañas-lilly",
    createdAt: "2020-11-23T20:20:54.246Z",
    updatedAt: "2020-11-23T20:20:54.246Z",
    __v: 0,
    image:
      "https://www.sephora.com.mx/on/demandware.static/-/Sites-masterCatalog_Sephora/es_MX/dwa02a7c1f/images/hi-res/pestanas-postizas-sephora-collection-sephora-collection-lilly-lashes-for-sephora-collection-pestanas-postizas400021659674A.png",
  },
  {
    isActive: true,
    _id: "Brocha-kill",
    product_name: "Brocha-kill",
    description:
      "Este kit de 10 brochas son ideales para difuminar desde esa carita piciosa hasta tus ojitos pispiretos. Altamente recomendado, hermane.",
    price: 214,
    category: "Brochas",
    brand: "kill",
    sku: "kit-kill",
    createdAt: "2020-11-23T20:20:54.246Z",
    updatedAt: "2020-11-23T20:20:54.246Z",
    __v: 0,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71dkjUoss6L._AC_SY355_.jpg",
  },
  {
    isActive: true,
    _id: "elf-velvet",
    product_name: "Base Elf",
    modelo: "Color medio",
    description:
      "Maquillaje con media cobertura. Esta es la indicada para esos eventos especiales, duración hasta por 10hrs y sin bloqueador para que no reflejes en las fotos.",
    price: 360,
    category: "Maquillaje",
    brand: "Elf",
    sku: "elf-velvet",
    createdAt: "2020-11-23T20:20:54.245Z",
    updatedAt: "2020-11-23T20:20:54.245Z",
    __v: 0,
    image:
      "https://www.delsol.com.mx/wp-content/uploads/2020/05/7502261714090.jpg",
  },
  {
    isActive: true,
    _id: "Brocha-kill",
    product_name: "Brocha-kill",
    description:
      "Este kit de 10 brochas son ideales para difuminar desde esa carita piciosa hasta tus ojitos pispiretos. Altamente recomendado, hermane.",
    price: 214,
    category: "Brochas",
    brand: "kill",
    sku: "kit-kill",
    createdAt: "2020-11-23T20:20:54.246Z",
    updatedAt: "2020-11-23T20:20:54.246Z",
    __v: 0,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71dkjUoss6L._AC_SY355_.jpg",
  },
  {
    isActive: true,
    _id: "Pestañas-lilly",
    product_name: "lilly Lashes",
    modelo: "mink lilly",
    description:
      "Tu makeup necesita ponerse más perrita y lo sabes, estas pestañas tienen el tamaño perfecto entre postisa y natural.",
    price: 65,
    category: "Pestañas",
    brand: "Lilly",
    sku: "Pestañas-lilly",
    createdAt: "2020-11-23T20:20:54.246Z",
    updatedAt: "2020-11-23T20:20:54.246Z",
    __v: 0,
    image:
      "https://www.sephora.com.mx/on/demandware.static/-/Sites-masterCatalog_Sephora/es_MX/dwa02a7c1f/images/hi-res/pestanas-postizas-sephora-collection-sephora-collection-lilly-lashes-for-sephora-collection-pestanas-postizas400021659674A.png",
  },
];

// function Recomendados() {
//   const [productos, setProductos] = useState(listaProductos);

//   return (
//     <ul className="vitrinas">
//       {productos.map((productoIndividual) => {
//         return (
//           <li key={productoIndividual._id}>
//             <Productos datosDeProducto={productoIndividual} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// export default Recomendados;


