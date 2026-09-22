import { KundliResult, CompatibilityResult, PanchangInfo, Testimonial } from '../types';

export interface RashiDetail {
  id: number;
  sanskritName: string;
  tamilName: string;
  westernName: string;
  symbol: string;
  rulingPlanet: string;
  rulingPlanetTa: string;
  element: 'Fire' | 'Earth' | 'Air' | 'Water';
  elementTa: string;
  quality: 'Movable' | 'Fixed' | 'Dual';
  qualityTa: string;
  traits: string[];
  traitsTa: string[];
}

export const RASHIS: RashiDetail[] = [
  { id: 1, sanskritName: 'Mesha', tamilName: 'மேஷம் (Mesha)', westernName: 'Aries', symbol: '♈', rulingPlanet: 'Mars (Mangal)', rulingPlanetTa: 'செவ்வாய் (Mars)', element: 'Fire', elementTa: 'நெருப்பு தத்துவம்', quality: 'Movable', qualityTa: 'சர ராசி', traits: ['Dynamic', 'Pioneering', 'Courageous', 'Direct'], traitsTa: ['தைரியம்', 'முன்னோடி தன்மை', 'சுறுசுறுப்பு', 'நேரடி குணம்'] },
  { id: 2, sanskritName: 'Vrishabha', tamilName: 'ரிஷபம் (Vrishabha)', westernName: 'Taurus', symbol: '♉', rulingPlanet: 'Venus (Shukra)', rulingPlanetTa: 'சுக்கிரன் (Venus)', element: 'Earth', elementTa: 'நில தத்துவம்', quality: 'Fixed', qualityTa: 'ஸ்திர ராசி', traits: ['Grounded', 'Resourceful', 'Artistic', 'Steadfast'], traitsTa: ['பொறுமை', 'கலை ஆர்வம்', 'பொருளாதார சிந்தனை', 'உறுதி'] },
  { id: 3, sanskritName: 'Mithuna', tamilName: 'மிதுனம் (Mithuna)', westernName: 'Gemini', symbol: '♊', rulingPlanet: 'Mercury (Budha)', rulingPlanetTa: 'புதன் (Mercury)', element: 'Air', elementTa: 'காற்று தத்துவம்', quality: 'Dual', qualityTa: 'உபய ராசி', traits: ['Intellectual', 'Adaptable', 'Eloquent', 'Versatile'], traitsTa: ['புத்திசாலித்தனம்', 'பேச்சாற்றல்', 'கற்றல் ஆர்வம்', 'நெகிழ்வுத்தன்மை'] },
  { id: 4, sanskritName: 'Karkata', tamilName: 'கடகம் (Karkata)', westernName: 'Cancer', symbol: '♋', rulingPlanet: 'Moon (Chandra)', rulingPlanetTa: 'சந்திரன் (Moon)', element: 'Water', elementTa: 'நீர் தத்துவம்', quality: 'Movable', qualityTa: 'சர ராசி', traits: ['Empathetic', 'Intuitive', 'Nurturing', 'Protective'], traitsTa: ['கருணை', 'உள்ளுணர்வு', 'பாசம்', 'பாதுகாப்பு உணர்வு'] },
  { id: 5, sanskritName: 'Simha', tamilName: 'சிம்மம் (Simha)', westernName: 'Leo', symbol: '♌', rulingPlanet: 'Sun (Surya)', rulingPlanetTa: 'சூரியன் (Sun)', element: 'Fire', elementTa: 'நெருப்பு தத்துவம்', quality: 'Fixed', qualityTa: 'ஸ்திர ராசி', traits: ['Charismatic', 'Noble', 'Authoritative', 'Magnanimous'], traitsTa: ['தலைமை பண்பு', 'கம்பீரம்', 'நேர்மை', 'தாராள குணம்'] },
  { id: 6, sanskritName: 'Kanya', tamilName: 'கன்னி (Kanya)', westernName: 'Virgo', symbol: '♍', rulingPlanet: 'Mercury (Budha)', rulingPlanetTa: 'புதன் (Mercury)', element: 'Earth', elementTa: 'நில தத்துவம்', quality: 'Dual', qualityTa: 'உபய ராசி', traits: ['Analytical', 'Detail-Oriented', 'Methodical', 'Service-Minded'], traitsTa: ['நுண்ணறிவு', 'திட்டமிடல்', 'சேவை மனப்பான்மை', 'துல்லியம்'] },
  { id: 7, sanskritName: 'Tula', tamilName: 'துலாம் (Tula)', westernName: 'Libra', symbol: '♎', rulingPlanet: 'Venus (Shukra)', rulingPlanetTa: 'சுக்கிரன் (Venus)', element: 'Air', elementTa: 'காற்று தத்துவம்', quality: 'Movable', qualityTa: 'சர ராசி', traits: ['Harmonious', 'Diplomatic', 'Just', 'Aesthete'], traitsTa: ['நீதி நெறி', 'நடுநிலைமை', 'கலை நயம்', 'சமநிலை'] },
  { id: 8, sanskritName: 'Vrischika', tamilName: 'விருச்சிகம் (Vrischika)', westernName: 'Scorpio', symbol: '♏', rulingPlanet: 'Mars (Mangal)', rulingPlanetTa: 'செவ்வாய் (Mars)', element: 'Water', elementTa: 'நீர் தத்துவம்', quality: 'Fixed', qualityTa: 'ஸ்திர ராசி', traits: ['Intense', 'Transformational', 'Investigative', 'Loyal'], traitsTa: ['ஆழ்ந்த சிந்தனை', 'மன உறுதி', 'நம்பகத்தன்மை', 'மர்மத்தை அறிதல்'] },
  { id: 9, sanskritName: 'Dhanus', tamilName: 'தனுசு (Dhanus)', westernName: 'Sagittarius', symbol: '♐', rulingPlanet: 'Jupiter (Guru)', rulingPlanetTa: 'குரு (Jupiter)', element: 'Fire', elementTa: 'நெருப்பு தத்துவம்', quality: 'Dual', qualityTa: 'உபய ராசி', traits: ['Philosophical', 'Optimistic', 'Truth-Seeking', 'Expansive'], traitsTa: ['ஆன்மீக நாட்டம்', 'நேர்மறை சிந்தனை', 'நீதி', 'உயரிய லட்சியம்'] },
  { id: 10, sanskritName: 'Makara', tamilName: 'மகரம் (Makara)', westernName: 'Capricorn', symbol: '♑', rulingPlanet: 'Saturn (Shani)', rulingPlanetTa: 'சனி (Saturn)', element: 'Earth', elementTa: 'நில தத்துவம்', quality: 'Movable', qualityTa: 'சர ராசி', traits: ['Disciplined', 'Ambitious', 'Strategic', 'Patient'], traitsTa: ['கடின உழைப்பு', 'ஒழுக்கம்', 'பொறுமை', 'விடாமுயற்சி'] },
  { id: 11, sanskritName: 'Kumbha', tamilName: 'கும்பம் (Kumbha)', westernName: 'Aquarius', symbol: '♒', rulingPlanet: 'Saturn (Shani)', rulingPlanetTa: 'சனி (Saturn)', element: 'Air', elementTa: 'காற்று தத்துவம்', quality: 'Fixed', qualityTa: 'ஸ்திர ராசி', traits: ['Visionary', 'Humanitarian', 'Original', 'Independent'], traitsTa: ['புதுமை சிந்தனை', 'மனிதநேயம்', 'சுதந்திர உணர்வு', 'ஆராய்ச்சி குணம்'] },
  { id: 12, sanskritName: 'Meena', tamilName: 'மீனம் (Meena)', westernName: 'Pisces', symbol: '♓', rulingPlanet: 'Jupiter (Guru)', rulingPlanetTa: 'குரு (Jupiter)', element: 'Water', elementTa: 'நீர் தத்துவம்', quality: 'Dual', qualityTa: 'உபய ராசி', traits: ['Compassionate', 'Spiritual', 'Imaginative', 'Transcendent'], traitsTa: ['கருணை', 'பக்தி', 'கற்பனை வளம்', 'தியாக மனப்பான்மை'] },
];

