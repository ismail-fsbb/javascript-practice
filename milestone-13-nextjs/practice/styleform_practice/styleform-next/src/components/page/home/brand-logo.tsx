'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';

import React from 'react';
import Image from 'next/image';

import CalvinKlein from '@/assets/images/company-logo/Calvin-Klein.png';
import RalphLauren from '@/assets/images/company-logo/Ralph-Lauren.png';
import ZARA from '@/assets/images/company-logo/ZARA.png';
import Adidas from '@/assets/images/company-logo/Adidas.png';
import Valentino from '@/assets/images/company-logo/Valentino.png';
import Bvlgari from '@/assets/images/company-logo/Bvlgari.png';

const brandLogoImages = [
    {
        image: CalvinKlein.src,
    },
    {
        image: RalphLauren.src,
    },
    {
        image: ZARA.src,
    },
    {
        image: Adidas.src,
    },
    {
        image: Valentino.src,
    },
    {
        image: Bvlgari.src,
    },
    {
        image: ZARA.src,
    },
]

const BrandLogo = () => {
    return (
        <section className="space-y-16">
            <div className="container">
                <h2 className="d2c_section_sub_title text-center lg:w-[90%] xl:w-[80%] mx-auto">partnerships with notable brands influencer, or institutions</h2>
            </div>
            <div>
                <Swiper
                    slidesPerView={6}
                    loop={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                    }}
                    modules={[Autoplay]}
                    spaceBetween={40}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 5,
                        },
                        1920: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {
                        brandLogoImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="d2c_logo_slider relative">
                                    <div>
                                        <div className="py-4 lg:py-6 xl:py-10">
                                            <div className="d2c_logo_wrapper shadow-4">
                                                <Image
                                                    src={item.image}
                                                    alt="Brand Logo"
                                                    width={160}
                                                    height={53}
                                                    className="w-auto"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default BrandLogo;