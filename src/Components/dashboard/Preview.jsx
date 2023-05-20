import React from 'react'
import styles from './dashboard.module.css'
import ReactPlayer from 'react-player'

export const Preview = ({content}) => {
  return (
    <div className={`border rounded ${styles.content_module}`}>
          {
            !content
            ? <span>Contenido del módulo</span>
            : 
            <ReactPlayer
            url={content.link}
            controls
            width="100%"
            />

          }
    </div>
  )
}
