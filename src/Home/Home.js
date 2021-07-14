import React from "react";

import NavBar from "../NavBar/NavBar";
import Recomendados from "./Recomendados/Recomendados";
import "./Productos/Productos.css"

import Header from "../NavBar/Header/Header";
import Banner from "./Banner/Banner1";



function Home() {
    return(
        <div>
            <Banner />
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