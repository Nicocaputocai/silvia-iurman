import { useState, useEffect } from "react";
import "./presencialWorkshop.css";
import {
  Container,
  Col,
  Row,
  Button,
  Stack,
  Carousel,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { TGPimages } from "../../../assets/images";
import moment from "moment";
import { HelmetPage } from "../../components";
import { ModalWorkshop } from "../modalWorkshop/ModalWorkshop";
import { useCourses } from "../../../hooks/useCourses";
import useAuth from '../../../hooks/useAuth'
import { useNavigate } from "react-router-dom";
import { TYPE_PURCHASE } from "../../../types/TYPES";

const CursosPresenciales = () => {
  const [index, setIndex] = useState(0);
  const {courses} = useCourses();
  const { name } = useParams();
  const {auth} = useAuth();
  const navigate = useNavigate();
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  // Modal
  const [show, setShow] = useState(false);

  const handleSetModal = () => {
    if(!auth.isLogged){
      navigate('/login')
    }
    setShow(!show);
  }

  return (
    <>
      <HelmetPage
        section='Talleres Presenciales'
        content='Talleres presenciales de Silvia Iurman - Nuevas Constelaciones Familiares Argentina'
      />
      <Container fluid>
        <h1>Talleres presenciales</h1>
      </Container>
      {courses.data.map(
        (course) =>
          course._id === "63d2d339dc2d95cfd1095bdf" && (
            <Container key={course._id}>
              <Row>
                <Col lg={6} sm={12}>
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    {
                      TGPimages.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img
                          className="d-block w-100 h-100 object-fit-cover"
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                        />
                      </Carousel.Item>
                    ))
                    }
                  </Carousel>
                  {/* <Image className="img-fluid" src={activity} alt="" /> */}
                </Col>

                <Col lg={6} sm={12}>
                  <h3
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#9d6b6c",
                      textAlign: "left",
                    }}
                  >
                    Próximo taller: {moment(course.day).format("DD/MM/YYYY")}{" "}
                    {course.hour}
                  </h3>

                  <p>
                    <b>Los talleres de constelaciones familiares</b> son un
                    espacio de encuentro grupal, en el marco de la filosofía de
                    Bert Hellinger, donde la persona trabaja por medio de
                    constelaciones grupales, constelaciones en paralelo,
                    ejercicios sistémicos (o constelatorios), sanación cuántica,
                    visualización activa de Jung. Se realiza una presentación
                    del tema a la luz de las enseñanzas de Hellinger, de manera
                    que comience a moverse la sanación desde nuevas
                    comprensiones y tomas de conciencia, que continuarán a lo
                    largo del taller. El objetivo es que todos hagan su trabajo
                    desde el lugar que el campo o fuerza mayor quiera para cada
                    uno. La experiencia demuestra que los efectos de la
                    participación en un marco grupal, son inmediatos y llevan a
                    la persona a dar su próximo paso esencial. Esto lo demuestra
                    la existencia de la resonancia mórfica de la que da cuenta
                    la biología y la cuántica. Se entra a la labor desde un
                    sistema integrativo donde, en distintos momentos, se
                    refuerzan el trabajo con distintos cuerpos: físico, mental y
                    emocional incluyendo un momento somático que mueve vestigios
                    de trauma. El concepto de masa crítica, que cuantos más
                    somos en una misma labor, más rápido inclina la balanza
                    hacia el cambio y la transformación, es en elemento que
                    siempre se recuerda. Entonces, estos talleres resultan
                    espacios de sanación, transformación, liberación y evolución
                    que se manifiesta en la participación activa de personas que
                    eligen hacer su proceso en cada reunión.
                  </p>
                </Col>
              </Row>
              <br />
              <Stack gap={2} className="col-md-5 mx-auto">
                <Button
                  variant="secondary"
                  style={{ backgroundColor: "#9d6b6c" }}
                  size="lg"
                  onClick={handleSetModal}
                >
                  Inscribite
                </Button>
                <br />
              </Stack>
              <ModalWorkshop 
              show={show} 
              handleSetModal={handleSetModal}
              workshop={course}
              type={TYPE_PURCHASE.COURSE}
              />
            </Container>
          )
      )}
    </>
  );
};

export default CursosPresenciales;
