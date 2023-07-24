import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom'
import {Button,Form,Container,Image, NavItem, Alert, Spinner, Badge} from 'react-bootstrap'
import PurchasesDataServices from "../../../../Services/PurchasesServices";
import {useForm} from 'react-hook-form'
import { PageLoader } from '../../../components/PageLoader';
import {usePurchases} from '../../../../hooks';
import { PURCHASE, PAY } from '../../../../types/TYPES';
import Swal from 'sweetalert2';
import { errorAlert, sucessAlert } from '../../../SweetAlert/Alerts';
import CheckoutServices from "../../../../Services/CheckoutServices";

export const EditPurchase = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const {purchasesDispatch} = usePurchases();
  const [payLoading, setPayLoading] = useState(false)
  const [editPurchase, setEditPurchase] = useState({
    data: {},
    isLoading: true
  });
  const {register, formState:{errors, defaultValues}, handleSubmit, reset} = useForm();
  const navigate = useNavigate();

  const retrievePurchase = async() =>{
    setEditPurchase({ ...editPurchase, isLoading: true});
    try {
      const {data} = await PurchasesDataServices.getById(id)
      setEditPurchase({
        data: data.purchase,
        isLoading: false
      });
      reset({...data.purchase})
    } catch (error) {
      console.log(error)
    }
  };

  const confirmPay = async (data) => {
    setPayLoading(true)
    try{
      const response = await CheckoutServices.confirmTransfer({id:data})
      if(response.status !== 200){
        errorAlert(response.data.msg)
      }
      setEditPurchase({
          ...editPurchase,
          data: response.data.purchase,
        })
        sucessAlert(response.data.msg)
    }catch(error){
      console.log(error)
      errorAlert(error.response.data.msg)
    }finally {
      setEditPurchase({
        ...editPurchase,
        isLoading: false
      })
      setPayLoading(false)
    }
  }

  const save = async (dataForm) => {
    setLoading(true)
    Swal.fire({
      title: 'Quieres editar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Editar!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const {data} = await PurchasesDataServices.editPurchase(id, {
            ...dataForm,
          })
          purchasesDispatch({
            type: PURCHASE.EDIT,
            payload: data.purchaseUpdated
          })
          sucessAlert('Módulo editado correctamente')
      
          navigate('/admin')
        } catch (error) {
          console.log(error);
          errorAlert('No se pudo actualizar la inscripción')
        }
        finally{
          setLoading(false)
        }
      }
    })
  }
  useEffect(() =>{
    retrievePurchase();
  },[id]);

  if(editPurchase.isLoading){
    return <PageLoader/>;
  }
  return (
    <>
            <Container>
        <Form onSubmit={handleSubmit(save)}>
          <p> <b>Nombre: </b> {editPurchase.data.user_id?.firstName || editPurchase.data.user_id._id?.firstName } { editPurchase.data.user_id?.lastName || editPurchase.data.user_id._id?.lastName}</p>
          <p> <b>Inscripto a :</b> {editPurchase.data.inscription.title || editPurchase.data.inscription.name}</p>
          {/* <Form.Group>
            <Form.Label> Forma de Pago </Form.Label>
            <Form.Select
            defaultValue={editPurchase.data.wayToPay}
            
              type="select"
              {...register("wayToPay", 
              {
                required: {
                  value: true,
                  message: "La modalidad es requerida",
                }
              })
              }
            >
              <option value="#" disabled hidden>
                Seleccione la modalidad.....
              </option>
              <option value={PAY.MP}>Mercado Pago</option>
              <option value={PAY.PP}>Paypal</option>
              <option value={PAY.TRANS}>Transferencia/efectivo</option>
            </Form.Select>
            {
              errors.modality && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.modality.message}
                              </Alert>
            }
          </Form.Group> */}
          <p> <b> Forma de pago: </b> {editPurchase.data.wayToPay}</p>
          {/* <Form.Group>
            <Form.Label> ¿Pagó? </Form.Label>
            <Form.Select
            disabled = {editPurchase.data.wayToPay === PAY.TRANS ? false : true}
            defaultValue={editPurchase.data.pay}
              type="select"
              {...register("pay", 
              {
                required: {
                  value: true,
                  message: "La modalidad es requerida",
                }
              })
              }
            >
              <option value="#" disabled hidden>
                Seleccione la modalidad.....
              </option>
              <option value={false}>No</option>
              <option value={true}>Si</option>
            </Form.Select>
            {
              errors.pay && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.pay.message}
                              </Alert>
            }
          </Form.Group> */}
         <div className="d-flex justify-content-start align-items-center gap-2">
          <p className="m-0"> <b> Pago: </b> </p>
            <Badge 
            className="d-flex align-items-center"
            pill 
            bg={editPurchase.data.pay ? "success" : "warning"}
            text={editPurchase.data.pay ? "light" : "dark"}>
            {editPurchase.data.pay ? "Confirmado" : "Pendiente..."}
            </Badge>
            <Button 
            variant="primary" 
            disabled={editPurchase.data.pay}
            onClick={() => confirmPay(editPurchase.data._id)}
            >{payLoading ? <Spinner 
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                          /> :
                          'Confirmar pago'
            }</Button>
         </div>

          <Form.Group>
            <Form.Label> ¿Finalizó?</Form.Label>
            <Form.Select
            defaultValue={editPurchase.data.finish}
            name="finish"
              type="select"
              {...register("finish", 
              {
                required: {
                  value: true,
                  message: "La modalidad es requerida",
                }
              })
              }
            >
              <option value="#" disabled hidden>
                Seleccione la modalidad.....
              </option>
              <option value={false}>No</option>
              <option value={true}>Si</option>
            </Form.Select>
            {
              errors.modality && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.modality.message}
                              </Alert>
            }
          </Form.Group>
         
          <br />
          <NavItem as={Link} to={`/admin`}>
            <Button 
            className="mb-3" 
            type={Link} size="lg" v
            ariant="danger"
            disabled={loading}
            >
              Cancelar
            </Button>
          </NavItem>
          <Button
            className="mb-3 float-end"
            size="lg"
            variant="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? <Spinner 
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                          /> : "Editar inscripción"}
          </Button>
        </Form>
        </Container>
      

    </>
  )
}
