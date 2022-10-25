// import  from 'react-bootstrap/Container';
// import  from 'react-bootstrap/Nav';
// import  from 'react-bootstrap/Navbar';
import logo from "../../assets/logo1.jpg"
import { Container, Nav, Navbar } from "react-bootstrap"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo}               
              alt="logo"
              width="100"
              height="80" 
              style={{ borderRadius: "50%",margin:"auto", display: "block" }}
              />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/talleres-presenciales">Talleres presenciales</Nav.Link>
            <Nav.Link href="/talleres-virtuales">Talleres virtuales</Nav.Link>
            <Nav.Link href="/ncf-y-eneagrama">Formación en Eneagrama y Nuevas Constelaciones Familiares </Nav.Link>
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link href="/articulos">Articulos</Nav.Link>
            <Nav.Link href="conoceme">Conoceme</Nav.Link>
            {/* <Nav.Link href=""></Nav.Link> */}
          </Nav>
          <Nav>
          <Nav.Link
                href="https://www.instagram.com/"
                target="_blank"
              >
                <i
                  class="fab fa-instagram fa-2x"
                 
                ></i>
              </Nav.Link>

              <Nav.Link
                href="https://www.facebook.com/"
                target="_blank"
              >
                <i
                  class="fab fa-facebook fa-2x"
                  
                ></i>
              </Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/"
                target="_blank"
              >
                <i
                  class="fab fa-youtube fa-2x"
                  
                ></i>
              </Nav.Link>
              <Nav.Link
                href="https://www.spotify.com/"
                target="_blank"
              >
                <i
                  class="fab fa-spotify fa-2x"
                  
                ></i>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;