import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Compass, 
  Award 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const WhyVisaganAstro: React.FC = () => {
  const { language, isTamil } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="why-us" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131d32] border border-[#d4af37]/30 text-xs font-semibold text-[#e5c158] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{t.whyBadge}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#f4f7fb] mb-5">
            {t.whyTitle}
          </h2>
          <p className="text-base text-[#9ca3af] leading-relaxed">
            {t.whySubtitle}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-[#0c1322] rounded-2xl p-6 sm:p-7 border border-[#1b273e] hover:border-[#d4af37]/40 transition-all flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#141e33] border border-[#233352] flex items-center justify-center text-[#d4af37] mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#f4f7fb] mb-2.5">
                {t.pillar1Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                {t.pillar1Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#182338] text-[11px] font-semibold text-[#d4af37]">
              {t.pillar1Badge}
            </div>
          </div>

          <div className="bg-[#0c1322] rounded-2xl p-6 sm:p-7 border border-[#1b273e] hover:border-[#d4af37]/40 transition-all flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#141e33] border border-[#233352] flex items-center justify-center text-[#38bdf8] mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#f4f7fb] mb-2.5">
                {t.pillar2Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                {t.pillar2Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#182338] text-[11px] font-semibold text-[#38bdf8]">
              {t.pillar2Badge}
            </div>
          </div>

          <div className="bg-[#0c1322] rounded-2xl p-6 sm:p-7 border border-[#1b273e] hover:border-[#d4af37]/40 transition-all flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#141e33] border border-[#233352] flex items-center justify-center text-[#10b981] mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#f4f7fb] mb-2.5">
                {t.pillar3Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                {t.pillar3Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#182338] text-[11px] font-semibold text-[#10b981]">
              {t.pillar3Badge}
            </div>
          </div>

          <div className="bg-[#0c1322] rounded-2xl p-6 sm:p-7 border border-[#1b273e] hover:border-[#d4af37]/40 transition-all flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#141e33] border border-[#233352] flex items-center justify-center text-[#ec4899] mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#f4f7fb] mb-2.5">
                {t.pillar4Title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                {t.pillar4Desc}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#182338] text-[11px] font-semibold text-[#ec4899]">
              {t.pillar4Badge}
            </div>
          </div>

        </div>

        {/* Detailed Consultation Journey (How It Works) */}
        <div className="bg-[#0d1527] rounded-3xl p-8 sm:p-10 border border-[#202e4a]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-cinzel text-2xl font-bold text-[#f4f7fb] mb-2">
              {t.journeyTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#9ca3af]">
              {t.journeySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative pl-6 border-l-2 border-[#d4af37]">
              <span className="font-mono text-xs font-bold text-[#d4af37] block mb-1">
                {isTamil ? 'நிலை 01' : 'STAGE 01'}
              </span>
              <h4 className="font-cinzel text-base font-bold text-[#f4f7fb] mb-2">
                {t.stage1Title}
              </h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                {t.stage1Desc}
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-[#d4af37]">
              <span className="font-mono text-xs font-bold text-[#d4af37] block mb-1">
                {isTamil ? 'நிலை 02' : 'STAGE 02'}
              </span>
              <h4 className="font-cinzel text-base font-bold text-[#f4f7fb] mb-2">
                {t.stage2Title}
              </h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                {t.stage2Desc}
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-[#d4af37]">
              <span className="font-mono text-xs font-bold text-[#d4af37] block mb-1">
                {isTamil ? 'நிலை 03' : 'STAGE 03'}
              </span>
              <h4 className="font-cinzel text-base font-bold text-[#f4f7fb] mb-2">
                {t.stage3Title}
              </h4>
              <p className="text-xs text-[#9ca3af] leading-relaxed">
                {t.stage3Desc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
