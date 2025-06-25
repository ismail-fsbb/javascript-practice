'use client';
import React, { useEffect } from 'react';
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
//@ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';
import sliderImage1 from '@/assets/images/hero-slider-image-1.jpg'
import sliderImage2 from '@/assets/images/hero-slider-image-2.jpg'
import sliderImage3 from '@/assets/images/hero-slider-image-3.jpg'
import sliderImage4 from '@/assets/images/hero-slider-image-4.jpg'
import sliderImage5 from '@/assets/images/hero-slider-image-5.jpg'

const BASE_DELAY = 400;
export default function HeroSlider() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
    
      
  const imageSliderImages = [
      {
          src: sliderImage1.src,
          width: sliderImage1.width,
          height: sliderImage1.height,
      },
      {
          src: sliderImage2.src,
          width: sliderImage2.width,
          height: sliderImage2.height,
      },
      {
          src: sliderImage3.src,
          width: sliderImage3.width,
          height: sliderImage3.height,
      },
      {
          src: sliderImage4.src,
          width: sliderImage4.width,
          height: sliderImage4.height,
      },
      {
          src: sliderImage5.src,
          width: sliderImage5.width,
          height: sliderImage5.height,
      },
    ]

  return (
    <>
    <div className="lg:pb-28 -mt-20 md:-mt-24 lg:-mt-24 xl:-mt-40 2xl:-mt-60">
    <Swiper
                modules={[Autoplay]}
                className='d2c_image_slider py-6 md:py-16 relative'
                slidesPerView={4}
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
                    }
                }}
            >
                {imageSliderImages.map((item, index) => (
                  <SwiperSlide key={index}  data-aos="fade-up" data-aos-delay={BASE_DELAY + (200 * index)} >
                      <div className='relative'>
                          <Image
                              src={item.src}
                              width={item.width}
                              height={item.height}
                              alt='slider'
                              className='w-full'
                          />
                      </div>
                  </SwiperSlide>
              ))}
      </Swiper>
    </div>
      
    </>
    
  );
}
