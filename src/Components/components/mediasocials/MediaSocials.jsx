import React from 'react'
import { Nav } from 'react-bootstrap'
import styles from './MediaSocials.module.css'

export const MediaSocials = () => {
  return (
    <Nav className={styles.media_socials}>
        <Nav.Link
                href="https://instagram.com/silvia_cristine_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
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
                href="https://open.spotify.com/episode/0BwLzWtNCHOMBg7JUywZK9?si=HB_CFYIPQzWxYlZAvLDhBA"
                target="_blank"
              >
                <i
                  className="fab fa-spotify fa-2x"
                  
                ></i>
              </Nav.Link>
        </Nav>
  )
}
