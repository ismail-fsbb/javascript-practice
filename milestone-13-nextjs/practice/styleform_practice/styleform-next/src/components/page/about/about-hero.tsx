import React from 'react';
import Image from 'next/image';

import ManIllustration from '@/assets/images/man-Illustration.png';
import ChairBgImage from '@/assets/images/chair-bg-image.jpg';

const AboutHero = () => {
    return (
        <section>
            <div className="container">
                <div className="[box-shadow:rgba(76,205,226,0.5)_6px_6px_20px_0px,_rgba(196,72,255,0.5)_-6px_-6px_20px_0px] p-5 md:p-10 lg:p-14 xl:p-20 pt-[80px] lg:pt-[180px] md:pt-[100px] space-y-5 relative">
                    <div className="z-10">
                        <Image
                            src={ManIllustration.src}
                            alt="Man Illustration"
                            width={ManIllustration.width}
                            height={ManIllustration.height}
                        />
                        <h2 className="d2c_section_title text-2xl-1 md:text-4xl-1 lg:text-5xl xl:text-5xl-1 w-full lg:w-[90%] 2xl:w-[70%] mb-0" data-aos="fade-up">Our aim is to craft content that immerses viewers in new worlds</h2>
                    </div>

                    <Image
                        src={ChairBgImage.src}
                        alt="Chair"
                        className="mix-blend-luminosity absolute inset-0 -z-10 object-cover"
                        fill
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutHero;