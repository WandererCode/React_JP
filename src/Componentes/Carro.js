import React from "react";
import {Popover, PopoverHeader, PopoverBody, Table, Badge, Button } from "reactstrap";
import listaCarrito from '../listaCarrito.json'; //Utilizo esta manera de importar y no llaves{} porque da error de sintaxis causados por las nuevas versiones

class Carro extends React.Component{
    constructor(){
        super();
        this.state = {
            popoverOpen: false,
            listaCarrito: listaCarrito.listaCarrito //de esta manera no da error de sintaxis

        };

        this.toggle = this.toggle.bind(this);
        
    }

    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    
    sumaTotal(){
        let total = 0;
        // eslint-disable-next-line no-unused-vars
        let sumaProductos = this.state.listaCarrito.map(
            // eslint-disable-next-line array-callback-return
            (listaCarrito) => {
                total += parseFloat(listaCarrito.precio) * 1000;
            }
        )
        return(total)
    }
    

    render(){
        const arregloCarrito = this.state.listaCarrito.map(
            (listaCarrito, i) => {
                return (
                    <tr>
                        <td>{(i += 1)}</td>
                        <td>{listaCarrito.titulo}</td>
                        <td>{listaCarrito.precio}</td>
                    </tr>

                );
            }
        )
        return(
            <div>
                <Button id="Popover1" color="info">
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="secondary" id="Badge1">{listaCarrito.listaCarrito.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
                    <PopoverHeader>Listado de compras</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {arregloCarrito}
                            </tbody>
                            <tfoot>
                                <td>Total: </td>
                                <td></td>
                                <th>{Intl.NumberFormat("de-DE").format(this.sumaTotal())} pesos</th>
                            </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default Carro;