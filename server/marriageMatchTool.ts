import { calculateVedicInsights, calculateMarriageCompatibility } from '../src/data/astrologyData.js';

export const MARRIAGE_MATCH_FUNCTION_NAME = 'calculate_marriage_compatibility';

export interface MarriageMatchArgs {
  groomName?: string;
  groomDob: string;
  groomTob: string;
  groomPob: string;
  brideName?: string;
  brideDob: string;
  brideTob: string;
  bridePob: string;
}

// OpenAI-compatible tool schema (OpenRouter's chat completions API follows
// the OpenAI function-calling format: { type: 'function', function: {...} }).
export const marriageMatchToolSchema = {
  type: 'function' as const,
  function: {
    name: MARRIAGE_MATCH_FUNCTION_NAME,
    description:
      "Runs Visagan Astro's own traditional 10-Porutham Vedic marriage compatibility engine for a groom and bride and returns a compatibility percentage and verdict. Only call this once you have collected the date of birth, time of birth, and place of birth for BOTH the groom and the bride. Ask the customer for any of these fields that are still missing before calling this function.",
    parameters: {
      type: 'object',
      properties: {
        groomName: { type: 'string', description: "Groom's name. Use 'Groom' if the customer did not give one." },
        groomDob: { type: 'string', description: "Groom's date of birth, formatted YYYY-MM-DD." },
        groomTob: { type: 'string', description: "Groom's time of birth, 24-hour HH:MM." },
        groomPob: { type: 'string', description: "Groom's place of birth (city)." },
        brideName: { type: 'string', description: "Bride's name. Use 'Bride' if the customer did not give one." },
        brideDob: { type: 'string', description: "Bride's date of birth, formatted YYYY-MM-DD." },
        brideTob: { type: 'string', description: "Bride's time of birth, 24-hour HH:MM." },
        bridePob: { type: 'string', description: "Bride's place of birth (city)." },
      },
      required: ['groomDob', 'groomTob', 'groomPob', 'brideDob', 'brideTob', 'bridePob'],
    },
  },
};

export function runMarriageMatch(args: MarriageMatchArgs) {
  const groom = calculateVedicInsights(
    args.groomName || 'Groom',
    args.groomDob,
    args.groomTob,
    args.groomPob,
    'marriage compatibility'
  );
  const bride = calculateVedicInsights(
    args.brideName || 'Bride',
    args.brideDob,
    args.brideTob,
    args.bridePob,
    'marriage compatibility'
  );

  const result = calculateMarriageCompatibility(groom.nakshatra, groom.rashi, bride.nakshatra, bride.rashi);

  return {
    groomStar: groom.nakshatra,
    groomRashi: groom.rashi,
    brideStar: bride.nakshatra,
    brideRashi: bride.rashi,
    totalScore: result.totalScore,
    maxScore: result.maxScore,
    percentage: result.percentage,
    verdict: result.verdict,
    maritalHarmonySummary: result.maritalHarmonySummary,
    doshaNotes: result.doshaNotes,
    remedyRecommendation: result.remedyRecommendation,
  };
}
