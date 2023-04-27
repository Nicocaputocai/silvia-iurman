import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./presencialWorkshop.css";
import {
  Container,
  Col,
  Row,
  Button,
  Stack,
  Image,
  Form,
  Modal,
  InputGroup,
  Carousel,
} from "react-bootstrap";
import CoursesDataServices from "../../Services/CoursesServices";
import { useParams } from "react-router-dom";
import { TGPimages, activity } from "../../assets/images";
import moment from "moment";

const CursosPresenciales = () => {
  const [index, setIndex] = useState(0);
  const { name } = useParams();
  const [courses, setCourse] = useState([]);
  console.log(name);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const retrieveCourse = () => {
    CoursesDataServices.getAllCourses()
      .then((response) => {
        setCourse(response.data.courses);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    retrieveCourse();
  }, []);

  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   Validación

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Helmet>
        <title>Silvia Iurman - Talleres Presenciales</title>
        <meta
          name="description"
          content="Talleres presenciales de Silvia Iurman - Nuevas Constelaciones Familiares Argentina"
        />
      </Helmet>
      <Container fluid>
        <h1>Talleres presenciales</h1>
      </Container>
      {courses.map(
        (course) =>
          course._id === "63d2d339dc2d95cfd1095bdf" && (
            <Container>
              <Row>
                <Col lg={6} sm={12}>
                  <Carousel activeIndex={index} onSelect={handleSelect}>
                    {TGPimages.map((image) => (
                      <Carousel.Item key={image.alt}>
                        <img
                          className="d-block w-100 h-100 object-cover"
                          src={image.src}
                          alt={image.alt}
                        />
                      </Carousel.Item>
                    ))}
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
                  onClick={handleShow}
                >
                  Inscribite
                </Button>
                <br />
              </Stack>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Inscripción</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    {/* <Form> */}
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="name">
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control required type="firstName" autoFocus />
                          <Form.Control.Feedback>
                            Correcto!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group className="mb-3" controlId="lastName">
                          <Form.Label>Apellido</Form.Label>
                          <Form.Control type="lastName" required />
                          <Form.Control.Feedback>
                            Correcto!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* </Form> */}
                    {/* <Form> */}
                    <Row>
                      <Col>
                        <Form.Group className="mb-3" controlId="country">
                          <Form.Label>País</Form.Label>
                          <Form.Control type="country" required />
                          <Form.Control.Feedback>
                            Correcto!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group className="mb-3" controlId="birthday">
                          <Form.Label>Fecha de nacimiento</Form.Label>
                          <Form.Control type="date" required />
                          <Form.Control.Feedback>
                            Correcto!
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                    {/* </Form> */}

                    {/* <Form> */}
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Correo</Form.Label>
                      <Form.Control type="email" required />
                      <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                    </Form.Group>
                    {/* </Form> */}

                    {/* <Form> */}
                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label> Teléfono </Form.Label>
                      <Form.Control type="phone" required></Form.Control>
                      <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Check
                        required
                        label="Acepto los términos y condiciones"
                        feedback="Para continuar debe aceptar los términos y condiciones."
                        feedbackType="invalid"
                      />
                    </Form.Group>

                    <Button
                      variant="secondary"
                      onClick={handleClose}
                      style={{ marginRight: "10px", position: "end" }}
                    >
                      Cerrar
                    </Button>
                    <Button variant="primary" type="submit">
                      Enviar
                    </Button>
                    {/* </Form> */}
                  </Form>
                </Modal.Body>
              </Modal>
            </Container>
          )
      )}
    </>
  );
};

export default CursosPresenciales;
