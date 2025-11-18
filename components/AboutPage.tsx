import {
  Heart,
  Target,
  Award,
  Users,
  Globe,
  Clock,
  ArrowRight,
  BookOpen,
  Scale,
  Shield,
} from "lucide-react";


interface AboutPageProps {
  onOpenContact: () => void;
}

export function AboutPage({ onOpenContact }: AboutPageProps) {
  const values = [
    {
      icon: Heart,
      title: "Empati",
      description:
        "Vi forstår at utlendingsrett handler om menneskers liv og fremtid. Vi behandler hver sak med den respekten og omsorgen den fortjener.",
    },
    {
      icon: Target,
      title: "Effektivitet",
      description:
        "Tid er ofte avgjørende i utlendingssaker. Vi jobber raskt og strukturert for å sikre best mulig resultat innen korteste tid.",
    },
    {
      icon: Award,
      title: "Kvalitet",
      description:
        "Vi holder oss oppdatert på endringer i lovverk og praksis, og leverer alltid juridisk rådgivning av høyeste kvalitet.",
    },
    {
      icon: Globe,
      title: "Mangfold",
      description:
        "Vi snakker flere språk og har dyp forståelse for ulike kulturer. Dette gjør oss i stand til å kommunisere effektivt med alle klienter.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Spesialisert ekspertise",
      description:
        "Vi fokuserer utelukkende på utlendingsrett, noe som gir oss en unik innsikt i UDI og UNE sine prosesser og praksis.",
      icon: Scale,
    },
    {
      title: "Personlig oppfølging",
      description:
        "Du får din egen kontaktperson som følger deg gjennom hele prosessen. Vi er alltid tilgjengelige for spørsmål.",
      icon: Users,
    },
    {
      title: "Transparent kommunikasjon",
      description:
        "Vi forklarer prosessen på et språk du forstår, og holder deg oppdatert på alle utviklinger i saken din.",
      icon: BookOpen,
    },
    {
      title: "Høy suksessrate",
      description:
        "Over 80% av våre saker får medhold, takket være grundig forberedelse og sterk juridisk argumentasjon.",
      icon: Award,
    },
    {
      title: "Flerspråklig service",
      description:
        "Vi kommuniserer på norsk, engelsk, arabisk og urdu. Tolk kan også arrangeres for andre språk.",
      icon: Globe,
    },
    {
      title: "Rask respons",
      description:
        "Vi svarer på henvendelser innen 24 timer på hverdager, fordi vi vet at din sak er viktig.",
      icon: Clock,
    },
  ];

  const team = [
    {
      name: "Advokat Anna Larsen",
      title: "Partner & Senioradvokat",
      image:
        "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzI5MjAyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      education: "Master i jus, Universitetet i Oslo (2008)",
      experience: "15+ år erfaring med utlendingsrett",
      specialties: [
        "Asyl og beskyttelse",
        "UNE-klager",
        "Komplekse familiesaker",
      ],
      languages: ["Norsk", "Engelsk", "Tysk"],
      bio: "Anna har vært passionert om menneskerettigheter siden studietiden. Hun har representert hundrevis av klienter i UDI og UNE-saker med stor suksess.",
    },
    {
      name: "Advokat Omar Hassan",
      title: "Advokat",
      image:
        "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMyNDU1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      education: "Master i jus, Universitetet i Bergen (2014)",
      experience: "9 år erfaring med utlendingsrett",
      specialties: [
        "Familiegjenforening",
        "Arbeidstillatelser",
        "Statsborgerskap",
      ],
      languages: ["Norsk", "Engelsk", "Arabisk", "Urdu"],
      bio: "Omar har selv erfart utfordringene ved innvandring, noe som gir ham en unik forståelse for klientenes situasjon. Han er kjent for sin grundige tilnærming.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-gray-900 mb-6">
            Om Advokatfirmaet Auxilium
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi er et advokatfirma med hjerte, dedikert til å
            hjelpe mennesker gjennom komplekse juridiske
            prosesser med empati, kompetanse og engasjement.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">
                Vår historie
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Advokatfirmaet Auxilium ble grunnlagt i 2010
                  med en klar visjon: å gi mennesker i
                  vanskelige immigrasjonssituasjoner tilgang til
                  juridisk bistand av høyeste kvalitet.
                </p>
                <p>
                  Navnet "Auxilium" kommer fra latin og betyr "å
                  hjelpe". Dette er kjernen i alt vi gjør. Vi
                  tror på at alle fortjener rettferdig
                  behandling, uavhengig av bakgrunn eller
                  økonomi.
                </p>
                <p>
                  Gjennom årene har vi hjulpet over 500 klienter
                  med å oppnå sine drømmer om å bo i Norge,
                  gjenforenes med familie, eller få beskyttelse.
                  Hver sak er unik, og hver klient er viktig for
                  oss.
                </p>
                <p>
                  I dag er vi et av de ledende firmaene innen
                  utlendingsrett i Norge, med anerkjennelse for
                  vår ekspertise, vår empatiske tilnærming og
                  vår høye suksessrate.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXJuJTIwYWR2b2thdHxlbnwwfHx8fDE3NjMyOTIwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Våre verdier</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Disse verdiene styrer alt vi gjør og hvordan vi
              behandler våre klienter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-sky-700" size={28} />
                  </div>
                  <h3 className="text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Hvorfor velge Auxilium?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi skiller oss ut gjennom vår dype ekspertise,
              personlige tilnærming og forpliktelse til ditt
              beste resultat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon
                        className="text-sky-700"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team: #TODO If more than two make a slider */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Møt teamet vårt
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Erfarne advokater med lidenskap for utlendingsrett
              og menneskerettigheter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sky-700 mb-4">
                    {member.title}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Utdanning
                      </div>
                      <div className="text-sm text-gray-700">
                        {member.education}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Erfaring
                      </div>
                      <div className="text-sm text-gray-700">
                        {member.experience}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Spesialområder
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map(
                          (specialty, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-sky-50 text-sky-700 px-3 py-1 rounded-full"
                            >
                              {specialty}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Språk
                      </div>
                      <div className="text-sm text-gray-700">
                        {member.languages.join(", ")}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 italic border-t border-gray-100 pt-4">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Sertifiseringer og medlemskap
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-sky-700" size={32} />
              </div>
              <h3 className="text-gray-900 mb-2">
                Advokatforeningen
              </h3>
              <p className="text-sm text-gray-600">
                Medlem siden 2010
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-sky-700" size={32} />
              </div>
              <h3 className="text-gray-900 mb-2">
                Anbefalt advokat
              </h3>
              <p className="text-sm text-gray-600">
                Juridisk Tidsskrift 2022-2024
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-sky-700" size={32} />
              </div>
              <h3 className="text-gray-900 mb-2">
                NOAS Samarbeidspartner
              </h3>
              <p className="text-sm text-gray-600">
                Norsk organisasjon for asylsøkere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-700 to-sky-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Klar til å snakke med oss?
          </h2>
          <p className="text-xl text-sky-50 mb-8">
            Vi tilbyr gratis førstekonsultasjon hvor vi vurderer
            din sak og svarer på alle dine spørsmål.
          </p>
          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-white rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
            style={{ color: "#154466" }}
          >
            <span>Book konsultasjon nå</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}