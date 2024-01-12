import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import Modals from "../../components/Modals";
import styled from "styled-components";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Imagenes from "../../assets/Imagenes";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";


export const CreatinaNac = () => {

  const [estadoModal1, setEstadoModal1] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);
  const [estadoModal3, setEstadoModal3] = useState(false);
  const [estadoModal4, setEstadoModal4] = useState(false);
  const [estadoModal5, setEstadoModal5] = useState(false);
  const [estadoModal6, setEstadoModal6] = useState(false);
  const [estadoModal7, setEstadoModal7] = useState(false);
  const [estadoModal8, setEstadoModal8] = useState(false);

  return (
    <>
      <Header />

      <h3 className="titulo-prot-nac">
        <strong>CREATINAS NACIONALES</strong>
      </h3>

      <div className="cartas text-center">
        <Card style={{ width: "18rem" }} className="cardMain" >
          <Card.Img
            variant="top"
            src={Imagenes.proteinaEnaPerformance}
            className="foto-prod"
          />
          <hr />
          <Card.Body>
            <Card.Title>Ena 100% Whey</Card.Title>
            <Card.Text className="desc-cartas-proteinas">
              <strong>Precio: $22.000</strong>
            </Card.Text>
            <br />
            <ContenedorBotones>
              <Button variant="danger" onClick={() => setEstadoModal1(true)}>MAS INFO</Button>
            </ContenedorBotones>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="cardMain">
          <Card.Img
            variant="top"
            src="proteinaBodyAdvance.png"
            className="foto-prod"
          />
          <hr />
          <Card.Body>
            <Card.Title>Body Advance Whey Protein</Card.Title>
            <Card.Text className="desc-cartas-proteinas">
              <strong>Precio: $12.850</strong>
            </Card.Text>
            <br />
            <ContenedorBotones>
              <Button variant="danger" onClick={() => setEstadoModal2(!estadoModal2)}>
                MAS INFO
              </Button>
            </ContenedorBotones>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="cardMain">
          <Card.Img
            variant="top"
            src="proteinaEna.webp"
            className="foto-prod"
          />
          <hr />
          <Card.Body>
            <Card.Title>Ena TrueMade Whey Protein</Card.Title>
            <Card.Text className="desc-cartas-proteinas">
              <strong>Precio: $23.500</strong>
            </Card.Text>
            <br />
            <ContenedorBotones>
              <Button variant="danger" onClick={() => setEstadoModal3(!estadoModal3)}>
                MAS INFO
              </Button>
            </ContenedorBotones>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="cardMain">
          <Card.Img
            variant="top"
            src="proteinaNutriLab.jpg"
            className="foto-prod"
          />
          <hr />
          <Card.Body>
            <Card.Title>Nutrilab Classic Line Pro 2.0</Card.Title>
            <Card.Text className="desc-cartas-proteinas">
              <strong>Precio: $14.478</strong>
            </Card.Text>
            <br />
            <ContenedorBotones>
              <Button variant="danger" onClick={() => setEstadoModal4(!estadoModal4)}>
                MAS INFO
              </Button>
            </ContenedorBotones>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="cardMain">
          <Card.Img
            variant="top"
            src="proteinaStarNutrition.jpg"
            className="foto-prod"
          />
          <hr />
          <Card.Body>
            <Card.Title>Star Nutrition Whey Protein </Card.Title>
            <Card.Text className="desc-cartas-proteinas">
              <strong>Precio: $26.000</strong>
            </Card.Text>
            <br />
            <Button variant="danger" onClick={() => setEstadoModal5(!estadoModal5)}>
                MAS INFO
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="cardMain">
          <Card.Img
            variant="top"
            src="proteinaStrength.jpg"
            className="foto-prod"
          />
          <hr />
          <Card.Body>
            <Card.Title>Xtrength Whey Advanced</Card.Title>
            <Card.Text className="desc-cartas-proteinas">
              <strong>Precio: $14.980</strong>
            </Card.Text>
            <br />
            <Button variant="danger" onClick={() => setEstadoModal6(!estadoModal6)}>
                MAS INFO
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="cardMain">
          <Card.Img
            variant="top"
            src="proteinaMonster.jpg"
            className="foto-prod"
          />
          <hr />
          <Card.Body>
            <Card.Title>Gentech Monster Size</Card.Title>
            <Card.Text className="desc-cartas-proteinas">
              <strong>Precio: $29.450</strong>
            </Card.Text>
            <br />
            <Button variant="danger" onClick={() => setEstadoModal7(!estadoModal7)}>
                MAS INFO
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="cardMain">
          <Card.Img
            variant="top"
            src="proteinaHochSport.jpg"
            className="foto-prod"
          />
          <hr />
          <Card.Body>
            <Card.Title>Hoch Sport Bio Prot</Card.Title>
            <Card.Text className="desc-cartas-proteinas">
              <strong>Precio: $18.500</strong>
            </Card.Text>
            <br />
            <Button variant="danger" onClick={() => setEstadoModal8(!estadoModal8)}>
                MAS INFO
            </Button>
          </Card.Body>
        </Card>
      </div>

      {/* Modal 1 */}
      <Modals
        estado={estadoModal1}
        cambiarEstado={setEstadoModal1}
        titulo="PROTEINAS"
      >
        <Contenido>
          <h2 className="tituloProductos">Ena 100% Whey</h2>

          <br />

          <p className="descripcionProductos">
            La suplementación con proteínas de suero (Whey protein) es ideal
            para complementar tus desayunos, tus meriendas y tu snack recovery
            post entreno. Los 20 gs de proteínas por porción de 100% WHEY la
            posicionan como una gran opción para toda la población fisicamente
            activa, tanto hombres como mujeres. La calidad de 100% WHEY es ideal
            para favorecer la síntesis de masa muscular, ya que es rica en
            aminoácidos ramificados conocidos como BCAA.
          </p>

          <Link
            //className="btn btn-success"
            to="https://api.whatsapp.com/send?phone=+3815903793&text=Quiero%20mas%20info"
            target="_blank"
          >
              <Button className="btn btn-success botonProducto"> 

              <BsWhatsapp />

              </Button>
          </Link>
        </Contenido>
      </Modals>

      {/* Modal 2 */}

      <Modals
        estado={estadoModal2}
        cambiarEstado={setEstadoModal2}
        titulo="PROTEINAS"
      >
        <Contenido>
        <h2 className="tituloProductos">Body Advance Whey Protein</h2>
          <br />
          <p className="descripcionProductos">
            Mantener los niveles adecuados de proteína en la dieta es la clave
            para una pronta recuperación y aumento de masa muscular magra.
            Después de un entrenamiento, el cuerpo se prepara para recibir
            nutrientes y se encuentra listo para el proceso de recuperación. A
            veces, los momentos no son suficientes para preparar a tiempo una
            comida, ese instante es ideal para optar por un batido
            post-entrenamiento, y así incorporar los nutrientes básicos que el
            cuerpo necesita.
          </p>
          <Link
            //className="btn btn-success"
            to="https://api.whatsapp.com/send?phone=+3815903793&text=Quiero%20mas%20info"
            target="_blank"
          >
              <Button className="btn btn-success botonProducto"> 

              <BsWhatsapp />

              </Button>
          </Link>
        </Contenido>
      </Modals>

      {/* Modal 3 */}

      <Modals
        estado={estadoModal3}
        cambiarEstado={setEstadoModal3}
        titulo="PROTEINAS"
      >
        <Contenido>
        <h2 className="tituloProductos">Ena TrueMade Whey</h2>
          <br />
          <p className="descripcionProductos">
            Whey Protein Isolate (WPI) es la forma más pura de proteína de suero
            que existe actualmente. Al sumarla a nuestra fórmula clásica (WPC +
            WPI) elevamos el estándar de calidad, asegurándote un mejor producto
            en cada scoop para que logres la performance que buscas. TRUEMADE
            contiene un blend de máxima pureza con una rápida absorción y una
            excelente calidad, garantizando una efectiva y rápida recuperación
            del tejido muscular
          </p>
          <Link
            //className="btn btn-success"
            to="https://api.whatsapp.com/send?phone=+3815903793&text=Quiero%20mas%20info"
            target="_blank"
          >
              <Button className="btn btn-success botonProducto"> 

              <BsWhatsapp />

              </Button>
          </Link>
        </Contenido>
      </Modals>

      {/* Modal 4 */}

      <Modals
        estado={estadoModal4}
        cambiarEstado={setEstadoModal4}
        titulo="PROTEINAS"
      >
        <Contenido>
        <h2 className="tituloProductos">Nutrilab Classic Line Pro 2.0</h2>
          <br />
          <p className="descripcionProductos">
            Proteínas de excelente calidad de suero lácteo y vitaminas en
            concentraciones que proporcionan un rendimiento físico óptimo.
            Acelera la reconstrucción y recuperación de tus músculos
            desarrollándolos de manera consistente..
          </p>

          <Link
            //className="btn btn-success"
            to="https://api.whatsapp.com/send?phone=+3815903793&text=Quiero%20mas%20info"
            target="_blank"
          >
              <Button className="btn btn-success botonProducto"> 

              <BsWhatsapp />

              </Button>
          </Link>
        </Contenido>
      </Modals>

      {/* Modal 5 */}

      <Modals
        estado={estadoModal5}
        cambiarEstado={setEstadoModal5}
        titulo="PROTEINAS"
      >
        <Contenido>
        <h2 className="tituloProductos">Star Nutrition Premium </h2>
          <br />
          <p className="descripcionProductos">
          Compuesta por ultra concentrado, aislado e hidrolizado de suero de máxima pureza, obtenidos por métodos no agresivos que garantizan la calidad y estabilidad del producto.
          Su agradable sabor y alta disolución lo convierten en la opción inteligente a la hora de agregar proteínas de alto valor biológico a nuestra dieta, o como parte de un programa nutricional deportivo.
          100% NATURAL GRASS FED PROTEIN
          </p>

          <Link
            //className="btn btn-success"
            to="https://api.whatsapp.com/send?phone=+3815903793&text=Quiero%20mas%20info"
            target="_blank"
          >
              <Button className="btn btn-success botonProducto"> 

              <BsWhatsapp />

              </Button>
          </Link>
        </Contenido>
      </Modals>

      {/* Modal 6*/}

      <Modals
        estado={estadoModal6}
        cambiarEstado={setEstadoModal6}
        titulo="PROTEINAS"
      >
        <Contenido>
        <h2 className="tituloProductos">Xtrength Whey Advanced</h2>
          <br />
          <p className="descripcionProductos">
          Es el blend de whey protein con mejor calidad y pureza del mercado, gracias a que contiene Whey Protein Isolate (WPI), la proteína de suero de mayor pureza a nivel mundial, Whey Protein Hydrolysate (WPH), la de asimilación más rápida y Whey Protein Concentrate (WPC), la más equilibrada. Juntas son una combinación perfecta, resultando un producto de enorme calidad, con elevada asimilación asegurándote una rápida recuperación y crecimiento muscular.
          </p>

          <Link
            //className="btn btn-success"
            to="https://api.whatsapp.com/send?phone=+3815903793&text=Quiero%20mas%20info"
            target="_blank"
          >
              <Button className="btn btn-success botonProducto"> 

              <BsWhatsapp />

              </Button>
          </Link>
        </Contenido>
      </Modals>


          {/* Modal 7*/}

          <Modals
              estado={estadoModal7}
              cambiarEstado={setEstadoModal7}
              titulo="PROTEINAS"
            >
              <Contenido>
              <h2 className="tituloProductos">Gentech Monster Size</h2>
                <br />
                <p className="descripcionProductos">
                La proteína de suero de leche, también conocida como whey protein, es uno de los suplementos más utilizados cuando el objetivo es aumentar masa muscular o hipertrofiar. ¿La razón? Son una excelente fuente de aminoácidos esenciales (contiene 9) y elevan los aminoácidos plasmáticos
                </p>

                <Link
            //className="btn btn-success"
            to="https://api.whatsapp.com/send?phone=+3815903793&text=Quiero%20mas%20info"
            target="_blank"
          >
              <Button className="btn btn-success botonProducto"> 

              <BsWhatsapp />

              </Button>
          </Link>
              </Contenido>
            </Modals>

            {/* Modal 8*/}
            <Modals
              estado={estadoModal8}
              cambiarEstado={setEstadoModal8}
              titulo="PROTEINAS"
            >
              <Contenido>
              <h2 className="tituloProductos">Hoch Sport Bio Prot</h2>
                <br />
                <p className="descripcionProductos">
                BIOPROT es una fuente de proteínas lácteas de máxima pureza y disolución instantánea, con agregado de Aminoacidos Ramificados y Glutamina que la convierten en la mejor opción para el máximo crecimiento muscular
                </p>

                <Link
            //className="btn btn-success"
            to="https://api.whatsapp.com/send?phone=+3815903793&text=Quiero%20mas%20info"
            target="_blank"
          >
              <Button className="btn btn-success botonProducto"> 

              <BsWhatsapp />

           </Button>
          </Link>
              </Contenido>
            </Modals>



      <Footer />
    </>
  )
}


const ContenedorBotones = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 29px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
