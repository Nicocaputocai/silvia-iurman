import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import TalleresPresenciales from "./Pages/TalleresPresenciales"
import TalleresVirtuales from "./Pages/TalleresVirtuales"
import Cursos from "./Pages/Cursos"
import Constelaciones from "./Pages/NCFA"
import Articulos from "./Pages/Articulos";
import Conoceme from "./Pages/Conoceme";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route path="/talleres-presenciales" element={<TalleresPresenciales />}/>
          <Route path="/talleres-virtuales" element={<TalleresVirtuales />}/>
          <Route path="/cursos" element={<Cursos />}/>
          <Route path="/NCFA" element={<Constelaciones />}/>
          <Route path="/articulos" element={<Articulos />}/>
          <Route path="/conoceme" element={<Conoceme />}/>
        </Routes>
        
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
