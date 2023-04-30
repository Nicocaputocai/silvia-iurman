import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import PresencialWorkshop from "./Components/Workshop/PresencialWorkshop";
import VirtualWorkshop from "./Components/Workshop/VirtualWorkshop";
import Calendar from "./Components/Calendar";
import NCFA from "./Components/NCFA";
import BuyPresencialModules from "./Components/NCFA/BuyPresencialModules";
import BuyFilmedModules from "./Components/NCFA/BuyFilmedModules";
import Articles from "./Components/Articles";
import ArticleDetail from "./Components/ArticleDetail";
import About from "./Components/About";
import {Header} from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Activity from "./Components/Activity";
import Constellators from "./Components/Constellators";
import {Login as UserLogin, Register} from "./Components/auth";
import { AuthLayout } from "./layouts/AuthLayout";
import { ProtectAdminLayout } from "./layouts/ProtectAdminLayout";
import { GlobalProvider } from "./context/GlobalProvider";
import { Dashboard } from "./Components/dashboard/Dashboard";
import { Checkout } from "./Components/Checkout/Checkout";
import { AdminRoutes } from "./routes/AdminRoutes";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <GlobalProvider>
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
              <Route path="consteladores" element={<Constellators />} />
              <Route path="NCFA" element={<NCFA />} />
              <Route path="NCFA/modulos-grabados" element={<BuyFilmedModules />} />
              <Route path="NCFA/modulos-en-directo" element={<BuyPresencialModules />} />
              <Route path="articulos" element={<Articles />} />
              <Route path="articulos/:id" element={<ArticleDetail />} />
              <Route path="conoceme" element={<About />} />
              <Route path="login" element={<UserLogin />} />
              <Route path="registro" element={<Register />} />
              <Route path='dashboard' element={<Dashboard />} />
            </Route>
            {/* Rutas privadas */}

            <Route path="/admin" element={
                      <ProtectAdminLayout>
                        <AdminRoutes/>
                      </ProtectAdminLayout>}>
              
            </Route>
          </Routes>
        <Checkout/>
        <Footer />
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
