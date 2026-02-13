import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Building, ShoppingCart, Zap, Droplet, Home as HomeIcon, Users, ChevronRight, CheckCircle, FileText, Download } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function AcompanamientosPage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const getTabFromHash = () => {
    const hash = location.hash.replace('#', '');
    return hash || 'ec';
  };

  const [activeTab, setActiveTab] = useState(getTabFromHash());

  useEffect(() => {
    const newTab = getTabFromHash();
    setActiveTab(newTab);
  }, [location.hash]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/acompanamientos#${value}`, { replace: true });
  };

  const acompanamientos = [
    {
      id: 'ec',
      nombre: 'Economía Circular Empresarial',
      icon: <Building className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600',
      descripcion: 'Acompañamiento integral para empresas que buscan implementar modelos circulares',
    },
    {
      id: 'compras',
      nombre: 'Compras Públicas Sostenibles',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600',
      descripcion: 'Apoyo a entidades públicas en la incorporación de criterios EC en adquisiciones',
    },
    {
      id: 'energia',
      nombre: 'Eficiencia Energética',
      icon: <Zap className="w-8 h-8" />,
      color: 'bg-yellow-50 text-yellow-600',
      descripcion: 'Medición y reducción de emisiones con enfoque de economía circular',
    },
    {
      id: 'hidrica',
      nombre: 'Gestión Hídrica',
      icon: <Droplet className="w-8 h-8" />,
      color: 'bg-cyan-50 text-cyan-600',
      descripcion: 'Optimización del uso del agua y tratamiento de aguas residuales',
    },
    {
      id: 'construccion',
      nombre: 'Construcción Sostenible',
      icon: <HomeIcon className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600',
      descripcion: 'Asesoría en materiales circulares y diseño sostenible de edificaciones',
    },
    {
      id: 'atencion',
      nombre: 'Atención a Usuarios',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-orange-50 text-orange-600',
      descripcion: 'Orientación en trámites y reportes de economía circular (MRV, RUA-RESP)',
    },
  ];

  const contenidoEC = {
    metodologia: [
      'Diagnóstico inicial de la empresa',
      'Identificación de oportunidades circulares',
      'Diseño de estrategia personalizada',
      'Implementación de acciones piloto',
      'Medición de resultados y ajustes',
      'Seguimiento y acompañamiento continuo',
    ],
    requisitos: [
      'Empresa registrada en el Valle de Aburrá',
      'Compromiso formal de implementación',
      'Equipo designado para el programa',
      'Disponibilidad para sesiones de trabajo',
      'Apertura para compartir información',
    ],
    casosExito: [
      { empresa: 'Textiles Innovadores SAS', resultado: 'Reducción del 40% en residuos textiles' },
      { empresa: 'Alimentos del Valle', resultado: 'Aprovechamiento del 95% de subproductos' },
      { empresa: 'Metalmecánica Circular', resultado: 'Ahorro de 30% en materia prima' },
    ],
  };

  const contenidoCompras = {
    metodologia: [
      'Análisis del plan anual de adquisiciones',
      'Identificación de categorías prioritarias',
      'Desarrollo de criterios sostenibles',
      'Capacitación a equipo de compras',
      'Implementación gradual',
      'Evaluación de proveedores',
    ],
    normativa: [
      'Ley 1819 de 2016 - Compras Públicas Sostenibles',
      'Decreto 1082 de 2015',
      'Guía de compras públicas sostenibles AMVA',
      'Normas ISO 14001 y 14020',
    ],
    herramientas: [
      'Calculadora de huella de carbono en compras',
      'Matriz de criterios sostenibles',
      'Lista de verificación de proveedores',
      'Plantillas de pliegos de condiciones',
    ],
  };

  const contenidoEnergia = {
    metodologia: [
      'Levantamiento de línea base energética',
      'Auditoría energética preliminar',
      'Cálculo de huella de carbono',
      'Identificación de oportunidades de mejora',
      'Plan de acción de eficiencia energética',
      'Implementación y monitoreo',
    ],
    normativa: [
      'Resolución 41286 de 2016 - Reporte de GEI',
      'Ley 1715 de 2014 - Fuentes no convencionales',
      'NTC-ISO 50001 - Sistemas de gestión energética',
      'Planes de Acción Sectoriales (PAS)',
    ],
    formatos: [
      'Formato de reporte de consumos',
      'Plantilla de inventario de GEI',
      'Guía de medición de indicadores',
      'Formato de plan de mejora',
    ],
  };

  const contenidoHidrica = {
    metodologia: [
      'Diagnóstico del uso del agua',
      'Balance hídrico de la organización',
      'Identificación de puntos críticos',
      'Diseño de soluciones circulares',
      'Plan de implementación',
      'Monitoreo y optimización',
    ],
    normativa: [
      'Decreto 1076 de 2015 - Sector ambiente',
      'Resolución 631 de 2015 - Vertimientos',
      'Política Nacional de Gestión del Recurso Hídrico',
      'PSMV - Planes de Saneamiento y Manejo',
    ],
    formatos: [
      'Formato de caracterización de vertimientos',
      'Registro de consumos hídricos',
      'Plan de uso eficiente del agua',
      'Reporte de reúso y reciclaje',
    ],
  };

  const contenidoConstruccion = {
    metodologia: [
      'Evaluación del proyecto arquitectónico',
      'Análisis de ciclo de vida de materiales',
      'Recomendaciones de diseño circular',
      'Selección de materiales sostenibles',
      'Estrategias de gestión de residuos',
      'Certificación ambiental',
    ],
    normativa: [
      'NSR-10 con enfoque sostenible',
      'Resolución 472 de 2017 - Gestión de RCD',
      'Certificación LEED / EDGE',
      'Normas técnicas colombianas de construcción',
    ],
    herramientas: [
      'Catálogo de materiales circulares',
      'Calculadora de huella de carbono en construcción',
      'Guía de diseño bioclimático',
      'Matriz de aprovechamiento de RCD',
    ],
  };

  const contenidoAtencion = {
    pasos: [
      '1. Registro inicial en plataforma AMVA',
      '2. Presentación de solicitud de acompañamiento',
      '3. Asignación de asesor técnico',
      '4. Primer contacto y diagnóstico',
      '5. Elaboración de plan de trabajo',
      '6. Seguimiento periódico',
    ],
    normativa: [
      'Resolución Metropolitana de Residuos Sólidos',
      'Registro Único Ambiental (RUA)',
      'Registro de Generadores (RESPEL)',
      'Sistema MRV (Medición, Reporte y Verificación)',
    ],
    formatos: [
      'Formulario de inscripción MRV',
      'Formato RUA empresarial',
      'Declaración de manejo de residuos',
      'Solicitud de asesoría técnica',
    ],
  };

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
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 mb-8">
              {acompanamientos.map((acomp) => (
                <TabsTrigger key={acomp.id} value={acomp.id} className="flex items-center gap-2 text-xs lg:text-sm">
                  <span className="hidden sm:inline">{acomp.icon}</span>
                  <span className="truncate">{acomp.nombre.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Economía Circular */}
            <TabsContent value="ec">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                      <Building className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl text-gray-900">Economía Circular Empresarial</h2>
                      <p className="text-gray-600">Acompañamiento integral para empresas</p>
                    </div>
                  </div>

                  {/* Metodología */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Metodología
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {contenidoEC.metodologia.map((item, idx) => (
                        <Card key={idx} className="bg-gray-50">
                          <CardContent className="p-4">
                            <p className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-green-600 font-bold">{idx + 1}.</span>
                              {item}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Requisitos */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-green-600" />
                      Requisitos
                    </h3>
                    <Card className="bg-green-50">
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {contenidoEC.requisitos.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Casos de Éxito */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Casos de Éxito</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {contenidoEC.casosExito.map((caso, idx) => (
                        <Card key={idx}>
                          <CardContent className="p-6">
                            <h4 className="font-semibold text-gray-900 mb-2">{caso.empresa}</h4>
                            <p className="text-sm text-gray-600">{caso.resultado}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Formulario de Inscripción */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Formulario de Inscripción</h3>
                    <Card className="bg-white">
                      <CardContent className="p-6">
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="empresa">Nombre de la Empresa *</Label>
                              <Input id="empresa" placeholder="Ej: Industrias XYZ" required />
                            </div>
                            <div>
                              <Label htmlFor="nit">NIT *</Label>
                              <Input id="nit" placeholder="000000000-0" required />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="contacto">Persona de Contacto *</Label>
                              <Input id="contacto" placeholder="Nombre completo" required />
                            </div>
                            <div>
                              <Label htmlFor="email">Correo Electrónico *</Label>
                              <Input id="email" type="email" placeholder="contacto@empresa.com" required />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="motivacion">¿Por qué desea implementar EC? *</Label>
                            <Textarea id="motivacion" placeholder="Describa sus motivaciones..." className="min-h-[100px]" required />
                          </div>
                          <Button type="submit" className="w-full" size="lg">
                            Enviar Solicitud de Inscripción
                          </Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Compras Públicas Sostenibles */}
            <TabsContent value="compras">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                      <ShoppingCart className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl text-gray-900">Compras Públicas Sostenibles</h2>
                      <p className="text-gray-600">Criterios EC en adquisiciones públicas</p>
                    </div>
                  </div>

                  {/* Metodología */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Metodología</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {contenidoCompras.metodologia.map((item, idx) => (
                        <Card key={idx} className="bg-gray-50">
                          <CardContent className="p-4">
                            <p className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-blue-600 font-bold">{idx + 1}.</span>
                              {item}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Normativa */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Normativa Aplicable</h3>
                    <Card className="bg-blue-50">
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {contenidoCompras.normativa.map((norma, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                              <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span>{norma}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Herramientas */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Herramientas Disponibles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {contenidoCompras.herramientas.map((herramienta, idx) => (
                        <Card key={idx}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">{herramienta}</span>
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Eficiencia Energética */}
            <TabsContent value="energia">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-yellow-50 rounded-lg flex items-center justify-center text-yellow-600">
                      <Zap className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl text-gray-900">Eficiencia Energética y Huella de Carbono</h2>
                      <p className="text-gray-600">Reducción de emisiones con enfoque circular</p>
                    </div>
                  </div>

                  {/* Metodología */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Metodología</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {contenidoEnergia.metodologia.map((item, idx) => (
                        <Card key={idx} className="bg-gray-50">
                          <CardContent className="p-4">
                            <p className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-yellow-600 font-bold">{idx + 1}.</span>
                              {item}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Normativa */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Normativa Aplicable</h3>
                    <Card className="bg-yellow-50">
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {contenidoEnergia.normativa.map((norma, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                              <FileText className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                              <span>{norma}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Formatos y Recomendaciones */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Formatos y Recomendaciones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {contenidoEnergia.formatos.map((formato, idx) => (
                        <Card key={idx}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">{formato}</span>
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Gestión Hídrica */}
            <TabsContent value="hidrica">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600">
                      <Droplet className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl text-gray-900">Gestión Hídrica</h2>
                      <p className="text-gray-600">Optimización del uso del agua</p>
                    </div>
                  </div>

                  {/* Metodología */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Metodología</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {contenidoHidrica.metodologia.map((item, idx) => (
                        <Card key={idx} className="bg-gray-50">
                          <CardContent className="p-4">
                            <p className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-cyan-600 font-bold">{idx + 1}.</span>
                              {item}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Normativa */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Normativa Aplicable</h3>
                    <Card className="bg-cyan-50">
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {contenidoHidrica.normativa.map((norma, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                              <FileText className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" />
                              <span>{norma}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Formatos y Recomendaciones */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Formatos y Recomendaciones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {contenidoHidrica.formatos.map((formato, idx) => (
                        <Card key={idx}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">{formato}</span>
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Construcción Sostenible */}
            <TabsContent value="construccion">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
                      <HomeIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl text-gray-900">Construcción Sostenible</h2>
                      <p className="text-gray-600">Materiales circulares y diseño sostenible</p>
                    </div>
                  </div>

                  {/* Metodología */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Metodología</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {contenidoConstruccion.metodologia.map((item, idx) => (
                        <Card key={idx} className="bg-gray-50">
                          <CardContent className="p-4">
                            <p className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-purple-600 font-bold">{idx + 1}.</span>
                              {item}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Normativa */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Normativa Aplicable</h3>
                    <Card className="bg-purple-50">
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {contenidoConstruccion.normativa.map((norma, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                              <FileText className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                              <span>{norma}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Herramientas */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Herramientas Disponibles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {contenidoConstruccion.herramientas.map((herramienta, idx) => (
                        <Card key={idx}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">{herramienta}</span>
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Atención a Usuarios */}
            <TabsContent value="atencion">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600">
                      <Users className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl text-gray-900">Atención a Usuarios</h2>
                      <p className="text-gray-600">MRV, RUA-RESP y trámites ambientales</p>
                    </div>
                  </div>

                  {/* Pasos del Proceso */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Pasos del Proceso</h3>
                    <div className="space-y-4">
                      {contenidoAtencion.pasos.map((paso, idx) => (
                        <Card key={idx} className="bg-gray-50">
                          <CardContent className="p-4">
                            <p className="text-gray-700">{paso}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Normativa */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Normativa Aplicable</h3>
                    <Card className="bg-orange-50">
                      <CardContent className="p-6">
                        <ul className="space-y-3">
                          {contenidoAtencion.normativa.map((norma, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700">
                              <FileText className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                              <span>{norma}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Formatos de Solicitud */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Formatos de Solicitud</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {contenidoAtencion.formatos.map((formato, idx) => (
                        <Card key={idx}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-700">{formato}</span>
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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