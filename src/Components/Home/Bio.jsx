import { Button, Col, Image, NavItem, Row } from 'react-bootstrap';
import {Silvia} from '../../assets/images';
import { Link } from 'react-router-dom';

export const Bio = () => {
  return (
      <Row>
          <Col lg="4" className='mt-3'>
              <Image className="img-fluid rounded-circle w-100 h-auto" src={Silvia} />
          </Col>
          <Col lg="8" className='mt-5'>
              <h1 className='rounded title'>Silvia Iurman</h1>
              <p>
                  Inicié mí búsqueda consciente en mi adolescencia. A partir de entonces, he transitado por diferentes escuelas filosóficas y psicológicas, he recorrido caminos que me condujeran en lo personal y en lo clínico hacia lo Transpersonal, tomando de grandes maestros occidentales y orientales. <br /><br />
                  La creación de Eneagrama Escuela de Vida me permitió incluir un dinamismo, neuropsicobiológico y transpersonal apoyado en el ala psicológica y espiritual del eneagrama, cuya piedra angular es la filosofía de vida de las Fuerzas del Amor de las Nuevas Constelaciones Familiares. <br /><br />
                  Mi camino es contribuir y posibilitar, desde este sistema integrativo, espacios para una vida consciente y saludable en todos los órdenes y para esto incluyo el trabajo con trauma, estrés y las comprensiones de las Neurociencias aplicadas.  <br /><br />
                  Amo mi formación de grado como psicóloga clínica y agradezco a cada formación, escuela y recorrido transitado, que me dan la posibilidad de crear un sistema integrativo, en esta trama que es la vida, al servicio de una vida consciente y de la consciencia  colectiva.
              </p>
              <NavItem as={Link} to="/conoceme">
                  <Button variant="secondary" className="float-end bgColor">Biografía completa</Button>
              </NavItem>
          </Col>


          {/* <Col lg="4" style={{marginTop:"15px"}}>
          <iframe  style={{ borderRadius: "2%"}} width="400vw" height="400px" src="https://www.youtube.com/embed/Pe_tb5iKR-Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Col> */}
      </Row>
  )
}
