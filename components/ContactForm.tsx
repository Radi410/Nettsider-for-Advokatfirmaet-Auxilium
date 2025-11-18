import { useState } from 'react';
import { Send, Check } from 'lucide-react';

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    gdprConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 2 seconds and call onSuccess
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        gdprConsent: false,
      });
      setSubmitted(false);
      if (onSuccess) {
        onSuccess();
      }
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={32} className="text-sky-700" />
        </div>
        <h3 className="text-gray-900 mb-2">Takk for din henvendelse!</h3>
        <p className="text-gray-600">
          Vi tar kontakt med deg så snart som mulig.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
          Fullt navn *
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow"
          placeholder="Ditt fulle navn"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
          E-postadresse *
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow"
          placeholder="din@epost.no"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
          Telefonnummer *
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow"
          placeholder="+47 123 45 678"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
          Hvordan kan vi hjelpe deg? *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow resize-none"
          placeholder="Beskriv kort din situasjon og hva du trenger hjelp til..."
        />
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="gdpr"
          required
          checked={formData.gdprConsent}
          onChange={(e) => setFormData({ ...formData, gdprConsent: e.target.checked })}
          className="mt-1 w-4 h-4 text-sky-700 border-gray-300 rounded focus:ring-sky-500"
        />
        <label htmlFor="gdpr" className="text-sm text-gray-600">
          Jeg samtykker til at mine personopplysninger behandles i henhold til{' '}
          <button type="button" className="text-sky-700 hover:text-sky-800 underline">
            personvernerklæringen
          </button>
          . *
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sky-700 text-white py-3 px-6 rounded-lg hover:bg-sky-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <span>Sender...</span>
        ) : (
          <>
            <span>Send henvendelse</span>
            <Send size={20} />
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Vi svarer vanligvis innen 24 timer på hverdager
      </p>
    </form>
  );
}