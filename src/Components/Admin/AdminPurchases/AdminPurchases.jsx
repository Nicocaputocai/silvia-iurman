import { useState } from "react";
import { Col, Container, Form, Nav, Row, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import { usePurchases } from "../../../hooks/usePurchase";
import { FilterView } from "./FilterView/FilterView";

export const AdminPurchases = () => {
  const { purchases, setPurchases } = usePurchases();
  const [search, setSearch] = useState([]);
  const [purchasesResult, setPurchasesResult] = useState([]);

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (wanted) => {
    var searchResult = purchases.data.filter((element) => {
      if (
        element.firstName
          .toString()
          .toLowerCase()
          .includes(wanted.toLowerCase()) ||
        element.lastName
          .toString()
          .toLowerCase()
          .includes(wanted.toLowerCase()) ||
        element.country
          .toString()
          .toLowerCase()
          .includes(wanted.toLowerCase()) ||
        element.phone.toString().toLowerCase().includes(wanted.toLowerCase()) ||
        element.email.toString().toLowerCase().includes(wanted.toLowerCase())
      ) {
        return element;
      }
    });
    setPurchasesResult(searchResult);
  };

  return (
    <>
      <Container id="purchasesFilter">
        <Row>
          <Col>
            <>
              <h2>Filtrar</h2>
              <Tab.Container
                id="purchases-tabs"
                defaultActiveKey="AllPurchases"
              >
                <Nav fill variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="AllPurchases">
                      Todas las compras
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="activities">Actividades</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="liveModules">
                      Módulos en directo
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="recordedModules">
                      Módulos grabados
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="completedFormation">
                      Formación Finalizada
                    </Nav.Link>
                  </Nav.Item>

                  <Form className="d-flex"
                    onSubmit={(e)=>e.preventDefault()}
                  >
                    <Form.Control
                      type="search"
                      placeholder="Buscar alumno"
                      className="me-2"
                      aria-label="Buscar alumno"
                      value={search}
                      onChange={handleInputChange}

                      eventKey="searchForm"
                    />
                  </Form>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="AllPurchases">
                    <Row>
                      {search.length === 0
                        ? purchases.data.map((purchase, index) => {
                            return <FilterView key={index} {...purchase} />;
                          })
                        : purchasesResult.map((purchase, index) => {
                            return <FilterView key={index} {...purchase} />;
                          })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="activities">
                    {purchases.data.map((purchase, index) => {
                      if (purchase.inscription == "Taller presencial")
                        return <FilterView key={index} {...purchase} />;
                    })}
                  </Tab.Pane>
                  <Tab.Pane eventKey="searchForm"></Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </>
          </Col>
        </Row>
      </Container>
    </>
  );
};
