import { useEffect, useState } from "react";

// entrada lista prod, term
function useFilter(listaProductos = [], term) {
  const [prodFilter, setNewProdFilter] = useState([]);

  useEffect(() => {
    // proceso filter
    const filtrados = listaProductos.filter((producto) => {
      return producto.product_name.toLowerCase().includes(term.toLowerCase()) || producto.brand.toLowerCase().includes(term.toLowerCase());
      //toLowerCase= CUANDO TENGAS TEXTO EN MAYÚSCULAS LO PASE A MINUSCULAS - toUperCase = en mayúsculas
    });
    setNewProdFilter(filtrados);
  }, [listaProductos, term]);

  // salida prodFilter
  return { prodFilter };
}

export default useFilter;