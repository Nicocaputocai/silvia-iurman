import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { truncate } from "../../../helpers";
import moment from "moment";
import styles from "./CardComponent.module.css";

export const CardComponent = ({
  activity,
  description = "",
  button = false,
}) => {
  return (
    <Col>
      <Card>
        <Link
          className="text-black text-decoration-none"
          to={`/calendario/${activity._id}`}
        >
          <Card.Img
            variant="top"
            className={styles.card_img_size}
            src={`https://api.silviaiurman.com/img/${activity.img}`}
            loading="lazy"
          />

          <Card.Body>
            <Card.Title>{activity.title}</Card.Title>
            <Card.Text>
              {" "}
              <b>Fecha:</b>{" "}
              {moment(activity.day)
                .utcOffset("+00")
                .format(
                  "DD/MM/YYYY [a las]  h:mm A [(hora Argentina (GTM -3))]"
                )}
            </Card.Text>
            <Card.Text>
              {" "}
              {description ? truncate(activity.description) : ""}
            </Card.Text>
            {button && (
              <Button variant="secondary" className="float-end mb-3 bgColor">
                Ver actividad
              </Button>
            )}
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};
