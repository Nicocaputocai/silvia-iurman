// import  from 'react-bootstrap/Container';
// import  from 'react-bootstrap/Nav';
// import  from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { logo2 } from "../../assets/images"
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import useAuth from "../../hooks/useAuth";
import { ROLES } from "../../types/TYPES";


function CollapsibleExample() {
  const {auth, authDispatch} = useAuth()
  const logout = () =>{
    authDispatch({type:'LOGOUT'})
    localStorage.removeItem('token')
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={logo2}
          width="75"
          height="75"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="flex p-2 justify-content-between">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <NavDropdown title="Taller de constelaciones" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to='/modulos-presenciales'>Talleres presenciales</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/modulos-grabados'>Talleres virtuales</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/calendario">Actividades</Nav.Link>
          <Nav.Link as={Link} to="/consteladores">Consteladores</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to='/articulos'>Artículos</Nav.Link>
          <NavDropdown title="Formación en Eneagrama y Nuevas Constelaciones Familiares" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to='/NCFA'>Presentación</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to='/NCFA/modulos-grabados'>Módulos grabados</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/NCFA/modulos-en-directo'>Módulos en directo</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/conoceme">Conoceme</Nav.Link>
          {
            auth.isLogged ? (
              <NavDropdown title={auth.user.name} id="basic-nav-dropdown" className="w-50">
                <NavDropdown.Item as={Link} to='/dashboard'>Dashboard</NavDropdown.Item>
                {
                  auth.user.role === ROLES.ADMIN && <NavDropdown.Item as={Link} to='/admin'>Admin</NavDropdown.Item>
                }
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )
          }
        </Nav>
        <Nav>
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
    </Navbar>
  );
}



export default CollapsibleExample;