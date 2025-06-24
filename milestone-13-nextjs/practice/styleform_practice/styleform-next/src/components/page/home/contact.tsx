'use client';

import React from 'react';
import Image from 'next/image';

import QrCode from '@/assets/images/qr-code.png';
import ContactForm from '../contact/contact-form';

const Contact = () => {
    return (
        <section>
            <div className="container space-y-10 lg:space-y-16">
                <h2 className="d2c_section_title text-center">Let&apos;s <br /> Work Together</h2>

                <div className="grid grid-cols-12 gap-4 md:gap-6 bg-white/10 py-8 md:py-20 px-5 md:px-14 rounded-lg shadow-4" data-aos="fade-up">
                    <ContactForm className="col-start-1 col-span-12 lg:col-span-8" />
                    <div className="col-start-1 col-span-12 lg:col-start-9 lg:col-span-4 space-y-6 xl:pl-10 text-center md:text-left hidden lg:block">
                        <h3 className="d2c_section_sub_title mt-6 lg:mt-0">Scan now</h3>
                        <div className="p-5 border border-white/15 rounded-md max-w-[300px] max-h-[300px]">
                            <Image
                                src={QrCode.src}
                                alt="QR Code"
                                width={QrCode.width}
                                height={QrCode.height}
                                className="w-full h-full"
                            />
                        </div>
                        <h4 className="font-medium font-primary text-lg lg:text-xl text-shadow-2">Contact &amp; call directly</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;