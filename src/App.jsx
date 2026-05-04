import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';
import { PAGES, isValidPage } from './pages';
// Images
import card1 from './assets/images/card1.png';
import card2 from './assets/images/card2.png';
import card3 from './assets/images/card3.png';
import rafiki from './assets/images/rafiki.png';
import pana from './assets/images/pana.png';
import section4 from './assets/images/section4.png';
import marketing1 from './assets/images/marketing1.png';
import marketing2 from './assets/images/marketing2.png';
import marketing3 from './assets/images/marketing3.png';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPage, setCurrentPageRaw] = useState(() => {
        const saved = sessionStorage.getItem('currentPage');
        return isValidPage(saved) ? saved : 'home';
    });
    const [scrollTarget, setScrollTarget] = useState(null);

    // Guarded setter — silently falls back to 'home' on unknown keys + smooth scrolls to top.
    const setCurrentPage = (key) => {
        const next = isValidPage(key) ? key : 'home';
        setCurrentPageRaw(next);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleBeforeUnload = () => {
            sessionStorage.setItem('scrollPos', window.scrollY);
        };
        window.addEventListener('beforeunload', handleBeforeUnload);

        const savedScrollPos = sessionStorage.getItem('scrollPos');
        if (savedScrollPos) {
            setTimeout(() => {
                window.scrollTo(0, parseInt(savedScrollPos));
                sessionStorage.removeItem('scrollPos');
            }, 150);
        }

        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    useEffect(() => {
        sessionStorage.setItem('currentPage', currentPage);
    }, [currentPage]);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.AOS) {
            window.AOS.init({ once: true });
            setTimeout(() => {
                window.AOS.refresh();
            }, 100);
        }
    }, [currentPage]);


    const openInquiryModal = () => {
        setIsModalOpen(true);
    };

    const closeInquiryModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        if (scrollTarget) {
            setTimeout(() => {
                const element = document.getElementById(scrollTarget);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                setScrollTarget(null);
            }, 100);
        }
    }, [currentPage, scrollTarget]);
    return (
        <>
            <Header onOpenInquiry={openInquiryModal} setCurrentPage={setCurrentPage} setScrollTarget={setScrollTarget} />
            {currentPage === 'home' && (
                <main>
                    <Hero onOpenInquiry={openInquiryModal} />
                    <section className="py-12 bg-white" data-aos="fade-up" data-aos-duration="1000">
                        <div className="mx-3 px-4 md:px-14 text-center space-y-4">
                            <h2 className="text-3xl font-semibold text-brand-dark">Our Clients</h2>
                            <p className="text-brand-gray">We have been working with some Fortune 500+ clients</p>
                            <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 mt-12 py-8">
                                <i className="fa-brands fa-pied-piper text-6xl text-gray-400 hover:text-brand-primary transition cursor-pointer"
                                    data-aos="zoom-in" data-aos-delay="100"></i>
                                <i className="fa-brands fa-stumbleupon text-6xl text-gray-400 hover:text-brand-primary transition cursor-pointer"
                                    data-aos="zoom-in" data-aos-delay="200"></i>
                                <i className="fa-brands fa-aviato text-6xl text-gray-400 hover:text-brand-primary transition cursor-pointer"
                                    data-aos="zoom-in" data-aos-delay="300"></i>
                                <i className="fa-brands fa-hooli text-6xl text-gray-400 hover:text-brand-primary transition cursor-pointer"
                                    data-aos="zoom-in" data-aos-delay="400"></i>
                                <i className="fa-brands fa-lyft text-6xl text-gray-400 hover:text-brand-primary transition cursor-pointer"
                                    data-aos="zoom-in" data-aos-delay="500"></i>
                                <i className="fa-brands fa-stripe text-6xl text-gray-400 hover:text-brand-primary transition cursor-pointer"
                                    data-aos="zoom-in" data-aos-delay="600"></i>
                                <i className="fa-brands fa-aws text-6xl text-gray-400 hover:text-brand-primary transition cursor-pointer"
                                    data-aos="zoom-in" data-aos-delay="700"></i>
                            </div>
                        </div>
                    </section>

                    {/* Community Section */}
                    <section id="features" className="py-14 bg-white" data-aos="fade-up" data-aos-duration="1000">
                        <div className="mx-3 px-4 md:px-14 text-center max-w-2xl mx-auto space-y-4 mb-16">
                            <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark leading-snug">Manage your entire community in
                                a single system</h2>
                            <p className="text-brand-gray">Who is Bu-marka suitable for?</p>
                        </div>
                        <div className="mx-3 px-4 md:px-14 grid md:grid-cols-3 gap-8 text-center">
                            <div className="bg-white px-8 py-6 rounded-lg shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full max-w-[299px] mx-auto flex flex-col items-center"
                                data-aos="fade-up" data-aos-delay="100">
                                <div className="mb-4">
                                    <img src={card1} alt="Membership Organisations" className="w-16 h-auto" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-2 text-center leading-tight">
                                    Membership<br />Organisations</h3>
                                <p className="text-brand-gray text-sm leading-relaxed text-center">Digital solutions that simplify member management, renewals, and long-term engagement.</p>
                            </div>
                            <div className="bg-white px-8 py-6 rounded-lg shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full max-w-[299px] mx-auto flex flex-col items-center"
                                data-aos="fade-up" data-aos-delay="300">
                                <div className="mb-4">
                                    <img src={card2} alt="National Associations" className="w-16 h-auto" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-2 text-center leading-tight">National<br />Associations
                                </h3>
                                <p className="text-brand-gray text-sm leading-relaxed text-center">Scalable marketing and digital platforms built to support nationwide member networks.

                                </p>
                            </div>

                            <div className="bg-white px-8 py-6 rounded-lg shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full max-w-[299px] mx-auto flex flex-col items-center"
                                data-aos="fade-up" data-aos-delay="500">
                                <div className="mb-4">
                                    <img src={card3} alt="Clubs And Groups" className="w-16 h-auto" />
                                </div>
                                <h3 className="text-2xl font-bold text-brand-dark mb-2 text-center leading-tight">Clubs And<br />Groups</h3>
                                <p className="text-brand-gray text-sm leading-relaxed text-center">Simple digital tools that help clubs connect, grow, and engage their community.

                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Feature Section 1 */}
                    <section id="about" className="py-16 bg-white" data-aos="zoom-in" data-aos-duration="1000">
                        <div className="mx-3 px-4 md:px-14 flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2">
                                <img src={rafiki} alt="Feature 1" className="w-full max-w-md mx-auto" />
                            </div>
                            <div className="md:w-1/2 space-y-6">
                                <h2 className="text-4xl font-semibold text-brand-dark leading-tight">About Us</h2>
                                <p className="text-brand-gray text-sm leading-relaxed">
                                    At BU Marka, we help brands grow with clarity, creativity, and measurable impact. We are a results-driven marketing agency focused on building strong digital identities and turning ideas into scalable growth strategies. From brand positioning and performance marketing to website design and content strategy, our team blends creativity with data to deliver solutions that actually move the needle. We work closely with startups, growing businesses, and established brands to understand their goals and craft marketing that connects with the right audience at the right time.
                                </p>
                                <a href="#"
                                    className="inline-block bg-brand-primary text-white px-8 py-3.5 rounded hover:bg-green-700 transition font-medium">Learn
                                    More</a>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="py-16 bg-brand-light" data-aos="fade-up" data-aos-duration="1000">
                        <div className="mx-3 px-4 md:px-14 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="md:w-1/2 space-y-4">
                                <h2 className="text-4xl font-semibold text-brand-dark leading-tight">Helping a local
                                    <br /> <span
                                        className="text-brand-primary">business reinvent itself</span></h2>
                                <p className="text-brand-dark">We reached here with our hard work and dedication</p>
                            </div>
                            <div className="md:w-1/2 w-full grid grid-cols-2 gap-y-10 gap-x-8">
                                <div className="flex items-center gap-4">
                                    <i className="fa-solid fa-users text-brand-primary text-3xl"></i>
                                    <div>
                                        <h4 className="text-2xl font-bold text-brand-dark">2,245,341</h4>
                                        <span className="text-brand-gray text-sm">Members</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <i className="fa-solid fa-handshake text-brand-primary text-3xl"></i>
                                    <div>
                                        <h4 className="text-2xl font-bold text-brand-dark">46,328</h4>
                                        <span className="text-brand-gray text-sm">Clubs</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <i className="fa-solid fa-calendar-check text-brand-primary text-3xl"></i>
                                    <div>
                                        <h4 className="text-2xl font-bold text-brand-dark">828,867</h4>
                                        <span className="text-brand-gray text-sm">Event Bookings</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <i className="fa-regular fa-credit-card text-brand-primary text-3xl"></i>
                                    <div>
                                        <h4 className="text-2xl font-bold text-brand-dark">1,926,436</h4>
                                        <span className="text-brand-gray text-sm">Payments</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Feature Section 2 */}
                    <section id="product" className="py-16 bg-white" data-aos="fade-up" data-aos-duration="1000">
                        <div className="mx-3 px-4 md:px-14 flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2 order-2 md:order-1">
                                <img src={pana} alt="Feature 2" className="w-full max-w-md mx-auto" />
                            </div>
                            <div className="md:w-1/2 space-y-6 order-1 md:order-2">
                                <h2 className="text-4xl font-semibold text-brand-dark leading-tight">Our Marketing Products
                                </h2>
                                <p className="text-brand-gray text-sm leading-relaxed">
                                    BU Marka delivers end-to-end digital marketing products designed to help brands launch, grow, and scale with confidence. Each product is built with a clear strategy, creative execution, and performance mindset to ensure measurable results. From brand identity and high-converting websites to performance marketing and growth optimization, our solutions are crafted to solve real business challenges. We focus on creating marketing systems that attract the right audience, generate quality leads, and drive long-term business growth — all tailored to your brand’s goals.


                                </p>
                                <a href="#"
                                    className="inline-block bg-brand-primary text-white px-8 py-3.5 rounded hover:bg-green-700 transition font-medium">Learn
                                    More</a>
                            </div>
                        </div>
                    </section>

                    {/* Tesla Section */}
                    <section id="testimonial" className="py-12 bg-brand-light" data-aos="fade-up" data-aos-duration="1000">
                        <div className="mx-3 px-4 md:px-14 flex flex-col md:flex-row gap-12 items-stretch">
                            <div className="md:w-1/3 w-full">
                                <img src={section4} alt="Testimonial Image"
                                    className="w-full h-full object-cover rounded-lg shadow-md aspect-square" />
                            </div>
                            <div className="md:w-2/3 space-y-6 flex flex-col justify-center">
                                <p className="text-brand-gray font-medium leading-relaxed">
                                    BU Marka delivered exactly what we needed — clear strategy, strong design, and measurable growth. Their team understood our market quickly, communicated transparently, and executed every phase with precision. The results felt structured, scalable, and aligned with our long-term goals.


                                </p>
                                <div>
                                    <h4 className="text-brand-primary font-bold text-xl mb-1">Daniel Cooper
                                    </h4>
                                    <p className="text-brand-gray text-sm">Marketing Director, UK-based Company

                                    </p>
                                </div>
                                <div className="flex flex-wrap items-center gap-8 pt-4">
                                    <i className="fa-brands fa-pied-piper text-3xl text-gray-400 hover:text-brand-primary transition"></i>
                                    <i className="fa-brands fa-stumbleupon text-3xl text-gray-400 hover:text-brand-primary transition"></i>
                                    <i className="fa-brands fa-aviato text-3xl text-gray-400 hover:text-brand-primary transition"></i>
                                    <i className="fa-brands fa-hooli text-3xl text-gray-400 hover:text-brand-primary transition"></i>
                                    <i className="fa-brands fa-lyft text-3xl text-gray-400 hover:text-brand-primary transition"></i>
                                    <i className="fa-brands fa-stripe text-3xl text-gray-400 hover:text-brand-primary transition"></i>
                                    <a href="#"
                                        className="text-brand-primary font-bold flex items-center gap-2 hover:text-green-700 transition">
                                        Meet all customers <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Marketing/Blog Section */}
                    <section className="py-16 bg-white" data-aos="fade-up" data-aos-duration="1000">
                        <div className="mx-3 px-4 md:px-14 text-center space-y-4 mb-12" data-aos="fade-up"
                            data-aos-duration="1000">
                            <h2 className="text-3xl font-semibold text-brand-dark">Caring is the new marketing</h2>
                            <p className="text-brand-gray max-w-2xl mx-auto">The Bu-marka blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.

                            </p>
                        </div>
                        <div className="px-4 md:px-14 grid md:grid-cols-3 gap-8">
                            <div className="relative mb-20 group" data-aos="fade-up" data-aos-delay="100">
                                <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
                                    <img src={marketing1} alt="Blog 1"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div
                                    className="absolute left-1/2 -bottom-16 -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-10/12 text-center space-y-4">
                                    <h4 className="text-brand-gray font-bold text-lg">Performance-Driven Marketing
                                        for Business Growth</h4>
                                    <a href="#"
                                        className="text-brand-primary font-bold flex items-center justify-center gap-2 hover:text-green-700 transition">
                                        Readmore <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="relative mb-20 group" data-aos="fade-up" data-aos-delay="300">
                                <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
                                    <img src={marketing2} alt="Blog 2"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div
                                    className="absolute left-1/2 -bottom-16 -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-10/12 text-center space-y-4">
                                    <h4 className="text-brand-gray font-bold text-lg">Data-Driven Digital
                                        Marketing Strategies</h4>
                                    <a href="#"
                                        className="text-brand-primary font-bold flex items-center justify-center gap-2 hover:text-green-700 transition">
                                        Readmore <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="relative mb-20 group" data-aos="fade-up" data-aos-delay="500">
                                <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
                                    <img src={marketing3} alt="Blog 3"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div
                                    className="absolute left-1/2 -bottom-16 -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-10/12 text-center space-y-4">
                                    <h4 className="text-brand-gray font-bold text-lg">Performance-Based Digital
                                        Marketing Approach</h4>
                                    <a href="#"
                                        className="text-brand-primary font-bold flex items-center justify-center gap-2 hover:text-green-700 transition">
                                        Readmore <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <section className="py-16 bg-brand-light text-center" data-aos="zoom-in" data-aos-duration="2000">
                        <div className="mx-3 px-4 md:px-14 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary leading-tight">
                                Our services are designed <br /> to grow with your business.
                            </h2>
                            <button onClick={openInquiryModal}
                                className="inline-block bg-brand-primary text-white px-8 py-3.5 rounded hover:bg-green-700 transition font-medium">Enquire Now <i className="fa-solid fa-arrow-right ml-2"></i></button>
                        </div>
                    </section>
                </main>
            )}

            {(() => {
                if (currentPage === 'home') return null; // home rendered inline above
                const page = PAGES[currentPage];
                if (!page || !page.Component) return null;
                const PageComponent = page.Component;
                const wrapPricing = currentPage === 'pricing';
                const content = (
                    <PageComponent
                        onOpenInquiry={openInquiryModal}
                        setCurrentPage={setCurrentPage}
                        setScrollTarget={setScrollTarget}
                    />
                );
                return wrapPricing ? <main className="pt-[60px] md:pt-20 min-h-[70vh]">{content}</main> : content;
            })()}

            <Footer
                setCurrentPage={setCurrentPage}
                setScrollTarget={setScrollTarget}
                onOpenInquiry={openInquiryModal}
            />

            <InquiryForm isOpen={isModalOpen} onClose={closeInquiryModal} />
        </>
    );
}

export default App;
