'use client';

import { useState, useEffect, useRef, memo, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiRefreshCw, FiVolume2, FiVolumeX, FiMessageSquare, FiLock } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';

const DEFAULT_SUGGESTIONS = [
    'Explore our past projects & portfolio',
    'What services & tech stack do you offer?',
    'Request a custom project quote'
];

const formatMarkdownText = (text) => {
    if (!text) return '';
    let formatted = text;

    // Convert markdown links [Title](URL) into clean clickable gold links
    formatted = formatted.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 font-bold text-[#B9AF7A] hover:text-amber-300 underline underline-offset-4 transition-colors cursor-pointer">$1 ↗</a>'
    );

    // Convert bold **text**
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-extrabold text-white">$1</strong>');

    // Convert bullet lines
    formatted = formatted.replace(/^- (.*$)/gim, '• $1');

    return formatted;
};

// Memoized Single Message Component - skips re-rendering and regex calculations when typing in input
const ChatMessage = memo(({ msg, onSelectSuggestion }) => {
    const formattedContent = useMemo(() => formatMarkdownText(msg.content), [msg.content]);

    return (
        <div className="space-y-2">
            <div className={`flex text-[10px] font-bold text-zinc-400 uppercase tracking-widest ${msg.role === 'user' ? 'justify-end pr-1' : 'justify-start pl-1'}`}>
                {msg.timestamp || 'JUST NOW'}
            </div>

            <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                    className={`max-w-[88%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${
                        msg.role === 'user'
                            ? 'bg-[#B9AF7A] text-slate-950 font-bold rounded-tr-none'
                            : 'bg-zinc-900/90 border border-zinc-800 text-white rounded-tl-none font-medium'
                    }`}
                >
                    <div
                        dangerouslySetInnerHTML={{ __html: formattedContent }}
                        className="whitespace-pre-wrap text-zinc-100"
                    />
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

// Memoized Messages Thread Component - isolates chat list from input typing re-renders
const ChatMessagesList = memo(({ messages, isLoading, onSelectSuggestion, messagesEndRef }) => {
    return (
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-black">
            {messages.map((msg, index) => (
                <ChatMessage key={index} msg={msg} onSelectSuggestion={onSelectSuggestion} />
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

    const [inquiryStep, setInquiryStep] = useState(0);
    const [inquiryPayload, setInquiryPayload] = useState({ name: '', contact: '', question: '' });

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    useEffect(() => {
        const saved = localStorage.getItem('bftech_ai_chat');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setMessages(parsed);
                }
            } catch (err) {
                console.error('Failed to parse saved chat:', err);
            }
        }
    }, []);

    useEffect(() => {
        if (messages.length > 1) {
            localStorage.setItem('bftech_ai_chat', JSON.stringify(messages));
        }
    }, [messages]);

    const handleSendMessage = useCallback(async (textToSend) => {
        const text = (textToSend || input).trim();
        if (!text || isLoading) return;

        if (inquiryStep === 1) {
            const userName = text;
            const updatedMessages = [
                ...messages,
                { role: 'user', content: userName, timestamp: 'JUST NOW' },
                {
                    role: 'assistant',
                    content: `Thank you **${userName}**! Could you please share your **Email address** or **WhatsApp phone number** so our engineering lead can contact you directly?`,
                    timestamp: 'JUST NOW'
                }
            ];
            setMessages(updatedMessages);
            setInquiryPayload((prev) => ({ ...prev, name: userName }));
            setInquiryStep(2);
            setInput('');
            return;
        }

        if (inquiryStep === 2) {
            const userContact = text;
            const isEmail = userContact.includes('@');

            // Collect all requirements and notes discussed by the client throughout the chat
            const userRequirements = messages
                .filter((m) => m.role === 'user')
                .map((m) => `• ${m.content}`)
                .join('\n');

            // Format full conversation transcript for engineering review
            const fullTranscript = messages
                .map((m) => `[${m.role === 'user' ? 'Client' : 'Inara AI'}]: ${m.content}`)
                .join('\n\n');

            const finalPayload = {
                name: inquiryPayload.name,
                contact: userContact,
                question: userRequirements || inquiryPayload.question || 'Custom project request via Inara AI Assistant.',
                chatHistory: fullTranscript,
                email: isEmail ? userContact : '',
                phone: !isEmail ? userContact : ''
            };

            const updatedMessages = [
                ...messages,
                { role: 'user', content: userContact, timestamp: 'JUST NOW' }
            ];
            setMessages(updatedMessages);
            setInput('');
            setIsLoading(true);

            try {
                const res = await fetch('/api/assistant/escalate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(finalPayload)
                });

                if (!res.ok) throw new Error('Failed to send email.');

                setMessages((prev) => [
                    ...prev,
                    {
                        role: 'assistant',
                        content: `Done! Your request has been dispatched directly to our senior engineering team at **info@invexix.com**. We will review your project requirements and reach out to **${userContact}** within 24 hours!`,
                        timestamp: 'JUST NOW'
                    }
                ]);
            } catch (err) {
                console.error('Email escalation error:', err);
                setMessages((prev) => [
                    ...prev,
                    {
                        role: 'assistant',
                        content: `Thank you **${inquiryPayload.name}**! I have logged your contact details (**${userContact}**). Our engineering lead will follow up with you shortly.`,
                        timestamp: 'JUST NOW'
                    }
                ]);
            } finally {
                setIsLoading(false);
                setInquiryStep(0);
                setInquiryPayload({ name: '', contact: '', question: '' });
            }
            return;
        }

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
                    suggestions: replySuggestions
                }
            ];
            setMessages(updatedMessages);

            if (data.needsEscalation) {
                setInquiryStep(1);
                const userNotes = newMessages
                    .filter((m) => m.role === 'user')
                    .map((m) => `• ${m.content}`)
                    .join('\n');
                setInquiryPayload({ name: '', contact: '', question: userNotes });
            }

            if (ttsEnabled && typeof window !== 'undefined' && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(assistantReply.replace(/[*#]/g, ''));
                utterance.rate = 1.0;
                utterance.onstart = () => setIsSpeaking(true);
                utterance.onend = () => setIsSpeaking(false);
                window.speechSynthesis.speak(utterance);
            }
        } catch (error) {
            console.error('AI Chat Error:', error);
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    content: 'I don’t have the exact technical details for that right now, but I am going to forward your request directly to our senior engineering team at **info@invexix.com** for advanced help!\n\nCould you please share your **full name**?',
                    timestamp: 'JUST NOW'
                }
            ]);
            setInquiryStep(1);
            setInquiryPayload({ name: '', contact: '', question: text });
        } finally {
            setIsLoading(false);
        }
    }, [input, isLoading, inquiryStep, inquiryPayload, messages, ttsEnabled]);

    const handleClearChat = useCallback(() => {
        const resetMessages = [
            {
                role: 'assistant',
                content: 'Chat session reset! What project or technical question would you like to discuss?',
                timestamp: 'JUST NOW',
                suggestions: DEFAULT_SUGGESTIONS
            }
        ];
        setMessages(resetMessages);
        setInquiryStep(0);
        setInquiryPayload({ name: '', contact: '', question: '' });
        localStorage.removeItem('bftech_ai_chat');
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    }, []);

    const placeholderText = useMemo(() => {
        if (inquiryStep === 1) return "Type your full name here...";
        if (inquiryStep === 2) return "Type your email address or phone...";
        return "Type a message...";
    }, [inquiryStep]);

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

                    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3.5 py-1.5 bg-black text-white text-[11px] font-bold rounded-lg opacity-100 transition-opacity whitespace-nowrap pointer-events-none capitalize tracking-wider border border-zinc-800 shadow-lg">
                        ai assistant
                        <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-black" />
                    </div>
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
                                messagesEndRef={messagesEndRef}
                            />

                            {/* Input Bar */}
                            <div className="bg-[#080808] border-t border-zinc-800/80 p-4 space-y-2 shrink-0">
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
                                        placeholder={placeholderText}
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
