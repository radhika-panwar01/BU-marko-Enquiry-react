import React from 'react';

const Pricing = ({ onOpenInquiry }) => {
    return (
        <section id="pricing" className="py-20 bg-brand-light" data-aos="fade-up" data-aos-duration="1000">
            <div className="mx-3 px-4 md:px-3 text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-3xl font-semibold text-brand-dark leading-light">
                    Scale your travel business with flexible<br className="hidden md:block" /> plans and no hidden fees
                </h2>
                <p className="text-brand-gray">
                    Whether you're just launching or scaling your travel agency, Bu-Marka has the right plan to support your growth.
                </p>
            </div>

            <div className="mx-3 px-4 md:px-14 grid md:grid-cols-3 gap-8">
                {/* Professional Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
                        <h3 className="text-xl font-bold text-brand-dark">Professional</h3>
                    </div>
                    <div className="mb-8 flex items-end">
                        <span className="text-5xl font-bold text-brand-dark">75€</span>
                        <div className="text-brand-gray text-xs ml-2 mb-1 leading-tight font-medium">
                            <span>per user</span><br />
                            <span>per month</span>
                        </div>
                    </div>
                    <div className="mb-6">
                        <p className="font-bold text-brand-dark mb-2">Billed annually</p>
                        <p className="text-brand-gray text-sm">Everything you need to digitize your travel sales</p>
                    </div>
                    <button onClick={onOpenInquiry} className="w-full bg-brand-primary text-white py-3 rounded-lg font-bold mb-8 hover:bg-green-700 transition">Request a demo</button>
                    <ul className="space-y-4 flex-grow">
                        {[
                            'Itinerary builder',
                            'Quotation tool',
                            'Customizable traveler Websites (mobile & desktop)',
                            'Customizable travel Documents',
                            'Interactive Map itineraries',
                            'Built-in Travel CRM',
                            'Task management',
                            'Advanced Invoicing'
                        ].map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <i className="fa-regular fa-circle-check text-brand-dark mt-1 text-sm"></i>
                                <span className="text-brand-gray text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Premium Card */}
                <div className="bg-brand-primary rounded-2xl shadow-xl p-8 flex flex-col h-full relative transform md:-translate-y-4 hover:-translate-y-6 transition-all duration-300">
                    <div className="absolute top-0 right-8 bg-[#FFF4E0] text-[#D49F00] text-xs font-bold px-3 py-1.5 rounded-b-lg flex items-center gap-1">
                        <i className="fa-solid fa-star"></i> Most Popular
                    </div>
                    <div className="mb-6 mt-2">
                        <h3 className="text-2xl font-bold text-white">Premium</h3>
                    </div>
                    <div className="mb-8 flex items-end text-white">
                        <span className="text-5xl font-bold tracking-tight">100€</span>
                        <div className="text-white text-xs ml-2 mb-2 leading-tight font-medium opacity-90">
                            <span>per user</span><br />
                            <span>per month</span>
                        </div>
                    </div>
                    <div className="mb-6 text-white">
                        <p className="font-bold mb-2">Billed annually</p>
                        <p className="text-sm opacity-90">The complete solution to scale your agency</p>
                    </div>
                    <button onClick={onOpenInquiry} className="w-full bg-white text-brand-primary py-3 rounded-full font-bold mb-8 hover:bg-gray-50 transition">Request a demo</button>
                    <ul className="space-y-4 flex-grow text-white">
                        <li className="flex items-start gap-3">
                            <i className="fa-regular fa-circle-check mt-1 text-white text-sm"></i>
                            <span className="text-sm font-bold">All Professional features</span>
                        </li>
                        {[
                            'Built-in Mailbox for supplier communication',
                            'Automatic translation (multi-language ready)',
                            'Custom URLs for your traveler portal',
                            'Multi-Brand',
                            'Automated financial reporting',
                            'Public API to connect your tools',
                            'Priority support & dedicated account manager'
                        ].map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <i className="fa-regular fa-circle-check text-white text-sm"></i>
                                <span className="text-white text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Enterprise Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col h-full hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-brand-primary"></div>
                        <h3 className="text-xl font-bold text-brand-dark">Enterprise</h3>
                    </div>
                    <div className="mb-8 mt-[10px]">
                        <span className="text-4xl font-bold text-brand-dark">On request</span>
                    </div>
                    <div className="mb-6 mt-[25px]">
                        <p className="font-bold text-brand-dark mb-2">Billed annually</p>
                        <p className="text-brand-gray text-sm">Tailor-made solution for large organizations</p>
                    </div>
                    <button onClick={onOpenInquiry} className="w-full bg-brand-primary text-white py-3 rounded-full font-bold mb-8 hover:bg-green-700 transition">Request a demo</button>
                    <ul className="space-y-4 flex-grow">
                        <li className="flex items-start gap-3">
                            <i className="fa-regular fa-circle-check text-brand-dark mt-1 text-sm"></i>
                            <span className="text-brand-dark font-bold text-sm">All Premium features</span>
                        </li>
                        {[
                            'More than 30 users',
                            'Advanced reporting',
                            'Custom Dashboards',
                            'Private API & custom integrations',
                            'Custom features & workflows',
                            'Single Sign-On (SSO)',
                            'Exclusive rates on €1M+ payment gateway volume',
                            'Custom Implementation schedule for onboarding'
                        ].map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <i className="fa-regular fa-circle-check text-brand-dark mt-1 text-sm"></i>
                                <span className="text-brand-gray text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
