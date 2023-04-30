import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  NavItem,
} from "react-bootstrap";
import BlogDataServices from "../../../Services/BlogServices";
import moment from "moment";
import { Link } from "react-router-dom";
const AdminArticle = () =>{
    const [articles,setArticles] = useState([]);
    const retrieveArticles = () =>{
        BlogDataServices.getAllArticles()
        .then((response) =>{
            setArticles(response.data.articles)
        })
        .catch(error =>{console.log(error)})
    }

    useEffect(() =>{
        retrieveArticles()
    }, [])

    const deleteArticles = (id) =>{
        BlogDataServices.deleteArticle(id)
        .then(response =>{
            setArticles.filter(article => response.data.articles != article.id)
        })
    }
    const truncate = (str) => {
      return str.length > 50 ? str.substring(0, 100) + " [...]" : str;
    };
    return (
        <>
          {articles.map((article) => (
            <Container key={article._id}>
              <Row className="align-items-center">
                <Image
                  src={`https://api-silvia.divisioncode.net.ar/img/${article.img}`}
                  style={{ height: "200px", width: "400px" }}
                ></Image>
                <Col lg="6">
                  <h3> {article.title}</h3>
                  <span> {truncate(article.paragraph)}</span> <br /><br />
                  <span>{`Creado el ${moment(article.updatedAt).format(
                    "DD/MM/YYYY"
                  )} a las ${moment(article.updatedAt).format(
                    "HH:MM"
                  )} hs.`}</span>{" "}
                  <br />
                  {/* Chequear la ruta */}
                  <NavItem as={Link} to={`/admin/editar-articulo/${article._id}`}>
                  <Button
                    type="button"
                    variant='warning'
                    size="lg"
                  >
                    Editar
                  </Button>
                  </NavItem>
                  <Button
                    type="button"
                    variant='danger'
                    size="lg"
                    className="float-end"
                    onClick={ ()=> deleteArticles(article._id)}
                  >
                    Borrar
                  </Button>
                </Col>
              </Row>
              <hr />
            </Container>
          ))}
        </>
      );
}

export default AdminArticle