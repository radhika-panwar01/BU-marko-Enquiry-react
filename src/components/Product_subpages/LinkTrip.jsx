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

/* Trip Builder Dashboard Mockup */
const TripBuilderMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="linktrip.bu-marka.com/builder" />
        <div className="p-4 sm:p-5 bg-gradient-to-br from-white to-green-50/30 space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-brand-dark">Trip Builder</p>
                <span className="text-[10px] px-2 py-0.5 bg-brand-light text-brand-primary rounded-full font-semibold">Bali Explorer — 7 Days</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {[
                    { l: "Services", v: "6", c: "text-brand-primary" },
                    { l: "Guests", v: "4", c: "text-brand-primary" },
                    { l: "Days", v: "7", c: "text-brand-primary" },
                ].map((k, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-2.5 text-center">
                        <p className="text-[9px] uppercase text-gray-400 font-semibold tracking-wider">{k.l}</p>
                        <p className={`text-base font-bold ${k.c}`}>{k.v}</p>
                    </div>
                ))}
            </div>
            <div className="rounded-xl border border-gray-100 bg-white divide-y divide-gray-50 overflow-hidden shadow-sm">
                {[
                    { icon: "fa-plane", label: "Flight", detail: "LIS → DPS · Direct", color: "text-brand-primary bg-green-50" },
                    { icon: "fa-hotel", label: "Hotel", detail: "Kuta Beach Resort · 7N", color: "text-brand-primary bg-green-50" },
                    { icon: "fa-compass", label: "Tour", detail: "Ubud Full Day Explorer", color: "text-brand-primary bg-green-50" },
                    { icon: "fa-ship", label: "Ferry", detail: "Bali → Nusa Penida", color: "text-brand-primary bg-green-50" },
                    { icon: "fa-car", label: "Transfer", detail: "Airport · Private Van", color: "text-brand-primary bg-green-50" },
                    { icon: "fa-key", label: "Rental", detail: "Scooter · 5 Days", color: "text-brand-primary bg-green-50" },
                ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5 px-3 py-2">
                        <div className={`w-6 h-6 rounded-lg ${s.color} flex items-center justify-center shrink-0`}>
                            <i className={`fa-solid ${s.icon} text-[9px]`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-bold text-brand-dark">{s.label}</p>
                            <p className="text-[9px] text-gray-400 truncate">{s.detail}</p>
                        </div>
                        <i className="fa-solid fa-circle-check text-brand-primary text-[10px]"></i>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* Trip Schedule Mockup */
const TripScheduleMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="linktrip.bu-marka.com/schedule" />
        <div className="p-4 sm:p-5 bg-gradient-to-br from-white to-green-50/30 space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-brand-dark">Trip Itinerary</p>
                <span className="text-[10px] text-gray-400">7 days · 6 nights</span>
            </div>
            {[
                {
                    day: "Day 1", title: "Arrival & Check-In",
                    items: [
                        { time: "10:00", icon: "fa-plane-arrival", text: "Land at Ngurah Rai", color: "text-brand-primary" },
                        { time: "12:30", icon: "fa-car", text: "Private transfer to hotel", color: "text-brand-primary" },
                        { time: "14:00", icon: "fa-hotel", text: "Hotel check-in", color: "text-brand-primary" },
                    ]
                },
                {
                    day: "Day 3", title: "Ubud & Culture",
                    items: [
                        { time: "08:00", icon: "fa-compass", text: "Ubud Temple Tour", color: "text-brand-primary" },
                        { time: "13:00", icon: "fa-utensils", text: "Traditional lunch break", color: "text-yellow-600" },
                        { time: "16:00", icon: "fa-key", text: "Scooter rental pickup", color: "text-brand-primary" },
                    ]
                },
            ].map((day, di) => (
                <div key={di} className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9px] font-bold px-2 py-0.5 bg-brand-light text-brand-primary rounded-full">{day.day}</span>
                        <span className="text-[10px] font-semibold text-brand-dark">{day.title}</span>
                    </div>
                    {day.items.map((item, ii) => (
                        <div key={ii} className="flex items-center gap-2 py-1">
                            <span className="text-[8px] text-gray-400 w-8 shrink-0">{item.time}</span>
                            <i className={`fa-solid ${item.icon} ${item.color} text-[9px] w-4 text-center shrink-0`}></i>
                            <span className="text-[9px] text-gray-600">{item.text}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

/* Trip Summary & PDF Mockup */
const TripSummaryMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="linktrip.bu-marka.com/summary" />
        <div className="p-4 sm:p-5 bg-gradient-to-br from-white to-green-50/20 space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-brand-dark">Trip Summary</p>
                <button className="text-[9px] px-2.5 py-1 bg-brand-primary text-white rounded-lg font-semibold flex items-center gap-1">
                    <i className="fa-solid fa-file-pdf"></i> Export PDF
                </button>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-brand-primary to-green-700 p-3 text-white">
                <p className="text-[9px] opacity-80 uppercase tracking-wider">Bali Explorer Package</p>
                <p className="text-sm font-bold">Total: €3,240</p>
                <p className="text-[9px] opacity-70 mt-0.5">4 guests · 7 days · 6 services</p>
            </div>
            <div className="space-y-2">
                {[
                    { l: "Flights", v: "€1,200", icon: "fa-plane" },
                    { l: "Hotel (7N)", v: "€980", icon: "fa-hotel" },
                    { l: "Tours", v: "€480", icon: "fa-compass" },
                    { l: "Transfers", v: "€220", icon: "fa-car" },
                    { l: "Ferry", v: "€180", icon: "fa-ship" },
                    { l: "Rental", v: "€180", icon: "fa-key" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 border-b border-gray-50 pb-1.5">
                        <div className="w-5 h-5 rounded-md bg-brand-light text-brand-primary flex items-center justify-center">
                            <i className={`fa-solid ${item.icon} text-[8px]`}></i>
                        </div>
                        <span className="text-[9px] text-gray-600 flex-1">{item.l}</span>
                        <span className="text-[9px] font-bold text-brand-dark">{item.v}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* Kit List Mockup */
const KitListMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-green-50 to-white">
            <p className="text-[11px] font-bold text-brand-dark">Packing & Kit List</p>
            <div className="rounded-xl bg-gradient-to-br from-brand-primary to-green-700 text-white p-3">
                <p className="text-[9px] opacity-80">Bali — Tropical & Active</p>
                <p className="text-sm font-bold mt-0.5">Kit Checklist</p>
                <p className="text-[9px] opacity-70 mt-1">18 items · 3 categories</p>
            </div>
            {[
                { cat: "Clothing", items: ["Lightweight shirts ×5", "Shorts ×3", "Rain jacket"], icon: "fa-shirt" },
                { cat: "Documents", items: ["Passport & visa", "Travel insurance", "Booking vouchers"], icon: "fa-id-card" },
                { cat: "Health & Safety", items: ["Sunscreen SPF50", "Insect repellent", "First aid kit"], icon: "fa-kit-medical" },
            ].map((cat, ci) => (
                <div key={ci} className="rounded-lg border border-gray-100 bg-white p-2.5">
                    <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-6 h-6 rounded-md bg-brand-light text-brand-primary flex items-center justify-center">
                            <i className={`fa-solid ${cat.icon} text-[9px]`}></i>
                        </div>
                        <span className="text-[10px] font-bold text-brand-dark">{cat.cat}</span>
                    </div>
                    {cat.items.map((item, ii) => (
                        <div key={ii} className="flex items-center gap-2 py-0.5">
                            <div className="w-3 h-3 rounded border border-gray-200 flex items-center justify-center">
                                <i className="fa-solid fa-check text-[6px] text-brand-primary"></i>
                            </div>
                            <span className="text-[9px] text-gray-500">{item}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

const LinkTripPage = ({ onOpenInquiry, setCurrentPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        if (typeof window !== "undefined" && window.AOS) {
            window.AOS.init({ once: true });
            setTimeout(() => window.AOS.refresh(), 100);
        }
    }, []);

    const services = [
        { icon: "fa-hotel", label: "Accommodation", desc: "Hotels, resorts, villas, and guest houses in one search" },
        { icon: "fa-plane", label: "Flights", desc: "Direct and connecting flights with real-time availability" },
        { icon: "fa-compass", label: "Tours", desc: "Day trips, excursions, and guided experiences" },
        { icon: "fa-ship", label: "Ferry", desc: "Island hops and water crossings fully integrated" },
        { icon: "fa-car", label: "Transfers", desc: "Airport and private transfers with live assignment" },
        { icon: "fa-key", label: "Rentals", desc: "Cars, bikes, and scooters attached to any itinerary" },
    ];

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
                                <span className="text-brand-dark font-semibold">BU LinkTrip</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary font-medium text-sm mb-5 shadow-sm border border-green-100">
                                <i className="fa-solid fa-link text-[12px]"></i>
                                Trip Booking & Management Platform
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight mb-5">
                                Build, Price & Deliver <span className="text-brand-primary">Complete Trips</span> from One Platform
                            </h1>
                            <p className="text-brand-gray text-sm md:text-base mb-7 leading-relaxed font-light">
                                BU LinkTrip combines flights, accommodation, tours, ferry, transfers, and rentals into a single bookable trip — with live schedules, PDF proposals, kit lists, and full pricing breakdowns.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button onClick={onOpenInquiry} className="bg-brand-primary text-white px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:bg-green-700 shadow-lg shadow-green-500/20 transition-all duration-300">
                                    Request Demo
                                </button>
                                <button onClick={() => document.getElementById("services-section").scrollIntoView({ behavior: "smooth" })} className="bg-white text-brand-dark border border-gray-200 px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-300">
                                    Explore Features
                                </button>
                            </div>
                            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 max-w-md">
                                {[
                                    { v: "6 Types", l: "Travel services" },
                                    { v: "1-Click", l: "PDF export" },
                                    { v: "Live", l: "Trip scheduling" },
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
                                            <TripBuilderMockup />
                                        </div>
                                        <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3 animate-bounce" style={{ animationDuration: "3s" }}>
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-primary">
                                                <i className="fa-solid fa-file-pdf"></i>
                                            </div>
                                            <div>
                                                <p className="text-[10px] sm:text-xs text-brand-gray">Proposal ready</p>
                                                <p className="text-xs sm:text-sm font-bold text-brand-dark">PDF Generated</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 relative group transform translate-y-12">
                                        <div className="bg-white rounded-xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                            <KitListMockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6 SERVICE TYPES */}
            <section id="services-section" className="py-[72px] bg-[#fafafa]">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4">Six Travel Services. One Unified Trip.</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">Link every travel component into a seamless, priced itinerary — no separate tools, no manual calculations.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {services.map((svc, i) => (
                            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-light flex items-center justify-center text-xl sm:text-2xl text-brand-primary mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                                    <i className={`fa-solid ${svc.icon}`}></i>
                                </div>
                                <h3 className="font-bold text-lg sm:text-xl text-brand-dark mb-2 sm:mb-3 group-hover:text-brand-primary transition-colors">{svc.label}</h3>
                                <p className="text-brand-gray leading-relaxed font-light text-sm sm:text-base">{svc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 1 — Trip Builder */}
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl mb-3 sm:mb-4">
                                <i className="fa-solid fa-wand-magic-sparkles"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Build Any Trip in Minutes
                            </h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">
                                Combine flights, accommodation, tours, ferries, transfers, and rentals into one priced package — all from a single drag-and-drop builder.
                            </p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {[
                                    "Smart product matching based on destination and dates",
                                    "Real-time pricing with multi-supplier comparison",
                                    "Advanced multi-product quotation engine",
                                    "Dynamic & instant price quotation for each component",
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
                                <TripBuilderMockup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — Trip Schedule */}
            <section className="py-[72px] bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 w-full order-2 lg:order-1 relative group" data-aos="fade-right">
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-brand-primary rounded-[2rem] transform rotate-2 scale-105 opacity-20 blur-xl"></div>
                            <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                                <TripScheduleMockup />
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary text-xl mb-3 sm:mb-4 shadow-sm">
                                <i className="fa-solid fa-calendar-days"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Visual Day-by-Day Trip Schedules
                            </h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">
                                Every booking automatically slots into a live itinerary view — showing times, locations, and activities for each day of the trip.
                            </p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {[
                                    "Chronological schedule built from all booked services",
                                    "Interactive digital trip link shareable with clients",
                                    "Personalized travel documents per passenger",
                                    "Live updates sync across all booking changes",
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

            {/* SECTION 3 — Trip Summary & PDF */}
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl mb-3 sm:mb-4">
                                <i className="fa-solid fa-file-pdf"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Professional PDF Proposals in One Click
                            </h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">
                                Generate a branded, detailed PDF proposal with full trip pricing, service breakdown, and itinerary — ready to send directly to clients.
                            </p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {[
                                    "Full per-service pricing with totals and per-person breakdown",
                                    "Trip summary with all service categories listed",
                                    "Margin & revenue analytics per trip and supplier",
                                    "Profitability report generation for each package",
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
                                <TripSummaryMockup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4 — Kit List */}
            <section className="py-[72px] bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 w-full order-2 lg:order-1 flex justify-center" data-aos="fade-right">
                            <div className="relative group max-w-[280px] sm:max-w-xs w-full">
                                <div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-brand-primary rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-2xl"></div>
                                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden">
                                    <KitListMockup />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary text-xl mb-3 sm:mb-4 shadow-sm">
                                <i className="fa-solid fa-list-check"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Smart Kit Lists & Travel Guides
                            </h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">
                                Automatically generate destination-specific packing lists and travel guides based on the trip type, duration, and activities — delivered to clients via their digital trip link.
                            </p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {[
                                    "Destination-aware packing lists per trip type",
                                    "Categorized kit checklist (clothing, docs, health)",
                                    "Client-facing travel tips and local guides",
                                    "Shareable via interactive digital trip link",
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
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Everything a Travel Agent Needs to Sell Smarter</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">From quick quotes to complete packages — BU LinkTrip handles the entire trip lifecycle.</p>
                    </div>
                    <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { i: "fa-solid fa-bolt", v: "Instant", l: "Price quotation" },
                            { i: "fa-solid fa-route", v: "Full Trip", l: "Scheduling view" },
                            { i: "fa-solid fa-file-pdf", v: "PDF", l: "Proposal export" },
                            { i: "fa-solid fa-list-check", v: "Kit List", l: "Auto-generated" },
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-200 transition-colors" data-aos="zoom-in" data-aos-delay={i * 100}>
                                <div className="w-10 h-10 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center mx-auto mb-3">
                                    <i className={s.i}></i>
                                </div>
                                <h4 className="text-brand-primary font-bold text-base sm:text-xl mb-1">{s.v}</h4>
                                <p className="text-brand-gray text-xs sm:text-sm">{s.l}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CRM & SUPPLIER SECTION */}
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4">Built-In CRM, Suppliers & Finance</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">Manage client relationships, supplier contracts, and trip profitability from the same platform.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: "fa-users", title: "Built-in Travel CRM", desc: "Track every client, quote, and booking in a shared pipeline — with full communication history." },
                            { icon: "fa-handshake", title: "Supplier & Contract Hub", desc: "Manage supplier agreements, net rates, and availability in one place linked to every trip." },
                            { icon: "fa-chart-pie", title: "Profitability Analytics", desc: "See margin per trip, per supplier, and per service type — with revenue dashboard and P&L reports." },
                            { icon: "fa-envelope-open-text", title: "Email & Task Management", desc: "Auto-assign tasks, send confirmations, and manage follow-ups without leaving the platform." },
                            { icon: "fa-ticket", title: "Ticketing & Vouchers", desc: "Generate dynamic vouchers and digital tickets for every service in the trip package." },
                            { icon: "fa-robot", title: "AI-Powered Upgrades", desc: "Smart personalized upgrade suggestions and AI-powered custom trip creation for premium clients." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-brand-light flex items-center justify-center text-xl sm:text-2xl text-brand-primary mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                                    <i className={`fa-solid ${item.icon}`}></i>
                                </div>
                                <h3 className="font-bold text-lg sm:text-xl text-brand-dark mb-2 sm:mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                                <p className="text-brand-gray leading-relaxed font-light text-sm sm:text-base">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <PricingSection
                onOpenInquiry={onOpenInquiry}
                plans={PRICING_DATA['link-trip']}
                title="Flexible Pricing for BU LinkTrip"
                subtitle="Choose the right plan to manage, price, and deliver complete trip packages."
            />

            {/* CTA */}
            <section className="py-[72px] bg-gradient-to-br from-brand-primary to-green-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-20 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6 sm:space-y-8" data-aos="zoom-in">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">One Link. The Whole Trip. Every Detail.</h2>
                    <p className="text-base sm:text-xl text-green-50 font-light">Stop building trips across five tools — give your clients one seamless, priced, and beautiful experience.</p>
                    <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <button onClick={onOpenInquiry} className="bg-white text-brand-primary px-6 py-2 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1">Request Demo</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LinkTripPage;
