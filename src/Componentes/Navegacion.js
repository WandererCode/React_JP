import React from "react";
import {NavItem, NavLink, Nav, NavbarBrand, Navbar} from "reactstrap";
import Carro from "./Carro";

class Navegacion extends React.Component{
    render(){
        return(
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">ElementoNavegacion1</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">ElementoNavegacion2</NavLink>
                    </NavItem>
                    <NavItem>
                        <Carro/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
export default Navegacion;