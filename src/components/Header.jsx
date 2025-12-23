import React from 'react';

const Header = ({ onOpenInquiry }) => {
    return (
        <header className="bg-white fixed w-full top-0 z-50 shadow-sm overflow-hidden">
            <div className="container mx-auto px-2 md:px-14 h-20 flex justify-between items-center">
                <div className="flex items-center gap-1 md:gap-2">
                    <i className="fa-solid fa-leaf text-brand-primary text-xl md:text-2xl"></i>
                    <span className="text-brand-secondary font-bold text-lg md:text-2xl">Nexcent</span>
                </div>
                <nav className="hidden md:flex space-x-12">
                    <a href="#" className="text-brand-secondary font-medium hover:text-brand-primary transition">Home</a>
                    <a href="#" className="text-brand-gray font-normal hover:text-brand-primary transition">Service</a>
                    <a href="#" className="text-brand-gray font-normal hover:text-brand-primary transition">Feature</a>
                    <a href="#" className="text-brand-gray font-normal hover:text-brand-primary transition">Product</a>
                    <a href="#" className="text-brand-gray font-normal hover:text-brand-primary transition">Testimonial</a>
                    <a href="#" className="text-brand-gray font-normal hover:text-brand-primary transition">FAQ</a>
                </nav>
                <div className="flex items-center gap-2 md:gap-4">
                    <a href="#"
                        className="text-brand-primary font-medium hover:text-green-700 transition text-sm md:text-base">Login</a>
                    <button onClick={onOpenInquiry}
                        className="bg-brand-primary text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded hover:bg-green-700 transition font-medium text-xs md:text-sm whitespace-nowrap">
                        Sign up
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
