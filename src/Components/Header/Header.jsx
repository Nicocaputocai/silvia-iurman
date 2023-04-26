// import  from 'react-bootstrap/Container';
// import  from 'react-bootstrap/Nav';
// import  from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { logo2 } from "../../assets/images"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          <img src={logo2}               
              alt="logo"
              width="100"
              height="100" 
              className="img-fluid"
              style={{ borderRadius: "50%",margin:"auto", display: "block" }}
              />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <NavDropdown title="Talleres de constelaciones" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/talleres-presenciales"> Talleres presenciales </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/talleres-virtuales">Talleres virtuales </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  title="Formación en Eneagrama y Nuevas Constelaciones Familiares" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/NCFA"> Presentación </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/talleres-presenciales"> Módulos grabados </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/talleres-virtuales">Módulos en directo </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link as={Link} to="/NCFA">Formación en Eneagrama y Nuevas Constelaciones Familiares </Nav.Link> */}
            <Nav.Link as={Link} to="/calendario">Actividades</Nav.Link>
            <Nav.Link as={Link} to="/calendario">Actividades</Nav.Link>

            <Nav.Link as={Link} to="/articulos">Consteladores acreditados</Nav.Link>
            <Nav.Link as={Link} to="/articulos">Articulos</Nav.Link>
            <Nav.Link as={Link} to="/conoceme">Conoceme</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/Login" style={{margin:0, top:"50%",transform: "translate(0%, 5%)"}}>
            Login
            </Nav.Link>
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