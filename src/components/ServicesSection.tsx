import React, { useState } from 'react';
import { 
  Compass, 
  HeartHandshake, 
  Briefcase, 
  Coins, 
  Users, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  X, 
  HelpCircle,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';
import { ServiceDetail, ServiceId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: ServiceId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const { language, isTamil } = useLanguage();
  const t = TRANSLATIONS[language];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#d4af37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#e07a5f]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#3b82f6]" />;
      case 'Coins':
        return <Coins className="w-6 h-6 text-[#10b981]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#ec4899]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-[#8b5cf6]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131b2e] border border-[#d4af37]/30 text-xs font-semibold text-[#e5c158] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{t.servicesBadge}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4f7fb] mb-5 leading-tight">
            {t.servicesTitle}
          </h2>
          <p className="text-base text-[#a0acc0] leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_LIST.map((service) => {
            const title = isTamil && service.titleTa ? service.titleTa : service.title;
            const tagline = isTamil && service.taglineTa ? service.taglineTa : service.tagline;
            const shortDesc = isTamil && service.shortDescriptionTa ? service.shortDescriptionTa : service.shortDescription;
            const badge = isTamil && service.badgeTa ? service.badgeTa : service.badge;
            const deliverables = isTamil && service.deliverablesTa ? service.deliverablesTa : service.deliverables;

            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-[#0d1424] border border-[#1d2942] hover:border-[#d4af37]/50 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-xl bg-[#141f33] border border-[#22314d] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getServiceIcon(service.iconName)}
                    </div>

                    {badge && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#1a253c] text-[#e5c158] border border-[#d4af37]/20">
                        {badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-cinzel text-xl font-bold text-[#f4f7fb] mb-2 group-hover:text-[#e5c158] transition-colors">
                    {title}
                  </h3>

                  <p className="text-xs font-medium text-[#d4af37] italic mb-3">
                    "{tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed mb-6">
                    {shortDesc}
                  </p>

                  {/* Key Highlights / Deliverables Preview */}
                  <div className="space-y-2 border-t border-[#172238] pt-4 mb-6">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7e8ca3]">
                      {t.deliverablesLabel}
                    </div>
                    {deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#c5cdd9]">
                        <Check className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 border-t border-[#172238] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-medium text-[#9ca3af] hover:text-[#f4f7fb] transition-colors flex items-center gap-1 cursor-pointer py-1.5"
                  >
                    <span>{t.btnViewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-[#080c16] bg-gradient-to-r from-[#e5c158] to-[#d4af37] hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.btnBookThisService}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Informative Guarantee Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#10182b] via-[#0e1628] to-[#121c33] border border-[#22314e] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#18233c] border border-[#2c3d5e] text-[#d4af37] shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-cinzel text-lg font-bold text-[#f4f7fb] mb-1">
                {isTamil ? 'எந்த ஜோதிட சேவை உங்களுக்கு ஏற்றது என்று தெரியவில்லையா?' : 'Not Sure Which Reading Best Fits Your Situation?'}
              </h4>
              <p className="text-xs sm:text-sm text-[#9ca3af] max-w-2xl">
                {isTamil 
                  ? 'தொழில், திருமணம், நிதி மற்றும் பரிகாரங்கள் குறித்த பல சந்தேகங்கள் இருப்பின், முழு ஜாதக கணிப்பு (ஜன்ம குண்டலி ஆய்வு) ஆலோசனையை தேர்ந்தெடுக்கவும். இதில் அனைத்து அம்சங்களும் விரிவாக ஆராயப்படும்.'
                  : 'If you have a complex blend of career and personal questions, choose the Comprehensive Birth-Chart (Janma Kundli) reading. It automatically incorporates career, marriage, finance, and remedies during your 60-minute session.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking('birth-chart')}
            className="w-full md:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#080c16] bg-[#d4af37] hover:bg-[#e5c158] transition-colors whitespace-nowrap cursor-pointer shadow-md flex items-center justify-center gap-2"
          >
            <span>{isTamil ? 'அடிப்படை ஜாதக ஆலோசனைக்கு முன்பதிவு' : 'Schedule Foundation Reading'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* SERVICE DETAIL MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#05070d]/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#0c1322] border border-[#243350] rounded-2xl p-6 sm:p-8 shadow-2xl my-8 text-[#e8ecf4]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#9ca3af] hover:text-white hover:bg-[#162035] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            {(() => {
              const modalTitle = isTamil && selectedService.titleTa ? selectedService.titleTa : selectedService.title;
              const modalBadge = isTamil && selectedService.badgeTa ? selectedService.badgeTa : (selectedService.badge || (isTamil ? 'ஜோதிட சேவை' : 'Consultation Service'));
              const modalDuration = isTamil && selectedService.durationTa ? selectedService.durationTa : selectedService.duration;
              const modalFullDesc = isTamil && selectedService.fullDescriptionTa ? selectedService.fullDescriptionTa : selectedService.fullDescription;
              const modalQuestions = isTamil && selectedService.keyQuestionsAnsweredTa ? selectedService.keyQuestionsAnsweredTa : selectedService.keyQuestionsAnswered;
              const modalDeliverables = isTamil && selectedService.deliverablesTa ? selectedService.deliverablesTa : selectedService.deliverables;
              const modalPrep = isTamil && selectedService.preparationNeededTa ? selectedService.preparationNeededTa : selectedService.preparationNeeded;

              return (
                <>
                  <div className="flex items-start gap-4 mb-6 pr-8">
                    <div className="w-14 h-14 rounded-xl bg-[#141f33] border border-[#253554] flex items-center justify-center shrink-0">
                      {getServiceIcon(selectedService.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#d4af37]">
                        {modalBadge}
                      </span>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f4f7fb]">
                        {modalTitle}
                      </h3>
                      <div className="flex items-center gap-4 text-xs text-[#9ca3af] mt-1.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                          {modalDuration}
                        </span>
                        <span>•</span>
                        <span>{isTamil ? '1-on-1 வீடியோ/போன் & PDF அறிக்கை' : '1-on-1 Video or Phone & PDF Dossier'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Full Description */}
                  <div className="mb-6">
                    <p className="text-sm text-[#cbd5e1] leading-relaxed">
                      {modalFullDesc}
                    </p>
                  </div>

                  {/* Questions Answered */}
                  <div className="mb-6 bg-[#080d19] p-4 rounded-xl border border-[#19243a]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2.5 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4" />
                      <span>{t.questionsLabel}</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {modalQuestions.map((q, idx) => (
                        <li key={idx} className="text-xs text-[#94a3b8] flex items-start gap-2">
                          <span className="text-[#d4af37] font-bold">Q:</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complete Deliverables */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#9ca3af] mb-2.5">
                      {t.deliverablesLabel}
                    </h4>
                    <div className="space-y-2">
                      {modalDeliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#e2e8f0]">
                          <Check className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Preparation Needed */}
                  <div className="mb-7 p-3.5 rounded-xl bg-[#111a2c] border border-[#1e2a42] text-xs text-[#94a3b8]">
                    <strong className="text-[#e2e8f0] block mb-1">{t.preparationLabel}</strong>
                    <div className="flex flex-wrap gap-2 text-[11px] text-[#cbd5e1]">
                      {modalPrep.map((p, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-[#18243c] border border-[#27385a]">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#1e2a44]">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-medium text-[#9ca3af] hover:text-white hover:bg-[#162035] transition-colors cursor-pointer"
                    >
                      {isTamil ? 'மூடுக' : 'Close'}
                    </button>
                    <button
                      onClick={() => {
                        const serviceId = selectedService.id;
                        setSelectedService(null);
                        onOpenBooking(serviceId);
                      }}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#080c16] bg-gradient-to-r from-[#e5c158] to-[#d4af37] hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{t.btnBookThisService}</span>
                    </button>
                  </div>
                </>
              );
            })()}

          </div>
        </div>
      )}

    </section>
  );
};
