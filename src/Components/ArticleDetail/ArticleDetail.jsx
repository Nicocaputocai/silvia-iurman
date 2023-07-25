import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card, Nav } from "react-bootstrap";
import BlogDataServices from '../../Services/BlogServices';
import styles from './ArticleDetail.module.css'
import { HelmetPage } from "../components";

const  ArticleDetail= ()=>{

    const {id} = useParams();
    const [article ,setArticle] = useState([])
    const retrieveArticle= () => {
        BlogDataServices.getById(id)
        .then(response => {
            setArticle(response.data.article);
        })
        .catch( err => console.log(err));
    };

    useEffect(() => {
        retrieveArticle();
    }, []);

    return(
        <>
        <HelmetPage
        section={article.title}
        content={article.paragraph}
        />
        <Container>
            <Row>
                <Col className="justify-content-md-center">
                    <Image  className={`mx-auto d-block ${styles.imgDetail}`} fluid="true" src={`https://api-silvia.divisioncode.net.ar/img/${article.img}`} />
                </Col>
            </Row>
            <Row >
                <Col className="m-3">
                    <h1> {article.title} </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className={`m-3 ${styles.pDetail}`}>{article.paragraph}</p>
                </Col>
            </Row>
            <br />
        </Container>
        </>
    )
};

export default ArticleDetail;