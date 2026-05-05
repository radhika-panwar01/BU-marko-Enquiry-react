import React, { useEffect } from "react";
import PricingSection from "../PricingSection";
import { PRICING_DATA } from "../../pricingData";

const BrowserChrome = ({ url }) => (
    <div className="bg-gray-50/90 backdrop-blur px-4 py-3 flex justify-between items-center border-b border-gray-100">
        <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        {url && (
            <div className="bg-white rounded-md px-3 py-1 text-[10px] md:text-xs text-gray-400 border border-gray-100 font-mono truncate max-w-[60%]">
                {url}
            </div>
        )}
        <div className="w-12"></div>
    </div>
);

const MobileChrome = () => (
    <div className="bg-gray-50 px-2 py-2 flex items-center gap-1.5 border-b border-gray-100">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
    </div>
);

/* --- Section mockups ---------------------------------------------- */

/* Fleet dashboard — vehicle list + status + mini map */
const FleetDashboardMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/fleet" />
        <div className="p-5 bg-gradient-to-br from-white to-gray-50 space-y-3">
            <div className="grid grid-cols-3 gap-2">
                {[
                    { l: "Active", v: "24", c: "text-brand-primary" },
                    { l: "Idle", v: "6", c: "text-yellow-600" },
                    { l: "Service", v: "2", c: "text-red-500" },
                ].map((k, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-2.5">
                        <p className="text-[9px] uppercase text-gray-400 font-semibold tracking-wider">{k.l}</p>
                        <p className={`text-base font-bold ${k.c}`}>{k.v}</p>
                    </div>
                ))}
            </div>

            {/* Mini map */}
            <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-green-50 via-white to-blue-50 p-3 relative h-28 overflow-hidden">
                <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full opacity-60">
                    <path d="M0,40 Q50,10 100,35 T200,30" fill="none" stroke="#10B981" strokeWidth="0.6" strokeDasharray="2,2" />
                    <path d="M0,55 Q60,80 120,50 T200,60" fill="none" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="2,2" />
                    <path d="M40,0 Q60,40 90,80" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
                </svg>
                {[
                    { x: "20%", y: "30%", c: "bg-brand-primary" },
                    { x: "55%", y: "55%", c: "bg-brand-primary" },
                    { x: "75%", y: "25%", c: "bg-yellow-500" },
                    { x: "35%", y: "70%", c: "bg-brand-primary" },
                    { x: "85%", y: "65%", c: "bg-red-500" },
                ].map((p, i) => (
                    <span
                        key={i}
                        className={`absolute w-2.5 h-2.5 rounded-full ${p.c} ring-4 ring-white shadow`}
                        style={{ left: p.x, top: p.y }}
                    ></span>
                ))}
                <span className="absolute bottom-2 right-2 text-[9px] bg-white/90 text-gray-500 px-2 py-0.5 rounded-full border border-gray-100 font-semibold">
                    Live tracking
                </span>
            </div>

            {/* Vehicle list */}
            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold text-brand-dark">Fleet Status</p>
                    <span className="text-[9px] text-gray-400">Updated 2m ago</span>
                </div>
                {[
                    { id: "VH-204", d: "M. Nasir", s: "On Route", c: "bg-green-50 text-brand-primary" },
                    { id: "VH-188", d: "A. Patel", s: "Idle", c: "bg-yellow-50 text-yellow-600" },
                    { id: "VH-172", d: "—", s: "Service", c: "bg-red-50 text-red-500" },
                ].map((v, i) => (
                    <div key={i} className="flex justify-between items-center text-[11px] py-1.5 border-t border-gray-50 first:border-0">
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-brand-light flex items-center justify-center text-brand-primary">
                                <i className="fa-solid fa-truck text-[10px]"></i>
                            </div>
                            <div>
                                <p className="font-bold text-brand-dark leading-tight">{v.id}</p>
                                <p className="text-gray-500 text-[10px]">{v.d}</p>
                            </div>
                        </div>
                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${v.c}`}>{v.s}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* Driver allocation mobile mockup */
const DriverAllocationMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-4 space-y-3 bg-gradient-to-b from-green-50 to-white">
            <div className="rounded-xl bg-gradient-to-br from-brand-primary to-green-700 text-white p-3 shadow-md">
                <p className="text-[9px] uppercase opacity-80 tracking-wider">Today's Trips</p>
                <p className="text-lg font-bold mt-0.5">14 Active</p>
                <p className="text-[10px] opacity-90 mt-1">3 awaiting driver</p>
            </div>

            <div className="space-y-2">
                {[
                    { n: "M. Nasir", t: "City Tour · 09:30", st: "Assigned" },
                    { n: "A. Patel", t: "Airport Run · 11:00", st: "Pending" },
                    { n: "S. Khan", t: "Day Excursion · 14:00", st: "Assigned" },
                ].map((d, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-2.5 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-brand-light text-brand-primary flex items-center justify-center font-bold text-[10px]">
                            {d.n.split(" ").map(s => s[0]).join("")}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-bold text-brand-dark truncate">{d.n}</p>
                            <p className="text-[9px] text-gray-500 truncate">{d.t}</p>
                        </div>
                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold ${d.st === "Assigned" ? "bg-green-50 text-brand-primary" : "bg-yellow-50 text-yellow-600"}`}>
                            {d.st}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* Tour planning timeline mockup */
const TourPlanningMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/tours/schedule" />
        <div className="p-5 bg-white space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-brand-dark">Tour Schedule · This Week</p>
                <span className="text-[10px] px-2 py-0.5 bg-brand-light text-brand-primary rounded-full font-semibold">9 Tours</span>
            </div>

            {/* Day header */}
            <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-gray-400 font-semibold uppercase tracking-wider">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>

            {/* Timeline rows */}
            <div className="space-y-1.5">
                {[
                    { name: "Heritage Walk", color: "bg-brand-primary", row: [1, 1, 0, 1, 0, 1, 1] },
                    { name: "Desert Safari", color: "bg-yellow-400", row: [0, 1, 1, 0, 1, 1, 0] },
                    { name: "Coastal Tour", color: "bg-blue-400", row: [1, 0, 1, 1, 0, 0, 1] },
                    { name: "City Lights", color: "bg-purple-400", row: [0, 0, 1, 0, 1, 1, 0] },
                ].map((t, i) => (
                    <div key={i} className="space-y-1">
                        <p className="text-[10px] font-semibold text-brand-dark">{t.name}</p>
                        <div className="grid grid-cols-7 gap-1">
                            {t.row.map((cell, j) => (
                                <div
                                    key={j}
                                    className={`h-3 rounded ${cell ? t.color : "bg-gray-100"}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="rounded-lg bg-brand-light p-2.5 flex items-center gap-2 mt-2">
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-brand-primary">
                    <i className="fa-solid fa-circle-check text-[11px]"></i>
                </div>
                <div>
                    <p className="text-[10px] font-bold text-brand-dark">All guides assigned</p>
                    <p className="text-[9px] text-gray-500">No scheduling conflicts detected</p>
                </div>
            </div>
        </div>
    </div>
);

/* Guide dashboard mobile mockup */
const GuideDashboardMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-4 space-y-3 bg-gradient-to-b from-blue-50 to-white">
            <p className="text-[10px] font-bold text-brand-dark">Top Guides</p>
            {[
                { n: "Lina K.", r: 4.9, t: 142, av: true },
                { n: "Omar R.", r: 4.8, t: 118, av: true },
                { n: "Daniya H.", r: 4.7, t: 96, av: false },
            ].map((g, i) => (
                <div key={i} className="rounded-xl border border-gray-100 bg-white p-2.5 shadow-sm flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-primary to-green-300 text-white flex items-center justify-center font-bold text-[11px]">
                        {g.n.split(" ").map(s => s[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-bold text-brand-dark">{g.n}</p>
                        <div className="flex items-center gap-1 text-[9px] text-gray-500">
                            <i className="fa-solid fa-star text-yellow-400"></i>
                            <span className="font-semibold text-brand-dark">{g.r}</span>
                            <span>·</span>
                            <span>{g.t} tours</span>
                        </div>
                    </div>
                    <span className={`w-2 h-2 rounded-full ${g.av ? "bg-brand-primary" : "bg-gray-300"}`}></span>
                </div>
            ))}

            <div className="rounded-xl bg-brand-primary text-white p-3 mt-2">
                <p className="text-[9px] uppercase opacity-80 tracking-wider">Avg. Rating</p>
                <p className="text-lg font-bold">4.8 <span className="text-[10px] opacity-80 font-normal">/ 5</span></p>
            </div>
        </div>
    </div>
);

/* Resource allocation mockup */
const ResourceAllocationMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/resources" />
        <div className="p-5 bg-gradient-to-br from-white to-gray-50 space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-brand-dark">Resource Allocation</p>
                <span className="text-[10px] text-gray-400">May 2026</span>
            </div>

            {/* Stacked utilization bar */}
            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                <p className="text-[10px] font-semibold text-gray-500 mb-2">Utilization · 78%</p>
                <div className="flex h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-primary" style={{ width: "42%" }}></div>
                    <div className="bg-blue-400" style={{ width: "22%" }}></div>
                    <div className="bg-yellow-400" style={{ width: "14%" }}></div>
                    <div className="bg-gray-200" style={{ width: "22%" }}></div>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[9px] text-gray-500 mt-2">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>Vehicles</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>Equipment</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>Venues</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>Free</span>
                </div>
            </div>

            {/* Asset list */}
            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                <p className="text-xs font-bold text-brand-dark mb-2">Assets</p>
                {[
                    { n: "Camping Gear · Set A", q: "12 / 16", s: "Available", c: "text-brand-primary bg-green-50" },
                    { n: "Speedboat — Marina", q: "1 / 2", s: "Booked", c: "text-blue-600 bg-blue-50" },
                    { n: "Audio Kit · K2", q: "0 / 4", s: "Reserved", c: "text-yellow-600 bg-yellow-50" },
                ].map((a, i) => (
                    <div key={i} className="flex justify-between items-center text-[11px] py-1.5 border-t border-gray-50 first:border-0">
                        <div>
                            <p className="font-bold text-brand-dark leading-tight">{a.n}</p>
                            <p className="text-[10px] text-gray-500">Avail. {a.q}</p>
                        </div>
                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${a.c}`}>{a.s}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* Resource planning calendar mockup */
const ResourcePlanningMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-4 bg-gradient-to-b from-purple-50 to-white space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-[10px] font-bold text-brand-dark">Bookings · Wk 19</p>
                <span className="text-[9px] text-gray-400">Conflict-free</span>
            </div>

            {/* Mini grid */}
            <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-sm">
                <div className="grid grid-cols-7 gap-0.5">
                    {Array.from({ length: 28 }).map((_, i) => {
                        const filled = [3, 4, 9, 11, 16, 18, 19, 22, 25].includes(i);
                        const heavy = [11, 19].includes(i);
                        return (
                            <div
                                key={i}
                                className={`aspect-square rounded-sm ${heavy ? "bg-brand-primary" : filled ? "bg-green-200" : "bg-gray-100"}`}
                            ></div>
                        );
                    })}
                </div>
                <div className="flex justify-between mt-2 text-[8px] text-gray-400">
                    <span>Light</span>
                    <span>Heavy</span>
                </div>
            </div>

            <div className="rounded-xl bg-white border border-gray-100 p-2.5">
                <p className="text-[10px] font-bold text-brand-dark mb-1.5">Upcoming Holds</p>
                {[
                    { n: "Bus 04 · Heritage", d: "Tue 09:30" },
                    { n: "Audio Kit · Gala", d: "Fri 18:00" },
                ].map((h, i) => (
                    <div key={i} className="flex justify-between text-[10px] py-1 border-t border-gray-50 first:border-0">
                        <span className="text-brand-dark font-semibold">{h.n}</span>
                        <span className="text-gray-500">{h.d}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* --- Page --------------------------------------------------------- */

const OperationsLogisticsPage = ({ onOpenInquiry, setCurrentPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        if (typeof window !== "undefined" && window.AOS) {
            window.AOS.init({ once: true });
            setTimeout(() => {
                window.AOS.refresh();
            }, 100);
        }
    }, []);

    return (
        <main className="pt-[60px] md:pt-20 bg-white font-sans overflow-hidden">
            {/* HERO */}
            <section className="relative pt-20 pb-20 lg:pb-28 bg-white overflow-hidden border-b border-gray-100">
                <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-light pointer-events-none rounded-l-full blur-3xl opacity-60"></div>

                <div className="mx-3 px-4 md:px-14 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
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
                                <span className="text-brand-dark font-semibold">Fleet Management</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary font-medium text-sm mb-5 shadow-sm border border-green-100">
                                <i className="fa-solid fa-truck-fast text-[12px]"></i>
                                Fleet Management System
                            </div>

                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight mb-5">
                                <span className="text-brand-primary">Operations & Logistics</span>, Simplified
                            </h1>

                            <p className="text-brand-gray text-sm md:text-base mb-7 leading-relaxed font-light">
                                Manage vehicles, guides, schedules, and resources from one powerful system designed for smooth daily operations.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={onOpenInquiry}
                                    className="bg-brand-primary text-white px-6 py-2 rounded-xl font-medium text-lg hover:bg-green-700 shadow-lg shadow-green-500/20 transition-all duration-300"
                                >
                                    Request Demo
                                </button>
                                <button
                                    onClick={() => document.getElementById("core-features").scrollIntoView({ behavior: "smooth" })}
                                    className="bg-white text-brand-dark border border-gray-200 px-6 py-2 rounded-xl font-medium text-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                                >
                                    Explore Features
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
                                {[
                                    { v: "30%", l: "Less Manual Work" },
                                    { v: "Live", l: "Fleet Visibility" },
                                    { v: "Zero", l: "Double Bookings" },
                                ].map((t, i) => (
                                    <div key={i} className="text-left">
                                        <p className="text-brand-primary font-bold text-lg">{t.v}</p>
                                        <p className="text-brand-gray text-xs">{t.l}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
                            <div className="relative perspective-1000">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-green-300 rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-2xl"></div>

                                <div className="relative z-10 flex items-center gap-6">
                                    <div className="w-2/3 relative group">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-all duration-500">
                                            <FleetDashboardMockup />
                                        </div>

                                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: "3s" }}>
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-primary">
                                                <i className="fa-solid fa-route"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-brand-gray font-medium">On Route</p>
                                                <p className="text-sm font-bold text-brand-dark">24 Vehicles</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/3 relative group transform translate-y-12">
                                        <div className="bg-white rounded-xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                            <DriverAllocationMockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TOP CARDS */}
            <section id="core-features" className="py-[72px] bg-[#fafafa]">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Core Capabilities</h2>
                        <p className="text-brand-gray text-lg font-light">Everything your operations team needs to run a tight, transparent, and reliable schedule.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "fa-solid fa-truck",
                                title: "Fleet Management System",
                                desc: "Manage vehicles, maintenance, and availability in real time. Assign drivers and optimize usage efficiently.",
                            },
                            {
                                icon: "fa-solid fa-person-hiking",
                                title: "Tour & Guide Management",
                                desc: "Assign guides, manage schedules, and track performance. Ensure smooth day-to-day operations.",
                            },
                            {
                                icon: "fa-solid fa-boxes-stacked",
                                title: "Resource Management",
                                desc: "Manage equipment, materials, and internal assets. Avoid double bookings and resource conflicts.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center text-2xl text-brand-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <i className={item.icon}></i>
                                </div>
                                <h3 className="font-bold text-xl text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                                <p className="text-brand-gray leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 1 — Fleet (text left, mockups right) */}
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl mb-4">
                                <i className="fa-solid fa-truck"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Smart Fleet Management
                            </h2>
                            <p className="text-brand-gray text-lg font-light leading-relaxed">
                                Track vehicle availability, assign drivers, and manage maintenance schedules with ease — all from a single, real-time dashboard.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Real-time vehicle tracking",
                                    "Driver assignment & scheduling",
                                    "Maintenance alerts and logs",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium">
                                        <i className="fa-solid fa-circle-check text-brand-primary"></i>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 relative perspective-1000" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-green-200 rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-xl"></div>

                            <div className="relative z-10 flex items-center gap-6">
                                <div className="w-2/3 relative group">
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                                        <FleetDashboardMockup />
                                    </div>
                                    <div className="absolute -top-5 -right-4 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center gap-1 z-20 hidden md:flex">
                                        <span className="text-[10px] text-brand-gray uppercase font-bold tracking-wider">Uptime</span>
                                        <span className="text-brand-primary font-bold text-lg">99%</span>
                                    </div>
                                </div>

                                <div className="w-1/3 relative group transform -translate-y-6">
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
                                        <DriverAllocationMockup />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — Tour & Guide (mockups left, text right) */}
            <section className="py-[72px] bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1 relative perspective-1000" data-aos="fade-right">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-brand-primary rounded-[2rem] transform rotate-2 scale-105 opacity-20 blur-xl"></div>

                            <div className="relative z-10 flex items-center gap-6">
                                <div className="w-1/3 relative group transform translate-y-6">
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
                                        <GuideDashboardMockup />
                                    </div>
                                    <div className="absolute -bottom-3 -left-3 bg-white p-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-1 z-20">
                                        <i className="fa-solid fa-star text-yellow-400 text-[10px]"></i>
                                        <span className="text-[10px] font-bold text-brand-dark">4.8</span>
                                    </div>
                                </div>

                                <div className="w-2/3 relative group">
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                                        <TourPlanningMockup />
                                    </div>
                                    <div className="absolute -top-5 -right-4 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 z-20 hidden md:flex animate-pulse">
                                        <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                                            <i className="fa-solid fa-calendar-day text-sm"></i>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-brand-gray font-medium">9 Tours</p>
                                            <p className="text-xs font-bold text-brand-dark">This Week</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary text-xl mb-4 shadow-sm">
                                <i className="fa-solid fa-person-hiking"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Efficient Tour & Guide Coordination
                            </h2>
                            <p className="text-brand-gray text-lg font-light leading-relaxed">
                                Plan and manage guides, schedules, and daily operations seamlessly — eliminate clashes and keep every tour running on time.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Assign guides to tours instantly",
                                    "Manage schedules and availability",
                                    "Monitor performance and feedback",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium">
                                        <i className="fa-solid fa-circle-check text-brand-primary"></i>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — Resource (text left, mockups right) */}
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl mb-4">
                                <i className="fa-solid fa-boxes-stacked"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Complete Resource Control
                            </h2>
                            <p className="text-brand-gray text-lg font-light leading-relaxed">
                                Keep track of all operational resources and avoid conflicts or losses — equipment, venues, and assets all in one organized place.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Equipment and asset tracking",
                                    "Prevent double bookings",
                                    "Centralized resource planning",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium">
                                        <i className="fa-solid fa-circle-check text-brand-primary"></i>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 relative perspective-1000" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-brand-primary rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-2xl"></div>

                            <div className="relative z-10 flex items-center gap-6">
                                <div className="w-1/3 relative group transform -translate-y-8">
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden transform -rotate-6 group-hover:rotate-0 transition-all duration-500">
                                        <ResourcePlanningMockup />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2 z-20">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">
                                            <i className="fa-solid fa-check"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-2/3 relative group">
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                                        <ResourceAllocationMockup />
                                    </div>
                                    <div className="absolute -top-6 -right-4 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center gap-1 z-20 animate-pulse hidden md:flex">
                                        <span className="text-xs text-brand-gray uppercase font-bold tracking-wider">Utilization</span>
                                        <span className="text-brand-primary font-bold text-lg">78%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXTRA VALUE SECTION */}
            <section className="py-[72px] bg-[#fafafa] border-y border-gray-100 overflow-hidden">
                <div className="mx-3 px-4 md:px-14 text-center">
                    <div className="max-w-3xl mx-auto space-y-6" data-aos="fade-up">
                        <div className="w-16 h-16 mx-auto rounded-full bg-brand-light flex items-center justify-center text-brand-primary text-2xl mb-2 shadow-sm">
                            <i className="fa-solid fa-network-wired"></i>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
                            Run Operations Without Chaos
                        </h2>
                        <p className="text-brand-gray text-lg font-light leading-relaxed">
                            Bring all logistics into one system and eliminate manual coordination — your team gets one source of truth, your business gets calm, predictable execution.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: "fa-solid fa-gauge-high", value: "Centralized", label: "Operations Dashboard" },
                            { icon: "fa-solid fa-wand-magic-sparkles", value: "Less", label: "Manual Work" },
                            { icon: "fa-solid fa-people-group", value: "Better", label: "Team Coordination" },
                            { icon: "fa-solid fa-eye", value: "Real-time", label: "Visibility" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-200 transition-colors"
                                data-aos="zoom-in"
                                data-aos-delay={i * 100}
                            >
                                <div className="w-10 h-10 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center mx-auto mb-3">
                                    <i className={stat.icon}></i>
                                </div>
                                <h4 className="text-brand-primary font-bold text-xl mb-1">{stat.value}</h4>
                                <p className="text-brand-gray text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <PricingSection
                onOpenInquiry={onOpenInquiry}
                plans={PRICING_DATA['fleet-operations']}
                title="Flexible Pricing for Fleet & Operations"
                subtitle="Choose the right plan to optimize your fleet and resource management."
            />

            {/* CTA */}
            <section className="py-[72px] bg-gradient-to-br from-brand-primary to-green-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-20 rounded-full filter blur-3xl mix-blend-overlay"></div>

                <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-8" data-aos="zoom-in">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                        Take Full Control of Your Operations
                    </h2>
                    <p className="text-xl text-green-50 font-light">
                        Simplify logistics, reduce errors, and scale your business with confidence.
                    </p>
                    <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={onOpenInquiry}
                            className="bg-white text-brand-primary px-6 py-2 rounded-xl font-bold text-lg hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Request Demo
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OperationsLogisticsPage;
