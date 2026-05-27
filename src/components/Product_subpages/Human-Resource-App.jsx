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

/* Employee directory dashboard */
const EmployeeDirectoryMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/hr/team" />
        <div className="p-4 sm:p-5 bg-gradient-to-br from-white to-gray-50 space-y-3">
            <div className="grid grid-cols-3 gap-2">
                {[
                    { l: "Total", v: "84", c: "text-brand-primary" },
                    { l: "On Leave", v: "6", c: "text-yellow-600" },
                    { l: "Hiring", v: "3", c: "text-blue-600" },
                ].map((k, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-2.5">
                        <p className="text-[9px] uppercase text-gray-400 font-semibold tracking-wider">{k.l}</p>
                        <p className={`text-base font-bold ${k.c}`}>{k.v}</p>
                    </div>
                ))}
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold text-brand-dark">Team Directory</p>
                    <span className="text-[9px] text-gray-400">All departments</span>
                </div>
                {[
                    { n: "Lina Khalil", r: "Tour Operations", c: "from-brand-primary to-green-300" },
                    { n: "Omar Reza", r: "Driver · Fleet A", c: "from-blue-400 to-blue-200" },
                    { n: "Daniya Hadid", r: "Senior Guide", c: "from-purple-400 to-purple-200" },
                    { n: "Sami Patel", r: "Accounting", c: "from-yellow-400 to-yellow-200" },
                ].map((p, i) => (
                    <div key={i} className="flex items-center gap-2.5 py-1.5 border-t border-gray-50 first:border-0 text-[11px]">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${p.c} text-white flex items-center justify-center font-bold text-[10px]`}>
                            {p.n.split(" ").map(s => s[0]).join("")}
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-brand-dark">{p.n}</p>
                            <p className="text-[9px] text-gray-500">{p.r}</p>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* Attendance mobile mockup */
const AttendanceMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-green-50 to-white">
            <div className="rounded-xl bg-gradient-to-br from-brand-primary to-green-700 text-white p-3">
                <p className="text-[9px] uppercase opacity-80 tracking-wider">Today</p>
                <p className="text-sm font-bold mt-0.5">May 4, 2026</p>
                <div className="grid grid-cols-2 gap-2 mt-2">
                    <div><p className="text-[8px] opacity-80">In</p><p className="text-xs font-bold">08:54</p></div>
                    <div><p className="text-[8px] opacity-80">Hours</p><p className="text-xs font-bold">07:24</p></div>
                </div>
            </div>
            <button className="w-full rounded-xl bg-white border border-gray-100 py-3 flex items-center justify-center gap-2 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-brand-light text-brand-primary flex items-center justify-center"><i className="fa-solid fa-right-from-bracket text-xs"></i></div>
                <span className="text-xs font-bold text-brand-dark">Clock Out</span>
            </button>
            <div className="rounded-xl border border-gray-100 bg-white p-3">
                <p className="text-[10px] font-bold text-brand-dark mb-2">This Week</p>
                <div className="grid grid-cols-7 gap-1">
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                        <div key={i} className="text-center">
                            <span className="text-[8px] text-gray-400">{d}</span>
                            <div className={`mt-1 aspect-square rounded ${i < 3 ? "bg-brand-primary" : i === 3 ? "bg-yellow-400" : "bg-gray-100"} flex items-center justify-center`}>
                                {i < 3 && <i className="fa-solid fa-check text-white text-[8px]"></i>}
                                {i === 3 && <i className="fa-solid fa-clock text-white text-[8px]"></i>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-2.5">
                <p className="text-[10px] font-bold text-brand-dark mb-1">Leave Balance</p>
                <div className="flex justify-between text-[10px]">
                    <span className="text-gray-500">Annual: <span className="font-bold text-brand-dark">14d</span></span>
                    <span className="text-gray-500">Sick: <span className="font-bold text-brand-dark">7d</span></span>
                </div>
            </div>
        </div>
    </div>
);

/* Payroll mockup */
const PayrollMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/hr/payroll" />
        <div className="p-4 sm:p-5 bg-white space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-brand-dark">Payroll · May 2026</p>
                <span className="text-[10px] px-2 py-0.5 bg-green-50 text-brand-primary rounded-full font-semibold">Ready to run</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
                {[
                    { l: "Headcount", v: "84" },
                    { l: "Gross", v: "$184K" },
                    { l: "Net", v: "$148K" },
                ].map((s, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-2">
                        <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">{s.l}</p>
                        <p className="text-sm font-bold text-brand-dark">{s.v}</p>
                    </div>
                ))}
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-3">
                <p className="text-[10px] font-bold text-brand-dark mb-2">Earnings breakdown</p>
                <div className="flex h-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-primary" style={{ width: "60%" }}></div>
                    <div className="bg-blue-400" style={{ width: "18%" }}></div>
                    <div className="bg-yellow-400" style={{ width: "12%" }}></div>
                    <div className="bg-purple-400" style={{ width: "10%" }}></div>
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[9px] text-gray-500 mt-2">
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>Base</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>Overtime</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>Bonus</span>
                    <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>Tips</span>
                </div>
            </div>
            <button className="w-full rounded-lg bg-brand-primary text-white text-xs font-bold py-2.5">Process Payroll</button>
        </div>
    </div>
);

/* Performance review mockup */
const PerformanceMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/hr/reviews" />
        <div className="p-4 sm:p-5 bg-gradient-to-br from-white to-purple-50/40 space-y-3">
            <p className="text-xs font-bold text-brand-dark">Performance Snapshot</p>
            <div className="rounded-xl border border-gray-100 bg-white p-3">
                <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-primary to-green-300 text-white flex items-center justify-center font-bold text-[10px]">LK</div>
                    <div>
                        <p className="text-[12px] font-bold text-brand-dark">Lina Khalil</p>
                        <p className="text-[9px] text-gray-500">Q2 Review</p>
                    </div>
                    <span className="ml-auto text-[10px] px-2 py-0.5 bg-green-50 text-brand-primary rounded-full font-bold">Exceeds</span>
                </div>
                {[
                    { l: "Quality", v: 92 },
                    { l: "Reliability", v: 88 },
                    { l: "Teamwork", v: 95 },
                    { l: "Guest Rating", v: 98 },
                ].map((m, i) => (
                    <div key={i} className="mb-1.5 last:mb-0">
                        <div className="flex justify-between text-[10px] mb-0.5">
                            <span className="text-gray-500">{m.l}</span>
                            <span className="font-bold text-brand-dark">{m.v}</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-brand-primary to-green-300 rounded-full" style={{ width: `${m.v}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="rounded-lg bg-brand-light p-2.5 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white text-brand-primary flex items-center justify-center"><i className="fa-solid fa-star text-[11px]"></i></div>
                <p className="text-[10px] text-brand-dark font-medium">Eligible for promotion review</p>
            </div>
        </div>
    </div>
);

const HumanResourceAppPage = ({ onOpenInquiry, setCurrentPage }) => {
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
                                <span className="text-brand-dark font-semibold">Human Resource App</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary font-medium text-sm mb-5 shadow-sm border border-green-100">
                                <i className="fa-solid fa-users-gear text-[12px]"></i>
                                Human Resource App
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight mb-5">
                                The <span className="text-brand-primary">Human Resource App</span> Your Team Will Actually Use
                            </h1>
                            <p className="text-brand-gray text-sm md:text-base mb-7 leading-relaxed font-light">
                                Employee records, attendance, payroll, and performance — one calm dashboard for managers and one friendly app for the team.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button onClick={onOpenInquiry} className="bg-brand-primary text-white px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:bg-green-700 shadow-lg shadow-green-500/20 transition-all duration-300">Request Demo</button>
                                <button onClick={() => document.getElementById("core-features").scrollIntoView({ behavior: "smooth" })} className="bg-white text-brand-dark border border-gray-200 px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-300">Explore Features</button>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full" data-aos="fade-left" data-aos-delay="200">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-green-300 rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-2xl"></div>
                                <div className="relative z-10 flex items-center gap-3 sm:gap-6">
                                    <div className="w-2/3 relative group">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-all duration-500">
                                            <EmployeeDirectoryMockup />
                                        </div>
                                        <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3 animate-bounce" style={{ animationDuration: "3s" }}>
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-primary"><i className="fa-solid fa-user-check"></i></div>
                                            <div>
                                                <p className="text-[10px] sm:text-xs text-brand-gray">Engagement</p>
                                                <p className="text-xs sm:text-sm font-bold text-brand-dark">94%</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 relative group transform translate-y-12">
                                        <div className="bg-white rounded-xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                            <AttendanceMockup />
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
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4">Everything HR, In One Place</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">Records, time, pay, and performance — finally on the same page.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: "fa-solid fa-users", title: "Employee Records", desc: "Profiles, contracts, and documents — securely organized and searchable." },
                            { icon: "fa-solid fa-clock", title: "Attendance & Leave", desc: "One-tap clock-in, geo-fenced check-ins, and leave balance tracking." },
                            { icon: "fa-solid fa-money-check-dollar", title: "Payroll Made Easy", desc: "Compute salaries, tips, and overtime — pay everyone in a single run." },
                            { icon: "fa-solid fa-chart-simple", title: "Performance & Growth", desc: "Reviews, goals, and feedback that actually help people improve." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={(i % 4) * 100}>
                                <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-xl text-brand-primary mb-5 group-hover:scale-110 transition-transform"><i className={item.icon}></i></div>
                                <h3 className="font-bold text-base sm:text-lg text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                                <p className="text-brand-gray leading-relaxed font-light text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 1 — Directory */}
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-users"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">A Single Source of Truth for Your Team</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">From hire date to skills, contracts to certifications — every employee record lives in one organized, audit-ready space.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["Searchable team directory with roles & skills", "Secure document vault per employee", "Automated onboarding & offboarding workflows"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full relative group" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-green-200 rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-xl"></div>
                            <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                                <EmployeeDirectoryMockup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — Attendance + Payroll */}
            <section className="py-[72px] bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 w-full order-2 lg:order-1 relative perspective-1000" data-aos="fade-right">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-brand-primary rounded-[2rem] transform rotate-2 scale-105 opacity-20 blur-xl"></div>
                            <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-6">
                                <div className="w-1/3 max-w-[200px] relative group transform translate-y-6">
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
                                        <AttendanceMockup />
                                    </div>
                                </div>
                                <div className="w-2/3 relative group">
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                                        <PayrollMockup />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-money-check-dollar"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Time and Pay, Connected at Last</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">Attendance feeds straight into payroll — overtime, leave, and tips calculated automatically. Run pay day in minutes, not days.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["Geo-fenced clock-in & shift tracking", "Auto-computed overtime, leave & tips", "One-click payroll runs with bank exports"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — Performance */}
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-chart-simple"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Help Every Person Grow</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">Goals, peer feedback, and structured reviews — built so managers can have honest conversations and reward great work.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["Goal tracking with quarterly check-ins", "360° peer feedback & 1:1 notes", "Promotion-readiness signals from real data"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full relative group" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-brand-primary rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-2xl"></div>
                            <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                                <PerformanceMockup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUE STRIP */}
            <section className="py-[72px] bg-[#fafafa] border-y border-gray-100">
                <div className="mx-3 px-4 md:px-14 text-center">
                    <div className="max-w-3xl mx-auto" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">An HR System People Don't Resent</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">Calm, modern, and respectful of everyone's time.</p>
                    </div>
                    <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { i: "fa-solid fa-mobile-screen", v: "Self-Service", l: "Team-friendly app" },
                            { i: "fa-solid fa-lock", v: "Private", l: "Encrypted records" },
                            { i: "fa-solid fa-clock-rotate-left", v: "Audit Ready", l: "Full change history" },
                            { i: "fa-solid fa-globe", v: "Multi-Region", l: "Local pay rules" },
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
                plans={PRICING_DATA['hr-pulse']}
                title="Preços Flexíveis para HR-Pulse"
                subtitle="Do processamento manual ao totalmente automatizado com IA — escolha o plano certo para a sua equipa."
            />

            {/* CTA */}
            <section className="py-[72px] bg-gradient-to-br from-brand-primary to-green-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-20 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6 sm:space-y-8" data-aos="zoom-in">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">Build a Workplace People Choose to Stay In</h2>
                    <p className="text-base sm:text-xl text-green-50 font-light">Bring records, payroll, and growth into one calm system — and give your team time back.</p>
                    <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <button onClick={onOpenInquiry} className="bg-white text-brand-primary px-6 py-2 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1">Request Demo</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HumanResourceAppPage;
