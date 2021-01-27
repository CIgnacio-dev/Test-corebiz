import React from 'react'
import { Button } from 'react-bootstrap'
import mail from '../Footer/mail.png'
import heatset from '../Footer/heatset.png'
import logo from '../Footer/logo_alt.png'
import vtex from '../Footer/vtex.png'

class Footer extends React.Component {
    render() {
        return (
            <footer style={{ backgroundColor: 'black' }}>
                <div className="container" >
                    <div className="row" style={{ color: 'white', textAlign: 'left' }}>
                        <div className="localizacion col-md-4">
                            Localização
                    <hr />

                            <div className="datos " >
                                <p>Avenida Andromeda, 2000.Bloco 6 e 8</p>
                                <p>Alphavile SP</p>
                                <p>brasil@corebiz.ag</p>
                                <p>+55 11 3090 1039</p>
                            </div>
                        </div>
                        <div className="contacto col-md-4" style={{ color: 'white', alignItems: 'center' }}>
                            <hr /><hr />
                            <Button variant="light" size="sm">
                                <img src={mail} alt="mail" />
                                ENTRE EM CONTATO
                            </Button>{' '}
                            <hr /><hr />
                            <Button variant="light" size="sm">
                                <img src={heatset} alt="heatset" />
                                FALE COM O NOSSO<br />CONSULTOR ONLINE
                            </Button>{' '}
                        </div>
                        <div className="made col-md-4" >
                            <div className="createdby">
                                Created by
                                <br></br>
                                <img src={logo} alt="logo" />

                                <div className="poweredby">
                                    Powered by
                                <br></br>
                                    <img src={vtex} alt="vtex" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer
