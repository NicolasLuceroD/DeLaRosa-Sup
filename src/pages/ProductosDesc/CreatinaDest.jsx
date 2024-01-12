import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import "../../index.css"

export const CreatinaDest = () => {
  return (
    <>
    <Header></Header>
    <div className="flex-container-creatina">
        
        <span className="span-creatina">
          <div className="contenedor-creatina">
          <h1 className="h1-desc-creatina">DESCRIPCION</h1>
          <br />
          <h4 className="h5-creatina">CREATINA MERVICK LAB</h4>
          <br />
            <p className="parrafo-largo-creatina">
            Favorece el crecimiento y la recuperación muscular post work. Es la
            perfecta mezcla de aminoácidos para ayudar a aquellos que quieren
            entrenar más fuerte y recuperarse más rápido. Usado después del
            entrenamiento, acelera la recuperación y maximiza el crecimiento
            muscular. Formulado con ingredientes de alta calidad, ayuda a todos
            los atletas a volverse fuertes, mantenerse saludables y en forma.
            </p>
            <br />
            <br />
            <ul className="lista1-creatina">
            <h3 className="h5-modo-uso-creatina">MODOS DE USO</h3>
              <li>Ingesta diaria máxima: 10 tabletas.</li>
              <li>Tomar de 3 a 5 tabletas 2 horas antes del almuerzo.</li>
              <li>3 a 5 tabletas 2 horas antes de la cena o bien antes y después de entrenar.</li>
            </ul>
          
          <br />
          
          <ul className="lista2-creatina"> 
          <h3 className="h3-beneficios-creatina">BENEFICIOS</h3>
            <li>Mezcla perfecta de aminoácidos seleccionados.</li>
            <li>Acelera la recuperación</li>
            <li>Maximiza el crecimiento muscular.</li>
            <li>Ayuda a mejorar el rendimiento.</li>
            <li>Proporciona los nutrientes necesarios para el desarrollo muscular.</li>  
          </ul>
            </div>
        </span>
     
      </div>




    <Footer></Footer>
    </>
  )
}
