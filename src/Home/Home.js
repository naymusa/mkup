import React from "react";

import Recomendados from "./Recomendados/Recomendados";
import "./Productos/Productos.css"
import Detalle1 from "./Detalle/Detalle1";

import Banner from "./Banner/Banner1";



function Home() {
    return(
        <div>
            <Banner />
            <Detalle1 />
            <Recomendados />
            
            
        </div>
    )
}

// function Home() {
//     return(
//         <div>
//             <section className="header-navbar">
//                 <Header />
//                 <NavBar />
//             </section>
//             <Recomendados />
//             <Detalle idItem="5fbc19a65a3f794d72471163" />
//         </div>
//     )
// }

export default Home;