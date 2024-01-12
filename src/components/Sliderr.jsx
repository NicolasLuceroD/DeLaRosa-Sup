
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/SliderCss.css'
import Imagenes from "../assets/Imagenes";


export const Sliderr = ()=> {
 
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return(

      <div className="mainContainer">

        

        <Slider {...settings}>

          <div className="container">
            <img src={Imagenes.logoGentech} />
          </div>

          <div className="container">
            <img src={Imagenes.logoHoch} />
          </div>

          <div className="container">
            <img src={Imagenes.logoHTN} />
          </div>

          <div className="container">
            <img src={Imagenes.logoMuscletech} />
          </div>

          <div className="container">
            <img src={Imagenes.logoOn} />
          </div>

          <div className="container">
            <img src={Imagenes.logoXtrength} />
          </div>

          <div className="container">
            <img src={Imagenes.logoStar}/>
          </div>
          
        </Slider>
      </div>
    );
  }
