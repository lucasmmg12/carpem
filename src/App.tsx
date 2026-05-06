import React, { useState } from 'react';
import { 
  Building2, 
  Wrench, 
  Truck, 
  Settings, 
  Users, 
  Eye, 
  Link as LinkIcon, 
  Network,
  Menu,
  X,
  Send,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  Calendar,
  ArrowRight
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo from public folder */}
            <a href="#" className="flex items-center">
              <img 
                src="/logo-transparent.png" 
                alt="Logo CARPEM" 
                className="h-14 w-auto object-contain" 
              />
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#quienes-somos" className="text-institutional-secondary hover:text-institutional-primary transition-colors font-medium">Quiénes Somos</a>
            <a href="#autoridades" className="text-institutional-secondary hover:text-institutional-primary transition-colors font-medium">Autoridades</a>
            <a href="#empresas" className="text-institutional-secondary hover:text-institutional-primary transition-colors font-medium">Empresas</a>
            <a href="#novedades" className="text-institutional-secondary hover:text-institutional-primary transition-colors font-medium">Novedades</a>
            <a href="#contacto" className="text-institutional-secondary hover:text-institutional-primary transition-colors font-medium">Contacto</a>
          </nav>
          
          <div className="hidden md:flex items-center">
            <button className="bg-institutional-primary text-white px-6 py-2.5 rounded-lg hover:bg-institutional-primary/90 transition-all shadow-md font-medium">
              Asociate
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-institutional-primary">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#quienes-somos" className="block px-3 py-2 text-institutional-secondary hover:text-institutional-primary font-medium">Quiénes Somos</a>
            <a href="#autoridades" className="block px-3 py-2 text-institutional-secondary hover:text-institutional-primary font-medium">Autoridades</a>
            <a href="#empresas" className="block px-3 py-2 text-institutional-secondary hover:text-institutional-primary font-medium">Empresas</a>
            <a href="#novedades" className="block px-3 py-2 text-institutional-secondary hover:text-institutional-primary font-medium">Novedades</a>
            <a href="#contacto" className="block px-3 py-2 text-institutional-secondary hover:text-institutional-primary font-medium">Contacto</a>
            <button className="w-full mt-4 bg-institutional-primary text-white px-6 py-2.5 rounded-lg font-medium shadow-md">
              Asociate
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/Mineria-San-Juan-1023x640.png" 
          alt="Operación Minera San Juan" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/95 via-[#1a1a1a]/80 to-[#1a1a1a]/60 lg:bg-gradient-to-r lg:from-[#1a1a1a]/95 lg:via-[#1a1a1a]/80 lg:to-[#1a1a1a]/40"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 lg:mt-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-institutional-accent/20 border border-institutional-accent/40 text-institutional-accent px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in-up">
            <span className="w-2 h-2 bg-institutional-accent rounded-full animate-pulse"></span>
            San Juan, Argentina
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg animate-fade-in-up" style={{animationDelay: '100ms'}}>
            Cámara de Prestadores de Servicios Mineros y Energéticos
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
            Representamos empresas. Conectamos capacidades. Impulsamos desarrollo. Únase a la red de proveedores más sólida de la región.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
            <button className="bg-institutional-accent text-white px-8 py-4 rounded-lg hover:bg-institutional-accent/90 transition-all shadow-lg font-semibold text-lg flex justify-center items-center hover:scale-105 duration-200">
              Quiero asociarme <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all shadow-sm font-semibold text-lg flex justify-center items-center">
              Explorar empresas
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 lg:gap-8 mt-12 pt-8 border-t border-white/10 animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <div className="text-center sm:text-left">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-institutional-accent">80+</span>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Empresas asociadas</p>
            </div>
            <div className="text-center sm:text-left border-l border-white/10 pl-4 lg:pl-8">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-institutional-accent">15</span>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Rubros representados</p>
            </div>
            <div className="text-center sm:text-left border-l border-white/10 pl-4 lg:pl-8">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-institutional-accent">20+</span>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Años de trayectoria</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-institutional-primary mb-4">Nuestra Identidad</h2>
          <div className="w-16 h-1 bg-institutional-accent mx-auto rounded-full mb-6"></div>
          <p className="text-institutional-secondary text-lg">
            Somos una asociación civil empresaria seria, comprometida con el desarrollo sostenible y abierta a empresas locales e internacionales que brindan servicios al sector minero.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-institutional-primary/10 rounded-lg flex items-center justify-center mb-6 text-institutional-primary">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-institutional-primary mb-3">Misión</h3>
            <p className="text-institutional-secondary leading-relaxed">
              Representar y defender los intereses de nuestros asociados, promoviendo la competitividad y la excelencia en los servicios mineros a través del trabajo conjunto.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-institutional-primary/10 rounded-lg flex items-center justify-center mb-6 text-institutional-primary">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-institutional-primary mb-3">Visión</h3>
            <p className="text-institutional-secondary leading-relaxed">
              Ser la cámara referente y líder en la articulación de la cadena de valor minera, impulsando el crecimiento económico e industrial de la provincia y la región.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-institutional-primary/10 rounded-lg flex items-center justify-center mb-6 text-institutional-primary">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-institutional-primary mb-3">Valores</h3>
            <p className="text-institutional-secondary leading-relaxed">
              Integridad, transparencia, innovación tecnológica y un fuerte compromiso con el desarrollo sostenible y la responsabilidad social empresaria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Rubros = () => {
  const [selectedRubro, setSelectedRubro] = useState<any>(null);

  const rubros = [
    { 
      name: 'Obras Civiles', 
      desc: 'Infraestructura, movimiento de suelos y construcciones.', 
      icon: <Building2 className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      contribucion: 'Desde la Cámara de Prestadores de Servicios Mineros y Energéticos de San Juan, impulsamos a las empresas de Obras Civiles garantizando su participación prioritaria en las licitaciones de los grandes operadores mineros. Brindamos asesoría en certificaciones de calidad exigidas por la minería internacional, y fomentamos alianzas estratégicas para que las empresas locales asuman proyectos de gran escala como diques de cola y campamentos base.'
    },
    { 
      name: 'Metalúrgica', 
      desc: 'Fabricación, montaje y mantenimiento de estructuras.', 
      icon: <Settings className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      contribucion: 'Para el sector Metalúrgico, CARPEM actúa como un puente directo con las áreas de mantenimiento mecánico de las mineras. Desarrollamos mesas de trabajo para sustituir importaciones, capacitando a talleres en soldadura de alta precisión y normativas de seguridad minera, asegurando el desarrollo cultural e industrial de cada pyme sanjuanina.'
    },
    { 
      name: 'Logística', 
      desc: 'Transporte de cargas, personal y gestión de almacenes.', 
      icon: <Truck className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      contribucion: 'El transporte seguro es vital en la minería. CARPEM apoya a las empresas logísticas mediante acuerdos de provisión y programas de capacitación para choferes de alta montaña. Trabajamos con reguladores para agilizar permisos de cargas especiales, fortaleciendo el músculo empresarial del transporte corporativo minero.'
    },
    { 
      name: 'Servicios Generales', 
      desc: 'Catering, hotelería, limpieza y seguridad.', 
      icon: <Wrench className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1542037104-583d73f1f3b3?auto=format&fit=crop&w=800&q=80',
      contribucion: 'Los Servicios Generales son esenciales para la vida en la cordillera. La Cámara de Prestadores de Servicios Mineros y Energéticos potencia a estas empresas mediante rondas de negocios con operadoras. Promovemos estándares de bromatología y seguridad ocupacional, profesionalizando los servicios para asegurar el bienestar de miles de mineros en campamentos.'
    },
  ];

  return (
    <section id="rubros" className="py-20 bg-institutional-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-institutional-primary mb-4">Rubros Representados</h2>
            <div className="w-16 h-1 bg-institutional-accent rounded-full mb-6"></div>
            <p className="text-institutional-secondary text-lg">
              Nuestros socios abarcan toda la cadena de valor, ofreciendo soluciones integrales y especializadas para la industria minera.
            </p>
          </div>
          <button className="mt-6 md:mt-0 text-institutional-primary font-medium hover:text-institutional-accent transition-colors flex items-center">
            Ver todas las categorías <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rubros.map((rubro, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedRubro(rubro)}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100"
            >
              <div className="h-40 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-institutional-primary/0 group-hover:bg-institutional-primary/20 transition-all z-10 flex items-center justify-center">
                  <span className="bg-white text-institutional-primary px-4 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-lg text-sm flex items-center gap-2">
                    Ver Aporte CARPEM <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
                <img 
                  src={rubro.image} 
                  alt={rubro.name}
                  className="w-full h-full object-cover filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute top-4 left-4 z-20 w-10 h-10 bg-white rounded-lg flex items-center justify-center text-institutional-primary shadow-md">
                  {React.cloneElement(rubro.icon, { className: 'w-5 h-5' })}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-institutional-primary mb-2 group-hover:text-institutional-secondary transition-colors">{rubro.name}</h3>
                <p className="text-sm text-institutional-secondary">{rubro.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Aporte CARPEM */}
      {selectedRubro && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-institutional-dark/80 backdrop-blur-sm animate-in fade-in"
            onClick={() => setSelectedRubro(null)}
          ></div>
          
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedRubro(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="h-48 sm:h-64 relative overflow-hidden">
              <img src={selectedRubro.image} alt={selectedRubro.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-institutional-primary/90 via-institutional-primary/50 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg shadow-lg text-institutional-primary">
                  {React.cloneElement(selectedRubro.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-3xl font-extrabold text-white">{selectedRubro.name}</h3>
              </div>
            </div>
            
            <div className="p-8 bg-white">
              <h4 className="font-bold text-institutional-accent mb-4 flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-institutional-accent rounded-full"></span>
                ¿Cómo contribuye CARPEM a este sector?
              </h4>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {selectedRubro.contribucion}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex gap-4">
                <button className="flex-1 py-3 bg-institutional-accent hover:bg-institutional-accent/90 text-white font-bold rounded-lg transition-colors shadow-sm">
                  Asociar mi Empresa
                </button>
                <button onClick={() => setSelectedRubro(null)} className="py-3 px-6 bg-institutional-light hover:bg-gray-200 text-institutional-primary font-bold rounded-lg transition-colors border border-gray-200">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Beneficios = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-institutional-primary mb-4">Beneficios para Socios</h2>
          <div className="w-16 h-1 bg-institutional-accent mx-auto rounded-full mb-6"></div>
          <p className="text-institutional-secondary text-lg">
            Formar parte de CARPEM le brinda a su empresa ventajas competitivas exclusivas y acceso directo a los principales actores de la industria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-lg hover:bg-institutional-light transition-colors">
            <div className="w-16 h-16 mx-auto bg-institutional-primary/5 rounded-full flex items-center justify-center mb-6 text-institutional-accent">
              <Eye className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-institutional-primary mb-3">Visibilidad Institucional</h3>
            <p className="text-institutional-secondary text-sm">Respaldo corporativo que fortalece la imagen y credibilidad de su empresa en el sector.</p>
          </div>
          <div className="text-center p-6 rounded-lg hover:bg-institutional-light transition-colors">
            <div className="w-16 h-16 mx-auto bg-institutional-primary/5 rounded-full flex items-center justify-center mb-6 text-institutional-accent">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-institutional-primary mb-3">Directorio de Proveedores</h3>
            <p className="text-institutional-secondary text-sm">Inclusión en nuestro catálogo oficial, consultado frecuentemente por empresas mineras.</p>
          </div>
          <div className="text-center p-6 rounded-lg hover:bg-institutional-light transition-colors">
            <div className="w-16 h-16 mx-auto bg-institutional-primary/5 rounded-full flex items-center justify-center mb-6 text-institutional-accent">
              <LinkIcon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-institutional-primary mb-3">Vinculación con Operadoras</h3>
            <p className="text-institutional-secondary text-sm">Facilitamos el contacto directo con las principales operadoras mineras de San Juan y la región.</p>
          </div>
          <div className="text-center p-6 rounded-lg hover:bg-institutional-light transition-colors">
            <div className="w-16 h-16 mx-auto bg-institutional-primary/5 rounded-full flex items-center justify-center mb-6 text-institutional-accent">
              <Network className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-institutional-primary mb-3">Networking y Sinergia</h3>
            <p className="text-institutional-secondary text-sm">Participación en rondas de negocios, capacitaciones y eventos exclusivos para el desarrollo B2B.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Autoridades = () => {
  const [selectedAutoridad, setSelectedAutoridad] = useState<any>(null);

  const autoridades = [
    { 
      name: 'Ing. Roberto Silva', 
      role: 'Presidente', 
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', 
      company: 'Silva Obras Civiles',
      trayectoria: 'Ingeniero Civil con más de 25 años de experiencia en el desarrollo de grandes infraestructuras mineras en la región andina. Fundador de Silva Obras Civiles, ha liderado proyectos llave en mano para las operadoras más importantes del país. En CARPEM, se ha enfocado en fortalecer la cadena de valor local y promover políticas de compre sanjuanino.'
    },
    { 
      name: 'Lic. Mariana Costa', 
      role: 'Vicepresidenta', 
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', 
      company: 'Logística Sur',
      trayectoria: 'Licenciada en Administración de Empresas con especialización en Logística Internacional. Dirige Logística Sur desde hace 15 años, optimizando el transporte de cargas peligrosas y equipos pesados hacia proyectos mineros de alta montaña. Su gestión en la cámara impulsa la modernización y sustentabilidad del transporte corporativo.'
    },
    { 
      name: 'Dr. Carlos Mendoza', 
      role: 'Secretario General', 
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80', 
      company: 'Mendoza & Asoc.',
      trayectoria: 'Abogado especialista en Derecho Ambiental y Minero. Socio fundador del estudio Mendoza & Asoc., brinda asesoría legal estratégica a contratistas y empresas de exploración. Su rol en CARPEM es vital para la mediación institucional, la redacción de convenios de colaboración y la asesoría jurídica a nuestros asociados.'
    },
    { 
      name: 'Ing. Patricia Ruiz', 
      role: 'Tesorera', 
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', 
      company: 'Metalúrgica Ruiz',
      trayectoria: 'Ingeniera Metalúrgica de segunda generación. Su empresa familiar es pionera en la fabricación de estructuras y piezas de desgaste para molinos mineros. Como Tesorera, garantiza la transparencia financiera de la institución y promueve programas de financiamiento blando para pymes proveedoras del sector.'
    },
  ];

  return (
    <section id="autoridades" className="py-20 bg-institutional-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-institutional-primary mb-4">Comisión Directiva</h2>
          <div className="w-16 h-1 bg-institutional-accent mx-auto rounded-full mb-6"></div>
          <p className="text-institutional-secondary text-lg">
            Líderes empresariales comprometidos con el desarrollo del sector minero y la representación transparente de nuestros asociados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {autoridades.map((autoridad, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedAutoridad(autoridad)}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 text-center pb-6 cursor-pointer group transform hover:-translate-y-2 duration-300"
            >
              <div className="h-48 overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-institutional-primary/0 group-hover:bg-institutional-primary/20 transition-all z-10 flex items-center justify-center">
                  <span className="bg-white text-institutional-primary px-4 py-2 rounded-full font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-lg text-sm flex items-center gap-2">
                    Ver Perfil <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
                <img src={autoridad.image} alt={autoridad.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-bold text-institutional-primary px-4 group-hover:text-institutional-secondary transition-colors">{autoridad.name}</h3>
              <p className="text-institutional-accent font-medium mt-1 mb-2 px-4">{autoridad.role}</p>
              <p className="text-sm text-gray-500 px-4">{autoridad.company}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Perfil Profesional */}
      {selectedAutoridad && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay oscuro */}
          <div 
            className="absolute inset-0 bg-institutional-dark/80 backdrop-blur-sm animate-in fade-in"
            onClick={() => setSelectedAutoridad(null)}
          ></div>
          
          {/* Contenedor del Modal */}
          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedAutoridad(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex flex-col sm:flex-row">
              <div className="sm:w-2/5 h-64 sm:h-auto relative">
                <img src={selectedAutoridad.image} alt={selectedAutoridad.name} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-black/20"></div>
              </div>
              <div className="sm:w-3/5 p-8 flex flex-col justify-center bg-white">
                <div className="text-institutional-accent font-bold tracking-wider text-sm uppercase mb-1">{selectedAutoridad.role}</div>
                <h3 className="text-3xl font-extrabold text-institutional-primary mb-2">{selectedAutoridad.name}</h3>
                <div className="flex items-center text-institutional-secondary mb-6 pb-6 border-b border-gray-100">
                  <Building2 className="w-4 h-4 mr-2" />
                  <span className="font-medium">{selectedAutoridad.company}</span>
                </div>
                
                <h4 className="font-bold text-institutional-primary mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-institutional-accent rounded-full"></span>
                  Trayectoria Profesional
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {selectedAutoridad.trayectoria}
                </p>
                
                <div className="mt-auto pt-2">
                  <button onClick={() => setSelectedAutoridad(null)} className="w-full py-3 bg-institutional-light hover:bg-gray-200 text-institutional-primary font-bold rounded-lg transition-colors border border-gray-200">
                    Cerrar Perfil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

const Empresas = () => {
  const empresas = [
    { name: 'Andina Ingeniería', logo: <svg viewBox="0 0 120 120" className="w-14 h-14 mb-3"><path d="M60 15 L20 95 L100 95 Z" fill="#2c2c2c"/><path d="M60 35 L38 95 L82 95 Z" fill="#4bb0d3"/><path d="M60 55 L50 95 L70 95 Z" fill="#fff" opacity="0.5"/></svg> },
    { name: 'TecnoMinera SRL', logo: <svg viewBox="0 0 120 120" className="w-14 h-14 mb-3"><circle cx="60" cy="60" r="40" fill="none" stroke="#ac9f3c" strokeWidth="6"/><circle cx="60" cy="60" r="25" fill="#ac9f3c"/><rect x="55" y="20" width="10" height="80" fill="#2c2c2c" rx="3"/><rect x="20" y="55" width="80" height="10" fill="#2c2c2c" rx="3"/></svg> },
    { name: 'SanJuan Drilling', logo: <svg viewBox="0 0 120 120" className="w-14 h-14 mb-3"><polygon points="60,10 95,50 60,90 25,50" fill="#4bb0d3"/><circle cx="60" cy="50" r="18" fill="#fff"/><circle cx="60" cy="50" r="8" fill="#2c2c2c"/></svg> },
    { name: 'Energía Cuyana', logo: <svg viewBox="0 0 120 120" className="w-14 h-14 mb-3"><circle cx="60" cy="55" r="30" fill="#4bb0d3" opacity="0.3"/><path d="M60 25 L68 50 L55 42 L65 65 L50 50 Z" fill="#ac9f3c"/><path d="M25 85 Q60 65 95 85" fill="none" stroke="#2c2c2c" strokeWidth="4"/></svg> },
    { name: 'Logística Cordillera', logo: <svg viewBox="0 0 120 120" className="w-14 h-14 mb-3"><rect x="15" y="50" width="55" height="30" rx="4" fill="#2c2c2c"/><rect x="70" y="55" width="25" height="25" rx="4" fill="#2c2c2c"/><circle cx="35" cy="85" r="10" fill="#ac9f3c"/><circle cx="80" cy="85" r="10" fill="#ac9f3c"/><path d="M20 50 L40 30 L90 30 L95 55" fill="none" stroke="#4bb0d3" strokeWidth="4"/></svg> },
    { name: 'Construcciones del Oeste', logo: <svg viewBox="0 0 120 120" className="w-14 h-14 mb-3"><rect x="25" y="45" width="70" height="50" fill="#2c2c2c"/><path d="M20 45 L60 15 L100 45" fill="#4bb0d3"/><rect x="45" y="60" width="30" height="35" fill="#ac9f3c" rx="2"/></svg> },
    { name: 'Norte Maquinarias', logo: <svg viewBox="0 0 120 120" className="w-14 h-14 mb-3"><rect x="20" y="60" width="80" height="25" rx="5" fill="#2c2c2c"/><rect x="60" y="35" width="30" height="25" fill="#ac9f3c"/><circle cx="35" cy="90" r="12" fill="#4bb0d3"/><circle cx="85" cy="90" r="12" fill="#4bb0d3"/></svg> },
    { name: 'Roca Ingeniería', logo: <svg viewBox="0 0 120 120" className="w-14 h-14 mb-3"><circle cx="40" cy="55" r="28" fill="#ac9f3c" opacity="0.7"/><circle cx="75" cy="55" r="28" fill="#4bb0d3" opacity="0.7"/><text x="57" y="62" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold">R</text></svg> },
  ];

  return (
    <section id="empresas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-institutional-primary mb-4">Directorio de Empresas</h2>
            <div className="w-16 h-1 bg-institutional-accent rounded-full mb-6"></div>
            <p className="text-institutional-secondary text-lg">
              Conozca a las empresas que forman parte de nuestra cámara y fortalecen la cadena de valor local.
            </p>
          </div>
          <button className="mt-6 md:mt-0 text-institutional-primary font-medium hover:text-institutional-accent transition-colors flex items-center">
            Ver directorio completo <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {empresas.map((empresa, idx) => (
            <div key={idx} className="bg-institutional-light aspect-[3/2] rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-md transition-all border border-gray-100 group cursor-pointer">
              {empresa.logo}
              <span className="text-sm font-bold text-institutional-secondary group-hover:text-institutional-primary text-center transition-colors">
                {empresa.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Novedades = () => {
  const noticias = [
    {
      title: 'Foro Internacional de Minería 2026',
      date: '15 de Mayo, 2026',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
      excerpt: 'CARPEM participó activamente en los paneles sobre sustentabilidad y proveedores locales.'
    },
    {
      title: 'Nuevo convenio de capacitación técnica',
      date: '28 de Abril, 2026',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
      excerpt: 'Firmamos un acuerdo con la Universidad Nacional de San Juan para formar operarios especializados.'
    },
    {
      title: 'Mesa de diálogo con operadoras',
      date: '10 de Abril, 2026',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
      excerpt: 'Exitosa jornada de vinculación donde más de 50 socios presentaron sus servicios.'
    }
  ];

  return (
    <section id="novedades" className="py-20 bg-institutional-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-institutional-primary mb-4">Noticias y Novedades</h2>
          <div className="w-16 h-1 bg-institutional-accent mx-auto rounded-full mb-6"></div>
          <p className="text-institutional-secondary text-lg">
            Manténgase informado sobre las últimas actividades institucionales, eventos del sector y oportunidades de negocios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {noticias.map((noticia, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img src={noticia.image} alt={noticia.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-institutional-accent text-xs font-semibold mb-3">
                  <Calendar className="w-3 h-3 mr-1" />
                  {noticia.date}
                </div>
                <h3 className="text-xl font-bold text-institutional-primary mb-3 leading-tight group-hover:text-institutional-accent transition-colors">{noticia.title}</h3>
                <p className="text-institutional-secondary text-sm flex-grow mb-4">{noticia.excerpt}</p>
                <a href="#" className="text-institutional-primary font-medium text-sm flex items-center hover:text-institutional-accent transition-colors">
                  Leer más <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-institutional-primary mb-4">Contáctenos</h2>
            <div className="w-16 h-1 bg-institutional-accent rounded-full mb-8"></div>
            <p className="text-institutional-secondary text-lg mb-8">
              ¿Desea asociar su empresa o conocer más sobre nuestros servicios institucionales? Complete el formulario y nuestro equipo se comunicará a la brevedad.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-institutional-light rounded-lg flex items-center justify-center text-institutional-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-institutional-primary">Dirección</h4>
                  <p className="text-institutional-secondary">Av. Libertador San Martín 1234 (Oeste), San Juan, Argentina.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-institutional-light rounded-lg flex items-center justify-center text-institutional-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-institutional-primary">Teléfono</h4>
                  <p className="text-institutional-secondary">+54 264 123 4567 / 89</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-institutional-light rounded-lg flex items-center justify-center text-institutional-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-institutional-primary">Correo Electrónico</h4>
                  <p className="text-institutional-secondary">contacto@carpem.org.ar</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-institutional-light p-8 rounded-lg border border-gray-100 shadow-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-institutional-primary mb-1">Nombre</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-institutional-primary focus:border-institutional-primary outline-none transition-all" placeholder="Su nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-institutional-primary mb-1">Empresa</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-institutional-primary focus:border-institutional-primary outline-none transition-all" placeholder="Su empresa" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-institutional-primary mb-1">Correo Electrónico</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-institutional-primary focus:border-institutional-primary outline-none transition-all" placeholder="correo@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-institutional-primary mb-1">Motivo</label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-institutional-primary focus:border-institutional-primary outline-none transition-all text-institutional-secondary">
                  <option>Quiero asociarme</option>
                  <option>Consulta general</option>
                  <option>Prensa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-institutional-primary mb-1">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-institutional-primary focus:border-institutional-primary outline-none transition-all resize-none" placeholder="Escriba su mensaje aquí..."></textarea>
              </div>
              <button type="button" className="w-full bg-institutional-primary text-white py-3 rounded-lg font-bold hover:bg-institutional-primary/90 transition-colors shadow-md flex justify-center items-center">
                Enviar Mensaje <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  // SVG Avatar de Obrero con casco blanco
  const WorkerAvatar = ({ className = "w-6 h-6" }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Fondo/Hombros */}
      <path d="M20 95 C20 70 80 70 80 95 Z" fill="#4bb0d3" />
      {/* Chaleco reflectante */}
      <path d="M35 95 L50 75 L65 95 Z" fill="#ac9f3c" />
      <path d="M40 95 L50 82 L60 95 Z" fill="#fff" opacity="0.3" />
      {/* Cara */}
      <circle cx="50" cy="55" r="18" fill="#fcdbb6" />
      {/* Casco Blanco */}
      <path d="M30 45 C30 20 70 20 70 45 L75 48 C75 52 25 52 25 48 Z" fill="#ffffff" />
      <path d="M32 40 L68 40" stroke="#f0f0f0" strokeWidth="2" />
      {/* Gafas de seguridad (opcional, le da toque profesional) */}
      <rect x="38" y="50" width="10" height="4" rx="1" fill="#2c2c2c" />
      <rect x="52" y="50" width="10" height="4" rx="1" fill="#2c2c2c" />
      <path d="M48 52 L52 52" stroke="#2c2c2c" strokeWidth="1.5" />
    </svg>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-80 sm:w-96 rounded-lg shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="bg-institutional-primary text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-institutional-light rounded-full flex items-center justify-center border-2 border-institutional-accent overflow-hidden">
                <WorkerAvatar className="w-8 h-8 mt-2" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Asesor CARPEM</h4>
                <p className="text-xs text-institutional-secondary">En línea</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 h-64 bg-institutional-light overflow-y-auto">
            <div className="flex mb-4 gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex-shrink-0 flex items-center justify-center border border-gray-200 overflow-hidden">
                 <WorkerAvatar className="w-6 h-6 mt-1" />
              </div>
              <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-institutional-dark border border-gray-100 max-w-[85%]">
                Hola, soy el asesor virtual de CARPEM. ¿En qué te puedo ayudar? Puedes preguntarme cómo asociar tu empresa, conocer a nuestra comisión directiva o buscar proveedores específicos.
              </div>
            </div>
          </div>
          
          <div className="p-3 border-t border-gray-100 bg-white">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Escribe tu consulta..." 
                className="w-full pl-3 pr-10 py-2 bg-institutional-light border-none rounded-lg text-sm focus:ring-1 focus:ring-institutional-primary outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-institutional-primary hover:text-institutional-accent transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-institutional-primary text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group relative border-2 border-institutional-accent overflow-hidden"
        >
          <div className="absolute inset-0 bg-institutional-primary z-0"></div>
          <WorkerAvatar className="w-11 h-11 relative z-10 mt-2 group-hover:scale-110 transition-transform" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-institutional-primary z-20"></span>
        </button>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-institutional-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img 
                src="/logo-transparent.png" 
                alt="Logo CARPEM" 
                className="h-20 w-auto object-contain" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Cámara de Prestadores de Servicios Mineros y Energéticos de San Juan. Impulsando el desarrollo sustentable de la región.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-institutional-accent transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-institutional-accent transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#quienes-somos" className="text-gray-400 hover:text-institutional-accent transition-colors text-sm">Quiénes Somos</a></li>
              <li><a href="#autoridades" className="text-gray-400 hover:text-institutional-accent transition-colors text-sm">Autoridades</a></li>
              <li><a href="#empresas" className="text-gray-400 hover:text-institutional-accent transition-colors text-sm">Directorio de Empresas</a></li>
              <li><a href="#novedades" className="text-gray-400 hover:text-institutional-accent transition-colors text-sm">Novedades y Prensa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-5 h-5 text-institutional-accent shrink-0" />
                <span>San Juan, Argentina</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-5 h-5 text-institutional-accent shrink-0" />
                <span>+54 264 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-5 h-5 text-institutional-accent shrink-0" />
                <span>contacto@carpem.org.ar</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Novedades</h4>
            <p className="text-sm text-gray-400 mb-4">Suscríbase a nuestro boletín para recibir noticias del sector.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Su correo" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 w-full text-sm focus:outline-none focus:border-institutional-accent"
              />
              <button type="submit" className="bg-institutional-accent hover:bg-institutional-accent/90 px-4 py-2 rounded-r-lg transition-colors text-white">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} CARPEM. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <QuienesSomos />
        <Autoridades />
        <Rubros />
        <Empresas />
        <Beneficios />
        <Novedades />
        <Contacto />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;
