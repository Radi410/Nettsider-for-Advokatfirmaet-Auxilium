import {
  ArrowRight,
  Star,
  Briefcase,
  Globe,
  Heart,
  Gavel,
  CheckCircle,
  MessageCircle,
  Clock,
} from "lucide-react";


interface HomePageProps {
  onNavigate: (
    page:
      | "hjem"
      | "om-oss"
      | "fagomrader"
      | "priser"
      | "kontakt"
      | "ressurser",
  ) => void;
  onOpenContact: () => void;
  onServiceClick: (serviceId: string) => void;
}

export function HomePage({
  onNavigate,
  onOpenContact,
  onServiceClick,
}: HomePageProps) {
  const featuredServices = [
    {
      id: "utlendingsrett",
      title: "Utlendingsrett",
      description:
        "Komplett bistand i alle UDI og UNE-saker - asyl, familiegjenforening, statsborgerskap.",
      icon: Globe,
    },
    {
      id: "arbeidsrett",
      title: "Arbeidsrett",
      description:
        "Juridisk bistand i arbeidsrettlige tvister, oppsigelser og diskriminering.",
      icon: Briefcase,
    },
    {
      id: "familie-arv-skifte",
      title: "Familie- og arverett",
      description:
        "Bistand i skilsmisse, samvær, arveoppgjør og testamenter.",
      icon: Heart,
    },
    {
      id: "strafferett",
      title: "Strafferett",
      description:
        "Erfarne forsvarere i alle typer straffesaker, fra forhør til rettssak.",
      icon: Gavel,
    },
  ];

  const reviews = [
    {
      name: "Amina K.",
      rating: 5,
      text: "Auxilium hjalp meg med familiegjenforening. De var tålmodige, forklarte alt på en måte jeg forsto, og var alltid tilgjengelige. Etter 8 måneder fikk min familie endelig komme til Norge!",
      case: "Familiegjenforening",
    },
    {
      name: "Lars H.",
      rating: 5,
      text: "Jeg fikk urettmessig oppsigelse. Auxilium tok saken min og kjempet for mine rettigheter. Jeg fikk både erstatning og oppreisning. Kunne ikke vært mer fornøyd!",
      case: "Arbeidsrett",
    },
    {
      name: "Sarah L.",
      rating: 5,
      text: "Profesjonell og empatisk behandling i en vanskelig skilsmissesak. De gjorde en komplisert prosess forståelig og var med meg hele veien.",
      case: "Familierett",
    },
  ];

  const faqs = [
    {
      question: "Hva koster det å bruke advokat?",
      answer:
        "Vi tilbyr en transparent prisstruktur og gratis førstekonsultasjon. Mange har også rett til fri rettshjelp. Kontakt oss for et uforpliktende prisoverslag.",
    },
    {
      question: "Hvor raskt kan dere ta en sak?",
      answer:
        "Vi tilbyr vanligvis førstekonsultasjon innen 2-3 virkedager. Ved hastesaker kan vi ofte møte deg samme eller neste dag.",
    },
    {
      question: "Snakker dere andre språk enn norsk?",
      answer:
        "Ja, våre advokater snakker flere språk inkludert engelsk, arabisk og urdu. Vi kan også arrangere tolk for andre språk ved behov.",
    },
    {
      question: "Hva er en gratis konsultasjon?",
      answer:
        "Den første konsultasjonen er helt gratis og uforpliktende. Vi bruker ca. 30-45 minutter på å gå gjennom din sak, vurdere mulighetene og gi deg et prisoverslag.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm mb-6">
                ✓ Medlem av Advokatforeningen
              </div>

              <h1 className="text-gray-900 mb-6">
                Din juridiske partner i viktige øyeblikk
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                Auxilium betyr "å hjelpe" - og det er nettopp
                det vi gjør. Vi tilbyr effektiv og personlig
                juridisk rådgivning av høy kvalitet innen et
                bredt spekter av fagområder.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={onOpenContact}
                  className="px-8 py-4 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-sky-700/30"
                >
                  <span>Book gratis konsultasjon</span>
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => onNavigate("fagomrader")}
                  className="px-8 py-4 bg-white text-sky-700 border-2 border-sky-700 rounded-lg hover:bg-sky-50 transition-colors"
                >
                  Se våre tjenester
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-sky-700 mb-1">500+</div>
                  <div className="text-sm text-gray-600">
                    Vellykkede saker
                  </div>
                </div>
                <div>
                  <div className="text-sky-700 mb-1">
                    15+ år
                  </div>
                  <div className="text-sm text-gray-600">
                    Erfaring
                  </div>
                </div>
                <div>
                  <div className="text-sky-700 mb-1">4.9/5</div>
                  <div className="text-sm text-gray-600">
                    Klientvurdering
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYXd5ZXIlMjBvZmZpY2V8ZW58MXx8fHwxNzYzMjQ5NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Lawyer Consultation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                    <MessageCircle
                      className="text-sky-700"
                      size={24}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">
                      Svartid
                    </div>
                    <div className="text-gray-900">
                      Under 24 timer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-gray-900 mb-6">
            Velkommen til Auxilium
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            "Auxilium" betyr "å hjelpe" på latin, og det er
            nettopp det vi gjør. Vi tilbyr effektiv og personlig
            juridisk rådgivning av høy kvalitet innen mange
            fagområder. Vi forstår at juridiske utfordringer kan
            være stressende, og vi er her for å guide deg trygt
            gjennom prosessen.
          </p>
          <button
            onClick={() => onNavigate("om-oss")}
            className="text-sky-700 hover:text-sky-800 flex items-center space-x-2 mx-auto group"
          >
            <span>Les mer om oss</span>
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Utvalgte fagområder
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Vi tilbyr bred juridisk kompetanse innen mange
              områder. Her er noen av våre mest etterspurte
              tjenester.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100 group"
                >
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors">
                    <Icon className="text-sky-700" size={24} />
                  </div>
                  <h3 className="text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <button
                    onClick={() => onServiceClick(service.id)}
                    className="text-sky-700 hover:text-sky-800 text-sm flex items-center space-x-1 group/btn"
                  >
                    <span>Les mer</span>
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate("fagomrader")}
              className="px-8 py-3 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition-colors inline-flex items-center space-x-2"
            >
              <span>Se alle fagområder (14 områder)</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Signals & Reviews */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Hva våre klienter sier
            </h2>
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 fill-current"
                  size={24}
                />
              ))}
            </div>
            <p className="text-gray-600">
              4.9/5 basert på 150+ anmeldelser
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-gray-900">
                      {review.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {review.case}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Ofte stilte spørsmål
            </h2>
            <p className="text-lg text-gray-600">
              Her er svar på noen av de vanligste spørsmålene vi
              får
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 group"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="text-gray-900">
                    {faq.question}
                  </span>
                  <ArrowRight
                    className="text-sky-700 group-open:rotate-90 transition-transform"
                    size={20}
                  />
                </summary>
                <p className="text-gray-600 mt-4 pl-0">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate("ressurser")}
              className="text-sky-700 hover:text-sky-800 flex items-center space-x-2 mx-auto group"
            >
              <span>Se alle spørsmål og svar</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-700 to-sky-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Klar til å starte din sak?
          </h2>
          <p className="text-xl text-sky-50 mb-8">
            Book en gratis og uforpliktende konsultasjon. Vi går
            gjennom din sak og gir deg en vurdering av
            muligheter og veien videre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOpenContact}
              className="px-8 py-4 bg-white text-sky-700 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Book konsultasjon nå</span>
              <ArrowRight size={20} />
            </button>
            <a
              href="tel:+4712345678"
              className="px-8 py-4 bg-sky-800 text-white border-2 border-white rounded-lg hover:bg-sky-900 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Clock size={20} />
              <span>Ring oss: +47 123 45 678</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}