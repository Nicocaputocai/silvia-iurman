import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { SilviaCuadrada } from '../../assets/images'
import { SimpleCard } from './SimpleCard'
import { HelmetPage } from '../components'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import UserDataServices from '../../Services/UserServices'
import { useState } from 'react'
import { PageLoader } from '../components/PageLoader'

const constellation_ = {
  firstName: 'Silvia',
  lastName: 'Iurman',
  avatar: SilviaCuadrada
}

export const Constellators = () => {
  const [constellators, setConstellators] = useState({
    data: [],
    isLoading: true
  })

  const getConstellators = async () => {
    try {
      const { data } = await UserDataServices.getConstellators()
      console.log(data)
      setConstellators({
        isLoading:false,
        data: data.constellators,
      })
    } catch (error) {
      console.log(error)
    } 
  }

  UserDataServices

  useEffect(()=>{
    AOS.init({
      duration: 1000
    })
    getConstellators()
  },[])
  console.log(constellators)

  if(constellators.isLoading) return (
    <PageLoader/>
  )

  return (
    <>
    <HelmetPage section='Consteladores' content='Consteladores - Nuevas Constelaciones Familiares Argentina'/>

    <Container className='text-center d-flex flex-column' style={{minHeight: '80vh', minWidth: '100vw'}}>
      <h1 className='mt-3 mb-3 textColor'>Consteladores acreditados</h1> 


    {/* Esto solo es a modo de prueba! */}
    {/* <Row xs={1} sm={2} md={4} className="g-4 mb-3">
          {
            constellators.data.map((constellation, idx) => <SimpleCard constellation={constellation} key={idx}/>)
          }
    </Row> */}
    
        <Row xs={1} sm={2} md={4} className="g-4 mb-3">
        {
            constellators.data.map((constellation, idx) => <SimpleCard constellation={constellation} key={idx}/>)
          }
        </Row>
    
    
   
    </Container>
    </>
  )
}
