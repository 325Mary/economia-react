import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    setOpen(false);
    // Pequeño delay para asegurar que el Sheet se cierre correctamente
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  const mainNav = [
    { label: 'Inicio', path: '/' },
    { label: 'Hoja de Ruta', path: '/hoja-de-ruta' },
    {
      label: 'Acompañamientos',
      path: '/acompanamientos',
      children: [
        { label: 'Economía Circular', path: '/acompanamientos#ec' },
        { label: 'Compras Sostenibles', path: '/acompanamientos#compras' },
        { label: 'Eficiencia Energética', path: '/acompanamientos#energia' },
        { label: 'Gestión Hídrica', path: '/acompanamientos#hidrica' },
        { label: 'Construcción Sostenible', path: '/acompanamientos#construccion' },
        { label: 'Atención a Usuarios', path: '/acompanamientos#atencion' },
      ],
    },
    {
      label: 'Sectores',
      path: '/sectores',
      children: [
        { label: 'Industria', path: '/sectores#industria' },
        { label: 'Construcción', path: '/sectores#construccion' },
        { label: 'Comercio y Servicios', path: '/sectores#comercio' },
        { label: 'Habitante Metropolitano', path: '/sectores#habitante' },
      ],
    },
    { label: 'Indicadores', path: '/indicadores' },
    { label: 'Normativa', path: '/normativa' },
    { label: 'Herramientas', path: '/herramientas' },
    { label: 'Casos de Éxito', path: '/casos-exito' },
    { label: 'Noticias', path: '/noticias' },
    { label: 'Contacto', path: '/contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">AMVA</div>
              <div className="text-xs text-gray-600">Economía Circular</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNav.slice(0, 6).map((item) =>
              item.children ? (
                <DropdownMenu key={item.path}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`flex items-center gap-1 ${
                        isActive(item.path) ? 'text-green-600' : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.path} asChild>
                        <Link to={child.path}>{child.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant="ghost"
                    className={isActive(item.path) ? 'text-green-600' : 'text-gray-700'}
                  >
                    {item.label}
                  </Button>
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm">
              ES
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col space-y-3 mt-6">
                {mainNav.map((item) => (
                  <div key={item.path}>
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`block w-full text-left px-3 py-2 rounded-md ${
                        isActive(item.path)
                          ? 'bg-green-50 text-green-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </button>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <button
                            key={child.path}
                            onClick={() => handleNavClick(child.path)}
                            className="block w-full text-left px-3 py-1 text-sm text-gray-600 hover:text-green-600"
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}