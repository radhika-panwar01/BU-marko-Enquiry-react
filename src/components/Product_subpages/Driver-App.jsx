import React, { useEffect } from "react";
import PricingSection from "../PricingSection";
import { PRICING_DATA } from "../../pricingData";

const MobileChrome = () => (
    <div className="bg-gray-50 px-2 py-2 flex items-center gap-1.5 border-b border-gray-100">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
    </div>
);

/* Active trip card mobile */
const ActiveTripMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-green-50 to-white">
            <div className="rounded-xl bg-gradient-to-br from-brand-primary to-green-700 text-white p-3">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-[9px] uppercase opacity-80 tracking-wider">Active Trip</p>
                        <p className="text-sm font-bold mt-0.5">Trip #T-2410</p>
                    </div>
                    <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded-full font-bold">EN ROUTE</span>
                </div>
                <div className="mt-3 text-[10px] space-y-1">
                    <div className="flex items-start gap-2">
                        <i className="fa-solid fa-circle text-[6px] mt-1 text-yellow-300"></i>
                        <span className="opacity-90">Marina Hotel · 09:30</span>
                    </div>
                    <div className="border-l border-white/30 ml-1 h-3"></div>
                    <div className="flex items-start gap-2">
                        <i className="fa-solid fa-location-dot text-[10px] mt-0.5 text-white"></i>
                        <span className="font-bold">Old Town Square</span>
                    </div>
                </div>
            </div>

            {/* Map preview */}
            <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-blue-50 via-white to-green-50 p-3 relative h-24 overflow-hidden">
                <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full opacity-70">
                    <path d="M10,70 Q60,40 100,50 Q150,60 190,20" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="3,3" />
                </svg>
                <div className="absolute left-3 top-1/2 w-2.5 h-2.5 rounded-full bg-yellow-400 ring-2 ring-white"></div>
                <div className="absolute right-3 top-3 w-2.5 h-2.5 rounded-full bg-brand-primary ring-2 ring-white"></div>
                <span className="absolute bottom-1 right-2 text-[9px] bg-white/90 text-gray-500 px-1.5 py-0.5 rounded-full border border-gray-100 font-semibold">12 min · 4.2 km</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <button className="rounded-lg bg-brand-primary text-white text-[10px] font-bold py-2 flex items-center justify-center gap-1"><i className="fa-solid fa-location-arrow"></i> Navigate</button>
                <button className="rounded-lg border border-gray-200 text-[10px] font-bold text-brand-dark py-2 flex items-center justify-center gap-1"><i className="fa-solid fa-phone text-brand-primary"></i> Call</button>
            </div>
        </div>
    </div>
);

