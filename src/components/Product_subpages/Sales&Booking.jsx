import React, { useEffect } from "react";
import Book1 from "../../assets/images/productimages/Book-1.png";
import Book2 from "../../assets/images/productimages/Book-2.png";
import CRM1 from "../../assets/images/productimages/CRM-1.png";
import CRM2 from "../../assets/images/productimages/CRM-2.png";
import Itinerary from "../../assets/images/productimages/Tailor-1.png";
import Tailor2 from "../../assets/images/productimages/Tailor-2.png";



const SalesBookingPage = ({ onOpenInquiry }) => {
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
        <main className="pt-20 bg-white font-sans overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative pt-20 pb-20 lg:pb-28 bg-white overflow-hidden border-b border-gray-100">
                <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-light pointer-events-none rounded-l-full blur-3xl opacity-60"></div>

                <div className="mx-3 px-4 md:px-14 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 text-left" data-aos="fade-right">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-brand-primary font-medium text-sm mb-6 shadow-sm border border-green-100">
                                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                                Powerful Sales Tools
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight leading-tight mb-6">
                                Supercharge Your <span className="text-brand-primary">Sales & Booking</span> Process
                            </h1>

                            <p className="text-brand-gray text-md md:text-lg mb-8 leading-relaxed font-light">
                                Streamline bookings, build beautiful custom itineraries, and manage client relationships effortlessly — all from one unified dashboard.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={onOpenInquiry}
                                    className="bg-brand-primary text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-green-700 shadow-lg shadow-green-500/20 transition-all duration-300"
                                >
                                    Request Demo
                                </button>
                                <button
                                    onClick={() => document.getElementById('core-features').scrollIntoView({ behavior: 'smooth' })}
                                    className="bg-white text-brand-dark border border-gray-200 px-8 py-4 rounded-xl font-medium text-lg hover:border-brand-primary hover:text-brand-primary transition-all duration-300"
                                >
                                    Explore Features
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
                            <div className="relative perspective-1000">
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-green-300 rounded-[2rem] transform rotate-3 scale-105 opacity-20 blur-2xl"></div>

                                <div className="relative z-10 flex items-center gap-6">
                                    {/* Main Mockup */}
                                    <div className="w-2/3 relative group">
                                        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform -rotate-2 group-hover:rotate-0 transition-all duration-500">
                                            {/* Browser Chrome */}
                                            <div className="bg-gray-50/80 backdrop-blur px-4 py-3 flex items-center gap-2 border-b border-gray-100">
                                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                            </div>
                                            <img src={Book1} alt="Dashboard UI" className="w-full object-cover" />
                                        </div>

                                        {/* Floating Badge */}
                                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-brand-primary">
                                                <i className="fa-solid fa-chart-line"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-brand-gray font-medium">Monthly Growth</p>
                                                <p className="text-sm font-bold text-brand-dark">+42.8%</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Secondary Mockup */}
                                    <div className="w-1/3 relative group transform translate-y-12">
                                        <div className="bg-white rounded-xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                                            <div className="bg-gray-50 px-2 py-2 flex items-center gap-1.5 border-b border-gray-100">
                                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                            </div>
                                            <img src={Book2} alt="Mobile UI" className="w-full object-cover" />
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
                        <p className="text-brand-gray text-lg font-light">Everything you need to convert leads and manage operations efficiently.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "fa-solid fa-calendar-check",
                                title: "Booking & Reservation",
                                desc: "Manage tours, transfers, rentals, and activities with real-time availability and instant confirmations."
                            },
                            {
                                icon: "fa-solid fa-map-location-dot",
                                title: "Itinerary Builder",
                                desc: "Create custom travel proposals with drag-and-drop trip planning to impress your clients."
                            },
                            {
                                icon: "fa-solid fa-users",
                                title: "Travel CRM",
                                desc: "Manage client profiles, history, and preferences to build better, long-lasting relationships."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group" data-aos="fade-up" data-aos-delay={i * 100}>
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

            {/* DETAILED SECTIONS */}

            {/* 1. Booking */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl mb-4">
                                <i className="fa-solid fa-calendar-check"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Centralized Booking & Reservation Management
                            </h2>
                            <p className="text-brand-gray text-lg font-light leading-relaxed">
                                Easily manage tours, transfers, rentals, and activities from a single dashboard. Say goodbye to double bookings and manual tracking.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Real-time availability & automated confirmations",
                                    "Centralized multi-service booking system",
                                    "Seamless payment gateway integration"
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
                                {/* Browser Frame */}
                                <div className="bg-gray-50/90 border-b border-gray-100 px-4 py-3 flex justify-between items-center">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-100 font-mono">
                                        admin.bu-operations.com/bookings
                                    </div>
                                </div>
                                <img src={Book1} alt="Booking Management" className="w-full object-cover" />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute top-1/4 -right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 transform group-hover:scale-110 transition-transform duration-300">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                    <i className="fa-solid fa-calendar-check text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-xs text-brand-gray font-medium">New Booking</p>
                                    <p className="text-sm font-bold text-brand-dark">Confirmed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Itinerary */}
            <section className="py-24 bg-brand-light overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 order-2 lg:order-1 relative group" data-aos="fade-right">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-blue-200 rounded-[2rem] transform rotate-2 scale-105 opacity-20 blur-xl group-hover:-rotate-2 transition-transform duration-700"></div>

                            <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform group-hover:-translate-y-2 transition-all duration-500">
                                {/* Browser Frame */}
                                <div className="bg-gray-50/90 border-b border-gray-100 px-4 py-3 flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                                </div>
                                <img src={Itinerary} alt="Itinerary Builder" className="w-full object-cover" />
                            </div>

                            {/* Floating Element */}
                            <div className="absolute bottom-12 -left-8 bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 z-20 transform group-hover:scale-110 transition-transform duration-300 hidden md:flex">
                                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                                    <i className="fa-solid fa-file-invoice text-lg"></i>
                                </div>
                                <div>
                                    <p className="text-xs text-brand-gray font-medium">Proposal Sent</p>
                                    <p className="text-sm font-bold text-brand-dark">Just now</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-6 order-1 lg:order-2" data-aos="fade-left">
                            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary text-xl mb-4 shadow-sm">
                                <i className="fa-solid fa-map-location-dot"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Tailor-Made Itinerary Builder
                            </h2>
                            <p className="text-brand-gray text-lg font-light leading-relaxed">
                                Build custom travel proposals with speed and flexibility. Impress your clients with stunning, detailed itineraries generated in minutes.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Intuitive drag-and-drop trip planning",
                                    "Dynamic pricing & margin calculation",
                                    "Beautiful, mobile-friendly client proposals"
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

            {/* 3. CRM */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="mx-3 px-4 md:px-14">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
                            <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-primary text-xl mb-4">
                                <i className="fa-solid fa-users"></i>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark leading-tight">
                                Intelligent Travel CRM
                            </h2>
                            <p className="text-brand-gray text-lg font-light leading-relaxed">
                                Keep track of your clients, their preferences, and booking history to deliver highly personalized experiences and foster loyalty.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    "Comprehensive client profiles & history",
                                    "Smart segmentation and targeted marketing",
                                    "Automated follow-ups and reminders"
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
                                        <div className="bg-gray-50 px-2 py-1.5 flex items-center gap-1 border-b border-gray-100">
                                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                                        </div>
                                        <img src={CRM2} alt="Client Mobile View" className="w-full object-cover" />
                                    </div>
                                    <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2 z-20">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">
                                            <i className="fa-solid fa-check"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-2/3 relative group">
                                    <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-2 group-hover:rotate-0 transition-all duration-500">
                                        <div className="bg-gray-50/90 border-b border-gray-100 px-3 py-2 flex items-center gap-2">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                        </div>
                                        <img src={CRM1} alt="CRM Dashboard" className="w-full object-cover" />
                                    </div>
                                    <div className="absolute -top-6 -right-4 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center gap-1 z-20 animate-pulse hidden md:flex">
                                        <span className="text-xs text-brand-gray uppercase font-bold tracking-wider">Client Retention</span>
                                        <span className="text-brand-primary font-bold text-lg">94%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EXTRA SECTION 1: Advanced Analytics */}
            <section className="py-24 bg-[#fafafa] border-y border-gray-100 overflow-hidden">
                <div className="mx-3 px-4 md:px-14 text-center">
                    <div className="max-w-3xl mx-auto space-y-6" data-aos="fade-up">
                        <div className="w-16 h-16 mx-auto rounded-full bg-brand-light flex items-center justify-center text-brand-primary text-2xl mb-2 shadow-sm">
                            <i className="fa-solid fa-chart-pie"></i>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
                            Actionable Insights & Analytics
                        </h2>
                        <p className="text-brand-gray text-lg font-light leading-relaxed">
                            Make data-driven decisions with built-in reporting tools. Track sales performance, agent productivity, and revenue trends in real-time.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: "Revenue", label: "Financial Tracking" },
                            { value: "Conversion", label: "Lead Win Rates" },
                            { value: "Destinations", label: "Popular Packages" },
                            { value: "Productivity", label: "Agent Performance" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-200 transition-colors" data-aos="zoom-in" data-aos-delay={i * 100}>
                                <h4 className="text-brand-primary font-bold text-xl mb-1">{stat.value}</h4>
                                <p className="text-brand-gray text-sm">{stat.label}</p>
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
                        Ready to Boost Your Sales Efficiency?
                    </h2>
                    <p className="text-xl text-green-50 font-light">
                        Close deals faster, reduce manual work, and deliver seamless booking experiences to your clients.
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

export default SalesBookingPage;