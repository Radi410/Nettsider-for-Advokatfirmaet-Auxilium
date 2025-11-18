import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-gray-900 mb-6">Kontakt oss</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi er her for å hjelpe deg. Ta kontakt for en gratis og uforpliktende konsultasjon.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-gray-900 mb-8">Kontaktinformasjon</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Telefon</div>
                    <a href="tel:+4712345678" className="text-gray-900 hover:text-sky-600 transition-colors">
                      +47 123 45 678
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Ring oss mellom 09:00-16:00 på hverdager
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">E-post</div>
                    <a href="mailto:post@auxi.no" className="text-gray-900 hover:text-sky-600 transition-colors">
                      post@auxi.no
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Vi svarer vanligvis innen 24 timer
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Adresse</div>
                    <div className="text-gray-900">
                      Storgata 12<br />
                      0155 Oslo<br />
                      Norge
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Åpningstider</div>
                    <div className="text-gray-900 space-y-1">
                      <div className="flex justify-between">
                        <span className="mr-4">Mandag - Fredag:</span>
                        <span>09:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="mr-4">Lørdag - Søndag:</span>
                        <span>Stengt</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Møter avtales etter avtale, også utenom åpningstider
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-sky-50 border border-sky-200 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="text-sky-600 flex-shrink-0 mt-0.5" size={24} />
                  <div>
                    <h3 className="text-sky-900 mb-2">Rask respons garantert</h3>
                    <p className="text-sm text-sky-800">
                      Vi svarer på alle henvendelser innen 24 timer på hverdager. 
                      Har du en hastesak? Ring oss direkte.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.0!2d10.7522!3d59.9139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDU0JzUwLjAiTiAxMMKwNDUnMDcuOSJF!5e0!3m2!1sen!2sno!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Advokatfirmaet Auxilium lokasjon"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="text-gray-900 mb-2">Send oss en melding</h2>
                <p className="text-gray-600 mb-6">
                  Fyll ut skjemaet under så tar vi kontakt med deg så snart som mulig.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Andre måter å kontakte oss på</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-sky-600" size={28} />
              </div>
              <h3 className="text-gray-900 mb-2">Book telefonmøte</h3>
              <p className="text-sm text-gray-600 mb-4">
                Foretrekker du et telefonmøte? Vi ringer deg på et tidspunkt som passer deg.
              </p>
              <button className="text-sky-600 hover:text-sky-700 transition-colors">
                Book nå
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-sky-600" size={28} />
              </div>
              <h3 className="text-gray-900 mb-2">Videomøte</h3>
              <p className="text-sm text-gray-600 mb-4">
                Vi tilbyr digitale møter via Teams eller Zoom hvis det passer deg bedre.
              </p>
              <button className="text-sky-600 hover:text-sky-700 transition-colors">
                Avtal videomøte
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-100 text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-sky-600" size={28} />
              </div>
              <h3 className="text-gray-900 mb-2">Besøk vårt kontor</h3>
              <p className="text-sm text-gray-600 mb-4">
                Ønsker du å møte oss personlig? Book et møte på vårt kontor i Oslo sentrum.
              </p>
              <button className="text-sky-600 hover:text-sky-700 transition-colors">
                Book fysisk møte
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Før du tar kontakt</h2>
            <p className="text-lg text-gray-600">
              Her er noen svar på vanlige spørsmål om hvordan vi jobber
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Er førstekonsultasjonen virkelig gratis?',
                answer: 'Ja, den første konsultasjonen er helt gratis og uforpliktende. Vi bruker ca. 30-45 minutter på å gå gjennom din sak, vurdere mulighetene og gi deg et prisoverslag. Du forplikter deg til ingenting.',
              },
              {
                question: 'Hvor raskt kan dere ta en sak?',
                answer: 'Vi tilbyr vanligvis førstekonsultasjon innen 2-3 virkedager. Ved hastesaker kan vi ofte møte deg samme eller neste dag. Kontakt oss så finner vi en løsning.',
              },
              {
                question: 'Kan jeg snakke med en advokat på mitt eget språk?',
                answer: 'Våre advokater snakker norsk, engelsk, arabisk og urdu. For andre språk kan vi arrangere kvalifisert tolk til møtet uten ekstra kostnad for deg.',
              },
              {
                question: 'Hva bør jeg ha med til førstekonsultasjonen?',
                answer: 'Ta med alle relevante dokumenter du har (pass, oppholdstillatelser, vedtak fra UDI/UNE, korrespondanse, etc.). Hvis du ikke har alt, er det ikke noe problem - vi kan hjelpe deg med å skaffe det som mangler.',
              },
              {
                question: 'Kan jeg få juridisk rådgivning via e-post?',
                answer: 'Vi kan svare på enkle spørsmål via e-post, men for grundig juridisk vurdering anbefaler vi et møte eller telefonsamtale. Dette sikrer at vi forstår din situasjon fullt ut og kan gi deg best mulig råd.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100 group"
              >
                <summary className="cursor-pointer list-none">
                  <span className="text-gray-900">{faq.question}</span>
                </summary>
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
