import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import UserDataServices from '../../../Services/UserServices'
import { sucessAlert, errorAlert } from '../../SweetAlert/Alerts'
import { useNavigate } from 'react-router-dom'
import { HelmetPage } from '../../components'

export const Confirm = () => {
  const {uuid} = useParams()
  const navigate = useNavigate()

  const confirmUser = async () => {
    try {
        const response = await UserDataServices.confirmUser(uuid);
        sucessAlert(response.data.msg);
        navigate('/login')

    } catch (error) {
        errorAlert(error.response.data.msg)
        navigate('/login')
    }
  }

  useEffect(() => {
    confirmUser()
  }
  ,[uuid])
  return (
    <>
      <HelmetPage section='Verificación de Cuenta' content='Verificación de Cuenta de la página de Silvia Iurman - Nuevas Constelaciones Familiares Argentina'/>
      <div className='w-full h-full d-flex justify-content-center align-items-center flex-column'>
          <Spinner/>
          Confirmando tu cuenta...
      </div>
    </>
  )
}
