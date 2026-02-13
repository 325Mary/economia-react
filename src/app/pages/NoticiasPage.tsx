import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Calendar, Tag, ArrowRight, ChevronRight } from 'lucide-react';

export default function NoticiasPage() {
  const noticias = [
    {
      titulo: 'Lanzamiento de la Hoja de Ruta Metropolitana de Economía Circular',
      fecha: '15 de Diciembre, 2024',
      categoria: 'Actualización',
      imagen: 'https://images.unsplash.com/photo-1646803101279-d1a2461a5eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWxhciUyMGVjb25vbXklMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NjY0MDc4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      extracto: 'El AMVA presenta la estrategia metropolitana que guiará la transición hacia la economía circular hasta 2040.',
    },
    {
      titulo: 'Nuevos programas de acompañamiento para empresas',
      fecha: '10 de Diciembre, 2024',
      categoria: 'Convocatoria',
      imagen: 'https://images.unsplash.com/photo-1683084484325-7fec816f4e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzY2NDU5MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      extracto: 'Abre convocatoria para empresas interesadas en recibir acompañamiento técnico en economía circular.',
    },
    {
      titulo: 'Indicadores de circularidad muestran avances significativos',
      fecha: '5 de Diciembre, 2024',
      categoria: 'Informe',
      imagen: 'https://images.unsplash.com/photo-1633158829875-e5316a358c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NjQ1OTI0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      extracto: 'El último reporte trimestral evidencia un incremento del 15% en la tasa de aprovechamiento de residuos.',
    },
    {
      titulo: 'Foro Regional de Economía Circular 2024',
      fecha: '1 de Diciembre, 2024',
      categoria: 'Evento',
      imagen: 'https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2NjQ1OTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      extracto: 'Más de 500 asistentes participaron en el evento anual que reunió a expertos nacionales e internacionales.',
    },
    {
      titulo: 'Nueva normativa REP entra en vigencia',
      fecha: '25 de Noviembre, 2024',
      categoria: 'Normativa',
      imagen: 'https://images.unsplash.com/photo-1551295022-de5522c94e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY0MTM0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      extracto: 'Productores e importadores deben cumplir con nuevas obligaciones de Responsabilidad Extendida del Productor.',
    },
    {
      titulo: 'Alianza con universidades fortalece educación en EC',
      fecha: '20 de Noviembre, 2024',
      categoria: 'Alianza',
      imagen: 'https://images.unsplash.com/photo-1603751581623-fdb6ef7e00aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzY2MzU4OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      extracto: 'Se firma convenio con cinco instituciones de educación superior para promover la investigación en economía circular.',
    },
  ];

  const categorias = ['Todas', 'Actualización', 'Convocatoria', 'Informe', 'Evento', 'Normativa', 'Alianza'];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span>Inicio</span>
            <ChevronRight className="w-4 h-4" />
            <span>Noticias</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Noticias y Actualidad</h1>
          <p className="text-xl">Mantente informado sobre Economía Circular en el Valle de Aburrá</p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <Button key={categoria} variant={categoria === 'Todas' ? 'default' : 'outline'} size="sm">
                {categoria}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {noticias.map((noticia, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={noticia.imagen}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary">{noticia.categoria}</Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{noticia.fecha}</span>
                    </div>
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900 group-hover:text-green-600 transition-colors">
                    {noticia.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4">{noticia.extracto}</p>
                  <Button variant="ghost" className="p-0 h-auto">
                    Leer más
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">Cargar más noticias</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
