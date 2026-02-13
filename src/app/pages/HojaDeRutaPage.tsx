import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Target, Calendar, TrendingUp, Download, ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function HojaDeRutaPage() {
  const objetivos = [
    {
      title: 'Reducción de Residuos',
      meta: '50% para 2030',
      icon: <Target className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Aprovechamiento de Materiales',
      meta: '80% para 2035',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Empleo Verde',
      meta: '10,000 puestos para 2040',
      icon: <Calendar className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600',
    },
  ];

  const hitos = [
    {
      year: '2025-2027',
      title: 'Fase de Implementación Inicial',
      descripcion: 'Establecimiento de programas piloto y primeros acompañamientos empresariales',
    },
    {
      year: '2028-2033',
      title: 'Fase de Consolidación',
      descripcion: 'Escalamiento de iniciativas exitosas y expansión territorial',
    },
    {
      year: '2034-2040',
      title: 'Fase de Madurez',
      descripcion: 'Sistema metropolitano de economía circular completamente operativo',
    },
  ];

  const lineasAccion = [
    {
      nombre: 'Gestión de Residuos y Materiales',
      responsable: 'Dirección Ambiental AMVA',
      plazo: '2025-2030',
      descripcion: 'Implementación de sistemas de recolección selectiva y valorización de residuos',
    },
    {
      nombre: 'Innovación y Tecnología',
      responsable: 'Dirección de Planeación',
      plazo: '2025-2035',
      descripcion: 'Fomento de tecnologías limpias y modelos de negocio circulares',
    },
    {
      nombre: 'Educación y Cultura Circular',
      responsable: 'Todas las áreas',
      plazo: '2025-2040',
      descripcion: 'Programas de sensibilización y formación en todos los niveles',
    },
    {
      nombre: 'Compras Públicas Sostenibles',
      responsable: 'Dirección Administrativa',
      plazo: '2025-2028',
      descripcion: 'Incorporación de criterios de circularidad en adquisiciones públicas',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span>Inicio</span>
            <ChevronRight className="w-4 h-4" />
            <span>Hoja de Ruta</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">
            Hoja de Ruta de Economía Circular
          </h1>
          <p className="text-xl max-w-3xl">
            Estrategia Metropolitana hacia la Sostenibilidad 2040
          </p>
        </div>
      </section>

      {/* Visión 2040 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Visión 2040</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              El Valle de Aburrá será una región metropolitana líder en Economía Circular,
              donde los recursos se utilizan de manera eficiente, los residuos se minimizan
              y la prosperidad económica se armoniza con la sostenibilidad ambiental.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            <div className="space-y-12">
              {hitos.map((hito, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-green-600 font-semibold mb-2">{hito.year}</div>
                        <h3 className="text-xl mb-2 text-gray-900">{hito.title}</h3>
                        <p className="text-gray-600">{hito.descripcion}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos Estratégicos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-gray-900">
            Objetivos Estratégicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objetivos.map((objetivo, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className={`w-20 h-20 rounded-full ${objetivo.color} flex items-center justify-center mx-auto mb-4`}>
                    {objetivo.icon}
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900">{objetivo.title}</h3>
                  <p className="text-2xl text-green-600 mb-2">{objetivo.meta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Líneas de Acción */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-gray-900">
            Líneas de Acción
          </h2>
          <div className="space-y-4">
            {lineasAccion.map((linea, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl mb-2 text-gray-900">{linea.nombre}</h3>
                      <p className="text-gray-600 mb-2">{linea.descripcion}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span>👤 {linea.responsable}</span>
                        <span>📅 {linea.plazo}</span>
                      </div>
                    </div>
                    <Button variant="outline">Ver detalles</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentos Descargables */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-gray-900">
            Documentos Descargables
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Download className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-lg mb-2 text-gray-900">Hoja de Ruta Completa</h3>
                <p className="text-sm text-gray-600 mb-4">Documento técnico completo (PDF, 15 MB)</p>
                <Button className="w-full">Descargar PDF</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Download className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg mb-2 text-gray-900">Infografías</h3>
                <p className="text-sm text-gray-600 mb-4">Material visual para difusión (ZIP, 8 MB)</p>
                <Button variant="outline" className="w-full">Descargar ZIP</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Download className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-lg mb-2 text-gray-900">Presentación Ejecutiva</h3>
                <p className="text-sm text-gray-600 mb-4">Resumen para stakeholders (PPTX, 5 MB)</p>
                <Button variant="outline" className="w-full">Descargar PPTX</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
