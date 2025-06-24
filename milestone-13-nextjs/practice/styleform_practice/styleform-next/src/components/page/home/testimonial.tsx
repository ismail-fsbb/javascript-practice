'use client'
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';

import QuotationLeft from '@/assets/images/quotation-left.png';
import Adidas from '@/assets/images/adidas.png';
import Bvlgari from '@/assets/images/company-logo/Bvlgari.png';
import CalvinKlein from '@/assets/images/company-logo/Calvin-Klein.png';
import QuotationRight from '@/assets/images/quotation-right.png';

const cardAllContent = [
    {
        image: Adidas.src,
        content: "Styleform took our brand to the next level. The attention to detail and creative insight they brought to the project was truly remarkable.",
        information: "James T., Brand Strategist",
    },
    {
        image: Bvlgari.src,
        content: "Their design language resonated perfectly with our identity. It's rare to find a partner that blends aesthetics with user experience so seamlessly.",
        information: "Emily R., UX Lead",
    },
    {
        image: CalvinKlein.src,
        content: "From discovery to delivery, Styleform demonstrated professionalism and creativity. We couldn't be happier with the results.",
        information: "Liam N., Marketing Director",
    },
]

import React from 'react';

const Testimonial = () => {
    return (
        <section>
            <div className="container space-y-10 lg:space-y-16">
                <h2 className="d2c_section_title md:w-[90%] xl:w-[80%] mx-auto text-center">their thoughts about us</h2>

                <div className="-mb-4">
                    <Image 
                        src={QuotationLeft.src} 
                        alt="Quotation mark"
                        width={QuotationLeft.width}
                        height={QuotationLeft.height}
                        className="[filter:drop-shadow(0px_8px_7px_#4D61C8)_drop-shadow(0px_-8px_4px_#ffffff21)]"
                    />
                </div>

                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    loop={true}
                    speed={2000}
                    autoplay={{
                        delay: 3000,
                    }}
                    grabCursor={true}
                    allowTouchMove={true}
                    modules={[Autoplay]}
                >
                    {
                        cardAllContent.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="d2c_testimonial_slider py-6 md:py-16 max-w-full md:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] relative mx-auto">
                                    <div className="space-y-4 text-center pt-4 w-full mx-auto">
                                        <Image 
                                            src={item.image} 
                                            alt="Adidas Logo"
                                            width={147}
                                            height={50}
                                            className="max-w-[147px] mx-auto d2c_logo_shadow inline-block mb-6"
                                        />
                                        <div className="w-[300px] h-0.5 bg-liner shadow-liner mx-auto"></div>
                                        <p className="py-3">{item.content}</p>
                                        <div className="w-[120px] h-0.5 bg-liner shadow-liner mx-auto"></div>
                                        <h5 className="d2c_client_name">{item.information}</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className="flex justify-end -mt-8">
                    <Image 
                        src={QuotationRight.src} 
                        alt="Quotation mark"
                        width={QuotationRight.width}
                        height={QuotationRight.height}
                        className="[filter:drop-shadow(0px_8px_7px_#4D61C8)_drop-shadow(0px_-8px_4px_#ffffff21)]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;