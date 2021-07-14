import React from "react";
import {useParams } from "react-router-dom";

class Detalle extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            nombre: null,
            descripcion: null,
            price: 0,
            isActive: false
        }
    }

    componentDidMount(){
        fetch ("https://ecomerce-master.herokuapp.com/api/v1/item/" + this.props.idItem)
        .then(response => response.json())
        .then(data => this.setState ({
            nombre: data.product_name,
            descripcion: data.description,
            price: data.price,
            isActive: data.isActive
        }))
    }

    render (){

        return (
            <div>
                <h3>Detalle de Producto</h3>

                <div>

                    <h4>{this.state.product_name}</h4>

                    <p>{this.state.description}</p>
                    <p>$ {this.state.price}</p>
                    {/* <img>{this.state.image}</img> */}
                    {this.state.isActive ? <button>Comprar</button> : <p>Agotado</p>}
                </div>
 
            </div>
        )
    }

}

export default Detalle;