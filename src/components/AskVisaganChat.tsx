import React, { useEffect, useRef, useState } from 'react';
import { X, Send, Sparkles, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CONTACT_INFO } from '../data/contactInfo';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const GREETING_EN =
  "Vanakkam! I'm Ask Visagan. I can help with questions about our astrology consultations, services, and bookings. How can I help you today?";
const GREETING_TA =
  'வணக்கம்! நான் Ask Visagan. எங்கள் ஜோதிட ஆலோசனைகள், சேவைகள் மற்றும் முன்பதிவு குறித்த கேள்விகளுக்கு உதவ முடியும். இன்று உங்களுக்கு எப்படி உதவலாம்?';

export const AskVisaganChat: React.FC = () => {
  const { isTamil } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: isTamil ? GREETING_TA : GREETING_EN },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', text }];
    setMessages(nextMessages);
    setInput('');
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong.');
      }

      setMessages((prev) => [...prev, { role: 'model', text: data.reply }]);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again in a moment.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Ask Visagan chat"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e5c158] text-[#0b0f1a] font-semibold shadow-lg shadow-black/40 hover:shadow-xl hover:scale-105 transition-all duration-200 px-4 py-3.5 sm:px-5"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
        <span className="hidden sm:inline text-sm">Ask Visagan</span>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm h-[70vh] max-h-[560px] flex flex-col rounded-2xl overflow-hidden border border-[#2b3b5c] bg-[#0b101e] shadow-2xl shadow-black/50">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3.5 bg-[#0d1527] border-b border-[#1b263c]">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#d4af37] to-[#e5c158] flex items-center justify-center shrink-0">
              <Sparkles className="w-4.5 h-4.5 text-[#0b0f1a]" />
            </div>
            <div className="min-w-0">
              <div className="font-cinzel text-sm font-bold text-[#f4f7fb] truncate">Ask Visagan</div>
              <div className="text-[11px] text-[#9ca3af]">Visagan Astro support</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="ml-auto p-1.5 rounded-full text-[#9ca3af] hover:text-[#f4f7fb] hover:bg-[#182338] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-[#d4af37] text-[#0b0f1a] rounded-br-sm'
                      : 'bg-[#131d32] text-[#e8ecf4] border border-[#1b263c] rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 bg-[#131d32] border border-[#1b263c] rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-xs text-[#9ca3af]">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="text-[11px] text-[#f87171] bg-[#2a1418] border border-[#4a2028] rounded-xl px-3 py-2">
                {error} You can also reach us directly on{' '}
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#f4f7fb]"
                >
                  WhatsApp
                </a>
                .
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-[#1b263c] p-3 bg-[#0d1527]">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                rows={1}
                className="flex-1 resize-none bg-[#0a101f] border border-[#1b263c] focus:border-[#d4af37]/60 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#e8ecf4] placeholder-[#5b6b86] outline-none max-h-24"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="shrink-0 w-10 h-10 rounded-xl bg-[#d4af37] text-[#0b0f1a] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:brightness-110 transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
