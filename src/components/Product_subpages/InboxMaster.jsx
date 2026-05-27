import React, { useEffect } from "react";
import PricingSection from "../PricingSection";
import { PRICING_DATA } from "../../pricingData";

const BrowserChrome = ({ url }) => (
    <div className="bg-gray-50/90 backdrop-blur px-3 sm:px-4 py-2.5 sm:py-3 flex justify-between items-center border-b border-gray-100">
        <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
        </div>
        {url && <div className="bg-white rounded-md px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs text-gray-400 border border-gray-100 font-mono truncate max-w-[60%]">{url}</div>}
        <div className="w-8 sm:w-12"></div>
    </div>
);

const MobileChrome = () => (
    <div className="bg-gray-50 px-2 py-2 flex items-center gap-1.5 border-b border-gray-100">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
    </div>
);

const InboxMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="inbox.bu-marka.com/tickets" />
        <div className="p-4 sm:p-5 bg-gradient-to-br from-white to-green-50/30 space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-brand-dark">All Conversations</p>
                <span className="text-[10px] px-2 py-0.5 bg-green-50 text-brand-primary rounded-full font-semibold">12 Open</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {[
                    { l: "Open", v: "12", c: "text-brand-primary" },
                    { l: "Pending", v: "4", c: "text-yellow-600" },
                    { l: "Resolved", v: "38", c: "text-blue-600" },
                ].map((k, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-2.5 text-center">
                        <p className="text-[9px] uppercase text-gray-400 font-semibold tracking-wider">{k.l}</p>
                        <p className={`text-base font-bold ${k.c}`}>{k.v}</p>
                    </div>
                ))}
            </div>
            <div className="rounded-xl border border-gray-100 bg-white divide-y divide-gray-50 overflow-hidden shadow-sm">
                {[
                    { name: "Ana Costa", msg: "Need help with booking #2891", time: "2m", tag: "Urgent", tagColor: "bg-red-50 text-red-500" },
                    { name: "Rami Khalil", msg: "Invoice question for May", time: "15m", tag: "Billing", tagColor: "bg-blue-50 text-blue-500" },
                    { name: "Sofia M.", msg: "How do I export my data?", time: "1h", tag: "Support", tagColor: "bg-green-50 text-brand-primary" },
                ].map((c, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-2.5">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-primary to-green-300 text-white flex items-center justify-center font-bold text-[9px] shrink-0">
                            {c.name.split(" ").map(s => s[0]).join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center mb-0.5">
                                <p className="text-[11px] font-bold text-brand-dark truncate">{c.name}</p>
                                <span className="text-[9px] text-gray-400 ml-1 shrink-0">{c.time}</span>
                            </div>
                            <p className="text-[9px] text-gray-500 truncate">{c.msg}</p>
                        </div>
                        <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${c.tagColor}`}>{c.tag}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ChatMobileMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 space-y-2.5 bg-gradient-to-b from-green-50/50 to-white">
            <div className="rounded-xl bg-gradient-to-br from-brand-primary to-green-700 text-white p-3">
                <p className="text-[9px] uppercase opacity-80 tracking-wider">Live Chat</p>
                <p className="text-xs font-bold mt-0.5">Ana Costa</p>
                <p className="text-[9px] opacity-80 mt-0.5">Online · 2 min ago</p>
            </div>
            <div className="space-y-2">
                <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-xl rounded-tl-none px-3 py-2 max-w-[80%]">
                        <p className="text-[10px] text-brand-dark">Need help with booking #2891</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="bg-brand-primary rounded-xl rounded-tr-none px-3 py-2 max-w-[80%]">
                        <p className="text-[10px] text-white">Sure! Let me check that for you.</p>
                    </div>
                </div>
                <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-xl rounded-tl-none px-3 py-2 max-w-[80%]">
                        <p className="text-[10px] text-brand-dark">Thank you so much!</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-2 flex gap-2 items-center">
                <div className="flex-1 bg-gray-50 rounded-lg px-2 py-1.5">
                    <p className="text-[9px] text-gray-400">Type a message…</p>
                </div>
                <div className="w-6 h-6 rounded-lg bg-brand-primary flex items-center justify-center">
                    <i className="fa-solid fa-paper-plane text-white text-[8px]"></i>
                </div>
            </div>
        </div>
    </div>
);

const AnalyticsMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="inbox.bu-marka.com/analytics" />
        <div className="p-4 sm:p-5 bg-white space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-brand-dark">Team Performance</p>
                <span className="text-[10px] px-2 py-0.5 bg-brand-light text-brand-primary rounded-full font-semibold">May 2026</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {[
                    { l: "Avg. Response", v: "1m 42s", c: "text-brand-primary" },
                    { l: "CSAT Score", v: "96%", c: "text-green-600" },
                    { l: "Resolved Today", v: "38", c: "text-blue-600" },
                    { l: "AI Suggestions", v: "64%", c: "text-purple-600" },
                ].map((s, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-2.5">
                        <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">{s.l}</p>
                        <p className={`text-sm font-bold ${s.c}`}>{s.v}</p>
                    </div>
                ))}
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-3">
                <p className="text-[10px] font-bold text-brand-dark mb-2">Resolution trend</p>
                <div className="flex items-end gap-1 h-10">
                    {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 88, 100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm bg-brand-primary/20 relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 right-0 bg-brand-primary rounded-sm" style={{ height: `${h}%` }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const InboxMasterPage = ({ onOpenInquiry, setCurrentPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        if (typeof window !== "undefined" && window.AOS) {
            window.AOS.init({ once: true });
            setTimeout(() => window.AOS.refresh(), 100);
        }
    }, []);

    return (
        <main className="pt-[60px] md:pt-20 bg-white font-sans overflow-hidden">
            {/* HERO */}
            <section className="relative pt-12 sm:pt-20 pb-16 lg:pb-28 bg-gradient-to-b from-white to-green-50/40 overflow-hidden border-b border-gray-100">
                <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-light pointer-events-none rounded-l-full blur-3xl opacity-60"></div>
                <div className="mx-3 px-4 md:px-14 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 text-left" data-aos="fade-right">
                            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-brand-gray mb-4">
                                <button
                                    onClick={() => setCurrentPage && setCurrentPage('product')}
                                    className="inline-flex items-center gap-1.5 hover:text-brand-primary transition font-medium"
                                >
                                    <i className="fa-solid fa-grip text-[11px]"></i>
                                    Products
                                </button>
                                <i className="fa-solid fa-chevron-right text-[9px] text-gray-300"></i>
                                <span className="text-brand-dark font-semibold">InboxMaster</span>
                            </nav>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary font-medium text-sm mb-5 shadow-sm border border-green-100">
                                <i className="fa-solid fa-inbox text-[12px]"></i>
                                InboxMaster
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight mb-5">
                                Every Customer Message, <span className="text-brand-primary">One Powerful Inbox</span>
                            </h1>
                            <p className="text-brand-gray text-sm md:text-base mb-7 leading-relaxed font-light">
                                Centralize email, chat, and support tickets in one place. Respond faster, resolve smarter, and delight your customers — powered by AI.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button onClick={onOpenInquiry} className="bg-brand-primary text-white px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:bg-green-700 shadow-lg shadow-green-500/20 transition-all duration-300">
                                    Request Demo
                                </button>
                                <button
                                    onClick={() => document.getElementById("inbox-features")?.scrollIntoView({ behavior: "smooth" })}
                                    className="bg-white text-brand-dark border border-gray-200 px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                                >
                                    Explore Features
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full" data-aos="fade-left" data-aos-delay="200">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-green-300 rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-2xl"></div>
                                <div className="relative z-10 flex items-center gap-3 sm:gap-6">
                                    <div className="w-2/3 relative group">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-all duration-500">
                                            <InboxMockup />
                                        </div>
                                        <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3 animate-bounce" style={{ animationDuration: "3s" }}>
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-primary">
                                                <i className="fa-solid fa-bolt"></i>
                                            </div>
                                            <div>
                                                <p className="text-[10px] sm:text-xs text-brand-gray">Avg. Response</p>
                                                <p className="text-xs sm:text-sm font-bold text-brand-dark">1m 42s</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 relative group transform translate-y-12">
                                        <div className="bg-white rounded-xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                            <ChatMobileMockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURE CARDS */}
            <section id="inbox-features" className="py-[72px] bg-[#fafafa]">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                            All Your Support Channels, One Inbox
                        </h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">
                            Email, live chat, tickets, and AI — seamlessly unified so your team can focus on helping people.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "fa-solid fa-inbox", title: "Unified Inbox", desc: "Every channel in one view — email, chat, and tickets managed without switching tabs." },
                            { icon: "fa-solid fa-robot", title: "AI-Powered Replies", desc: "Smart suggestions, sentiment analysis, and automatic summaries for long conversations." },
                            { icon: "fa-solid fa-chart-line", title: "Team Analytics", desc: "Response times, CSAT scores, and resolution rates to optimize your support operations." },
                            { icon: "fa-solid fa-language", title: "Auto-Translation", desc: "Reply in any language. InboxMaster translates incoming and outgoing messages automatically." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                                data-aos="fade-up"
                                data-aos-delay={(i % 4) * 100}
                            >
                                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-xl text-brand-primary mb-5 group-hover:scale-110 transition-transform">
                                    <i className={item.icon}></i>
                                </div>
                                <h3 className="font-bold text-base sm:text-lg text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                                <p className="text-brand-gray leading-relaxed font-light text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 1 — Unified Inbox */}
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl">
                                <i className="fa-solid fa-inbox"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Stop Juggling Tabs. Start Resolving Faster.
                            </h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">
                                InboxMaster pulls every customer message into a single, organized inbox. Assign tickets, add internal notes, and track every conversation from first contact to resolution.
                            </p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {[
                                    "Email, chat & tickets in one unified view",
                                    "Smart ticket assignment & priority tags",
                                    "Internal comments & team collaboration",
                                ].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium">
                                        <i className="fa-solid fa-circle-check text-brand-primary"></i>{p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full relative group" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-green-200 rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-xl"></div>
                            <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                                <InboxMockup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — Chat + Analytics */}
            <section className="py-[72px] bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 w-full order-2 lg:order-1 relative" data-aos="fade-right">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-brand-primary rounded-[2rem] transform rotate-2 scale-105 opacity-20 blur-xl"></div>
                            <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6">
                                <div className="w-1/3 max-w-[200px] relative group transform translate-y-6">
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
                                        <ChatMobileMockup />
                                    </div>
                                </div>
                                <div className="w-2/3 relative group">
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                                        <AnalyticsMockup />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary text-xl">
                                <i className="fa-solid fa-chart-line"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                AI That Works for Your Team, Not Against It
                            </h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">
                                Let AI draft replies, detect urgency, and summarize long threads. Your team stays informed, your customers feel heard — faster than ever.
                            </p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {[
                                    "AI reply suggestions trained on your brand tone",
                                    "Real-time CSAT & performance dashboards",
                                    "Auto-translation for 40+ languages",
                                ].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium">
                                        <i className="fa-solid fa-circle-check text-brand-primary"></i>{p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUE STRIP */}
            <section className="py-[72px] bg-[#fafafa] border-y border-gray-100">
                <div className="mx-3 px-4 md:px-14 text-center">
                    <div className="max-w-3xl mx-auto" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Built for Teams That Care About Every Message</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">Fast, secure, and smart — so nothing falls through the cracks.</p>
                    </div>
                    <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { i: "fa-solid fa-bolt", v: "Instant", l: "Sub-2-min response avg." },
                            { i: "fa-solid fa-shield-halved", v: "Secure", l: "2FA & audit logs" },
                            { i: "fa-solid fa-robot", v: "AI-Native", l: "Smart reply engine" },
                            { i: "fa-solid fa-globe", v: "Multilingual", l: "40+ auto-translated languages" },
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-200 transition-colors" data-aos="zoom-in" data-aos-delay={i * 100}>
                                <div className="w-10 h-10 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center mx-auto mb-3"><i className={s.i}></i></div>
                                <h4 className="text-brand-primary font-bold text-base sm:text-xl mb-1">{s.v}</h4>
                                <p className="text-brand-gray text-xs sm:text-sm">{s.l}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <PricingSection
                onOpenInquiry={onOpenInquiry}
                plans={PRICING_DATA['inbox-master']}
                title="Flexible Pricing for InboxMaster"
                subtitle="Start free, scale as your team grows. No hidden fees, no surprises."
            />

            {/* CTA */}
            <section className="py-[72px] bg-gradient-to-br from-brand-primary to-green-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-20 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6 sm:space-y-8" data-aos="zoom-in">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                        Turn Every Conversation Into a Great Experience
                    </h2>
                    <p className="text-base sm:text-xl text-green-50 font-light">
                        One inbox. Every channel. Zero missed messages.
                    </p>
                    <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <button onClick={onOpenInquiry} className="bg-white text-brand-primary px-6 py-2 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            Request Demo
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default InboxMasterPage;
