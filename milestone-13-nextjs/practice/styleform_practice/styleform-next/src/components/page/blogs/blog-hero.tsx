import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FeatureImage from '@/assets/images/feature-image.jpg';

const BlogHero = () => {
    return (
        <section>
            <div className="container">
                <div className="[box-shadow:rgba(76,205,226,0.5)_6px_6px_20px_0px,_rgba(196,72,255,0.5)_-6px_-6px_20px_0px] p-5 md:p-10 lg:p-14 xl:p-20 pt-[100px] md:pt-[200px] xl:pt-[300px] relative">
                    <div className="z-10 space-y-8">
                        <h2 className="d2c_section_title text-2xl-1 md:text-4xl-1 lg:text-5xl xl:text-5xl-1 w-full lg:w-[90%] 2xl:w-[70%]">Electric lamp illuminates modern domestic Studio</h2>
                        <Link href="/blogs/details" className="d2c_btn">Read now</Link>
                    </div>
                    <Image 
                        src={FeatureImage.src} 
                        alt="Feature image"
                        fill
                        priority
                        className="mix-blend-luminosity absolute inset-0 -z-10 object-cover"
                        sizes="100vw"
                    />
                </div>
            </div>
        </section>
    );
};

export default BlogHero;