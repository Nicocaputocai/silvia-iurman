import { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Row,
  Tab,
  Accordion,
} from "react-bootstrap";
import {
  usePurchases,
  useActivities,
  useModules,
  useUsers,
} from "../../../hooks";
import { FilterView } from "./FilterView/FilterView";
import { useReactToPrint } from "react-to-print";

export const AdminPurchases = () => {
  const { purchases } = usePurchases();
  const { activities } = useActivities();
  const { modules } = useModules();
  const { users } = useUsers();
  const [search, setSearch] = useState([]);
  const [purchasesResult, setPurchasesResult] = useState([]);
  const [keysActivitiesGroup, setKeysActivitiesGroup] = useState([]);
  const [objActivitiesGroup, setObjActivitiesGroup] = useState([]);
  const [keysModulesGroup, setKeysModulesGroup] = useState([]);
  const [objModulesGroup, setObjModulesGroup] = useState([]);
  const [keysFinishModulesGroup, setFinishKeysModulesGroup] = useState([]);
  const [objFinishModulesGroup, setFinishObjModulesGroup] = useState([]);
  const [keysRecordModulesGroup, setRecordKeysModulesGroup] = useState([]);
  const [objRecordModulesGroup, setRecordObjModulesGroup] = useState([]);
  const [keysFinishRecordModulesGroup, setFinishRecordKeysModulesGroup] = useState([]);
  const [objFinishRecordModulesGroup, setFinishRecordObjModulesGroup] = useState([]);

  const componentPDF = useRef();

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    filter(e.target.value);
  };
  const filter = (wanted) => {
    let searchResult = purchases.data.filter((element) => {
      let firstName = element.user_id?.firstName || "";
      let lastName = element.user_id?.lastName || "";
      let fullname =
        (element.user_id?.firstName + " " + element.user_id.lastName) || "";
      let nameFull =
        (element.user_id?.lastName + " " + element.user_id.firstName) || "";
      let country = element.user_id?.country || "";
      let phone = element.user_id?.phone || "";
      let email = element.user_id?.email || "";

      if (
        firstName.toString().toLowerCase().includes(wanted.toLowerCase()) ||
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

  const gruopingActivities = () => {
    const objActivitiesGroup = {};
    activities.data.forEach(({ title, _id: _idActivity }) => {
      const purchasesFilter = purchases.data
        .filter((e) => e.inscription)
        .filter(
          ({ inscription: { _id: _idInscription } }) =>
            _idInscription === _idActivity
        );
      if (purchasesFilter.length) objActivitiesGroup[title] = purchasesFilter;
    });
    return objActivitiesGroup;
  };

  const mappingActivitiesGroup = async () => {
    const objectActivitiesGroup = await gruopingActivities();
    const keysActivitiesGroup = Object.keys(objectActivitiesGroup);
    setKeysActivitiesGroup(keysActivitiesGroup);
    setObjActivitiesGroup(objectActivitiesGroup);
  };

  const gruopingModules = () => {
    const objModulesGroup = {};
    modules.data.forEach(({ title, _id: _idModules, typeModule }) => {
      if (typeModule === "sincronico") {
        const purchasesFilter = purchases.data
          .filter((e) => e.inscription)
          .filter(
            ({ inscription: { _id: _idInscription } }) =>
              _idInscription === _idModules)
              // .filter((e) => e.finish)
              // .filter(
              //   ({finish}) => finish === false); //En false no funciona

        objModulesGroup[title] = purchasesFilter;
      }
    });
    return objModulesGroup;
  };

  const gruopingFinishModules = () => {
    const objFinishModulesGroup = {};
    modules.data.forEach(({ title, _id: _idModules, typeModule }) => {
      if (typeModule === "sincronico") {
        let purchasesFinishFilter = purchases.data
          .filter((e) => e.inscription)
          .filter(
            ({ inscription: { _id: _idInscription } }) =>
              _idInscription === _idModules
          )
          .filter(
            ({finish}) => !finish) 
          // console.log(purchasesFinishFilter);
        objFinishModulesGroup[title] = purchasesFinishFilter;
      }
    });
    return objFinishModulesGroup;
  };

  const gruopingRecordModules = () => {
    const objRecordModulesGroup = {};
    modules.data.forEach(({ title, _id: _idRecordModules, typeModule }) => {
      if (typeModule === "asincronico") {
        const purchasesRecordFilter = purchases.data
          .filter((e) => e.inscription)
          .filter(
            ({ inscription: { _id: _idInscription } }) =>
              _idInscription === _idRecordModules)
              // .filter((e) => e.finish)
              // .filter(
              //   ({finish}) => finish === false); // En false no funciona

        objRecordModulesGroup[title] = purchasesRecordFilter;
      }
    });
    return objRecordModulesGroup;
  };

  const gruopingFinishRecordModules = () => {
    const objFinishRecordModulesGroup = {};
    modules.data.forEach(({ title, _id: _idRecordModules, typeModule }) => {
      if (typeModule === "asincronico") {
        const purchasesFinishRecordFilter = purchases.data
          .filter((e) => e.inscription)
          .filter(
            ({ inscription: { _id: _idInscription } }) =>
              _idInscription === _idRecordModules)
          .filter(
            ({finish}) => !finish);
            // console.log(purchasesFinishRecordFilter);
        objFinishRecordModulesGroup[title] = purchasesFinishRecordFilter;
      }
    });
    return objFinishRecordModulesGroup;
  };

  const mappingModulesGroup = async () => { // Muestra las personas que no finalizaron los módulos en directo
    const objectModulesGroup = await gruopingModules();
    const keysModulesGroup = Object.keys(objectModulesGroup);
    setKeysModulesGroup(keysModulesGroup);
    setObjModulesGroup(objectModulesGroup);
  };

  const mappingFinishModulesGroup = async () => { // Muestra las personas que finalizaron los módulos en directo
    const objectFinishModulesGroup = await gruopingFinishModules();
    const keysFinishModulesGroup = Object.keys(objectFinishModulesGroup);
    setFinishKeysModulesGroup(keysFinishModulesGroup);
    setFinishObjModulesGroup(objectFinishModulesGroup);
  };

  const mappingRecordModulesGroup = async () => { // Muestra las personas que no finalizaron los módulos grabados
    const objectRecordModulesGroup = await gruopingRecordModules();
    const keysRecordModulesGroup = Object.keys(objectRecordModulesGroup);
    setRecordKeysModulesGroup(keysRecordModulesGroup);
    setRecordObjModulesGroup(objectRecordModulesGroup);
  };

  const mappingFinishRecordModulesGroup = async () => { // Muestra las personas que no finalizaron los módulos grabados
    const objectFinishRecordModulesGroup = await gruopingFinishRecordModules();
    const keysFinishRecordModulesGroup = Object.keys(objectFinishRecordModulesGroup);
    setFinishRecordKeysModulesGroup(keysFinishRecordModulesGroup);
    setFinishRecordObjModulesGroup(objectFinishRecordModulesGroup);
  };


  useEffect(() => {
    mappingActivitiesGroup();
    mappingModulesGroup();
    mappingFinishModulesGroup();
    mappingRecordModulesGroup();
    mappingFinishRecordModulesGroup();
  }, [activities, modules, purchases]);

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "listado",
  });



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
                    <Nav.Link eventKey="liveFinishModules">
                      Inscriptos no finalizados módulos en directo
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="recordedModules">
                      Módulos grabados
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="recordedFinishModules">
                    Inscriptos no finalizados módulos grabados
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
                    <div ref={componentPDF}>
                      {search.length === 0
                        ? keysActivitiesGroup.map((key) => (
                            <div key={key}>
                              <Accordion defaultActiveKey={key}>
                                <Accordion.Item eventKey={key}>
                                  <Accordion.Header>
                                    Titulo de la actividad: {key}
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <ul>
                                      {objActivitiesGroup[key].map(
                                        (purchase, index) => (
                                          <FilterView
                                            key={index}
                                            {...purchase}
                                          />
                                        )
                                      )}
                                    </ul>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </div>
                          ))
                        : purchasesResult.map((purchase, index) => {
                            if (purchase?.inscriptionModel === "Activity")
                              return <FilterView key={index} {...purchase} />;
                          })}
                    </div>
                    <br />
                    <Button onClick={generatePDF} className="float-end">
                      Imprimir lista
                    </Button>
                  </Tab.Pane>
                  <Tab.Pane eventKey="liveModules">
                    {search.length === 0
                      ? keysModulesGroup.map((key) => (
                          <div key={key}>
                            <Accordion defaultActiveKey={key}>
                              <Accordion.Item eventKey={key}>
                                <Accordion.Header>{key}</Accordion.Header>
                                <Accordion.Body>
                                  <ul>
                                    {objModulesGroup[key].map(
                                      (purchase, index) => (
                                        <FilterView key={index} {...purchase} />
                                      )
                                    )}
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                        ))
                      : purchasesResult.map((purchase, index) => {
                          if (purchase.inscription?.typeModule === "sincronico")
                            return <FilterView key={index} {...purchase} />;
                        })}
                  </Tab.Pane>
                  <Tab.Pane eventKey="liveFinishModules">
                    {search.length === 0
                      ? keysFinishModulesGroup.map((key) => (
                          <div key={key}>
                            <Accordion defaultActiveKey={key}>
                              <Accordion.Item eventKey={key}>
                                <Accordion.Header>{key}</Accordion.Header>
                                <Accordion.Body>
                                  <ul>
                                    {objFinishModulesGroup[key].map(
                                      (purchase, index) => (
                                        <FilterView key={index} {...purchase} />
                                      )
                                    )}
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </div>
                        ))
                      : purchasesResult.map((purchase, index) => {
                          if (purchase.inscription?.typeModule === "sincronico")
                            return <FilterView key={index} {...purchase} />;
                        })}
                  </Tab.Pane>
                  <Tab.Pane eventKey="recordedModules">


                      {search.length === 0
                        ? keysRecordModulesGroup.map((key) => (
                            <div key={key}>
                              <Accordion defaultActiveKey={key}>
                                <Accordion.Item eventKey={key}>
                                  <Accordion.Header>{key}</Accordion.Header>
                                  <Accordion.Body>
                                    <ul>
                                      {objRecordModulesGroup[key].map(
                                        (purchase, index) => (
                                          <FilterView
                                            key={index}
                                            {...purchase}
                                          />
                                        )
                                      )}
                                    </ul>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </div>
                          ))
                        : purchasesResult.map((purchase, index) => {
                            if (
                              purchase.inscription?.typeModule === "asincronico"
                            )
                              return <FilterView key={index} {...purchase} />;
                          })}

                  </Tab.Pane>

                  <Tab.Pane eventKey="recordedFinishModules">


                      {search.length === 0
                        ? keysFinishRecordModulesGroup.map((key) => (
                            <div key={key}>
                              <Accordion defaultActiveKey={key}>
                                <Accordion.Item eventKey={key}>
                                  <Accordion.Header>{key}</Accordion.Header>
                                  <Accordion.Body>
                                    <ul>
                                      {objFinishRecordModulesGroup[key].map(
                                        (purchase, index) => (
                                          <FilterView
                                            key={index}
                                            {...purchase}
                                          />
                                        )
                                      )}
                                    </ul>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </div>
                          ))
                        : purchasesResult.map((purchase, index) => {
                            if (
                              purchase.inscription?.typeModule === "asincronico"
                            )
                              return <FilterView key={index} {...purchase} />;
                          })}

                  </Tab.Pane>

                  <Tab.Pane eventKey="completedFormation">
                    {users.data.map((user, index) => {
                      return <FilterView key={index} {...user} />;
                    })}
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
