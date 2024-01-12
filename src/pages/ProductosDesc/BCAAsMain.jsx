// import Imagenes from "../../assets/Imagenes";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "../../index.css"


export const BCAAsMain = () => {
  return (
    <>
      <Header />
      <div className="flex-container">
        {/* <img src={Imagenes.EnaDest} alt="Aminoacidos Ena 4500" className="amino4500EnaMain" /> */}
        <span className="span">
          <div className="contenedor2">
          <h1 className="h1-desc">DESCRIPCION</h1>
          <br />
          <h4 className="h5amino">AMINO 4500</h4>
          <br />
            <p className="parrafolargo">
            Favorece el crecimiento y la recuperación muscular post work. Es la
            perfecta mezcla de aminoácidos para ayudar a aquellos que quieren
            entrenar más fuerte y recuperarse más rápido. Usado después del
            entrenamiento, acelera la recuperación y maximiza el crecimiento
            muscular. Formulado con ingredientes de alta calidad, ayuda a todos
            los atletas a volverse fuertes, mantenerse saludables y en forma.
            </p>
            <br />
            <br />
            <ul className="lista1">
            <h3 className="h5-modo-uso">MODOS DE USO</h3>
              <li>Ingesta diaria máxima: 10 tabletas.</li>
              <li>Tomar de 3 a 5 tabletas 2 horas antes del almuerzo.</li>
              <li>3 a 5 tabletas 2 horas antes de la cena o bien antes y después de entrenar.</li>
            </ul>
          
          <br />
          
          <ul className="lista2"> 
          <h3 className="h3-beneficios">BENEFICIOS</h3>
            <li>Mezcla perfecta de aminoácidos seleccionados.</li>
            <li>Acelera la recuperación</li>
            <li>Maximiza el crecimiento muscular.</li>
            <li>Ayuda a mejorar el rendimiento.</li>
            <li>Proporciona los nutrientes necesarios para el desarrollo muscular.</li>  
          </ul>

          {/* <div className="container2">
          <img src={Imagenes.tablaBCAA} alt="" className="tabla-nutricional"/>
          </div>
          
            <div className="parrafo-tabla">
              <h1>Tabla Nutricional</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In mollitia explicabo magni harum, possimus corporis provident repellendus ex perferendis aliquam laboriosam consectetur nemo unde facere. Ab consequuntur repudiandae officiis doloribus.</p>
            </div> */}
            </div>
        </span>
     
      </div>
    
      <Footer />
    </>
  );
};