/* Trip queue mobile */
const TripQueueMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-orange-50 to-white">
            <div className="flex justify-between items-center">
                <p className="text-[10px] font-bold text-brand-dark">Today · 4 Trips</p>
                <span className="text-[9px] px-2 py-0.5 bg-green-50 text-brand-primary rounded-full font-semibold">2 Done</span>
            </div>
            {[
                { t: "08:00", n: "Airport Pickup", a: "Globex Group · 4 pax", st: "done", c: "text-brand-primary bg-green-50" },
                { t: "09:30", n: "Heritage Walk", a: "Acme · 12 pax", st: "active", c: "text-yellow-600 bg-yellow-50" },
                { t: "13:30", n: "Hotel Drop", a: "Lina K. · 2 pax", st: "queued", c: "text-gray-500 bg-gray-50" },
                { t: "16:00", n: "Sunset Tour", a: "Family Lee · 5 pax", st: "queued", c: "text-gray-500 bg-gray-50" },
            ].map((t, i) => (
                <div key={i} className="rounded-lg border border-gray-100 bg-white p-2.5 flex items-center gap-2">
                    <div className="text-[9px] font-mono text-gray-400 w-10">{t.t}</div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold text-brand-dark truncate">{t.n}</p>
                        <p className="text-[9px] text-gray-500 truncate">{t.a}</p>
                    </div>
                    <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold capitalize ${t.c}`}>{t.st}</span>
                </div>
            ))}
        </div>
    </div>
);

/* Vehicle inspection mobile */
const VehicleInspectionMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-blue-50 to-white">
            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">My Vehicle</p>
                <div className="flex items-center gap-2 mt-1">
                    <div className="w-9 h-9 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center"><i className="fa-solid fa-bus"></i></div>
                    <div>
                        <p className="text-[12px] font-bold text-brand-dark">VH-204 · Sprinter</p>
                        <p className="text-[9px] text-gray-500">Plate · DXB-A 4521</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                <p className="text-[10px] font-bold text-brand-dark mb-2">Pre-trip Checklist</p>
                {[
                    { l: "Fuel level", ok: true },
                    { l: "Tire condition", ok: true },
                    { l: "Lights & indicators", ok: true },
                    { l: "First-aid kit", ok: false },
                ].map((c, i) => (
                    <div key={i} className="flex items-center gap-2 py-1 border-t border-gray-50 first:border-0 text-[10px]">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center ${c.ok ? "bg-green-50 text-brand-primary" : "bg-gray-100 text-gray-400"}`}>
                            {c.ok ? <i className="fa-solid fa-check text-[9px]"></i> : <i className="fa-regular fa-square text-[9px]"></i>}
                        </div>
                        <span className={`flex-1 ${c.ok ? "text-brand-dark font-medium" : "text-gray-500"}`}>{c.l}</span>
                    </div>
                ))}
            </div>
            <button className="w-full rounded-lg bg-brand-primary text-white text-xs font-bold py-2.5">Submit Inspection</button>
        </div>
    </div>
);

/* Earnings mobile */
const EarningsMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-purple-50 to-white">
            <div className="rounded-xl bg-gradient-to-br from-brand-primary to-green-700 text-white p-3">
                <p className="text-[9px] uppercase opacity-80 tracking-wider">This Week</p>
                <p className="text-2xl font-bold mt-0.5">$1,240</p>
                <p className="text-[10px] opacity-90 mt-1">+18% vs last week</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-3">
                <p className="text-[10px] font-bold text-brand-dark mb-2">Daily breakdown</p>
                <div className="flex items-end justify-between h-16 gap-1">
                    {[40, 60, 30, 80, 70, 90, 55].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                            <div className="w-full bg-gradient-to-t from-brand-primary to-green-300 rounded-sm" style={{ height: `${h}%` }}></div>
                            <span className="text-[7px] text-gray-400">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-gray-100 bg-white p-2">
                    <p className="text-[8px] text-gray-400 uppercase">Trips</p>
                    <p className="text-base font-bold text-brand-primary">22</p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-white p-2">
                    <p className="text-[8px] text-gray-400 uppercase">Tips</p>
                    <p className="text-base font-bold text-green-600">$140</p>
                </div>
            </div>
        </div>
    </div>
);

