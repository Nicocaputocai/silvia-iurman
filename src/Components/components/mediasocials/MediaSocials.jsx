import React from 'react'
import { Nav } from 'react-bootstrap'
import styles from './MediaSocials.module.css'

export const MediaSocials = () => {
  return (
    <Nav className={styles.media_socials}>
        <Nav.Link
                href="https://www.instagram.com/silvia_cristine_/"
                target="_blank"
              >
                <i
                  className="fab fa-instagram fa-2x"
                 
                ></i>
              </Nav.Link>

              <Nav.Link
                href="https://www.facebook.com/sisiiurman"
                target="_blank"
              >
                <i
                  className="fab fa-facebook fa-2x"
                  
                ></i>
              </Nav.Link>
              <Nav.Link
                href="https://www.youtube.com/@silviaiurmannuevasconstela4168"
                target="_blank"
              >
                <i
                  className="fab fa-youtube fa-2x"
                  
                ></i>
              </Nav.Link>
              <Nav.Link
                href="https://open.spotify.com/show/0uSyK47kbFHRqBtnZoPfp3"
                target="_blank"
              >
                <i
                  className="fab fa-spotify fa-2x"
                  
                ></i>
              </Nav.Link>
        </Nav>
  )
}
