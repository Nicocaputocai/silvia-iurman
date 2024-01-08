
import { Link } from "react-router-dom";
import { logo2 } from "../../assets/images"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useAuth } from "../../hooks";
import { ROLES } from "../../types/TYPES";
import styles from './Header.module.css'
import { MediaSocials } from "../components";
import { useState } from "react";

export const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const {auth, authDispatch} = useAuth()
  
  const handleNavItemClick = () => {
    setExpanded(false); // Cierra el menú al hacer clic en un elemento del menú
  };

  const logout = () =>{
    authDispatch({type:'LOGOUT'})
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }
  return (
     <Navbar expanded={expanded} bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo2}
          width="75"
          className="d-inline-block align-top p-0 m-0"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse 
      id="basic-navbar-nav" 
      className={styles.navbar_items}>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" onClick={handleNavItemClick}>Inicio</Nav.Link>
          <NavDropdown title="Taller de constelaciones" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to='/talleres-presenciales'>Talleres presenciales</NavDropdown.Item>
            <NavDropdown.Item as={Link} to='/talleres-virtuales'>Talleres virtuales</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/NCFA" className="w-100" onClick={handleNavItemClick}>
            Formación en Eneagrama y Nuevas Constelaciones Familiares
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/calendario" onClick={handleNavItemClick}>Actividades</Nav.Link>
          <Nav.Link as={Link} to="/agenda" onClick={handleNavItemClick}>Agenda</Nav.Link>
          <Nav.Link as={Link} to="/consteladores" onClick={handleNavItemClick}>Consteladores</Nav.Link>
          <Nav.Link as={Link} to='/articulos' onClick={handleNavItemClick}>Artículos</Nav.Link>
          <Nav.Link as={Link} to="/conoceme" onClick={handleNavItemClick}>Conoceme</Nav.Link>
          {
            auth.isLogged ? (
              <NavDropdown title={auth.user.name} id="basic-nav-dropdown" className="w-50">
                <NavDropdown.Item as={Link} to='/profile' onClick={handleNavItemClick}>Mi Perfil</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/dashboard' onClick={handleNavItemClick}>Alumnos</NavDropdown.Item>
                {
                  auth.user.role === ROLES.ADMIN && <NavDropdown.Item as={Link} to='/admin' onClick={handleNavItemClick}>Admin</NavDropdown.Item>
                }
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login" onClick={handleNavItemClick}>Login</Nav.Link>
            )
          }
        </Nav>
        <MediaSocials/>
      </Navbar.Collapse>
    </Navbar>
  );
}
