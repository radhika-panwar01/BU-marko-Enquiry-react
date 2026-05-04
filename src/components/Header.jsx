import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.jpg';
import { productMenuPages } from '../pages';

const Header = ({ onOpenInquiry, setCurrentPage, setScrollTarget }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productOpen, setProductOpen] = useState(false);
    const [mobileProductOpen, setMobileProductOpen] = useState(false);
    const productRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    // Close desktop product dropdown on outside click
    useEffect(() => {
        const onClick = (e) => {
            if (productRef.current && !productRef.current.contains(e.target)) {
                setProductOpen(false);
            }
        };
        if (productOpen) document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, [productOpen]);

    const closeAll = () => {
        setMobileOpen(false);
        setProductOpen(false);
        setMobileProductOpen(false);
    };

    const goPage = (key) => {
        setCurrentPage(key);
        closeAll();
    };

    const goSection = (id) => {
        setCurrentPage('home');
        setScrollTarget(id);
        closeAll();
    };

    const simpleNav = [
        { label: 'Home', onClick: () => goPage('home'), primary: true },
        { label: 'Pricing', onClick: () => goPage('pricing') },
        { label: 'About', onClick: () => goSection('about') },
        { label: 'Feature', onClick: () => goSection('features') },
        { label: 'Testimonial', onClick: () => goSection('testimonial') },
    ];

    return (
        <header className="bg-white fixed w-full top-0 z-50 shadow-sm">
            <div className="mx-3 px-2 md:px-14 h-16 sm:h-20 flex justify-between items-center">
                {/* Logo */}
                <button
                    onClick={() => goPage('home')}
                    className="flex items-center gap-1 md:gap-2 shrink-0"
                    aria-label="Go home"
                >
                    <img src={logo} alt="Logo" className="w-14 h-14 sm:w-20 sm:h-20" />
                </button>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-7 xl:gap-10">
                    <button
                        onClick={() => goPage('home')}
                        className="text-brand-secondary font-medium hover:text-brand-primary transition text-sm xl:text-base"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => goPage('pricing')}
                        className="text-brand-gray font-normal hover:text-brand-primary transition text-sm xl:text-base"
                    >
                        Pricing
                    </button>
                    <button
                        onClick={() => goSection('about')}
                        className="text-brand-gray font-normal hover:text-brand-primary transition text-sm xl:text-base"
                    >
                        About
                    </button>

                    {/* Product dropdown */}
                    <div ref={productRef} className="relative">
                        <button
                            onClick={() => setProductOpen((v) => !v)}
                            className="text-brand-gray font-normal hover:text-brand-primary transition text-sm xl:text-base flex items-center gap-1.5"
                            aria-haspopup="menu"
                            aria-expanded={productOpen}
                        >
                            Product
                            <i className={`fa-solid fa-chevron-down text-[10px] transition-transform ${productOpen ? 'rotate-180' : ''}`}></i>
                        </button>

                        <div
                            role="menu"
                            className={`absolute right-0 mt-3 w-72 origin-top-right rounded-2xl border border-gray-100 bg-white shadow-xl p-2 transition-all duration-200 ${productOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                        >
                            <button
                                onClick={() => goPage('product')}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left hover:bg-brand-light transition group"
                            >
                                <span className="w-9 h-9 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-white transition">
                                    <i className="fa-solid fa-grip text-sm"></i>
                                </span>
                                <span>
                                    <span className="block text-sm font-semibold text-brand-dark">All Products</span>
                                    <span className="block text-[11px] text-brand-gray">Explore the full suite</span>
                                </span>
                            </button>
                            <div className="my-1 border-t border-gray-100"></div>
                            <div className="max-h-[60vh] overflow-y-auto">
                                {productMenuPages.map((p) => (
                                    <button
                                        key={p.key}
                                        onClick={() => goPage(p.key)}
                                        className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left hover:bg-brand-light transition"
                                    >
                                        <span className="w-8 h-8 rounded-lg bg-gray-50 text-brand-primary flex items-center justify-center text-xs">
                                            <i className={p.icon || 'fa-solid fa-circle'}></i>
                                        </span>
                                        <span className="text-sm text-brand-dark">{p.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => goSection('features')}
                        className="text-brand-gray font-normal hover:text-brand-primary transition text-sm xl:text-base"
                    >
                        Feature
                    </button>
                    <button
                        onClick={() => goSection('testimonial')}
                        className="text-brand-gray font-normal hover:text-brand-primary transition text-sm xl:text-base"
                    >
                        Testimonial
                    </button>
                </nav>

                {/* Right cluster */}
                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        onClick={onOpenInquiry}
                        className="bg-brand-primary text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded hover:bg-green-700 transition font-medium text-xs md:text-sm whitespace-nowrap"
                    >
                        Enquire now
                    </button>

                    <button
                        onClick={() => setMobileOpen((v) => !v)}
                        className="lg:hidden w-9 h-9 rounded-md flex items-center justify-center text-brand-secondary hover:bg-gray-100 transition"
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                    >
                        <span className="relative w-5 h-4 flex flex-col justify-between">
                            <span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                            <span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block h-0.5 w-full bg-current rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Backdrop */}
            <div
                onClick={() => setMobileOpen(false)}
                className={`lg:hidden fixed inset-0 top-16 sm:top-20 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            ></div>

            {/* Mobile Menu Panel */}
            <div
                className={`lg:hidden fixed left-0 right-0 top-16 sm:top-20 bg-white border-t border-gray-100 shadow-xl max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto transition-all duration-300 origin-top ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
                <nav className="px-5 py-2 flex flex-col divide-y divide-gray-100">
                    {simpleNav.slice(0, 3).map((item) => (
                        <button
                            key={item.label}
                            onClick={item.onClick}
                            className={`${item.primary ? 'text-brand-secondary font-semibold' : 'text-brand-gray font-medium'} text-left py-3.5 hover:text-brand-primary transition flex items-center justify-between`}
                        >
                            <span>{item.label}</span>
                            <i className="fa-solid fa-chevron-right text-xs text-gray-300"></i>
                        </button>
                    ))}

                    {/* Product accordion (mobile) */}
                    <div className="py-2">
                        <button
                            onClick={() => setMobileProductOpen((v) => !v)}
                            className="w-full text-brand-gray font-medium py-2 hover:text-brand-primary transition flex items-center justify-between"
                            aria-expanded={mobileProductOpen}
                        >
                            <span>Product</span>
                            <i className={`fa-solid fa-chevron-down text-xs text-gray-400 transition-transform ${mobileProductOpen ? 'rotate-180' : ''}`}></i>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${mobileProductOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <button
                                onClick={() => goPage('product')}
                                className="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg text-left hover:bg-brand-light transition"
                            >
                                <span className="w-8 h-8 rounded-lg bg-brand-light text-brand-primary flex items-center justify-center">
                                    <i className="fa-solid fa-grip text-xs"></i>
                                </span>
                                <span className="text-sm font-semibold text-brand-dark">All Products</span>
                            </button>
                            {productMenuPages.map((p) => (
                                <button
                                    key={p.key}
                                    onClick={() => goPage(p.key)}
                                    className="w-full flex items-center gap-3 px-2 py-2 rounded-lg text-left hover:bg-brand-light transition"
                                >
                                    <span className="w-7 h-7 rounded-lg bg-gray-50 text-brand-primary flex items-center justify-center text-[11px]">
                                        <i className={p.icon || 'fa-solid fa-circle'}></i>
                                    </span>
                                    <span className="text-sm text-brand-dark">{p.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {simpleNav.slice(3).map((item) => (
                        <button
                            key={item.label}
                            onClick={item.onClick}
                            className="text-brand-gray font-medium text-left py-3.5 hover:text-brand-primary transition flex items-center justify-between"
                        >
                            <span>{item.label}</span>
                            <i className="fa-solid fa-chevron-right text-xs text-gray-300"></i>
                        </button>
                    ))}

                    <button
                        onClick={() => { onOpenInquiry(); setMobileOpen(false); }}
                        className="mt-3 mb-3 bg-brand-primary text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
                    >
                        Enquire now <i className="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
