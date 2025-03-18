import React from "react";
import { Container, Table, Nav, Tab, Row, Col } from "react-bootstrap";
import { HelmetPage } from "../components";
import TrackVisibility from "react-on-screen";

export default function Diary() {
  return (
    <>
      <HelmetPage
        section="Agenda"
        content="Agenda - Nuevas Constelaciones Familiares Argentina"
      />
      <Container className=" d-flex flex-column">
        <Row>
          <h1 className="text-center mt-3 mb-3 textColor">
            Agenda de actividades
          </h1>{" "}
          <br />
          <br />
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <Tab.Container id="calendar-tabs" defaultActiveKey="2024">
                  <Nav fill variant="tabs" defaultActiveKey="2024">
                    {/* <Col>
      <Nav.Item>
        <Nav.Link style={{fontSize:"1.4rem", color: "#9d6b6c"}} eventKey="2024">2024</Nav.Link>
      </Nav.Item>
      </Col> */}
                    <Col>
                      <Nav.Item>
                        <Nav.Link
                          style={{ fontSize: "1.4rem", color: "#9d6b6c" }}
                          eventKey="2025"
                        >
                          2025
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item></Nav.Item>
                    </Col>
                  </Nav>

                  <br />
                  {/*  */}
                  <Tab.Content>
                    {/* 2025 */}
                    <Tab.Pane eventKey="2025" active>
                      <h2>Enero 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: "#8FBC8F" }}>
                            {" "}
                            {/* verde */}
                            <td>Sábado 11 de enero</td>
                            <td>Taller constelaciones familiares</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ff983f" }}>
                            {" "}
                            {/* naranja */}
                            <td>Sábado 18 de enero</td>
                            <td>Taller constelaciones familiares</td>
                            <td>Presencial Palermo</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ea80fc" }}>
                            {" "}
                            {/* lila */}
                            <td>Martes 7 de enero 18 hs </td>
                            <td>Programa de Gestión del Trauma y del Estrés</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ea80fc" }}>
                            {" "}
                            {/* lila */}
                            <td>Martes 14 de enero 18 hs </td>
                            <td>
                              Clase Trauma, estrés y neurociencia del cuerpo
                            </td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ea80fc" }}>
                            {" "}
                            {/* lila */}
                            <td>Jueves 16 de enero 18 hs </td>
                            <td>Supervisión en NCF</td>
                            <td>ONLINE</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h2>Febrero 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Sábado 8 de Febrero</td>
                            <td>Módulo 11 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Domingo 9 de febrero</td>
                            <td>Módulo 11 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#8FBC8F" }}>
                            {" "}
                            {/* verde */}
                            <td>Sábado 8 de febrero</td>
                            <td>Taller constelaciones familiares</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ff983f" }}>
                            {" "}
                            {/* naranja */}
                            <td>Sábado 15 de febrero</td>
                            <td>Taller constelaciones familiares</td>
                            <td>Presencial Palermo</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ffffa1" }}>
                            {" "}
                            {/* amarillo */}
                            <td>Viernes 28 de febrero</td>
                            <td>EEV</td>
                            <td>Presencial</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ea80fc" }}>
                            {" "}
                            {/* lila */}
                            <td>Miércoles 12 de febrero </td>
                            <td>Programa de Gestión del Trauma y del Estrés</td>
                            <td>ONLINE</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h2>Marzo 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Sábado 8 de marzo</td>
                            <td>Módulo 12 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Domingo 9 de marzo</td>
                            <td>Módulo 12 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#8FBC8F" }}>
                            {" "}
                            {/* verde */}
                            <td>Sábado 8 de marzo</td>
                            <td>Taller constelaciones familiares</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ff983f" }}>
                            {" "}
                            {/* naranja */}
                            <td>Sábado 15 de marzo</td>
                            <td>Taller constelaciones familiares</td>
                            <td>Presencial Palermo</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ea80fc" }}>
                            {" "}
                            {/* lila */}
                            <td>Martes 18 de marzo</td>
                            <td>Programa de Gestión del Trauma y del Estrés</td>
                            <td>ONLINE</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h2>Abril 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: "#ffffa1" }}>
                            {" "}
                            {/* amarillo */}
                            <td>Viernes 4 de abril</td>
                            <td>EEV</td>
                            <td>Presencial</td>
                          </tr>

                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Sábado 12 de abril</td>
                            <td>Módulo 13 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Domingo 13 de abril</td>
                            <td>Módulo 13 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#8FBC8F" }}>
                            {" "}
                            {/* verde */}
                            <td>Sábado 12 de abril</td>
                            <td>Taller constelaciones familiares</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ff983f" }}>
                            {" "}
                            {/* naranja */}
                            <td>Sábado 26 de abril</td>
                            <td>Taller constelaciones familiares</td>
                            <td>Presencial Palermo</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ea80fc" }}>
                            {" "}
                            {/* lila */}
                            <td>Martes 29 de abril</td>
                            <td>Programa de Gestión del Trauma y del Estrés</td>
                            <td>ONLINE</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h2>Mayo 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: "#ffffa1" }}>
                            {" "}
                            {/* amarillo */}
                            <td>Viernes 2 de mayo</td>
                            <td>EEV</td>
                            <td>Presencial</td>
                          </tr>

                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Sábado 10 de mayo</td>
                            <td>Módulo 14 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Domingo 11 de mayo</td>
                            <td>Módulo 14 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#8FBC8F" }}>
                            {" "}
                            {/* verde */}
                            <td>Sábado 10 de mayo</td>
                            <td>Taller constelaciones familiares</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ff983f" }}>
                            {" "}
                            {/* naranja */}
                            <td>Sábado 17 de mayo</td>
                            <td>Taller constelaciones familiares</td>
                            <td>Presencial Palermo</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ea80fc" }}>
                            {" "}
                            {/* lila */}
                            <td>Martes 27 de mayo </td>
                            <td>Programa de Gestión del Trauma y del Estrés</td>
                            <td>ONLINE</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h2>Junio 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: "#ffffa1" }}>
                            {" "}
                            {/* amarillo */}
                            <td>Viernes 6 de junio</td>
                            <td>EEV</td>
                            <td>Presencial</td>
                          </tr>

                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Sábado 14 de junio</td>
                            <td>Módulo 15 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>

                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Domingo 15 de junio</td>
                            <td>Módulo 15 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#8FBC8F" }}>
                            {" "}
                            {/* verde */}
                            <td>Sábado 14 de junio</td>
                            <td>Taller constelaciones familiares</td>
                            <td>ONLINE</td>
                          </tr>

                          <tr style={{ backgroundColor: "#ff983f" }}>
                            {" "}
                            {/* naranja */}
                            <td>Sábado 21 de junio</td>
                            <td>Taller de Constelaciones Familiares</td>
                            <td>Presencial Palermo</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ea80fc" }}>
                            {" "}
                            {/* lila */}
                            <td>Jueves 19 de junio</td>
                            <td>Programa de Gestión del Trauma y del Estrés</td>
                            <td>ONLINE</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h2>Julio 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        {/* <tbody>
    <tr style={{backgroundColor: "#ffffa1"}}> 
        <td>Viernes 4 de julio</td>
        <td>EEV</td>
        <td>Presencial</td>
      </tr>
    <tr style={{backgroundColor: "#d4eaf7"}}> 
        <td>Sábado 12 de julio</td>
        <td>Módulo 16 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> 
        <td>Domingo 13 de julio</td>
        <td>MÓDULO 16 FNCF y E</td>
        <td>ONLINE</td>
      </tr>

      <tr style={{backgroundColor: "#8FBC8F"}}>
        <td>Sábado 12 de julio</td>
        <td>Taller constelaciones familiares</td>
        <td>ONLINE</td>
      </tr>

    <tr style={{backgroundColor: "#ff983f"}}> 
        <td>Sábado 19 de julio</td>
        <td>Taller de Constelaciones Familiares</td>
        <td>Presencial Palermo</td>
      </tr>

    </tbody> */}
                      </Table>
                      <h2>Agosto 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: "#ffffa1" }}>
                            {" "}
                            {/* amarillo */}
                            <td>Viernes 1 de agosto</td>
                            <td>EEV</td>
                            <td>Presencial</td>
                          </tr>

                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Sábado 9 de agosto</td>
                            <td>Módulo 16 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Domingo 10 de agosto</td>
                            <td>Módulo 16 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#8FBC8F" }}>
                            {" "}
                            {/* verde */}
                            <td>Sábado 9 de agosto</td>
                            <td>Taller constelaciones familiares</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ff983f" }}>
                            {" "}
                            {/* naranja */}
                            <td>Sábado 23 de agosto</td>
                            <td>Taller presencial Palermo</td>
                            <td>Presencial</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ea80fc" }}>
                            {" "}
                            {/* lila */}
                            <td>Martes 26 de agosto</td>
                            <td>Programa de Gestión del Trauma y del Estrés</td>
                            <td>ONLINE</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h2>Septiembre 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: "#ffffa1" }}>
                            {" "}
                            {/* amarillo */}
                            <td>Viernes 5 de septiembre</td>
                            <td>EEV</td>
                            <td>Presencial</td>
                          </tr>

                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Sábado 13 de septiembre</td>
                            <td>Módulo 0 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Domingo 14 de septiembre</td>
                            <td>Módulo 0 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#8FBC8F" }}>
                            {" "}
                            {/* verde */}
                            <td>Sábado 13 de septiembre</td>
                            <td>Taller constelaciones familiares</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ff983f" }}>
                            {" "}
                            {/* naranja */}
                            <td>Sábado 20 de septiembre</td>
                            <td>Taller constelaciones familiares</td>
                            <td>Presencial Palermo</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h2>Octubre 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: "#ffffa1" }}>
                            {" "}
                            {/* amarillo */}
                            <td>Viernes 3 de octubre</td>
                            <td>EEV</td>
                            <td>Presencial</td>
                          </tr>

                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Sábado 11 de octubre</td>
                            <td>Módulo 1 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Domingo 12 de octubre</td>
                            <td>Módulo 1 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#8FBC8F" }}>
                            {" "}
                            {/* verde */}
                            <td>Sábado 11 de octubre</td>
                            <td>Taller constelaciones familiares</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ff983f" }}>
                            {" "}
                            {/* naranja */}
                            <td>Sábado 25 de octubre</td>
                            <td>Taller constelaciones familiares</td>
                            <td>Presencial Palermo</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h2>Noviembre 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Sábado 8 de noviembre</td>
                            <td>Módulo 2 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Domingo 9 de noviembre</td>
                            <td>Módulo 2 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#8FBC8F" }}>
                            {" "}
                            {/* verde */}
                            <td>Sábado 8 de noviembre</td>
                            <td>Taller constelaciones familiares</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ff983f" }}>
                            {" "}
                            {/* naranja */}
                            <td>Sábado 15 de novimebre</td>
                            <td>Taller constelaciones familiares</td>
                            <td>Presencial Palermo</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ffffa1" }}>
                            {" "}
                            {/* amarillo */}
                            <td>Viernes 21 de noviembre</td>
                            <td>EEV</td>
                            <td>Presencial</td>
                          </tr>
                        </tbody>
                      </Table>
                      <h2>Diciembre 2025</h2>
                      <Table striped bordered hover responsive="lg">
                        <thead>
                          <tr>
                            <th>Fecha</th>
                            <th>Actividad</th>
                            <th>Modalidad</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Sábado 13 de diciembre</td>
                            <td>Módulo 3 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#d4eaf7" }}>
                            {" "}
                            {/* celeste */}
                            <td>Domingo 14 de diciembre</td>
                            <td>Módulo 3 F.NCF y E</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#8FBC8F" }}>
                            {" "}
                            {/* verde */}
                            <td>Domingo 13 de diciembre</td>
                            <td>Taller constelaciones familiares</td>
                            <td>ONLINE</td>
                          </tr>
                          <tr style={{ backgroundColor: "#ff983f" }}>
                            {" "}
                            <td>Sábado 20 de diciembre</td>
                            <td>Taller constelaciones familiares</td>
                            <td>Presencial Palermo</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
    </>
  );
}