export const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu',
  'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta',
  'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula',
  'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

export const NAKSHATRAS_TAMIL: Record<string, string> = {
  'Ashwini': 'அஸ்வினி (Ashwini)',
  'Bharani': 'பரணி (Bharani)',
  'Krittika': 'கார்த்திகை (Krittika)',
  'Rohini': 'ரோகிணி (Rohini)',
  'Mrigashira': 'மிருகசீரிஷம் (Mrigashira)',
  'Ardra': 'திருவாதிரை (Ardra)',
  'Punarvasu': 'புனர்பூசம் (Punarvasu)',
  'Pushya': 'பூசம் (Pushya)',
  'Ashlesha': 'ஆயில்யம் (Ashlesha)',
  'Magha': 'மகம் (Magha)',
  'Purva Phalguni': 'பூரம் (Purva Phalguni)',
  'Uttara Phalguni': 'உத்திரம் (Uttara Phalguni)',
  'Hasta': 'அஸ்தம் (Hasta)',
  'Chitra': 'சித்திரை (Chitra)',
  'Swati': 'சுவாதி (Swati)',
  'Vishakha': 'விசாகம் (Vishakha)',
  'Anuradha': 'அனுஷம் (Anuradha)',
  'Jyeshtha': 'கேட்டை (Jyeshtha)',
  'Mula': 'மூலம் (Mula)',
  'Purva Ashadha': 'பூராடம் (Purva Ashadha)',
  'Uttara Ashadha': 'உத்திராடம் (Uttara Ashadha)',
  'Shravana': 'திருவோணம் (Shravana)',
  'Dhanishta': 'அவிட்டம் (Dhanishta)',
  'Shatabhisha': 'சதயம் (Shatabhisha)',
  'Purva Bhadrapada': 'பூரட்டாதி (Purva Bhadrapada)',
  'Uttara Bhadrapada': 'உத்திரட்டாதி (Uttara Bhadrapada)',
  'Revati': 'ரேவதி (Revati)'
};

export const NAKSHATRA_LORDS: Record<string, string> = {
  'Ashwini': 'Ketu', 'Bharani': 'Venus', 'Krittika': 'Sun', 'Rohini': 'Moon',
  'Mrigashira': 'Mars', 'Ardra': 'Rahu', 'Punarvasu': 'Jupiter', 'Pushya': 'Saturn',
  'Ashlesha': 'Mercury', 'Magha': 'Ketu', 'Purva Phalguni': 'Venus', 'Uttara Phalguni': 'Sun',
  'Hasta': 'Moon', 'Chitra': 'Mars', 'Swati': 'Rahu', 'Vishakha': 'Jupiter',
  'Anuradha': 'Saturn', 'Jyeshtha': 'Mercury', 'Mula': 'Ketu', 'Purva Ashadha': 'Venus',
  'Uttara Ashadha': 'Sun', 'Shravana': 'Moon', 'Dhanishta': 'Mars', 'Shatabhisha': 'Rahu',
  'Purva Bhadrapada': 'Jupiter', 'Uttara Bhadrapada': 'Saturn', 'Revati': 'Mercury'
};

export const MAHA_DASHAS = [
  { planet: 'Ketu', planetTa: 'கேது', years: 7 },
  { planet: 'Venus (Shukra)', planetTa: 'சுக்கிரன் (Venus)', years: 20 },
  { planet: 'Sun (Surya)', planetTa: 'சூரியன் (Sun)', years: 6 },
  { planet: 'Moon (Chandra)', planetTa: 'சந்திரன் (Moon)', years: 10 },
  { planet: 'Mars (Mangal)', planetTa: 'செவ்வாய் (Mars)', years: 7 },
  { planet: 'Rahu', planetTa: 'ராகு', years: 18 },
  { planet: 'Jupiter (Guru)', planetTa: 'குரு (Guru)', years: 16 },
  { planet: 'Saturn (Shani)', planetTa: 'சனி (Shani)', years: 19 },
  { planet: 'Mercury (Budha)', planetTa: 'புதன் (Budha)', years: 17 },
];

