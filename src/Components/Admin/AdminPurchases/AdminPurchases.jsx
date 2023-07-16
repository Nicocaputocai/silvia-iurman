import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Nav, Row, Tab } from "react-bootstrap";
import { usePurchases } from "../../../hooks/usePurchase";
import { useActivities } from "../../../hooks/useActivities";
import { useModules } from "../../../hooks/useModules";
import { useUsers} from "../../../hooks/useUsers";
import { FilterView } from "./FilterView/FilterView";
import { useReactToPrint } from "react-to-print";





export const AdminPurchases = () => {
  const { purchases} = usePurchases();
  const {activities} = useActivities();
  const {modules} = useModules();
  const { users } = useUsers();
  const [search, setSearch] = useState([]);
  const [purchasesResult, setPurchasesResult] = useState([]);
  const [keysActivitiesGroup,setKeysActivitiesGroup] = useState([]);
  const [objActivitiesGroup,setObjActivitiesGroup] = useState([]);
  const [keysModulesGroup,setKeysModulesGroup] = useState([]);
  const [objModulesGroup,setObjModulesGroup] = useState([]);
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
      let fullname = element.user_id?.firstName && element.user_id.lastName || "";
      let nameFull = element.user_id?.firstName && element.user_id.lastName || "";
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

const gruopingActivities = () =>{
  const objActivitiesGroup = {};
  activities.data.forEach(({ title, _id:_idActivity }) => {
    const purchasesFilter = purchases.data.filter((e)=>e.inscription).filter(({ inscription: { _id:_idInscription } }) =>
      _idInscription === _idActivity
    );
    if(purchasesFilter.length)
    objActivitiesGroup[title] = purchasesFilter;
  });
  return objActivitiesGroup
};

const mappingActivitiesGroup = async() =>{
  const objectActivitiesGroup = await gruopingActivities();
  const keysActivitiesGroup = Object.keys(objectActivitiesGroup)
  setKeysActivitiesGroup(keysActivitiesGroup)
  setObjActivitiesGroup(objectActivitiesGroup)
}

const gruopingModules = () =>{
  const objModulesGroup = {};
  modules.data.forEach(({ title, _id:_idModules }) => {
    
    const purchasesFilter = purchases.data.filter((e)=>e.modules).filter(({ modules}) =>
      _idInscription === modules
    );
    if(purchasesFilter.length)
    objModulesGroup[title] = purchasesFilter;
  });
  return objModulesGroup
};

const mappingModulesGroup = async() =>{
  const objectModulesGroup = await gruopingModules();
  const keysModulesGroup = Object.keys(objectModulesGroup)
  setKeysModulesGroup(keysModulesGroup)
  setObjModulesGroup(objectModulesGroup)
}


useEffect(() =>{
  mappingActivitiesGroup()
  ,mappingModulesGroup()
},[activities, modules])

const generatePDF = useReactToPrint({
  content:() => componentPDF.current,
  documentTitle:"Listado de inscriptos",
  onAfterPrint: () =>alert("PDF generado")
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
                  {search.length === 0 ?
                          keysActivitiesGroup.map((key) => (
                            <div key={key} ref={componentPDF}>
                            <h2>Titulo de la actividad: {key}</h2>

                            <ul>
                            {objActivitiesGroup[key].map((purchase, index) => 
                               <FilterView key={index} {...purchase} />
                              )}
                            </ul>
                            <Button onClick={generatePDF}>Descargar PDF</Button>
                            </div>
                            
                          ))

                        : purchasesResult.map((purchase, index) => {
                          if (purchase?.inscriptionModel === "Activity")
                            return <FilterView key={index} {...purchase} />;
                          })
                          }
                  </Tab.Pane>
                  <Tab.Pane eventKey="liveModules"> 
                  {search.length === 0 ?
                  purchases.data.map((purchase, index) => {
                    if (purchase.inscription?.typeModule === "sincronico")
                      return <FilterView key={index} {...purchase} />;
                    })
                  
                        //  keysModulesGroup.map((key) => (
                        //   <div key={key}>
                        //   <h2>Titulo del módulo: {key}</h2>
                        //   <ul>
                        //   {objModulesGroup[key].map((purchase, index) => 
                        //      <FilterView key={index} {...purchase} />
                        //     )}
                        //   </ul>
                        //   </div>
                        // ))
                        : purchasesResult.map((purchase, index) => {
                          if (purchase.inscription?.typeModule === "sincronico")
                            return <FilterView key={index} {...purchase} />;
                          })}

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

                  </Tab.Pane>

                  <Tab.Pane eventKey="completedFormation">
                  {users.data.map((user, index) => {
                            return <FilterView key={index} {...user} />;
                          })
                        }
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
