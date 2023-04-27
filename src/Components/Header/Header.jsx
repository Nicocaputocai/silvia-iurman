// import  from 'react-bootstrap/Container';
// import  from 'react-bootstrap/Nav';
// import  from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { logo2 } from "../../assets/images"
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import useAuth from "../../hooks/useAuth";


function CollapsibleExample() {
  const {auth, authDispatch} = useAuth()
  const logout = () =>{
    authDispatch({type:'LOGOUT'})
    localStorage.removeItem('token')
  }
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
              <NavDropdown.Item  style={{color:"#9d6b6c"}} as={Link} to="/modulos-presenciales"> Talleres presenciales </NavDropdown.Item>
              <NavDropdown.Item  style={{color:"#9d6b6c"}} as={Link} to="/modulos-grabados">Talleres virtuales </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{fontSize:"0.9rem"}} title="Formación en Eneagrama y Nuevas Constelaciones Familiares" id="collasible-nav-dropdown">
              <NavDropdown.Item style={{color:"#9d6b6c"}} as={Link} to="/NCFA"> Presentación </NavDropdown.Item>
              <NavDropdown.Item  style={{color:"#9d6b6c"}} as={Link} to="/NCFA/modulos-grabados"> Módulos grabados </NavDropdown.Item>
              <NavDropdown.Item  style={{color:"#9d6b6c"}} as={Link} to="/NCFA/modulos-en-directo">Módulos en directo </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link as={Link} to="/NCFA">Formación en Eneagrama y Nuevas Constelaciones Familiares </Nav.Link> */}
            <Nav.Link as={Link} to="/calendario">Actividades</Nav.Link>

            <Nav.Link as={Link} to="/consteladores">Consteladores acreditados</Nav.Link>
            <Nav.Link as={Link} to="/articulos">Articulos</Nav.Link>
            <Nav.Link as={Link} to="/conoceme">Conoceme</Nav.Link>

          </Nav>
          <Nav>
            {
              auth.isLogged ? (
                  <Button onClick={logout}>Logout</Button>
              ) : (
                <Nav.Link as={Link} to="/Login" style={{margin:0, top:"50%",transform: "translate(0%, 5%)"}}>
                Login
                </Nav.Link>
              )
            }
          <Nav.Link
                href="https://www.instagram.com/"
                target="_blank"
              >
                <i
                  className="fab fa-instagram fa-2x"
                 
                ></i>
              </Nav.Link>

              <Nav.Link
                href="https://www.facebook.com/"
                target="_blank"
              >
                <i
                  className="fab fa-facebook fa-2x"
                  
                ></i>
              </Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/"
                target="_blank"
              >
                <i
                  className="fab fa-youtube fa-2x"
                  
                ></i>
              </Nav.Link>
              <Nav.Link
                href="https://www.spotify.com/"
                target="_blank"
              >
                <i
                  className="fab fa-spotify fa-2x"
                  
                ></i>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;