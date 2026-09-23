import { CONTACT_INFO } from '../src/data/contactInfo.js';
import { SERVICES_LIST } from '../src/data/servicesData.js';
import { FAQS } from '../src/data/astrologyData.js';

function buildKnowledgeBase(): string {
  const sections: string[] = [];

  sections.push(
    [
      '### Company',
      '- Name: Visagan Astro',
      '- Astrology service provider based in Chennai, Tamil Nadu, India.',
      `- Reach: ${CONTACT_INFO.addressEn}`,
      `- Working hours: ${CONTACT_INFO.workingHoursEn}`,
      `- Phone / WhatsApp: ${CONTACT_INFO.displayPhone} (${CONTACT_INFO.whatsappUrl})`,
      `- Email: ${CONTACT_INFO.email}`,
    ].join('\n')
  );

  sections.push(
    [
      '### Booking format',
      '- Consultations are conducted via private video call (Google Meet) or phone/voice call.',
      '- Clients receive an audio recording of the reading, a Vedic chart, and a written PDF report summarizing the consultation and remedies, typically within 24 hours.',
    ].join('\n')
  );

  sections.push(
    [
      '### Birth details required for a consultation',
      '- Exact date of birth (day, month, year)',
      '- Exact time of birth (AM/PM; hospital birth certificate preferred if available)',
      '- City and country of birth',
    ].join('\n')
  );

  const serviceChunks = SERVICES_LIST.map((service) => {
    return [
      `### Service: ${service.title}`,
      `- Tagline: ${service.tagline}`,
      `- Description: ${service.shortDescription}`,
      `- Typical session length: ${service.duration}`,
      `- Suited for: ${service.suitedFor}`,
      `- What's included: ${service.deliverables.join('; ')}`,
      `- Preparation needed: ${service.preparationNeeded.join('; ')}`,
    ].join('\n');
  });
  sections.push(...serviceChunks);

  const faqChunks = FAQS.map((faq) => `### FAQ: ${faq.question}\n${faq.answer}`);
  sections.push(...faqChunks);

  return sections.join('\n\n');
}

export const KNOWLEDGE_BASE = buildKnowledgeBase();
