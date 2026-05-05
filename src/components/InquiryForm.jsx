import React, { useEffect, useState } from 'react';

const InquiryForm = ({ isOpen, onClose, currentPage }) => {
    const products = [
        "Hotel & Booking",
        "All-in-One Travel Management",
        "Accounting (Travel)",
        "Fleet & Operations",
        "Tour Guide App",
        "Driver App",
        "Human Resource App",
        "Contract Management"
    ];

    const pageToProductMap = {
        'product-sales-booking': "Hotel & Booking",
        'product-travel-management': "All-in-One Travel Management",
        'product-financial-management': "Accounting (Travel)",
        'product-operations-logistics': "Fleet & Operations",
        'product-tour-guide-app': "Tour Guide App",
        'product-driver-app': "Driver App",
        'product-hr-app': "Human Resource App",
        'product-contract-management': "Contract Management"
    };

    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        user_name: '',
        user_phone: '',
        user_email: '',
        selectedProducts: [],
        project_details: '',
        captcha_answer: ''
    });
    const [errors, setErrors] = useState({});
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });

    const generateCaptcha = () => {
        setCaptcha({
            num1: Math.floor(Math.random() * 10) + 1,
            num2: Math.floor(Math.random() * 10) + 1
        });
        setFormData(prev => ({ ...prev, captcha_answer: '' }));
    };

    useEffect(() => {
        if (isOpen) {
            generateCaptcha();
            
            let initialSelected = [];
            if (currentPage && pageToProductMap[currentPage]) {
                initialSelected = [pageToProductMap[currentPage]];
            }

            setFormData({ 
                user_name: '', 
                user_phone: '', 
                user_email: '', 
                selectedProducts: initialSelected,
                project_details: '', 
                captcha_answer: '' 
            });
            setErrors({});
            setFormStatus({ type: '', message: '' });

            document.body.style.overflow = 'hidden';
            setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
            const timer = setTimeout(() => {
                document.body.style.overflow = '';
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const validate = () => {
        const newErrors = {};
        if (!formData.user_name.trim()) newErrors.user_name = "Full Name is required";

        if (!formData.user_phone.trim()) {
            newErrors.user_phone = "Phone Number is required";
        } else if (!/^\d{10}$/.test(formData.user_phone.replace(/\D/g, ''))) {
            newErrors.user_phone = "Please enter exactly a 10 digit phone number";
        }

        if (!formData.user_email.trim()) {
            newErrors.user_email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
            newErrors.user_email = "Please enter a valid email address";
        }

        if (formData.selectedProducts.length === 0) {
            newErrors.selectedProducts = "Please select at least one product";
        }
        
        if (!formData.project_details.trim()) {
            newErrors.project_details = "Project details are required";
        } else if (formData.project_details.trim().length < 10) {
            newErrors.project_details = "Please provide a bit more detail (min 10 characters)";
        }

        if (parseInt(formData.captcha_answer) !== captcha.num1 + captcha.num2) {
            newErrors.captcha_answer = "Incorrect answer, please try again";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Block non-numeric input for phone early on for good UX
        if (name === 'user_phone' && value && !/^\d*$/.test(value)) {
            return;
        }
        // Limit phone to 10 digits
        if (name === 'user_phone' && value.length > 10) {
            return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleProductToggle = (product) => {
        setFormData(prev => {
            const current = prev.selectedProducts;
            const updated = current.includes(product)
                ? current.filter(p => p !== product)
                : [...current, product];
            return { ...prev, selectedProducts: updated };
        });
        if (errors.selectedProducts) setErrors(prev => ({ ...prev, selectedProducts: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setFormStatus({ type: 'success', message: 'Inquiry sent successfully! We will contact you soon.' });
            setTimeout(() => {
                onClose();
            }, 2500);
        } else {
            setFormStatus({ type: 'error', message: 'Please fix the errors below.' });
        }
    };

    if (!isOpen && !isVisible) return null;

    return (
        <div id="inquiryModal"
            className={`fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>

            <div className="flex min-h-full items-center justify-center p-4">
                <div className={`relative bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto z-10 flex flex-col max-h-[90vh] transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
                    id="modalContent">

                    {/* Header - Fixed */}
                    <div className="relative shrink-0 px-4 pt-6 pb-2 border-b border-gray-100">
                        <button onClick={onClose}
                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition">
                            <i className="fa-solid fa-xmark text-2xl"></i>
                        </button>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-brand-dark">Get in Touch</h3>
                            <p className="text-brand-gray text-sm mt-1">Fill out the form below and we'll get back to you shortly.</p>
                        </div>
                    </div>

                    {/* Body - Scrollable */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-8">
                        <form id="inquiryForm" className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-1">Full Name</label>
                                <input type="text" name="user_name" id="user_name"
                                    value={formData.user_name} onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded focus:ring-2 focus:border-transparent outline-none transition ${errors.user_name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-primary'}`}
                                    placeholder="John Doe" />
                                {errors.user_name && <p className="text-red-500 text-xs mt-1">{errors.user_name}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-1">Phone Number</label>
                                <input type="text" name="user_phone" id="user_phone"
                                    value={formData.user_phone} onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded focus:ring-2 focus:border-transparent outline-none transition ${errors.user_phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-primary'}`}
                                    placeholder="1234567890" />
                                {errors.user_phone && <p className="text-red-500 text-xs mt-1">{errors.user_phone}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-1">Work Email</label>
                                <input type="email" name="user_email" id="user_email"
                                    value={formData.user_email} onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded focus:ring-2 focus:border-transparent outline-none transition ${errors.user_email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-primary'}`}
                                    placeholder="john@company.com" />
                                {errors.user_email && <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>}
                            </div>

                            <div className="pt-2">
                                <label className="block text-sm font-medium text-brand-dark mb-2">
                                    Select Product(s)
                                    <span className="block text-[11px] text-brand-gray font-light mt-0.5">Choose one or more products you are interested in.</span>
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {products.map((product) => {
                                        const isSelected = formData.selectedProducts.includes(product);
                                        return (
                                            <div
                                                key={product}
                                                onClick={() => handleProductToggle(product)}
                                                className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 select-none ${
                                                    isSelected 
                                                        ? 'bg-green-50 border-brand-primary ring-1 ring-brand-primary/20' 
                                                        : 'bg-gray-50 border-gray-100 hover:border-brand-primary/30 hover:bg-white shadow-sm'
                                                }`}
                                            >
                                                <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors ${
                                                    isSelected ? 'bg-brand-primary' : 'border-2 border-gray-300 bg-white'
                                                }`}>
                                                    {isSelected && <i className="fa-solid fa-check text-white text-[10px]"></i>}
                                                </div>
                                                <span className={`text-sm font-medium ${isSelected ? 'text-brand-dark' : 'text-gray-600'}`}>
                                                    {product}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                                {errors.selectedProducts && <p className="text-red-500 text-xs mt-1">{errors.selectedProducts}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-1">Project Details</label>
                                <textarea name="project_details" id="project_details" rows="3"
                                    value={formData.project_details} onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded focus:ring-2 focus:border-transparent outline-none transition ${errors.project_details ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-primary'}`}
                                    placeholder="Tell us about your project goals..."></textarea>
                                {errors.project_details && <p className="text-red-500 text-xs mt-1">{errors.project_details}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-1">
                                    Security Question: What is {captcha.num1} + {captcha.num2}?
                                </label>
                                <div className="flex gap-2">
                                    <input type="number" name="captcha_answer" id="captcha_answer"
                                        value={formData.captcha_answer} onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded focus:ring-2 focus:border-transparent outline-none transition ${errors.captcha_answer ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-brand-primary'}`}
                                        placeholder="Answer" />
                                    <button type="button" onClick={generateCaptcha} className="px-4 py-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 transition text-brand-gray" title="Reload Security Question">
                                        <i className="fa-solid fa-rotate-right"></i>
                                    </button>
                                </div>
                                {errors.captcha_answer && <p className="text-red-500 text-xs mt-1">{errors.captcha_answer}</p>}
                            </div>

                        </form>
                    </div>

                    {/* Footer - Fixed */}
                    <div className="shrink-0 px-6 pt-2 pb-6 border-t border-gray-100 bg-white rounded-b-lg">
                        {formStatus.message && (
                            <div className={`text-sm font-medium p-3 rounded mb-4 ${formStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {formStatus.message}
                            </div>
                        )}
                        <button type="submit" form="inquiryForm" id="submitBtn"
                            className="w-full bg-brand-primary text-white py-3 rounded font-semibold hover:bg-green-700 transition shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
                            Send Enquiry
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InquiryForm;
