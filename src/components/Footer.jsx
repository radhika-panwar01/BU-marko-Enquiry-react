import React from 'react';
import Logo from '../assets/images/logo-footer.png';

const Footer = () => {
    return (
        <footer className="bg-brand-secondary text-white py-16">
            <div className="container mx-auto px-4 md:px-14 grid md:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <img src={Logo} alt="Logo" className="w-20 h-20" />
                    </div>
                    <p className="text-gray-300 text-sm">Copyright © 2025 Nexcent ltd.<br />All rights reserved</p>
                    <div className="flex gap-4">
                        <a href="#"
                            className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-brand-primary transition">
                            <i className="fa-brands fa-instagram text-sm"></i>
                        </a>
                        <a href="#"
                            className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-brand-primary transition">
                            <i className="fa-brands fa-dribbble text-sm"></i>
                        </a>
                        <a href="#"
                            className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-brand-primary transition">
                            <i className="fa-brands fa-twitter text-sm"></i>
                        </a>
                        <a href="#"
                            className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-brand-primary transition">
                            <i className="fa-brands fa-youtube text-sm"></i>
                        </a>
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="text-xl font-semibold">Company</h4>
                    <div className="flex flex-col space-y-3 text-sm text-gray-300">
                        <a href="#" className="hover:text-white transition">About us</a>
                        <a href="#" className="hover:text-white transition">Blog</a>
                        <a href="#" className="hover:text-white transition">Contact us</a>
                        <a href="#" className="hover:text-white transition">Pricing</a>
                        <a href="#" className="hover:text-white transition">Testimonials</a>
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="text-xl font-semibold">Support</h4>
                    <div className="flex flex-col space-y-3 text-sm text-gray-300">
                        <a href="#" className="hover:text-white transition">Help center</a>
                        <a href="#" className="hover:text-white transition">Terms of service</a>
                        <a href="#" className="hover:text-white transition">Legal</a>
                        <a href="#" className="hover:text-white transition">Privacy policy</a>
                        <a href="#" className="hover:text-white transition">Status</a>
                    </div>
                </div>

                <div className="space-y-6">
                    <h4 className="text-xl font-semibold">Stay up to date</h4>
                    <div className="relative">
                        <input type="email" placeholder="Your email address"
                            className="bg-gray-700 text-white w-full py-2.5 px-4 rounded focus:outline-none focus:ring-1 focus:ring-brand-primary placeholder-gray-400 text-sm" />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white">
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
