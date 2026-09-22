import React from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Calendar,
  Clock,
  MapPin
} from 'lucide-react';
import { ServiceId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { CONTACT_INFO } from '../data/contactInfo';

interface FooterProps {
  onOpenBooking: (serviceId?: ServiceId) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onScrollToSection }) => {
  const { language, isTamil } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <footer id="footer-section" className="bg-[#050811] text-[#9ca3af] border-t border-[#162035] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#141d30]">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141f33] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" stroke="#d4af37" />
                  <circle cx="12" cy="12" r="4" stroke="#d4af37" strokeDasharray="2 2" />
                  <path d="M12 3v18M3 12h18" stroke="#d4af37" />
                  <circle cx="12" cy="12" r="1" fill="#d4af37" />
                </svg>
              </div>
              <div>
                <span className="font-cinzel text-xl font-bold tracking-wider text-[#f4f7fb]">
                  {t.brandName} <span className="text-[#d4af37]">{t.brandSuffix}</span>
                </span>
                <p className="text-[11px] text-[#9ca3af] tracking-wider uppercase font-medium">
                  {t.brandSubtitle}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#8a96a8] leading-relaxed max-w-md">
              {t.brandDesc}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#c5cdd9]">
              <span className="px-2.5 py-1 rounded-md bg-[#0a101f] border border-[#1b273e]">
                English & தமிழ்
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#0a101f] border border-[#1b273e]">
                {isTamil ? 'உலகளாவிய ஆன்லைன் வீடியோ' : 'Global Online Video Sessions'}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#0a101f] border border-[#1b273e]">
                {isTamil ? '100% ரகசியம்' : '100% Confidential'}
              </span>
            </div>
          </div>

          {/* Core Services (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#f4f7fb] uppercase tracking-wider mb-2">
              {t.footerCoreServices}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  id="footer-link-birth-chart"
                  onClick={() => onOpenBooking('birth-chart')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer text-left"
                >
                  • {isTamil ? 'முழு ஜாதக கணிப்பு & பலன் (Birth-Chart Readings)' : 'Comprehensive Birth-Chart (Kundli) Readings'}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-marriage"
                  onClick={() => onOpenBooking('marriage-compatibility')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer text-left"
                >
                  • {isTamil ? 'திருமணப் பொருத்தம் & 10 பொருத்தங்கள் (Marriage Compatibility)' : 'Marriage Compatibility & Kundli Milan (10 Porutham)'}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-career"
                  onClick={() => onOpenBooking('career-guidance')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer text-left"
                >
                  • {isTamil ? 'தொழில் & வேலை மேன்மை வழிகாட்டல் (Career & Business)' : 'Career, Vocation & Business Timing (D10 Dasamsa)'}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-finance"
                  onClick={() => onOpenBooking('financial-insights')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer text-left"
                >
                  • {isTamil ? 'தன யோகம் & நிதி முதலீட்டு வழிகாட்டல் (Financial Insights)' : 'Financial Insights & Wealth Timing (Dhana Yogas)'}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-relationship"
                  onClick={() => onOpenBooking('relationship-guidance')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer text-left"
                >
                  • {isTamil ? 'குடும்ப அமைதி & உறவுகள் நல்லிணக்கம் (Relationship Guidance)' : 'Relationship & Family Harmony Guidance'}
                </button>
              </li>
              <li>
                <button
                  id="footer-link-remedies"
                  onClick={() => onOpenBooking('spiritual-remedies')}
                  className="hover:text-[#d4af37] transition-colors cursor-pointer text-left"
                >
                  • {isTamil ? 'உண்மையான வேத நற்பரிகாரங்கள் (Spiritual Remedies)' : 'Authentic Spiritual Remedies (Pariharam, Mantras, Gems)'}
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-sm font-bold text-[#f4f7fb] uppercase tracking-wider mb-2">
              {t.footerDesk}
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#9ca3af]">
              <a 
                id="footer-whatsapp-link"
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#10b981] transition-colors group"
              >
                <MessageSquare className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span>
                  WhatsApp: <strong className="text-[#e2e8f0] group-hover:text-[#10b981]">{CONTACT_INFO.displayPhone}</strong>
                </span>
              </a>

              <a 
                id="footer-phone-link"
                href={`tel:${CONTACT_INFO.phoneNumber}`}
                className="flex items-start gap-2.5 hover:text-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.displayPhone}</span>
              </a>

              <a 
                id="footer-email-link"
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-start gap-2.5 hover:text-[#d4af37] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="break-all group-hover:underline">{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{isTamil ? CONTACT_INFO.workingHoursTa : CONTACT_INFO.workingHoursEn}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="footer-book-consultation-btn"
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 rounded-xl font-semibold text-xs text-[#080c16] bg-[#d4af37] hover:bg-[#e5c158] transition-colors cursor-pointer active:scale-98"
              >
                {t.navBookBtn}
              </button>
            </div>
          </div>

        </div>

        {/* Ethical Astrological Disclaimer */}
        <div className="py-6 border-b border-[#141d30] text-[11px] text-[#6d798c] leading-relaxed">
          <strong className="text-[#8897ab]">{t.footerDisclaimerTitle}</strong> {t.footerDisclaimerText}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6d798c]">
          <div>
            © {new Date().getFullYear()} Visagan Astro. {t.footerRights}
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onScrollToSection('why-us')} className="hover:text-[#c5cdd9] cursor-pointer">
              {t.footerEthicalCode}
            </button>
            <button onClick={() => onScrollToSection('services')} className="hover:text-[#c5cdd9] cursor-pointer">
              {t.navServices}
            </button>
            <button onClick={() => onScrollToSection('faq')} className="hover:text-[#c5cdd9] cursor-pointer">
              {t.navFaq}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
