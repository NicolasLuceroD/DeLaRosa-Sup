import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Imagenes from '../assets/Imagenes';

export const Header = () => {
  return (

    <>
  
  <Navbar collapseOnSelect expand="lg" className="bg-dark">

      <Container  >
        <Navbar.Brand href="/"><img className='headerFoto' src={Imagenes.LOGOpositivo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ml-auto">
           

            <NavDropdown className='header'  title={"Suplementos"} id="basic-nava-dropdown-" backgroundColor='dark'>
              <NavDropdown.Item href="/protNac">Proteinas</NavDropdown.Item>
              <NavDropdown.Item href="/aminoacidosNac">Aminoacidos</NavDropdown.Item>
              <NavDropdown.Item href="/preWorkNac">Pre Work</NavDropdown.Item>
              <NavDropdown.Item href="/creatinaNac">Creatinas</NavDropdown.Item>
              <NavDropdown.Item href="/carnitinaNac">Carnitinas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/" className='OtrosNav' >Accesorios</Nav.Link>
             

            <div className='NavDerecha'>
            <Nav.Link href="/somos" className='header' >Sobre Nosotros</Nav.Link>
          
            <Nav.Link href="/contacto" className='header'  >Contacto</Nav.Link>

            <Nav.Link href="/contacto" className='header'  >Ayuda</Nav.Link>
            </div>

           

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
      </>
  )
}
