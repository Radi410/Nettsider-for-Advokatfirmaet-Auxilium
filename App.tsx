import { useState } from "react";
import {
  Home,
  Users,
  Briefcase,
  DollarSign,
  Mail,
  BookOpen,
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";
import { ServiceDetailPage } from "./components/ServiceDetailPage";
import { PricingPage } from "./components/PricingPage";
import { ContactPage } from "./components/ContactPage";
import { ResourcesPage } from "./components/ResourcesPage";
import { ContactForm } from "./components/ContactForm";
import logo from "figma:asset/ee7f87e7fbe3925602b1f625306c61a53b99f34b.png";

type Page =
  | "hjem"
  | "om-oss"
  | "fagomrader"
  | "priser"
  | "kontakt"
  | "ressurser"
  | "service-detail";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("hjem");
  const [selectedService, setSelectedService] =
    useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const navigation = [
    { name: "Hjem", page: "hjem" as Page, icon: Home },
    { name: "Om oss", page: "om-oss" as Page, icon: Users },
    {
      name: "Fagområder",
      page: "fagomrader" as Page,
      icon: Briefcase,
    },
    {
      name: "Priser",
      page: "priser" as Page,
      icon: DollarSign,
    },
    {
      name: "Ressurser",
      page: "ressurser" as Page,
      icon: BookOpen,
    },
    { name: "Kontakt", page: "kontakt" as Page, icon: Mail },
  ];

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentPage("service-detail");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "hjem":
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenContact={() => setShowContactForm(true)}
            onServiceClick={handleServiceClick}
          />
        );
      case "om-oss":
        return (
          <AboutPage
            onOpenContact={() => setShowContactForm(true)}
          />
        );
      case "fagomrader":
        return (
          <ServicesPage
            onOpenContact={() => setShowContactForm(true)}
            onServiceClick={handleServiceClick}
          />
        );
      case "service-detail":
        return (
          <ServiceDetailPage
            serviceId={selectedService}
            onOpenContact={() => setShowContactForm(true)}
            onBack={() => setCurrentPage("fagomrader")}
          />
        );
      case "priser":
        return (
          <PricingPage
            onOpenContact={() => setShowContactForm(true)}
          />
        );
      case "kontakt":
        return <ContactPage />;
      case "ressurser":
        return <ResourcesPage />;
      default:
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenContact={() => setShowContactForm(true)}
            onServiceClick={handleServiceClick}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b border-gray-800 shadow-lg"
        style={{ backgroundColor: "#154466" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <button
              onClick={() => {
                setCurrentPage("hjem");
                setMobileMenuOpen(false);
              }}
              className="flex items-center"
            >
              <div className="flex items-center">
                {/* Logo SVG */}
                <svg
                  width="180"
                  height="45"
                  viewBox="0 0 180 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-11"
                >
                  {/* Icon Box with Scales of Justice */}
                  <g transform="translate(8, 7.5)">
                    {/* White Box Frame */}
                    <rect
                      x="0"
                      y="0"
                      width="30"
                      height="30"
                      rx="2"
                      stroke="white"
                      strokeWidth="0.5"
                      fill="none"
                    />

                    {/* Scales of Justice */}
                    {/* Top Circle/Knob */}
                    <circle
                      cx="15"
                      cy="8"
                      r="1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      fill="none"
                    />

                    {/* Vertical Line */}
                    <line
                      x1="15"
                      y1="9.5"
                      x2="15"
                      y2="16"
                      stroke="white"
                      strokeWidth="1.5"
                    />

                    {/* Horizontal Beam */}
                    <line
                      x1="8"
                      y1="16"
                      x2="22"
                      y2="16"
                      stroke="white"
                      strokeWidth="1.5"
                    />

                    {/* Left Scale Pan */}
                    <path
                      d="M 8 16 L 6 20 L 10 20 Z"
                      stroke="white"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <line
                      x1="6"
                      y1="20"
                      x2="10"
                      y2="20"
                      stroke="white"
                      strokeWidth="1.2"
                    />

                    {/* Right Scale Pan */}
                    <path
                      d="M 22 16 L 20 20 L 24 20 Z"
                      stroke="white"
                      strokeWidth="1.2"
                      fill="none"
                    />
                    <line
                      x1="20"
                      y1="20"
                      x2="24"
                      y2="20"
                      stroke="white"
                      strokeWidth="1.2"
                    />

                    {/* Base - DOUBLE LINES like in the image */}
                    <line
                      x1="10"
                      y1="24"
                      x2="20"
                      y2="24"
                      stroke="white"
                      strokeWidth="1.2"
                    />
                    <line
                      x1="8"
                      y1="26"
                      x2="22"
                      y2="26"
                      stroke="white"
                      strokeWidth="1.2"
                    />
                  </g>

                  {/* Typography */}
                  <g transform="translate(50, 12)">
                    {/* ADVOKATFIRMAET - smaller, wider spacing */}
                    <text
                      x="0"
                      y="0"
                      fill="white"
                      fontSize="6"
                      fontWeight="300"
                      letterSpacing="2"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      ADVOKATFIRMAET
                    </text>

                    {/* AUXILIUM - large, bold */}
                    <text
                      x="0"
                      y="18"
                      fill="white"
                      fontSize="20"
                      fontWeight="700"
                      letterSpacing="1"
                      fontFamily="Arial, Helvetica, sans-serif"
                    >
                      AUXILIUM
                    </text>
                  </g>
                </svg>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setCurrentPage(item.page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.page
                      ? "text-white"
                      : "text-gray-300 hover:bg-opacity-20 hover:bg-white hover:text-black"
                  }`}
                  style={
                    currentPage === item.page
                      ? {
                          backgroundColor:
                            "rgba(255, 255, 255, 0.15)",
                        }
                      : {}
                  }
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => setShowContactForm(true)}
                className="ml-4 px-6 py-2 bg-white rounded-lg transition-colors hover:bg-gray-100"
                style={{ color: "#154466" }}
              >
                Book konsultasjon
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-white hover:bg-opacity-10"
            >
              {mobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-white border-opacity-20">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.page}
                    onClick={() => {
                      setCurrentPage(item.page);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      currentPage === item.page
                        ? "bg-sky-800 bg-opacity-15 text-white"
                        : "text-gray-300 hover:bg-white hover:bg- hover:bg-opacity-10"
                    }`}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </button>
                );
              })}
              <button
                onClick={() => {
                  setShowContactForm(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-4 px-6 py-3 bg-white rounded-lg transition-colors hover:bg-white hover:text-black"
                style={{ color: "#154466" }}
              >
                Book konsultasjon
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-[#154466] text-white-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <button
                  onClick={() => {
                    setCurrentPage("hjem");
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center"
                >
                  <div className="flex items-center">
                    {/* Logo SVG */}
                    <svg
                      width="180"
                      height="45"
                      viewBox="0 0 180 45"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-11"
                    >
                      {/* Icon Box with Scales of Justice */}
                      <g transform="translate(8, 7.5)">
                        {/* White Box Frame */}
                        <rect
                          x="0"
                          y="0"
                          width="30"
                          height="30"
                          rx="2"
                          stroke="white"
                          strokeWidth="0.5"
                          fill="none"
                        />

                        {/* Scales of Justice */}
                        {/* Top Circle/Knob */}
                        <circle
                          cx="15"
                          cy="8"
                          r="1.5"
                          stroke="white"
                          strokeWidth="1.5"
                          fill="none"
                        />

                        {/* Vertical Line */}
                        <line
                          x1="15"
                          y1="9.5"
                          x2="15"
                          y2="16"
                          stroke="white"
                          strokeWidth="1.5"
                        />

                        {/* Horizontal Beam */}
                        <line
                          x1="8"
                          y1="16"
                          x2="22"
                          y2="16"
                          stroke="white"
                          strokeWidth="1.5"
                        />

                        {/* Left Scale Pan */}
                        <path
                          d="M 8 16 L 6 20 L 10 20 Z"
                          stroke="white"
                          strokeWidth="1.2"
                          fill="none"
                        />
                        <line
                          x1="6"
                          y1="20"
                          x2="10"
                          y2="20"
                          stroke="white"
                          strokeWidth="1.2"
                        />

                        {/* Right Scale Pan */}
                        <path
                          d="M 22 16 L 20 20 L 24 20 Z"
                          stroke="white"
                          strokeWidth="1.2"
                          fill="none"
                        />
                        <line
                          x1="20"
                          y1="20"
                          x2="24"
                          y2="20"
                          stroke="white"
                          strokeWidth="1.2"
                        />

                        {/* Base - DOUBLE LINES like in the image */}
                        <line
                          x1="10"
                          y1="24"
                          x2="20"
                          y2="24"
                          stroke="white"
                          strokeWidth="1.2"
                        />
                        <line
                          x1="8"
                          y1="26"
                          x2="22"
                          y2="26"
                          stroke="white"
                          strokeWidth="1.2"
                        />
                      </g>

                      {/* Typography */}
                      <g transform="translate(50, 12)">
                        {/* ADVOKATFIRMAET - smaller, wider spacing */}
                        <text
                          x="0"
                          y="0"
                          fill="white"
                          fontSize="6"
                          fontWeight="300"
                          letterSpacing="2"
                          fontFamily="Arial, Helvetica, sans-serif"
                        >
                          ADVOKATFIRMAET
                        </text>

                        {/* AUXILIUM - large, bold */}
                        <text
                          x="0"
                          y="18"
                          fill="white"
                          fontSize="20"
                          fontWeight="700"
                          letterSpacing="1"
                          fontFamily="Arial, Helvetica, sans-serif"
                        >
                          AUXILIUM
                        </text>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
              <p className="text-gray-400 mb-4">
                "Auxilium" betyr "å hjelpe" - og det er nettopp
                det vi gjør. Vi tilbyr effektiv og personlig
                juridisk rådgivning av høy kvalitet.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                <MapPin size={16} className="text-white" />
                <span>Oslo, Norge</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                <Phone size={16} className="text-white" />
                <a
                  href="tel:+4712345678"
                  className="hover:text-white transition-colors"
                >
                  +47 123 45 678
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                <Mail size={16} className="text-white" />
                <a
                  href="mailto:post@auxi.no"
                  className="hover:text-white transition-colors"
                >
                  post@auxi.no
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Clock size={16} className="text-white" />
                <span>Man-Fre: 09:00-16:00</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white mb-4">Snarveier</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.page}>
                    <button
                      onClick={() => {
                        setCurrentPage(item.page);
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white mb-4">
                Våre andre nettsteder
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://forsvarerteamet.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    forsvarerteamet.no
                  </a>
                </li>
                <li>
                  <a
                    href="https://studieadvokatene.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    studieadvokatene.no
                  </a>
                </li>
                <li>
                  <a
                    href="https://meklingspartner.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    meklingspartner.no
                  </a>
                </li>
                <li>
                  <a
                    href="https://familiensadvokat.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    familiensadvokat.no
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Advokatfirmaet Auxilium AS. Alle
              rettigheter reservert.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Personvern
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Vilkår
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Contact Button (Mobile) */}
      {currentPage !== "kontakt" && (
        <button
          onClick={() => setShowContactForm(true)}
          className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-sky-700 text-white rounded-full shadow-lg hover:bg-sky-800 transition-all hover:scale-110 flex items-center justify-center z-40"
        >
          <Mail size={24} />
        </button>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
              <h2 className="text-gray-900">Kontakt oss</h2>
              <button
                onClick={() => setShowContactForm(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <ContactForm
                onSuccess={() => setShowContactForm(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}