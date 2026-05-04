import React, { useEffect } from "react";

const MobileChrome = () => (
    <div className="bg-gray-50 px-2 py-2 flex items-center gap-1.5 border-b border-gray-100">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
    </div>
);

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

/* Today's tour mobile screen */
const TodayTourMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-green-50 to-white">
            <div className="rounded-xl bg-gradient-to-br from-brand-primary to-green-700 text-white p-3 shadow-md">
                <p className="text-[9px] uppercase opacity-80 tracking-wider">Today's Tour</p>
                <p className="text-sm font-bold mt-0.5">Heritage Walk · Old Town</p>
                <div className="flex items-center justify-between mt-2 text-[9px]">
                    <span className="opacity-90 flex items-center gap-1"><i className="fa-solid fa-clock"></i> 09:30 — 13:00</span>
                    <span className="opacity-90 flex items-center gap-1"><i className="fa-solid fa-users"></i> 12 guests</span>
                </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-3">
                <p className="text-[10px] font-bold text-brand-dark mb-2">Itinerary</p>
                {[
                    { t: "09:30", n: "Pickup · Marina Hotel", s: "done" },
                    { t: "10:15", n: "Castle Square", s: "active" },
                    { t: "11:30", n: "Spice Market", s: "next" },
                    { t: "12:30", n: "Lunch · Riverside", s: "next" },
                ].map((stop, i) => (
                    <div key={i} className="flex items-start gap-2 py-1.5">
                        <div className="flex flex-col items-center">
                            <div className={`w-3 h-3 rounded-full ${stop.s === "done" ? "bg-brand-primary" : stop.s === "active" ? "bg-yellow-400 animate-pulse" : "bg-gray-200"}`}></div>
                            {i < 3 && <div className="w-0.5 h-6 bg-gray-100"></div>}
                        </div>
                        <div className="flex-1">
                            <p className="text-[10px] text-gray-400 font-mono">{stop.t}</p>
                            <p className="text-[11px] font-bold text-brand-dark">{stop.n}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full rounded-lg bg-brand-primary text-white text-xs font-bold py-2.5">Mark stop complete</button>
        </div>
    </div>
);

/* Group manager mobile */
const GroupManagerMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-blue-50 to-white">
            <div className="flex justify-between items-center">
                <p className="text-[10px] font-bold text-brand-dark">Group Roster</p>
                <span className="text-[9px] px-2 py-0.5 bg-brand-light text-brand-primary rounded-full font-semibold">12 / 12</span>
            </div>
            {[
                { n: "Sarah J.", st: "Checked in", c: "text-brand-primary bg-green-50" },
                { n: "Marcus T.", st: "Checked in", c: "text-brand-primary bg-green-50" },
                { n: "Priya K.", st: "Pending", c: "text-yellow-600 bg-yellow-50" },
                { n: "Family Lee · 4", st: "Checked in", c: "text-brand-primary bg-green-50" },
            ].map((g, i) => (
                <div key={i} className="rounded-lg border border-gray-100 bg-white p-2.5 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-brand-light text-brand-primary flex items-center justify-center font-bold text-[10px]">
                        {g.n.split(" ")[0][0]}
                    </div>
                    <span className="text-[11px] font-bold text-brand-dark flex-1">{g.n}</span>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold ${g.c}`}>{g.st}</span>
                </div>
            ))}
            <div className="grid grid-cols-2 gap-2 mt-2">
                <button className="rounded-lg border border-gray-200 text-[10px] font-bold text-brand-dark py-2 flex items-center justify-center gap-1"><i className="fa-solid fa-message text-brand-primary"></i> Group Chat</button>
                <button className="rounded-lg bg-brand-primary text-white text-[10px] font-bold py-2 flex items-center justify-center gap-1"><i className="fa-solid fa-bullhorn"></i> Announce</button>
            </div>
        </div>
    </div>
);

/* Schedule overview mobile */
const ScheduleMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-yellow-50 to-white">
            <p className="text-[10px] font-bold text-brand-dark">My Schedule · This Week</p>
            <div className="grid grid-cols-7 gap-1 text-center text-[8px] text-gray-400 font-semibold uppercase">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {[1, 1, 0, 1, 1, 0, 0].map((v, i) => (
                    <div key={i} className={`aspect-square rounded ${v ? "bg-brand-primary" : "bg-gray-100"} flex items-center justify-center`}>
                        {v ? <span className="text-[8px] text-white font-bold">{i + 1}</span> : <span className="text-[8px] text-gray-300">{i + 1}</span>}
                    </div>
                ))}
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-2.5 space-y-1.5">
                <p className="text-[10px] font-bold text-brand-dark">Upcoming</p>
                {[
                    { d: "Tue", t: "City Highlights", h: "09:00" },
                    { d: "Thu", t: "Coastal Tour", h: "08:30" },
                    { d: "Fri", t: "Heritage Walk", h: "09:30" },
                ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 py-1 border-t border-gray-50 first:border-0">
                        <div className="w-7 h-7 rounded-md bg-brand-light text-brand-primary flex items-center justify-center text-[9px] font-bold">{s.d}</div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-bold text-brand-dark truncate">{s.t}</p>
                            <p className="text-[9px] text-gray-500">{s.h}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* Performance / earnings */
const PerformanceMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-purple-50 to-white">
            <div className="rounded-xl bg-white border border-gray-100 p-3 shadow-sm">
                <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">Avg. Rating</p>
                <div className="flex items-end gap-1 mt-1">
                    <p className="text-2xl font-bold text-brand-dark">4.9</p>
                    <p className="text-[10px] text-gray-400 mb-1">/ 5</p>
                </div>
                <div className="flex gap-0.5 mt-1">
                    {[1, 1, 1, 1, 1].map((_, i) => <i key={i} className="fa-solid fa-star text-yellow-400 text-[10px]"></i>)}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-gray-100 bg-white p-2.5">
                    <p className="text-[8px] text-gray-400 uppercase">Tours</p>
                    <p className="text-base font-bold text-brand-primary">142</p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-white p-2.5">
                    <p className="text-[8px] text-gray-400 uppercase">Tips</p>
                    <p className="text-base font-bold text-green-600">$1.4K</p>
                </div>
            </div>
            <div className="rounded-lg border border-gray-100 bg-white p-2.5">
                <p className="text-[10px] font-bold text-brand-dark mb-1">Recent Reviews</p>
                {[
                    "“Lina was incredible — best tour ever!”",
                    "“So knowledgeable and fun.”",
                ].map((r, i) => (
                    <p key={i} className="text-[9px] text-gray-500 italic py-1 border-t border-gray-50 first:border-0">{r}</p>
                ))}
            </div>
        </div>
    </div>
);

const TourGuideAppPage = ({ onOpenInquiry, setCurrentPage }) => {
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
                            {/* Breadcrumb */}
                            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-brand-gray mb-4">
                                <button
                                    onClick={() => setCurrentPage && setCurrentPage('product')}
                                    className="inline-flex items-center gap-1.5 hover:text-brand-primary transition font-medium"
                                >
                                    <i className="fa-solid fa-grip text-[11px]"></i>
                                    Products
                                </button>
                                <i className="fa-solid fa-chevron-right text-[9px] text-gray-300"></i>
                                <span className="text-brand-dark font-semibold">Tour Guide App</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary font-medium text-sm mb-5 shadow-sm border border-green-100">
                                <i className="fa-solid fa-map-location-dot text-[12px]"></i>
                                Tour Guide App
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight mb-5">
                                The <span className="text-brand-primary">Tour Guide App</span> — Everything You Need, In Your Pocket
                            </h1>
                            <p className="text-brand-gray text-sm md:text-base mb-7 leading-relaxed font-light">
                                Schedules, group rosters, itinerary stops, and real-time updates — built so guides can focus on guests, not paperwork.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button onClick={onOpenInquiry} className="bg-brand-primary text-white px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:bg-green-700 shadow-lg shadow-green-500/20 transition-all duration-300">Request Demo</button>
                                <button onClick={() => document.getElementById("core-features").scrollIntoView({ behavior: "smooth" })} className="bg-white text-brand-dark border border-gray-200 px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-300">Explore Features</button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full" data-aos="fade-left" data-aos-delay="200">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-green-300 rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-2xl"></div>
                                <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6">
                                    <div className="w-1/2 sm:w-1/3 relative group transform -translate-y-4">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
                                            <TodayTourMockup />
                                        </div>
                                    </div>
                                    <div className="w-1/2 sm:w-1/3 relative group transform translate-y-6">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                            <GroupManagerMockup />
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 bg-white p-2.5 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 z-20 hidden md:flex">
                                            <i className="fa-solid fa-star text-yellow-400"></i>
                                            <span className="text-xs font-bold text-brand-dark">4.9</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CARDS */}
            <section id="core-features" className="py-16 sm:py-24 bg-[#fafafa]">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4">Built for Guides Who Lead</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">Every tap is a step closer to a flawless experience for your guests.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: "fa-solid fa-route", title: "Live Itinerary", desc: "Step-by-step stops, timing, and notes — always one tap away during the tour." },
                            { icon: "fa-solid fa-people-group", title: "Group Roster", desc: "Check-ins, dietary notes, and contact info for every guest in your group." },
                            { icon: "fa-solid fa-bell", title: "Real-time Updates", desc: "Instant notifications for changes, reassignments, and guest messages." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-light flex items-center justify-center text-xl sm:text-2xl text-brand-primary mb-5 sm:mb-6 group-hover:scale-110 transition-transform"><i className={item.icon}></i></div>
                                <h3 className="font-bold text-lg sm:text-xl text-brand-dark mb-2 sm:mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                                <p className="text-brand-gray leading-relaxed font-light text-sm sm:text-base">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 1 */}
            <section className="py-16 sm:py-24 bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-route"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Run Tours With Confidence</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">Open the app, tap "Start Tour" and follow the live itinerary — every stop, photo prompt, and time check is right there.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["Live itinerary with stop progress", "Offline mode for no-signal areas", "Photo & note capture per stop"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full flex justify-center" data-aos="fade-left">
                            <div className="relative max-w-[260px] sm:max-w-xs w-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-green-200 rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-xl"></div>
                                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden">
                                    <TodayTourMockup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="py-16 sm:py-24 bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 w-full order-2 lg:order-1 flex justify-center" data-aos="fade-right">
                            <div className="relative max-w-[260px] sm:max-w-xs w-full">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-brand-primary rounded-[2rem] transform rotate-2 scale-105 opacity-20 blur-xl"></div>
                                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden">
                                    <GroupManagerMockup />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-people-group"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Know Every Guest, Instantly</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">Names, dietary preferences, languages, ages — everything a great guide needs to make guests feel seen and looked after.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["One-tap check-in for every guest", "Dietary, accessibility & language notes", "Group broadcast & 1-to-1 chat"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 */}
            <section className="py-16 sm:py-24 bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-calendar-days"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Your Schedule, Your Performance</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">Plan your week, accept or decline assignments, and track your ratings, tips, and feedback — all in one calm dashboard.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["Weekly & monthly availability calendar", "Ratings, reviews, and tips tracker", "Personal earnings & payout history"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full flex justify-center gap-3 sm:gap-6" data-aos="fade-left">
                            <div className="relative w-1/2 max-w-[200px] sm:max-w-[220px]">
                                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200 to-brand-primary rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-xl"></div>
                                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-all duration-500">
                                    <ScheduleMockup />
                                </div>
                            </div>
                            <div className="relative w-1/2 max-w-[200px] sm:max-w-[220px] transform translate-y-6">
                                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500">
                                    <PerformanceMockup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUE STRIP */}
            <section className="py-16 sm:py-24 bg-[#fafafa] border-y border-gray-100">
                <div className="mx-3 px-4 md:px-14 text-center">
                    <div className="max-w-3xl mx-auto" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Designed to Get Out of Your Way</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">Big buttons, fast taps, and offline-first — the app just works in the field.</p>
                    </div>
                    <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { i: "fa-solid fa-wifi", v: "Offline", l: "Works anywhere" },
                            { i: "fa-solid fa-language", v: "Multi-lang", l: "20+ languages" },
                            { i: "fa-solid fa-bolt", v: "Fast", l: "One-tap actions" },
                            { i: "fa-solid fa-shield-halved", v: "Secure", l: "Encrypted data" },
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

            {/* CTA */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-primary to-green-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-20 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6 sm:space-y-8" data-aos="zoom-in">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">Empower Your Guides. Delight Your Guests.</h2>
                    <p className="text-base sm:text-xl text-green-50 font-light">Give your team the app that turns every tour into a five-star experience.</p>
                    <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <button onClick={onOpenInquiry} className="bg-white text-brand-primary px-6 py-2 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1">Request Demo</button>
                        <button onClick={() => setCurrentPage && setCurrentPage('pricing')} className="bg-transparent border border-white/40 text-white px-6 py-2 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300">View Pricing</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TourGuideAppPage;
