import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQS } from '../data/astrologyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { CONTACT_INFO } from '../data/contactInfo';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, isTamil } = useLanguage();
  const t = TRANSLATIONS[language];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131d32] border border-[#d4af37]/30 text-xs font-semibold text-[#e5c158] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>{t.faqBadge}</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#f4f7fb] mb-4">
            {t.faqTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af]">
            {t.faqSubtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const question = isTamil && faq.questionTa ? faq.questionTa : faq.question;
            const answer = isTamil && faq.answerTa ? faq.answerTa : faq.answer;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0d1527] border-[#d4af37]/40 shadow-md'
                    : 'bg-[#0a101f] border-[#1b263c] hover:border-[#2a3a5a]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold text-[#f4f7fb]">
                    {question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#1e2a44] text-[#d4af37]' : 'text-[#9ca3af]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#9ca3af] leading-relaxed border-t border-[#182338]/60">
                    <p>{answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b1220] border border-[#1b2840] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-[#f4f7fb]">
              {t.faqHelpTitle}
            </div>
            <div className="text-xs text-[#9ca3af]">
              {t.faqHelpSubtitle}
            </div>
          </div>
          <a
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#f4f7fb] bg-[#162035] hover:bg-[#202d4a] border border-[#2b3b5c] transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#10b981]" />
            <span>{t.faqChatWhatsapp}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
