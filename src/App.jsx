import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import PresencialWorkshop from "./Components/PresencialWorkshop";
import VirtualWorkshop from "./Components/VirtualWorkshop";
import Calendar from "./Components/Calendar";
import NCFA from "./Components/NCFA";
import Articles from "./Components/Articles";
import ArticleDetail from "./Components/ArticleDetail";
import About from "./Components/About";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Activity from "./Components/Activity";
import Admin from "./Components/Admin";
import EditActivity from "./Components/Admin/AdminActivity/EditActivity";
import EditArticle from "./Components/Admin/AdminArticle/EditArticle";
import EditCourse from "./Components/Admin/AdminCourse/EditCourse";
import EditPurchase from "./Components/Admin/AdminPurchases/EditPurchase";
import Login from "./Components/Admin/Login";
import {Login as UserLogin} from "./Components/auth/Login/Login";
import { AuthProvider } from "./context/AuthProvider";
import { AuthLayout } from "./layouts/AuthLayout";
import { ProtectAdminLayout } from "./layouts/ProtectAdminLayout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from "./Components/auth/register/Register";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        
          {/* Rutas públicas */}
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Home />} />
              <Route
                path="talleres-presenciales"
                element={<PresencialWorkshop />}
              />
              <Route path="talleres-virtuales" element={<VirtualWorkshop />} />
              <Route path="calendario" element={<Calendar />} />
              <Route path="calendario/:id" element={<Activity />} />
              <Route path="NCFA" element={<NCFA />} />
              <Route path="articulos" element={<Articles />} />
              <Route path="articulos/:id" element={<ArticleDetail />} />
              <Route path="conoceme" element={<About />} />
              <Route path="login" element={<UserLogin />} />
              <Route path="registro" element={<Register />} />
              <Route path="admin/login" element={<Login />} />
            </Route>
            {/* Rutas privadas */}

            <Route path="/admin" element={<ProtectAdminLayout />}>
              <Route index element={<Admin />} />
              <Route
                path="/admin/editar-actividad/:id"
                element={<EditActivity />}
              />
              <Route
                path="/admin/editar-articulo/:id"
                element={<EditArticle />}
              />
              <Route path="/admin/editar-curso/:id" element={<EditCourse />} />
              <Route
                path="/admin/administrar-inscripto/:id"
                element={<EditPurchase />}
              />
            </Route>
          </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
