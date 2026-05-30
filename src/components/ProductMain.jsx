import React, { useEffect } from "react";
import { BRAND } from "../theme";
import dashboard from "../assets/images/section4.png";
import illustration from "../assets/images/pana.png";

const ProductPage = ({ onOpenInquiry, setCurrentPage }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        if (typeof window !== 'undefined' && window.AOS) {
            window.AOS.init({ once: true });
            setTimeout(() => {
                window.AOS.refresh();
            }, 100);
        }
    }, []);

    return (
        <main className="pt-12 bg-[#fafafa] font-sans overflow-hidden">
            <section className="relative pt-20 pb-8 bg-white overflow-hidden border-b border-gray-100">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[100%] bg-gradient-to-b from-indigo-50/50 to-transparent pointer-events-none rounded-[100%] blur-3xl opacity-60"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-24 -left-24 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-6xl mx-auto px-6 md:px-14 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-brand-primary font-medium text-sm mb-8 border border-indigo-100 shadow-sm" data-aos="fade-down">
                        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                        Next Generation Platform
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight leading-tight mb-6 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                        The Complete <span className="text-brand-primary">All-in-One</span> Operations Platform
                    </h1>

                    <p className="text-gray-400 text-md md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed font-light" data-aos="fade-up" data-aos-delay="200">
                        A powerful system to manage bookings, operations, clients, finances, and workflows — all in one place.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4" data-aos="fade-up" data-aos-delay="300">
                        <button
                            onClick={onOpenInquiry}
                            className="bg-brand-primary text-white px-6 py-3 rounded-xl font-medium text-md hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300"
                        >
                            Request Demo
                        </button>
                        <button
                            onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-gray-700 border border-gray-200 px-6 py-3 rounded-xl font-medium text-md hover:border-brand-primary hover:text-brand-primary hover:shadow-sm transition-all duration-300"
                        >
                            Explore Products
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-[72px] bg-[#fafafa]">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="lg:w-5/12 space-y-8" data-aos="fade-right">
                            <div>
                                <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-tight">
                                    Everything You Need to Run and Scale Your Business
                                </h2>
                            </div>

                            <ul className="space-y-6">
                                {[
                                    { title: "Centralized operations", desc: "Bring all your tools and data into a single, unified workspace." },
                                    { title: "Workflow automation", desc: "Automate repetitive tasks to save time and reduce human error." },
                                    { title: "Customer management", desc: "Maintain a complete history of client interactions and preferences." },
                                    { title: "Resource & team coordination", desc: "Seamlessly schedule and allocate resources across your entire team." },
                                    { title: "Financial tracking", desc: "Monitor payments, invoices, and expenses with real-time clarity." }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-indigo-50 text-brand-primary flex items-center justify-center mt-1 border border-indigo-100">
                                            <i className="fa-solid fa-check text-sm"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-brand-gray font-semibold">{item.title}</h4>
                                            <p className="text-brand-gray text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="lg:w-7/12" data-aos="fade-left">
                            <div className="relative">

                                {/* Glow backdrop */}
                                <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl" style={{ background: 'linear-gradient(135deg,#6366F1,#8B5CF6)' }}></div>

                                {/* Main mockup card */}
                                <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-2xl bg-white">

                                    {/* Browser chrome */}
                                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100" style={{ background: '#F8FAFC' }}>
                                        <span className="w-3 h-3 rounded-full bg-red-300"></span>
                                        <span className="w-3 h-3 rounded-full bg-yellow-300"></span>
                                        <span className="w-3 h-3 rounded-full bg-green-300"></span>
                                        <div className="flex-1 mx-3 px-3 py-1 rounded-md text-xs flex items-center gap-2" style={{ background: '#fff', border: '1px solid #E2E8F0', color: '#94A3B8' }}>
                                            <i className="fa-solid fa-lock text-[9px]"></i> app.bumarka.io/dashboard
                                        </div>
                                    </div>

                                    <div className="flex" style={{ minHeight: 320 }}>

                                        {/* Sidebar */}
                                        <div className="hidden sm:flex flex-col gap-1 py-4 px-2 border-r border-gray-100 shrink-0" style={{ width: 48, background: '#F8FAFC' }}>
                                            {[
                                                { icon: 'fa-gauge',          active: true  },
                                                { icon: 'fa-hotel',          active: false },
                                                { icon: 'fa-plane-departure',active: false },
                                                { icon: 'fa-users-gear',     active: false },
                                                { icon: 'fa-inbox',          active: false },
                                                { icon: 'fa-truck',          active: false },
                                            ].map((item, i) => (
                                                <div key={i} className="w-8 h-8 rounded-lg flex items-center justify-center mx-auto text-xs"
                                                     style={item.active
                                                        ? { background: '#6366F1', color: '#fff' }
                                                        : { background: 'transparent', color: '#94A3B8' }}>
                                                    <i className={`fa-solid ${item.icon}`}></i>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Main content */}
                                        <div className="flex-1 p-4 overflow-hidden">

                                            {/* Header row */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div>
                                                    <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', fontFamily: '"Plus Jakarta Sans",sans-serif' }}>Operations Dashboard</div>
                                                    <div style={{ fontSize: 10, color: '#94A3B8' }}>May 2025 · All modules</div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div style={{ fontSize: 10, background: '#F1F5F9', color: '#64748B', padding: '4px 10px', borderRadius: 6, border: '1px solid #E2E8F0' }}>Export</div>
                                                    <div style={{ fontSize: 10, background: 'linear-gradient(135deg,#6366F1,#8B5CF6)', color: '#fff', padding: '4px 10px', borderRadius: 6, fontWeight: 600 }}>+ New</div>
                                                </div>
                                            </div>

                                            {/* KPI row */}
                                            <div className="grid grid-cols-4 gap-2 mb-4">
                                                {[
                                                    { label: 'Bookings',  value: '1,284', delta: '↑ 18%', color: '#6366F1' },
                                                    { label: 'Revenue',   value: '€94K',  delta: '↑ 24%', color: '#10B981' },
                                                    { label: 'Active Jobs',value: '47',   delta: '↑ 6%',  color: '#F59E0B' },
                                                    { label: 'CSAT',      value: '97.2%', delta: '↑ 3%',  color: '#8B5CF6' },
                                                ].map((k, i) => (
                                                    <div key={i} className="rounded-xl p-2.5" style={{ background: '#F9FAFB', border: '1px solid #F1F5F9' }}>
                                                        <div style={{ fontSize: 9, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{k.label}</div>
                                                        <div style={{ fontSize: 15, fontWeight: 800, color: '#0F172A', fontFamily: '"Plus Jakarta Sans",sans-serif', lineHeight: 1.2, marginTop: 2 }}>{k.value}</div>
                                                        <div style={{ fontSize: 9, color: k.color, fontWeight: 600, marginTop: 2 }}>{k.delta}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Chart + list row */}
                                            <div className="grid grid-cols-5 gap-3">

                                                {/* Bar chart */}
                                                <div className="col-span-3 rounded-xl p-3" style={{ background: '#F9FAFB', border: '1px solid #F1F5F9' }}>
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span style={{ fontSize: 10, color: '#64748B', fontWeight: 600 }}>Revenue Growth</span>
                                                        <span style={{ fontSize: 9, background: '#EEF2FF', color: '#6366F1', padding: '2px 7px', borderRadius: 4, fontWeight: 600 }}>2025</span>
                                                    </div>
                                                    <div className="flex items-end gap-0.5" style={{ height: 52 }}>
                                                        {[28,42,35,58,48,72,55,80,65,88,74,95].map((h, j) => (
                                                            <div key={j} className="flex-1 rounded-t-sm"
                                                                 style={{ height: `${h}%`, background: j >= 9 ? 'linear-gradient(180deg,#818CF8,#6366F1)' : j >= 6 ? 'rgba(99,102,241,0.3)' : '#E0E7FF' }}></div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Module status */}
                                                <div className="col-span-2 rounded-xl p-3" style={{ background: '#F9FAFB', border: '1px solid #F1F5F9' }}>
                                                    <div style={{ fontSize: 10, color: '#64748B', fontWeight: 600, marginBottom: 8 }}>Modules Active</div>
                                                    {[
                                                        { name: 'Hotel',   pct: 92, color: '#6366F1' },
                                                        { name: 'Travel',  pct: 78, color: '#8B5CF6' },
                                                        { name: 'Fleet',   pct: 85, color: '#10B981' },
                                                        { name: 'HR-Pulse',pct: 70, color: '#F59E0B' },
                                                    ].map((m, i) => (
                                                        <div key={i} className="mb-2">
                                                            <div className="flex justify-between mb-0.5">
                                                                <span style={{ fontSize: 9, color: '#64748B' }}>{m.name}</span>
                                                                <span style={{ fontSize: 9, color: m.color, fontWeight: 700 }}>{m.pct}%</span>
                                                            </div>
                                                            <div className="rounded-full overflow-hidden" style={{ height: 4, background: '#E2E8F0' }}>
                                                                <div style={{ width: `${m.pct}%`, height: '100%', borderRadius: 9999, background: m.color }}></div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Recent activity */}
                                            <div className="mt-3 rounded-xl p-3" style={{ background: '#F9FAFB', border: '1px solid #F1F5F9' }}>
                                                <div style={{ fontSize: 10, color: '#64748B', fontWeight: 600, marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recent Activity</div>
                                                <div className="flex flex-col gap-2">
                                                    {[
                                                        { icon: 'fa-hotel',           label: 'Grand Suites — Room 204 booked',  time: '2m ago',  color: '#6366F1', bg: '#EEF2FF' },
                                                        { icon: 'fa-plane-departure', label: 'Dubai package confirmed · 3 pax', time: '14m ago', color: '#8B5CF6', bg: '#F5F3FF' },
                                                        { icon: 'fa-truck',           label: 'Driver #07 assigned · Airport transfer', time: '31m ago', color: '#10B981', bg: '#F0FDF4' },
                                                    ].map((a, i) => (
                                                        <div key={i} className="flex items-center gap-2.5">
                                                            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: a.bg }}>
                                                                <i className={`fa-solid ${a.icon} text-[9px]`} style={{ color: a.color }}></i>
                                                            </div>
                                                            <span style={{ fontSize: 10, color: '#374151', flex: 1 }}>{a.label}</span>
                                                            <span style={{ fontSize: 9, color: '#94A3B8' }}>{a.time}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Floating efficiency badge */}
                                <div className="absolute -left-4 top-10 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100 hidden md:flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                                    <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-brand-primary shrink-0">
                                        <i className="fa-solid fa-bolt text-sm"></i>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-brand-gray font-medium uppercase tracking-wide">Efficiency</p>
                                        <p className="text-sm font-bold" style={{ color: '#0F172A' }}>+240% Boost</p>
                                    </div>
                                </div>

                                {/* Floating live badge */}
                                <div className="absolute -right-3 bottom-10 bg-white px-3 py-2 rounded-xl shadow-lg border border-gray-100 hidden md:flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                                    <span style={{ fontSize: 11, fontWeight: 600, color: '#0F172A' }}>Live sync · 8 modules</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="py-[72px] bg-white relative border-y border-gray-100">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-brand-primary font-medium text-xs mb-4 border border-indigo-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                            Our Product Suite
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry-Tailored Products for Travel & Service Businesses</h2>
                        <p className="text-brand-gray text-lg font-light">A complete portfolio built for the way you actually run your operations.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
                        {[
                            {
                                icon: "fa-solid fa-hotel",
                                title: "Hotel Management System",
                                page: "product-sales-booking",
                                desc: "Manage hotel bookings, guest operations, and availability from one centralized platform.",
                                color: "text-blue-500 bg-blue-50 border-blue-100"
                            },
                            {
                                icon: "fa-solid fa-globe",
                                title: "All-in-One Travel Management System",
                                page: "product-travel-management",
                                desc: "Run your entire travel business — bookings, CRM, operations, and finance — in one connected system.",
                                color: "text-indigo-500 bg-indigo-50 border-indigo-100"
                            },
                            {
                                icon: "fa-solid fa-calculator",
                                title: "Accounting System for Travel Industry",
                                page: "product-financial-management",
                                desc: "The best accounting solution for rentals, agencies, DMCs, tour guides, ferry, and flight companies.",
                                color: "text-purple-500 bg-purple-50 border-purple-100"
                            },
                            {
                                icon: "fa-solid fa-truck-fast",
                                title: "Fleet Management System",
                                page: "product-operations-logistics",
                                desc: "Track vehicles, manage maintenance, and assign drivers in real time from one dashboard.",
                                color: "text-orange-500 bg-orange-50 border-orange-100"
                            },
                            {
                                icon: "fa-solid fa-map-location-dot",
                                title: "Tour Guide App",
                                page: "product-tour-guide-app",
                                desc: "Empower guides with schedules, trip details, and real-time updates for seamless tour execution.",
                                color: "text-yellow-600 bg-yellow-50 border-yellow-100"
                            },
                            {
                                icon: "fa-solid fa-id-card-clip",
                                title: "Driver App",
                                page: "product-driver-app",
                                desc: "Manage driver assignments, routes, and trip updates with a dedicated mobile-friendly interface.",
                                color: "text-red-500 bg-red-50 border-red-100"
                            },
                            {
                                icon: "fa-solid fa-users-gear",
                                title: "Human Resource App",
                                page: "product-hr-app",
                                desc: "Handle employee management, attendance, payroll, and performance — all in one place.",
                                color: "text-pink-500 bg-pink-50 border-pink-100"
                            },
                            {
                                icon: "fa-solid fa-file-signature",
                                title: "Contract Management App",
                                page: "product-contract-management",
                                desc: "Create, manage, and track contracts with partners, clients, and suppliers efficiently.",
                                color: "text-teal-500 bg-teal-50 border-teal-100"
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                onClick={() => {
                                    if (item.page && setCurrentPage) {
                                        setCurrentPage(item.page);
                                        window.scrollTo(0, 0);
                                    }
                                }}
                                className="cursor-pointer bg-[#fafafa] p-6 rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-xl hover:bg-white hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                                data-aos="fade-up"
                                data-aos-delay={(i % 4) * 100}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 border transition-transform group-hover:scale-110 duration-300 ${item.color}`}>
                                    <i className={item.icon}></i>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-primary transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-brand-gray leading-relaxed text-sm font-light flex-1">{item.desc}</p>
                                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                                    <span>Explore</span>
                                    <i className="fa-solid fa-arrow-right text-xs"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[72px] bg-[#fafafa]">
                <div className="mx-3 px-4 md:px-14 text-center">
                    <div data-aos="zoom-in">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            A Centralized Hub for Your Entire Business
                        </h2>
                        <p className="text-xl text-brand-gray mb-12 font-light">
                            Replace multiple tools with one unified system.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 text-left">
                        {[
                            { text: "Manage everything from dashboard", icon: "fa-solid fa-gauge" },
                            { text: "Reduce manual work and errors", icon: "fa-solid fa-wand-magic-sparkles" },
                            { text: "Improve team collaboration", icon: "fa-solid fa-users" },
                            { text: "Gain full visibility of your business", icon: "fa-solid fa-eye" }
                        ].map((point, i) => (
                            <div key={i} className="flex items-center gap-4 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm" data-aos="fade-up" data-aos-delay={i * 100}>
                                <div className="w-10 h-10 rounded-full bg-brand-light text-brand-primary flex items-center justify-center flex-shrink-0">
                                    <i className={point.icon}></i>
                                </div>
                                <span className="text-gray-800 font-medium">{point.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[72px] bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-14 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">A Workflow That Adapts To You</h2>
                        <p className="text-brand-gray text-lg font-light">Eliminate friction and connect your entire business ecosystem in three simple steps.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center relative">
                        <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-30 z-0"></div>

                        {[
                            {
                                step: "01",
                                title: "Connect & Centralize",
                                desc: "Bring all your data, client info, and scattered tools into one single, powerful dashboard.",
                                icon: "fa-solid fa-plug"
                            },
                            {
                                step: "02",
                                title: "Automate Processes",
                                desc: "Set up smart workflows to handle repetitive tasks, invoices, and follow-ups automatically.",
                                icon: "fa-solid fa-gears"
                            },
                            {
                                step: "03",
                                title: "Scale & Grow",
                                desc: "Use real-time analytics to make informed decisions and accelerate your business growth.",
                                icon: "fa-solid fa-rocket"
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center" data-aos="zoom-in" data-aos-delay={i * 200}>
                                <div className="w-20 h-20 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-3xl text-brand-primary mb-6 shadow-xl relative group overflow-hidden">
                                    <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                    <i className={item.icon}></i>
                                </div>
                                <div className="text-brand-primary font-bold text-sm mb-2 uppercase tracking-widest">Step {item.step}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[72px] bg-white border-y border-gray-100">
                <div className="mx-3 px-4 md:px-14 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12" data-aos="fade-up">
                        Built for Every Type of Business
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { name: "Service-based businesses", icon: "fa-solid fa-briefcase" },
                            { name: "Operations-driven teams", icon: "fa-solid fa-network-wired" },
                            { name: "Agencies & consultants", icon: "fa-solid fa-user-tie" },
                            { name: "Logistics & mobility companies", icon: "fa-solid fa-truck" },
                            { name: "Experience-based businesses", icon: "fa-solid fa-star" },
                            { name: "Automotive businesses", icon: "fa-solid fa-car" }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-6 py-4 rounded-full bg-[#fafafa] border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-colors duration-300 cursor-pointer"
                                data-aos="zoom-in"
                                data-aos-delay={i * 100}
                            >
                                <i className={`${item.icon} text-gray-400`}></i>
                                <span className="font-medium text-gray-700 text-sm">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-[72px] text-white text-center relative overflow-hidden"
                     style={{ background: BRAND.gradientDark }}>
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 opacity-20 rounded-full filter blur-3xl mix-blend-overlay"></div>

                <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-8" data-aos="zoom-in">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                        Ready to Simplify and Scale Your Operations?
                    </h2>
                    <p className="text-lg text-indigo-100 font-light max-w-2xl mx-auto">
                        Start managing everything from one powerful platform.
                    </p>
                    <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={onOpenInquiry}
                            className="bg-white text-brand-primary px-6 py-3 rounded-xl font-semibold text-md hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Request Demo
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductPage;