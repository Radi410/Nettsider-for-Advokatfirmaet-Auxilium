import { Plane, Briefcase, DollarSign, Building, HandshakeIcon, Heart, Baby, UserCheck, Scale, Home as HomeIcon, Globe, Gavel, Brain, FileWarning, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onOpenContact: () => void;
  onServiceClick: (serviceId: string) => void;
}

export function ServicesPage({ onOpenContact, onServiceClick }: ServicesPageProps) {
  const services = [
    {
      id: 'utlendingsrett',
      title: 'Utlendingsrett',
      icon: Globe,
      color: 'from-sky-500 to-sky-600',
      description: 'Komplett bistand i alle typer saker hos UDI og UNE, inkludert asyl, familiegjenforening, statsborgerskap og oppholdstillatelser.',
    },
    {
      id: 'arbeidsrett',
      title: 'Arbeidsrett',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600',
      description: 'Juridisk bistand i arbeidsrettlige tvister, oppsigelser, diskriminering og lønnskrav for både arbeidstakere og arbeidsgivere.',
    },
    {
      id: 'erstatningsrett',
      title: 'Erstatningsrett',
      icon: DollarSign,
      color: 'from-emerald-500 to-emerald-600',
      description: 'Vi hjelper deg med erstatningskrav ved personskade, trafikkulykker, yrkesskader og andre situasjoner hvor du har krav på erstatning.',
    },
    {
      id: 'kjop-avtalerett',
      title: 'Kjøp- og avtalerett',
      icon: HandshakeIcon,
      color: 'from-teal-500 to-teal-600',
      description: 'Bistand ved kjøp og salg av fast eiendom, forretningsvirksomhet, samt utforming og gjennomgang av kontrakter og avtaler.',
    },
    {
      id: 'forvaltningsrett',
      title: 'Forvaltningsrett',
      icon: Building,
      color: 'from-indigo-500 to-indigo-600',
      description: 'Hjelp med klager på offentlige vedtak, innsynsbegjæringer og andre saker mot det offentlige.',
    },
    {
      id: 'mekling',
      title: 'Mekling',
      icon: Scale,
      color: 'from-purple-500 to-purple-600',
      description: 'Profesjonell mekling i familiesaker, arveoppgjør og andre konflikter hvor partene ønsker en minnelig løsning.',
    },
    {
      id: 'familie-arv-skifte',
      title: 'Familie-, arv- og skifterett',
      icon: Heart,
      color: 'from-pink-500 to-pink-600',
      description: 'Bistand i skilsmissesaker, samværsrettigheter, arveoppgjør, testamenter og uskiftebo.',
    },
    {
      id: 'barnevern',
      title: 'Barnevern',
      icon: Baby,
      color: 'from-rose-500 to-rose-600',
      description: 'Juridisk bistand i barnevernssaker, både for foreldre og fosterforeldre. Vi sikrer at dine rettigheter blir ivaretatt.',
    },
    {
      id: 'bistandsadvokat',
      title: 'Bistandsadvokat',
      icon: UserCheck,
      color: 'from-amber-500 to-amber-600',
      description: 'Støtte og juridisk bistand til ofre for vold, seksuelle overgrep og andre straffbare handlinger.',
    },
    {
      id: 'trygderett',
      title: 'Trygderett',
      icon: HomeIcon,
      color: 'from-orange-500 to-orange-600',
      description: 'Hjelp med klager på NAV-vedtak, uføretrygd, sykepenger, arbeidsavklaringspenger og andre trygdeytelser.',
    },
    {
      id: 'husleierett',
      title: 'Husleierett',
      icon: HomeIcon,
      color: 'from-cyan-500 to-cyan-600',
      description: 'Bistand i tvister mellom utleier og leietaker, oppsigelse, depositum og vedlikehold.',
    },
    {
      id: 'strafferett',
      title: 'Strafferett',
      icon: Gavel,
      color: 'from-red-500 to-red-600',
      description: 'Forsvar i straffesaker, fra forhør til rettssak. Vi bistår i alle typer straffesaker og sikrer en rettferdig behandling.',
    },
    {
      id: 'psykisk-helsevern',
      title: 'Psykisk helsevern',
      icon: Brain,
      color: 'from-violet-500 to-violet-600',
      description: 'Juridisk bistand i saker om tvangsinnleggelse, tvangsmedisinering og andre spørsmål knyttet til psykisk helsevern.',
    },
    {
      id: 'fusk-skikkethet',
      title: 'Fusk og skikkethetssaker',
      icon: FileWarning,
      color: 'from-slate-500 to-slate-600',
      description: 'Bistand til studenter og yrkesutøvere i saker om eksamensfusk, plagiering og skikkethetsvurderinger.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-gray-900 mb-6">Våre fagområder</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Auxilium tilbyr bred juridisk kompetanse innen en rekke fagområder. 
            Uansett hva du trenger hjelp til, har vi erfaring og ekspertise til å bistå deg.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <button
                    onClick={() => onServiceClick(service.id)}
                    className="flex items-center space-x-2 text-sky-700 hover:text-sky-800 transition-colors group/btn"
                  >
                    <span>Les mer</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-700 to-sky-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Usikker på hvilket fagområde du trenger?</h2>
          <p className="text-xl text-sky-50 mb-8">
            Kontakt oss for en gratis og uforpliktende konsultasjon. Vi hjelper deg med å finne 
            riktig løsning for din juridiske utfordring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 bg-white text-sky-700 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Book konsultasjon</span>
              <ArrowRight size={20} />
            </button>
            <a
              href="tel:+4712345678"
              className="px-8 py-4 bg-sky-800 text-white border-2 border-white rounded-lg hover:bg-sky-900 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Ring oss: +47 123 45 678</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
