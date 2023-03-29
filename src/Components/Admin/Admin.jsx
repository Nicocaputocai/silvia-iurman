import { useState, useEffect } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import AddActivity from './AddActivity';
import AdminActivity from './AdminActivity';
import AddArticle from './AddArticle';
import AdminArticle from './AdminArticle';
import AdminCourse from './AdminCourse';
import AdminPurchases from './AdminPurchases';


const Admin = () =>{
    return(
        <> 
        <Container>
            <h2>Panel de administración</h2>
        </Container>

        <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
      <Nav.Item>
          <Nav.Link eventKey="addActivity">Agregar actividad</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="AdminActivity">Administrar actividades</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="addArticle">Agregar artículo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="AdminArticle">Administrar artículos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="AdminCourse">Administrar cursos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="AdminPurchases">Administrar inscriptos</Nav.Link>
        </Nav.Item>
        

      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="addActivity">
            <AddActivity />
        </Tab.Pane>
        <Tab.Pane eventKey="AdminActivity">
        <AdminActivity />
        </Tab.Pane>
        <Tab.Pane eventKey="addArticle">
            <AddArticle/>
        </Tab.Pane>
        <Tab.Pane eventKey="AdminArticle">
          <AdminArticle />
        </Tab.Pane>
        <Tab.Pane eventKey="AdminCourse">
          <AdminCourse/>
        </Tab.Pane>
        <Tab.Pane eventKey="AdminPurchases">
          <AdminPurchases/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
        </Container>
        
        
        </>
    )
}

export default Admin