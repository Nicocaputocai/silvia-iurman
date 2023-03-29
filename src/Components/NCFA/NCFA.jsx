import { useState,useEffect } from "react";
import { Carousel, Container, Image } from "react-bootstrap"
import CoursesDataServices from "../../Services/CoursesServices";
import { Helmet } from "react-helmet"
import NCFA1 from '../../assets/NCFA1.jpg'
import NCFA2 from '../../assets/NCFA2.jpg'
import NCFA3 from '../../assets/NCFA3.png'
import NCFA4 from '../../assets/NCFA4.png'
import NCFA5 from '../../assets/NCFA5.png'
import NCFA6 from '../../assets/NCFA6.jpg'
import NCFA7 from '../../assets/NCFA7.jpg'
import NCFA8 from '../../assets/NCFA8.png'
import NCFA9 from '../../assets/NCFA9.jpg'
import NCFA10 from '../../assets/NCFA10.jpg'
import NCFA11 from '../../assets/NCFA11.jpg'


const Constelaciones = ()=>{
    const [index, setIndex] = useState(0);
    const [courses, setCourse] = useState([])

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    const retrieveCourse= () =>{
        CoursesDataServices.getAllCourses()
        .then((response) =>{
            setCourse(response.data.courses)
        })
        .catch(err => console.log(err))
    }
    useEffect(() =>{
        retrieveCourse()
    })
    return(
        <>


    {courses.map((course) =>( course._id === '63d2d3a6dc2d95cfd1095ca4' ? 
    <Container>
                 <Helmet>
      <title>Silvia Iurman - Nuevas Constelaciones Familiares y Eneagrama</title>
      <meta name="description" content="Formación en Nuevas Constelaciones Familiares y Eneagrama Silvia Iurman - Nuevas Constelaciones Familiares Argentina"/>
    </Helmet>
    <h2 style={{
                backgroundColor: "#ffffff",
                color: "#9d6b6c",
                textAlign: "center",
              }}>Nuevas Constelaciones Familiares y eneagrama</h2>
              <h4 >Podes iniciar la formación con este módulo o tomarlo como proceso de trabajo personal en orden a la sanación, transformación y evolución.</h4>

              <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item>
        <Image fluid="true"
          className="d-block w-100"
          src={NCFA1}
          alt="First slide"
        style={{height:"450px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image fluid="true"
          className="d-block w-100"
          src={NCFA2}
          alt="Second slide"
          style={{height:"450px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image fluid="true"
          className="d-block w-100"
          src={NCFA3}
          alt="Third slide"
          style={{height:"450px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image fluid="true"
          className="d-block w-100"
          src={NCFA4}
          alt="Third slide"
          style={{height:"450px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image fluid="true"
          className="d-block w-100"
          src={NCFA5}
          alt="Third slide"
          style={{height:"450px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image fluid="true"
          className="d-block w-100"
          src={NCFA6}
          alt="Third slide"
          style={{height:"450px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image fluid="true"
          className="d-block w-100"
          src={NCFA7}
          alt="Third slide"
          style={{height:"450px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image fluid="true"
          className="d-block w-100"
          src={NCFA8}
          alt="Third slide"
          style={{height:"450px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image fluid="true"
          className="d-block w-100"
          src={NCFA9}
          alt="Third slide"
          style={{height:"450px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image fluid="true"
          className="d-block w-100"
          src={NCFA10}
          alt="Third slide"
          style={{height:"450px"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image fluid="true"
          className="d-block w-100"
          src={NCFA11}
          alt="Third slide"
          style={{height:"450px"}}
        />
      </Carousel.Item>
    </Carousel>
    <br />
    La siguiente presentación será desde el marco de la formación, de todos modos puedes tomar la información para hacerlo como proceso terapéutico. <br/>
Esta formación surge como respuesta a la demanda de nuevos enfoques integrativos en el abordaje de personas en proceso de autoconocimiento, desarrollo y sanación integral. La misma se facilita en el seno de un espacio de formación teórico-vivencial, comprometida con la filosofía de vida y apoyada en las enseñanzas de Bert Hellinger.<br/><br/>
El objetivo de la misma es formar Consteladores Familiares en las Nuevas Constelaciones Familiares con conocimientos profundos del eneagrama, promoviendo:<br/>
·       Una sólida base hacia el desarrollo y evolución personal<br/>
·       Una cabal compresión de las herramientas, apoyadas en un marco sistémico y fenomenológico<br/>
·       Que se vivencie la formación y sus efectos, en la persona del facilitador, y sepa integrar y, luego, adaptar a su práctica cotidiana, para contribuir al servicio de la conciencia colectiva hacia más vida.<br/><br/>
 
Se trata de un abordaje que propone un enfoque integrador de diferentes corrientes y escuelas de vida. Capacita para el trabajo individual y grupal. Los facilitadores se desarrollan en una continua sintonía al servicio de algo más grande que todo lo mueve.<br/><br/>
<b> Destinado</b>: Para ser alumno de la formación se requiere una entrevista para quienes realizan su eneatest de personalidad donde nos podamos conocer. La persona debe poseer autonomía y decisión adulta de hacer proceso personal para luego ponerse al servicio de otros. <br/><br/>
<b> Duración </b>: La formación se facilita por medio de 16 módulos bimestrales a desarrollarse durante un fin de semana.<br/>
<b>Formato y carga horaria de la formación en módulos</b>:<br/>
14 horas por módulo con un corte al mediodía. Sábado 7 horas y Domingo 7 horas<br/>
-sábado de 10 AM a 13 PM = 3 horas curso (hora Argentina)<br/>
-sábado de 15 PM a 18 PM= 3 horas taller (hora Argentina)<br/>
- sábado de 18 a 19 hs PM: 1 hora taller de retroalimentación (hora Argentina)<br/>
-domingo de 10 AM a 13 hs PM y de 14.30 a 17.30 hsPM = 6 horas curso
(hora Argentina)<br/><br/>
<b>Inasistencia durante el módulo</b>: se puede ausentar una persona 3 horas.<br/><br/>
<b>¿Puedo iniciar la formación en otro módulo?</b> Sí. En este caso se toman los módulos que no se han tomado, en otras fechas. <br/><br/>
Valor para residentes en Argentina: Ofrecemos únicamente para las personas residentes en la Argentina que trabajan en dicho país, un descuento por pago anticipado. Las fechas del vencimiento del descuento serán anunciadas en la apertura de inscripción en dicho módulo.<br/>

<b>Honorarios con descuento por pago anticipado</b>: ${course.priceAnticipedPesos}<br/>
<b>Honorarios comunes</b>: ${course.pricePesos}.-<br/>
<b>-Medio de pago</b>: por transferencia bancaria.<br/>
<b>Otros países </b>: USD {course.priceDolar}<br/>
                        <b>-Medio de pago </b>: paypal - Western Unión<br/><br/>

Al servicio de la vida y de la conciencia colectiva.<br/>


    </Container>
              : ''))}
        </>
    )
}

export default Constelaciones