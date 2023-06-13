import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom'
import {Button,Form,Container,Image, NavItem, Alert, Spinner} from 'react-bootstrap'
import PurchasesDataServices from "../../../../Services/PurchasesServices";
import {useForm} from 'react-hook-form'
import { PageLoader } from '../../../components/PageLoader';
import { createFormData } from '../../../../helpers';
import {usePurchases} from '../../../../hooks/usePurchase';
import { PURCHASE, PAY } from '../../../../types/TYPES';
import Swal from 'sweetalert2';
import { errorAlert, sucessAlert } from '../../../SweetAlert/Alerts';

export const EditPurchase = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const {purchasesDispatch} = usePurchases();
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

  const save = async(data) =>{

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
          const updateData = {
            ...data,
          }
          const response = await PurchasesDataServices.editPurchase(id, createFormData(updateData))
          purchasesDispatch({type: PURCHASE.EDIT , payload: response.data.purchase})
          sucessAlert('Inscripción actualizada con éxito')
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
          <h3>Nombre: {editPurchase.data.user_id.firstName || editPurchase.data.user_id._id.firstName } { editPurchase.data.user_id.lastName || editPurchase.data.user_id._id.lastName}</h3>
          <h3>Inscripto a : {editPurchase.data.inscription.title || editPurchase.data.inscription.name}</h3>
          <Form.Group>
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
          </Form.Group>

          <Form.Group>
            <Form.Label> ¿Pagó? </Form.Label>
            <Form.Select
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
              <option value={true}>Si</option>
              <option value={false}>No</option>
            </Form.Select>
            {
              errors.modality && <Alert 
                                  variant='danger'
                                  className='p-2 mt-2'>
                                  {errors.modality.message}
                              </Alert>
            }
          </Form.Group>

          <Form.Group>
            <Form.Label> ¿Finalizó? </Form.Label>
            <Form.Select
            defaultValue={editPurchase.data.finish}
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
              <option value={true}>Si</option>
              <option value={false}>No</option>
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
                          /> : "Editar actividad"}
          </Button>
        </Form>
        </Container>
      

    </>
  )
}
