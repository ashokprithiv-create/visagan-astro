import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InteractiveAstrologyHub } from './components/InteractiveAstrologyHub';
import { ServicesSection } from './components/ServicesSection';
import { PanchangTransits } from './components/PanchangTransits';
import { WhyVisaganAstro } from './components/WhyVisaganAstro';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';
import { AskVisaganChat } from './components/AskVisaganChat';
import { ServiceId } from './types';
import { Sparkles, MessageSquare } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';
import { TRANSLATIONS } from './data/translations';
import { CONTACT_INFO } from './data/contactInfo';

export default function App() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<ServiceId | undefined>(undefined);

  const handleOpenBooking = (serviceId?: ServiceId | string) => {
    if (serviceId) {
      setPreselectedService(serviceId as ServiceId);
    } else {
      setPreselectedService('birth-chart');
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c16] text-[#e8ecf4] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#faebd7]">
      
      {/* Top Announcements & Quick Contact Bar */}
      <div className="bg-[#0b101e] border-b border-[#182338] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 text-[#cbd5e1]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>
              {t.topAnnouncement}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#9ca3af]">
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10b981] flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-[#10b981]" />
              <span>{t.whatsappInquiries} {CONTACT_INFO.displayPhone}</span>
            </a>
            <span className="hidden md:inline text-[#2d3a54]">•</span>
            <span className="hidden md:inline">{t.topLanguages}</span>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onScrollToSection={handleScrollToSection}
        />

        {/* Interactive Astrology Hub (Instant Kundli & 10-Porutham Matcher) */}
        <InteractiveAstrologyHub
          onOpenBooking={handleOpenBooking}
        />

        {/* Core Services Showcase (All 6 user services) */}
        <ServicesSection
          onOpenBooking={handleOpenBooking}
        />

        {/* Daily Panchang & Planetary Transits */}
        <PanchangTransits
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Why Visagan Astro & Ethical Code */}
        <WhyVisaganAstro />

        {/* Client Transformation Stories */}
        <TestimonialsSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onScrollToSection={handleScrollToSection}
      />

      {/* Interactive Consultation Booking Modal */}
      <ConsultationBookingModal
        isOpen={isBookingOpen}
        initialServiceId={preselectedService}
        onClose={handleCloseBooking}
      />

      {/* Ask Visagan Chatbot */}
      <AskVisaganChat />

    </div>
  );
}
