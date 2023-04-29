import { Badge, Button, Card, Container, ListGroup } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import styles from './dashboard.module.css';
import { Sidebar } from './Sidebar';
import { Preview } from './Preview';

export const Dashboard = () => {
  const {auth} = useAuth();
  
  return (
    <div className='mb-auto p-4'>
      <div className='d-flex align-items-center justify-content-between'>
        <h3 className={`text-secondary ${styles.sidebar_h2}`}>Módulos</h3>
        <h2 className={`text-secondary ${styles.sidebar_h2}`}>{auth.user ? auth.user.name : 'loading'}</h2>
      </div>
      <div className='d-flex flex-wrap border rounded-2 p-1 gap-2'>
        <Sidebar/>
        <Preview/>
      </div>
    </div>
  )
}