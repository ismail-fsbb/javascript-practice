'use client'
import React from 'react';
import Link from 'next/link';

import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import ContactForm from './contact-form';
import ClientWrapper from '@/components/shared/client-wrapper';

const ContactMain = () => {
    return (
        <ClientWrapper>

            <section>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
                        <div className="space-y-6">
                            <h2 className="d2c_section_title">Wanna get in touch?</h2>
                            <p>Have a question or want to collaborate? Reach out to Styleform directly. Whether you&apos;re looking to discuss partnerships, media inquiries, or simply connect, we&apos;re here to help you take the next step.</p>

                            <ul className="space-y-6">
                                <li>
                                    <Link href="tel:+12543123845" className="text-xl md:text-2xl lg:text-2xl-1 xl:text-3xl-1 font-medium inline-flex items-center gap-4" data-aos="fade-up" data-aos-delay="100">
                                        <span className="d2c_social_link"><FaPhone /></span>
                                        +1 254 312 3845
                                    </Link>
                                </li>
                                <li>
                                    <Link href="mailto:info@styleform.com" className="text-xl md:text-2xl lg:text-2xl-1 xl:text-3xl-1 font-medium inline-flex items-center gap-4" data-aos="fade-up" data-aos-delay="300">
                                        <span className="d2c_social_link"><FaEnvelope /></span>
                                        info@styleform.com
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <ContactForm />
                    </div>

                    <div className="text-center mt-16 pt-12 border-t border-white/15">
                        <h4 className="text-2xl capitalize font-medium mb-4">Follow Us</h4>
                        <div className="space-x-4">
                            <Link href="#" className="d2c_social_link" data-aos-delay="100">
                                <FaFacebookF />
                            </Link>
                            <Link href="#" className="d2c_social_link" data-aos-delay="300">
                                <FaLinkedinIn />
                            </Link>
                            <Link href="#" className="d2c_social_link" data-aos-delay="500">
                                <FaXTwitter />
                            </Link>
                            <Link href="#" className="d2c_social_link" data-aos-delay="700">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </ClientWrapper>
    );
};

export default ContactMain;