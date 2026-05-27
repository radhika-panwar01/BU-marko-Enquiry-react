import React, { useState } from 'react';

const VISIBLE_FEATURES = 6;

const PlanCard = ({ plan, index, isAnnual, onOpenInquiry }) => {
    const [expanded, setExpanded] = useState(false);
    const isHighlight = plan.highlight;
    const price = plan.custom ? null : isAnnual ? plan.priceAnnually : plan.priceMonthly;
    const visibleFeatures = expanded ? plan.features : plan.features.slice(0, VISIBLE_FEATURES);
    const hiddenCount = plan.features.length - VISIBLE_FEATURES;

    return (
        <div
            className={`relative rounded-2xl flex flex-col transition-all duration-300 ${
                isHighlight
                    ? 'bg-brand-primary shadow-2xl lg:-translate-y-4 hover:-translate-y-6 p-8 ring-1 ring-brand-primary'
                    : 'bg-white border border-gray-100 shadow-xl hover:-translate-y-2 p-8'
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            {isHighlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFF4E0] text-[#D49F00] text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm uppercase tracking-wider">
                    <i className="fa-solid fa-star"></i> Most Popular
                </div>
            )}

            {/* Plan Name */}
            <div className="flex items-center gap-2 mb-6">
                <div className={`w-3 h-3 rounded-full ${isHighlight ? 'bg-white' : 'bg-brand-primary'}`}></div>
                <h3 className={`text-xl font-bold ${isHighlight ? 'text-white' : 'text-brand-dark'}`}>
                    {plan.name}
                </h3>
            </div>

            {/* Price */}
            <div className="mb-4 min-h-[64px] flex items-end">
                {plan.custom ? (
                    <span className={`text-3xl font-bold ${isHighlight ? 'text-white' : 'text-brand-dark'}`}>
                        On request
                    </span>
                ) : (
                    <>
                        <span className={`text-4xl md:text-5xl font-bold tracking-tight transition-all duration-300 ${isHighlight ? 'text-white' : 'text-brand-dark'}`}>
                            €{price}
                        </span>
                        <div className={`text-[10px] ml-2 mb-1.5 leading-tight font-medium uppercase tracking-wide ${isHighlight ? 'text-white/80' : 'text-brand-gray'}`}>
                            <span>per user</span><br />
                            <span>per month</span>
                        </div>
                    </>
                )}
            </div>

            {/* Tagline */}
            <div className="mb-8">
                <p className={`text-sm leading-relaxed ${isHighlight ? 'text-white/90' : 'text-brand-gray font-light'}`}>
                    {plan.tagline}
                </p>
            </div>

            {/* CTA */}
            <button
                onClick={onOpenInquiry}
                className={`w-full py-3.5 rounded-xl font-bold mb-8 transition-all duration-300 transform active:scale-95 ${
                    isHighlight
                        ? 'bg-white text-brand-primary hover:bg-gray-50 shadow-lg'
                        : 'bg-brand-primary text-white hover:bg-green-700 shadow-md'
                }`}
            >
                {plan.cta}
            </button>

            {/* Features */}
            <ul className="space-y-4">
                {visibleFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <i className={`fa-solid fa-circle-check mt-1 text-sm shrink-0 ${isHighlight ? 'text-white' : 'text-brand-primary'}`}></i>
                        <span className={`text-sm ${isHighlight ? 'text-white' : 'text-brand-dark font-light'}`}>
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>

            {hiddenCount > 0 && (
                <button
                    onClick={() => setExpanded(prev => !prev)}
                    className={`mt-5 flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 ${
                        isHighlight ? 'text-white/80 hover:text-white' : 'text-brand-primary hover:text-green-700'
                    }`}
                >
                    {expanded ? (
                        <>Show less <i className="fa-solid fa-chevron-up text-xs"></i></>
                    ) : (
                        <>+{hiddenCount} more <i className="fa-solid fa-chevron-down text-xs"></i></>
                    )}
                </button>
            )}
        </div>
    );
};

const PricingSection = ({ onOpenInquiry, plans, title = "Flexible Pricing for Every Business", subtitle = "Choose the right plan for your needs and scale as you grow." }) => {
    const [billing, setBilling] = useState('annually');
    const isAnnual = billing === 'annually';

    if (!plans) return null;

    return (
        <section id="pricing" className="py-[72px] bg-white" data-aos="fade-up" data-aos-duration="1000">
            <div className="mx-3 px-4 md:px-14 text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 leading-tight">
                    {title}
                </h2>
                <p className="text-brand-gray text-lg font-light max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-16">
                <div className="relative grid grid-cols-2 items-center bg-brand-light border border-gray-100 rounded-full p-1 shadow-sm w-[280px] sm:w-[320px]">
                    <span
                        className="absolute top-1 bottom-1 left-1 rounded-full bg-brand-primary shadow-sm transition-transform duration-300 ease-out"
                        style={{
                            width: 'calc(50% - 4px)',
                            transform: isAnnual ? 'translateX(100%)' : 'translateX(0)',
                        }}
                    ></span>
                    <button
                        onClick={() => setBilling('monthly')}
                        className={`relative z-10 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 ${!isAnnual ? 'text-white' : 'text-brand-dark'}`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBilling('annually')}
                        className={`relative z-10 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 flex items-center justify-center gap-2 ${isAnnual ? 'text-white' : 'text-brand-dark'}`}
                    >
                        Annually
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-white text-brand-primary' : 'bg-brand-primary/10 text-brand-primary'}`}>
                            -20%
                        </span>
                    </button>
                </div>
            </div>

            <div className="mx-3 px-4 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
                {plans.map((plan, index) => (
                    <PlanCard
                        key={index}
                        plan={plan}
                        index={index}
                        isAnnual={isAnnual}
                        onOpenInquiry={onOpenInquiry}
                    />
                ))}
            </div>
        </section>
    );
};

export default PricingSection;
