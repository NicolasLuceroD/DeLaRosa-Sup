import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "../index.css";
import Imagenes from "../assets/Imagenes"




export const Footer = () => {
  return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <br />
                  <br />
                  <MDBIcon icon="gem" className="me-3" />
                  DeLaRosa Suplementos
                </h6>
                <p>
                  Ubicada en San Miguel de Tucuman, nuestra tienda de
                  suplementos deportivos ofrece una amplia gama de productos
                  destinados a complementar la dieta de atletas, deportistas y
                  cualquier persona que busque mejorar su rendimiento físico y
                  salud general.
                </p>
                <div className="logo-jockey">
                  <img src={Imagenes.jockeyLogo} alt="" className="logoJockey" />
                  
                  <img src={Imagenes.LOGOnegro} alt="" className="logoJockey" />

                  
                </div>

              
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <br />
                <br />
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-3" />
                  San Miguel de Tucuman
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  FrancoDeLaRosa@gmail.com
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  <a
                    className="text-reset fw-bold"
                    href="https://www.instagram.com/delarosa.sup/"
                    target="_blank"
                  >
                    Instagram
                  </a>

                </p>
             <br />
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d890.0592370642005!2d-65.2037348!3d-26.8324149!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0fe2a1467f%3A0x729488abe659a013!2sAhualli%20Gym!5e0!3m2!1ses-419!2sar!4v1698437635425!5m2!1ses-419!2sar"          
                  className='w-100'
                  height='300'
                  loading='lazy'
                ></iframe>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright:
          <a target="_blank" className="text-reset fw-bold" href="https://www.instagram.com/delarosa.sup/" >
            DeLaRosaSuplementos
          </a>
        </div>
      </MDBFooter>
    </>
  );
};
