import React from 'react';
import { Star, Quote, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../data/astrologyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface TestimonialsProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsProps> = ({ onOpenBooking }) => {
  const { language, isTamil } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#090e1b] border-t border-[#18243a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131d32] border border-[#d4af37]/30 text-xs font-semibold text-[#e5c158] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{t.testimonialsBadge}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#f4f7fb] mb-4">
            {t.testimonialsTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af]">
            {t.testimonialsSubtitle}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-14">
          {TESTIMONIALS.map((item) => {
            const review = isTamil && item.reviewTa ? item.reviewTa : item.review;
            const serviceUsed = isTamil && item.serviceUsedTa ? item.serviceUsedTa : item.serviceUsed;
            const location = isTamil && item.locationTa ? item.locationTa : item.location;
            const outcome = isTamil && item.outcomeTa ? item.outcomeTa : item.outcome;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#0d1424] border border-[#1e2a44] p-6 sm:p-8 flex flex-col justify-between hover:border-[#d4af37]/40 transition-all shadow-md relative"
              >
                <div className="absolute top-6 right-6 text-[#243350] pointer-events-none">
                  <Quote className="w-10 h-10 opacity-30" />
                </div>

                <div>
                  {/* Rating stars & Service pill */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-[#d4af37]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#152035] text-[#d4af37] border border-[#d4af37]/20">
                      {serviceUsed}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed italic mb-6">
                    "{review}"
                  </p>
                </div>

                {/* Client Info & Real Life Outcome */}
                <div className="pt-4 border-t border-[#172238] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8c6d1f] flex items-center justify-center font-bold text-xs text-[#080c16]">
                      {item.clientName.split(' ')[0][0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#f4f7fb]">{item.clientName}</div>
                      <div className="text-[11px] text-[#9ca3af]">{location}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#10b981] font-medium bg-[#10b981]/10 px-2.5 py-1 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span className="line-clamp-1">{outcome}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#121a2d] to-[#0c1322] border border-[#233352] text-center max-w-2xl mx-auto space-y-4">
          <div className="font-cinzel text-xl font-bold text-[#f4f7fb]">
            {t.bannerTitle}
          </div>
          <p className="text-xs sm:text-sm text-[#9ca3af]">
            {t.bannerSubtitle}
          </p>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#080c16] bg-gradient-to-r from-[#e5c158] to-[#d4af37] hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{t.bannerBtn}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
