import {auth, provider} from '../../../config/firebase';
import {useState} from 'react';
import { signInWithPopup } from 'firebase/auth';
import UserDataServices from '../../../Services/UserServices';
import { TYPES } from '../../../context/auth/AuthReducer';
import useAuth from '../../../hooks/useAuth';
import { errorAlert, sucessAlert } from '../../SweetAlert/Alerts';
import { useNavigate } from 'react-router-dom';
import googleIcon from '../../../assets/google.svg'

export const GoogleLogin = () => {
    const {authDispatch} = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleGoogle = async () => {
        setIsLoading(true)
        try {
            const result = await signInWithPopup(auth, provider)
            const response = await UserDataServices.googleLogin(result.user);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            authDispatch({type:TYPES.LOGIN, payload:{user:response.data.user, token:response.data.token}});
            sucessAlert('Bienvenido');
            navigate(-1);
        } catch (error) {
            console.error(error);
            errorAlert(error.response?.data.msg);
            
        }finally{
            setIsLoading(false)
        }
        
    }
  return (
    <div className='w-100 d-flex justify-content-center my-2'>
        <button 
        className='btn btn-primary w-100 rounded-pill'
        type='button'
        disabled={isLoading}
        onClick={handleGoogle}>
            <img 
            src={googleIcon} 
            alt="" 
            style={{width: '30px'}}
            />
            <span className='inline-block ms-2'>Iniciar sesión con Google</span>
        </button>
    </div>
  )
}
