import React from 'react';
import Image from 'next/image';
import heroImage from "@/assets/images/Hero-Model-Image.png";

export default function Hero(){
    return (
        <>
        <section className="pb-32 md:pb-40 xl:pb-60 2xl:pb-80 bg-hero">
            <div className="container">
                <div className="text-center space-y-4">
                    <h1 className="d2c_section_title text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl-1">unlock your style</h1>
                    <p className="capitalize text-lg md:text-xl lg:text-2xl xl:text-3xl-1 w-[90%] mx-auto md:w-full">Pre-Existing Ideas and manifest unique concepts</p>
                    <div className="pt-10 md:pt-24" data-aos="fade-up">
                        <Image 
                            src={heroImage.src} 
                            width={heroImage.width}
                            height={heroImage.height}
                            alt="hero image" 
                            className="filter-custom-2-mobile md:filter-custom-2" 
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}