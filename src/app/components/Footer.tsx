import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <div className="text-white font-bold">AMVA</div>
                <div className="text-xs">Economía Circular</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              Hacia una región metropolitana sostenible 2040
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces útiles */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Útiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/hoja-de-ruta" className="hover:text-green-400 transition-colors">
                  Hoja de Ruta
                </Link>
              </li>
              <li>
                <Link to="/acompanamientos" className="hover:text-green-400 transition-colors">
                  Acompañamientos
                </Link>
              </li>
              <li>
                <Link to="/indicadores" className="hover:text-green-400 transition-colors">
                  Indicadores
                </Link>
              </li>
              <li>
                <Link to="/normativa" className="hover:text-green-400 transition-colors">
                  Normativa
                </Link>
              </li>
              <li>
                <Link to="/casos-exito" className="hover:text-green-400 transition-colors">
                  Casos de Éxito
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Carrera 53 N° 40A - 31, Medellín, Colombia</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+57 (4) 385 6000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>economiacircular@metropol.gov.co</span>
              </li>
            </ul>
          </div>

          {/* Descarga */}
          <div>
            <h3 className="text-white font-semibold mb-4">Descargas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  📄 Portafolio Institucional
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  📊 Informes Anuales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  📋 Documentos Técnicos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  🎓 Material Educativo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {currentYear} Área Metropolitana del Valle de Aburrá. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-green-400 transition-colors">
                Política de Privacidad
              </Link>
              <Link to="#" className="hover:text-green-400 transition-colors">
                Términos de Uso
              </Link>
              <Link to="#" className="hover:text-green-400 transition-colors">
                Mapa del Sitio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
