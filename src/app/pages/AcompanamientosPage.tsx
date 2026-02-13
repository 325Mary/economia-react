import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Building, ShoppingCart, Zap, Droplet, Home as HomeIcon, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AcompanamientosPage() {
  const programas = [
    {
      title: 'Economía Circular Empresarial',
      description: 'Acompañamiento integral para empresas que buscan implementar modelos circulares',
      icon: <Building className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600',
      requisitos: ['Empresa registrada en el AMVA', 'Compromiso de implementación', 'Equipo designado'],
    },
    {
      title: 'Compras Públicas Sostenibles',
      description: 'Apoyo a entidades públicas en la incorporación de criterios EC en adquisiciones',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600',
      requisitos: ['Entidad pública', 'Plan de compras definido', 'Presupuesto asignado'],
    },
    {
      title: 'Eficiencia Energética y Huella de Carbono',
      description: 'Medición y reducción de emisiones con enfoque de economía circular',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-yellow-50 text-yellow-600',
      requisitos: ['Consumos energéticos documentados', 'Diagnóstico inicial', 'Metas definidas'],
    },
    {
      title: 'Gestión Hídrica',
      description: 'Optimización del uso del agua y tratamiento de aguas residuales',
      icon: <Droplet className="w-8 h-8" />,
      color: 'bg-cyan-50 text-cyan-600',
      requisitos: ['Consumos hídricos medidos', 'Infraestructura base', 'Plan de gestión'],
    },
    {
      title: 'Construcción Sostenible',
      description: 'Asesoría en materiales circulares y diseño sostenible de edificaciones',
      icon: <HomeIcon className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600',
      requisitos: ['Proyecto en fase de diseño', 'Certificación ambiental objetivo', 'Equipo técnico'],
    },
    {
      title: 'Atención a Usuarios (MRV, RUA-RESP)',
      description: 'Orientación en trámites y reportes de economía circular',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-orange-50 text-orange-600',
      requisitos: ['Registro vigente', 'Documentación actualizada', 'Obligaciones al día'],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span>Inicio</span>
            <ChevronRight className="w-4 h-4" />
            <span>Acompañamientos</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Programas de Acompañamiento</h1>
          <p className="text-xl">Apoyo técnico especializado para la transición circular</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programas.map((programa, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-lg ${programa.color} flex items-center justify-center mb-4`}>
                    {programa.icon}
                  </div>
                  <h3 className="text-xl mb-3 text-gray-900">{programa.title}</h3>
                  <p className="text-gray-600 mb-4">{programa.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Requisitos:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {programa.requisitos.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full">Inscribirme al Programa</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4 text-gray-900">¿Necesitas más información?</h2>
          <p className="text-gray-600 mb-6">
            Nuestro equipo está disponible para resolver tus dudas y guiarte en el proceso
          </p>
          <Button size="lg" asChild>
            <Link to="/contacto">Contactar Asesor</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
