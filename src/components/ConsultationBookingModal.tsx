import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Video, 
  PhoneCall, 
  FileText, 
  Sparkles,
  ShieldCheck,
  Download,
  MessageSquare
} from 'lucide-react';
import { ServiceId, BookingFormData } from '../types';
import { SERVICES_LIST } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { CONTACT_INFO } from '../data/contactInfo';

interface BookingModalProps {
  isOpen: boolean;
  initialServiceId?: ServiceId;
  onClose: () => void;
}

export const ConsultationBookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialServiceId,
  onClose
}) => {
  const { language, isTamil } = useLanguage();
  const t = TRANSLATIONS[language];

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: initialServiceId || 'birth-chart',
    consultationType: 'video',
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: 'male',
    dateOfBirth: '1995-05-15',
    timeOfBirth: '10:15',
    isTimeAccurate: true,
    placeOfBirth: '',
    preferredLanguage: isTamil ? 'Tamil' : 'English',
    preferredDate: '2026-09-23',
    preferredTimeSlot: '11:00 AM – 12:00 PM',
    primaryQuestions: '',
    partnerDetails: {
      partnerName: '',
      partnerDob: '',
      partnerTob: '',
      partnerPob: ''
    }
  });

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceId: initialServiceId }));
    }
    if (isOpen) {
      setStep(1);
    }
  }, [initialServiceId, isOpen]);

  if (!isOpen) return null;

  const currentService = SERVICES_LIST.find(s => s.id === formData.serviceId) || SERVICES_LIST[0];
  const serviceTitle = isTamil && currentService.titleTa ? currentService.titleTa : currentService.title;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setIsSubmitting(true);
      setTimeout(() => {
        const refId = `VA-${Math.floor(100000 + Math.random() * 900000)}`;
        setBookingReference(refId);
        setIsSubmitting(false);
        setStep(3);
      }, 600);
    }
  };

  const handleDownloadCalendar = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Visagan Astro//Astrology Consultation//EN
