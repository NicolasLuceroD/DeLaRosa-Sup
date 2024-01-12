import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import "../Styles/Contacto.css"



export const Contacto = () => {

 


  return (      
  <>
  <Header/>

    <div className="FormCompleto"> 
        <form action="https://formsubmit.co/luciano_azalot2010@hotmail.com" method="POST">
          
          <h2 className="ContactoH2">Contacto</h2>   
                  
          <hr />
              <div className="input-group">

                <label htmlFor="Name" className="labelContacto">Nombre</label>
                <input type="Name" name="Name" id="Name" placeholder="Nombre" className="inputContacto"/>
             
                <label htmlFor="Phone" className="labelContacto">Telefono</label>
                <input type="Phone" name="Phone" id="Phone" placeholder="Telefono" className="inputContacto" />
             
                <label htmlFor="Email" className="labelContacto">Email</label>
                <input type="Email" name="Email" id="Email" placeholder="Correo@hotmail.com"  className="inputContacto"/>
     

                <label htmlFor="Message" className="labelContacto">Mensaje</label>
                <textarea name="Message" id="Message" cols="30" rows="5" className="inputContacto"></textarea>

              <br />
                <input className="btnContacto" type="submit" value="Enviar"/>
            </div>
          
        </form>

      </div>

      <Footer/>
      </>
  )
}
