import React from 'react';
import { Card, Button, CardDeck } from 'react-bootstrap'
import {listaCarrito} from '../../ListaCarrito.json'
import Axios from 'axios';

class Products extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    agregarCarrito(){
        listaCarrito.push({
            "title": this.props.products
        })
    }
    componentDidMount() {
        Axios.get('https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products')
            .then(response => {
                this.setState({ products: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { products } = this.state
        
        return (
        
            <CardDeck  className="container col-md-10" >
                <h3>Mais Vendidos</h3>
                <Card key={products.product} className="container col-md-3" >
                    <Card.Img variant="top" src="https://corebiz-test.herokuapp.com/images/product-1.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                    <Button onClick={this.agregarCarrito} variant="dark">Comprar</Button>
                    </Card.Body>

                </Card>
                <Card key={products.product} className="container col-md-3">
                    <Card.Img variant="top" src="https://corebiz-test.herokuapp.com/images/product-2.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Button variant="dark">Comprar</Button>
                    </Card.Body>

                </Card>
                <Card key={products.product} className="container col-md-3">
                    <Card.Img variant="top" src="https://corebiz-test.herokuapp.com/images/product-3.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Button variant="dark">Comprar</Button>
                    </Card.Body>

                </Card>
                <Card className="container col-md-3">
                    <Card.Img variant="top" src="https://corebiz-test.herokuapp.com/images/product-4.png"/>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Button variant="dark">Comprar</Button>
                    </Card.Body>

                </Card>
            </CardDeck>
        );
    }
}


export default Products