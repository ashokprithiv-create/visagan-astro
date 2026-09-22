import React from 'react';
import { 
  Sun, 
  Moon, 
  Clock, 
  Sparkles, 
  Compass, 
  ShieldAlert, 
  CheckCircle2, 
  CalendarDays,
  Flame,
  ArrowRight
} from 'lucide-react';
import { getTodaysPanchang } from '../data/astrologyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface PanchangProps {
  onOpenBooking: () => void;
}

export const PanchangTransits: React.FC<PanchangProps> = ({ onOpenBooking }) => {
  const panchang = getTodaysPanchang();
  const { language, isTamil } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="panchang" className="py-20 bg-[#080d19] border-t border-[#1a253c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#131d32] border border-[#d4af37]/30 text-xs font-semibold text-[#e5c158] mb-3">
              <CalendarDays className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{t.panchangBadge}</span>
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#f4f7fb]">
              {t.panchangTitle}
            </h2>
            <p className="text-sm text-[#9ca3af] mt-2">
              {t.panchangSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-lg bg-[#0e172a] border border-[#21304d] text-xs font-medium text-[#d4af37]">
              {isTamil && panchang.dateFormattedTa ? panchang.dateFormattedTa : panchang.dateFormatted}
            </span>
          </div>
        </div>

        {/* Panchang Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Daily 5 Elements (Panch-Anga) - 6 cols */}
          <div className="lg:col-span-6 bg-[#0d1424] rounded-2xl p-6 sm:p-7 border border-[#1e2a44] shadow-lg">
            <h3 className="font-cinzel text-lg font-bold text-[#f4f7fb] mb-5 flex items-center justify-between border-b border-[#1c273e] pb-4">
              <span>{isTamil ? 'இன்றைய பஞ்ச அங்கம் (பஞ்சாங்கம்)' : "Today's Five Vedic Pillars"}</span>
              <span className="text-xs font-normal text-[#9ca3af]">
                {isTamil ? 'திருக்கணித முறை' : 'Standard Sidereal Alignment'}
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
              <div className="p-3.5 rounded-xl bg-[#080d19] border border-[#1b2840]">
                <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider flex items-center gap-1.5">
                  <Moon className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{t.todayTithi}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#f4f7fb] mt-1">
                  {isTamil && panchang.tithiTa ? panchang.tithiTa : panchang.tithi}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#080d19] border border-[#1b2840]">
                <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{t.todayNakshatra}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#f4f7fb] mt-1">
                  {isTamil && panchang.nakshatraTa ? panchang.nakshatraTa : panchang.nakshatra}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#080d19] border border-[#1b2840]">
                <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{t.todayYoga}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#f4f7fb] mt-1">
                  {isTamil && panchang.yogaTa ? panchang.yogaTa : panchang.yoga}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#080d19] border border-[#1b2840]">
                <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{t.todayKarana}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#f4f7fb] mt-1">
                  {isTamil && panchang.karanaTa ? panchang.karanaTa : panchang.karana}
                </div>
              </div>
            </div>

            {/* Auspicious vs Inauspicious Windows */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#12221b] border border-[#1b4332] flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-[#6ee7b7] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>{t.auspiciousAbhijit}</span>
                  </div>
                  <div className="text-xs text-[#a7f3d0] mt-0.5">
                    {isTamil ? 'புதிய தொடக்கங்கள், சுப காரியங்கள் மற்றும் ஒப்பந்தங்களுக்கு உகந்தது' : 'Ideal for new beginnings, agreements, and auspicious ventures'}
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#10b981] whitespace-nowrap">
                  {panchang.abhijitMuhurat.split('(')[0]}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#261517] border border-[#4a1d24] flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-[#fca5a5] font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-[#ef4444]" />
                    <span>{t.cautionRahu}</span>
                  </div>
                  <div className="text-xs text-[#fecaca] mt-0.5">
                    {isTamil ? 'முக்கிய நிதி பரிவர்த்தனைகள் அல்லது பயணங்களை தொடங்க தவிர்க்கவும்' : 'Refrain from signing major financial contracts or starting travel'}
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#f87171] whitespace-nowrap">
                  {panchang.rahuKalam}
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#9ca3af] px-1 pt-1">
                <span>{t.cautionYamagandam}: <strong className="text-[#c5cdd9]">{panchang.yamagandam}</strong></span>
                <span>{isTamil ? 'சூரிய உதயம்' : 'Sunrise'}: <strong className="text-[#c5cdd9]">{panchang.sunrise}</strong></span>
                <span>{isTamil ? 'சூரிய அஸ்தமனம்' : 'Sunset'}: <strong className="text-[#c5cdd9]">{panchang.sunset}</strong></span>
              </div>
            </div>
          </div>

          {/* Active Major Planetary Transits (Gochara) - 6 cols */}
          <div className="lg:col-span-6 bg-[#0d1424] rounded-2xl p-6 sm:p-7 border border-[#1e2a44] shadow-lg">
            <h3 className="font-cinzel text-lg font-bold text-[#f4f7fb] mb-5 flex items-center justify-between border-b border-[#1c273e] pb-4">
              <span>{t.planetaryTransitsTitle}</span>
              <span className="text-xs font-normal text-[#d4af37]">
                {isTamil ? 'கோசார கிரக நிலைகள்' : 'Real-Time Cosmic Shift'}
              </span>
            </h3>

            <div className="space-y-3.5 mb-6">
              {panchang.planetaryTransits.map((transit, idx) => {
                const planetName = isTamil && transit.planetTa ? transit.planetTa : transit.planet;
                const signName = isTamil && transit.currentSignTa ? transit.currentSignTa : transit.currentSign;
                const motionText = isTamil && transit.motionTa ? transit.motionTa : (transit.motion === 'Direct' ? t.directMotion : t.retrogradeMotion);
                const insightText = isTamil && transit.insightTa ? transit.insightTa : transit.insight;

                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#080d19] border border-[#1b2840]">
                    <div className="flex items-center justify-between text-xs font-bold mb-1">
                      <span className="text-[#f4f7fb]">
                        {planetName} {isTamil ? '–' : 'in'} {signName}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] ${
                        transit.motion === 'Direct' ? 'bg-[#10b981]/20 text-[#10b981]' : 'bg-[#e07a5f]/20 text-[#e07a5f]'
                      }`}>
                        {motionText}
                      </span>
                    </div>
                    <p className="text-xs text-[#9ca3af] leading-relaxed">
                      {insightText}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-r from-[#141e33] to-[#0c1424] border border-[#243452] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-[#f4f7fb]">
                  {isTamil ? 'இந்த கிரகப் பெயர்ச்சிகள் உங்கள் ஜாதகத்தை எவ்வாறு பாதிக்கும்?' : 'How do these transits affect your Janma Kundli?'}
                </div>
                <div className="text-[11px] text-[#9ca3af]">
                  {isTamil ? 'பொதுவான பெயர்ச்சிகள் உங்கள் லக்னம் மற்றும் ராசியைப் பொறுத்து மாறுபடும்.' : 'General transits apply differently depending on your personal Lagna and Moon Sign.'}
                </div>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-4 py-2 rounded-lg text-xs font-semibold text-[#080c16] bg-[#d4af37] hover:bg-[#e5c158] transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>{isTamil ? 'பெயர்ச்சி பலன் ஆலோசனை' : 'Get Transit Reading'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
