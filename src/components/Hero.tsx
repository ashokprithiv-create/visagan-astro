import React from 'react';
import { Sparkles, Calendar, ArrowRight, Compass } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToSection }) => {
  const { language, isTamil } = useLanguage();
  const t = TRANSLATIONS[language];

  const quickServices = [
    { 
      label: isTamil ? 'ஜாதக கணிப்பு & பலன்' : 'Birth-Chart (Kundli) Readings', 
      id: 'birth-chart' 
    },
    { 
      label: isTamil ? 'திருமணப் பொருத்தம் (10 பொருத்தங்கள்)' : 'Marriage Compatibility (Porutham)', 
      id: 'marriage-compatibility' 
    },
    { 
      label: isTamil ? 'தொழில் & வேலை வழிகாட்டல்' : 'Career & Vocation Guidance', 
      id: 'career-guidance' 
    },
    { 
      label: isTamil ? 'தன யோகம் & நிதி மேன்மை' : 'Financial Insights & Wealth Timing', 
      id: 'financial-insights' 
    },
    { 
      label: isTamil ? 'குடும்ப அமைதி & உறவுகள்' : 'Relationship & Family Harmony', 
      id: 'relationship-guidance' 
    },
    { 
      label: isTamil ? 'வேத நற்பரிகாரங்கள்' : 'Spiritual Remedies & Pariharam', 
      id: 'spiritual-remedies' 
    },
  ];

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Celestial Ambience & Concentric Orbital Rings */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        {/* Soft radial starry glow */}
        <div className="w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full bg-gradient-to-br from-[#1d273f]/40 via-[#0d1424]/60 to-transparent blur-3xl opacity-70" />
        
        {/* Sacred Geometry Astronomical Rings */}
        <div className="absolute w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] rounded-full border border-[#d4af37]/10 animate-[spin_120s_linear_infinite]" />
        <div className="absolute w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] rounded-full border border-[#d4af37]/15 border-dashed animate-[spin_90s_linear_infinite_reverse]" />
        <div className="absolute w-[220px] h-[220px] sm:w-[400px] sm:h-[400px] rounded-full border border-[#2c3d5d]/40" />
        
        {/* Subtle Constellation Points */}
        <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-ping opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-[#ffffff] opacity-75" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 rounded-full bg-[#e5c158] opacity-50" />
        <div className="absolute bottom-1/3 right-1/5 w-2 h-2 rounded-full bg-[#d4af37]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#162035]/80 border border-[#d4af37]/30 text-xs font-medium text-[#e5c158] mb-6 backdrop-blur-sm shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{t.heroBadge}</span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f4f7fb] leading-[1.15] mb-6">
            {t.heroTitlePart1} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fae29c] via-[#d4af37] to-[#e5c158]">
              {t.heroTitleHighlight}
            </span>{' '}
            {t.heroTitlePart2}
          </h1>

          {/* Value Narrative tailored to seekers */}
          <p className="text-base sm:text-lg text-[#a9b4c7] font-normal leading-relaxed mb-9 max-w-2xl mx-auto">
            {t.heroDescription}
          </p>

          {/* Primary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              id="hero-book-btn"
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-[#080c16] bg-gradient-to-r from-[#e5c158] via-[#d4af37] to-[#c59d43] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2.5 text-base cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-5 h-5 text-[#080c16]" />
              <span>{t.heroCtaBook}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-tools-btn"
              onClick={() => onScrollToSection('interactive-tools')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-medium text-[#e8ecf4] bg-[#121a2c]/80 hover:bg-[#19243d] border border-[#2b3954] hover:border-[#d4af37]/60 transition-all duration-300 flex items-center justify-center gap-2 text-base cursor-pointer"
            >
              <Compass className="w-5 h-5 text-[#d4af37]" />
              <span>{t.heroCtaTools}</span>
            </button>
          </div>

          {/* Ethical Trust Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-8 border-t border-[#1c273c]">
            <div className="p-3 rounded-lg bg-[#0e1526]/60 border border-[#1e2a44] text-center">
              <div className="text-xl sm:text-2xl font-cinzel font-bold text-[#f4f7fb]">{t.heroStat1Number}</div>
              <div className="text-xs text-[#9ca3af] mt-0.5">{t.heroStat1Label}</div>
            </div>
            <div className="p-3 rounded-lg bg-[#0e1526]/60 border border-[#1e2a44] text-center">
              <div className="text-xl sm:text-2xl font-cinzel font-bold text-[#d4af37]">{t.heroStat2Number}</div>
              <div className="text-xs text-[#9ca3af] mt-0.5">{t.heroStat2Label}</div>
            </div>
            <div className="p-3 rounded-lg bg-[#0e1526]/60 border border-[#1e2a44] text-center">
              <div className="text-xl sm:text-2xl font-cinzel font-bold text-[#f4f7fb]">{t.heroStat3Number}</div>
              <div className="text-xs text-[#9ca3af] mt-0.5">{t.heroStat3Label}</div>
            </div>
            <div className="p-3 rounded-lg bg-[#0e1526]/60 border border-[#1e2a44] text-center">
              <div className="text-xl sm:text-2xl font-cinzel font-bold text-[#d4af37]">{t.heroStat4Number}</div>
              <div className="text-xs text-[#9ca3af] mt-0.5">{t.heroStat4Label}</div>
            </div>
          </div>

        </div>

        {/* Quick Service Badges Bar */}
        <div className="mt-14 p-4 sm:p-5 rounded-2xl bg-[#0c1322]/80 border border-[#1d2942] backdrop-blur-md">
          <div className="text-center text-xs font-semibold uppercase tracking-widest text-[#9ca3af] mb-3.5">
            {t.heroSolutionsTitle}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
            {quickServices.map((service, idx) => (
              <button
                key={idx}
                id={`hero-quick-service-${service.id}`}
                onClick={() => onScrollToSection('services')}
                className="px-3.5 py-1.5 rounded-full bg-[#151e33] hover:bg-[#1f2c4a] border border-[#2b3955] text-[#d6deeb] hover:text-[#faebd7] hover:border-[#d4af37]/50 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>{service.label}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
