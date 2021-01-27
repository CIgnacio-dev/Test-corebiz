import React from 'react';
import {Carousel} from 'react-bootstrap'
import Banner from '../Banner/Banner.jpg'

class Carous extends React.Component {
    render (){
        return(
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={Banner}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={700}>
    <img
      className="d-block w-100"
      src={Banner}
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Banner}
      alt="Fourth slide"
    />
  </Carousel.Item>
</Carousel>

    )
}}

export default Carous