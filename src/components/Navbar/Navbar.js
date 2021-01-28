import React from 'react'
import { Navbar, Form } from 'react-bootstrap';
import logo from '../Navbar/logo.png'
import account from '../Navbar/account.png'
import Carro from './Carrito'


class NavBar extends React.Component {
    render (){
        return(
        <nav>
            <>
                <Navbar bg="light">
                    <div className="container col-md-9">
                    <div className="logo" >
                        <img src={logo} alt=" " width="200"></img>
                    </div>
                    <div className="navbar-nav col-md-8">
                        <Form >
                            <input style={{ width:'30rem' }} type="search" placeholder="O que está procurando?" />
                            <i className="fa fa-search"></i>

                        </Form>

                        <div className="user col-md-6">
                            <img src={account} alt="Profile" />Minha Conta
                    </div>
                        
                    </div>
                    <Carro/>
                    </div>
                    
                </Navbar>
            </>
        </nav>
        )
}}

export default NavBar