import React, { useState } from 'react';
import { Sparkles, Calendar, Menu, X, Phone, Globe, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { CONTACT_INFO } from '../data/contactInfo';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onScrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, isTamil } = useLanguage();
  const t = TRANSLATIONS[language];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onScrollToSection(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080c16]/95 backdrop-blur-md border-b border-[#20293d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Identity */}
        <button 
          id="nav-brand-button"
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-[#1a2337] to-[#0c1220] border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.15)] group-hover:border-[#d4af37] transition-all duration-300">
            {/* Celestial Astrolabe Emblem */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" stroke="#d4af37" strokeOpacity="0.8" />
              <circle cx="12" cy="12" r="4" stroke="#d4af37" strokeDasharray="2 2" />
              <path d="M12 3v18M3 12h18" stroke="#d4af37" strokeOpacity="0.5" />
              <circle cx="12" cy="12" r="1.5" fill="#d4af37" />
            </svg>
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-[#f4f7fb] group-hover:text-[#d4af37] transition-colors">
                {t.brandName}
              </span>
              <span className="font-cinzel text-xl sm:text-2xl font-normal text-[#d4af37] tracking-widest">
                {t.brandSuffix}
              </span>
            </div>
            <p className="text-[11px] text-[#9ca3af] tracking-wider uppercase font-medium">
              {t.brandTagline}
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#c5cdd9]">
          <button 
            id="nav-link-services"
            onClick={() => handleNavClick('services')}
            className="hover:text-[#d4af37] transition-colors cursor-pointer py-1"
          >
            {t.navServices}
          </button>
          <button 
            id="nav-link-tools"
            onClick={() => handleNavClick('interactive-tools')}
            className="flex items-center gap-1.5 text-[#e5c158] hover:text-[#f3d986] transition-colors cursor-pointer py-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            {t.navTools}
          </button>
          <button 
            id="nav-link-panchang"
            onClick={() => handleNavClick('panchang')}
            className="hover:text-[#d4af37] transition-colors cursor-pointer py-1"
          >
            {t.navPanchang}
          </button>
          <button 
            id="nav-link-philosophy"
            onClick={() => handleNavClick('why-us')}
            className="hover:text-[#d4af37] transition-colors cursor-pointer py-1"
          >
            {t.navPhilosophy}
          </button>
          <button 
            id="nav-link-stories"
            onClick={() => handleNavClick('testimonials')}
            className="hover:text-[#d4af37] transition-colors cursor-pointer py-1"
          >
            {t.navStories}
          </button>
          <button 
            id="nav-link-faq"
            onClick={() => handleNavClick('faq')}
            className="hover:text-[#d4af37] transition-colors cursor-pointer py-1"
          >
            {t.navFaq}
          </button>
        </nav>

        {/* Desktop Action Buttons & Language Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Bilingual Language Selector */}
          <div className="flex items-center bg-[#131b2c] border border-[#25324b] rounded-lg p-1 text-xs font-semibold shadow-inner">
            <button
              id="lang-btn-en"
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                !isTamil
                  ? 'bg-[#d4af37] text-[#080c16] shadow-sm font-bold'
                  : 'text-[#9ca3af] hover:text-[#e8ecf4]'
              }`}
              title="Switch to English"
            >
              English
            </button>
            <button
              id="lang-btn-ta"
              onClick={() => setLanguage('ta')}
              className={`px-2.5 py-1.5 rounded transition-all cursor-pointer ${
                isTamil
                  ? 'bg-[#d4af37] text-[#080c16] shadow-sm font-bold'
                  : 'text-[#9ca3af] hover:text-[#e8ecf4]'
              }`}
              title="தமிழுக்கு மாறவும்"
            >
              தமிழ்
            </button>
          </div>

          <a
            id="nav-whatsapp-link"
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#9ca3af] hover:text-[#10b981] transition-colors border border-[#1e273a] rounded-lg bg-[#0d1424]"
            title="Chat with Visagan Astro on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#10b981]" />
            <span>{CONTACT_INFO.displayPhone}</span>
          </a>

          <button
            id="nav-book-consultation-btn"
            onClick={() => onOpenBooking()}
            className="relative group overflow-hidden rounded-lg px-4.5 py-2 text-sm font-semibold text-[#080c16] bg-gradient-to-r from-[#e5c158] via-[#d4af37] to-[#bf953f] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <Calendar className="w-4 h-4 text-[#080c16]" />
            <span>{t.navBookBtn}</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Quick Mobile Language Toggle */}
          <button
            id="mobile-lang-toggle"
            onClick={() => setLanguage(isTamil ? 'en' : 'ta')}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-md bg-[#131b2c] border border-[#2d3a54] text-[#d4af37]"
            title="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{isTamil ? 'EN' : 'தமிழ்'}</span>
          </button>

          <button
            id="mobile-quick-book-btn"
            onClick={() => onOpenBooking()}
            className="sm:hidden px-3 py-1.5 text-xs font-semibold rounded-md bg-[#d4af37] text-[#080c16]"
          >
            {isTamil ? 'முன்பதிவு' : 'Book'}
          </button>
          
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#c5cdd9] hover:text-white hover:bg-[#151e30] transition-colors focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-[#20293d] px-4 pt-3 pb-6 space-y-3">
          
          {/* Language Selection in Mobile Drawer */}
          <div className="flex items-center justify-between pb-2 border-b border-[#1a2337]">
            <span className="text-xs text-[#9ca3af] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              Select Language / மொழி:
            </span>
            <div className="flex items-center bg-[#131b2c] border border-[#25324b] rounded-lg p-0.5 text-xs font-semibold">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded ${
                  !isTamil ? 'bg-[#d4af37] text-[#080c16] font-bold' : 'text-[#9ca3af]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ta')}
                className={`px-3 py-1 rounded ${
                  isTamil ? 'bg-[#d4af37] text-[#080c16] font-bold' : 'text-[#9ca3af]'
                }`}
              >
                தமிழ்
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 text-sm font-medium text-[#c5cdd9]">
            <button
              onClick={() => handleNavClick('services')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#151e30] hover:text-[#d4af37]"
            >
              {t.navServices}
            </button>
            <button
              onClick={() => handleNavClick('interactive-tools')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#151e30] text-[#e5c158] flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {t.navTools}
            </button>
            <button
              onClick={() => handleNavClick('panchang')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#151e30] hover:text-[#d4af37]"
            >
              {t.navPanchang}
            </button>
            <button
              onClick={() => handleNavClick('why-us')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#151e30] hover:text-[#d4af37]"
            >
              {t.navPhilosophy}
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#151e30] hover:text-[#d4af37]"
            >
              {t.navStories}
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left px-3 py-2.5 rounded-lg hover:bg-[#151e30] hover:text-[#d4af37]"
            >
              {t.navFaq}
            </button>
          </div>

          <div className="pt-3 border-t border-[#1e273a] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-lg text-center font-semibold text-[#080c16] bg-gradient-to-r from-[#e5c158] to-[#d4af37] shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              {t.navBookBtn}
            </button>
            
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg text-center text-xs font-semibold text-[#10b981] bg-[#0e1e24] border border-[#1b3d36] flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp: {CONTACT_INFO.displayPhone}
            </a>

            <div className="text-center text-xs text-[#9ca3af] pt-0.5">
              {t.topLanguages}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
