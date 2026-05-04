import React, { useEffect } from "react";


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

/* Dashboard mockup with KPIs, bar chart, and recent transactions */
const FinanceDashboardMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/finance" />
        <div className="p-5 space-y-4 bg-gradient-to-br from-white to-gray-50">
            {/* Top KPIs */}
            <div className="grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Revenue</p>
                    <p className="text-base font-bold text-brand-dark mt-1">$184.2K</p>
                    <p className="text-[10px] text-green-600 font-semibold mt-0.5">▲ 12.4%</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Expenses</p>
                    <p className="text-base font-bold text-brand-dark mt-1">$62.8K</p>
                    <p className="text-[10px] text-red-500 font-semibold mt-0.5">▼ 4.1%</p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Net Profit</p>
                    <p className="text-base font-bold text-brand-primary mt-1">$121.4K</p>
                    <p className="text-[10px] text-green-600 font-semibold mt-0.5">▲ 18.7%</p>
                </div>
            </div>

            {/* Chart card */}
            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-bold text-brand-dark">Cash Flow Overview</p>
                    <div className="flex gap-1.5">
                        <span className="text-[9px] px-2 py-0.5 bg-green-50 text-brand-primary rounded-full font-semibold">In</span>
                        <span className="text-[9px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full font-semibold">Out</span>
                    </div>
                </div>
                <div className="flex items-end justify-between h-24 gap-2">
                    {[
                        { i: 60, o: 30 }, { i: 75, o: 40 }, { i: 50, o: 35 },
                        { i: 90, o: 55 }, { i: 70, o: 45 }, { i: 95, o: 50 }, { i: 85, o: 38 },
                    ].map((b, idx) => (
                        <div key={idx} className="flex-1 flex items-end gap-0.5">
                            <div className="flex-1 bg-gradient-to-t from-brand-primary to-green-300 rounded-sm" style={{ height: `${b.i}%` }}></div>
                            <div className="flex-1 bg-gray-200 rounded-sm" style={{ height: `${b.o}%` }}></div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-2 text-[9px] text-gray-400 font-medium">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
            </div>

            {/* Transactions list */}
            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-brand-dark mb-3">Recent Transactions</p>
                <div className="space-y-2">
                    {[
                        { name: "Invoice #2041 — Acme Co.", amt: "+$3,200", color: "text-green-600", icon: "fa-arrow-down" },
                        { name: "AWS Cloud Hosting", amt: "-$420", color: "text-red-500", icon: "fa-arrow-up" },
                        { name: "Invoice #2040 — Globex", amt: "+$1,860", color: "text-green-600", icon: "fa-arrow-down" },
                    ].map((t, i) => (
                        <div key={i} className="flex justify-between items-center text-[11px]">
                            <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${t.color === "text-green-600" ? "bg-green-50" : "bg-red-50"}`}>
                                    <i className={`fa-solid ${t.icon} ${t.color} text-[9px]`}></i>
                                </div>
                                <span className="text-gray-600 font-medium">{t.name}</span>
                            </div>
                            <span className={`font-bold ${t.color}`}>{t.amt}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

/* Mobile-style mockup showing wallet / spend summary */
const MobileWalletMockup = () => (
    <div className="bg-white">
        <div className="bg-gray-50 px-2 py-2 flex items-center gap-1.5 border-b border-gray-100">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
        <div className="p-4 space-y-3 bg-gradient-to-b from-green-50 to-white">
            <div className="rounded-xl bg-gradient-to-br from-brand-primary to-green-700 text-white p-3 shadow-md">
                <p className="text-[9px] uppercase opacity-80 tracking-wider">Total Balance</p>
                <p className="text-lg font-bold mt-0.5">$48,920</p>
                <div className="flex justify-between mt-2 text-[9px]">
                    <span className="opacity-90">•••• 4521</span>
                    <span className="opacity-90">12/27</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-gray-100 p-2 bg-white">
                    <p className="text-[8px] text-gray-400 uppercase">Income</p>
                    <p className="text-xs font-bold text-green-600">$12.4K</p>
                </div>
                <div className="rounded-lg border border-gray-100 p-2 bg-white">
                    <p className="text-[8px] text-gray-400 uppercase">Spend</p>
                    <p className="text-xs font-bold text-red-500">$4.1K</p>
                </div>
            </div>
            <div className="rounded-lg border border-gray-100 p-2 bg-white">
                <p className="text-[9px] font-bold text-brand-dark mb-1">Categories</p>
                {[
                    { l: "Operations", v: 70, c: "bg-brand-primary" },
                    { l: "Marketing", v: 45, c: "bg-blue-400" },
                    { l: "Payroll", v: 90, c: "bg-purple-400" },
                ].map((cat, i) => (
                    <div key={i} className="mb-1.5 last:mb-0">
                        <div className="flex justify-between text-[8px] text-gray-500 mb-0.5">
                            <span>{cat.l}</span><span>{cat.v}%</span>
                        </div>
                        <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                            <div className={`h-full ${cat.c} rounded-full`} style={{ width: `${cat.v}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* Invoice / Billing mockup */
const InvoiceMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/invoices/new" />
        <div className="p-5 bg-white">
            <div className="flex justify-between items-start mb-4 pb-3 border-b border-gray-100">
                <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Invoice</p>
                    <p className="text-lg font-bold text-brand-dark">#INV-2041</p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-50 text-brand-primary border border-green-100">PAID</span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4 text-[10px]">
                <div>
                    <p className="text-gray-400 font-semibold uppercase tracking-wider">Bill To</p>
                    <p className="text-brand-dark font-bold mt-1">Acme Corporation</p>
                    <p className="text-gray-500">finance@acme.com</p>
                </div>
                <div className="text-right">
                    <p className="text-gray-400 font-semibold uppercase tracking-wider">Due</p>
                    <p className="text-brand-dark font-bold mt-1">May 18, 2026</p>
                    <p className="text-gray-500">Net 14</p>
                </div>
            </div>
            <div className="rounded-lg border border-gray-100 overflow-hidden">
                <div className="bg-gray-50 px-3 py-2 flex justify-between text-[9px] font-bold uppercase tracking-wider text-gray-500">
                    <span>Item</span><span>Amount</span>
                </div>
                {[
                    { n: "Booking platform — Pro plan", a: "$1,800.00" },
                    { n: "Custom integration", a: "$900.00" },
                    { n: "Premium support", a: "$500.00" },
                ].map((row, i) => (
                    <div key={i} className="px-3 py-2 flex justify-between text-[11px] border-t border-gray-50">
                        <span className="text-gray-700">{row.n}</span>
                        <span className="font-semibold text-brand-dark">{row.a}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-end mt-3 text-[12px]">
                <div className="w-1/2 space-y-1">
                    <div className="flex justify-between text-gray-500"><span>Subtotal</span><span>$3,200.00</span></div>
                    <div className="flex justify-between text-gray-500"><span>Tax (0%)</span><span>$0.00</span></div>
                    <div className="flex justify-between text-brand-dark font-bold text-sm pt-1 border-t border-gray-100"><span>Total</span><span className="text-brand-primary">$3,200.00</span></div>
                </div>
            </div>
        </div>
    </div>
);

/* Expense tracking mockup */
const ExpenseTrackerMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/expenses" />
        <div className="p-5 bg-gradient-to-br from-white to-gray-50 space-y-3">
            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                    <p className="text-xs font-bold text-brand-dark">Expense Breakdown</p>
                    <span className="text-[10px] px-2 py-0.5 bg-purple-50 text-purple-600 rounded-full font-semibold">This Month</span>
                </div>
                {/* Donut-ish stacked bar */}
                <div className="flex h-3 rounded-full overflow-hidden mb-3">
                    <div className="bg-brand-primary" style={{ width: "38%" }}></div>
                    <div className="bg-blue-400" style={{ width: "26%" }}></div>
                    <div className="bg-purple-400" style={{ width: "20%" }}></div>
                    <div className="bg-yellow-400" style={{ width: "16%" }}></div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                    {[
                        { c: "bg-brand-primary", l: "Operations", v: "$24K" },
                        { c: "bg-blue-400", l: "Salaries", v: "$16K" },
                        { c: "bg-purple-400", l: "Marketing", v: "$12K" },
                        { c: "bg-yellow-400", l: "Misc", v: "$10K" },
                    ].map((it, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                            <span className={`w-2 h-2 rounded-full ${it.c}`}></span>
                            <span className="text-gray-500">{it.l}</span>
                            <span className="ml-auto font-semibold text-brand-dark">{it.v}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-brand-dark mb-2">Pending Approvals</p>
                {[
                    { n: "Hotel — Team retreat", a: "$1,240", s: "Pending" },
                    { n: "Software license", a: "$320", s: "Approved" },
                    { n: "Office supplies", a: "$85", s: "Pending" },
                ].map((e, i) => (
                    <div key={i} className="flex justify-between items-center text-[11px] py-1.5 border-t border-gray-50 first:border-0">
                        <span className="text-gray-700">{e.n}</span>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-brand-dark">{e.a}</span>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${e.s === "Approved" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"}`}>{e.s}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* Reports mockup */
const ReportsMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/reports" />
        <div className="p-5 bg-white space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-brand-dark">P&L Statement</p>
                <span className="text-[10px] text-gray-400">Q1 2026</span>
            </div>
            {/* Line chart (SVG) */}
            <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-green-50/50 to-white p-3">
                <svg viewBox="0 0 200 80" className="w-full h-24">
                    <defs>
                        <linearGradient id="finGrad" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <path d="M0,60 L25,50 L50,55 L75,35 L100,40 L125,25 L150,30 L175,15 L200,20 L200,80 L0,80 Z" fill="url(#finGrad)" />
                    <path d="M0,60 L25,50 L50,55 L75,35 L100,40 L125,25 L150,30 L175,15 L200,20" fill="none" stroke="#10B981" strokeWidth="1.5" />
                    {[[0, 60], [25, 50], [50, 55], [75, 35], [100, 40], [125, 25], [150, 30], [175, 15], [200, 20]].map(([x, y], i) => (
                        <circle key={i} cx={x} cy={y} r="1.5" fill="#10B981" />
                    ))}
                </svg>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
                {[
                    { l: "Income", v: "$184K", c: "text-green-600" },
                    { l: "Costs", v: "$62K", c: "text-red-500" },
                    { l: "Margin", v: "66%", c: "text-brand-primary" },
                ].map((s, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-2">
                        <p className="text-[9px] text-gray-400 uppercase font-semibold">{s.l}</p>
                        <p className={`text-sm font-bold ${s.c}`}>{s.v}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* --- Main Page ----------------------------------------------------- */

const FinancialManagementPage = ({ onOpenInquiry }) => {
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
        <main className="pt-20 bg-white font-sans overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative pt-20 pb-20 lg:pb-28 bg-white overflow-hidden border-b border-gray-100">
                <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-light pointer-events-none rounded-l-full blur-3xl opacity-60"></div>

                <div className="mx-3 px-4 md:px-14 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-left" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary font-medium text-sm mb-6 shadow-sm border border-green-100">
                                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                                Smart Finance Suite
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-6">
                                Take Full Control of Your <span className="text-brand-primary">Financial Management</span>
                            </h1>

                            <p className="text-brand-gray text-md md:text-lg mb-8 leading-relaxed font-light">
                                Automate invoicing, track every expense, and turn raw numbers into actionable insights — all from a single, beautifully designed financial dashboard.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={onOpenInquiry}
                                    className="bg-brand-primary text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-green-700 shadow-lg shadow-green-500/20 transition-all duration-300"
                                >
                                    Request Demo
                                </button>
                                <button
                                    onClick={() => document.getElementById("core-features").scrollIntoView({ behavior: "smooth" })}
                                    className="bg-white text-brand-dark border border-gray-200 px-8 py-4 rounded-xl font-medium text-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                                >
                                    Explore Features
                                </button>
                            </div>

                            {/* Trust strip */}
                            <div className="grid grid-cols-3 gap-4 mt-10 max-w-md">
                                {[
                                    { v: "99.9%", l: "Uptime" },
                                    { v: "PCI-DSS", l: "Secure" },
                                    { v: "40+", l: "Integrations" },
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
                                    {/* Main Mockup */}
                                    <div className="w-2/3 relative group">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-all duration-500">
                                            <FinanceDashboardMockup />
                                        </div>

                                        {/* Floating Badge */}
                                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: "3s" }}>
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-primary">
                                                <i className="fa-solid fa-sack-dollar"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-brand-gray font-medium">Net Profit</p>
                                                <p className="text-sm font-bold text-brand-dark">+18.7%</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Secondary Mockup */}
                                    <div className="w-1/3 relative group transform translate-y-12">
                                        <div className="bg-white rounded-xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                            <MobileWalletMockup />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THREE CARDS SECTION */}
            <section id="core-features" className="py-24 bg-[#fafafa]">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Core Capabilities</h2>
                        <p className="text-brand-gray text-lg font-light">Everything your finance team needs to stay accurate, compliant, and ahead of the numbers.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "fa-solid fa-file-invoice-dollar",
                                title: "Smart Invoicing & Billing",
                                desc: "Generate, send, and track branded invoices with auto-reminders and instant online payments.",
                            },
                            {
                                icon: "fa-solid fa-receipt",
                                title: "Expense Tracking",
                                desc: "Capture every transaction, categorize spend automatically, and stay on top of approvals.",
                            },
                            {
                                icon: "fa-solid fa-chart-line",
                                title: "Reports & Forecasting",
                                desc: "Real-time P&L, cash flow, and tax-ready statements that turn data into clear decisions.",
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

            {/* DETAILED SECTION 1 — Invoicing */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl mb-4">
                                <i className="fa-solid fa-file-invoice-dollar"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Effortless Invoicing & Billing Automation
                            </h2>
                            <p className="text-brand-gray text-lg font-light leading-relaxed">
                                Create professional invoices in seconds, accept payments online, and never chase a client again — recurring billing and reminders run on autopilot.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Branded invoice templates with one-click sending",
                                    "Recurring billing & subscription management",
                                    "Automated payment reminders & late fees",
                                    "Stripe, PayPal & bank transfer integrations",
                                ].map((point, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium">
                                        <i className="fa-solid fa-circle-check text-brand-primary"></i>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 relative group" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-green-200 rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-xl group-hover:rotate-2 transition-transform duration-700"></div>

                            <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                                <InvoiceMockup />
                            </div>

                            <div className="absolute top-1/4 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 transform group-hover:scale-110 transition-transform duration-300 hidden md:flex">
                                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-brand-primary">
                                    <i className="fa-solid fa-circle-check text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-xs text-brand-gray font-medium">Payment</p>
                                    <p className="text-sm font-bold text-brand-dark">Received</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAILED SECTION 2 — Expenses */}
            <section className="py-24 bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1 relative group" data-aos="fade-right">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-blue-200 rounded-[2rem] transform rotate-2 scale-105 opacity-20 blur-xl group-hover:-rotate-2 transition-transform duration-700"></div>

                            <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                                <ExpenseTrackerMockup />
                            </div>

                            <div className="absolute bottom-12 -left-8 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20 transform group-hover:scale-110 transition-transform duration-300 hidden md:flex">
                                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                                    <i className="fa-solid fa-bell text-lg"></i>
                                </div>
                                <div>
                                    <p className="text-xs text-brand-gray font-medium">Approval</p>
                                    <p className="text-sm font-bold text-brand-dark">2 Pending</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary text-xl mb-4 shadow-sm">
                                <i className="fa-solid fa-receipt"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Intelligent Expense Tracking
                            </h2>
                            <p className="text-brand-gray text-lg font-light leading-relaxed">
                                Snap a receipt, sync a bank feed, or import a card statement — every expense is auto-categorized, matched, and ready for approval in one tidy workspace.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Receipt OCR & smart auto-categorization",
                                    "Multi-level approval workflows",
                                    "Real-time bank & card synchronization",
                                    "Mileage, per-diems & employee reimbursements",
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

            {/* DETAILED SECTION 3 — Reports */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl mb-4">
                                <i className="fa-solid fa-chart-pie"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Real-Time Reports & Forecasting
                            </h2>
                            <p className="text-brand-gray text-lg font-light leading-relaxed">
                                Profit & loss, balance sheets, cash flow, and tax-ready exports — all updated live. Drill down by client, project, or location and forecast the next quarter with confidence.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Live P&L, balance sheet & cash flow statements",
                                    "Custom KPI dashboards & saved views",
                                    "Tax-ready exports (CSV, PDF, accountant share)",
                                    "Multi-currency & multi-entity consolidation",
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
                                        <MobileWalletMockup />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2 z-20">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">
                                            <i className="fa-solid fa-check"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-2/3 relative group">
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                                        <ReportsMockup />
                                    </div>
                                    <div className="absolute -top-6 -right-4 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center gap-1 z-20 animate-pulse hidden md:flex">
                                        <span className="text-xs text-brand-gray uppercase font-bold tracking-wider">Margin</span>
                                        <span className="text-brand-primary font-bold text-lg">66%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECURITY & COMPLIANCE STRIP */}
            <section className="py-24 bg-[#fafafa] border-y border-gray-100 overflow-hidden">
                <div className="mx-3 px-4 md:px-14 text-center">
                    <div className="max-w-3xl mx-auto space-y-6" data-aos="fade-up">
                        <div className="w-16 h-16 mx-auto rounded-full bg-brand-light flex items-center justify-center text-brand-primary text-2xl mb-2 shadow-sm">
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
                            Bank-Grade Security & Compliance
                        </h2>
                        <p className="text-brand-gray text-lg font-light leading-relaxed">
                            Your financial data is encrypted end-to-end, audit-logged, and held to the highest industry standards — so you can focus on growth, not on guarding the books.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: "fa-solid fa-lock", value: "AES-256", label: "Data Encryption" },
                            { icon: "fa-solid fa-user-shield", value: "Role-based", label: "Access Control" },
                            { icon: "fa-solid fa-file-shield", value: "SOC 2", label: "Audit Ready" },
                            { icon: "fa-solid fa-clock-rotate-left", value: "Daily", label: "Auto Backups" },
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

            {/* INTEGRATIONS / WORKFLOW */}
            <section className="py-24 bg-white">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">A Connected Finance Stack</h2>
                        <p className="text-brand-gray text-lg font-light">Plays nicely with the tools you already use — your data flows in, clean reports flow out.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { icon: "fa-brands fa-stripe", name: "Stripe" },
                            { icon: "fa-brands fa-paypal", name: "PayPal" },
                            { icon: "fa-solid fa-building-columns", name: "Bank Feeds" },
                            { icon: "fa-solid fa-calculator", name: "QuickBooks" },
                            { icon: "fa-solid fa-coins", name: "Xero" },
                            { icon: "fa-brands fa-google", name: "Google Sheets" },
                            { icon: "fa-brands fa-slack", name: "Slack Alerts" },
                            { icon: "fa-solid fa-envelope-open-text", name: "Email Sync" },
                        ].map((it, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-4 rounded-xl bg-[#fafafa] border border-gray-100 hover:border-green-200 hover:bg-white hover:shadow-md transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={(i % 4) * 100}
                            >
                                <div className="w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-brand-primary text-lg">
                                    <i className={it.icon}></i>
                                </div>
                                <span className="font-medium text-brand-dark text-sm">{it.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-gradient-to-br from-brand-primary to-green-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-20 rounded-full filter blur-3xl mix-blend-overlay"></div>

                <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-8" data-aos="zoom-in">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                        Ready to Master Your Numbers?
                    </h2>
                    <p className="text-xl text-green-50 font-light">
                        Replace spreadsheets, late nights, and guesswork with a finance system that simply works.
                    </p>
                    <div className="pt-6">
                        <button
                            onClick={onOpenInquiry}
                            className="bg-white text-brand-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Request Your Demo
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FinancialManagementPage;
