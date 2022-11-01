import { Container, Row, Col, Image, CardGroup, Card } from "react-bootstrap"
import logo from "../assets/logo1.jpg"
import silvia from "../assets/Silvia.jpg"
import banner from "../assets/banner.jpg"
import activity from "../assets/actividad.png"

const Home = () => {
  return (
    <>
      <Container fluid>
        
      <Row className="banner aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <br />
            <br />
            <h1 >SILVIA IURMAN</h1>
            <p >Nuevas Constelaciones Familiares Argentina</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Image src={silvia} roundedCircle="true" style={{width:'auto', height:'300px'}}/>
          </Col>
        </Row>

      </Container>
        <br />
      <Container>
        <Row>
          <Col lg="4">
            <h2>Silvia Iurman</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dolorum perferendis maxime ipsum. Harum sapiente dolor amet earum quos illo temporibus facilis atque! Temporibus deserunt quia quidem iste? Dignissimos beatae sunt id saepe totam rem odit porro minus omnis debitis repellat neque exercitationem sint sapiente eum aliquid tempora commodi doloremque voluptatum, magnam vel laborum necessitatibus magni odio! Voluptatibus iste ratione aliquam amet assumenda dicta, ipsam maiores nulla totam libero qui tempora inventore accusamus tempore at, dolorum a voluptas quibusdam doloremque perspiciatis quisquam voluptatem officia. Id, provident dolores? Ea delectus unde ad, praesentium ullam iusto eum nam dignissimos qui? Culpa, impedit.</p>
          </Col>
          <Col lg="4">
            <Image src={silvia} style={{width:'400', height:'400px'}}/>
          </Col>
          <Col lg="4">
          <iframe width="400" height="400px" src="https://www.youtube.com/embed/Pe_tb5iKR-Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Col>
        </Row>
        <br />
        <div align="center">
        
        </div>
        <h2>Próximas actividades</h2>
        <br />
        <CardGroup>
      <Card>
        <Card.Img variant="top" src={activity} />
        <Card.Body>
          <Card.Title>Actividad 1</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src={activity} />
        <Card.Body>
          <Card.Title>Actividad 2</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src={activity} />
        <Card.Body>
          <Card.Title>Actividad 3</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
      </Container>
    </>
  );
};

export default Home