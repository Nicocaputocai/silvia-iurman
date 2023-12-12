import React from "react";
import { Card, Col, Container } from "react-bootstrap";

export const SimpleCard = ({ constellation }) => {
  return (



    
    <Col className="mb-4">
      <Card

      >
        <Card.Img
          variant="top"
          src={`https://api.silviaiurman.com/img/${constellation.avatar}`}
        />
        <Card.Body>
          <Card.Title className="fw-bold fs-5">
            {`${constellation.firstName} ${constellation.lastName}`}
          </Card.Title>
          <Card.Subtitle>{`${constellation.country != undefined ? constellation.country : ""}`}</Card.Subtitle>
          <Card.Link style={{textDecoration: "none", color: 'inherit'}}  href={`mailto:${constellation.email}`}>{`${constellation.email != undefined ? constellation.email :""}`}</Card.Link>
          <Card.Link  style={{textDecoration: "none", color: 'inherit'}} href={`callto:${constellation.phone}`}>{`${constellation.phone != undefined ? constellation.phone : ""}`}</Card.Link>

        </Card.Body>
      </Card>
    </Col>
  );
};
