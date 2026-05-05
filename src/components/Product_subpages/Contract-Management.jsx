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

/* Contracts dashboard */
const ContractsDashboardMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/contracts" />
        <div className="p-4 sm:p-5 bg-gradient-to-br from-white to-gray-50 space-y-3">
            <div className="grid grid-cols-4 gap-2">
                {[
                    { l: "Active", v: "82", c: "text-brand-primary" },
                    { l: "Pending", v: "9", c: "text-yellow-600" },
                    { l: "Expiring", v: "4", c: "text-red-500" },
                    { l: "Drafts", v: "12", c: "text-blue-600" },
                ].map((k, i) => (
                    <div key={i} className="rounded-lg border border-gray-100 bg-white p-2">
                        <p className="text-[8px] uppercase text-gray-400 font-semibold tracking-wider">{k.l}</p>
                        <p className={`text-base font-bold ${k.c}`}>{k.v}</p>
                    </div>
                ))}
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-bold text-brand-dark">Contract Pipeline</p>
                    <span className="text-[9px] text-gray-400">Past 30d</span>
                </div>
                {[
                    { n: "MSA · Globex Travel", v: "$48K", st: "Signed", c: "text-brand-primary bg-green-50", icon: "fa-circle-check" },
                    { n: "DPA · Acme DMC", v: "—", st: "Out for sig.", c: "text-blue-600 bg-blue-50", icon: "fa-paper-plane" },
                    { n: "SOW · Marina Tours", v: "$12K", st: "Review", c: "text-yellow-600 bg-yellow-50", icon: "fa-clock" },
                    { n: "NDA · Initech Ferries", v: "—", st: "Draft", c: "text-gray-500 bg-gray-50", icon: "fa-file" },
                ].map((c, i) => (
                    <div key={i} className="flex items-center gap-2.5 py-1.5 border-t border-gray-50 first:border-0 text-[11px]">
                        <div className={`w-7 h-7 rounded-lg ${c.c} flex items-center justify-center`}>
                            <i className={`fa-solid ${c.icon} text-[10px]`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-brand-dark truncate">{c.n}</p>
                            <p className="text-[9px] text-gray-500">{c.v}</p>
                        </div>
                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold ${c.c}`}>{c.st}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

/* Contract editor / clause library */
const ContractEditorMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/contracts/draft" />
        <div className="p-4 sm:p-5 bg-white space-y-3">
            <div className="flex justify-between items-start pb-2 border-b border-gray-100">
                <div>
                    <p className="text-[10px] uppercase text-gray-400 font-semibold tracking-wider">Contract Draft</p>
                    <p className="text-sm font-bold text-brand-dark">MSA · Globex Travel Co.</p>
                </div>
                <span className="text-[10px] px-2 py-0.5 bg-yellow-50 text-yellow-600 rounded-full font-bold">v 2.1 · Edited</span>
            </div>

            {/* Clause snippet */}
            <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-white to-green-50/30 p-3">
                <p className="text-[10px] font-semibold text-brand-primary uppercase tracking-wider mb-1">§ 4.2 Term & Termination</p>
                <p className="text-[10px] text-gray-600 leading-relaxed">
                    This Agreement shall remain in effect for an initial period of <span className="bg-green-100 text-brand-primary font-semibold rounded px-0.5">twelve (12) months</span> from the Effective Date and shall renew automatically for <span className="bg-yellow-100 text-yellow-700 font-semibold rounded px-0.5">successive 12-month terms</span> unless terminated in writing.
                </p>
            </div>

            {/* Clause library */}
            <div className="rounded-xl border border-gray-100 bg-white p-3">
                <p className="text-[10px] font-bold text-brand-dark mb-2">Clause Library</p>
                {[
                    { l: "Limitation of Liability", t: "Standard" },
                    { l: "Data Protection (DPA)", t: "GDPR-ready" },
                    { l: "Force Majeure", t: "Travel" },
                ].map((cl, i) => (
                    <div key={i} className="flex items-center justify-between py-1 text-[10px] border-t border-gray-50 first:border-0">
                        <span className="text-brand-dark font-medium">{cl.l}</span>
                        <span className="text-[9px] text-gray-400">{cl.t}</span>
                    </div>
                ))}
            </div>

            <div className="flex gap-2">
                <button className="flex-1 rounded-lg border border-gray-200 text-[10px] font-bold text-brand-dark py-2">Save Draft</button>
                <button className="flex-1 rounded-lg bg-brand-primary text-white text-[10px] font-bold py-2">Send for Signature</button>
            </div>
        </div>
    </div>
);

/* E-sign mobile */
const SignatureMockup = () => (
    <div className="bg-white">
        <MobileChrome />
        <div className="p-3 sm:p-4 space-y-3 bg-gradient-to-b from-green-50 to-white">
            <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
                <p className="text-[9px] uppercase tracking-wider text-gray-400 font-semibold">Awaiting Signature</p>
                <p className="text-xs font-bold text-brand-dark mt-0.5">MSA · Globex Travel Co.</p>
                <div className="mt-2 flex items-center gap-1.5 text-[9px] text-gray-500">
                    <i className="fa-solid fa-clock"></i><span>Sent 2h ago · 4 signers</span>
                </div>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-3">
                <p className="text-[10px] font-bold text-brand-dark mb-2">Signing Order</p>
                {[
                    { n: "S. Khan · BU Marka", st: "Signed" },
                    { n: "L. Foster · Globex", st: "Signed" },
                    { n: "M. Patel · Globex Legal", st: "Pending" },
                    { n: "CEO · Globex", st: "Queued" },
                ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 py-1.5 border-t border-gray-50 first:border-0">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold ${s.st === "Signed" ? "bg-green-50 text-brand-primary" : s.st === "Pending" ? "bg-yellow-50 text-yellow-600" : "bg-gray-50 text-gray-400"}`}>
                            {s.st === "Signed" ? <i className="fa-solid fa-check"></i> : i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-bold text-brand-dark truncate">{s.n}</p>
                            <p className="text-[8px] text-gray-500">{s.st}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="rounded-xl border-2 border-dashed border-brand-primary bg-brand-light/40 p-4 text-center">
                <p className="text-[10px] text-brand-primary font-bold mb-1">Tap to sign</p>
                <svg viewBox="0 0 100 30" className="w-full h-8">
                    <path d="M5,20 Q15,5 25,18 T50,15 Q65,10 80,20 T95,18" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    </div>
);

/* Renewal alerts */
const RenewalAlertsMockup = () => (
    <div className="bg-white">
        <BrowserChrome url="admin.bu-operations.com/contracts/renewals" />
        <div className="p-4 sm:p-5 bg-white space-y-3">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-brand-dark">Upcoming Renewals</p>
                <span className="text-[10px] px-2 py-0.5 bg-yellow-50 text-yellow-600 rounded-full font-semibold">Next 60 days</span>
            </div>

            {/* Timeline */}
            <div className="rounded-xl border border-gray-100 bg-gradient-to-br from-white to-yellow-50/40 p-3">
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-green-200 via-yellow-200 to-red-200"></div>
                </div>
                <div className="flex justify-between mt-1 text-[9px] text-gray-400">
                    <span>Today</span><span>30d</span><span>60d</span>
                </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-3">
                {[
                    { n: "Marina Tours · Vendor MSA", d: "12 days", c: "text-red-500 bg-red-50", icon: "fa-triangle-exclamation" },
                    { n: "AirOne · Charter Agreement", d: "28 days", c: "text-yellow-600 bg-yellow-50", icon: "fa-clock" },
                    { n: "DataSafe · DPA Renewal", d: "47 days", c: "text-brand-primary bg-green-50", icon: "fa-circle-info" },
                ].map((r, i) => (
                    <div key={i} className="flex items-center gap-2.5 py-1.5 border-t border-gray-50 first:border-0 text-[11px]">
                        <div className={`w-7 h-7 rounded-lg ${r.c} flex items-center justify-center`}>
                            <i className={`fa-solid ${r.icon} text-[10px]`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-brand-dark truncate">{r.n}</p>
                            <p className="text-[9px] text-gray-500">in {r.d}</p>
                        </div>
                        <button className="text-[9px] px-2 py-0.5 rounded-full bg-brand-light text-brand-primary font-bold">Review</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ContractManagementPage = ({ onOpenInquiry, setCurrentPage }) => {
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
                                <span className="text-brand-dark font-semibold">Contract Management</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary font-medium text-sm mb-5 shadow-sm border border-green-100">
                                <i className="fa-solid fa-file-signature text-[12px]"></i>
                                Contract Management App
                            </div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark tracking-tight leading-tight mb-5">
                                <span className="text-brand-primary">Contract Management</span> Without the Chaos
                            </h1>
                            <p className="text-brand-gray text-sm md:text-base mb-7 leading-relaxed font-light">
                                Draft, negotiate, sign, and renew — every contract with partners, clients, and suppliers in a single audit-ready workspace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button onClick={onOpenInquiry} className="bg-brand-primary text-white px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:bg-green-700 shadow-lg shadow-green-500/20 transition-all duration-300">Request Demo</button>
                                <button onClick={() => document.getElementById("core-features").scrollIntoView({ behavior: "smooth" })} className="bg-white text-brand-dark border border-gray-200 px-6 py-2 rounded-xl font-medium text-base sm:text-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-300">Explore Features</button>
                            </div>
                            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 max-w-md">
                                {[
                                    { v: "70%", l: "Faster turnaround" },
                                    { v: "0", l: "Missed renewals" },
                                    { v: "Audit", l: "Trail per signature" },
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
                                            <ContractsDashboardMockup />
                                        </div>
                                        <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-2 sm:gap-3 animate-bounce" style={{ animationDuration: "3s" }}>
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-primary"><i className="fa-solid fa-file-signature"></i></div>
                                            <div>
                                                <p className="text-[10px] sm:text-xs text-brand-gray">Signed</p>
                                                <p className="text-xs sm:text-sm font-bold text-brand-dark">+24 this week</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 relative group transform translate-y-12">
                                        <div className="bg-white rounded-xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                            <SignatureMockup />
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
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark mb-4">Every Stage of the Contract, Covered</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">From first draft to final renewal — no more lost docs, missed dates, or email-chain chaos.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: "fa-solid fa-file-pen", title: "Draft & Negotiate", desc: "Templates, clause libraries, and version control — drafts that practically write themselves." },
                            { icon: "fa-solid fa-signature", title: "Sign Securely", desc: "Built-in e-signature with signing orders, audit trails, and certificate proof." },
                            { icon: "fa-solid fa-bell", title: "Renew on Time", desc: "Automated alerts before expiry — never lose a vendor MSA to silence again." },
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

            {/* SECTION 1 — Drafting */}
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-file-pen"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Smart Drafting With a Library That Learns</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">Pre-approved clauses, branded templates, and inline negotiation tracking — generate a tight first draft in minutes, not days.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["Reusable clause library with playbooks", "Track changes & redline comparison", "Variable fields auto-fill from CRM"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full relative group" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-green-200 rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-xl"></div>
                            <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                                <ContractEditorMockup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 — Signing */}
            <section className="py-[72px] bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 w-full order-2 lg:order-1 flex justify-center" data-aos="fade-right">
                            <div className="relative max-w-[260px] sm:max-w-xs w-full">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-brand-primary rounded-[2rem] transform rotate-2 scale-105 opacity-20 blur-xl"></div>
                                <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden">
                                    <SignatureMockup />
                                </div>
                                <div className="absolute -bottom-3 -right-3 bg-white p-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-1 z-20 animate-pulse">
                                    <i className="fa-solid fa-shield-halved text-brand-primary text-[10px]"></i>
                                    <span className="text-[9px] font-bold text-brand-dark">Audit-ready</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-signature"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Sign Anywhere, Securely</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">Built-in e-signature with sequential or parallel signers, mobile signing, and a full audit certificate the moment the last party signs.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["Sequential & parallel signing flows", "Tamper-proof audit certificate", "Mobile-friendly signer experience"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 — Renewals */}
            <section className="py-[72px] bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                        <div className="lg:w-1/2 space-y-5 sm:space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl"><i className="fa-solid fa-bell"></i></div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">Never Miss a Renewal Again</h2>
                            <p className="text-brand-gray text-base sm:text-lg font-light leading-relaxed">Smart alerts watch every contract date so you can renegotiate, renew, or exit before auto-renewal silently locks you in.</p>
                            <ul className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                                {["Configurable alerts at 90 / 60 / 30 days", "Automatic owner & legal notifications", "Renewal terms compared side-by-side"].map((p, i) => (
                                    <li key={i} className="flex items-center gap-3 text-brand-dark font-medium"><i className="fa-solid fa-circle-check text-brand-primary"></i>{p}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full relative group" data-aos="fade-left">
                            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200 to-brand-primary rounded-[2rem] transform -rotate-2 scale-105 opacity-20 blur-2xl"></div>
                            <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                                <RenewalAlertsMockup />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUE STRIP */}
            <section className="py-[72px] bg-[#fafafa] border-y border-gray-100">
                <div className="mx-3 px-4 md:px-14 text-center">
                    <div className="max-w-3xl mx-auto" data-aos="fade-up">
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">Compliance, Built In</h2>
                        <p className="text-brand-gray text-base sm:text-lg font-light">Designed with legal-grade security and audit-readiness from day one.</p>
                    </div>
                    <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { i: "fa-solid fa-shield-halved", v: "Audit Trail", l: "Every change logged" },
                            { i: "fa-solid fa-lock", v: "Encrypted", l: "AES-256 at rest" },
                            { i: "fa-solid fa-user-shield", v: "RBAC", l: "Granular permissions" },
                            { i: "fa-solid fa-magnifying-glass", v: "Searchable", l: "Full-text indexed" },
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
                plans={PRICING_DATA['contract-management']}
                title="Flexible Pricing for Contract Management"
                subtitle="Choose the right plan to manage your agreements and ensure compliance."
            />

            {/* CTA */}
            <section className="py-[72px] bg-gradient-to-br from-brand-primary to-green-800 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 opacity-20 rounded-full filter blur-3xl mix-blend-overlay"></div>
                <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-6 sm:space-y-8" data-aos="zoom-in">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">Get Every Contract Across the Finish Line</h2>
                    <p className="text-base sm:text-xl text-green-50 font-light">Faster turnaround, fewer mistakes, and zero lost paperwork — that's the deal.</p>
                    <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <button onClick={onOpenInquiry} className="bg-white text-brand-primary px-6 py-2 rounded-xl font-bold text-base sm:text-lg hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1">Request Demo</button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContractManagementPage;
