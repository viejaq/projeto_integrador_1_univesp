

import meter1 from "../assets/img/meter1.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/textura1.png";
import quemsomosimg from "../assets/img/quem_somos.png"
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
              <p>A Minotti é uma empresa com mais de 30 anos de experiência no mercado de Móveis Planejados, localizada na cidade de Araraquara. 
              Trabalhamos com uma equipe extremamente qualificada, que conta com 23 funcionários, prontos para entregar os seus projetos de maneira muito eficiente e hábil. Além disso, possuímos uma equipe de arquitetos de excelente capacitação para o planejamento do seu móvel!
              </p>
              <img src={quemsomosimg} alt="QuemSomosImg" className="qsi"/>
              <h2 id='nossa_fabrica'>Nossa Fábrica</h2>
              <p>Por trás de cada móvel Minotti, existe um mundo de precisão e paixão!
              Por produzirmos todas as etapas em nossa própria fábrica e utilizando os maquinários mais modernos do mercado, cada móvel é acompanhado cuidadosamente por nossa equipe, do início ao final.

              Nós combinamos o melhor da tecnologia moderna com a habilidade artesanal para garantir que cada peça seja perfeita. O compromisso da Móveis Minotti é com a qualidade e a atenção aos detalhes em cada etapa da produção.
              </p>
              

              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme quem_somos-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}