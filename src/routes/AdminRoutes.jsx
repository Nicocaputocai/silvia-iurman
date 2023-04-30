import {Routes, Route} from 'react-router-dom'
import Admin from '../Components/Admin'
import EditActivity from '../Components/Admin/AdminActivity/EditActivity'
import EditArticle from '../Components/Admin/AdminArticle/EditArticle'
import EditCourse from '../Components/Admin/AdminCourse/EditCourse'
import EditPurchase from '../Components/Admin/AdminPurchases/EditPurchase'

export const AdminRoutes = () => {
  return (
      <Routes>
          <Route path='/*' >
            <Route index element={<Admin />}/>
            <Route
                path="editar-actividad/:id"
                element={<EditActivity />}/>

            <Route
                path="editar-articulo/:id"
                element={<EditArticle />}/>

            <Route path="editar-curso/:id" 
                element={<EditCourse />} />
            <Route
                path="administrar-inscripto/:id"
                element={<EditPurchase />}
            />
          </Route>
          
      </Routes>
  )
}