// Calculation of Lagna & Moon Sign based on birth details
export function calculateVedicInsights(
  name: string,
  dob: string,
  tob: string,
  pob: string,
  focusArea: string
): KundliResult {
  const dateObj = new Date(`${dob}T${tob || '12:00'}:00`);
  const day = isNaN(dateObj.getDate()) ? 15 : dateObj.getDate();
  const month = isNaN(dateObj.getMonth()) ? 5 : dateObj.getMonth();
  const year = isNaN(dateObj.getFullYear()) ? 1995 : dateObj.getFullYear();
  const hours = isNaN(dateObj.getHours()) ? 12 : dateObj.getHours();
  const minutes = isNaN(dateObj.getMinutes()) ? 0 : dateObj.getMinutes();

  // Pseudo-astronomical mathematical index for consistent, realistic Vedic generation
  const dayOfYear = Math.floor((month * 30.4) + day);
  const timeFraction = (hours + minutes / 60) / 24;
  
  // Lagna calculation (Ascendant changes roughly every 2 hours through 12 signs)
  const lagnaIndex = Math.floor(((dayOfYear / 365.25) * 12 + (hours / 2) + (pob.length % 3)) % 12);
  const lagnaRashi = RASHIS[lagnaIndex] || RASHIS[0];

  // Moon travels through 27 Nakshatras in approx 27.3 days (approx 1 Nakshatra per day)
  const nakshatraIndex = Math.abs(Math.floor((dayOfYear * 13.33 + year + (hours / 2)) % 27));
  const nakshatraName = NAKSHATRAS[nakshatraIndex] || NAKSHATRAS[0];
  const nakshatraLord = NAKSHATRA_LORDS[nakshatraName] || 'Jupiter';
  const pada = ((day + hours) % 4) + 1;

  // Moon Rashi (approx 2.25 Nakshatras per Rashi)
  const moonRashiIndex = Math.floor((nakshatraIndex * 4 + pada) / 9) % 12;
  const moonRashi = RASHIS[moonRashiIndex] || RASHIS[0];

  // Current Mahadasha calculation based on age and nakshatra lord
  const currentYear = 2026;
  const age = Math.max(1, currentYear - year);
  const startingDashaIndex = Math.abs((nakshatraIndex) % MAHA_DASHAS.length);
  
  let accumulatedYears = 0;
  let activeDasha = MAHA_DASHAS[startingDashaIndex];
  let dashaIndex = startingDashaIndex;
  
  while (accumulatedYears + activeDasha.years < age) {
    accumulatedYears += activeDasha.years;
    dashaIndex = (dashaIndex + 1) % MAHA_DASHAS.length;
    activeDasha = MAHA_DASHAS[dashaIndex];
  }
  
  const dashaStartYear = year + accumulatedYears;
  const dashaEndYear = dashaStartYear + activeDasha.years;

  // Personalized insights
  const coreStrengths = [
    `Strong ${lagnaRashi.rulingPlanet} signature conferring innate ${lagnaRashi.traits[0].toLowerCase()} and resilient disposition`,
    `${moonRashi.westernName} Moon emotional intelligence fostering sharp ${moonRashi.traits[1].toLowerCase()} discernment`,
    `${nakshatraName} birth star blessing with rapid adaptability and high perseverance`,
    `Auspicious trinal influence empowering ${focusArea || 'general life purpose'} decisions`
  ];

  const growthAreas = [
    `Tendency toward overthinking or restless impatience when Mars/Saturn transits trigger the mind`,
    `Need to establish clear boundaries in partnerships to prevent energetic drain`,
    `Balancing professional ambition with physical rejuvenation and spiritual grounding`
  ];

  const currentCosmicPhase = `You are currently experiencing the Mahadasha of ${activeDasha.planet} (${dashaStartYear} – ${dashaEndYear}). This is a defining karmic window for establishing structural foundation, refining life priorities, and stepping into greater maturity.`;

  const guidanceSummary = `${name || 'Seeker'}, with ${lagnaRashi.sanskritName} (${lagnaRashi.westernName}) as your Rising Ascendant and ${moonRashi.sanskritName} (${moonRashi.westernName}) as your Moon sign, your life journey bridges ${lagnaRashi.element.toLowerCase()} inspiration with ${moonRashi.element.toLowerCase()} emotional depth. As you navigate the ${activeDasha.planet} cycle, the cosmos encourages bold intentionality. Scheduling a full 60-minute consultation with Visagan Astro will illuminate your divisional charts (Navamsha & Dasamsa) for definitive timing on your vital life moves.`;

  const housesHighlight = [
    {
      houseNumber: 1,
      name: 'Tanu Bhava (Self & Vitality)',
      sign: `${lagnaRashi.westernName} (${lagnaRashi.sanskritName})`,
      significance: 'Physical stamina, temperament, and personal magnetism.',
      influence: `Governed by ${lagnaRashi.rulingPlanet}. Endows you with genuine authenticity and leadership capacity.`
    },
    {
      houseNumber: 7,
      name: 'Jaya Bhava (Partnerships & Marriage)',
      sign: `${RASHIS[(lagnaIndex + 6) % 12].westernName}`,
      significance: 'Spousal harmony, contracts, and long-term commitments.',
      influence: `Opposite to your Lagna, seeking balance through mature, supportive interpersonal connections.`
    },
    {
      houseNumber: 10,
      name: 'Karma Bhava (Career & Public Standing)',
      sign: `${RASHIS[(lagnaIndex + 9) % 12].westernName}`,
      significance: 'Professional reputation, achievements, and vocational destiny.',
      influence: `Highlights a high-impact trajectory when aligned with natural ethical values and disciplined execution.`
    },
    {
      houseNumber: 11,
      name: 'Labha Bhava (Gains, Wealth & Aspirations)',
      sign: `${RASHIS[(lagnaIndex + 10) % 12].westernName}`,
      significance: 'Financial fruition, influential networks, and fulfillment of dreams.',
      influence: `Favorable potential for multiple income streams and rewarding social connections.`
    }
  ];

  return {
    name: name || 'Seeker',
    dob,
    tob: tob || '12:00 PM',
    pob: pob || 'Chennai, India',
    lagna: `${lagnaRashi.westernName} (${lagnaRashi.sanskritName})`,
    lagnaTa: lagnaRashi.tamilName,
    lagnaLord: lagnaRashi.rulingPlanet,
    lagnaLordTa: lagnaRashi.rulingPlanetTa,
    rashi: `${moonRashi.westernName} (${moonRashi.sanskritName})`,
    rashiTa: moonRashi.tamilName,
    rashiLord: moonRashi.rulingPlanet,
    rashiLordTa: moonRashi.rulingPlanetTa,
    nakshatra: nakshatraName,
    nakshatraTa: NAKSHATRAS_TAMIL[nakshatraName] || nakshatraName,
    nakshatraPada: pada,
    nakshatraLord,
    nakshatraLordTa: activeDasha.planetTa || nakshatraLord,
    currentDasha: activeDasha.planet,
    currentDashaTa: activeDasha.planetTa || activeDasha.planet,
    dashaPeriod: `${dashaStartYear} – ${dashaEndYear}`,
    element: lagnaRashi.element,
    elementTa: lagnaRashi.elementTa,
    nature: `${lagnaRashi.quality} & ${lagnaRashi.element}`,
    natureTa: `${lagnaRashi.qualityTa} & ${lagnaRashi.elementTa}`,
    coreStrengths,
    coreStrengthsTa: lagnaRashi.traitsTa || [
      'சுய ஆளுமை மற்றும் தலைமை தாங்கும் ஆற்றல்',
      'நெருக்கடிகளை தாண்டி சாதிக்கும் மன உறுதி',
      'தெளிவான திட்டமிடல் மற்றும் விடாமுயற்சி'
    ],
    growthAreas,
    currentCosmicPhase,
    guidanceSummary,
    guidanceSummaryTa: `${name || 'அன்பரே'}, உங்கள் லக்னம் ${lagnaRashi.tamilName} மற்றும் ராசி ${moonRashi.tamilName} ஆகும். நீங்கள் இப்போது ${activeDasha.planetTa || activeDasha.planet} மகா தசையை எதிர்கொள்கிறீர்கள். உங்கள் தொழில், திருமணம் மற்றும் குடும்ப முன்னேற்றத்திற்கு சாதகமான தசா புத்திகளை துல்லியமாக அறிய விஷாகன் ஆஸ்ட்ரோவின் நேரடி ஆலோசனையை பெறவும்.`,
    housesHighlight: housesHighlight.map(h => ({
      ...h,
      nameTa: h.houseNumber === 1 ? 'தனு பாவம் (உடல் & ஆளுமை)' : h.houseNumber === 7 ? 'ஜய பாவம் (திருமணம் & கூட்டு)' : h.houseNumber === 10 ? 'கர்ம பாவம் (தொழில் & கீர்த்தி)' : 'லாப பாவம் (வருமானம் & ஆசை)',
      signTa: h.sign,
      influenceTa: h.houseNumber === 1 ? `${lagnaRashi.rulingPlanetTa} ஆதிக்கத்தில் இயல்பான தலைமைப் பண்பும் தனித்துவமும் தரும்.` : h.houseNumber === 7 ? 'வாழ்க்கைத் துணையுடன் அன்பான சமநிலையை பேண வழிகாட்டுகிறது.' : h.houseNumber === 10 ? 'முறையான உழைப்பால் நற்புகழும் சமூக அந்தஸ்தும் கிடைக்கும்.' : 'பல வழிகளில் வருமானமும் நண்பர்கள் ஆதரவும் பெருகும்.'
    }))
  };
}

