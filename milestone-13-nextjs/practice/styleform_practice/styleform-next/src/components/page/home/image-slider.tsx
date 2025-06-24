'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


import React from 'react';

import heroSlider1 from '@/assets/images/hero-slider-image-1.jpg';
import heroSlider2 from '@/assets/images/hero-slider-image-2.jpg';
import heroSlider3 from '@/assets/images/hero-slider-image-3.jpg';
import heroSlider4 from '@/assets/images/hero-slider-image-4.jpg';
import heroSlider5 from '@/assets/images/hero-slider-image-5.jpg';
import ImageGlobal from './image-global';


const imageSliderImages = [
    {
        image: heroSlider1.src,
    },
    {
        image: heroSlider2.src,
    },
    {
        image: heroSlider3.src,
    },
    {
        image: heroSlider4.src,
    },
    {
        image: heroSlider5.src,
    },
    {
        image: heroSlider2.src,
    },
    {
        image: heroSlider3.src,
    },
    {
        image: heroSlider4.src,
    },
]

const ImageSlider = () => {
    return (
        <div className="lg:pb-28 -mt-20 md:-mt-24 lg:-mt-24 xl:-mt-40 2xl:-mt-60">
            <Swiper
                modules={[Autoplay]}
                className='d2c_image_slider py-6 md:py-16 relative'
                slidesPerView={5}
                loop={true}
                speed={4000}
                autoplay={{
                    delay: 0,
                }}
                spaceBetween={24}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                    1920: {
                        slidesPerView: 6,
                    },
                }}
            >
                {
                    imageSliderImages.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ImageGlobal key={index} imageGlobal={item}></ImageGlobal>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default ImageSlider;