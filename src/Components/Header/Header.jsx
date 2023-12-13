
import { Link } from "react-router-dom";
import { logo2 } from "../../assets/images"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useAuth } from "../../hooks";
import { ROLES } from "../../types/TYPES";
import styles from './Header.module.css'
import { MediaSocials } from "../components";
import { cookies } from "../../config/cookies";

export const Header = () => {
  const {auth, authDispatch} = useAuth()
  const logout = () =>{
    authDispatch({type:'LOGOUT'})
    localStorage.removeItem('user')
    // cookies.remove('token')
    localStorage.removeItem('token')
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo2}
          width="75"
          className="d-inline-block align-top p-0 m-0"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse 
      id="basic-navbar-nav" 
      className={styles.navbar_items}>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <NavDropdown title="Taller de constelaciones" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to='/talleres-presenciales'>Talleres presenciales</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/talleres-virtuales'>Talleres virtuales</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/NCFA" className="w-100">
            Formación en Eneagrama y Nuevas Constelaciones Familiares
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/calendario">Actividades</Nav.Link>
          <Nav.Link as={Link} to="/agenda">Agenda</Nav.Link>
          <Nav.Link as={Link} to="/consteladores">Consteladores</Nav.Link>
          <Nav.Link as={Link} to='/articulos'>Artículos</Nav.Link>
          <Nav.Link as={Link} to="/conoceme">Conoceme</Nav.Link>
          {
            auth.isLogged ? (
              <NavDropdown title={auth.user.name} id="basic-nav-dropdown" className="w-50">
                <NavDropdown.Item as={Link} to='/profile'>Mi Perfil</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/dashboard'>Alumnos</NavDropdown.Item>
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
        <MediaSocials/>
      </Navbar.Collapse>
    </Navbar>
  );
}