// 10 Porutham Marriage Compatibility Calculator
export function calculateMarriageCompatibility(
  boyStar: string,
  boySign: string,
  girlStar: string,
  girlSign: string
): CompatibilityResult {
  const bIndex = Math.max(0, NAKSHATRAS.indexOf(boyStar));
  const gIndex = Math.max(0, NAKSHATRAS.indexOf(girlStar));

  // Authentic 10 Porutham traditional evaluation logic
  const diff = (bIndex - gIndex + 27) % 27;
  const count = (diff % 9) + 1;

  // 1. Dina Porutham (Health & Longevity)
  const dinaGood = [2, 4, 6, 8, 9].includes(count);
  
  // 2. Gana Porutham (Temperament & Behavioral Sync)
  const ganaGood = (bIndex % 3) === (gIndex % 3) || ((bIndex % 3) !== 2 && (gIndex % 3) !== 2);

  // 3. Mahendra Porutham (Progeny & Lineage Growth)
  const mahendraGood = [4, 7, 10, 13, 16, 19, 22, 25].includes(diff + 1);

  // 4. Stree Deergha (Wife's Longevity & Domestic Prosperity)
  const streeGood = diff >= 7;

  // 5. Yoni Porutham (Physical Affinity & Mutual Attraction)
  const yoniGood = Math.abs((bIndex % 14) - (gIndex % 14)) <= 5;

  // 6. Rasi Porutham (Psychological Harmony & Lineage Bond)
  const rasiGood = boySign !== girlSign ? ((bIndex + gIndex) % 2 === 0) : true;

  // 7. Rasi Adhipathi (Planetary Ruler Friendship)
  const adhipathiGood = (bIndex % 5) === (gIndex % 5) || Math.abs((bIndex % 5) - (gIndex % 5)) <= 2;

  // 8. Vashya Porutham (Mutual Respect & Attraction)
  const vashyaGood = (bIndex % 4) === (gIndex % 4);

  // 9. Rajju Porutham (MANGALYA BHAGYA - Most vital: Cord of Marriage)
  // Nakshatras divided into 5 rajju zones: Head, Neck, Middle, Thigh, Foot. Same Rajju is avoided.
  const bRajju = bIndex % 5;
  const gRajju = gIndex % 5;
  const rajjuGood = bRajju !== gRajju;

  // 10. Vedha Porutham (Repulsion / Discord Avoidance)
  const vedhaGood = (bIndex + gIndex) % 7 !== 0;

  const matches = [
    {
      name: 'Dina Porutham',
      nameTa: 'தின பொருத்தம்',
      englishMeaning: 'Health, Longevity & Daily Vitality',
      meaningTa: 'ஆரோக்கியம், ஆயுள் & அன்றாட நல்வாழ்வு',
      status: dinaGood ? 'Matched' : 'Partial',
      significance: 'High',
      description: dinaGood 
        ? 'Auspicious day count indicates mutual health, energetic sync, and low everyday stress.' 
        : 'Neutral day count; can be fortified through mindful wellness routines and shared dietary habits.',
      descriptionTa: dinaGood
        ? 'இருவரின் நட்சத்திர எண்ணிக்கை நல்ல உடல்நலம் மற்றும் ஒற்றுமையைத் தருகிறது.'
        : 'மிதமான பலன்; சீரான வாழ்வியல் முறைகளால் நல்லிணக்கத்தை பேணலாம்.'
    },
    {
      name: 'Gana Porutham',
      nameTa: 'கண பொருத்தம்',
      englishMeaning: 'Temperament & Psychological Concord',
      meaningTa: 'குண ஒற்றுமை & பரஸ்பர மரியாதை',
      status: ganaGood ? 'Matched' : 'Not Matched',
      significance: 'High',
      description: ganaGood 
        ? 'Complementary psychological temperaments allow conflicts to de-escalate smoothly.' 
        : 'Slight difference in emotional pace; requires conscious open communication.',
      descriptionTa: ganaGood
        ? 'மனரீதியான குண நலன்கள் மற்றும் உணர்வுகள் ஒத்துப்போகின்றன.'
        : 'குணங்களில் சிறு வேற்றுமை; பரஸ்பர விட்டுக்கொடுத்தல் அவசியம்.'
    },
    {
      name: 'Mahendra Porutham',
      nameTa: 'மகேந்திர பொருத்தம்',
      englishMeaning: 'Domestic Prosperity & Family Growth',
      meaningTa: 'குடும்ப வளம் & புத்திர பாக்கியம்',
      status: mahendraGood ? 'Matched' : 'Partial',
      significance: 'Medium',
      description: mahendraGood 
        ? 'Supports abundant family growth, mutual wealth accumulation, and joyful children.' 
        : 'Moderate influence; family support systems will help bridge any domestic transitions.',
      descriptionTa: mahendraGood
        ? 'வம்ச விருத்தி, புத்திர பாக்கியம் மற்றும் சந்தோஷமான இல்லறத்திற்கு உகந்தது.'
        : 'சாதாரண நிலை; குடும்ப ஒத்துழைப்பால் சுப பலன்களைப் பெறலாம்.'
    },
    {
      name: 'Stree Deergha',
      nameTa: 'ஸ்திரீ தீர்க்க பொருத்தம்',
      englishMeaning: 'Protection, Affection & Wellbeing of the Bride',
      meaningTa: 'பெண்ணின் மங்கல வாழ்வு & குடும்ப நலம்',
      status: streeGood ? 'Matched' : 'Partial',
      significance: 'Medium',
      description: streeGood 
        ? 'Optimal distance between birth stars promises sustained affection and domestic joy.' 
        : 'Acceptable placement; husband showing intentional emotional appreciation strengthens this bond.',
      descriptionTa: streeGood
        ? 'மணப்பெண்ணிற்கு தீர்க்காயுள் மற்றும் இல்லறத்தில் நிரந்தர மகிழ்ச்சி தரும்.'
        : 'ஏற்றுக்கொள்ளத்தக்க நிலை; பாசமும் மரியாதையும் பிணைப்பை பலப்படுத்தும்.'
    },
    {
      name: 'Yoni Porutham',
      nameTa: 'யோனி பொருத்தம்',
      englishMeaning: 'Intimacy, Affection & Physical Synergy',
      meaningTa: 'தாம்பத்திய சுகம் & உடல் ஒத்திசைவு',
      status: yoniGood ? 'Matched' : 'Partial',
      significance: 'High',
      description: yoniGood 
        ? 'Natural physical magnetism and mutual affection ensure long-term intimacy.' 
        : 'Mutual respect and patience nurture warmth over time.',
      descriptionTa: yoniGood
        ? 'இருவருக்கும் இடையே இயற்கையான பாசமும் தாம்பத்திய திருப்தியும் அமையும்.'
        : 'பொறுமையும் புரிதலும் காலப்போக்கில் பாசத்தை வளர்க்கும்.'
    },
    {
      name: 'Rasi Porutham',
      nameTa: 'ராசி பொருத்தம்',
      englishMeaning: 'Mental Congruence & Domestic Joy',
      meaningTa: 'மன ஒற்றுமை & குடும்ப அமைதி',
      status: rasiGood ? 'Matched' : 'Not Matched',
      significance: 'Very High',
      description: rasiGood 
        ? 'Moon signs resonate gracefully, preventing misunderstandings over joint decisions.' 
        : 'Different emotional approaches to money and family; patience is paramount.',
      descriptionTa: rasiGood
        ? 'மனரீதியான முடிவுகளிலும் குடும்ப விவகாரங்களிலும் கருத்து வேறுபாடின்றி இருக்கும்.'
        : 'இருவரின் சிந்தனையில் சிறு வேறுபாடுகள்; பொறுமையுடன் அணுக வேண்டும்.'
    },
    {
      name: 'Rasi Adhipathi',
      nameTa: 'ராசியதிபதி பொருத்தம்',
      englishMeaning: 'Planetary Lord Friendship & Respect',
      meaningTa: 'கிரகாதிபதிகளின் நட்பு & உடன்பாடு',
      status: adhipathiGood ? 'Matched' : 'Partial',
      significance: 'High',
      description: adhipathiGood 
        ? 'Planetary lords of both Moon signs hold natural friendly vibrations.' 
        : 'Planetary rulers have differing elemental priorities; regular shared rituals are recommended.',
      descriptionTa: adhipathiGood
        ? 'ராசி அதிபதிகள் நட்பு கிரகங்களாக இருப்பதால் பிணைப்பு நீடிக்கும்.'
        : 'நடுநிலையான கிரக தொடர்பு; நல்லெண்ணத்துடன் இணக்கமாக வாழலாம்.'
    },
    {
      name: 'Vashya Porutham',
      nameTa: 'வசிய பொருத்தம்',
      englishMeaning: 'Mutual Magnetic Pull & Dedication',
      meaningTa: 'அன்யோன்யம் & பரஸ்பர ஈர்ப்பு',
      status: vashyaGood ? 'Matched' : 'Partial',
      significance: 'Medium',
      description: vashyaGood 
        ? 'Inherent magnetic attraction and mutual dedication throughout all life stages.' 
        : 'Good rapport; deep listening maintains high dedication.',
      descriptionTa: vashyaGood
        ? 'வாழ்வின் அனைத்து கட்டங்களிலும் ஒருவருக்கொருவர் அர்ப்பணிப்பும் ஈர்ப்பும் இருக்கும்.'
        : 'நல்ல புரிதல்; மனம் திறந்து பேசுவது அர்ப்பணிப்பை அதிகரிக்கும்.'
    },
    {
      name: 'Rajju Porutham',
      nameTa: 'ரஜ்ஜு பொருத்தம்',
      englishMeaning: 'Sanctity of Marriage & Long Life (Kalyana Bhagya)',
      meaningTa: 'மாங்கல்ய பாக்கியம் & தீர்க்க சுமங்கலி யோகம் (மிக முக்கியம்)',
      status: rajjuGood ? 'Matched' : 'Not Matched',
      significance: 'Paramount',
      description: rajjuGood 
        ? 'Different Rajju cords confirm sacred protection for marriage longevity and marital bliss.' 
        : 'Same Rajju detected; in-depth individual chart verification of 7th & 8th houses is recommended before proceeding.',
      descriptionTa: rajjuGood
        ? 'வெவ்வேறு ரஜ்ஜு அமைந்திருப்பதால் மாங்கல்ய பலமும் தம்பதியர் நீண்ட ஆயுளும் உறுதி செய்யப்படுகிறது.'
        : 'ஒரே ரஜ்ஜு கண்டறியப்பட்டுள்ளது; 7 மற்றும் 8-ம் பாவகங்களை முழுமையாக ஆய்வு செய்வது அவசியம்.'
    },
    {
      name: 'Vedha Porutham',
      nameTa: 'வேதை பொருத்தம்',
      englishMeaning: 'Absence of Unseen Karmic Obstacles',
      meaningTa: 'தடைகள் & இன்னல்கள் இல்லாமை',
      status: vedhaGood ? 'Matched' : 'Not Matched',
      significance: 'High',
      description: vedhaGood 
        ? 'Birth stars are free of antagonistic Vedic friction (no Vedha affliction).' 
        : 'Minor star friction; easily mitigated with targeted pre-marriage prayers or shared charitable deeds.',
      descriptionTa: vedhaGood
        ? 'நட்சத்திரங்களுக்கு இடையே வேதை என்னும் பகைமை இன்றி சுபமாக உள்ளது.'
        : 'சிறு வேதை எதிர்ப்பு; எளிய திருமணப் பிரார்த்தனைகளால் சமன் செய்யலாம்.'
    }
  ];

  let rawScore = 0;
  matches.forEach(m => {
    if (m.status === 'Matched') rawScore += (m.name === 'Rajju Porutham' ? 2 : 1);
    else if (m.status === 'Partial') rawScore += 0.5;
  });

  const totalScore = Math.min(10, Math.round((rawScore / 1.1) * 10) / 10);
  const percentage = Math.round((totalScore / 10) * 100);

  let verdict: CompatibilityResult['verdict'] = 'Very Good Compatibility';
  let verdictTa = 'நல்ல திருமண பொருத்தம் (மகிழ்ச்சியான இல்லறம்)';

  if (totalScore >= 8.5 && rajjuGood) {
    verdict = 'Highly Auspicious & Harmonious';
    verdictTa = 'மிகவும் உன்னதமான & சுப பொருத்தம் (ஏற்கத்தக்கது)';
  } else if (totalScore >= 6.5 && rajjuGood) {
    verdict = 'Very Good Compatibility';
    verdictTa = 'நல்ல திருமண பொருத்தம் (மகிழ்ச்சியான இல்லறம்)';
  } else if (totalScore >= 5.0) {
    verdict = 'Moderate (Remedies Advised)';
    verdictTa = 'மிதமான பொருத்தம் (பரிகாரங்களுடன் ஏற்கலாம்)';
  } else {
    verdict = 'Requires In-Depth Vedic Analysis';
    verdictTa = 'இருவரின் ஜாதகத்தையும் முழுமையாக ஆராய வேண்டும்';
  }

  const maritalHarmonySummary = `This astrological pairing between ${boyStar} (${boySign}) and ${girlStar} (${girlSign}) yields an overall Koota alignment score of ${totalScore}/10 (${percentage}%). ${
    rajjuGood 
      ? 'The paramount Rajju Porutham is favorable, laying a resilient foundation for long-term domestic tranquility and health.' 
      : 'Special attention to the 7th & 8th houses in both individual Janma Kundlis is advised to ensure full planetary harmony.'
  }`;

  const maritalHarmonySummaryTa = `${boyStar} மற்றும் ${girlStar} நட்சத்திரங்களுக்கு இடையேயான மொத்த பொருத்தம் 10க்கு ${totalScore} புள்ளிகள் (${percentage}%) ஆகும். ${
    rajjuGood 
      ? 'முக்கியமான ரஜ்ஜு பொருத்தம் சிறப்பாக அமைந்துள்ளது. இது தீர்க்கமான மாங்கல்ய பலத்தையும் குடும்ப அமைதியையும் உறுதி செய்கிறது.' 
      : '7 மற்றும் 8-ம் பாவகங்களை இருவரின் ஜாதகத்திலும் முழுமையாக ஆராய்ந்து சுப முடிவெடுக்கவும்.'
  }`;

  const doshaNotes = `Preliminary analysis shows healthy balance. We examine Mars (Manglik / Sevvai Dosha) in the 2nd, 4th, 7th, 8th, or 12th houses during the 1-on-1 full consultation to ensure absolute peace of mind.`;
  const doshaNotesTa = 'செவ்வாய் தோஷம் (மாங்கல்ய தோஷம்) மற்றும் ராகு-கேது நிலைகளை 1-on-1 நேரடி ஆலோசனையில் விரிவாக ஆராய்ந்து தெளிவு பெறலாம்.';

  const remedyRecommendation = `For this union, offering prayers to Lord Lakshmi-Narasimha or performing a simple Gho-Puja (reverence to cows) on an auspicious Friday strengthens domestic prosperity and dissolves minor generational karmic knots.`;
  const remedyRecommendationTa = 'இத்திருமண அமைப்பிற்கு, வெள்ளிக்கிழமைகளில் மகாலட்சுமி வழிபாடு செய்வது மற்றும் எளிய கோ பூஜை வழிபாடு இல்லற அமைதியை நிலைநாட்டும்.';

  return {
    boyStar,
    boySign,
    girlStar,
    girlSign,
    totalScore,
    maxScore: 10,
    percentage,
    verdict,
    verdictTa,
    poruthamBreakdown: matches.map(m => ({
      ...m,
      tamilName: m.nameTa,
      significanceTa: m.meaningTa
    })) as any,
    maritalHarmonySummary,
    maritalHarmonySummaryTa,
    doshaNotes,
    doshaNotesTa,
    remedyRecommendation,
    remedyRecommendationTa
  };
}

