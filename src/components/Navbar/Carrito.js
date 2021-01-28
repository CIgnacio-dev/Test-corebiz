import React from 'react';
import { listaCarrito} from '../../ListaCarrito.json'
import cart from '../Navbar/shopping-cart.png'
import {Button, Badge, Popover, PopoverTitle, PopoverContent, Table} from 'react-bootstrap'

class Carro extends React.Component{
    constructor(){
        super();
        this.state={
            popoverOpen:false,
            listaCarrito
        };

    this.toggle=this.toggle.bind(this);
}

toggle(){
    this.setState(prevState =>({
        popoverOpen: !prevState.popoverOpen
    }));
}
    render(){
        const arregloCarrito=this.state.listaCarrito.map(
            (listaCarrito, i)=>{
                return(
                    <tr>
                      <td>{( i+= 1 )}</td>
                      <td>{ listaCarrito.titulo }</td>
                      <td>{ listaCarrito.precio }</td>
                    </tr>
                            );
                          }
                        )
        const total = this.state.listaCarrito.reduce((sum, value) => (sum + parseInt(value.precio)*1000), 0);                  
        return(
            <div className="cart col-md-7">
                <Button id="Popover1" variant ="light">
                <img src={cart} alt="cart" />
                    <Badge color="danger">{ arregloCarrito.length }</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={ this.state.popoverOpen } toggle={ this.toggle }>
                    <PopoverTitle>Listado de compras</PopoverTitle>
                    <PopoverContent>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Articulo</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                               { arregloCarrito }
                            </tbody>
                            <tfoot>
                            <tr>
                                <td ><b>TOTAL A PAGAR:</b></td>
                                <td></td>
                                <td>${ total }CLP</td>
                            </tr>
                            </tfoot>
                        </Table>
                    </PopoverContent>
                </Popover>
            </div>
        );
    }
}
export default Carro;