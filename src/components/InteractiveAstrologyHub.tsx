import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  HeartHandshake, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Star,
  ShieldAlert,
  ChevronRight,
  Info
} from 'lucide-react';
import { 
  calculateVedicInsights, 
  calculateMarriageCompatibility, 
  NAKSHATRAS, 
  NAKSHATRAS_TAMIL,
  RASHIS 
} from '../data/astrologyData';
import { KundliResult, CompatibilityResult } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface InteractiveHubProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const InteractiveAstrologyHub: React.FC<InteractiveHubProps> = ({ onOpenBooking }) => {
  const { language, isTamil } = useLanguage();
  const t = TRANSLATIONS[language];

  const [activeTab, setActiveTab] = useState<'chart' | 'compatibility' | 'wisdom'>('chart');

  // Form State for Birth Chart Calculator
  const [chartName, setChartName] = useState('');
  const [chartDob, setChartDob] = useState('1994-06-18');
  const [chartTob, setChartTob] = useState('09:30');
  const [chartPob, setChartPob] = useState('Chennai, India');
  const [chartFocus, setChartFocus] = useState('Career & Life Direction');
  const [calculatedKundli, setCalculatedKundli] = useState<KundliResult | null>(() => 
    calculateVedicInsights('Seeker', '1994-06-18', '09:30', 'Chennai, India', 'Career & Life Direction')
  );

  // Form State for Marriage Compatibility Matcher
  const [boyStar, setBoyStar] = useState('Rohini');
  const [boySign, setBoySign] = useState('Vrishabha (Taurus)');
  const [girlStar, setGirlStar] = useState('Uttara Phalguni');
  const [girlSign, setGirlSign] = useState('Kanya (Virgo)');
  const [compatibilityResult, setCompatibilityResult] = useState<CompatibilityResult | null>(() =>
    calculateMarriageCompatibility('Rohini', 'Vrishabha (Taurus)', 'Uttara Phalguni', 'Kanya (Virgo)')
  );

  const handleGenerateKundli = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateVedicInsights(
      chartName.trim() || (isTamil ? 'அன்பர்' : 'Valued Seeker'),
      chartDob,
      chartTob,
      chartPob.trim() || (isTamil ? 'சென்னை, இந்தியா' : 'Chennai, India'),
      chartFocus
    );
    setCalculatedKundli(result);
  };

  const handleCheckCompatibility = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateMarriageCompatibility(boyStar, boySign, girlStar, girlSign);
    setCompatibilityResult(result);
  };

  return (
    <section id="interactive-tools" className="py-16 md:py-24 bg-[#0a0f1d] border-y border-[#182338]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162035] border border-[#d4af37]/30 text-xs font-semibold text-[#e5c158] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{t.hubBadge}</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-[#f4f7fb] mb-4">
            {t.hubTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af]">
            {t.hubSubtitle}
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-xl bg-[#0e1628] border border-[#1e2b46] max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('chart')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'chart'
                  ? 'bg-gradient-to-r from-[#e5c158] to-[#d4af37] text-[#080c16] font-semibold shadow-md'
                  : 'text-[#9ca3af] hover:text-[#e8ecf4] hover:bg-[#141e33]'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>{t.tabKundli}</span>
            </button>

            <button
              onClick={() => setActiveTab('compatibility')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'compatibility'
                  ? 'bg-gradient-to-r from-[#e5c158] to-[#d4af37] text-[#080c16] font-semibold shadow-md'
                  : 'text-[#9ca3af] hover:text-[#e8ecf4] hover:bg-[#141e33]'
              }`}
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{t.tabPorutham}</span>
            </button>

            <button
              onClick={() => setActiveTab('wisdom')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'wisdom'
                  ? 'bg-gradient-to-r from-[#e5c158] to-[#d4af37] text-[#080c16] font-semibold shadow-md'
                  : 'text-[#9ca3af] hover:text-[#e8ecf4] hover:bg-[#141e33]'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>{t.tabWisdom}</span>
            </button>
          </div>
        </div>

        {/* TAB 1: INSTANT BIRTH CHART & LAGNA CALCULATOR */}
        {activeTab === 'chart' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Form Column (5 cols) */}
            <div className="lg:col-span-5 bg-[#0e1628] rounded-2xl p-6 sm:p-7 border border-[#1e2a44] shadow-xl">
              <div className="flex items-center justify-between border-b border-[#1c273e] pb-4 mb-6">
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-[#f4f7fb] flex items-center gap-2">
                    <Compass className="w-5 h-5 text-[#d4af37]" />
                    <span>{t.kundliHeading}</span>
                  </h3>
                  <p className="text-xs text-[#9ca3af] mt-1">
                    {t.kundliSubheading}
                  </p>
                </div>
              </div>

              <form onSubmit={handleGenerateKundli} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#c5cdd9] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{t.labelFullName}</span>
                  </label>
                  <input
                    type="text"
                    value={chartName}
                    onChange={(e) => setChartName(e.target.value)}
                    placeholder={isTamil ? 'எ.கா: விக்னேஷ் அல்லது பிரியா' : 'e.g. Vignesh or Priya'}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080c16] border border-[#23314d] text-sm text-[#f4f7fb] placeholder-[#5c6982] focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#c5cdd9] mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{t.labelDob}</span>
                    </label>
                    <input
                      type="date"
                      value={chartDob}
                      onChange={(e) => setChartDob(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-[#080c16] border border-[#23314d] text-sm text-[#f4f7fb] focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#c5cdd9] mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{t.labelTob}</span>
                    </label>
                    <input
                      type="time"
                      value={chartTob}
                      onChange={(e) => setChartTob(e.target.value)}
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-[#080c16] border border-[#23314d] text-sm text-[#f4f7fb] focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#c5cdd9] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{t.labelPob}</span>
                  </label>
                  <input
                    type="text"
                    value={chartPob}
                    onChange={(e) => setChartPob(e.target.value)}
                    placeholder={isTamil ? 'எ.கா: சென்னை, கோயம்புத்தூர், மதுரை' : 'e.g. Chennai, Bengaluru, London'}
                    required
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080c16] border border-[#23314d] text-sm text-[#f4f7fb] placeholder-[#5c6982] focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                  {/* Quick City Presets */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {['Chennai', 'Madurai', 'Coimbatore', 'Bengaluru', 'Tiruchirappalli', 'Singapore'].map((city) => (
                      <button
                        key={city}
                        type="button"
                        onClick={() => setChartPob(`${city}, India`)}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#131d33] text-[#9ca3af] hover:text-[#d4af37] hover:bg-[#1a2642] transition-colors cursor-pointer"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#c5cdd9] mb-1.5">
                    {isTamil ? 'முதன்மை ஜோதிட கேள்வி / நோக்கம்' : 'Primary Clarity Focus'}
                  </label>
                  <select
                    value={chartFocus}
                    onChange={(e) => setChartFocus(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080c16] border border-[#23314d] text-sm text-[#f4f7fb] focus:outline-none focus:border-[#d4af37] transition-colors cursor-pointer"
                  >
                    <option value="Career & Life Direction">
                      {isTamil ? 'தொழில், உத்தியோகம் & வாழ்வின் திசை' : 'Career, Vocation & Life Direction'}
                    </option>
                    <option value="Marriage & Relationships">
                      {isTamil ? 'திருமணம், வாழ்க்கை துணை & உறவுகள்' : 'Marriage, Compatibility & Relationships'}
                    </option>
                    <option value="Wealth & Financial Growth">
                      {isTamil ? 'பொருளாதாரம், தன யோகம் & வளர்ச்சி' : 'Wealth, Assets & Financial Growth'}
                    </option>
                    <option value="Spiritual Peace & Remedies">
                      {isTamil ? 'ஆன்மீக அமைதி, மன நிம்மதி & பரிகாரங்கள்' : 'Spiritual Peace, Mental Calm & Remedies'}
                    </option>
                    <option value="General Life Path Blueprint">
                      {isTamil ? 'முழு ஜாதகப் பலன்கள் (ஜனன குண்டலி)' : 'General Janma Kundli Blueprint'}
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-xl font-semibold text-[#080c16] bg-gradient-to-r from-[#e5c158] via-[#d4af37] to-[#bf953f] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t.btnCalculate}</span>
                </button>
              </form>

              <div className="mt-5 p-3 rounded-lg bg-[#0a0f1d] border border-[#1b263d] flex items-start gap-2.5 text-xs text-[#8e9bb0]">
                <Info className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  {isTamil
                    ? 'துல்லியமான பிறந்த நேரம் லக்னத்தை நிர்ணயிக்கிறது (ஒவ்வொரு 2 மணி நேரத்திற்கும் லக்னம் மாறும்). நேரம் உறுதியாகத் தெரியவில்லை எனில், பிறந்த நேர திருத்த ஆலோசனை பெறலாம்.'
                    : 'Exact birth time determines the Lagna (changes every 2 hours). If uncertain, Visagan Astro provides professional Birth Time Rectification.'}
                </span>
              </div>
            </div>

            {/* Results Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {calculatedKundli ? (
                <div className="bg-[#0e1628] rounded-2xl p-6 sm:p-7 border border-[#22314e] shadow-xl relative overflow-hidden">
                  
                  {/* Subtle watermarked astrolabe */}
                  <div className="absolute top-0 right-0 w-64 h-64 -mr-16 -mt-16 opacity-5 pointer-events-none">
                    <svg viewBox="0 0 100 100" fill="currentColor" className="text-[#d4af37]">
                      <circle cx="50" cy="50" r="45" stroke="currentColor" fill="none" strokeWidth="2" />
                      <polygon points="50,5 90,85 10,85" stroke="currentColor" fill="none" strokeWidth="1" />
                      <polygon points="50,95 90,15 10,15" stroke="currentColor" fill="none" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Header of Results */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1e2a44] pb-5 mb-6">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-1">
                        {isTamil ? 'கணிக்கப்பட்ட வேத ஜாதக சுருக்கம்' : 'Calculated Vedic Natal Snapshot'}
                      </div>
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f4f7fb]">
                        {t.kundliResultTitle} {calculatedKundli.name}
                      </h3>
                      <div className="text-xs text-[#9ca3af] mt-0.5">
                        {isTamil ? 'பிறந்த தேதி & நேரம்:' : 'Born'} {calculatedKundli.dob} {calculatedKundli.tob} • {calculatedKundli.pob}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenBooking('birth-chart')}
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-[#080c16] bg-[#d4af37] hover:bg-[#e5c158] transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{isTamil ? 'முழு 60-நிமிட ஆலோசனை' : 'Book Full 60-Min Reading'}</span>
                    </button>
                  </div>

                  {/* 4 Core Vedic Coordinates */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                    <div className="p-3.5 rounded-xl bg-[#090e1b] border border-[#1c2942]">
                      <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider">{t.colLagna}</div>
                      <div className="text-sm sm:text-base font-semibold text-[#f4f7fb] mt-1">
                        {isTamil && calculatedKundli.lagnaTa ? calculatedKundli.lagnaTa : calculatedKundli.lagna}
                      </div>
                      <div className="text-[11px] text-[#d4af37] mt-0.5">
                        {isTamil ? 'அதிபதி:' : 'Lord:'} {isTamil && calculatedKundli.lagnaLordTa ? calculatedKundli.lagnaLordTa : calculatedKundli.lagnaLord}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#090e1b] border border-[#1c2942]">
                      <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider">{t.colMoonSign}</div>
                      <div className="text-sm sm:text-base font-semibold text-[#f4f7fb] mt-1">
                        {isTamil && calculatedKundli.rashiTa ? calculatedKundli.rashiTa : calculatedKundli.rashi}
                      </div>
                      <div className="text-[11px] text-[#d4af37] mt-0.5">
                        {isTamil ? 'அதிபதி:' : 'Lord:'} {isTamil && calculatedKundli.rashiLordTa ? calculatedKundli.rashiLordTa : calculatedKundli.rashiLord}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#090e1b] border border-[#1c2942]">
                      <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider">{t.colNakshatra}</div>
                      <div className="text-sm sm:text-base font-semibold text-[#f4f7fb] mt-1">
                        {isTamil && calculatedKundli.nakshatraTa ? calculatedKundli.nakshatraTa : calculatedKundli.nakshatra}
                      </div>
                      <div className="text-[11px] text-[#d4af37] mt-0.5">
                        {isTamil ? 'பாதம்' : 'Pada'} {calculatedKundli.nakshatraPada} • {isTamil && calculatedKundli.nakshatraLordTa ? calculatedKundli.nakshatraLordTa : calculatedKundli.nakshatraLord}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#090e1b] border border-[#1c2942]">
                      <div className="text-[11px] text-[#9ca3af] uppercase tracking-wider">{t.colDasha}</div>
                      <div className="text-sm sm:text-base font-semibold text-[#f4f7fb] mt-1">
                        {isTamil && calculatedKundli.currentDashaTa ? calculatedKundli.currentDashaTa : calculatedKundli.currentDasha}
                      </div>
                      <div className="text-[11px] text-[#e5c158] mt-0.5">
                        {calculatedKundli.dashaPeriod}
                      </div>
                    </div>
                  </div>

                  {/* Cosmic Guidance Summary */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#141e33] to-[#0c1424] border border-[#2a3854] mb-6">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-1.5">
                      <Sparkles className="w-4 h-4 text-[#d4af37]" />
                      <span>{isTamil ? 'ஜாதக வழிகாட்டல் சுருக்கம்' : 'Cosmic Clarity Takeaway'}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#d4dde8] leading-relaxed">
                      {isTamil && calculatedKundli.guidanceSummaryTa ? calculatedKundli.guidanceSummaryTa : calculatedKundli.guidanceSummary}
                    </p>
                  </div>

                  {/* Key Houses Breakdown */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">
                      {t.sectionHouses}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {calculatedKundli.housesHighlight.map((h) => (
                        <div key={h.houseNumber} className="p-3 rounded-lg bg-[#0a0f1d] border border-[#1c273e]">
                          <div className="flex items-center justify-between text-xs font-semibold text-[#f4f7fb] mb-1">
                            <span>{isTamil ? `${h.houseNumber}-ம் பாவம்: ${h.nameTa || h.name}` : `House ${h.houseNumber}: ${h.name}`}</span>
                            <span className="text-[11px] text-[#d4af37]">{isTamil && h.signTa ? h.signTa : h.sign}</span>
                          </div>
                          <p className="text-[11px] text-[#9ca3af] leading-normal">
                            {isTamil && h.influenceTa ? h.influenceTa : h.influence}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Strengths */}
                  <div className="border-t border-[#1c273e] pt-4 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-2.5">
                      {t.sectionStrengths}
                    </div>
                    <ul className="space-y-1.5">
                      {(isTamil && calculatedKundli.coreStrengthsTa ? calculatedKundli.coreStrengthsTa : calculatedKundli.coreStrengths).map((strength: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#c5cdd9]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0 mt-0.5" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Call to Action Bar */}
                  <div className="p-4 rounded-xl bg-[#090d18] border border-[#d4af37]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="font-cinzel text-sm font-bold text-[#f4f7fb]">
                        {t.kundliCtaPrompt}
                      </div>
                      <div className="text-xs text-[#9ca3af]">
                        {isTamil ? 'உத்தியோகம், திருமணம், தன யோகம் மற்றும் உரிய எளிய பரிகாரங்களை நேரடியாக அறியலாம்.' : 'Gain exact timing for career promotions, marriage, and customized remedies.'}
                      </div>
                    </div>
                    <button
                      onClick={() => onOpenBooking('birth-chart')}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold text-[#080c16] bg-gradient-to-r from-[#e5c158] to-[#d4af37] hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <span>{t.kundliCtaBtn}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              ) : (
                <div className="h-full flex items-center justify-center p-12 text-center bg-[#0e1628] rounded-2xl border border-[#1e2a44]">
                  <div>
                    <Compass className="w-12 h-12 text-[#d4af37]/40 mx-auto mb-3" />
                    <p className="text-sm text-[#9ca3af]">
                      {isTamil ? 'இடதுபுறத்தில் உள்ள படிவத்தில் உங்கள் பிறந்த விவரங்களை பூர்த்தி செய்து உடனடி ஜாதக பலனை காணவும்.' : 'Fill in your birth details on the left to view your instant Vedic snapshot.'}
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 2: MARRIAGE COMPATIBILITY (PORUTHAM) MATCHER */}
        {activeTab === 'compatibility' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Selection (5 cols) */}
            <div className="lg:col-span-5 bg-[#0e1628] rounded-2xl p-6 sm:p-7 border border-[#1e2a44] shadow-xl">
              <div className="border-b border-[#1c273e] pb-4 mb-6">
                <h3 className="font-cinzel text-lg font-bold text-[#f4f7fb] flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-[#e07a5f]" />
                  <span>{t.matchHeading}</span>
                </h3>
                <p className="text-xs text-[#9ca3af] mt-1">
                  {t.matchSubheading}
                </p>
              </div>

              <form onSubmit={handleCheckCompatibility} className="space-y-5">
                {/* Groom Details */}
                <div className="p-4 rounded-xl bg-[#090e1b] border border-[#1c2942] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#38bdf8] flex items-center gap-1.5">
                    <span>{t.boyStar}</span>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#c5cdd9] mb-1">
                      {isTamil ? 'நட்சத்திரம்' : 'Nakshatra (Birth Star)'}
                    </label>
                    <select
                      value={boyStar}
                      onChange={(e) => setBoyStar(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#080c16] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                    >
                      {NAKSHATRAS.map((s) => (
                        <option key={s} value={s}>
                          {isTamil && NAKSHATRAS_TAMIL[s] ? NAKSHATRAS_TAMIL[s] : s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#c5cdd9] mb-1">
                      {t.boySign}
                    </label>
                    <select
                      value={boySign}
                      onChange={(e) => setBoySign(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#080c16] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                    >
                      {RASHIS.map((r) => (
                        <option key={r.id} value={`${r.sanskritName} (${r.westernName})`}>
                          {isTamil ? r.tamilName : `${r.sanskritName} (${r.westernName})`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Bride Details */}
                <div className="p-4 rounded-xl bg-[#090e1b] border border-[#1c2942] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#f43f5e] flex items-center gap-1.5">
                    <span>{t.girlStar}</span>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#c5cdd9] mb-1">
                      {isTamil ? 'நட்சத்திரம்' : 'Nakshatra (Birth Star)'}
                    </label>
                    <select
                      value={girlStar}
                      onChange={(e) => setGirlStar(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#080c16] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                    >
                      {NAKSHATRAS.map((s) => (
                        <option key={s} value={s}>
                          {isTamil && NAKSHATRAS_TAMIL[s] ? NAKSHATRAS_TAMIL[s] : s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#c5cdd9] mb-1">
                      {t.girlSign}
                    </label>
                    <select
                      value={girlSign}
                      onChange={(e) => setGirlSign(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#080c16] border border-[#23314d] text-xs text-[#f4f7fb] focus:outline-none focus:border-[#d4af37]"
                    >
                      {RASHIS.map((r) => (
                        <option key={r.id} value={`${r.sanskritName} (${r.westernName})`}>
                          {isTamil ? r.tamilName : `${r.sanskritName} (${r.westernName})`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-[#080c16] bg-gradient-to-r from-[#e5c158] via-[#d4af37] to-[#bf953f] hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>{t.btnCheckMatch}</span>
                </button>
              </form>

              <div className="mt-4 p-3 rounded-lg bg-[#0a0f1d] border border-[#1b263d] text-xs text-[#8e9bb0]">
                <strong>{isTamil ? 'குறிப்பு:' : 'Note:'}</strong> {t.matchNotice}
              </div>
            </div>

            {/* Compatibility Result (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {compatibilityResult && (
                <div className="bg-[#0e1628] rounded-2xl p-6 sm:p-7 border border-[#22314e] shadow-xl">
                  
                  {/* Header & Match Score Gauge */}
                  <div className="border-b border-[#1e2a44] pb-5 mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-1">
                          {isTamil ? 'வேத திருமணப் பொருத்தம் மதிப்பீடு' : 'Vedic Compatibility Assessment'}
                        </div>
                        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f4f7fb]">
                          {isTamil && compatibilityResult.verdictTa ? compatibilityResult.verdictTa : compatibilityResult.verdict}
                        </h3>
                        <div className="text-xs text-[#9ca3af] mt-1">
                          {isTamil && NAKSHATRAS_TAMIL[compatibilityResult.boyStar] ? NAKSHATRAS_TAMIL[compatibilityResult.boyStar] : compatibilityResult.boyStar} &{' '}
                          {isTamil && NAKSHATRAS_TAMIL[compatibilityResult.girlStar] ? NAKSHATRAS_TAMIL[compatibilityResult.girlStar] : compatibilityResult.girlStar}
                        </div>
                      </div>

                      {/* Score Badge */}
                      <div className="flex items-center gap-3 bg-[#090e1b] px-4 py-3 rounded-xl border border-[#243350]">
                        <div className="text-right">
                          <div className="text-xs text-[#9ca3af]">{t.matchScoreTitle}</div>
                          <div className="text-xl font-bold font-cinzel text-[#d4af37]">
                            {compatibilityResult.totalScore} / 10
                          </div>
                        </div>
                        <div className="w-12 h-12 rounded-full border-4 border-[#d4af37] flex items-center justify-center font-bold text-xs text-[#f4f7fb]">
                          {compatibilityResult.percentage}%
                        </div>
                      </div>
                    </div>

                    {/* Progress visual bar */}
                    <div className="w-full bg-[#141f33] h-2 rounded-full mt-4 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#d4af37] to-[#10b981] transition-all duration-500"
                        style={{ width: `${compatibilityResult.percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Summary & Dosha Insight */}
                  <div className="p-4 rounded-xl bg-[#090d18] border border-[#202c44] mb-6 space-y-2.5">
                    <p className="text-xs sm:text-sm text-[#d4dde8] leading-relaxed">
                      {isTamil && compatibilityResult.maritalHarmonySummaryTa ? compatibilityResult.maritalHarmonySummaryTa : compatibilityResult.maritalHarmonySummary}
                    </p>
                    <div className="pt-2 border-t border-[#172238] flex items-start gap-2 text-xs text-[#9ca3af]">
                      <ShieldAlert className="w-4 h-4 text-[#e07a5f] shrink-0 mt-0.5" />
                      <span>{isTamil && compatibilityResult.doshaNotesTa ? compatibilityResult.doshaNotesTa : compatibilityResult.doshaNotes}</span>
                    </div>
                  </div>

                  {/* 10 Porutham Breakdown Table */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-3">
                      {t.poruthamTableTitle}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {compatibilityResult.poruthamBreakdown.map((p, idx) => {
                        const pName = isTamil && p.tamilName ? p.tamilName : p.name;
                        const pStatusLabel = p.status === 'Matched' ? t.matchedLabel : p.status === 'Partial' ? t.partialLabel : t.notMatchedLabel;
                        const pDesc = isTamil && p.descriptionTa ? p.descriptionTa : p.description;

                        return (
                          <div key={idx} className="p-3 rounded-lg bg-[#090e1b] border border-[#1b273e]">
                            <div className="flex items-center justify-between text-xs font-semibold mb-1">
                              <span className="text-[#f4f7fb]">{pName}</span>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                p.status === 'Matched' 
                                  ? 'bg-[#10b981]/20 text-[#10b981]' 
                                  : p.status === 'Partial'
                                  ? 'bg-[#f59e0b]/20 text-[#f59e0b]'
                                  : 'bg-[#ef4444]/20 text-[#ef4444]'
                              }`}>
                                {pStatusLabel}
                              </span>
                            </div>
                            <div className="text-[11px] text-[#9ca3af]">
                              {isTamil && p.significanceTa ? p.significanceTa : p.englishMeaning}
                            </div>
                            <p className="text-[11px] text-[#718096] mt-1 line-clamp-2">
                              {pDesc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Remedial Blessing */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#1c1830] to-[#0d1424] border border-[#372b52] mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-1">
                      {isTamil ? 'நல்லிணக்க ஆன்மீக பரிகாரம்' : 'Harmonizing Spiritual Remedy'}
                    </div>
                    <p className="text-xs text-[#d6deeb] leading-relaxed">
                      {isTamil && compatibilityResult.remedyRecommendationTa ? compatibilityResult.remedyRecommendationTa : compatibilityResult.remedyRecommendation}
                    </p>
                  </div>

                  {/* Booking Trigger */}
                  <div className="p-4 rounded-xl bg-[#090d18] border border-[#d4af37]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="font-cinzel text-sm font-bold text-[#f4f7fb]">
                        {isTamil ? 'முழுமையான திருமண ஜாதக பொருத்தம் அறிய வேண்டுமா?' : 'Need a definitive Marriage Compatibility Reading?'}
                      </div>
                      <div className="text-xs text-[#9ca3af]">
                        {isTamil ? 'இருவரின் முழு ஜாதகம், D9 நவாம்சம், 7 மற்றும் 8-ம் பாவங்கள் மற்றும் சுப முகூர்த்தங்களை ஆராயுங்கள்.' : 'We analyze both complete birth charts, D9 Navamsha, and auspicious Muhurats.'}
                      </div>
                    </div>
                    <button
                      onClick={() => onOpenBooking('marriage-compatibility')}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold text-[#080c16] bg-gradient-to-r from-[#e5c158] to-[#d4af37] hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{t.matchCtaBtn}</span>
                    </button>
                  </div>

                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 3: COSMIC WISDOM & LIFE FAQ */}
        {activeTab === 'wisdom' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: isTamil ? t.sadeSatiTitle : 'Navigating Sade Sati & Shani Transits',
                badge: isTamil ? 'சனிப் பெயர்ச்சி பலன்' : 'Saturn Transits',
                icon: Star,
                summary: isTamil ? t.sadeSatiDesc : 'Sade Sati (the 7.5-year transit of Saturn over your natal Moon) is widely feared, but Vedic tradition views it as a transformative alchemy. It systematically dismantles illusions and builds enduring resilience.',
                actionable: isTamil ? 'கடின உழைப்பு, பெரியோர்களுக்கு சேவை, தசரத சனி ஸ்தோத்திரம் பாராயணம் மற்றும் நல்லொழுக்கம் உயர்வைத் தரும்.' : 'Focus on discipline, avoid shortcuts, serve the elderly, and chant the Dasharatha Shani Stotram.'
              },
              {
                title: isTamil ? t.manglikTitle : 'Manglik (Sevvai) Dosha: Truth vs Fear',
                badge: isTamil ? 'திருமண அமைதி' : 'Relationship Harmony',
                icon: HeartHandshake,
                summary: isTamil ? t.manglikDesc : 'Mars placement in houses 1, 2, 4, 7, 8, or 12 creates high energetic intensity. In modern life, over 60% of apparent Manglik charts have natural planetary cancellations (Nirvada Yogas).',
                actionable: isTamil ? 'பயந்து வரனை தவிர்க்க வேண்டாம். நிவர்த்தி விதிகளின்படி இருவரின் ஜாதகத்தையும் சரியாக பொருத்திப் பார்க்கவும்.' : 'Never cancel a sincere match out of unguided fear. Get professional cancellation verification first.'
              },
              {
                title: isTamil ? 'வேத ரத்தினக் கற்களின் அறிவியல் உண்மை' : 'How Vedic Gemstones Actually Function',
                badge: isTamil ? 'ஆன்மீக பரிகாரம்' : 'Spiritual Remedies',
                icon: Sparkles,
                summary: isTamil ? 'ரத்தினக் கற்கள் பிரபஞ்ச கிரக ஒளிக் கதிர்களை ஈர்த்து உங்கள் உடலில் சேர்க்கும் ஊடகங்கள். தவறான கல் அணிந்தால் எதிர்மறை பலன் வரக்கூடும்.' : 'Gemstones act as cosmic light prisms, amplifying specific planetary solar frequencies through your aura. Wearing an improper stone can aggravate afflicted houses.',
                actionable: isTamil ? 'பிறந்த லக்ன சுப அதிபதிக்கான சான்றளிக்கப்பட்ட இயற்கை ரத்தினத்தை மட்டுமே அணியவும்.' : 'Only wear stones recommended strictly for your benefic Lagna Lord, never based on sun-sign pop astrology.'
              },
              {
                title: isTamil ? 'தொழில் மாற்றம் & தசாம்ச (D10) ஆய்வு' : 'Career Pivots & Dasamsa (D10) Analysis',
                badge: isTamil ? 'தொழில் காலநேரம்' : 'Career Timing',
                icon: Compass,
                summary: isTamil ? 'ராசி சக்கரம் வாழ்வின் பொது அமைப்பைக் காட்டினாலும், D10 தசாம்ச சக்கரம் உங்களின் தலைமைப் பதவி, தொழில் கௌரவம் மற்றும் சரியான வணிக நேரத்தைக் காட்டுகிறது.' : 'Your Rashi chart shows life potential, but the D10 Dasamsa chart pinpoints specific vocational status, leadership authority, and commercial enterprise timing.',
                actionable: isTamil ? 'வேலை ராஜினாமா செய்வதற்கு முன்போ அல்லது புதிய தொழில் துவங்குவதற்கு முன்போ ஜோதிட வழிகாட்டல் பெறவும்.' : 'Schedule a career consultation before resigning, launching a startup, or shifting sectors.'
              },
              {
                title: isTamil ? 'தன யோகமும் பண விரய தடுப்பும்' : 'Wealth Yogas & Financial Leakages',
                badge: isTamil ? 'தன லாபம்' : 'Financial Insights',
                icon: Sparkles,
                summary: isTamil ? 'நன்றாக சம்பாதித்தும் கையில் பணம் தங்காத நிலைக்கு 12-ம் பாவம் (விரய ஸ்தானம்) அல்லது புதன்-குரு அமைப்புகள் காரணமாக இருக்கலாம்.' : 'Persistent financial leakage despite strong earnings is frequently traced to an afflicted 12th house (Vyaya Bhava) or unaligned Mercury-Jupiter cycles.',
                actionable: isTamil ? 'புதன் மற்றும் வியாழக்கிழமைகளில் தகுந்த தானங்கள் மற்றும் எளிய வழிபாடுகள் விரயத்தை கட்டுப்படுத்தும்.' : 'Targeted Dana (charity on Wednesdays/Thursdays) recalibrates flow and plugs energetic leaks.'
              },
              {
                title: isTamil ? t.birthTimeTitle : 'What If Exact Birth Time Is Unknown?',
                badge: isTamil ? 'வேத கணிப்பு முறை' : 'Vedic Methodology',
                icon: Clock,
                summary: isTamil ? t.birthTimeDesc : 'We utilize Birth Time Rectification (Nashta Jataka) or Prashna (Horary) charts created at the precise moment you ask your life question.',
                actionable: isTamil ? 'உங்கள் வாழ்க்கையின் 4-5 முக்கிய நிகழ்வுகளின் தேதிகளை (படிப்பு, முதல் வேலை, திருமணம்) குறித்து வைத்திருக்கவும்.' : 'Bring 4–5 key milestone dates (graduation, first job, wedding, major travel) to your session.'
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#0e1628] rounded-2xl p-6 border border-[#1e2b46] hover:border-[#d4af37]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-semibold text-[#d4af37] uppercase tracking-wider">
                        {item.badge}
                      </span>
                      <IconComp className="w-4 h-4 text-[#d4af37]" />
                    </div>
                    <h4 className="font-cinzel text-base font-bold text-[#f4f7fb] mb-2.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#9ca3af] leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#1a253c] mt-auto">
                    <div className="text-[11px] font-medium text-[#c5cdd9]">
                      <span className="text-[#d4af37] font-semibold">{isTamil ? 'வழிகாட்டல்:' : 'Guidance:'}</span> {item.actionable}
                    </div>
                    <button
                      onClick={() => onOpenBooking()}
                      className="mt-3 text-xs font-semibold text-[#e5c158] hover:text-[#fae29c] flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isTamil ? 'ஆலோசனையில் கலந்துரையாட' : 'Discuss in consultation'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
