import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HojaDeRutaPage from './pages/HojaDeRutaPage';
import FlujoMaterialesPage from './pages/FlujoMaterialesPage';
import AcompanamientosPage from './pages/AcompanamientosPage';
import SectoresPage from './pages/SectoresPage';
import IndicadoresPage from './pages/IndicadoresPage';
import NormativaPage from './pages/NormativaPage';
import HerramientasPage from './pages/HerramientasPage';
import CasosExitoPage from './pages/CasosExitoPage';
import NoticiasPage from './pages/NoticiasPage';
import ContactoPage from './pages/ContactoPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hoja-de-ruta" element={<HojaDeRutaPage />} />
            <Route path="/flujo-materiales" element={<FlujoMaterialesPage />} />
            <Route path="/acompanamientos" element={<AcompanamientosPage />} />
            <Route path="/sectores" element={<SectoresPage />} />
            <Route path="/indicadores" element={<IndicadoresPage />} />
            <Route path="/normativa" element={<NormativaPage />} />
            <Route path="/herramientas" element={<HerramientasPage />} />
            <Route path="/casos-exito" element={<CasosExitoPage />} />
            <Route path="/noticias" element={<NoticiasPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
