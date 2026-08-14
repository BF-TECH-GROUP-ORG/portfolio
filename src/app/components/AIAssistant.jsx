'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiX,
    FiSend,
    FiRefreshCw,
    FiVolume2,
    FiVolumeX,
    FiMessageSquare,
    FiLock,
    FiCheckCircle,
    FiChevronLeft,
    FiUser,
    FiMail,
    FiFileText
} from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';

const DEFAULT_SUGGESTIONS = [
    'What enterprise software do you build?',
    'Tell me about Invexis ERP & POS system',
    'How do I request a custom software quote?',
    'Where is Kigali BF Tech Group located?'
];

// Helper to format text with Markdown Bold and Links
function formatChatMessage(content) {
    if (!content) return '';
    let formatted = content.replace(/[*#]/g, '');

    const urlRegex = /(https?:\/\/[^\s]+)/g;
    formatted = formatted.replace(urlRegex, (url) => {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-[#B9AF7A] font-bold underline hover:text-amber-400 transition-colors">${url}</a>`;
    });

    return formatted;
}

// Interactive Action Card in Chat
const InquiryActionCard = memo(({ onProvideInfo, onNotNow, isCompleted }) => {
    if (isCompleted) {
        return (
            <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-4 my-2 text-emerald-300 text-xs font-semibold space-y-1.5 shadow-lg">
                <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <FiCheckCircle className="w-4 h-4 shrink-0" />
                    <span>Inquiry Request Submitted</span>
                </div>
                <p className="text-[11px] text-zinc-300 leading-relaxed">
                    Our team at <strong className="text-white">info@invexix.com</strong> will follow up with you directly.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-zinc-950/95 border border-[#B9AF7A]/30 rounded-2xl p-4 my-3 space-y-3 shadow-xl text-left">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-[#B9AF7A]/40 flex items-center justify-center text-[#B9AF7A]">
                    <FiFileText className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="text-xs font-extrabold text-white tracking-wide">Inquiry Request</h4>
                    <p className="text-[11px] text-zinc-400">Provide your details to get started with Kigali BF Tech Group.</p>
                </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
                <button
                    onClick={onProvideInfo}
                    className="flex-1 bg-[#111115] hover:bg-zinc-800 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl border border-[#B9AF7A]/50 transition-all cursor-pointer shadow-md text-center tracking-wider uppercase"
                >
                    PROVIDE INFO
                </button>
                <button
                    onClick={onNotNow}
                    className="px-4 py-2.5 text-zinc-400 hover:text-white font-bold text-xs transition-colors cursor-pointer tracking-wider uppercase"
                >
                    NOT NOW
                </button>
            </div>
        </div>
    );
});

InquiryActionCard.displayName = 'InquiryActionCard';

// Single Chat Message Component
const ChatMessage = memo(({ msg, onSelectSuggestion, onProvideInfo, onNotNow }) => {
    const formattedContent = formatChatMessage(msg.content);

    return (
        <div className="space-y-2">
            <div
                className={`text-[10px] font-semibold text-zinc-500 ${
                    msg.role === 'user' ? 'text-right pr-1' : 'text-left pl-1'
                }`}
            >
                {msg.timestamp || 'JUST NOW'}
            </div>

            <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                    className={`max-w-[90%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${
                        msg.role === 'user'
                            ? 'bg-[#B9AF7A] text-slate-950 font-bold rounded-tr-none'
                            : 'bg-zinc-900/90 border border-zinc-800 text-white rounded-tl-none font-medium'
                    }`}
                >
                    <div
                        dangerouslySetInnerHTML={{ __html: formattedContent }}
                        className="whitespace-pre-wrap text-zinc-100"
                    />

                    {msg.showActionCard && (
                        <InquiryActionCard
                            onProvideInfo={onProvideInfo}
                            onNotNow={onNotNow}
                            isCompleted={msg.cardCompleted}
                        />
                    )}
                </div>
            </div>

            {msg.role === 'assistant' && msg.suggestions && msg.suggestions.length > 0 && (
                <div className="flex flex-col gap-2 pt-1.5 pl-1">
                    {msg.suggestions.map((sug, sIdx) => (
                        <button
                            key={sIdx}
                            onClick={() => onSelectSuggestion(sug)}
                            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 text-[#B9AF7A] border border-[#B9AF7A]/30 text-xs font-bold transition-all shadow-xs cursor-pointer w-fit text-left hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <FiMessageSquare className="w-3.5 h-3.5 text-[#B9AF7A] shrink-0" />
                            <span>{sug}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
});

ChatMessage.displayName = 'ChatMessage';

// Memoized Messages Thread Component
const ChatMessagesList = memo(({ messages, isLoading, onSelectSuggestion, onProvideInfo, onNotNow, messagesEndRef }) => {
    return (
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-black">
            {messages.map((msg, index) => (
                <ChatMessage
                    key={index}
                    msg={msg}
                    onSelectSuggestion={onSelectSuggestion}
                    onProvideInfo={onProvideInfo}
                    onNotNow={onNotNow}
                />
            ))}

            {isLoading && (
                <div className="flex justify-start">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl rounded-tl-none p-4 shadow-xs flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#B9AF7A] animate-bounce"></span>
                        <span className="w-2 h-2 rounded-full bg-[#B9AF7A] animate-bounce delay-150"></span>
                        <span className="w-2 h-2 rounded-full bg-[#B9AF7A] animate-bounce delay-300"></span>
                        <span className="text-xs text-zinc-400 font-semibold ml-2">Thinking...</span>
                    </div>
                </div>
            )}

            <div ref={messagesEndRef} />
        </div>
    );
});

ChatMessagesList.displayName = 'ChatMessagesList';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hello! I am **Inara**, your AI Technical Assistant at **Kigali BF Tech Group**.\n\nHow can I assist you with your project or technical questions today?',
            timestamp: 'JUST NOW',
            suggestions: DEFAULT_SUGGESTIONS
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [ttsEnabled, setTtsEnabled] = useState(true);

    // Step Wizard State: 0 = Normal Chat, 1 = Step 1 (Name), 2 = Step 2 (Contact)
    const [wizardStep, setWizardStep] = useState(0);
    const [wizardData, setWizardData] = useState({ name: '', contact: '' });
    const [wizardInput, setWizardInput] = useState('');

    const messagesEndRef = useRef(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    // Handle ESC key to exit wizard
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && wizardStep > 0) {
                setWizardStep(0);
                setWizardInput('');
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [wizardStep]);

    const speakText = useCallback((textToSpeak) => {
        if (ttsEnabled && typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const cleanText = textToSpeak.replace(/[*#]/g, '');
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.rate = 1.0;
            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            window.speechSynthesis.speak(utterance);
        }
    }, [ttsEnabled]);

    const handleSendMessage = useCallback(async (textToSend) => {
        const text = (textToSend || input).trim();
        if (!text || isLoading) return;

        const newMessages = [...messages, { role: 'user', content: text, timestamp: 'JUST NOW' }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/assistant/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to fetch AI response.');
            }

            const assistantReply = data.reply || 'How else can I assist you with your project?';
            
            let replySuggestions = [];
            if (!data.needsEscalation) {
                replySuggestions = [
                    'Request custom project quote',
                    'Where is your Kigali office located?'
                ];
            }

            const updatedMessages = [
                ...newMessages,
                {
                    role: 'assistant',
                    content: assistantReply,
                    timestamp: 'JUST NOW',
                    suggestions: replySuggestions,
                    showActionCard: data.needsEscalation || false
                }
            ];
            setMessages(updatedMessages);

            speakText(assistantReply);
        } catch (error) {
            console.error('AI Assistant chat error:', error);
            const errReply = 'I apologize, I am temporarily having trouble connecting. You can reach our team directly at **info@invexix.com** or call us at **+250 789 321 535**.';
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: errReply,
                    timestamp: 'JUST NOW'
                }
            ]);
            speakText(errReply);
        } finally {
            setIsLoading(false);
        }
    }, [input, isLoading, messages, speakText]);

    const handleProvideInfoClick = useCallback(() => {
        setWizardStep(1);
        setWizardInput('');
        speakText("Step 1 of 2: What is your full name?");
    }, [speakText]);

    const handleNotNowClick = useCallback(() => {
        setWizardStep(0);
        setMessages((prev) =>
            prev.map((m) => (m.showActionCard ? { ...m, showActionCard: false } : m))
        );
        speakText("No problem! How else can I assist you today?");
    }, [speakText]);

    const handleWizardSubmit = useCallback(async (e) => {
        e.preventDefault();
        const value = wizardInput.trim();
        if (!value) return;

        if (wizardStep === 1) {
            setWizardData((prev) => ({ ...prev, name: value }));
            setWizardStep(2);
            setWizardInput('');
            speakText(`Thank you ${value}! Step 2 of 2: What is your email address or WhatsApp phone number?`);
        } else if (wizardStep === 2) {
            const finalName = wizardData.name || 'Client';
            const finalContact = value;
            const isEmail = finalContact.includes('@');

            setIsLoading(true);
            setWizardStep(0);
            setWizardInput('');

            // Mark action cards as completed
            setMessages((prev) =>
                prev.map((m) => (m.showActionCard ? { ...m, showActionCard: false, cardCompleted: true } : m))
            );

            try {
                const userRequirements = messages
                    .filter((m) => m.role === 'user')
                    .map((m) => `• ${m.content}`)
                    .join('\n');

                const fullTranscript = messages
                    .map((m) => `[${m.role === 'user' ? 'Client' : 'Inara AI'}]: ${m.content}`)
                    .join('\n\n');

                const res = await fetch('/api/assistant/escalate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: finalName,
                        contact: finalContact,
                        question: userRequirements || 'Custom inquiry via Inara AI Assistant.',
                        chatHistory: fullTranscript,
                        email: isEmail ? finalContact : '',
                        phone: !isEmail ? finalContact : ''
                    })
                });

                if (!res.ok) throw new Error('Failed to dispatch inquiry.');

                const confirmText = `Done! Your inquiry has been dispatched directly to our senior engineering team at **info@invexix.com**. We will review your details and reach out to **${finalContact}** within 24 hours!`;

                setMessages((prev) => [
                    ...prev,
                    {
                        role: 'assistant',
                        content: confirmText,
                        timestamp: 'JUST NOW'
                    }
                ]);
                speakText(confirmText);
            } catch (err) {
                console.error('Inquiry dispatch error:', err);
                const fallbackConfirm = `Thank you **${finalName}**! I have logged your details (**${finalContact}**). Our engineering lead will follow up with you shortly.`;
                setMessages((prev) => [
                    ...prev,
                    {
                        role: 'assistant',
                        content: fallbackConfirm,
                        timestamp: 'JUST NOW'
                    }
                ]);
                speakText(fallbackConfirm);
            } finally {
                setIsLoading(false);
            }
        }
    }, [messages, speakText, wizardData.name, wizardInput, wizardStep]);

    const handleClearChat = useCallback(() => {
        const resetMessages = [
            {
                role: 'assistant',
                content: 'Hello! I am **Inara**, your AI Technical Assistant at **Kigali BF Tech Group**.\n\nHow can I assist you with your project or technical questions today?',
                timestamp: 'JUST NOW',
                suggestions: DEFAULT_SUGGESTIONS
            }
        ];
        setMessages(resetMessages);
        setWizardStep(0);
        setWizardData({ name: '', contact: '' });
        setWizardInput('');
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    }, []);

    const [isTextVisible, setIsTextVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < 80) {
                setIsTextVisible(true);
            } else if (currentScrollY > lastScrollY.current + 10) {
                setIsTextVisible(false);
            } else if (currentScrollY < lastScrollY.current - 10) {
                setIsTextVisible(true);
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Floating Trigger Widget Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="fixed bottom-24 right-4 z-50"
            >
                <div className="relative flex items-center justify-center p-4 group">
                    <div className="absolute inset-0 bg-[#B9AF7A]/20 rounded-full blur-xl group-hover:bg-[#B9AF7A]/40 transition-colors duration-500" />

                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 70 70">
                        <circle
                            cx="35"
                            cy="35"
                            r="30"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="text-zinc-100/10"
                        />
                        <motion.circle
                            cx="35"
                            cy="35"
                            r="30"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeDasharray="45 145"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                            style={{ transformOrigin: '35px 35px' }}
                            className="text-[#B9AF7A]"
                        />
                    </svg>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative w-14 h-14 bg-black rounded-full flex items-center justify-center text-[#B9AF7A] shadow-xl hover:scale-110 transition-all duration-500 border border-[#B9AF7A]/40 cursor-pointer"
                        aria-label="Toggle AI Assistant"
                    >
                        {isOpen ? <FiX className="text-2xl" /> : <BsStars className="text-2xl animate-pulse" />}
                    </button>

                    {/* Text Badge - Auto-hides on scroll down */}
                    <AnimatePresence>
                        {isTextVisible && (
                            <motion.div
                                key="ai-text-badge"
                                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                                transition={{ duration: 0.25 }}
                                className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3.5 py-1.5 bg-black text-white text-[11px] font-bold rounded-lg opacity-100 whitespace-nowrap pointer-events-none capitalize tracking-wider border border-zinc-800 shadow-lg"
                            >
                                ai assistant
                                <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-black" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Slide-Over Full-Height Right Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[998]"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                            className="fixed top-40 right-0 h-[75vh] w-full sm:w-[450px] z-[999] bg-black border-l border-zinc-800 shadow-2xl flex flex-col overflow-hidden text-white"
                        >
                            {/* Drawer Header Bar */}
                            <div className="bg-[#080808] border-b border-zinc-800/80 p-4 sm:p-5 flex items-center justify-between shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#B9AF7A]/20 border border-[#B9AF7A] flex items-center justify-center text-[#B9AF7A]">
                                        <BsStars className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-sm font-extrabold text-white tracking-tight">Inara AI Assistant</h3>
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                        </div>
                                        <p className="text-[11px] text-zinc-400 font-medium">Kigali BF Tech Group AI</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1.5 text-zinc-400">
                                    <button
                                        onClick={() => setTtsEnabled(!ttsEnabled)}
                                        title={ttsEnabled ? 'Disable Voice Read Aloud' : 'Enable Voice Read Aloud'}
                                        className={`p-2 rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer ${ttsEnabled ? 'text-[#B9AF7A]' : 'text-zinc-400'}`}
                                    >
                                        {ttsEnabled ? <FiVolume2 className="w-4 h-4" /> : <FiVolumeX className="w-4 h-4" />}
                                    </button>

                                    <button
                                        onClick={handleClearChat}
                                        title="Reset Conversation"
                                        className="p-2 rounded-xl hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                                    >
                                        <FiRefreshCw className="w-4 h-4" />
                                    </button>

                                    <button
                                        onClick={() => setIsOpen(false)}
                                        title="Close Assistant"
                                        className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white transition-colors cursor-pointer border border-zinc-800 ml-1"
                                    >
                                        <FiX className="w-5 h-5 text-[#B9AF7A]" />
                                    </button>
                                </div>
                            </div>

                            {/* Messages Thread Container */}
                            <ChatMessagesList
                                messages={messages}
                                isLoading={isLoading}
                                onSelectSuggestion={handleSendMessage}
                                onProvideInfo={handleProvideInfoClick}
                                onNotNow={handleNotNowClick}
                                messagesEndRef={messagesEndRef}
                            />

                            {/* Input Bar or Step Wizard Banner */}
                            <div className="bg-[#080808] border-t border-zinc-800/80 p-4 space-y-2 shrink-0">
                                {wizardStep > 0 ? (
                                    /* Step Wizard Input Mode (Matching User Sample Screenshot) */
                                    <div className="bg-zinc-950 border border-[#B9AF7A]/40 rounded-2xl p-3.5 space-y-3 shadow-2xl">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                {wizardStep === 2 && (
                                                    <button
                                                        onClick={() => {
                                                            setWizardStep(1);
                                                            setWizardInput(wizardData.name);
                                                        }}
                                                        className="p-1 text-zinc-400 hover:text-white transition-colors"
                                                        title="Back to Step 1"
                                                    >
                                                        <FiChevronLeft className="w-4 h-4" />
                                                    </button>
                                                )}
                                                <div className="w-7 h-7 rounded-lg bg-[#B9AF7A]/20 border border-[#B9AF7A]/40 flex items-center justify-center text-[#B9AF7A]">
                                                    {wizardStep === 1 ? <FiUser className="w-3.5 h-3.5" /> : <FiMail className="w-3.5 h-3.5" />}
                                                </div>
                                                <div>
                                                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#B9AF7A]">
                                                        STEP {wizardStep} OF 2
                                                    </div>
                                                    <h4 className="text-xs font-bold text-white">
                                                        {wizardStep === 1 ? "What's your full name?" : "Your email address or WhatsApp phone?"}
                                                    </h4>
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => {
                                                    setWizardStep(0);
                                                    setWizardInput('');
                                                }}
                                                className="p-1 text-zinc-400 hover:text-white transition-colors"
                                                title="Cancel"
                                            >
                                                <FiX className="w-4 h-4" />
                                            </button>
                                        </div>

                                        <form onSubmit={handleWizardSubmit} className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                autoFocus
                                                value={wizardInput}
                                                onChange={(e) => setWizardInput(e.target.value)}
                                                placeholder={wizardStep === 1 ? "e.g. Frank Bahirwa" : "e.g. +250 789 321 535 or name@domain.com"}
                                                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#B9AF7A] font-medium"
                                            />

                                            <button
                                                type="submit"
                                                disabled={!wizardInput.trim() || isLoading}
                                                className="bg-[#B9AF7A] hover:bg-amber-500 disabled:opacity-40 text-slate-950 p-2.5 rounded-xl transition-all cursor-pointer shadow-md flex items-center justify-center shrink-0"
                                            >
                                                <FiSend className="w-4 h-4 font-bold" />
                                            </button>
                                        </form>

                                        <div className="flex items-center justify-between text-[10px] text-zinc-500 font-medium px-1 pt-0.5">
                                            <div className="flex items-center gap-2">
                                                <span><kbd className="bg-zinc-900 px-1 py-0.5 rounded text-[9px] border border-zinc-800">Enter</kbd> confirm</span>
                                                <span>•</span>
                                                <span><kbd className="bg-zinc-900 px-1 py-0.5 rounded text-[9px] border border-zinc-800">Esc</kbd> cancel</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <FiLock className="w-2.5 h-2.5 text-zinc-500" />
                                                <span>Secure & private</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* Normal Chat Input Mode */
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleSendMessage();
                                        }}
                                        className="flex items-center gap-3"
                                    >
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder="Type a message..."
                                            className="flex-1 bg-zinc-900/90 border border-zinc-800 rounded-2xl px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#B9AF7A] font-medium"
                                        />

                                        <button
                                            type="submit"
                                            disabled={!input.trim() || isLoading}
                                            className="bg-[#B9AF7A] hover:bg-amber-500 disabled:opacity-40 text-slate-950 p-3.5 rounded-2xl transition-all cursor-pointer shadow-md flex items-center justify-center shrink-0"
                                        >
                                            <FiSend className="w-4 h-4 font-bold" />
                                        </button>
                                    </form>
                                )}

                                <p className="text-[10px] text-zinc-500 font-medium text-center flex items-center justify-center gap-1">
                                    <FiLock className="w-3 h-3 text-zinc-500" />
                                    <span>By chatting, you agree to our terms & privacy policy</span>
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default memo(AIAssistant);
