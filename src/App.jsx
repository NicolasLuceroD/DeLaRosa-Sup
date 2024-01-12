import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Sliderr } from "./components/Sliderr";
import Imagenes from "./assets/Imagenes";
import { Link } from "react-router-dom";


export const App = () => {

  return (
    <>
      <Header />
   
      <Carousel data-bs-theme="dark" className="carrousel"  >
      <Carousel.Item >
        <img
           className='carrousel'
          src={Imagenes.Carrusel} 
          alt="First slide" 
          width="100%"
        />     
      </Carousel.Item>
      <Carousel.Item className='carrousel'>
        <img
          className='carrousel'
          src={Imagenes.Carrousel3}
          alt="Second slide"     
          width="100%"   
        />  
      </Carousel.Item>      

      <Carousel.Item className='carrousel'>
        <img
          className='carrousel'
          src="https://www.demusculos.com/shop/c/24-category_default/creatina.jpg" 
          alt="Second slide"     
          width="100%"   
        />  
      </Carousel.Item>    
        
    </Carousel>
      <br />
      <br />
      <br />

      
      <h3 className="h3-productos-destacados">PRODUCTOS DESTACADOS</h3>
      
      <br />
      <br />
      <div className="cartas text-center">
      <Card style={{ width: '18rem' }} className="cardMain" border="">
      <Card.Img variant="top" src={Imagenes.amino4500Ena} className="foto-prod"/>
      <hr />
      <Card.Body>
        <Card.Title> BCAAs</Card.Title>
        <Card.Text className="desc-cartas">
        AMINO 4500 <br />
        Producto Nacional
        </Card.Text>
      <br />
       <Link to="bcaa"><Button variant="danger" className="masInfo">MAS INFO</Button> </Link> 
      </Card.Body>
    </Card>




    <Card style={{ width: '18rem' }} className="cardMain">
      <Card.Img variant="top" src={Imagenes.creatinaMeverick} className="foto-prod" />
      <hr />
      <Card.Body>
        <Card.Title>CREATINA</Card.Title>
        <Card.Text className="desc-cartas">
          Aumento de masa muscular y mayor fuerza en tus entrenamientos.
        </Card.Text>
        <br />
        <Link to="creatinaDest"><Button variant="danger" className="masInfo">MAS INFO</Button></Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className="cardMain">
      <Card.Img variant="top" src={Imagenes.proteinaEnaPerformance} className="foto-prod" />
      <hr />
      <Card.Body>
        <Card.Title>PROTEINA</Card.Title>
        <Card.Text className="desc-cartas">
          Rapida absorcion de proteina de alta calidad post entrenamiento.
        </Card.Text>
        <br />
        <Link to="proteEnaPerformance"><Button variant="danger" className="masInfo">MAS INFO</Button></Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className="cardMain">
      <Card.Img variant="top" src={Imagenes.preEntrenoStar} className="foto-prod" />
      <hr />
      <Card.Body>
        <Card.Title>PRE WORK</Card.Title>
        <Card.Text className="desc-cartas">
          Mejora fuerza, potencia muscular y rendimiento.
        </Card.Text>
        <br />
        <Link to="preWorkDest"><Button variant="danger" className="masInfo">MAS INFO</Button></Link>
      </Card.Body>
    </Card>
    
    <br />
    
    </div>
    <br />
    <br />


      <Sliderr/>
    
      <Footer/> 

    </>
  );
};
