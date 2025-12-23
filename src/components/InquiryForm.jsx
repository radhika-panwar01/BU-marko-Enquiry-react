import React, { useEffect, useState } from 'react';

const InquiryForm = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Small delay to allow the flex container to render before opacity transition
            setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
            const timer = setTimeout(() => {
                document.body.style.overflow = '';
            }, 300); // Match transition duration
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isOpen && !isVisible) return null;

    return (
        <div id="inquiryModal"
            className={`fixed inset-0 z-[100] items-center justify-center overflow-y-auto overflow-x-hidden p-4 ${isOpen ? 'flex' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>

            <div className={`relative bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto z-10 p-6 md:p-8 transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                id="modalContent">
                <button onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition">
                    <i className="fa-solid fa-xmark text-2xl"></i>
                </button>

                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-brand-dark">Get in Touch</h3>
                    <p className="text-brand-gray text-sm mt-1">Fill out the form below and we'll get back to you shortly.</p>
                </div>

                <form id="inquiryForm" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Full Name</label>
                        <input type="text" name="user_name" required id="user_name"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition"
                            placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Phone Number</label>
                        <input type="number" name="user_phone" required id="user_phone"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition"
                            placeholder="1234567890" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Work Email</label>
                        <input type="email" name="user_email" required id="user_email"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition"
                            placeholder="john@company.com" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-brand-dark mb-1">Project Details</label>
                        <textarea name="project_details" id="project_details" rows="3"
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition"
                            placeholder="Tell us about your project goals..."></textarea>
                    </div>

                    <div id="formStatus" className="text-sm font-medium hidden"></div>

                    <button type="submit" id="submitBtn"
                        className="w-full bg-brand-primary text-white py-3 rounded font-semibold hover:bg-green-700 transition shadow-md hover:shadow-lg mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                        Send Inquiry
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InquiryForm;
