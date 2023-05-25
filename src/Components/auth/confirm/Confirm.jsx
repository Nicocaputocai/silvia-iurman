import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import UserDataServices from '../../../Services/UserServices'
import { sucessAlert, errorAlert } from '../../SweetAlert/Alerts'
import { useNavigate } from 'react-router-dom'

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
    <div>
        <Spinner/>
        Confirmando tu cuenta...
    </div>
  )
}
