import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import MapaContacto from '../components/MapaContacto';

export default function ContactoPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensaje enviado correctamente. Te contactaremos pronto.');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span>Inicio</span>
            <ChevronRight className="w-4 h-4" />
            <span>Contacto</span>
          </div>
          <h1 className="text-4xl md:text-5xl mb-4">Contacto</h1>
          <p className="text-xl">Estamos aquí para ayudarte</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Información de contacto */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900">Dirección</h3>
                      <p className="text-sm text-gray-600">
                        Carrera 53 N° 40A - 31<br />
                        Medellín, Antioquia<br />
                        Colombia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900">Teléfono</h3>
                      <p className="text-sm text-gray-600">
                        +57 (4) 385 6000<br />
                        Línea Verde: 018000 123456
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900">Correo Electrónico</h3>
                      <p className="text-sm text-gray-600">
                        economiacircular@metropol.gov.co<br />
                        contacto@amva.gov.co
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-gray-900">Horario de Atención</h3>
                      <p className="text-sm text-gray-600">
                        Lunes a Viernes<br />
                        8:00 AM - 5:00 PM<br />
                        (Horario de Colombia)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 text-gray-900">Descarga</h3>
                  <Button variant="outline" className="w-full mb-2">
                    📄 Portafolio Institucional
                  </Button>
                  <Button variant="outline" className="w-full">
                    📊 Informe Anual 2024
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Formulario de contacto */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl mb-6 text-gray-900">Envíanos un Mensaje</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre Completo *</Label>
                        <Input id="nombre" placeholder="Juan Pérez" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="correo">Correo Electrónico *</Label>
                        <Input id="correo" type="email" placeholder="juan@ejemplo.com" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input id="telefono" type="tel" placeholder="+57 300 123 4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="asunto">Asunto *</Label>
                        <Select required>
                          <SelectTrigger id="asunto">
                            <SelectValue placeholder="Selecciona un asunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="acompañamiento">Acompañamiento Empresarial</SelectItem>
                            <SelectItem value="informacion">Solicitud de Información</SelectItem>
                            <SelectItem value="alianzas">Alianzas y Convenios</SelectItem>
                            <SelectItem value="normativa">Consulta Normativa</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        placeholder="Escribe tu mensaje aquí..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="acepto" className="mt-1" required />
                      <Label htmlFor="acepto" className="text-sm text-gray-600 cursor-pointer">
                        Acepto la Política de Tratamiento de Datos Personales y autorizo el uso de mi información
                        para fines relacionados con la economía circular *
                      </Label>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded flex items-center justify-center text-gray-600">
                        CAPTCHA
                      </div>
                      <p className="text-sm text-gray-600">
                        Verifica que eres humano (simulación de CAPTCHA)
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Mapa interactivo */}
              <Card className="mt-6">
                <CardContent className="p-0">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <MapaContacto />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}