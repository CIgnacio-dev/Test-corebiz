import React from 'react'
import { Navbar, Form } from 'react-bootstrap';
import logo from '../Navbar/logo.png'
import account from '../Navbar/account.png'
import cart from '../Navbar/shopping-cart.png'


class NavBar extends React.Component {
    render (){
        return(
        <nav>
            <>
                <Navbar bg="light" >
                    <div className="container">
                    <div className="logo" >
                        <img src={logo} alt=" " width="200"></img>
                    </div>
                    <div className="navbar-nav">
                        <Form inline>
                            <input type="search" placeholder="O que está procurando?" width="100%" />
                            <i className="fa fa-search"></i>

                        </Form>

                        <div className="user">
                            <img src={account} alt="Profile" />Minha Conta
                    </div>
                        <div className="cart">
                            <img src={cart} alt="Profile" />
                        </div>
                    </div>
                    </div>
                </Navbar>
            </>
        </nav>
        )
}}

export default NavBar