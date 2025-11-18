import {
  CheckCircle,
  Scale,
  Shield,
  Gavel,
  DollarSign,
  ArrowRight,
} from "lucide-react";

interface PricingPageProps {
  onOpenContact: () => void;
}

export function PricingPage({
  onOpenContact,
}: PricingPageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-gray-900 mb-6">
            Priser og salær
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi tror på åpenhet og forutsigbarhet. Her finner du
            informasjon om våre priser og ulike
            finansieringsmuligheter.
          </p>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-sky-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 text-white">
            <CheckCircle size={24} />
            <span className="text-lg">
              Gratis og uforpliktende førstekonsultasjon (verdi:
              2 500 kr)
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-sky-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-sky-700 rounded-lg flex items-center justify-center">
                <DollarSign className="text-white" size={24} />
              </div>
              <h2 className="text-gray-900">Priser</h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Veiledende timepris for advokat ligger mellom
                kr. 2000 – 4500 (eks MVA) avhengig av sakens art
                og kompleksitet. I enkelte tilfeller vil
                timepris kunne avtales både under og over
                veiledende timepris.
              </p>

              <p>
                Det vil i de fleste tilfeller kreves innbetalt
                et forskudd. Størrelsen på forskuddet vil
                variere fra oppdrag til oppdrag.
              </p>

              <p className="text-sky-900">
                Vi vil alltid avtale timesats og konkret hvilket
                arbeid som skal gjøres i saken på forhånd. Vi er
                her for din skyld - ikke omvendt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Finansieringsmuligheter
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Det finnes flere måter å finansiere advokathjelp
              på. Vi hjelper deg med å finne den beste løsningen
              for din situasjon.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Insurance Coverage */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Shield
                  className="text-emerald-700"
                  size={28}
                />
              </div>
              <h3 className="text-gray-900 mb-4">
                Forsikringsdekning
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                De aller fleste gode innboforsikringer dekker
                advokatbistand. Det finnes også andre
                forsikringsordninger som kan dekke dine
                advokatkostander. Vi vil alltid undersøke om du
                kan få dekt dine kostander.
              </p>
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <CheckCircle
                  className="text-emerald-600 flex-shrink-0 mt-0.5"
                  size={18}
                />
                <span>
                  Innboforsikring dekker ofte rettshjelp
                </span>
              </div>
            </div>

            {/* Legal Aid */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Scale className="text-blue-700" size={28} />
              </div>
              <h3 className="text-gray-900 mb-4">
                Fri rettshjelp
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I noen saker kan du ha krav på fri rettshjelp.
                Dette vil avhenge av sakstypen, og at du har
                inntekt og formue under lovbestemte grenser. Vi
                vil alltid undersøke om saken din er omfattet av
                ordningen for fri rettshjelp.
              </p>
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <CheckCircle
                  className="text-blue-600 flex-shrink-0 mt-0.5"
                  size={18}
                />
                <span>Basert på inntekt og sakstype</span>
              </div>
            </div>

            {/* Criminal Cases */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mb-6">
                <Gavel className="text-sky-700" size={28} />
              </div>
              <h3 className="text-gray-900 mb-4">
                Straffesaker
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I de fleste straffesaker vil man ha krav på en
                offentlig oppnevnt forsvarer. Dette innebærer at
                det offentlige betaler for advokatbistanden.
              </p>
              <div className="flex items-start space-x-2 text-sm text-gray-600">
                <CheckCircle
                  className="text-sky-600 flex-shrink-0 mt-0.5"
                  size={18}
                />
                <span>
                  Offentlig oppnevnt forsvarer dekkes av staten
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">
              Ofte stilte spørsmål om priser
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question:
                  "Hvordan vet jeg hva min sak vil koste?",
                answer:
                  "I den gratis førstekonsultasjonen går vi gjennom saken din og gir deg et estimat på hva det vil koste. Vi avtaler alltid pris før vi starter arbeidet, slik at du vet hva du kan forvente.",
              },
              {
                question: "Må jeg betale hvis jeg får avslag?",
                answer:
                  "Ja, vi fakturerer for arbeidet som er utført uavhengig av utfallet. Utfallet av saken påvirkes av mange faktorer, men vi gjør alltid vårt beste for et positivt resultat.",
              },
              {
                question: "Kan jeg betale i rater?",
                answer:
                  "Ja, i mange tilfeller kan vi avtale en betalingsplan som passer din økonomiske situasjon. Dette diskuterer vi i førstekonsultasjonen.",
              },
              {
                question: "Hva er inkludert i timeprisen?",
                answer:
                  "Timeprisen inkluderer all kommunikasjon, dokumentforberedelse, møter, og annet juridisk arbeid relatert til din sak. Eventuelle offentlige gebyrer (som UDI-gebyr) kommer i tillegg.",
              },
              {
                question:
                  "Hvordan sjekker jeg om forsikringen min dekker advokat?",
                answer:
                  "Kontakt ditt forsikringsselskap og spør om rettshjelpsdekning. Vi hjelper deg også gjerne med å undersøke dette. De fleste innboforsikringer har rettshjelpsdekning som kan dekke opp til kr 100 000.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 group"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="text-gray-900">
                    {faq.question}
                  </span>
                  <ArrowRight
                    className="text-sky-700 group-open:rotate-90 transition-transform flex-shrink-0 ml-4"
                    size={20}
                  />
                </summary>
                <p className="text-gray-600 mt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sky-700 to-sky-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Få et nøyaktig pristilbud
          </h2>
          <p className="text-xl text-sky-50 mb-8">
            Book en gratis konsultasjon så gir vi deg et
            detaljert og uforpliktende prisoverslag tilpasset
            din spesifikke situasjon.
          </p>
          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-white text-sky-700 rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
          >
            <span>Book gratis konsultasjon</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}