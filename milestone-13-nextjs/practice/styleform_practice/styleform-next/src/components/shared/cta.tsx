import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ctaModel from '@/assets/images/CTA-model-image.png'

const Cta = () => {
    return (
        <section className="p-5">
            <div className="bg-white/10 rounded-[10px] shadow-4 pt-20 max-w-full xl:max-w-[1460px] mx-auto" data-aos="fade-up">
                <div className="container">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="col-start-1 col-span-12 md:col-span-7 space-y-4 pb-10 lg:pb-20 text-center md:text-left">
                            <h2 className="d2c_section_title">Do You want to be a Model?</h2>
                            <p>Where fashions meets artistry. Here, each design tells a story of innovation, elegance, and individuality.</p>
                            <Link href="/contact" className="d2c_btn mt-6">Contact us</Link>
                        </div>

                        <div className="col-start-1 col-span-12 md:col-start-8 md:col-span-5 flex items-end justify-end h-full">
                            <Image 
                                src={ctaModel.src} 
                                alt="Model Image"
                                width={ctaModel.width}
                                height={ctaModel.height}
                                className="filter-6 max-h-full"
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Cta;