import React, { useEffect } from 'react'
import { errorAlert, sucessAlert } from '../SweetAlert/Alerts'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Styles from './Styles.module.css'
import CheckoutServices from '../../Services/CheckoutServices'
import { Spinner } from 'react-bootstrap'
import { useCheckout } from '../../hooks/useCheckout'

export const Payment = () => {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate();
    const purchase = JSON.parse(localStorage.getItem('purchase'));

    const getPaymentStatus = async () => {


      if(!searchParams.get('collection_id') && !searchParams.get('token')){
          localStorage.removeItem('purchase');
          errorAlert('No se encontro ninguna compra!');
          navigate('/dashboard');
          return;
      }


      if(searchParams.get('collection_id')){
        const data = {
          id: searchParams.get('collection_id'),
          idPurchase: purchase.id,
          type: purchase.type
        }
        try {
          const response = await CheckoutServices.getStatusMP(data);
          sucessAlert(response.data.msg);
          navigate('/dashboard');
          return;
        } catch (error) {
          errorAlert(error.response.data.msg);
          navigate('/dashboard');
          return;
        } finally {
          localStorage.removeItem('purchase');
          console.log('finally')
        }
      }

      if(searchParams.get('token')){
        const data = {
          id: searchParams.get('token'),
          idPurchase: purchase.id,
          type: purchase.type
        }
        try {
          const response = await CheckoutServices.getStatusPP(data);
          sucessAlert(response.data.msg);
          navigate('/dashboard');
          return;
        } catch (error) {
          errorAlert(error.response.data.msg);
          navigate('/dashboard');
          return;
        } finally {
          localStorage.removeItem('purchase');
        }
      } 
    }

    useEffect(() => {
      getPaymentStatus();
    }, [])
      
  return (
    <div className={Styles.bg}>
      <Spinner animation="border" role="status" />
      Verificando compra...
    </div>
  )
}
