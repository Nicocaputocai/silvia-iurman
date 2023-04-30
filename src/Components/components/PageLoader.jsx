import React from 'react'
import { Spinner } from 'react-bootstrap'

export const PageLoader = () => {
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <Spinner 
        style={{ width: "4rem", height: "4rem" }}
        animation="grow"
        />
    </div>
  )
}
