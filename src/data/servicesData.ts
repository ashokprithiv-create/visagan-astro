import { ServiceDetail } from '../types';

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'birth-chart',
    title: 'Comprehensive Birth-Chart (Janma Kundli) Reading',
    titleTa: 'முழு ஜாதக கணிப்பு & பலன் (ஜன்ம குண்டலி ஆய்வு)',
    tagline: 'Your sacred cosmic blueprint decoded for lifelong clarity and direction.',
    taglineTa: 'வாழ்க்கை முழுவதும் வழிகாட்டும் உங்கள் தனித்துவமான வேத ஜாதக ரகசியங்கள்.',
    shortDescription: 'In-depth analysis of your Lagna (Ascendant), planetary placements, Maha Dashas, and karmic strengths across all twelve life houses.',
    shortDescriptionTa: 'லக்னம், ராசி, 12 பாவங்கள், கிரக அமைப்புகள், தசா புத்திகள் மற்றும் பூர்வ புண்ணிய பலன்களின் ஆழமான கணிப்பு.',
    fullDescription: 'Your birth chart (Janma Kundli) is the exact celestial snapshot of the cosmos at the precise moment you took your first breath. Through precise Vedic astrological calculations, we decipher your inherent constitution, planetary yogas, active Dashas, and karmic lessons. This session helps you understand why recurring patterns occur and illuminates your true life purpose (Dharma).',
    fullDescriptionTa: 'நீங்கள் பிறந்த தருணத்தில் வான்மண்டலத்தில் அமைந்திருந்த கிரக நிலைகளின் துல்லியமான படமே உங்கள் ஜன்ம ஜாதகம். உங்கள் லக்னம், நவாம்சம் (D9), நடப்பு தசா-புத்திகள் மற்றும் கிரக சேர்க்கைகளை ஆராய்ந்து, வாழ்வின் தடைகளுக்கான காரணங்களையும் எதிர்கால பாதையையும் தெளிவுபடுத்துகிறோம்.',
    iconName: 'Compass',
    duration: '60 Minutes',
    durationTa: '60 நிமிடங்கள்',
    badge: 'Foundation',
    badgeTa: 'அடிப்படை ஜாதகம்',
    accentColor: '#d4af37',
    deliverables: [
      '60-Minute 1-on-1 private video or phone consultation',
      'High-resolution calculated Vedic Natal Chart (D1 & D9 Navamsha)',
      '15-Page personalized PDF Kundli dossier with planetary strength table',
      'Timeline of major upcoming Maha Dasha & Antardasha transitions',
      'Direct audio recording of the consultation for future reference'
    ],
    deliverablesTa: [
      '60 நிமிட தனிப்பட்ட 1-on-1 வீடியோ அல்லது ஆடியோ ஆலோசனை',
      'உயர்தர ராசி (D1) மற்றும் நவாம்ச (D9) ஜாதக வரைபடம்',
      '15 பக்க விரிவான தமிழ்/ஆங்கில ஜாதக கணிப்பு PDF அறிக்கை',
      'எதிர்வரும் முக்கிய மகா தசா & அந்தர்தசா கால அட்டவணை',
      'ஆலோசனை உரையாடலின் முழுமையான ஆடியோ பதிவு'
    ],
    keyQuestionsAnswered: [
      'What is my primary soul purpose and life path according to my Lagna?',
      'Why am I experiencing delays or recurring friction in my current phase?',
      'What are my hidden planetary strengths that I have not yet tapped into?',
      'What does my active Dasha period signify for my next 3–5 years?'
    ],
    keyQuestionsAnsweredTa: [
      'எனது லக்னத்தின்படி எனது ஆன்மாவின் முதன்மை வாழ்க்கை நோக்கம் என்ன?',
      'தற்போது வாழ்வில் தடைகள் அல்லது இழுபறிகள் ஏற்பட கிரக காரணம் என்ன?',
      'எனது ஜாதகத்தில் உள்ள மறைமுக பலங்களும் யோகங்களும் என்ன?',
      'நடப்பு தசா புத்தி அடுத்த 3-5 ஆண்டுகளில் என்ன பலன்களைத் தரும்?'
    ],
    preparationNeeded: [
      'Exact date of birth (Day, Month, Year)',
      'Exact time of birth (with AM/PM; hospital birth certificate preferred)',
      'City and country of birth',
      '2–3 key life areas you wish to prioritize during the session'
    ],
    preparationNeededTa: [
      'துல்லியமான பிறந்த தேதி (நாள், மாதம், வருடம்)',
      'துல்லியமான பிறந்த நேரம் (காலை/மாலை குறிப்புடன்)',
      'பிறந்த ஊர் மற்றும் நாடு',
      'ஆலோசனையில் கேட்க விரும்பும் 2-3 முக்கிய கேள்விகள்'
    ],
    suitedFor: 'Anyone seeking deep self-awareness, undergoing a major life transition, or feeling lost about their overarching life direction.',
    suitedForTa: 'வாழ்க்கைப் பாதையில் தெளிவு தேவைப்படுவோர், முக்கிய முடிவெடுக்கும் தருணத்தில் இருப்போர் மற்றும் சுய முன்னேற்றம் விரும்புவோர்.'
  },
  {
    id: 'marriage-compatibility',
    title: 'Marriage Compatibility & Kundli Milan (Porutham)',
    titleTa: 'திருமணப் பொருத்தம் & 10 பொருத்தங்கள் (குண்டலி மிலன்)',
    tagline: 'Beyond superficial star counts: authentic synastry for enduring marital harmony.',
    taglineTa: 'வெறும் நட்சத்திர எண்ணிக்கைக்கு அப்பால்: இரு மனங்களின் நீடித்த அன்பும் நல்வாழ்வும்.',
    shortDescription: 'Comprehensive Vedic matching evaluating emotional resonance, psychological sync, family longevity, and Sevvai / Manglik dosha balancing.',
    shortDescriptionTa: 'பத்து பொருத்தங்கள், செவ்வாய் தோஷ சமநிலை, 7 & 8-ம் பாவ ஆயுள் பலம் மற்றும் இருவரின் உளவியல் ஒத்திசைவு பற்றிய ஆழமான ஆய்வு.',
    fullDescription: 'True Vedic marriage compatibility is far deeper than a simple numeric score. We examine the classic 10 Poruthams (or Ashta Koota 36 Gunas) alongside deep cross-chart synastry, examining the 7th house (partnership), 2nd house (family peace), 8th house (longevity), and Venus/Jupiter alignments to foster a joyful, enduring marital bond.',
    fullDescriptionTa: 'திருமணப் பொருத்தம் என்பது எண்களைக் கூட்டுவது மட்டுமல்ல. 10 பொருத்தங்கள், 7-ம் பாவம் (களத்திரம்), 2-ம் பாவம் (குடும்பம்), 8-ம் பாவம் (மாங்கல்ய பலம்), சுக்கிரன்-குரு நிலைகள் மற்றும் செவ்வாய் தோஷ பரிகாரங்களை முழுமையாக ஆராய்ந்து உறுதியான வழிகாட்டல் வழங்குகிறோம்.',
    iconName: 'HeartHandshake',
    duration: '60 Minutes',
    durationTa: '60 நிமிடங்கள்',
    badge: 'High Demand',
    badgeTa: 'முக்கிய சேவை',
    accentColor: '#e07a5f',
    deliverables: [
      '60-Minute joint or individual consultation covering both charts',
      'Ten Porutham (South Indian) & 36 Guna Milan (North Indian) breakdown',
      'In-depth evaluation of Manglik / Sevvai Dosha and Rahu-Ketu placements',
      'Emotional, temperamental, and physical compatibility analysis',
      'Mutual remedial measures to dissolve planetary friction before marriage'
    ],
    deliverablesTa: [
      'இரு ஜாதகங்களையும் விரிவாக ஆராயும் 60 நிமிட நேரடி ஆலோசனை',
      'தென்னிந்திய 10 பொருத்தங்கள் மற்றும் 36 குணங்கள் பற்றிய விரிவான விளக்கம்',
      'செவ்வாய் தோஷம் மற்றும் ராகு-கேது நிலைகள் குறித்த துல்லிய ஆய்வு',
      'தம்பதியரின் குண ஒற்றுமை, ஆயுள் பலம் மற்றும் வம்சவிருத்தி பகுப்பாய்வு',
      'திருமணத்திற்கு முந்தைய எளிய சாத்வீக பரிகார ஆலோசனைகள்'
    ],
    keyQuestionsAnswered: [
      'Are our communication styles, temperaments, and values aligned?',
      'How does Manglik / Sevvai Dosha affect our union and can it be balanced?',
      'What is our combined planetary potential for domestic prosperity?',
      'When is the most auspicious window (Muhurat) for tying the knot?'
    ],
    keyQuestionsAnsweredTa: [
      'இருவரின் குணங்களும் வாழ்க்கை லட்சியங்களும் இணக்கமாக உள்ளதா?',
      'செவ்வாய் தோஷம் உள்ளதா? அதற்கு நிவர்த்தி அமைந்திருக்கிறதா?',
      'இருவரின் கூட்டு ஜாதகத்தில் குடும்ப சுபீட்சம் மற்றும் தன யோகம் எப்படி உள்ளது?',
      'திருமண பந்தத்திற்கு உகந்த சுப முகூர்த்த காலங்கள் எவை?'
    ],
    preparationNeeded: [
      'Full birth details (Date, Exact Time, Place) for both individuals',
      'Current relationship status or marriage timeline',
      'Any specific parental or cultural considerations'
    ],
    preparationNeededTa: [
      'ஆண், பெண் இருவரின் துல்லியமான பிறந்த தேதி, நேரம், பிறந்த ஊர்',
      'தற்போதைய நிலை மற்றும் உத்தேசித்துள்ள திருமண காலம்',
      'குடும்பத்தினர் சார்ந்த ஏதேனும் குறிப்பிட்ட கேள்விகள்'
    ],
    suitedFor: 'Couples planning marriage, parents arranging matches, or individuals evaluating prospective life partners.',
    suitedForTa: 'திருமணத்திற்கு வரன் பார்க்கும் பெற்றோர், காதலில் உள்ளவர்கள் மற்றும் மறுமண முடிவெடுப்பவர்கள்.'
  },
  {
    id: 'career-guidance',
    title: 'Career, Vocation & Business Direction',
    titleTa: 'தொழில், உத்தியோகம் & வியாபார மேன்மை வழிகாட்டல்',
    tagline: 'Pinpoint your natural calling and time your professional moves with cosmic precision.',
    taglineTa: 'உங்கள் இயல்பான திறமைகளை அறிந்து உத்தியோகத்திலும் வியாபாரத்திலும் வெற்றி பெறுங்கள்.',
    shortDescription: 'Analyze your 10th House (Karma Bhava), Dasamsa (D10) divisional chart, and planetary periods to identify optimal vocations, job transitions, or entrepreneurship.',
    shortDescriptionTa: 'பத்தாம் பாவம் (கர்ம ஸ்தானம்), தசாம்சம் (D10) மற்றும் தசா புத்திகளை கணித்து வேலை மாற்றம், பதவி உயர்வு, தொழில் தொடங்குதல் வழிகாட்டல்.',
    fullDescription: 'Struggling with career stagnation, contemplating a radical career shift, or deciding whether to take the entrepreneurial plunge? Using the 10th house, Saturn (the taskmaster), Mercury (commerce), and the specialized D10 Dasamsa chart, we identify your natural professional aptitude, ideal industry niches, and the exact astrological windows for promotions, job switches, or enterprise launches.',
    fullDescriptionTa: 'வேலையில் தேக்கநிலை, புதிய தொழில் தொடங்கலாமா என்ற குழப்பம், வெளிநாட்டு வேலை வாய்ப்பு அல்லது பதவி உயர்வு எப்போது கிடைக்கும்? பத்தாம் பாவம், சனி மற்றும் புதனின் நிலைகள் மற்றும் தசாம்சம் (D10) மூலம் உங்கள் தொழில் பலன்களை கணிக்கிறோம்.',
    iconName: 'Briefcase',
    duration: '45–60 Minutes',
    durationTa: '45–60 நிமிடங்கள்',
    badge: 'Clarity Focus',
    badgeTa: 'வெற்றி வழிகாட்டல்',
    accentColor: '#3b82f6',
    deliverables: [
      'Dedicated 10th House (Karma) & D10 Dasamsa career chart analysis',
      'Assessment of Job (service) vs. Independent Business (entrepreneurship)',
      'Timeline for promotions, job offers, relocation, or contract renewals',
      'Identification of peak planetary transits (Jupiter & Saturn blessings)',
      'Actionable workplace harmony mantras & yantras'
    ],
    deliverablesTa: [
      'பத்தாம் பாவம் மற்றும் D10 தசாம்ச தொழில் ஜாதக ஆய்வு',
      'உத்தியோகம் (Job) சிறந்ததா அல்லது சொந்த தொழில் (Business) உகந்ததா?',
      'பதவி உயர்வு, வேலை மாற்றம், வெளிநாட்டு பயணம் அமைய உகந்த காலம்',
      'குரு மற்றும் சனி பெயர்ச்சி தரும் அனுகூல பலன்கள்',
      'பணியிடத்தில் சுமுக நிலையை உருவாக்கும் எளிய நற்பரிகாரங்கள்'
    ],
    keyQuestionsAnswered: [
      'Should I stay in my current job, seek a promotion, or venture into business?',
      'When is the most auspicious window to negotiate salary or switch roles?',
      'Which industries and roles align with my natural planetary strengths?',
      'How can I navigate workplace politics or challenging bosses during difficult transits?'
    ],
    keyQuestionsAnsweredTa: [
      'தற்போதைய வேலையில் நீடிப்பதா அல்லது புதிய முயற்சி தொடங்குவதா?',
      'வேலை மாற்றம் அல்லது சம்பள உயர்வுக்கு உகந்த காலம் எப்போது?',
      'எனது ஜாதகத்திற்கு ஏற்ற சரியான தொழில் மற்றும் துறை எது?',
      'பணியிட சவால்களை வெல்ல கிரக ரீதியான உதவிகள் என்ன?'
    ],
    preparationNeeded: [
      'Exact birth date, time, and city',
      'Current profession, educational background, and target career goals',
      'Specific questions on job transitions or business projects'
    ],
    preparationNeededTa: [
      'துல்லியமான பிறந்த தேதி, நேரம் மற்றும் ஊர்',
      'தற்போதைய தொழில் அல்லது கல்வித் தகுதி',
      'வேலை அல்லது வியாபாரம் குறித்த குறிப்பிட்ட சந்தேகங்கள்'
    ],
    suitedFor: 'Working professionals, students choosing higher education fields, entrepreneurs, and career changers.',
    suitedForTa: 'பணிபுரிவோர், தொழில் முனைவோர், உயர்கல்வி தேர்வு செய்வோர் மற்றும் தொழில் மாற்றம் விரும்புவோர்.'
  },
  {
    id: 'financial-insights',
    title: 'Financial Insights & Wealth Timing',
    titleTa: 'தன யோகம் & நிதி மேலாண்மை வழிகாட்டல்',
    tagline: 'Unlock Dhana Yogas and align investments with favorable planetary cycles.',
    taglineTa: 'தன யோகங்களை அறிந்து முதலீடுகளையும் சேமிப்பையும் பெருக்கும் கிரக வழிகாட்டல்.',
    shortDescription: 'Deep dive into 2nd (wealth accumulation), 11th (gains/cashflow), and 9th (fortune) houses to maximize prosperity and minimize financial risks.',
    shortDescriptionTa: 'இரண்டாம் பாவம் (தன ஸ்தானம்), 11-ம் பாவம் (லாப ஸ்தானம்), 9-ம் பாவம் (பாக்ய ஸ்தானம்) மற்றும் லக்ஷ்மி யோகங்களின் கணிப்பு.',
    fullDescription: 'Wealth in Vedic astrology is governed by the Dhana (wealth) houses and specific planetary combinations called Dhana Yogas. We analyze your chart to reveal how wealth enters your life, whether you thrive through steady savings, speculative investments, real estate, or international trade, and which planetary cycles caution against high-risk ventures.',
    fullDescriptionTa: 'செல்வம், சொத்து சேர்க்கை மற்றும் வரவு-செலவுகளை தீர்மானிக்கும் தன யோகங்கள் உங்கள் ஜாதகத்தில் எங்கு அமைந்துள்ளன? ரியல் எஸ்டேட், பங்குச்சந்தை, தங்கம் அல்லது வணிக முதலீடுகளில் உங்களுக்கு லாபம் தரும் வழிகளை அடையாளம் காண்கிறோம்.',
    iconName: 'Coins',
    duration: '45 Minutes',
    durationTa: '45 நிமிடங்கள்',
    badge: 'Prosperity',
    badgeTa: 'தன யோகம்',
    accentColor: '#10b981',
    deliverables: [
      'Comprehensive Dhana Yoga & Laxmi Yoga audit of your birth chart',
      'Analysis of 2nd house (assets), 11th house (income), and 12th house (expenditures)',
      'Favorable planetary periods for asset purchases, property, and investments',
      'Cautionary transit warnings to avoid speculative losses or debt traps',
      'Personalized prosperity remedies (Kuber / Lakshmi mantras & charity recommendations)'
    ],
    deliverablesTa: [
      'ஜாதகத்தில் உள்ள தன யோகங்கள் மற்றும் லக்ஷ்மி யோகங்களின் முழு ஆய்வு',
      '2-ம் பாவம் (தனம்), 11-ம் பாவம் (லாபம்), 12-ம் பாவம் (விரயம்) பகுப்பாய்வு',
      'வீடு, மனை, வாகனம் மற்றும் சொத்துக்கள் வாங்க உகந்த சுப காலங்கள்',
      'கடன் மற்றும் நஷ்டங்களை தவிர்க்கும் எச்சரிக்கை வழிகாட்டுதல்',
      'செல்வ வளம் அருளும் குபேர, லக்ஷ்மி மந்திரங்கள் மற்றும் தான வழிகாட்டல்'
    ],
    keyQuestionsAnswered: [
      'What are my key planetary wealth triggers and how can I activate them?',
      'Is real estate, equity, gold, or business the best investment avenue for my chart?',
      'Why is there persistent cash outflow or leakage despite good earnings?',
      'When is my next lucrative financial upswing according to planetary transits?'
    ],
    keyQuestionsAnsweredTa: [
      'எனது ஜாதகத்தில் தன யோகத்தை செயல்படுத்தும் கிரகங்கள் எவை?',
      'ரியல் எஸ்டேட், தங்கம் அல்லது பங்குச் சந்தை - எனக்கு லாபம் தருவது எது?',
      'வருமானம் இருந்தும் சேமிக்க முடியாமல் விரயம் ஆவது ஏன்?',
      'எனது அடுத்த நிதி ஏற்ற காலம் எப்போது தொடங்குகிறது?'
    ],
    preparationNeeded: [
      'Exact birth details (Date, Time, Place)',
      'Current financial context (salaried, business, investment focus)',
      'Immediate financial decisions being weighed (e.g. home purchase, partnership)'
    ],
    preparationNeededTa: [
      'துல்லியமான பிறந்த தேதி, நேரம் மற்றும் இடம்',
      'தற்போதைய பொருளாதார நிலை',
      'முடிவெடுக்க வேண்டிய குறிப்பிட்ட முதலீடு அல்லது சொத்து விவரங்கள்'
    ],
    suitedFor: 'Individuals planning significant investments, property acquisitions, retirement planning, or overcoming financial stagnancy.',
    suitedForTa: 'சொத்து வாங்குவோர், நிதி முதலீட்டாளர்கள், கடன் சுமையிலிருந்து விடுபட விரும்புவோர்.'
  },
  {
    id: 'relationship-guidance',
    title: 'Relationship & Family Harmony Guidance',
    titleTa: 'குடும்ப அமைதி & உறவுகள் நல்லிணக்கம்',
    tagline: 'Heal interpersonal conflicts and cultivate emotional peace through astrological clarity.',
    taglineTa: 'கருத்து வேறுபாடுகளைக் களைந்து குடும்பத்திலும் உறவுகளிலும் மன நிம்மதி பெறுங்கள்.',
    shortDescription: 'Examine 7th house dynamics, Venus-Mars synergies, planetary transit friction, and remedies to dissolve recurring relationship patterns.',
    shortDescriptionTa: 'களத்திர பாவம், சுக ஸ்தானம் (4-ம் பாவம்), குடும்ப ஸ்தானம் (2-ம் பாவம்) மற்றும் உறவு விரிசல்களை சீராக்கும் ஆன்மீக ஆலோசனைகள்.',
    fullDescription: 'Relationships are the ultimate mirrors of our karmic evolution. When miscommunication, emotional distance, or family disputes persist, planetary friction—such as an active Rahu transit over the 7th house or Saturn’s testing gaze—is often at play. We provide empathetic, constructive guidance to help you understand your emotional triggers, bridge interpersonal divides, and restore warmth.',
    fullDescriptionTa: 'குடும்பத்தில் ஏற்படும் மனக்கசப்புகள், தம்பதியர் இடையே இடைவெளி அல்லது குடும்ப உறுப்பினர்களிடையே கருத்து வேறுபாடுகள் கிரக பெயர்ச்சிகளாலும் கர்மா அமைப்புகளாலும் தூண்டப்படலாம். அவற்றை புரிந்துகொண்டு அன்பையும் சமாதானத்தையும் மீட்டெடுக்க உதவுகிறோம்.',
    iconName: 'Users',
    duration: '50 Minutes',
    durationTa: '50 நிமிடங்கள்',
    badge: 'Healing',
    badgeTa: 'குடும்ப ஒற்றுமை',
    accentColor: '#ec4899',
    deliverables: [
      'Deep exploration of the 7th, 4th (domestic peace), and 2nd (family speech) houses',
      'Karmic relationship pattern identification and emotional temperament mapping',
      'Practical astrological timeline of conflict resolution and relationship stabilization',
      'Compassionate communication cues rooted in planetary traits',
      'Gentle remedies to pacify afflicted relationship significators'
    ],
    deliverablesTa: [
      '7-ம் பாவம், 4-ம் பாவம் (சுகம்) மற்றும் 2-ம் பாவம் (வாக்கு) ஆழமான ஆய்வு',
      'உறவுகளில் ஏற்படும் கர்மா தடைகளை கண்டறிந்து சமன் செய்யும் முறை',
      'குடும்ப அமைதி திரும்புவதற்கான ஜோதிட கால அட்டவணை',
      'பரஸ்பர புரிதலை வளர்க்கும் உளவியல் & ஆன்மீக அணுகுமுறை',
      'பாதிக்கப்பட்ட கிரகங்களை சாந்திப்படுத்தும் எளிய நற்பரிகாரங்கள்'
    ],
    keyQuestionsAnswered: [
      'Why do I attract recurring relationship patterns and how can I break them?',
      'How can I resolve ongoing friction or coldness with my spouse or family members?',
      'When will my personal relationship experience emotional peace and stability?',
      'What remedies can soothe domestic tension and bring harmonious vibrations?'
    ],
    keyQuestionsAnsweredTa: [
      'உறவுகளில் மீண்டும் மீண்டும் தவறான புரிதல்கள் ஏற்படுவது ஏன்?',
      'துணைவருடன் அல்லது குடும்பத்தினருடன் மனக்கசப்புகளை எப்படி தீர்ப்பது?',
      'குடும்பத்தில் எப்போது முழுமையான மன நிம்மதியும் மகிழ்ச்சியும் நிலவும்?',
      'வீட்டில் அமைதியை நிலைநாட்டும் சாத்வீக வழிமுறைகள் யாவை?'
    ],
    preparationNeeded: [
      'Your birth details (and partner’s or family member’s details if available)',
      'Summary of the emotional hurdle or conflict you wish to address'
    ],
    preparationNeededTa: [
      'உங்கள் பிறந்த விவரங்கள் (முடிந்தால் துணைவர்/குடும்பத்தினரின் விவரங்கள்)',
      'நீங்கள் தீர்க்க விரும்பும் பிரச்சனையின் சுருக்கம்'
    ],
    suitedFor: 'Spouses experiencing distance, singles struggling to sustain relationships, or family members dealing with ongoing tension.',
    suitedForTa: 'தம்பதியரிடையே நல்லிணக்கம் விரும்புவோர், குடும்ப உறவுகளில் அமைதி நாடுவோர்.'
  },
  {
    id: 'spiritual-remedies',
    title: 'Authentic Spiritual Remedies & Planetary Pariharam',
    titleTa: 'வேத நற்பரிகாரங்கள் & கிரக சாந்தி (பரிகாரம்)',
    tagline: 'Practical, ethical remedial measures rooted in sacred Vedic traditions—free from fear.',
    taglineTa: 'பயமுறுத்தலற்ற, எளிய, முறையான சாத்வீக வேத பரிகாரங்கள் மற்றும் மந்திர ஆலோசனைகள்.',
    shortDescription: 'Customized recommendations for authentic energized gemstones, sacred Beej mantras, charity (Dana), yantras, and personal lifestyle alignments.',
    shortDescriptionTa: 'அதிர்ஷ்ட ரத்தினக் கற்கள், சக்திவாய்ந்த பீஜ மந்திரங்கள், தான முறைகள் மற்றும் ஏழரை சனி/ராகு-கேது தோஷ நிவாரண வழிகாட்டல்.',
    fullDescription: 'In Vedic astrology, remedies (Parihara) are not superstitious fixes or magic wands; they are spiritual harmonizers designed to balance elemental energies and pacify afflicted planetary frequencies. Visagan Astro stands firmly against fear-mongering and extortionate rituals. We prescribe authentic, accessible remedies including specific Beej mantras, gemstone guidance with certified parameters, purposeful charity, and mindfulness practices.',
    fullDescriptionTa: 'வேத ஜோதிடத்தில் பரிகாரம் என்பது பயத்தை ஏற்படுத்தும் மூடநம்பிக்கை அல்ல; அது பிரபஞ்ச அலைவரிசையை நமக்கு சாதகமாக மாற்றும் உயர்ந்த ஆன்மீக அறிவியல். அதிக செலவில்லாத எளிய பீஜ மந்திர ஜபம், தகுதிவாய்ந்த ரத்தினங்கள் மற்றும் தான தர்மங்கள் மூலம் கிரக தோஷங்களை வெல்ல வழிகாட்டுகிறோம்.',
    iconName: 'Sparkles',
    duration: '45 Minutes',
    durationTa: '45 நிமிடங்கள்',
    badge: 'Ethical & Pure',
    badgeTa: 'தூய நற்பரிகாரம்',
    accentColor: '#8b5cf6',
    deliverables: [
      'Personalized Vedic Remedial Dossier tailored strictly to your Janma Kundli',
      'Certified Gemstone recommendation (Weight, Metal, Finger, Auspicious wearing Muhurat)',
      'Exact Beej Mantras with phonetic pronunciation and chanting count guidelines',
      'Targeted planetary charity (Dana) instructions aligned with afflicted Grahas',
      'Simple daily lifestyle adjustments (color therapy, dietary alignments, sacred geometry)'
    ],
    deliverablesTa: [
      'உங்கள் ஜாதகத்திற்கு மட்டுமேயான தனித்துவமான பரிகார வழிகாட்டல் அறிக்கை',
      'உரிய அதிர்ஷ்ட ரத்தினக் கல் பரிந்துரை (காரட் எடை, உலோகம், விரல், அணியும் முகூர்த்தம்)',
      'சரியான உச்சரிப்பு மற்றும் எண்ணிக்கை கொண்ட வேத பீஜ மந்திரங்கள்',
      'தோஷம் போக்கும் உகந்த தான-தர்ம நெறிமுறைகள்',
      'மன அமைதி தரும் அன்றாட வாழ்வியல் நெறிமுறைகள் மற்றும் வழிபாட்டு முறைகள்'
    ],
    keyQuestionsAnswered: [
      'Which gemstone is truly safe and auspicious for my Ascendant and current Dasha?',
      'What simple daily mantras can calm mental restlessness and anxiety?',
      'How can I pacify Sade Sati, Manglik Dosha, or Rahu-Ketu transit without fear?',
      'What specific charitable acts will directly alleviate karmic planetary blockages?'
    ],
    keyQuestionsAnsweredTa: [
      'எனது லக்னத்திற்கும் தசா புக்திக்கும் எந்த ரத்தினம் உண்மையான நற்பலனைத் தரும்?',
      'மன அமைதியையும் தைரியத்தையும் தரும் எளிய மந்திரங்கள் எவை?',
      'ஏழரை சனி, அஷ்டம சனி, செவ்வாய் அல்லது ராகு-கேது தோஷங்களை பயமின்றி எப்படி எதிர்கொள்வது?',
      'கர்ம வினைகளை தணிக்கும் தான தர்மங்கள் யாவை?'
    ],
    preparationNeeded: [
      'Accurate birth date, time, and place',
      'List of ongoing challenges (health, career, relationships, mental peace)',
      'Any gemstones or remedies currently being practiced'
    ],
    preparationNeededTa: [
      'துல்லியமான பிறந்த தேதி, நேரம் மற்றும் இடம்',
      'தற்போது சந்திக்கும் முக்கிய சவால்கள் (ஆரோக்கியம், தொழில், மன அமைதி)',
      'ஏற்கனவே ஏதேனும் பரிகாரம் அல்லது ரத்தினம் அணிந்துள்ளீர்களா என்ற விவரம்'
    ],
    suitedFor: 'Seekers experiencing heavy planetary periods (Sade Sati, Rahu Mahadasha, Ashtama Shani) seeking pure, ethical peace of mind.',
    suitedForTa: 'ஏழரை சனி, ராகு-கேது தசை, அஷ்டம சனி போன்ற கடின காலங்களில் இருப்போர் மற்றும் மன நிம்மதி நாடுவோர்.'
  }
];
