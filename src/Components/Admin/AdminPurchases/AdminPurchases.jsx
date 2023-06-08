import { useState } from "react";
import { Col, Container, Form, Nav, Row, Tab } from "react-bootstrap";
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
    let searchResult = purchases.data.filter((element) => {
      let name = element.user_id.firstName;
      let lastName = element.user_id.lastName;
      let fullname = element.user_id.firstName + " " + element.user_id.lastName;
      let nameFull = element.user_id.lastName + " " + element.user_id.firstName;
      let country = element.user_id.country !== undefined && element.user_id.country;
      let phone = element.user_id.phone !== undefined && element.user_id.phone;
      let email = element.user_id.email!== undefined && element.user_id.email;

      if (
        name.toString().toLowerCase().includes(wanted.toLowerCase()) ||
        lastName.toString().toLowerCase().includes(wanted.toLowerCase()) ||
        country.toString().toLowerCase().includes(wanted.toLowerCase()) ||
        phone.toString().toLowerCase().includes(wanted.toLowerCase()) ||
        email.toString().toLowerCase().includes(wanted.toLowerCase()) ||
        fullname.toString().toLowerCase().includes(wanted.toLowerCase()) ||
        nameFull.toString().toLowerCase().includes(wanted.toLowerCase())
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
                <Nav fill variant="pills">
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
                  <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
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
                  {search.length === 0 
                        ? purchases.data.map((purchase, index) => {
                          if (purchase?.inscriptionModel === "Activity")
                            return <FilterView key={index} {...purchase} />;
                          })
                        : purchasesResult.map((purchase, index) => {
                          if (purchase?.inscriptionModel === "Activity")
                            return <FilterView key={index} {...purchase} />;
                          })}
                    {/* {purchases.data.map((purchase, index) => {
                      if (purchase.inscriptionModel === "Activity")
                        return <FilterView key={index} {...purchase} />;
                    })} */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="liveModules">
                  {search.length === 0 
                        ? purchases.data.map((purchase, index) => {
                          if (purchase.inscription?.typeModule === "sincronico")
                            return <FilterView key={index} {...purchase} />;
                          })
                        : purchasesResult.map((purchase, index) => {
                          if (purchase.inscription?.typeModule === "sincronico")
                            return <FilterView key={index} {...purchase} />;
                          })}
                    {/* {purchases.data.map((purchase, index) => {
                      if (purchase.inscription?.typeModule === "sincronico")
                        return <FilterView key={index} {...purchase} />;
                    })} */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="recordedModules">
                  {search.length === 0 
                        ? purchases.data.map((purchase, index) => {
                          if (purchase.inscription?.typeModule === "asincronico")
                            return <FilterView key={index} {...purchase} />;
                          })
                        : purchasesResult.map((purchase, index) => {
                          if (purchase.inscription?.typeModule === "asincronico")
                            return <FilterView key={index} {...purchase} />;
                          })}
                    {/* {purchases.data.map((purchase, index) => {
                      if (purchase.inscription?.typeModule === "asincronico")
                        return <FilterView key={index} {...purchase} />;
                    })} */}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </>
          </Col>
        </Row>
      </Container>
    </>
  );
};
