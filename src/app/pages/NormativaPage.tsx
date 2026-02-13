import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { Download, FileText, ChevronRight } from 'lucide-react';

export default function NormativaPage() {
  const normativas = {
    nacional: [
      { nombre: 'Ley 1715 de 2014', fecha: '13 de Mayo 2014', descripcion: 'Regulación de la integración de energías renovables al Sistema Energético Nacional' },
      { nombre: 'Ley 2184 de 2021', fecha: '15 de Diciembre 2021', descripcion: 'Ley de Responsabilidad Extendida del Productor (REP)' },
      { nombre: 'Decreto 596 de 2016', fecha: '11 de Abril 2016', descripcion: 'Esquema de aprovechamiento de residuos sólidos' },
    ],
    metropolitana: [
      { nombre: 'Acuerdo Metropolitano 018 de 2023', fecha: '20 de Julio 2023', descripcion: 'Hoja de Ruta de Economía Circular del Valle de Aburrá' },
      { nombre: 'Resolución AMVA 200 de 2022', fecha: '15 de Marzo 2022', descripcion: 'Lineamientos para gestión de residuos especiales' },
    ],
    rep: [
      { nombre: 'Resolución 1407 de 2018', fecha: '26 de Julio 2018', descripcion: 'REP para envases y empaques' },
      { nombre: 'Resolución 1408 de 2018', fecha: '26 de Julio 2018', descripcion: 'REP para pilas y acumuladores' },
      { nombre: 'Resolución 1675 de 2013', fecha: '21 de Agosto 2013', descripcion: 'REP para llantas usadas' },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span>Inicio</span>
            <ChevronRight className="w-4 h-4" />
            <span>Normativa</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Normativa y Marco Regulatorio</h1>
          <p className="text-xl">Legislación aplicable en Economía Circular</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="nacional">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="nacional">Nacional</TabsTrigger>
              <TabsTrigger value="metropolitana">Metropolitana</TabsTrigger>
              <TabsTrigger value="rep">REP</TabsTrigger>
            </TabsList>

            <TabsContent value="nacional" className="space-y-4 mt-6">
              {normativas.nacional.map((norma, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="w-5 h-5 text-red-600" />
                          <h3 className="text-lg text-gray-900">{norma.nombre}</h3>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">Fecha: {norma.fecha}</p>
                        <p className="text-gray-600">{norma.descripcion}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="metropolitana" className="space-y-4 mt-6">
              {normativas.metropolitana.map((norma, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="w-5 h-5 text-green-600" />
                          <h3 className="text-lg text-gray-900">{norma.nombre}</h3>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">Fecha: {norma.fecha}</p>
                        <p className="text-gray-600">{norma.descripcion}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="rep" className="space-y-4 mt-6">
              {normativas.rep.map((norma, idx) => (
                <Card key={idx}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <FileText className="w-5 h-5 text-blue-600" />
                          <h3 className="text-lg text-gray-900">{norma.nombre}</h3>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">Fecha: {norma.fecha}</p>
                        <p className="text-gray-600">{norma.descripcion}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" />
                          PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
