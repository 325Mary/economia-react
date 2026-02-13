import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Recycle,
  TrendingUp,
  Users,
  BarChart3,
  Building,
  FileText,
  Wrench,
  Factory,
  Home as HomeIcon,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';

export default function HomePage() {
  const quickAccessCards = [
    {
      title: 'Hoja de Ruta',
      description: 'Estrategia Metropolitana EC 2040',
      icon: <FileText className="w-8 h-8" />,
      link: '/hoja-de-ruta',
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Flujo de Materiales',
      description: 'Diagnóstico y visualización',
      icon: <TrendingUp className="w-8 h-8" />,
      link: '/flujo-materiales',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Acompañamientos',
      description: 'Programas de apoyo empresarial',
      icon: <Users className="w-8 h-8" />,
      link: '/acompanamientos',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Indicadores',
      description: 'Dashboard de métricas EC',
      icon: <BarChart3 className="w-8 h-8" />,
      link: '/indicadores',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      title: 'Sectores Prioritarios',
      description: 'Industria, construcción y más',
      icon: <Factory className="w-8 h-8" />,
      link: '/sectores',
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      title: 'Normativa EC',
      description: 'Marco regulatorio aplicable',
      icon: <FileText className="w-8 h-8" />,
      link: '/normativa',
      color: 'bg-red-50 text-red-600',
    },
  ];

  const focosTematicos = [
    {
      title: 'Industria',
      description: 'Manufactura, textil y producción sostenible',
      image: 'https://images.unsplash.com/photo-1603751581623-fdb6ef7e00aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzY2MzU4OTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: 'Construcción',
      description: 'Edificaciones y obras civiles sostenibles',
      image: 'https://images.unsplash.com/photo-1551295022-de5522c94e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZ3xlbnwxfHx8fDE3NjY0MTM0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <Building className="w-6 h-6" />,
    },
    {
      title: 'Comercio y Servicios',
      description: 'Retail y economía colaborativa',
      image: 'https://images.unsplash.com/photo-1633158829875-e5316a358c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NjQ1OTI0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <ShoppingBag className="w-6 h-6" />,
    },
    {
      title: 'Habitante Metropolitano',
      description: 'Participación ciudadana y consumo responsable',
      image: 'https://images.unsplash.com/photo-1613759612065-d5971d32ca49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2NjQ1OTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      icon: <HomeIcon className="w-6 h-6" />,
    },
  ];

  const noticias = [
    {
      title: 'Lanzamiento de la Hoja de Ruta Metropolitana de Economía Circular',
      date: '15 de Diciembre, 2024',
      image: 'https://images.unsplash.com/photo-1646803101279-d1a2461a5eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWxhciUyMGVjb25vbXklMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NjY0MDc4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Actualización',
    },
    {
      title: 'Nuevos programas de acompañamiento para empresas',
      date: '10 de Diciembre, 2024',
      image: 'https://images.unsplash.com/photo-1683084484325-7fec816f4e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWN5Y2xpbmclMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzY2NDU5MjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Convocatoria',
    },
    {
      title: 'Indicadores de circularidad muestran avances significativos',
      date: '5 de Diciembre, 2024',
      image: 'https://images.unsplash.com/photo-1633158829875-e5316a358c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NjQ1OTI0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Informe',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 128, 0, 0.7), rgba(0, 128, 0, 0.7)), url(https://images.unsplash.com/photo-1646803101279-d1a2461a5eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWxhciUyMGVjb25vbXklMjBzdXN0YWluYWJsZXxlbnwxfHx8fDE3NjY0MDc4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-4">
            Economía Circular AMVA
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Hacia una región sostenible 2040
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link to="/hoja-de-ruta">Conoce la Hoja de Ruta</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white" asChild>
              <Link to="/acompanamientos">Inscríbete a Acompañamientos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Accesos Rápidos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-gray-900">
            Accesos Rápidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickAccessCards.map((card, index) => (
              <Link key={index} to={card.link}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-lg ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {card.icon}
                    </div>
                    <h3 className="text-xl mb-2 text-gray-900">{card.title}</h3>
                    <p className="text-gray-600 text-sm">{card.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Qué es la Economía Circular? */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-8 text-gray-900">
            ¿Qué es la Economía Circular?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                La Economía Circular es un modelo de producción y consumo que implica compartir,
                alquilar, reutilizar, reparar, renovar y reciclar materiales y productos existentes
                todas las veces que sea posible para crear un valor añadido.
              </p>
              <div className="space-y-4">
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1 text-gray-900">1. Diseñar sin residuos</h4>
                    <p className="text-sm text-gray-600">Productos diseñados para durar y ser reutilizados</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1 text-gray-900">2. Mantener en uso</h4>
                    <p className="text-sm text-gray-600">Maximizar el uso de productos y materiales</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-orange-500">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-1 text-gray-900">3. Regenerar sistemas naturales</h4>
                    <p className="text-sm text-gray-600">Devolver nutrientes valiosos a la tierra</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-green-100 rounded-full flex items-center justify-center">
                  <Recycle className="w-32 h-32 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focos Temáticos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-gray-900">
            Focos Temáticos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focosTematicos.map((foco, index) => (
              <Link key={index} to="/sectores" className="group">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img
                    src={foco.image}
                    alt={foco.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-end p-6 text-white">
                    <div className="mb-2">{foco.icon}</div>
                    <h3 className="text-xl mb-2">{foco.title}</h3>
                    <p className="text-sm text-gray-200">{foco.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Actualidad */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl text-gray-900">Actualidad</h2>
            <Button variant="outline" asChild>
              <Link to="/noticias">
                Ver todas las noticias
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {noticias.map((noticia, index) => (
              <Link key={index} to="/noticias">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={noticia.image}
                      alt={noticia.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-xs text-green-600 mb-2">{noticia.category}</div>
                    <h3 className="text-lg mb-2 text-gray-900">{noticia.title}</h3>
                    <p className="text-sm text-gray-500">{noticia.date}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Destacamos */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12">Destacamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/herramientas">
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Wrench className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl mb-2">Calculadoras</h3>
                  <p className="text-sm text-white/90">Herramientas interactivas para medir tu impacto</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/herramientas">
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl mb-2">Manuales</h3>
                  <p className="text-sm text-white/90">Guías descargables por sector</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/contacto">
              <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl mb-2">Participa</h3>
                  <p className="text-sm text-white/90">Súmate a la economía circular</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
