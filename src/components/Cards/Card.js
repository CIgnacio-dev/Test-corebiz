import React from 'react';
import Produto from './Productos'



class Card extends React.Component {
   render() {
      return (
            <div className="container">
               <h1 className="titulo">Mais Vendidos</h1>
               <hr/>
               <Produto />
            </div>
      );
   }
}



export default Card;