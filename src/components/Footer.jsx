import React, { useState } from 'react';
import Logo from '../assets/images/logo-footer.png';

const Footer = ({ setCurrentPage, setScrollTarget, onOpenInquiry }) => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) return;
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
    };

    const goPage = (page) => {
        if (setCurrentPage) setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const goSection = (id) => {
        if (setCurrentPage) setCurrentPage('home');
        if (setScrollTarget) setScrollTarget(id);
    };

    const productLinks = [
        { l: 'Hotel Management', onClick: () => goPage('product-sales-booking') },
        { l: 'Travel Management', onClick: () => goPage('product-travel-management') },
        { l: 'Fleet Management', onClick: () => goPage('product-operations-logistics') },
        { l: 'Tour Guide App', onClick: () => goPage('product-tour-guide-app') },
        { l: 'Driver App', onClick: () => goPage('product-driver-app') },
        { l: 'HR App', onClick: () => goPage('product-hr-app') },
    ];

    const companyLinks = [
        { l: 'About us', onClick: () => goSection('about') },
        { l: 'Product', onClick: () => goPage('product') },
        { l: 'Testimonials', onClick: () => goSection('testimonial') },
        { l: 'Contact us', onClick: () => onOpenInquiry && onOpenInquiry() },
    ];

    const supportLinks = [
        { l: 'Help center', onClick: () => onOpenInquiry && onOpenInquiry() },
        { l: 'Features', onClick: () => goSection('features') },
        { l: 'Privacy policy', onClick: () => goPage('home') },
        { l: 'Terms of service', onClick: () => goPage('home') },
        { l: 'Status', onClick: () => goPage('home') },
    ];

    const renderLink = (item, key) => (
        <li key={key}>
            <button
                onClick={item.onClick}
                className="text-left hover:text-white hover:translate-x-0.5 inline-block transition cursor-pointer"
            >
                {item.l}
            </button>
        </li>
    );

    return (
        <footer className="bg-brand-secondary text-white">
            <div className="mx-3 px-4 md:px-14 py-12 sm:py-16">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 sm:gap-x-8">
                    {/* Brand block */}
                    <div className="col-span-2 sm:col-span-3 lg:col-span-1 space-y-5">
                        <button onClick={() => goPage('home')} aria-label="Go home">
                            <img src={Logo} alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20" />
                        </button>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            All-in-one platform for travel and service businesses — bookings, operations, finance, and more.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { i: 'fa-instagram', l: 'Instagram' },
                                { i: 'fa-dribbble', l: 'Dribbble' },
                                { i: 'fa-twitter', l: 'Twitter' },
                                { i: 'fa-youtube', l: 'YouTube' },
                            ].map((s, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    aria-label={s.l}
                                    className="w-9 h-9 rounded-full bg-gray-700/70 flex items-center justify-center hover:bg-brand-primary hover:scale-110 transition-all duration-300"
                                >
                                    <i className={`fa-brands ${s.i} text-sm`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-sm sm:text-base font-semibold text-white">Products</h4>
                        <ul className="flex flex-col space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-300">
                            {productLinks.map((item, i) => renderLink(item, i))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-3 sm:space-y-4">
                        <h4 className="text-sm sm:text-base font-semibold text-white">Company</h4>
                        <ul className="flex flex-col space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-300">
                            {companyLinks.map((item, i) => renderLink(item, i))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-span-2 sm:col-span-1 space-y-3 sm:space-y-4">
                        <h4 className="text-sm sm:text-base font-semibold text-white">Support</h4>
                        <ul className="grid grid-cols-2 sm:flex sm:flex-col gap-x-4 gap-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-300">
                            {supportLinks.map((item, i) => renderLink(item, i))}
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div className="col-span-2 sm:col-span-3 lg:col-span-1 space-y-3 sm:space-y-4">
                        <h4 className="text-sm sm:text-base font-semibold text-white">Stay up to date</h4>
                        <p className="text-gray-300 text-xs sm:text-sm">Product updates and travel-tech insights, monthly.</p>
                        <form onSubmit={handleSubscribe} className="relative max-w-sm">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email address"
                                className="bg-gray-700/70 text-white w-full py-2.5 pl-4 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary placeholder-gray-400 text-sm transition"
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe"
                                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-md bg-brand-primary text-white hover:bg-green-700 transition flex items-center justify-center"
                            >
                                <i className="fa-solid fa-paper-plane text-xs"></i>
                            </button>
                        </form>
                        {subscribed && (
                            <p className="text-xs text-brand-primary font-medium flex items-center gap-1">
                                <i className="fa-solid fa-circle-check"></i> Thanks — you're on the list!
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="mx-3 px-4 md:px-14 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400">
                    <p>© {new Date().getFullYear()} BU Marka. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
                        <button onClick={() => goPage('home')} className="hover:text-white transition">Privacy</button>
                        <button onClick={() => goPage('home')} className="hover:text-white transition">Terms</button>
                        <button onClick={() => goPage('home')} className="hover:text-white transition">Cookies</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
