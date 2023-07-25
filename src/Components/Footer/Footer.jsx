import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Footer.css";
import { logo2 } from "../../assets/images"

const Footer = () => {
  return (
    <>
      <footer className="position-sticky bottom-0 w-100">
        <Navbar bg="light" variant="light">
          <Container>
            <Nav className="justify-content-start align-items-center">
              <Nav.Link href="/">
              <Nav.Item>
                <img
                  src={logo2}
                  alt="logo"
                  width="100"
                  height="100"
                  // className="img-fluid"
                  style={{
                    borderRadius: "50%",
                    margin: "auto",
                    display: "block",
                  }}
                />
              </Nav.Item>
              </Nav.Link>
              
            </Nav>

            <Nav className="m-auto">

            </Nav>

            <Nav className="justify-content-end">
              <Nav.Item>
              <Nav.Link href="https://www.instagram.com/" target="_blank" className="img-fluid">
                <i className="fab fa-instagram fa-2x"></i>
              </Nav.Link>
              </Nav.Item>

              <Nav.Link href="https://www.facebook.com/" target="_blank" className="img-fluid">
                <i className="fab fa-facebook fa-2x"></i>
              </Nav.Link>

              <Nav.Item>
              <Nav.Link href="https://www.youtube.com/" target="_blank" className="img-fluid">
                <i className="fab fa-youtube fa-2x"></i>
              </Nav.Link>
              </Nav.Item>
              <Nav.Item>
              <Nav.Link href="https://www.spotify.com/" target="_blank" className="img-fluid">
                <i className="fab fa-spotify fa-2x"></i>
              </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>

        <Navbar bg="light" variant="light">
          <Container >
          <Nav className="m-auto">
            <Nav.Item>
              <Nav.Link href="https://www.instagram.com/emilyestuvoaqui/" target="_blank">
                <span>Diseño &copy; 2022 Emily Harnan</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                |
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link href="https://www.divisioncode.net.ar/" target="_blank">

                <span>Desarrollo &copy; 2022 The Division Code</span>
              </Nav.Link>
            </Nav.Item>
            </Nav>
          </Container>

        </Navbar>
      </footer>
    </>
  );
};

export default Footer;