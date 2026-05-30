import React, { useState } from 'react';

const plans = [
    {
        name: 'Starter',
        tagline: 'Perfect for small agencies starting their digital journey',
        priceMonthly: 35,
        priceAnnually: 28,
        cta: 'Get Started',
        highlight: false,
        features: [
            'Itinerary builder',
            'Quotation tool',
            'Basic traveler website',
            'Standard travel documents',
            'Up to 3 users',
            'Email support',
        ],
    },
    {
        name: 'Professional',
        tagline: 'Everything you need to digitize your travel sales',
        priceMonthly: 75,
        priceAnnually: 60,
        cta: 'Request a demo',
        highlight: false,
        features: [
            'Itinerary builder',
            'Quotation tool',
            'Customizable traveler Websites',
            'Customizable travel Documents',
            'Interactive Map itineraries',
            'Built-in Travel CRM',
            'Task management',
            'Advanced Invoicing',
        ],
    },
    {
        name: 'Premium',
        tagline: 'The complete solution to scale your agency',
        priceMonthly: 100,
        priceAnnually: 80,
        cta: 'Request a demo',
        highlight: true,
        features: [
            'All Professional features',
            'Built-in Mailbox for suppliers',
            'Automatic translation (multi-language)',
            'Custom URLs for traveler portal',
            'Multi-Brand support',
            'Automated financial reporting',
            'Public API to connect your tools',
            'Priority support & account manager',
        ],
    },
    {
        name: 'Enterprise',
        tagline: 'Tailor-made solution for large organizations',
        custom: true,
        cta: 'Contact Sales',
        highlight: false,
        features: [
            'All Premium features',
            'More than 30 users',
            'Advanced reporting',
            'Custom Dashboards',
            'Private API & integrations',
            'Custom features & workflows',
            'Single Sign-On (SSO)',
            'Custom onboarding schedule',
        ],
    },
];

const Pricing = ({ onOpenInquiry }) => {
    const [billing, setBilling] = useState('annually');
    const isAnnual = billing === 'annually';

    return (
        <section id="pricing" className="py-20 bg-brand-light" data-aos="fade-up" data-aos-duration="1000">
            <div className="mx-3 px-4 md:px-3 text-center space-y-4 mb-10">
                <h2 className="text-3xl md:text-3xl font-semibold text-brand-dark leading-light">
                    Scale your travel business with flexible<br className="hidden md:block" /> plans and no hidden fees
                </h2>
                <p className="text-brand-gray">
                    Whether you're just launching or scaling your travel agency, Bu-Marka has the right plan to support your growth.
                </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-12">
                <div className="relative grid grid-cols-2 items-center bg-white border border-gray-200 rounded-full p-1 shadow-sm w-[280px] sm:w-[320px]">
                    <span
                        className={`absolute top-1 bottom-1 left-1 rounded-full bg-brand-primary shadow-sm transition-transform duration-300 ease-out`}
                        style={{
                            width: 'calc(50% - 4px)',
                            transform: isAnnual ? 'translateX(100%)' : 'translateX(0)',
                        }}
                    ></span>
                    <button
                        onClick={() => setBilling('monthly')}
                        className={`relative z-10 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                            !isAnnual ? 'text-white' : 'text-brand-dark'
                        }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBilling('annually')}
                        className={`relative z-10 py-2 text-sm font-semibold rounded-full transition-colors duration-300 flex items-center justify-center gap-2 ${
                            isAnnual ? 'text-white' : 'text-brand-dark'
                        }`}
                    >
                        Annually
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors duration-300 ${
                            isAnnual ? 'bg-white text-brand-primary' : 'bg-brand-primary/10 text-brand-primary'
                        }`}>
                            -20%
                        </span>
                    </button>
                </div>
            </div>

            <div className="mx-3 px-4 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
                {plans.map((plan) => {
                    const isHighlight = plan.highlight;
                    const price = plan.custom
                        ? null
                        : isAnnual
                        ? plan.priceAnnually
                        : plan.priceMonthly;

                    return (
                        <div
                            key={plan.name}
                            className={`relative rounded-2xl flex flex-col h-full transition-all duration-300 ${
                                isHighlight
                                    ? 'bg-brand-primary shadow-xl lg:-translate-y-3 hover:-translate-y-5 p-8 ring-1 ring-brand-primary'
                                    : 'bg-white border border-gray-100 shadow-sm hover:-translate-y-2 hover:shadow-xl p-8'
                            }`}
                        >
                            {isHighlight && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFF4E0] text-[#D49F00] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                                    <i className="fa-solid fa-star"></i> Most Popular
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="flex items-center gap-2 mb-6">
                                <div
                                    className={`w-3 h-3 rounded-full ${
                                        isHighlight ? 'bg-white' : 'bg-brand-primary'
                                    }`}
                                ></div>
                                <h3
                                    className={`text-xl font-bold ${
                                        isHighlight ? 'text-white' : 'text-brand-dark'
                                    }`}
                                >
                                    {plan.name}
                                </h3>
                            </div>

                            {/* Price */}
                            <div className="mb-2 min-h-[64px] flex items-end">
                                {plan.custom ? (
                                    <span
                                        className={`text-4xl font-bold ${
                                            isHighlight ? 'text-white' : 'text-brand-dark'
                                        }`}
                                    >
                                        On request
                                    </span>
                                ) : (
                                    <>
                                        <span
                                            className={`text-5xl font-bold tracking-tight transition-all duration-300 ${
                                                isHighlight ? 'text-white' : 'text-brand-dark'
                                            }`}
                                        >
                                            {price}€
                                        </span>
                                        <div
                                            className={`text-xs ml-2 mb-2 leading-tight font-medium ${
                                                isHighlight ? 'text-white/90' : 'text-brand-gray'
                                            }`}
                                        >
                                            <span>per user</span>
                                            <br />
                                            <span>per month</span>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Billing note */}
                            <div className="mb-6">
                                <p
                                    className={`font-bold mb-2 ${
                                        isHighlight ? 'text-white' : 'text-brand-dark'
                                    }`}
                                >
                                    {plan.custom
                                        ? 'Custom pricing'
                                        : isAnnual
                                        ? 'Billed annually'
                                        : 'Billed monthly'}
                                </p>
                                <p
                                    className={`text-sm ${
                                        isHighlight ? 'text-white/90' : 'text-brand-gray'
                                    }`}
                                >
                                    {plan.tagline}
                                </p>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={onOpenInquiry}
                                className={`w-full py-3 rounded-full font-bold mb-8 transition ${
                                    isHighlight
                                        ? 'bg-white text-brand-primary hover:bg-gray-50'
                                        : 'bg-brand-primary text-white hover:bg-brand-primary-d'
                                }`}
                            >
                                {plan.cta}
                            </button>

                            {/* Features */}
                            <ul className="space-y-3 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <i
                                            className={`fa-regular fa-circle-check mt-1 text-sm ${
                                                isHighlight ? 'text-white' : 'text-brand-primary'
                                            }`}
                                        ></i>
                                        <span
                                            className={`text-sm ${
                                                isHighlight
                                                    ? 'text-white'
                                                    : 'text-brand-gray'
                                            } ${
                                                idx === 0 && (plan.name === 'Premium' || plan.name === 'Enterprise')
                                                    ? 'font-bold'
                                                    : ''
                                            }`}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Pricing;
