import React from 'react'
import { Nav } from 'react-bootstrap'
import styles from './MediaSocials.module.css'

export const MediaSocials = () => {
  return (
    <Nav className={styles.media_socials}>
        <Nav.Link
                href="https://www.instagram.com/"
                target="_blank"
              >
                <i
                  className="fab fa-instagram fa-2x"
                 
                ></i>
              </Nav.Link>

              <Nav.Link
                href="https://www.facebook.com/"
                target="_blank"
              >
                <i
                  className="fab fa-facebook fa-2x"
                  
                ></i>
              </Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/"
                target="_blank"
              >
                <i
                  className="fab fa-youtube fa-2x"
                  
                ></i>
              </Nav.Link>
              <Nav.Link
                href="https://www.spotify.com/"
                target="_blank"
              >
                <i
                  className="fab fa-spotify fa-2x"
                  
                ></i>
              </Nav.Link>
        </Nav>
  )
}
