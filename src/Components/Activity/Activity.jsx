import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Stack, Form, Modal, Button } from "react-bootstrap";
import ActivitiesDataServices from '../../Services/ActivitiesServices';
import moment from "moment";
import { Helmet } from "react-helmet";
import './Activity.css'

export const Activity = () => {
    const {id} = useParams();
    const [activity ,setActivity] = useState([])
    // console.log(id)
    const retrieveActivity= () => {
      ActivitiesDataServices.getById(id)
        .then(response => {
            console.log(response);
            setActivity(response.data.activity);
        })
        .catch( err => console.log(err));
    };

    useEffect(() => {
      retrieveActivity();
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

    return(
        <>
         <Helmet>
      <title>    </title>
      <meta name="description" content=""/>
    </Helmet>
        <Container>
            <Row>
                <Col className="justify-content-md-center">
                    <Image  className="mx-auto d-block" fluid="true"  style={{ height: "500px", width: "1300px" }} src={`https://api-silvia.divisioncode.net.ar/img/${activity.img}`} />
                </Col>
            </Row>
            <Row >
                <Col className="m-3">
                    <h1> {activity.name} </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="m-3" style={{ whiteSpace: "pre-wrap" }}>{activity.description}</p>
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
              
                      {/* Arranca el modal */}
            <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inscripción</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              {/* <Form> */}
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control required type="firstName" autoFocus />
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="lastName" required />
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
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
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3" controlId="birthday">
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type="date" required />
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
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

              <Button variant="secondary" onClick={handleClose} style={{ marginRight: "10px", position: "end" }}>
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
        
        </>
  )
}
export default Activity;