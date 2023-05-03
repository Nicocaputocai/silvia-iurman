import moment from 'moment'
import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { truncate } from '../../helpers/truncate'
import { Link } from 'react-router-dom'
import styles from './Articles.module.css'

export const CardArticle = ({article}) => {
  return (
      <Col>
          <Card>
              <Link
                  className='text-black text-decoration-none'
                  to={`/articulos/${article._id}`} >
                  <Card.Img variant="top" className={styles.cardImage} src={`https://api-silvia.divisioncode.net.ar/img/${article.img}`} />

                  <Card.Body>
                      <Card.Title className='textColor'>{article.title}</Card.Title>

                      <Card.Text> {truncate(article.paragraph)}</Card.Text>
                      <small className='float-end'> {`Creado el ${moment(article.updatedAt).format("DD/MM/YYYY")}.`} </small>
                  </Card.Body>

              </Link>
          </Card>
      </Col>
  )
}
