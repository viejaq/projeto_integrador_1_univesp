

import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/textura1.png";
// import logo2 from '../assets/img/logo_escrito.png';

export const QuemSomos = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="quem_somos" id="quem_somos">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="quem_somos-bx wow zoomIn">
              {/* <img src={logo2} alt="Logo2" className="logo2"/>  */}
              <h2 id='titulo_quem_somos'>Quem somos</h2>
              <p>Trabalhamos com as melhores marcas, priorizamos a durabilidade, a beleza e o impacto ambiental. Nosso amplo leque de materiais de alta qualidade oferece infinitas possibilidades de personalização adaptando-se perfeitamente ao seu estilo e necessidades.</p>
              <h2 id='nossa_fabrica'>Nossa Fábrica</h2>
              <p>Trabalhamos com as melhores marcas, priorizamos a durabilidade, a beleza e o impacto ambiental. Nosso amplo leque de materiais de alta qualidade oferece infinitas possibilidades de personalização adaptando-se perfeitamente ao seu estilo e necessidades.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme quem_somos-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Identity</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}