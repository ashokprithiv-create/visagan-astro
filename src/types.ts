export type ServiceId = 
  | 'birth-chart'
  | 'marriage-compatibility'
  | 'career-guidance'
  | 'financial-insights'
  | 'relationship-guidance'
  | 'spiritual-remedies';

export interface ServiceDetail {
  id: ServiceId;
  title: string;
  titleTa?: string;
  tagline: string;
  taglineTa?: string;
  shortDescription: string;
  shortDescriptionTa?: string;
  fullDescription: string;
  fullDescriptionTa?: string;
  iconName: string;
  duration: string;
  durationTa?: string;
  deliverables: string[];
  deliverablesTa?: string[];
  keyQuestionsAnswered: string[];
  keyQuestionsAnsweredTa?: string[];
  preparationNeeded: string[];
  preparationNeededTa?: string[];
  suitedFor: string;
  suitedForTa?: string;
  badge?: string;
  badgeTa?: string;
  accentColor: string;
}

export interface BookingFormData {
  serviceId: ServiceId;
  consultationType: 'video' | 'phone' | 'written_report';
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  timeOfBirth: string;
  isTimeAccurate: boolean;
  placeOfBirth: string;
  preferredLanguage: 'English' | 'Tamil' | 'Hindi';
  preferredDate: string;
  preferredTimeSlot: string;
  primaryQuestions: string;
  partnerDetails?: {
    partnerName: string;
    partnerDob: string;
    partnerTob: string;
    partnerPob: string;
  };
}

export interface KundliResult {
  name: string;
  dob: string;
  tob: string;
  pob: string;
  lagna: string;
  lagnaTa?: string;
  lagnaLord: string;
  lagnaLordTa?: string;
  rashi: string;
  rashiTa?: string;
  rashiLord: string;
  rashiLordTa?: string;
  nakshatra: string;
  nakshatraTa?: string;
  nakshatraPada: number;
  nakshatraLord: string;
  nakshatraLordTa?: string;
  currentDasha: string;
  currentDashaTa?: string;
  dashaPeriod: string;
  element: string;
  elementTa?: string;
  nature: string;
  natureTa?: string;
  coreStrengths: string[];
  coreStrengthsTa?: string[];
  growthAreas: string[];
  growthAreasTa?: string[];
  currentCosmicPhase: string;
  guidanceSummary: string;
  guidanceSummaryTa?: string;
  housesHighlight: {
    houseNumber: number;
    name: string;
    nameTa?: string;
    sign: string;
    signTa?: string;
    significance: string;
    significanceTa?: string;
    influence: string;
    influenceTa?: string;
  }[];
}

export interface CompatibilityResult {
  boyStar: string;
  boySign: string;
  girlStar: string;
  girlSign: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  verdict: 'Highly Auspicious & Harmonious' | 'Very Good Compatibility' | 'Moderate (Remedies Advised)' | 'Requires In-Depth Vedic Analysis';
  verdictTa?: string;
  poruthamBreakdown: {
    name: string;
    tamilName?: string;
    englishMeaning: string;
    status: 'Matched' | 'Partial' | 'Not Matched';
    significance: string;
    significanceTa?: string;
    description: string;
    descriptionTa?: string;
  }[];
  maritalHarmonySummary: string;
  maritalHarmonySummaryTa?: string;
  doshaNotes: string;
  doshaNotesTa?: string;
  remedyRecommendation: string;
  remedyRecommendationTa?: string;
}

export interface PanchangInfo {
  dateFormatted: string;
  dateFormattedTa?: string;
  tithi: string;
  tithiTa?: string;
  nakshatra: string;
  nakshatraTa?: string;
  yoga: string;
  yogaTa?: string;
  karana: string;
  karanaTa?: string;
  sunrise: string;
  sunset: string;
  rahuKalam: string;
  yamagandam: string;
  gulikaKalam: string;
  abhijitMuhurat: string;
  planetaryTransits: {
    planet: string;
    planetTa?: string;
    currentSign: string;
    currentSignTa?: string;
    motion: 'Direct' | 'Retrograde';
    motionTa?: string;
    insight: string;
    insightTa?: string;
  }[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  locationTa?: string;
  serviceUsed: string;
  serviceUsedTa?: string;
  rating: number;
  review: string;
  reviewTa?: string;
  outcome: string;
  outcomeTa?: string;
  avatarSeed: string;
}

export interface FAQItem {
  question: string;
  questionTa?: string;
  answer: string;
  answerTa?: string;
}

