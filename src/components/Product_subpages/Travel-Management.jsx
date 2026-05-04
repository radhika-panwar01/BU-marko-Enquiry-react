import React, { useEffect } from "react";

const BrowserChrome = ({ url }) => (
    <div className="bg-gray-50/90 backdrop-blur px-3 sm:px-4 py-2.5 sm:py-3 flex justify-between items-center border-b border-gray-100">
        <div className="flex gap-1.5 sm:gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
        </div>
        {url && (
            <div className="bg-white rounded-md px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs text-gray-400 border border-gray-100 font-mono truncate max-w-[60%]">
                {url}
            </div>
        )}
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

/* Unified ops dashboard */
const UnifiedDashboardMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/dashboard" />
        <div className="p-4 sm:p-5 bg-gradient-to-br from-white to-gray-50 space-y-3">
            <div className="grid grid-cols-4 gap-2">
                {[
                    { l: "Bookings", v: "1.2K", c: "text-brand-primary" },
                    { l: "Revenue", v: "$84K", c: "text-blue-600" },
                    { l: "Tours", v: "32", c: "text-yellow-600" },
                    { l: "Clients", v: "486", c: "text-purple-600" },
                ].map((k, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-2">
                        <p className="text-[8px] uppercase text-gray-400 font-semibold tracking-wider">{k.l}</p>
                        <p className={`text-sm font-bold ${k.c}`}>{k.v}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                    <p className="text-[10px] font-bold text-brand-dark mb-2">Revenue Trend</p>
                    <svg viewBox="0 0 200 60" className="w-full h-12">
                        <defs>
                            <linearGradient id="travelGrad" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path d="M0,40 L30,30 L60,35 L90,18 L120,22 L150,12 L180,15 L200,8 L200,60 L0,60 Z" fill="url(#travelGrad)" />
                        <path d="M0,40 L30,30 L60,35 L90,18 L120,22 L150,12 L180,15 L200,8" fill="none" stroke="#10B981" strokeWidth="1.5" />
                    </svg>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                    <p className="text-[10px] font-bold text-brand-dark mb-2">Channels</p>
                    <div className="space-y-1.5">
                        {[
                            { l: "Direct", v: 75, c: "bg-brand-primary" },
                            { l: "Agents", v: 50, c: "bg-blue-400" },
                            { l: "OTA", v: 35, c: "bg-purple-400" },
                        ].map((ch, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-[8px] text-gray-500 mb-0.5">
                                    <span>{ch.l}</span><span>{ch.v}%</span>
                                </div>
                                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                    <div className={`h-full ${ch.c} rounded-full`} style={{ width: `${ch.v}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-[11px] font-bold text-brand-dark">Today's Activity</p>
                    <span className="text-[9px] text-gray-400">Live</span>
                </div>
                {[
                    { i: "fa-calendar-check", c: "text-brand-primary bg-green-50", t: "12 new bookings", d: "2 min ago" },
                    { i: "fa-money-bill-wave", c: "text-blue-600 bg-blue-50", t: "$3,200 received", d: "5 min ago" },
                    { i: "fa-route", c: "text-yellow-600 bg-yellow-50", t: "3 tours dispatched", d: "12 min ago" },
                ].map((a, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] py-1.5 border-t border-gray-50 first:border-0">
                        <div className={`w-6 h-6 rounded-lg ${a.c} flex items-center justify-center`}>
                            <i className={`fa-solid ${a.i} text-[9px]`}></i>
                        </div>
                        <span className="text-gray-700 font-medium flex-1">{a.t}</span>
                        <span className="text-gray-400 text-[9px]">{a.d}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* Mobile companion */
const MobileCompanionMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-green-50 to-white">
            <div className="rounded-xl bg-gradient-to-br from-brand-primary to-green-700 text-white p-3">
                <p className="text-[9px] uppercase opacity-80 tracking-wider">All-in-One Hub</p>
                <p className="text-sm font-bold mt-0.5">Today's Snapshot</p>
                <div className="grid grid-cols-3 gap-2 mt-2">
                    <div><p className="text-[8px] opacity-80">Bookings</p><p className="text-xs font-bold">42</p></div>
                    <div><p className="text-[8px] opacity-80">Tours</p><p className="text-xs font-bold">8</p></div>
                    <div><p className="text-[8px] opacity-80">Revenue</p><p className="text-xs font-bold">$12K</p></div>
                </div>
            </div>
            {[
                { i: "fa-calendar-check", l: "Bookings", c: "text-brand-primary bg-green-50" },
                { i: "fa-users", l: "CRM", c: "text-blue-600 bg-blue-50" },
                { i: "fa-truck", l: "Operations", c: "text-orange-500 bg-orange-50" },
                { i: "fa-wallet", l: "Finance", c: "text-purple-600 bg-purple-50" },
            ].map((m, i) => (
                <div key={i} className="rounded-lg border border-gray-100 bg-white p-2.5 flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-lg ${m.c} flex items-center justify-center`}>
                        <i className={`fa-solid ${m.i} text-[11px]`}></i>
                    </div>
                    <span className="text-[11px] font-bold text-brand-dark">{m.l}</span>
                    <i className="fa-solid fa-chevron-right text-gray-300 text-[9px] ml-auto"></i>
                </div>
            ))}
        </div>
    </div>
);

/* Workflow connector visual */
const WorkflowMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/workflow" />
        <div className="p-4 sm:p-5 bg-gradient-to-br from-white to-green-50/40">
            <p className="text-xs font-bold text-brand-dark mb-4">Connected Workflow</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
                {[
                    { i: "fa-calendar-check", l: "Book", c: "bg-green-50 text-brand-primary" },
                    { i: "fa-user-tie", l: "Assign", c: "bg-blue-50 text-blue-600" },
                    { i: "fa-route", l: "Operate", c: "bg-yellow-50 text-yellow-600" },
                    { i: "fa-wallet", l: "Bill", c: "bg-purple-50 text-purple-600" },
                ].map((s, i) => (
                    <div key={i} className="rounded-xl border border-gray-100 bg-white p-3 text-center shadow-sm relative">
                        <div className={`w-9 h-9 rounded-lg ${s.c} flex items-center justify-center mx-auto mb-1`}>
                            <i className={`fa-solid ${s.i} text-sm`}></i>
                        </div>
                        <p className="text-[10px] font-bold text-brand-dark">{s.l}</p>
                        <span className="absolute -top-2 -left-2 text-[8px] bg-brand-primary text-white rounded-full w-4 h-4 flex items-center justify-center font-bold">{i + 1}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 rounded-lg bg-brand-light p-2.5 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white text-brand-primary flex items-center justify-center">
                    <i className="fa-solid fa-bolt text-[11px]"></i>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-brand-dark">Auto-syncing across modules</p>
                    <p className="text-[9px] text-gray-500">No double entry · No data silos</p>
                </div>
            </div>
        </div>
    </div>
);

const TravelManagementPage = ({ onOpenInquiry, setCurrentPage }) => {
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
                                <span className="text-brand-dark font-semibold">All-in-One Travel</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary font-medium text-sm mb-5 shadow-sm border border-green-100">
                                <i className="fa-solid fa-globe text-[12px]"></i>
                                All-in-One Travel Management
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight mb-5">
                                The <span className="text-brand-primary">All-in-One Travel Management</span> System
                            </h1>
                            <p className="text-brand-gray text-sm md:text-base mb-7 leading-relaxed font-light">
                                Run your entire travel business from a single platform — bookings, CRM, operations, and finance, all working together.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button onClick={onOpenInquiry} className="bg-brand-primary text-white px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:bg-green-700 shadow-lg shadow-green-500/20 transition-all duration-300">
                                    Request Demo
                                </button>
                                <button onClick={() => document.getElementById("core-features").scrollIntoView({ behavior: "smooth" })} className="bg-white text-brand-dark border border-gray-200 px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-300">
                                    Explore Features
                                </button>
                            </div>
                            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 max-w-md">
                                {[
                                    { v: "1 Login", l: "Every module" },
                                    { v: "Real-time", l: "Cross-sync" },
                                    { v: "40+", l: "Integrations" },
                                ].map((t, i) => (
                                    <div key={i}>
                                        <p className="text-brand-primary font-bold text-base sm:text-lg">{t.v}</p>
                                        <p className="text-brand-gray text-xs">{t.l}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full" data-aos="fade-left" data-aos-delay="200">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-green-300 rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-2xl"></div>
                                <div className="relative z-10 flex items-center gap-3 sm:gap-6">
                                    <div className="w-2/3 relative group">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-all duration-500">
                                            <UnifiedDashboardMockup />
                                        </div>
                                        <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3 animate-bounce" style={{ animationDuration: "3s" }}>
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-primary">
                                                <i className="fa-solid fa-bolt"></i>
                                            </div>
                                            <div>
                                                <p className="text-[10px] sm:text-xs text-brand-gray">Productivity</p>
                                                <p className="text-xs sm:text-sm font-bold text-brand-dark">+240%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 relative group transform translate-y-12">
                                        <div className="bg-white rounded-xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                            <MobileCompanionMockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TOP CARDS */}
            <section id="core-features" className="py-16 sm:py-24 bg-[#fafafa]">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4">Everything Connected, Everything Effortless</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">No more juggling tools — every module shares the same data, the same login, and the same flow.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: "fa-solid fa-layer-group", title: "Unified Modules", desc: "Bookings, CRM, ops, and finance live in one connected workspace — no syncing, no exports." },
                            { icon: "fa-solid fa-shuffle", title: "Cross-Module Automation", desc: "Confirm a booking and watch invoices, schedules, and assignments update on their own." },
                            { icon: "fa-solid fa-chart-pie", title: "Single Source of Truth", desc: "One dashboard, one set of numbers — every team works from the same live data." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-light flex items-center justify-center text-xl sm:text-2xl text-brand-primary mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                                    <i className={item.icon}></i>
                                </div>
                                <h3 className="font-bold text-lg sm:text-xl text-brand-dark mb-2 sm:mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                                <p className="text-brand-gray leading-relaxed font-light text-sm sm:text-base">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 1 — Unified Workspace */}
            <section className="py-16 sm:py-24 bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl mb-3 sm:mb-4">
                                <i className="fa-solid fa-layer-group"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                One Workspace for Every Team
                            </h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">
                                Sales, ops, accounting, and management all collaborate inside the same system — no bouncing between apps, no version conflicts.
                            </p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {[
                                    "Shared bookings, clients, and resources across teams",
                                    "Role-based access for every department",
                                    "Real-time notifications and activity feed",
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
                                <UnifiedDashboardMockup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — Workflow */}
            <section className="py-16 sm:py-24 bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 w-full order-2 lg:order-1 relative group" data-aos="fade-right">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-brand-primary rounded-[2rem] transform rotate-2 scale-105 opacity-20 blur-xl"></div>
                            <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                                <WorkflowMockup />
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary text-xl mb-3 sm:mb-4 shadow-sm">
                                <i className="fa-solid fa-shuffle"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                From Booking to Billing — Without Lifting a Finger
                            </h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">
                                The moment a booking is confirmed, schedules update, drivers and guides get assigned, and invoices generate — automatically.
                            </p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {[
                                    "Auto-trigger workflows across modules",
                                    "Smart assignment rules for staff & resources",
                                    "Instant invoice & payment link generation",
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

            {/* SECTION 3 — Mobile Companion */}
            <section className="py-16 sm:py-24 bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl mb-3 sm:mb-4">
                                <i className="fa-solid fa-mobile-screen"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Your Business, in Your Pocket
                            </h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">
                                The mobile companion gives owners and managers a real-time pulse on their entire business — wherever they are.
                            </p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {[
                                    "Live KPIs on bookings, tours, and revenue",
                                    "Approve quotes, refunds, and expenses on the go",
                                    "Push notifications for what actually matters",
                                ].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium">
                                        <i className="fa-solid fa-circle-check text-brand-primary"></i>{p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full flex justify-center" data-aos="fade-left">
                            <div className="relative group max-w-[280px] sm:max-w-xs w-full">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-brand-primary rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-2xl"></div>
                                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden">
                                    <MobileCompanionMockup />
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
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Built for the Way Travel Businesses Actually Run</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">From a single tour operator to a multi-entity DMC — the platform scales with you.</p>
                    </div>
                    <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { i: "fa-solid fa-clock", v: "Save Time", l: "Auto workflows" },
                            { i: "fa-solid fa-eye", v: "Visibility", l: "Live across teams" },
                            { i: "fa-solid fa-shield-halved", v: "Secure", l: "Role-based access" },
                            { i: "fa-solid fa-chart-line", v: "Scale", l: "Multi-entity ready" },
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
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">One System. Every Workflow. Total Clarity.</h2>
                    <p className="text-base sm:text-xl text-green-50 font-light">Stop stitching tools together — run your travel business from one connected platform.</p>
                    <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <button onClick={onOpenInquiry} className="bg-white text-brand-primary px-6 py-2 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1">Request Demo</button>
                        <button onClick={() => setCurrentPage && setCurrentPage('pricing')} className="bg-transparent border border-white/40 text-white px-6 py-2 rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300">View Pricing</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TravelManagementPage;
