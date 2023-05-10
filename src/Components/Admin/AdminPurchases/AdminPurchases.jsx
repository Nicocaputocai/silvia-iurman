import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  NavItem,
  Navbar,
  Offcanvas,
  Row,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import PurchasesDataServices from "../../../Services/PurchasesServices";
import axios from "axios";
import PWPurchases from "./PWPurchases";
import VWPurchases from "./VWPurchases";
import ActivitiesPurchases from "./ActivitiesPurchases";
import AllPurchases from "./AllPurchases/AllPurchases";

export const AdminPurchases = () => {
  // const [purchases, setPurchases] = useState([]);
  // const retrievePurchases = () => {
  //   PurchasesDataServices.getAllPurchases()
  //     .then((response) => {
  //       setPurchases(response.data.purchases);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   retrievePurchases();
  // });
  return (
    <>
    {[false].map((expand) => (
      <>
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Filtrar</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Filtros
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav variant="pills" className="justify-content-end flex-grow-1 pe-3">
                <Nav.Item>
                <Nav.Link eventKey="AllPurchases">
                Todas las inscripciones
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="PWPurchases">Inscriptos a talleres presenciales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="VWPurchases">Inscriptos a talleres Virtuales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="ActivitiesPurchases">
                Inscriptos a módulos de formación
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-5">
                Inscriptos a actividades
                </Nav.Link>
            </Nav.Item>
                </Nav>
                <Form className="d-flex mt-3">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
                <Col sm={9}>
                <Tab.Content>
                <Tab.Pane eventKey="AllPurchases">
                    <AllPurchases />
                </Tab.Pane>
                </Tab.Content>
                </Col>
                </>
      ))}


      {/* <Container>
        <Navbar>
        <Nav variant="pills">
            <Nav.Item>
                <Nav.Link eventKey="link-5">
                Todas las inscripciones
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Talleres presenciales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Talleres Virtuales</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-3">
                Módulos de formación
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-4">
                Actividades
                </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
          <Form
            className="d-flex "
            style={{ marginRight: "10px", position: "end" }}
          >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
        </Navbar>
      </Container> */}
     
    </>
  );
};
