import {
  BookOpen,
  FileText,
  AlertCircle,
  ArrowRight,
  Calendar,
  User,
  Tag,
  Search,
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("alle");

  const categories = [
    { id: "alle", name: "Alle artikler" },
    { id: "veiledninger", name: "Veiledninger" },
    { id: "lovendringer", name: "Lovendringer" },
    { id: "tips", name: "Tips & råd" },
    { id: "faq", name: "FAQ" },
  ];

  const articles = [
    {
      id: 1,
      title:
        "Slik søker du familiegjenforening - Steg for steg guide",
      category: "veiledninger",
      fagomrade: "utlendingsrett",
      excerpt:
        "En komplett guide til hvordan du søker om familiegjenforening i Norge. Vi går gjennom alle kravene, dokumentene du trenger, og hvordan prosessen fungerer.",
      author: "Advokat Anna Larsen",
      date: "2024-11-10",
      readTime: "8 min",
      image:
        "https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYzMjMyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title:
        "Usaklig oppsigelse - Dine rettigheter som arbeidstaker",
      category: "veiledninger",
      fagomrade: "arbeidsrett",
      excerpt:
        "Har du blitt sagt opp fra jobben og lurer på om oppsigelsen var lovlig? Les om vilkårene for oppsigelse, hva som regnes som usaklig, og hvilke krav du kan fremme.",
      author: "Advokat Omar Hassan",
      date: "2024-11-12",
      readTime: "10 min",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2MzI1NDc2N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title:
        "Erstatning etter trafikkulykke - Hva har du krav på?",
      category: "veiledninger",
      fagomrade: "erstatningsrett",
      excerpt:
        "Veiledning om erstatningskrav etter trafikkulykke. Vi forklarer forskjellen på menerstatning, tapt arbeidsinntekt, fremtidige utgifter og oppreisning.",
      author: "Advokat Anna Larsen",
      date: "2024-11-08",
      readTime: "12 min",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhY2NpZGVudHxlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      title: "Nye regler for statsborgerskap fra 2024",
      category: "lovendringer",
      fagomrade: "utlendingsrett",
      excerpt:
        "Viktige endringer i reglene for norsk statsborgerskap trådte i kraft 1. januar 2024. Les hva som er nytt og hvordan det påvirker deg.",
      author: "Advokat Omar Hassan",
      date: "2024-11-05",
      readTime: "5 min",
      image:
        "https://images.unsplash.com/photo-1698047681820-f26b00b6c639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc2hha2UlMjBhZ3JlZW1lbnR8ZW58MXx8fHwxNzYzMzMxNzE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      title:
        "Diskriminering på arbeidsplassen - Slik går du frem",
      category: "tips",
      fagomrade: "arbeidsrett",
      excerpt:
        "Opplever du diskriminering på jobben? Her er en guide til hvordan du dokumenterer diskriminering, klager til arbeidsgiver, og eventuelt tar saken videre til Likestillings- og diskrimineringsombudet.",
      author: "Advokat Anna Larsen",
      date: "2024-11-02",
      readTime: "9 min",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBkaXZlcnNpdHl8ZW58MXx8fHwxNzYzMjU0NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 6,
      title:
        "10 vanlige feil i asylsøknader - og hvordan du unngår dem",
      category: "tips",
      fagomrade: "utlendingsrett",
      excerpt:
        "Vi ser de samme feilene om og om igjen i asylsøknader. Her er de 10 vanligste feilene og hvordan du kan unngå dem for å øke sjansene for medhold.",
      author: "Advokat Omar Hassan",
      date: "2024-10-28",
      readTime: "10 min",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 7,
      title:
        "Konkurranseklausuler i arbeidskontrakter - Er din gyldig?",
      category: "tips",
      fagomrade: "arbeidsrett",
      excerpt:
        "Mange arbeidskontrakter inneholder konkurranseklausuler, men ikke alle er gyldige. Les om vilkårene for gyldige konkurranseklausuler og når du kan kreve kompensasjon.",
      author: "Advokat Anna Larsen",
      date: "2024-10-25",
      readTime: "7 min",
      image:
        "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cmFjdCUyMHNpZ25pbmd8ZW58MXx8fHwxNzYzMjU0NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 8,
      title: "Hva gjør jeg hvis UDI ber om tilleggsdokumenter?",
      category: "tips",
      fagomrade: "utlendingsrett",
      excerpt:
        "Har du fått en forespørsel fra UDI om å sende inn flere dokumenter? Her er råd om hvordan du bør håndtere dette og hva du må passe på.",
      author: "Advokat Omar Hassan",
      date: "2024-10-20",
      readTime: "6 min",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 9,
      title:
        "Lønnskrav og etterbetaling - Din rett til riktig lønn",
      category: "veiledninger",
      fagomrade: "arbeidsrett",
      excerpt:
        "Har arbeidsgiver ikke betalt deg det du har krav på? Les om hvordan du fremmer lønnskrav, trekker i feriepenger, og hva som skjer hvis arbeidsgiver ikke betaler.",
      author: "Advokat Anna Larsen",
      date: "2024-10-18",
      readTime: "8 min",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25leSUyMHNhbGFyeXxlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 10,
      title:
        "Underholdskrav ved familiegjenforening - dette må du vite",
      category: "veiledninger",
      fagomrade: "utlendingsrett",
      excerpt:
        "En detaljert forklaring på underholdskravet for familiegjenforening. Vi går gjennom beløpsgrenser, unntak, og alternative måter å oppfylle kravet på.",
      author: "Advokat Omar Hassan",
      date: "2024-10-15",
      readTime: "7 min",
      image:
        "https://images.unsplash.com/photo-1513807016779-d51c0c026263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseSUyMGhvbWV8ZW58MXx8fHwxNzYzMjMyMTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 11,
      title: "Yrkesskade - Slik dokumenterer du skaden riktig",
      category: "veiledninger",
      fagomrade: "erstatningsrett",
      excerpt:
        "Har du blitt skadet på jobben? God dokumentasjon er avgjørende for å få erstatning. Her er en guide til hva du må gjøre fra dag én.",
      author: "Advokat Anna Larsen",
      date: "2024-10-12",
      readTime: "11 min",
      image:
        "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBpbmp1cnl8ZW58MXx8fHwxNzYzMjU0NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 12,
      title: "Klage til UNE - når og hvordan du bør gjøre det",
      category: "veiledninger",
      fagomrade: "utlendingsrett",
      excerpt:
        "Har du fått avslag fra UDI? Les om når det er fornuftig å klage til UNE, frister du må holde, og hva som øker sjansene for et positivt resultat.",
      author: "Advokat Omar Hassan",
      date: "2024-10-08",
      readTime: "9 min",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50c3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 13,
      title:
        "Endringer i arbeidsmiljøloven 2024 - Hva betyr det for deg?",
      category: "lovendringer",
      fagomrade: "arbeidsrett",
      excerpt:
        "Nye endringer i arbeidsmiljøloven trådte i kraft i 2024. Vi forklarer endringene i reglene om deltidsansatte, midlertidige ansettelser og varsling.",
      author: "Advokat Anna Larsen",
      date: "2024-10-05",
      readTime: "8 min",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBib29rc3xlbnwxfHx8fDE3NjMyNTQ3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 14,
      title:
        "Personskadeerstatning - Hva dekkes og hva dekkes ikke?",
      category: "tips",
      fagomrade: "erstatningsrett",
      excerpt:
        "En oversikt over hva som inngår i personskadeerstatning. Menerstatning, tapt inntekt, fremtidig inntektstap, utgifter og oppreisning - vi forklarer alt.",
      author: "Advokat Omar Hassan",
      date: "2024-10-01",
      readTime: "10 min",
      image:
        "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGNhcmV8ZW58MXx8fHwxNzYzMjU0NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const faqs = [
    {
      category: "Generelt",
      questions: [
        {
          question: "Hvor lang tid tar det å få svar fra UDI?",
          answer:
            "Saksbehandlingstiden i UDI varierer betydelig avhengig av type sak og kapasitet. Familiegjenforening tar typisk 8-15 måneder, asylsaker 6-18 måneder, og arbeidstillatelser 2-4 måneder. Du kan sjekke gjeldende saksbehandlingstider på UDI.no. Vi følger opp saken din aktivt og kan i noen tilfeller påvirke saksbehandlingstiden.",
        },
        {
          question: "Kan jeg søke om flere ting samtidig?",
          answer:
            "Det kommer an på situasjonen. Noen søknader kan behandles parallelt, mens andre kan påvirke hverandre negativt. Det er viktig å få juridisk veiledning før du sender inn flere søknader samtidig. Vi hjelper deg med å finne den beste strategien for din situasjon.",
        },
        {
          question: "Hva skjer hvis jeg får avslag?",
          answer:
            "Ved avslag har du normalt tre ukers frist til å klage til UNE (Utlendingsnemnda). Det er svært viktig å handle raskt og få profesjonell hjelp med klagen. Vi har god erfaring med klagesaker og oppnår medhold i mange saker. Kontakt oss umiddelbart hvis du har fått avslag.",
        },
      ],
    },
    {
      category: "Asyl",
      questions: [
        {
          question: "Hvem kan søke asyl i Norge?",
          answer:
            "Du kan søke asyl i Norge hvis du har en velgrunnet frykt for forfølgelse i hjemlandet ditt på grunn av rase, religion, nasjonalitet, medlemskap i en spesiell sosial gruppe eller politisk oppfatning. Du må være i Norge eller på grensen for å søke. Vi vurderer dine muligheter i en gratis konsultasjon.",
        },
        {
          question:
            "Kan jeg jobbe mens jeg venter på asylsvar?",
          answer:
            "Som asylsøker kan du jobbe etter å ha ventet i 6 måneder, forutsatt at UDI ikke har fattet vedtak i saken din ennå og du har gyldig ID. Det er flere unntak fra denne regelen. Vi kan veilede deg om dine rettigheter i din spesifikke situasjon.",
        },
      ],
    },
    {
      category: "Familiegjenforening",
      questions: [
        {
          question:
            "Hvor mye må jeg tjene for å få familiegjenforening?",
          answer:
            "Fra 2024 er kravet til årsinntekt kr 312 726 (før skatt) for familiegjenforening med én person. Kravet øker hvis du skal gjenforenes med flere. Det finnes unntak fra underholdskravet, for eksempel for flyktninger og deres familiemedlemmer. Vi vurderer om du oppfyller kravet eller kvalifiserer for unntak.",
        },
        {
          question: "Må vi være gift for familiegjenforening?",
          answer:
            "Nei, også samboere kan søke familiegjenforening, men dere må ha bodd sammen i minst to år (eller ha/vente felles barn). Ekteskap og registrert partnerskap gir også grunnlag for familiegjenforening. Alle forhold må dokumenteres grundig.",
        },
      ],
    },
    {
      category: "Statsborgerskap",
      questions: [
        {
          question:
            "Hvor lenge må jeg ha bodd i Norge for å søke statsborgerskap?",
          answer:
            "Hovedregelen er 7 år sammenhengende opphold i Norge med oppholdstillatelse. For noen grupper gjelder kortere botidskrav, for eksempel 3 år for statsløse eller de som er gift med norsk statsborger. Vi hjelper deg med å beregne din botid korrekt.",
        },
        {
          question:
            "Må jeg gi fra meg mitt tidligere statsborgerskap?",
          answer:
            "Fra 2020 tillater Norge dobbelt statsborgerskap. Du trenger derfor ikke å gi fra deg ditt tidligere statsborgerskap når du blir norsk statsborger. Sjekk likevel reglene i ditt hjemland, da noen land ikke tillater dobbelt statsborgerskap.",
        },
      ],
    },
    {
      category: "Oppholdstillatelse",
      questions: [
        {
          question:
            "Hva er forskjellen på midlertidig og permanent oppholdstillatelse?",
          answer:
            "Midlertidig oppholdstillatelse gis for en begrenset periode og må fornyes. Permanent oppholdstillatelse har ingen utløpsdato og gir større trygghet. For å få permanent oppholdstillatelse må du normalt ha hatt oppholdstillatelse i Norge i tre år og oppfylle visse krav til norskkunnskaper og selvforsørgelse.",
        },
        {
          question:
            "Kan jeg reise ut av Norge mens jeg venter på svar?",
          answer:
            "Det kommer an på type søknad og din situasjon. Noen kan reise fritt, mens andre risikerer at søknaden blir avvist. Hvis du har en pågående søknad, må du alltid sjekke vilkårene for utreise før du reiser. Vi kan veilede deg om dine muligheter.",
        },
      ],
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "alle" ||
      article.category === selectedCategory;
    const matchesSearch =
      article.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      article.excerpt
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-gray-900 mb-6">
            Ressurser og veiledninger
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nyttig informasjon om utlendingsrett, veiledninger
            og svar på ofte stilte spørsmål
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Søk i artikler..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() =>
                    setSelectedCategory(category.id)
                  }
                  className={`px-4 py-3 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? "bg-sky-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-gray-900">
              Artikler og veiledninger
            </h2>
            <div className="text-sm text-gray-600">
              {filteredArticles.length} artikler
            </div>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600">
                Ingen artikler funnet
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
                >
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs bg-blue-100 text-sky-700 px-3 py-1 rounded-full">
                        {
                          categories.find(
                            (c) => c.id === article.category,
                          )?.name
                        }
                      </span>
                      <span className="text-xs text-gray-500">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Calendar size={14} />
                        <span>
                          {new Date(
                            article.date,
                          ).toLocaleDateString("nb-NO")}
                        </span>
                      </div>
                    </div>
                    <button className="mt-4 text-sky-600 hover:text-sky-700 text-sm flex items-center space-x-1 group">
                      <span>Les mer</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Ofte stilte spørsmål
            </h2>
            <p className="text-lg text-gray-600">
              Svar på de vanligste spørsmålene om utlendingsrett
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((section, index) => (
              <div key={index}>
                <h3 className="text-gray-900 mb-4 flex items-center space-x-2">
                  <Tag className="text-sky-600" size={20} />
                  <span>{section.category}</span>
                </h3>
                <div className="space-y-3">
                  {section.questions.map((faq, idx) => (
                    <details
                      key={idx}
                      className="bg-white p-6 rounded-xl border border-gray-100 group"
                    >
                      <summary className="cursor-pointer list-none flex items-center justify-between">
                        <span className="text-gray-900">
                          {faq.question}
                        </span>
                        <ArrowRight
                          className="text-sky-600 group-open:rotate-90 transition-transform flex-shrink-0 ml-4"
                          size={20}
                        />
                      </summary>
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Viktige påminnelser
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle
                  className="text-amber-600 flex-shrink-0 mt-0.5"
                  size={24}
                />
                <div>
                  <h3 className="text-amber-900 mb-2">
                    Frister er viktige
                  </h3>
                  <p className="text-sm text-amber-800">
                    Mange utlendingsrettslige frister er
                    absolutte. Ved avslag har du kun 3 uker på å
                    klage. Kontakt oss umiddelbart hvis du har
                    fått et vedtak.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <FileText
                  className="text-blue-600 flex-shrink-0 mt-0.5"
                  size={24}
                />
                <div>
                  <h3 className="text-blue-900 mb-2">
                    Dokumentasjon er nøkkelen
                  </h3>
                  <p className="text-sm text-blue-800">
                    God dokumentasjon er avgjørende for suksess.
                    Vi hjelper deg med å samle og presentere
                    dokumentasjonen på best mulig måte.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-100 border border-emerald-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <BookOpen
                  className="text-sky-600 flex-shrink-0 mt-0.5"
                  size={24}
                />
                <div>
                  <h3 className="text-sky-900 mb-2">
                    Få profesjonell hjelp
                  </h3>
                  <p className="text-sm text-sky-800">
                    Utlendingsrett er komplisert og i stadig
                    endring. En advokat kan betydelig øke
                    sjansene dine for et positivt vedtak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-700 to-sky-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Hold deg oppdatert
          </h2>
          <p className="text-xl text-sky-50 mb-8">
            Meld deg på vårt nyhetsbrev og få de nyeste
            artiklene og viktige oppdateringer om utlendingsrett
            direkte i innboksen din.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Din e-postadresse"
              className="text-white flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-sky-700 rounded-lg hover:bg-gray-50 transition-colors">
              Meld deg på
            </button>
          </div>
          <p className="text-xs text-sky-100 mt-4">
            Vi sender ut ca. 1-2 nyhetsbrev per måned. Du kan
            melde deg av når som helst.
          </p>
        </div>
      </section>
    </div>
  );
}