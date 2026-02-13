import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Factory, Building, ShoppingBag, HomeIcon, ChevronRight } from 'lucide-react';

export default function SectoresPage() {
  const sectores = [
    {
      id: 'industria',
      nombre: 'Industria',
      icon: <Factory className="w-8 h-8" />,
      descripcion: 'Sector manufacturero, textil y producción',
      subsectores: ['Textil y Confección', 'Metalmecánica', 'Alimentos y Bebidas', 'Químico y Plásticos'],
    },
    {
      id: 'construccion',
      nombre: 'Construcción',
      icon: <Building className="w-8 h-8" />,
      descripcion: 'Edificaciones y obras civiles',
      subsectores: ['Edificación Residencial', 'Edificación Comercial', 'Infraestructura', 'Demolición'],
    },
    {
      id: 'comercio',
      nombre: 'Comercio y Servicios',
      icon: <ShoppingBag className="w-8 h-8" />,
      descripcion: 'Retail, servicios y economía colaborativa',
      subsectores: ['Comercio Minorista', 'Servicios Profesionales', 'Turismo', 'Gastronomía'],
    },
    {
      id: 'habitante',
      nombre: 'Habitante Metropolitano',
      icon: <HomeIcon className="w-8 h-8" />,
      descripcion: 'Participación ciudadana y consumo responsable',
      subsectores: ['Hogares', 'Comunidades', 'Educación', 'Organizaciones Sociales'],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span>Inicio</span>
            <ChevronRight className="w-4 h-4" />
            <span>Sectores</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Sectores Prioritarios</h1>
          <p className="text-xl">Estrategias sectoriales de economía circular</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="industria" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              {sectores.map((sector) => (
                <TabsTrigger key={sector.id} value={sector.id} className="flex items-center gap-2">
                  {sector.icon}
                  <span className="hidden sm:inline">{sector.nombre}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {sectores.map((sector) => (
              <TabsContent key={sector.id} value={sector.id}>
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-3xl mb-4 text-gray-900">{sector.nombre}</h2>
                    <p className="text-lg text-gray-600 mb-8">{sector.descripcion}</p>

                    <h3 className="text-xl mb-4 text-gray-900">Subsectores</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {sector.subsectores.map((subsector, idx) => (
                        <Card key={idx} className="bg-gray-50">
                          <CardContent className="p-4">
                            <p className="font-semibold text-gray-900">{subsector}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="prose max-w-none">
                      <h3 className="text-xl mb-4 text-gray-900">Diagnóstico General</h3>
                      <p className="text-gray-600 mb-4">
                        El sector {sector.nombre.toLowerCase()} representa un componente fundamental
                        en la economía circular del Valle de Aburrá. Con oportunidades significativas
                        de mejora en eficiencia de recursos, reducción de residuos y modelos de negocio circulares.
                      </p>

                      <h3 className="text-xl mb-4 mt-8 text-gray-900">Buenas Prácticas</h3>
                      <ul className="list-disc pl-6 text-gray-600 space-y-2">
                        <li>Diseño para la circularidad desde la concepción del producto/servicio</li>
                        <li>Optimización de procesos y reducción de desperdicios</li>
                        <li>Implementación de sistemas de gestión de residuos</li>
                        <li>Colaboración en cadenas de valor circulares</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}