BEGIN:VEVENT
SUMMARY:Visagan Astro - ${currentService.title}
DESCRIPTION:1-on-1 Vedic Astrology Consultation with Visagan Astro. Booking Ref: ${bookingReference}. Phone/WhatsApp: ${CONTACT_INFO.whatsappDisplay}
DTSTART;VALUE=DATE:${formData.preferredDate.replace(/-/g, '')}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `VisaganAstro-${bookingReference}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getWhatsappConfirmationLink = () => {
    const text = isTamil 
      ? `வணக்கம் விசாகன் ஆஸ்ட்ரோ, எனது ஆலோசனை முன்பதிவு எண்: ${bookingReference}. பெயர்: ${formData.fullName}, சேவை: ${serviceTitle}, தேதி: ${formData.preferredDate}. விவரங்களை உறுதிப்படுத்த விரும்புகிறேன்.`
      : `Hello Visagan Astro, my consultation booking reference is ${bookingReference}. Name: ${formData.fullName}, Service: ${currentService.title}, Date: ${formData.preferredDate}. Kindly confirm the schedule.`;
    return `https://wa.me/${CONTACT_INFO.whatsappNumberClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#04060d]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0c1322] border border-[#243350] rounded-2xl shadow-2xl my-6 text-[#e8ecf4] overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1c273e] bg-[#090e1b]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="font-cinzel text-base sm:text-lg font-bold text-[#f4f7fb]">
              {t.modalTitle} • {isTamil ? 'விசாகன் ஆஸ்ட்ரோ' : 'Visagan Astro'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#9ca3af] hover:text-white hover:bg-[#162035] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators */}
        <div className="px-6 py-3 bg-[#0a101f] border-b border-[#172238] flex items-center justify-between text-xs">
          <div className={`flex items-center gap-2 font-medium ${step >= 1 ? 'text-[#d4af37]' : 'text-[#5c687e]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
              step >= 1 ? 'bg-[#d4af37] text-[#080c16]' : 'bg-[#182338] text-[#5c687e]'
            }`}>
              1
            </span>
            <span>{isTamil ? 'சேவை & முறை' : 'Service & Format'}</span>
          </div>

          <div className="h-0.5 w-8 bg-[#1e2a42]" />

          <div className={`flex items-center gap-2 font-medium ${step >= 2 ? 'text-[#d4af37]' : 'text-[#5c687e]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
              step >= 2 ? 'bg-[#d4af37] text-[#080c16]' : 'bg-[#182338] text-[#5c687e]'
            }`}>
              2
            </span>
            <span>{isTamil ? 'பிறந்த விவரங்கள்' : 'Birth Coordinates'}</span>
          </div>

          <div className="h-0.5 w-8 bg-[#1e2a42]" />

          <div className={`flex items-center gap-2 font-medium ${step === 3 ? 'text-[#10b981]' : 'text-[#5c687e]'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
              step === 3 ? 'bg-[#10b981] text-[#080c16]' : 'bg-[#182338] text-[#5c687e]'
            }`}>
              3
            </span>
            <span>{isTamil ? 'உறுதிப்படுத்தல்' : 'Confirmation'}</span>
          </div>
        </div>

        {/* STEP 1: SERVICE & FORMAT SELECTION */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="p-6 space-y-6">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-2.5">
                {isTamil ? 'உங்கள் ஜோதிட சேவையை தேர்வு செய்யவும்' : 'Select Your Astrological Reading'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-56 overflow-y-auto pr-1">
                {SERVICES_LIST.map((srv) => {
                  const sTitle = isTamil && srv.titleTa ? srv.titleTa : srv.title;
                  const sDesc = isTamil && srv.shortDescriptionTa ? srv.shortDescriptionTa : srv.shortDescription;
                  const sDuration = isTamil && srv.durationTa ? srv.durationTa : srv.duration;

                  return (
                    <label
                      key={srv.id}
                      onClick={() => setFormData({ ...formData, serviceId: srv.id })}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                        formData.serviceId === srv.id
                          ? 'bg-[#141f36] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                          : 'bg-[#090e1b] border-[#1b263c] hover:border-[#2b3b5c]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-bold text-[#f4f7fb] mb-1">
                          <span className="line-clamp-1">{sTitle.split('(')[0]}</span>
                          <span className="text-[10px] text-[#d4af37] font-normal whitespace-nowrap ml-1">{sDuration}</span>
                        </div>
                        <p className="text-[11px] text-[#9ca3af] line-clamp-2">
                          {sDesc}
                        </p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Consultation Format */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-2.5">
                {isTamil ? 'ஆலோசனை பெறும் முறை' : 'Preferred Consultation Delivery Mode'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  {
                    id: 'video',
                    label: t.formatVideo,
                    desc: t.formatVideoDesc,
                    icon: Video
                  },
                  {
                    id: 'phone',
                    label: t.formatPhone,
                    desc: t.formatPhoneDesc,
                    icon: PhoneCall
                  },
                  {
                    id: 'written_report',
                    label: t.formatReport,
                    desc: t.formatReportDesc,
                    icon: FileText
                  }
                ].map((mode) => {
                  const Icon = mode.icon;
                  const isSelected = formData.consultationType === mode.id;
                  return (
                    <div
                      key={mode.id}
                      onClick={() => setFormData({ ...formData, consultationType: mode.id as any })}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#141f36] border-[#d4af37]'
                          : 'bg-[#090e1b] border-[#1b263c] hover:border-[#2b3b5c]'
                      }`}
                    >
                      <Icon className={`w-4 h-4 mb-2 ${isSelected ? 'text-[#d4af37]' : 'text-[#9ca3af]'}`} />
                      <div className="text-xs font-bold text-[#f4f7fb] mb-0.5">{mode.label}</div>
                      <div className="text-[11px] text-[#9ca3af] leading-tight">{mode.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Language & Date Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#c5cdd9] mb-1.5">
                  {t.fieldLanguage}
                </label>
                <select
                  value={formData.preferredLanguage}
                  onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090e1b] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="Tamil">தமிழ் (Tamil)</option>
                  <option value="English">English</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#c5cdd9] mb-1.5">
                  {t.fieldPreferredDate}
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  min="2026-09-21"
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090e1b] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-[#1c273e]">
              <div className="text-xs text-[#9ca3af] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                <span>{isTamil ? '100% ரகசியத்தன்மை உறுதி' : '100% Confidential Guarantee'}</span>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#080c16] bg-gradient-to-r from-[#e5c158] to-[#d4af37] hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t.btnProceedStep2}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: BIRTH DETAILS INTAKE */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="p-6 space-y-4 max-h-[78vh] overflow-y-auto">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] flex items-center justify-between">
              <span>{isTamil ? `பிறந்த விவரங்கள்: ${serviceTitle.split('(')[0]}` : `Personal & Birth Data for ${currentService.title.split('(')[0]}`}</span>
              <span className="text-[#9ca3af] font-normal lowercase">{isTamil ? 'பாதுகாக்கப்பட்ட தரவுகள்' : 'All data encrypted'}</span>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#c5cdd9] mb-1">
                  {t.fieldFullName}
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={isTamil ? 'உங்கள் முழுப் பெயர்' : 'Your complete name'}
                  className="w-full px-3 py-2 rounded-lg bg-[#090e1b] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#c5cdd9] mb-1">
                  {t.fieldEmail}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="yourname@gmail.com"
                  className="w-full px-3 py-2 rounded-lg bg-[#090e1b] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#c5cdd9] mb-1">
                  {t.fieldPhone}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+91 97897 47397"
                  className="w-full px-3 py-2 rounded-lg bg-[#090e1b] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#c5cdd9] mb-1">
                  {t.fieldGender}
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090e1b] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                >
                  <option value="male">{t.genderMale}</option>
                  <option value="female">{t.genderFemale}</option>
                  <option value="other">{t.genderOther}</option>
                </select>
              </div>
            </div>

            {/* Birth Coordinates */}
            <div className="p-3.5 rounded-xl bg-[#090e1b] border border-[#1d2940] space-y-3">
              <div className="text-xs font-bold text-[#f4f7fb] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{isTamil ? 'துல்லியமான பிறப்புத் தகவல்கள்' : 'Exact Natal Coordinates'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#9ca3af] mb-1">
                    {t.fieldDob}
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#060a14] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#9ca3af] mb-1">
                    {t.fieldTob}
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.timeOfBirth}
                    onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#060a14] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#9ca3af] mb-1">
                  {t.fieldPob}
                </label>
                <input
                  type="text"
                  required
                  value={formData.placeOfBirth}
                  onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                  placeholder={isTamil ? 'எ.கா: சென்னை, தமிழ்நாடு, இந்தியா' : 'e.g. Chennai, Tamil Nadu, India'}
                  className="w-full px-3 py-1.5 rounded-lg bg-[#060a14] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="timeAccurate"
                  checked={formData.isTimeAccurate}
                  onChange={(e) => setFormData({ ...formData, isTimeAccurate: e.target.checked })}
                  className="rounded border-[#23314d] text-[#d4af37] focus:ring-0"
                />
                <label htmlFor="timeAccurate" className="text-[11px] text-[#9ca3af] cursor-pointer">
                  {t.timeAccurateCheck}
                </label>
              </div>
            </div>

            {/* If Marriage Compatibility, request partner details */}
            {formData.serviceId === 'marriage-compatibility' && (
              <div className="p-3.5 rounded-xl bg-[#090e1b] border border-[#e07a5f]/30 space-y-3">
                <div className="text-xs font-bold text-[#e07a5f] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>{isTamil ? 'துணைவர் / வரனின் பிறந்த விவரங்கள்' : 'Partner / Prospective Spouse Birth Details'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="text"
                    placeholder={isTamil ? 'துணைவரின் பெயர்' : 'Partner Full Name'}
                    value={formData.partnerDetails?.partnerName || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      partnerDetails: { ...formData.partnerDetails!, partnerName: e.target.value }
                    })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#060a14] border border-[#23314d] text-xs text-[#f4f7fb]"
                  />
                  <input
                    type="date"
                    value={formData.partnerDetails?.partnerDob || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      partnerDetails: { ...formData.partnerDetails!, partnerDob: e.target.value }
                    })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#060a14] border border-[#23314d] text-xs text-[#f4f7fb]"
                  />
                  <input
                    type="time"
                    placeholder={isTamil ? 'துணைவர் பிறந்த நேரம்' : 'Partner Time of Birth'}
                    value={formData.partnerDetails?.partnerTob || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      partnerDetails: { ...formData.partnerDetails!, partnerTob: e.target.value }
                    })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#060a14] border border-[#23314d] text-xs text-[#f4f7fb]"
                  />
                  <input
                    type="text"
                    placeholder={isTamil ? 'துணைவர் பிறந்த இடம் (ஊர்)' : 'Partner Place of Birth (City)'}
                    value={formData.partnerDetails?.partnerPob || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      partnerDetails: { ...formData.partnerDetails!, partnerPob: e.target.value }
                    })}
                    className="w-full px-3 py-1.5 rounded-lg bg-[#060a14] border border-[#23314d] text-xs text-[#f4f7fb]"
                  />
                </div>
              </div>
            )}

            {/* Primary Dilemma / Questions */}
            <div>
              <label className="block text-xs font-medium text-[#c5cdd9] mb-1 flex items-center justify-between">
                <span>{t.fieldQuestions} *</span>
                <span className="text-[10px] text-[#9ca3af]">
                  {isTamil ? 'முன் தயாரிப்பிற்கு உதவும்' : 'Helps us prepare prior to the call'}
                </span>
              </label>
              <textarea
                rows={3}
                required
                value={formData.primaryQuestions}
                onChange={(e) => setFormData({ ...formData, primaryQuestions: e.target.value })}
                placeholder={t.fieldQuestionsPlaceholder}
                className="w-full px-3 py-2 rounded-lg bg-[#090e1b] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-[#1c273e]">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-[#9ca3af] hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{t.btnBack}</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#080c16] bg-gradient-to-r from-[#e5c158] to-[#d4af37] hover:shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{t.btnGenerating}</span>
                ) : (
                  <>
                    <span>{t.btnConfirmConsultation}</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: CONFIRMATION & APPOINTMENT TICKET */}
        {step === 3 && (
          <div className="p-6 sm:p-8 space-y-6 text-center">
            
            <div className="w-16 h-16 rounded-full bg-[#10b981]/20 border border-[#10b981]/50 text-[#10b981] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]">
                {t.ticketConfirmed}
              </span>
              <h3 className="font-cinzel text-2xl font-bold text-[#f4f7fb] mt-1">
                {t.confirmedTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#9ca3af] mt-1 max-w-md mx-auto">
                {isTamil ? (
                  <>நன்றி, <span className="text-[#f4f7fb] font-medium">{formData.fullName || 'அன்பரே'}</span>. {t.confirmedSubtitle}</>
                ) : (
                  <>Thank you, <span className="text-[#f4f7fb] font-medium">{formData.fullName || 'Seeker'}</span>. Our senior Vedic astrologer is preparing your natal calculations.</>
                )}
              </p>
            </div>

            {/* Ticket Card */}
            <div className="bg-[#090e1b] rounded-2xl p-5 border border-[#22314d] text-left space-y-3.5 max-w-lg mx-auto">
              <div className="flex items-center justify-between border-b border-[#1c273e] pb-3">
                <div>
                  <div className="text-[11px] text-[#9ca3af]">{t.ticketBookingRef}</div>
                  <div className="font-mono text-sm font-bold text-[#d4af37]">{bookingReference}</div>
                </div>
                <span className="px-2.5 py-1 rounded text-[11px] font-semibold bg-[#10b981]/20 text-[#10b981]">
                  {t.ticketConfirmed}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="text-[11px] text-[#9ca3af]">{t.ticketService}</div>
                  <div className="font-medium text-[#f4f7fb] mt-0.5 line-clamp-1">{serviceTitle.split('(')[0]}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#9ca3af]">{t.ticketFormat}</div>
                  <div className="font-medium text-[#f4f7fb] mt-0.5 capitalize">
                    {formData.consultationType === 'video' ? t.formatVideo : formData.consultationType === 'phone' ? t.formatPhone : t.formatReport}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-[#9ca3af]">{t.ticketDate}</div>
                  <div className="font-medium text-[#f4f7fb] mt-0.5">{formData.preferredDate}</div>
                </div>
                <div>
                  <div className="text-[11px] text-[#9ca3af]">{t.ticketLanguage}</div>
                  <div className="font-medium text-[#f4f7fb] mt-0.5">{formData.preferredLanguage === 'Tamil' ? 'தமிழ் (Tamil)' : 'English'}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#1c273e] text-[11px] text-[#8e9cb2]">
                {t.ticketNotice}
              </div>
            </div>

            {/* Preparation Tip Box */}
            <div className="p-4 rounded-xl bg-[#111a2d] border border-[#1e2a44] text-xs text-[#9ca3af] max-w-lg mx-auto text-left space-y-1.5">
              <strong className="text-[#f4f7fb] block">{t.prepBoxTitle}</strong>
              <div>• {t.prep1}</div>
              <div>• {t.prep2}</div>
              <div>• {t.prep3}</div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={getWhatsappConfirmationLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-[#f4f7fb] bg-[#162035] hover:bg-[#1e2c4a] border border-[#2b3a58] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#10b981]" />
                <span>{t.btnSendWhatsapp}</span>
              </a>

              <button
                onClick={handleDownloadCalendar}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-[#f4f7fb] bg-[#162035] hover:bg-[#1e2c4a] border border-[#2b3a58] transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#d4af37]" />
                <span>{t.btnSaveCalendar}</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-semibold text-[#080c16] bg-[#d4af37] hover:bg-[#e5c158] transition-colors cursor-pointer"
              >
                {t.btnDone}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
