import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

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

    useEffect(() => {
        if (typeof window !== 'undefined' && window.AOS) {
            window.AOS.init()
        }
    }, [])


    const openInquiryModal = () => {
        setIsModalOpen(true);
    };

    const closeInquiryModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Header onOpenInquiry={openInquiryModal} />

            <main>
                <Hero onOpenInquiry={openInquiryModal} />

                {/* Clients Section */}
                <section className="py-12 bg-white" data-aos="fade-up" data-aos-duration="1000">
                    <div className="container mx-auto px-4 md:px-14 text-center space-y-4">
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
                <section className="py-14 bg-white" data-aos="fade-up" data-aos-duration="1000">
                    <div className="container mx-auto px-4 md:px-14 text-center max-w-2xl mx-auto space-y-4 mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark leading-snug">Manage your entire community in
                            a single system</h2>
                        <p className="text-brand-gray">Who is Nextcent suitable for?</p>
                    </div>
                    <div className="container mx-auto px-4 md:px-14 grid md:grid-cols-3 gap-8 text-center">

                        {/* Card 1 */}
                        <div className="bg-white px-8 py-6 rounded-lg shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full max-w-[299px] mx-auto flex flex-col items-center"
                            data-aos="fade-up" data-aos-delay="100">
                            <div className="mb-4">
                                <img src={card1} alt="Membership Organisations" className="w-16 h-auto" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-2 text-center leading-tight">
                                Membership<br />Organisations</h3>
                            <p className="text-brand-gray text-sm leading-relaxed text-center">Our membership management software
                                provides full automation of membership renewals and payments</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white px-8 py-6 rounded-lg shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full max-w-[299px] mx-auto flex flex-col items-center"
                            data-aos="fade-up" data-aos-delay="300">
                            <div className="mb-4">
                                <img src={card2} alt="National Associations" className="w-16 h-auto" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-2 text-center leading-tight">National<br />Associations
                            </h3>
                            <p className="text-brand-gray text-sm leading-relaxed text-center">Our membership management software
                                provides full automation of membership renewals and payments</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white px-8 py-6 rounded-lg shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 w-full max-w-[299px] mx-auto flex flex-col items-center"
                            data-aos="fade-up" data-aos-delay="500">
                            <div className="mb-4">
                                <img src={card3} alt="Clubs And Groups" className="w-16 h-auto" />
                            </div>
                            <h3 className="text-2xl font-bold text-brand-dark mb-2 text-center leading-tight">Clubs And<br />Groups</h3>
                            <p className="text-brand-gray text-sm leading-relaxed text-center">Our membership management software
                                provides full automation of membership renewals and payments</p>
                        </div>
                    </div>
                </section>

                {/* Feature Section 1 */}
                <section className="py-16 bg-white" data-aos="zoom-in" data-aos-duration="1000">
                    <div className="container mx-auto px-4 md:px-14 flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <img src={rafiki} alt="Feature 1" className="w-full max-w-md mx-auto" />
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-4xl font-semibold text-brand-dark leading-tight">The unseen of spending three years at
                                Pixelgrade</h2>
                            <p className="text-brand-gray text-sm leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam
                                vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                                tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam
                                quam vitae, tempus sem. Donec elementum pulvinar odio.
                            </p>
                            <a href="#"
                                className="inline-block bg-brand-primary text-white px-8 py-3.5 rounded hover:bg-green-700 transition font-medium">Learn
                                More</a>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-16 bg-brand-light" data-aos="fade-up" data-aos-duration="1000">
                    <div className="container mx-auto px-4 md:px-14 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2 space-y-4">
                            <h2 className="text-4xl font-semibold text-brand-dark leading-tight">Helping a local <br /> <span
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
                <section className="py-16 bg-white" data-aos="fade-up" data-aos-duration="1000">
                    <div className="container mx-auto px-4 md:px-14 flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2 order-2 md:order-1">
                            <img src={pana} alt="Feature 2" className="w-full max-w-md mx-auto" />
                        </div>
                        <div className="md:w-1/2 space-y-6 order-1 md:order-2">
                            <h2 className="text-4xl font-semibold text-brand-dark leading-tight">How to design your site footer like we
                                did</h2>
                            <p className="text-brand-gray text-sm leading-relaxed">
                                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                                massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                                In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In
                                euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo
                                faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                                Donec consectetur faucibus ipsum id gravida.
                            </p>
                            <a href="#"
                                className="inline-block bg-brand-primary text-white px-8 py-3.5 rounded hover:bg-green-700 transition font-medium">Learn
                                More</a>
                        </div>
                    </div>
                </section>

                {/* Tesla Section */}
                <section className="py-12 bg-brand-light" data-aos="fade-up" data-aos-duration="1000">
                    <div className="container mx-auto px-4 md:px-14 flex flex-col md:flex-row gap-12 items-stretch">
                        <div className="md:w-1/3 w-full">
                            <img src={section4} alt="Testimonial Image"
                                className="w-full h-full object-cover rounded-lg shadow-md aspect-square" />
                        </div>
                        <div className="md:w-2/3 space-y-6 flex flex-col justify-center">
                            <p className="text-brand-gray font-medium leading-relaxed">
                                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                                tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                                enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec
                                molestie mi blandit. Suspendisse cursus tellus sed libero ullamcorper, quis rhoncus metus rhoncus.
                                In hac habitasse platea dictumst. Lebes ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            <div>
                                <h4 className="text-brand-primary font-bold text-xl mb-1">Tim Smith</h4>
                                <p className="text-brand-gray text-sm">British Dragon Boat Racing Association</p>
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
                    <div className="container mx-auto px-4 md:px-14 text-center space-y-4 mb-12" data-aos="fade-up"
                        data-aos-duration="1000">
                        <h2 className="text-3xl font-semibold text-brand-dark">Caring is the new marketing</h2>
                        <p className="text-brand-gray max-w-2xl mx-auto">The Nextcent blog is the best place to read about the latest
                            membership insights, trends and more. See who's joining the community, read about how our community are
                            increasing their membership income and lot's more.</p>
                    </div>
                    <div className="container mx-auto px-4 md:px-14 grid md:grid-cols-3 gap-8">
                        <div className="relative mb-20 group" data-aos="fade-up" data-aos-delay="100">
                            <div className="h-64 w-full bg-gray-200 rounded-lg overflow-hidden">
                                <img src={marketing1} alt="Blog 1"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>
                            <div
                                className="absolute left-1/2 -bottom-16 -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-10/12 text-center space-y-4">
                                <h4 className="text-brand-gray font-bold text-lg">Creating Streamlined Safeguarding Processes with
                                    OneRen</h4>
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
                                <h4 className="text-brand-gray font-bold text-lg">What are your safeguarding responsibilities and how
                                    can you manage them?</h4>
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
                                <h4 className="text-brand-gray font-bold text-lg">Revamping the Membership Model with Triathlon
                                    Australia</h4>
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
                    <div className="container mx-auto px-4 md:px-14 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-secondary leading-tight">
                            Our services are designed <br /> to grow with your business.
                        </h2>
                        <button onClick={openInquiryModal}
                            className="inline-block bg-brand-primary text-white px-8 py-3.5 rounded hover:bg-green-700 transition font-medium">Inquiry
                            Now <i className="fa-solid fa-arrow-right ml-2"></i></button>
                    </div>
                </section>
            </main>

            <Footer />

            <InquiryForm isOpen={isModalOpen} onClose={closeInquiryModal} />
        </>
    );
}

export default App;
