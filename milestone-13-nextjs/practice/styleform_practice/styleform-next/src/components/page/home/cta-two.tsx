import React from 'react';
import Link from 'next/link';

const CtaTwo = () => {
    return (
        <section className="p-5">
            <div className="bg-cta-1 bg-white/10 rounded-[10px] shadow-4 max-w-[1460px] mx-auto">
                <div className="container">
                    <div className="py-20 space-y-5 text-center">
                        <h2 className="d2c_section_title">Do you want to be our partner?</h2>
                        <p>Where fashions meets artistry. Here, each design tells a story of innovation, elegance, and individuality.</p>
                        <Link href="/contact" className="d2c_btn mt-6">
                            Contact us
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CtaTwo;