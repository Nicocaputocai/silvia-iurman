
import {useAuth} from '../../hooks';
import styles from './dashboard.module.css';
import { Sidebar } from './Sidebar';
import { Preview } from './Preview';
import { useState } from 'react';
import { HelmetPage } from '../components';

export const Dashboard = () => {
  const {auth} = useAuth();
  const [content, setContent] = useState(null)

  const getContent = (content) => {
    setContent(content)
  }
  
  return (
    <>
    <HelmetPage
          section='Dashboard'
          content='Dashboard - Nuevas Constelaciones Familiares Argentina'
        />
    <div className='mb-auto p-4'>
      <div className='d-flex align-items-center justify-content-between'>
        <h3 className={`text-secondary ${styles.sidebar_h2}`}>Módulos</h3>
        <h2 className={`text-secondary ${styles.sidebar_h2}`}>{auth.user.name }</h2>
      </div>
      <div className='d-flex flex-wrap border rounded-2 p-1 gap-1'>
        <Sidebar setContent={getContent}/>
        <Preview content={content}/>
      </div>
    </div>
    </>
  )
}
