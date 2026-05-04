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

const MobileChrome = () => (
    <div className="bg-gray-50 px-2 py-2 flex items-center gap-1.5 border-b border-gray-100">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
    </div>
);

/* --- Mockups ------------------------------------------------------ */

const FinanceDashboardMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/finance" />
        <div className="p-5 space-y-4 bg-gradient-to-br from-white to-gray-50">
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

            <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                <p className="text-xs font-bold text-brand-dark mb-3">Recent Transactions</p>
                <div className="space-y-2">
                    {[
                        { name: "Booking #B-2041 — Acme Co.", amt: "+$3,200", color: "text-green-600", icon: "fa-arrow-down" },
                        { name: "Vendor — AWS Hosting", amt: "-$420", color: "text-red-500", icon: "fa-arrow-up" },
                        { name: "Booking #B-2040 — Globex", amt: "+$1,860", color: "text-green-600", icon: "fa-arrow-down" },
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

/* Mobile wallet card */
const MobileWalletMockup = () => (
    <div className="bg-white">
        <MobileChrome />
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
                    { l: "Bookings", v: 70, c: "bg-brand-primary" },
                    { l: "Vendors", v: 45, c: "bg-blue-400" },
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

/* Invoice screen */
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
                    { n: "Booking #B-2041 — Heritage Tour", a: "$1,800.00" },
                    { n: "Add-on transfers", a: "$900.00" },
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

/* Payment link / checkout modal mockup */
const PaymentModalMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="pay.bu-operations.com/B-2041" />
        <div className="p-5 bg-gradient-to-br from-green-50/40 to-white">
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-4 space-y-3">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center">
                        <i className="fa-solid fa-lock text-xs"></i>
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Secure Payment</p>
                        <p className="text-xs font-bold text-brand-dark">Booking #B-2041</p>
                    </div>
                </div>

                <div className="rounded-xl bg-gradient-to-br from-brand-primary to-green-700 text-white p-3">
                    <p className="text-[9px] uppercase opacity-80">Amount Due</p>
                    <p className="text-2xl font-bold">$3,200<span className="text-sm font-normal opacity-80">.00</span></p>
                </div>

                {/* Card field */}
                <div>
                    <p className="text-[10px] font-semibold text-gray-500 mb-1">Card details</p>
                    <div className="rounded-lg border border-gray-200 p-2 flex items-center gap-2">
                        <i className="fa-brands fa-cc-visa text-blue-600"></i>
                        <span className="text-[11px] text-gray-600 font-mono">4242 4242 4242 4242</span>
                        <span className="ml-auto text-[10px] text-gray-400">12/27</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                    {[
                        { i: "fa-brands fa-cc-stripe", l: "Stripe" },
                        { i: "fa-brands fa-paypal", l: "PayPal" },
                        { i: "fa-solid fa-building-columns", l: "Bank" },
                    ].map((m, i) => (
                        <div key={i} className="rounded-lg border border-gray-100 py-1.5 flex flex-col items-center gap-0.5 hover:border-green-200 transition-colors">
                            <i className={`${m.i} text-brand-dark`}></i>
                            <span className="text-[9px] text-gray-500">{m.l}</span>
                        </div>
                    ))}
                </div>

                <button className="w-full rounded-lg bg-brand-primary text-white font-bold text-xs py-2.5 hover:bg-green-700 transition-colors">
                    Pay $3,200.00
                </button>
                <p className="text-[9px] text-center text-gray-400">256-bit SSL · PCI-DSS compliant</p>
            </div>
        </div>
    </div>
);

/* Billing automation mockup — recurring schedules + status */
const BillingAutomationMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/billing" />
        <div className="p-5 bg-white space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-brand-dark">Automated Billing</p>
                <span className="text-[10px] px-2 py-0.5 bg-green-50 text-brand-primary rounded-full font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
                    Live
                </span>
            </div>

            <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-green-50/40 to-white p-3">
                <p className="text-[10px] font-semibold text-gray-500 mb-2">Recurring Schedules</p>
                {[
                    { n: "Acme Corp · Monthly", a: "$3,200", d: "May 18", s: "Sent" },
                    { n: "Globex · Weekly", a: "$860", d: "May 12", s: "Scheduled" },
                    { n: "Initech · Quarterly", a: "$5,400", d: "Jun 01", s: "Scheduled" },
                ].map((b, i) => (
                    <div key={i} className="flex justify-between items-center text-[11px] py-1.5 border-t border-gray-100 first:border-0">
                        <div>
                            <p className="font-bold text-brand-dark leading-tight">{b.n}</p>
                            <p className="text-[9px] text-gray-500">Due {b.d}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-brand-dark">{b.a}</span>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${b.s === "Sent" ? "bg-green-50 text-brand-primary" : "bg-blue-50 text-blue-600"}`}>{b.s}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-2">
                {[
                    { l: "Sent", v: "128", c: "text-brand-primary" },
                    { l: "Pending", v: "14", c: "text-yellow-600" },
                    { l: "Failed", v: "1", c: "text-red-500" },
                ].map((s, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-2 text-center">
                        <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">{s.l}</p>
                        <p className={`text-sm font-bold ${s.c}`}>{s.v}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);


const FinancialManagementPage = ({ onOpenInquiry, setCurrentPage }) => {
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
            <section className="relative pt-20 pb-20 lg:pb-28 bg-gradient-to-b from-white to-green-50/40 overflow-hidden border-b border-gray-100">
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
                                <span className="text-brand-dark font-semibold">Accounting (Travel)</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary font-medium text-sm mb-5 shadow-sm border border-green-100">
                                <i className="fa-solid fa-calculator text-[12px]"></i>
                                Accounting System for Travel
                            </div>

                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight mb-5">
                                Smart <span className="text-brand-primary">Financial Management</span> for Your Business
                            </h1>

                            <p className="text-brand-gray text-sm md:text-base mb-7 leading-relaxed font-light">
                                Manage payments, invoices, and expenses with complete visibility — all in one streamlined system.
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
                        </div>

                        <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
                            <div className="relative perspective-1000">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-green-300 rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-2xl"></div>

                                <div className="relative z-10 flex items-center gap-6">
                                    <div className="w-2/3 relative group">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-all duration-500">
                                            <FinanceDashboardMockup />
                                        </div>

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

            {/* TOP CARDS */}
            <section id="core-features" className="py-24 bg-[#fafafa]">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Built for Financial Clarity</h2>
                        <p className="text-brand-gray text-lg font-light">A focused suite that turns finance from a chore into a clear, automated workflow.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "fa-solid fa-wallet",
                                title: "Travel Accounting Suite",
                                desc: "Track payments, invoices, and expenses with a complete financial overview for every booking.",
                            },
                            {
                                icon: "fa-solid fa-bolt",
                                title: "Payment & Billing Automation",
                                desc: "Generate payment links, automate invoicing, and track transactions effortlessly.",
                            },
                            {
                                icon: "fa-solid fa-chart-simple",
                                title: "Financial Insights",
                                desc: "Get real-time insights into revenue, expenses, and profitability — at a glance.",
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

            {/* SECTION 1 — Accounting Suite (text left, mockups right) */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl mb-4">
                                <i className="fa-solid fa-wallet"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Complete Financial Overview
                            </h2>
                            <p className="text-brand-gray text-lg font-light leading-relaxed">
                                Get full visibility of your business finances with real-time tracking of payments, invoices, and expenses — without spreadsheets.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Track payments per booking",
                                    "Manage invoices and expenses",
                                    "View financial summaries instantly",
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
                                        <FinanceDashboardMockup />
                                    </div>
                                </div>
                                <div className="w-1/3 relative group transform -translate-y-6">
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
                                        <InvoiceMockup />
                                    </div>
                                    <div className="absolute -bottom-3 -right-3 bg-white p-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-1 z-20">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-brand-primary text-[9px]">
                                            <i className="fa-solid fa-check"></i>
                                        </div>
                                        <span className="text-[9px] font-bold text-brand-dark">Paid</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — Billing Automation (mockups left, text right) */}
            <section className="py-24 bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1 relative perspective-1000" data-aos="fade-right">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-brand-primary rounded-[2rem] transform rotate-2 scale-105 opacity-20 blur-xl"></div>

                            <div className="relative z-10 flex items-center gap-6">
                                <div className="w-1/3 relative group transform translate-y-6">
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-xl overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-all duration-500">
                                        <PaymentModalMockup />
                                    </div>
                                    <div className="absolute -top-3 -right-3 bg-white p-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-1 z-20 animate-pulse">
                                        <i className="fa-solid fa-lock text-brand-primary text-[10px]"></i>
                                        <span className="text-[9px] font-bold text-brand-dark">Secure</span>
                                    </div>
                                </div>
                                <div className="w-2/3 relative group">
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                                        <BillingAutomationMockup />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary text-xl mb-4 shadow-sm">
                                <i className="fa-solid fa-bolt"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Automate Payments & Invoicing
                            </h2>
                            <p className="text-brand-gray text-lg font-light leading-relaxed">
                                Simplify billing with automated workflows that reduce manual effort and errors — your invoices send themselves and your payments reconcile in real time.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Generate secure payment links",
                                    "Automatic invoice creation",
                                    "Real-time payment tracking",
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

            {/* SECTION 3 — Value (Stay in Control) */}
            <section className="py-24 bg-[#fafafa] border-y border-gray-100">
                <div className="mx-3 px-4 md:px-14">
                    <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                        <div className="w-16 h-16 mx-auto rounded-full bg-brand-light flex items-center justify-center text-brand-primary text-2xl mb-4 shadow-sm">
                            <i className="fa-solid fa-chart-line"></i>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
                            Stay in Control of Your Finances
                        </h2>
                        <p className="text-brand-gray text-lg font-light">
                            Understand your business performance with clear and actionable financial data.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: "fa-solid fa-arrow-trend-up",
                                title: "Revenue Tracking",
                                desc: "See income flow in real time across every booking and channel.",
                            },
                            {
                                icon: "fa-solid fa-receipt",
                                title: "Expense Monitoring",
                                desc: "Watch where money goes with auto-categorized spend.",
                            },
                            {
                                icon: "fa-solid fa-coins",
                                title: "Profit Insights",
                                desc: "Know your margins instantly — no spreadsheets, no guesswork.",
                            },
                            {
                                icon: "fa-solid fa-magnifying-glass-chart",
                                title: "Booking-Level Visibility",
                                desc: "Drill into any booking to see its full financial story.",
                            },
                        ].map((p, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-green-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={i * 100}
                            >
                                <div className="w-11 h-11 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center mb-4">
                                    <i className={p.icon}></i>
                                </div>
                                <h3 className="font-bold text-brand-dark mb-2">{p.title}</h3>
                                <p className="text-brand-gray text-sm font-light leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
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
            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-brand-primary to-green-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-20 rounded-full filter blur-3xl mix-blend-overlay"></div>

                <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-8" data-aos="zoom-in">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
                        Take Control of Your Business Finances
                    </h2>
                    <p className="text-xl text-green-50 font-light">
                        Automate your financial processes and focus on growing your business.
                    </p>
                    <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={onOpenInquiry}
                            className="bg-white text-brand-primary px-6 py-2 rounded-xl font-bold text-lg hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            Request Demo
                        </button>
                        <button
                            onClick={() => setCurrentPage && setCurrentPage('pricing')}
                            className="bg-transparent border border-white/40 text-white px-6 py-2 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
                        >
                            View Pricing
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FinancialManagementPage;