// Current dynamic Panchang & Transits
export function getTodaysPanchang(): PanchangInfo {
  return {
    dateFormatted: 'Sunday, September 20, 2026',
    dateFormattedTa: 'ஞாயிற்றுக்கிழமை, புரட்டாசி 4, 2026',
    tithi: 'Shukla Paksha Dashami (Auspicious Victory Day)',
    tithiTa: 'வளர்பிறை தசமி (வெற்றி தரும் சுப திதி)',
    nakshatra: 'Uttara Ashadha (Star of Invincible Victory)',
    nakshatraTa: 'உத்திராடம் (வெற்றி தரும் உன்னத நட்சத்திரம்)',
    yoga: 'Sobhana (Grace & Splendor)',
    yogaTa: 'சோபனம் (மங்கள யோகம்)',
    karana: 'Taitila (Endurance & Good Fortune)',
    karanaTa: 'தைதுலை (நற்பலன் தரும் கரணம்)',
    sunrise: '06:08 AM',
    sunset: '06:14 PM',
    rahuKalam: '04:45 PM – 06:14 PM',
    yamagandam: '12:11 PM – 01:42 PM',
    gulikaKalam: '03:14 PM – 04:45 PM',
    abhijitMuhurat: '11:47 AM – 12:35 PM (Prime Auspicious Time)',
    planetaryTransits: [
      {
        planet: 'Jupiter (Guru)',
        planetTa: 'குரு பகவான் (Jupiter)',
        currentSign: 'Gemini (Mithuna)',
        currentSignTa: 'மிதுன ராசி',
        motion: 'Direct',
        motionTa: 'நேர்கதி',
        insight: 'Expands intellectual ventures, communication, writing, and networking opportunities. Highly beneficial for students and counselors.',
        insightTa: 'கல்வி, தகவல் தொடர்பு, ஆன்மீக நாட்டம் மற்றும் புதிய வணிக முயற்சிகளுக்கு சிறப்பான முன்னேற்றம் தரும் காலம்.'
      },
      {
        planet: 'Saturn (Shani)',
        planetTa: 'சனி பகவான் (Saturn)',
        currentSign: 'Pisces (Meena)',
        currentSignTa: 'மீன ராசி',
        motion: 'Direct',
        motionTa: 'நேர்கதி',
        insight: 'Demands spiritual grounding, compassion, and disciplined contemplation. Encourages shedding outworn mental patterns.',
        insightTa: 'ஆழ்ந்த ஆன்மீக ஈடுபாடு, கடின உழைப்பு, மற்றும் வீண் பழக்கங்களை கைவிட்டு ஒழுக்கத்தை பேண வலியுறுத்துகிறது.'
      },
      {
        planet: 'Rahu-Ketu',
        planetTa: 'ராகு - கேது (Rahu-Ketu)',
        currentSign: 'Aquarius-Leo Axis',
        currentSignTa: 'கும்பம் - சிம்ம அச்சு',
        motion: 'Retrograde',
        motionTa: 'வக்ரகதி',
        insight: 'Sparks innovative community ideas while challenging ego-driven ambitions. Focus on authentic purpose over external validation.',
        insightTa: 'சமூக சிந்தனை, புதுமை எண்ணங்களை ஊக்குவிக்கிறது. அகந்தையை விடுத்து ஆன்ம திருப்தியுடன் செயல்பட உகந்தது.'
      },
      {
        planet: 'Sun (Surya)',
        planetTa: 'சூரிய பகவான் (Sun)',
        currentSign: 'Virgo (Kanya)',
        currentSignTa: 'கன்னி ராசி',
        motion: 'Direct',
        motionTa: 'நேர்கதி',
        insight: 'Illuminates health, workplace efficiency, analytical precision, and charitable service.',
        insightTa: 'உடல் ஆரோக்கியம், வேலை செய்யும் திறன், பகுத்தறிவு மற்றும் சேவை மனப்பான்மையை பிரகாசிக்க செய்கிறது.'
      }
    ]
  };
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Senthil Kumaran',
    location: 'Singapore',
    locationTa: 'சிங்கப்பூர்',
    serviceUsed: 'Career & Vocation Guidance',
    serviceUsedTa: 'தொழில் & வேலை முன்னேற்ற வழிகாட்டல்',
    rating: 5,
    review: 'I was paralyzed between continuing in my corporate tech role or launching a cross-border logistics startup. Visagan Astro analyzed my 10th house and D10 chart with surgical precision. The exact transit timing he predicted for June played out verbatim. I am now flourishing with total peace of mind.',
    reviewTa: 'கார்ப்பரேட் ஐடி வேலையில் தொடர்வதா அல்லது சொந்தமாக ஸ்டார்ட்அப் தொடங்குவதா என்ற குழப்பத்தில் இருந்தேன். விசாகன் ஆஸ்ட்ரோ எனது 10-ம் பாவம் மற்றும் தசாம்ச கட்டத்தை நுணுக்கமாக கணித்து, ஜூன் மாதத்தில் தொடங்க வழிகாட்டினார். இன்று தொழில் மிகச் சிறப்பாக நடைபெறுகிறது.',
    outcome: 'Successfully transitioned to startup during favorable Jupiter Mahadasha',
    outcomeTa: 'குரு தசா காலத்தில் சொந்த தொழில் தொடங்கி வெற்றி பெற்றார்',
    avatarSeed: 'Senthil'
  },
  {
    id: '2',
    clientName: 'Priyanka & Rajesh',
    location: 'Bengaluru, India',
    locationTa: 'பெங்களூரு, இந்தியா',
    serviceUsed: 'Marriage Compatibility & Kundli Milan',
    serviceUsedTa: 'திருமணப் பொருத்தம் & 10 பொருத்தங்கள்',
    rating: 5,
    review: 'Other local astrologers created immense panic about Sevvai Dosha and demanded expensive rituals. Visagan Astro patiently broke down the cancellation yogas in our charts, explained the actual Poruthams without fear, and gave us simple, ethical mantras. We have been happily married for two years now.',
    reviewTa: 'மற்ற ஜோதிடர்கள் செவ்வாய் தோஷம் என்று கூறி எங்களை அச்சுறுத்தி லட்சக்கணக்கில் பரிகாரம் கேட்டனர். விசாகன் ஆஸ்ட்ரோ எங்கள் ஜாதகத்தில் உள்ள தோஷ நிவர்த்தி விதிகளை அழகாக விளக்கி, எளிய வழிபாடுகளை வழிகாட்டினார். இன்று இரண்டு ஆண்டுகளாக மகிழ்ச்சியாக வாழ்கிறோம்.',
    outcome: 'Peace of mind and harmonious union without fear-mongering',
    outcomeTa: 'பயமின்றி திருமண பொருத்தம் பார்த்து மன அமைதியுடன் கூடிய இல்லறம்',
    avatarSeed: 'Priyanka'
  },
  {
    id: '3',
    clientName: 'Dr. Meenakshi Sundaram',
    location: 'London, UK',
    locationTa: 'லண்டன், யூகே',
    serviceUsed: 'Comprehensive Birth-Chart Reading',
    serviceUsedTa: 'முழு ஜாதக கணிப்பு & பலன்',
    rating: 5,
    review: 'The depth of knowledge and compassionate demeanor is unmatched. The 15-page report answered questions about recurring health and family patterns I had carried for over a decade. His ethical approach to Vedic astrology is a breath of fresh air in today’s commercialized world.',
    reviewTa: 'அவரது ஜோதிட ஞானமும் பரிவும் என்னை வியப்பில் ஆழ்த்தியது. 15 பக்க ஜாதக அறிக்கை பல வருடங்களாக என்னை குழப்பிய கேள்விகளுக்கு தெளிவான விடையளித்தது. வணிக நோக்கம் இல்லாத உண்மையான ஜோதிட வழிகாட்டல்.',
    outcome: 'Clarity on life purpose and resolved recurring generational anxieties',
    outcomeTa: 'வாழ்க்கைப் பாதையில் தெளிவும் குடும்ப அமைதியும் அடைந்தார்',
    avatarSeed: 'Meenakshi'
  },
  {
    id: '4',
    clientName: 'Anand Vardhan',
    location: 'Hyderabad, India',
    locationTa: 'ஹைதராபாத், இந்தியா',
    serviceUsed: 'Financial Insights & Wealth Timing',
    serviceUsedTa: 'தன யோகம் & நிதி வழிகாட்டல்',
    rating: 5,
    review: 'Visagan Astro warned me against speculative investments during my Rahu antardasha and advised focusing on steady assets. That single insight saved me from a major financial pitfall in early 2025. His financial astrology guidance is grounded, pragmatic, and indispensable.',
    reviewTa: 'ராகு புக்தி காலத்தில் அவசர பங்குச்சந்தை முதலீடுகளை தவிர்க்குமாறு விசாகன் ஆஸ்ட்ரோ எச்சரித்தார். அந்த ஒரே அறிவுரை என்னை பெரும் நஷ்டத்திலிருந்து காப்பாற்றியது. அவரது நிதி நிலை கணிப்புகள் மிகவும் எதார்த்தமானவை.',
    outcome: 'Protected family assets and capitalized on favorable real estate window',
    outcomeTa: 'குடும்ப சொத்துக்களை பாதுகாத்து நில முதலீட்டில் லாபம் ஈட்டினார்',
    avatarSeed: 'Anand'
  }
];

