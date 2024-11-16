import React from 'react';
import Producto from './Componentes/Producto';
import './App.css';
import {Container, Row} from 'reactstrap';
import Navegacion from './Componentes/Navegacion';
import listaProductos from './listaProductos.json';//Utilizo esta manera de importar y no llaves{} porque da error de sintaxis causados por las nuevas versiones 

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      listaProductos: listaProductos.listaProductos //poner solo listaProductos tambien generaba error.
    };
  }

  render() {
    const arregloComponentes = this.state.listaProductos.map(
      (listaProductos, i) =>{
        return(
          <Producto
          key={i}
          imagen={listaProductos.imagen}
          titulo={listaProductos.titulo}
          precio={listaProductos.precio}
          descripcion={listaProductos.descripcion}
          stock={listaProductos.stock}
          />
        )
      }
    );
    return (
      <Container>
        <Navegacion titulo="Tienda de telescopios Astro Wanderer"/>
        <Row>
          {arregloComponentes}
        </Row>
      </Container>
      
    );
  }
}

export default App;