const DriverAppPage = ({ onOpenInquiry, setCurrentPage }) => {
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
                                <span className="text-brand-dark font-semibold">Driver App</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary font-medium text-sm mb-5 shadow-sm border border-green-100">
                                <i className="fa-solid fa-id-card-clip text-[12px]"></i>
                                Driver App
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight mb-5">
                                The <span className="text-brand-primary">Driver App</span> — Built for the Road, Not the Office
                            </h1>
                            <p className="text-brand-gray text-sm md:text-base mb-7 leading-relaxed font-light">
                                Trips, navigation, vehicle checks, and earnings — every driver tool in one simple, pocket-sized app.
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
                                            <ActiveTripMockup />
                                        </div>
                                        <div className="absolute -top-3 -left-3 bg-white p-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-1 z-20 hidden md:flex">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
                                            <span className="text-[10px] font-bold text-brand-dark">Live</span>
                                        </div>
                                    </div>
                                    <div className="w-1/2 sm:w-1/3 relative group transform translate-y-6">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                            <TripQueueMockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CARDS */}
            <section id="core-features" className="py-[72px] bg-[#fafafa]">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4">Drive Smart. Drive Connected.</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">An app drivers actually want to use — clear, fast, and made for life behind the wheel.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: "fa-solid fa-route", title: "Live Trip Sheet", desc: "Today's assignments, pickup details, and turn-by-turn navigation in one place." },
                            { icon: "fa-solid fa-clipboard-check", title: "Vehicle Inspections", desc: "Pre-trip checklists, photo logs, and instant alerts for maintenance issues." },
                            { icon: "fa-solid fa-sack-dollar", title: "Earnings & Tips", desc: "Track every trip, tip, and weekly payout — full transparency, zero spreadsheets." },
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
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-route"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Every Trip, Crystal Clear</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">No more printed sheets or guesswork. Drivers see today's schedule, customer details, and live route guidance — and dispatch sees their progress in real time.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["Day's trip queue with pickup notes", "One-tap navigation to next stop", "Live status updates back to dispatch"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full flex justify-center gap-3 sm:gap-6" data-aos="fade-left">
                            <div className="relative w-1/2 max-w-[200px] sm:max-w-[220px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-green-200 rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-xl"></div>
                                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-all duration-500">
                                    <ActiveTripMockup />
                                </div>
                            </div>
                            <div className="relative w-1/2 max-w-[200px] sm:max-w-[220px] transform translate-y-6">
                                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-500">
                                    <TripQueueMockup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="py-[72px] bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 w-full order-2 lg:order-1 flex justify-center" data-aos="fade-right">
                            <div className="relative max-w-[260px] sm:max-w-xs w-full">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-brand-primary rounded-[2rem] transform rotate-2 scale-105 opacity-20 blur-xl"></div>
                                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden">
                                    <VehicleInspectionMockup />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-clipboard-check"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Safer Vehicles, Less Downtime</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">Quick pre-trip checklists with photo logs catch issues early — and route them straight to your fleet manager.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["Custom pre-trip & post-trip checklists", "Photo & note attachments for issues", "Auto-alerts to fleet manager"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 */}
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-sack-dollar"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Transparent Earnings, Every Trip</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">Trips, tips, and payouts — all visible in real time. No more waiting for end-of-week reports.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["Live earnings + tip breakdown", "Weekly & monthly payout history", "Tax-ready trip log export"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full flex justify-center" data-aos="fade-left">
                            <div className="relative max-w-[260px] sm:max-w-xs w-full">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-brand-primary rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-2xl"></div>
                                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden">
                                    <EarningsMockup />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUE STRIP */}
            <section className="py-[72px] bg-[#fafafa] border-y border-gray-100">
                <div className="mx-3 px-4 md:px-14 text-center">
                    <div className="max-w-3xl mx-auto" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Engineered for Real Roads</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">Big tap targets, voice-friendly, and battery-conscious — designed for hours behind the wheel.</p>
                    </div>
                    <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { i: "fa-solid fa-hand-pointer", v: "Big Taps", l: "Glove-friendly UI" },
                            { i: "fa-solid fa-microphone", v: "Voice", l: "Hands-free updates" },
                            { i: "fa-solid fa-battery-three-quarters", v: "Lean", l: "Battery efficient" },
                            { i: "fa-solid fa-wifi", v: "Offline", l: "Works without signal" },
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
                plans={PRICING_DATA['driver-app']}
                title="Flexible Pricing for Driver App"
                subtitle="Choose the right plan to manage your fleet and keep your drivers connected."
            />

            {/* CTA */}
            <section className="py-[72px] bg-gradient-to-br from-brand-primary to-green-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-20 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6 sm:space-y-8" data-aos="zoom-in">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">Give Your Drivers the App They Deserve</h2>
                    <p className="text-base sm:text-xl text-green-50 font-light">Calm dashboards, clear assignments, and earnings they can trust — every trip, every day.</p>
                    <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <button onClick={onOpenInquiry} className="bg-white text-brand-primary px-6 py-2 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1">Request Demo</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DriverAppPage;