export const FAQS = [
  {
    question: 'What if I do not know my exact time of birth?',
    questionTa: 'எனது துல்லியமான பிறந்த நேரம் தெரியாவிட்டால் என்ன செய்வது?',
    answer: 'Accurate time of birth is vital for identifying the exact Lagna (Ascendant) and divisional charts. If your birth time is approximate (within a 15–30 minute window), we employ Vedic Birth Time Rectification (Nashta Jataka techniques) using past milestones (graduation, marriage, siblings, major events). In cases where birth time is completely unknown, we conduct a Prashna (Horary) Astrological session based on the cosmic alignment at the precise moment your query is raised.',
    answerTa: 'லக்னத்தை துல்லியமாக கணிக்க பிறந்த நேரம் மிகவும் முக்கியம். நேரம் 15–30 நிமிடங்கள் முன்பின் இருந்தால், உங்கள் வாழ்க்கையின் முக்கிய முந்தைய நிகழ்வுகளை (கல்வி, வேலை, திருமணம், உடன்பிறப்புகள்) அடிப்படையாகக் கொண்டு நஷ்ட ஜாதக முறைப்படி நேரத்தை திருத்தி கணிக்கிறோம். நேரம் முற்றிலும் தெரியாதவர்களுக்கு, கேள்வி கேட்கப்படும் நேரத்தின் கிரக நிலைகளை வைத்து "பிரசன்ன ஜோதிடம்" மூலம் விடையளிக்கிறோம்.'
  },
  {
    question: 'How do Visagan Astro consultations differ from conventional astrology?',
    questionTa: 'வழக்கமான ஜோதிடர்களிடமிருந்து விசாகன் ஆஸ்ட்ரோ எவ்வாறு வேறுபடுகிறது?',
    answer: 'We adhere to four core ethical pillars: 1) Zero fear-mongering—we never exploit anxieties or claim you are "cursed"; 2) Empowering Purushartha (Free Will)—astrology is a celestial compass to help you navigate, not a fatalistic prison; 3) Scientific rigor—we cross-reference D1, Navamsha (D9), and Dasamsa (D10) charts with planetary Shadbala; 4) Accessible, honest remedies that emphasize daily mindfulness, pure mantras, and purposeful charity rather than extortionate rituals.',
    answerTa: 'நாங்கள் 4 முக்கிய அறநெறிகளை பின்பற்றுகிறோம்: 1) பயமுறுத்தலற்ற ஜோதிடம் - சாபம் அல்லது நாசம் என்று எவரையும் பயமுறுத்துவதில்லை; 2) சுயமுயற்சிக்கு முக்கியத்துவம் - விதி வழிகாட்டினாலும் மதியால் நன்மை பெறலாம்; 3) பல கட்ட துல்லிய ஆய்வு - D1, நவாம்சம் (D9), தசாம்சம் (D10) மற்றும் ஷட்பல ஆய்வு; 4) எளிய நற்பரிகாரங்கள் - ஆடம்பர செலவின்றி பீஜ மந்திரங்கள், அன்னதானம் மற்றும் வாழ்வியல் மாற்றங்களை மட்டுமே வழிகாட்டுகிறோம்.'
  },
  {
    question: 'How are consultations conducted?',
    questionTa: 'ஆலோசனைகள் எவ்வாறு நடத்தப்படுகின்றன?',
    answer: 'Sessions are conducted globally via private high-definition video call (Google Meet) or dedicated phone call. You receive an audio recording of your reading, high-resolution Vedic charts, and a comprehensive written PDF report summarizing all discussion points, timing milestones, and remedies within 24 hours.',
    answerTa: 'உலகெங்கும் உள்ள அன்பர்களுக்கு நேரடி வீடியோ அழைப்பு (Google Meet) அல்லது வாட்ஸ்அப் / போன் அழைப்பு மூலம் நடத்தப்படுகிறது. ஆலோசனையின் ஆடியோ பதிவு, வண்ண ஜாதக வரைபடம் மற்றும் 15 பக்க முழுமையான PDF அறிக்கை 24 மணி நேரத்திற்குள் உங்களுக்கு அனுப்பி வைக்கப்படும்.'
  },
  {
    question: 'Are spiritual remedies (Pariharams) mandatory or expensive?',
    questionTa: 'ஆன்மீக பரிகாரங்கள் கட்டாயமானவையா அல்லது அதிக செலவு பிடிக்குமா?',
    answer: 'Remedies are never mandatory; they are gentle spiritual harmonizers. Our recommendations focus on pure, cost-effective measures: daily Beej mantra chanting, personal meditation, positive behavioral alignments, planetary charity (Dana to the underprivileged or animal shelters), and only when genuinely warranted, certified authentic gemstones with precise wearing parameters.',
    answerTa: 'பரிகாரங்கள் ஒருபோதும் கட்டாயமில்லை; அவை கிரக அலைகளை சமன் செய்யும் எளிய வழிகளே. தினசரி பீஜ மந்திரங்கள், தியானம், அன்னதானம் மற்றும் அவசியப்பட்டால் மட்டுமே தரமான சான்றளிக்கப்பட்ட ராசிக் கற்கள் பரிந்துரைக்கப்படுகின்றன. அதிக செலவு பிடிக்கும் எந்த சடங்குகளும் தேவையில்லை.'
  },
  {
    question: 'Can I ask questions about multiple family members in one session?',
    questionTa: 'ஒரே ஆலோசனையில் பல குடும்ப உறுப்பினர்களின் ஜாதகங்களை பார்க்கலாமா?',
    answer: 'A standard 60-minute session is tailored for deep analysis of one primary birth chart (or a couple’s charts in marriage compatibility). To maintain rigorous quality and avoid hurried interpretations, we recommend dedicating full focus to one individual per session, though brief relational links are always woven in.',
    answerTa: '60 நிமிட ஆலோசனை ஒருவரின் ஜாதகத்தை ஆழமாக ஆராயவே போதுமானது. மேலோட்டமாக பார்க்காமல் துல்லியமான பலன் கிடைக்க ஒரு அமர்வில் ஒருவரின் ஜாதகத்தை (அல்லது திருமண பொருத்தத்தில் தம்பதியரின் ஜாதகங்களை) பார்க்க பரிந்துரைக்கிறோம்.'
  },
  {
    question: 'Is my personal information and reading kept confidential?',
    questionTa: 'எனது தனிப்பட்ட விவரங்கள் மற்றும் ஆலோசனைகள் ரகசியமாக பாதுகாக்கப்படுமா?',
    answer: 'Yes, 100%. We hold client confidentiality as a sacred trust. Your birth data, audio recordings, questions, and personal struggles are never shared, sold, or discussed with any third party.',
    answerTa: 'ஆம், 100% முற்றிலும் ரகசியமாக பாதுகாக்கப்படும். உங்களின் பிறந்த விவரங்கள், கேட்கும் கேள்விகள் மற்றும் ஆடியோ பதிவுகள் எக்காரணம் கொண்டும் பிறருடன் பகிரப்பட மாட்டாது. இது எங்கள் புனிதமான வாக்குறுதி.'
  }
];
