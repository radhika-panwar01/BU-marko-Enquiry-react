import React from 'react';
import logo from '../assets/images/logo.jpg';

const Header = ({ onOpenInquiry, setCurrentPage, setScrollTarget }) => {
    return (
        <header className="bg-white fixed w-full top-0 z-50 shadow-sm overflow-hidden">
            <div className="mx-3 px-2 md:px-14 h-20 flex justify-between items-center">
                <div className="flex items-center gap-1 md:gap-2">
                    <img src={logo} alt="Logo" className="w-20 h-20" />
                </div>
                <nav className="hidden md:flex space-x-12">

                    {/* HOME */}
                    <button
                        onClick={() => {
                            setCurrentPage('home');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-brand-secondary font-medium hover:text-brand-primary transition"
                    >
                        Home
                    </button>

                    {/* PRICING */}
                    <button
                        onClick={() => {
                            setCurrentPage('pricing');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-brand-gray font-normal hover:text-brand-primary transition"
                    >
                        Pricing
                    </button>

                    {/* ABOUT */}
                    <button
                        onClick={() => {
                            setCurrentPage('home');
                            setScrollTarget('about');
                        }}
                        className="text-brand-gray font-normal hover:text-brand-primary transition"
                    >
                        About
                    </button>
                    {/* PRODUCT */}
                    <button
                        onClick={() => {
                            setCurrentPage('product');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-brand-gray font-normal hover:text-brand-primary transition"
                    >
                        Product
                    </button>
                    {/* FEATURE */}
                    <button
                        onClick={() => {
                            setCurrentPage('home');
                            setScrollTarget('features');
                        }}
                        className="text-brand-gray font-normal hover:text-brand-primary transition"
                    >
                        Feature
                    </button>



                    {/* TESTIMONIAL */}
                    <button
                        onClick={() => {
                            setCurrentPage('home');
                            setScrollTarget('testimonial');
                        }}
                        className="text-brand-gray font-normal hover:text-brand-primary transition"
                    >
                        Testimonial
                    </button>

                </nav>
                <div className="flex items-center gap-2 md:gap-4">
                    <button onClick={onOpenInquiry}
                        className="bg-brand-primary text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded hover:bg-green-700 transition font-medium text-xs md:text-sm whitespace-nowrap">
                        Enquire now
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
