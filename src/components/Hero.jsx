import React from 'react';
import illustration from '../assets/images/illustration.png';

const Hero = ({ onOpenInquiry }) => {
    return (
        <section className="bg-brand-light pt-[140px] pb-24" data-aos="zoom-in" data-aos-duration="1000">
            <div className="mx-3 px-4 md:px-14 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="md:w-2/3 space-y-6">
                    <h1 className="text-4xl md:text-6xl text-brand-dark leading-tight hero-title-shadow"
                        style={{ fontFamily: "'Rowdies', cursive" }}>
                        WE Are Brilliant In <br />
                        <span className="text-brand-primary">Terms of Digital Marketing</span>
                    </h1>
                    <p className="text-[#717171] text-[16px] font-normal whitespace-normal md:whitespace-nowrap">
                        Helping brands grow smarter with digital marketing that actually works.?
                    </p>
                    <button onClick={onOpenInquiry}
                        className="inline-block bg-brand-primary text-white px-8 py-3.5 rounded hover:bg-green-700 transition font-medium">Enquire
                        Now</button>
                </div>
                <div className="md:w-1/3 flex justify-center" data-aos-duration="1000" data-aos-delay="200">
                    <img src={illustration} alt="Hero Illustration"
                        className="w-full max-w-sm drop-shadow-lg animate-float" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
