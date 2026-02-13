import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Download, TrendingUp, Package, Recycle, Briefcase } from 'lucide-react';

export default function IndicadoresPage() {
  const dataFlujos = [
    { year: '2020', materiales: 12500, reciclado: 3750 },
    { year: '2021', materiales: 13200, reciclado: 4500 },
    { year: '2022', materiales: 13800, reciclado: 5520 },
    { year: '2023', materiales: 14500, reciclado: 7250 },
    { year: '2024', materiales: 15200, reciclado: 9120 },
  ];

  const dataAprovechamiento = [
    { name: 'Reciclado', value: 60 },
    { name: 'Compostaje', value: 20 },
    { name: 'Reutilización', value: 15 },
    { name: 'Otro', value: 5 },
  ];

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#6b7280'];

  const indicadoresPrincipales = [
    {
      title: 'Flujos de Materiales',
      value: '15,200',
      unit: 'ton/año',
      trend: '+4.8%',
      icon: <Package className="w-6 h-6" />,
      color: 'bg-green-50 text-green-600',
    },
    {
      title: 'Aprovechamiento',
      value: '60%',
      unit: 'del total',
      trend: '+12%',
      icon: <Recycle className="w-6 h-6" />,
      color: 'bg-blue-50 text-blue-600',
    },
    {
      title: 'Empleo Verde',
      value: '2,450',
      unit: 'puestos',
      trend: '+18%',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Inversión EC',
      value: '$12.5M',
      unit: 'USD',
      trend: '+25%',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl mb-4">
            Indicadores de Economía Circular
          </h1>
          <p className="text-xl">Dashboard de Métricas y Avances</p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4">
            <Select defaultValue="2024">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Año" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="todos">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Municipio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="medellin">Medellín</SelectItem>
                <SelectItem value="bello">Bello</SelectItem>
                <SelectItem value="itagui">Itagüí</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="todos">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="industria">Industria</SelectItem>
                <SelectItem value="construccion">Construcción</SelectItem>
                <SelectItem value="comercio">Comercio</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="ml-auto">
              <Download className="w-4 h-4 mr-2" />
              Exportar Datos
            </Button>
          </div>
        </div>
      </section>

      {/* Indicadores Principales */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indicadoresPrincipales.map((indicador, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${indicador.color} flex items-center justify-center`}>
                      {indicador.icon}
                    </div>
                    <span className="text-green-600 text-sm font-semibold">{indicador.trend}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{indicador.title}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl text-gray-900">{indicador.value}</span>
                    <span className="text-sm text-gray-500">{indicador.unit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gráficos */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Flujos de Materiales */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl mb-6 text-gray-900">Evolución de Flujos de Materiales</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataFlujos}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="materiales" fill="#3b82f6" name="Total Materiales (ton)" />
                  <Bar dataKey="reciclado" fill="#10b981" name="Reciclado (ton)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Aprovechamiento */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-6 text-gray-900">Distribución de Aprovechamiento</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={dataAprovechamiento}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.name}: ${entry.value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {dataAprovechamiento.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Tendencia */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl mb-6 text-gray-900">Tasa de Circularidad</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dataFlujos}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey={(entry) => Math.round((entry.reciclado / entry.materiales) * 100)}
                      stroke="#10b981"
                      strokeWidth={3}
                      name="% Circularidad"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exportación */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-green-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl mb-4 text-gray-900">Descarga los Datos Completos</h3>
              <p className="text-gray-600 mb-6">
                Accede a los indicadores en formatos abiertos para tu análisis
              </p>
              <div className="flex justify-center gap-4">
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Descargar CSV
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Excel
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
