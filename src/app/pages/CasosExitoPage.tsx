import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Building2, TrendingUp, Award, ChevronRight } from 'lucide-react';

export default function CasosExitoPage() {
  const casos = [
    {
      empresa: 'Textiles Circulares S.A.',
      sector: 'Industria Textil',
      imagen: 'https://images.unsplash.com/photo-1603751581623-fdb6ef7e00aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzY2MzU4OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      resultados: {
        residuos: '-65%',
        ahorro: '$150K USD/año',
        empleo: '+12 puestos verdes',
      },
    },
    {
      empresa: 'Constructora Verde Ltda.',
      sector: 'Construcción',
      imagen: 'https://images.unsplash.com/photo-1551295022-de5522c94e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY0MTM0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      resultados: {
        residuos: '-80%',
        ahorro: '$300K USD/año',
        empleo: '+25 puestos verdes',
      },
    },
    {
      empresa: 'Retail Sostenible',
      sector: 'Comercio',
      imagen: 'https://images.unsplash.com/photo-1633158829875-e5316a358c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NjQ1OTI0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      resultados: {
        residuos: '-45%',
        ahorro: '$85K USD/año',
        empleo: '+8 puestos verdes',
      },
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span>Inicio</span>
            <ChevronRight className="w-4 h-4" />
            <span>Casos de Éxito</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Casos de Éxito</h1>
          <p className="text-xl">Empresas que lideran la transformación circular en el AMVA</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {casos.map((caso, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={caso.imagen}
                    alt={caso.empresa}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>{caso.sector}</span>
                  </div>
                  <h3 className="text-2xl mb-4 text-gray-900">{caso.empresa}</h3>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl text-green-600 mb-1">{caso.resultados.residuos}</div>
                      <div className="text-xs text-gray-600">Reducción residuos</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl text-blue-600 mb-1">{caso.resultados.ahorro}</div>
                      <div className="text-xs text-gray-600">Ahorro anual</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-2xl text-purple-600 mb-1">{caso.resultados.empleo}</div>
                      <div className="text-xs text-gray-600">Empleo verde</div>
                    </div>
                  </div>
                  
                  <Button className="w-full">Ver Historia Completa</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
