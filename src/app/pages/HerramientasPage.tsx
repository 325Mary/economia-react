import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calculator, Download, Wrench, BookOpen, ChevronRight } from 'lucide-react';

export default function HerramientasPage() {
  const herramientas = [
    {
      nombre: 'Calculadora de Huella de Carbono',
      descripcion: 'Mide las emisiones de CO2 de tu organización',
      icono: <Calculator className="w-8 h-8" />,
      tipo: 'Calculadora',
      color: 'bg-green-50 text-green-600',
    },
    {
      nombre: 'Calculadora de Circularidad',
      descripcion: 'Evalúa el nivel de circularidad de tus procesos',
      icono: <Calculator className="w-8 h-8" />,
      tipo: 'Calculadora',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      nombre: 'Manual Técnico - Sector Industria',
      descripcion: 'Guía completa para implementación EC en industria',
      icono: <BookOpen className="w-8 h-8" />,
      tipo: 'Manual',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      nombre: 'Manual Técnico - Construcción',
      descripcion: 'Materiales y procesos circulares en construcción',
      icono: <BookOpen className="w-8 h-8" />,
      tipo: 'Manual',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      nombre: 'Kit de Modelos de Negocio Circulares',
      descripcion: 'Plantillas y casos de estudio para nuevos modelos',
      icono: <Wrench className="w-8 h-8" />,
      tipo: 'Kit',
      color: 'bg-pink-50 text-pink-600',
    },
    {
      nombre: 'Guía de Formación EC',
      descripcion: 'Material educativo para capacitaciones',
      icono: <BookOpen className="w-8 h-8" />,
      tipo: 'Guía',
      color: 'bg-indigo-50 text-indigo-600',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span>Inicio</span>
            <ChevronRight className="w-4 h-4" />
            <span>Herramientas</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Herramientas y Recursos</h1>
          <p className="text-xl">Calculadoras, manuales y guías para tu transición circular</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {herramientas.map((herramienta, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-lg ${herramienta.color} flex items-center justify-center mb-4`}>
                    {herramienta.icono}
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600 mb-3">
                    {herramienta.tipo}
                  </div>
                  <h3 className="text-lg mb-2 text-gray-900">{herramienta.nombre}</h3>
                  <p className="text-sm text-gray-600 mb-4">{herramienta.descripcion}</p>
                  <Button className="w-full">
                    {herramienta.tipo === 'Calculadora' ? 'Usar Calculadora' : 'Descargar'}
                    <Download className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
