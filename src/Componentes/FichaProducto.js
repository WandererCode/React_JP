import React from "react";
import {CardImg, ModalFooter, ModalBody, ModalHeader, Modal, Button, Container} from 'reactstrap';
import './FichaProducto.css';
import listaCarrito from '../listaCarrito.json'//Utilizo esta manera de importar y no llaves{} porque da error de sintaxis causados por las nuevas versiones

class FichaProducto extends React.Component{
    constructor(props){
        super();
        this.state = {
            modal:false,
            listaCarrito: listaCarrito.listaCarrito,
            stock: props.props.stock
        };

        this.toggle = this.toggle.bind(this);
        this.agregarCarrito = this.agregarCarrito.bind(this);
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    agregarCarrito(){
        listaCarrito.listaCarrito.push({ //listacarrito.push no sirve debido a como llame al json
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
        });
        this.setState(prevState => ({
            modal: !prevState.modal
        }));

        // eslint-disable-next-line eqeqeq
        if(this.state.stock != 0){
            this.setState(prevState => ({
            stock: prevState.stock -1
            }));
        }else{
            alert('No quedan más unidades de este producto disponibles para comprar.')
        } 

        const badge = document.getElementById("Badge1");
        badge.innerText = listaCarrito.listaCarrito.length;
    }

    render(){
            return(
                <Container>
                    <Button onClick={this.toggle}>Ver ficha</Button>
                    <Modal isOpen={this.state.modal}>
                        <ModalHeader>{this.props.props.titulo}</ModalHeader>
                        <ModalBody>
                            <CardImg src={this.props.props.imagen}/>
                            <p>El detalle del producto seleccionado es el siguiente: </p>{this.props.props.descripcion}
                            <p>Este producto tiene un valor de <b>{this.props.props.precio}</b> clp</p>
                            <p>Hay <b>{this.state.stock}</b> unidades de este producto disponibles.</p>
                        </ModalBody>
                        <ModalFooter className="ModalFooter">
                            <Button color="primary" onClick={this.agregarCarrito}>Agregar al Carrito</Button>
                            <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
                        </ModalFooter>
                    </Modal>
                </Container>
            );
    }
}
export default FichaProducto;