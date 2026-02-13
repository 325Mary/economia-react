import { Card, CardContent } from '../components/ui/card';
import { ChevronRight } from 'lucide-react';

export default function FlujoMaterialesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span>Inicio</span>
            <ChevronRight className="w-4 h-4" />
            <span>Flujo de Materiales</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Flujo de Materiales</h1>
          <p className="text-xl">Diagnóstico Metropolitano de Recursos y Residuos</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-12 text-center">
              <h2 className="text-2xl mb-4 text-gray-900">Visualización Interactiva</h2>
              <p className="text-gray-600 mb-8">
                Esta sección contendría el diagrama de Sankey interactivo con los flujos de materiales
                del Área Metropolitana, mostrando entradas, transformaciones y salidas de recursos.
              </p>
              <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Diagrama de Sankey - Visualización de Flujos</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
