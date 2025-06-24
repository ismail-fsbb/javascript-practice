import React from 'react';
import Image from 'next/image';

import ArtDirection from '@/assets/images/art-direction.png';
import TopLeftRectengle from '@/assets/images/top-left-rectengle.png';
import TopRightRectengle from '@/assets/images/top-right-rectengle.png';
import BottomLeftRectengle from '@/assets/images/bottom-left-rectengle.png';
import BottomRightRectengle from '@/assets/images/bottom-right-rectengle.png';
import ArtistsDoingModel from '@/assets/images/artists-doing-touch-ups-model.png';

const AboutIdea = () => {
    return (
        <section>
            <div className="container space-y-10 lg:space-y-16">
                <h2 className="d2c_section_title text-center">From idea to visual</h2>

                <div className="grid grid-cols-12 gap-4 lg:gap-16 items-center">
                    <div className="col-start-1 col-span-12 md:col-span-5">
                        <div className="p-10 relative">
                            <Image 
                                src={ArtDirection.src} 
                                alt="Art direction image"
                                width={ArtDirection.width}
                                height={270}
                                data-aos="fade-in"
                                className="w-full object-cover h-[270px] [filter:drop-shadow(rgba(255,252,169,0.3)_6px_6px_5px)_drop-shadow(rgba(90,63,255,0.3)_-6px_-6px_5px)]"
                            />
                            
                            <Image 
                                src={TopLeftRectengle.src} 
                                alt="Rectangle"
                                width={78}
                                height={78}
                                className="absolute top-0 left-0 max-w-[78px]"
                            />
                            <Image 
                                src={TopRightRectengle.src} 
                                alt="Rectangle"
                                width={78}
                                height={78}
                                className="absolute top-0 right-0 max-w-[78px]"
                            />
                            <Image 
                                src={BottomLeftRectengle.src} 
                                alt="Rectangle"
                                width={78}
                                height={78}
                                className="absolute bottom-0 left-0 max-w-[78px]"
                            />
                            <Image 
                                src={BottomRightRectengle.src} 
                                alt="Rectangle"
                                width={78}
                                height={78}
                                className="absolute bottom-0 right-0 max-w-[78px]"
                            />
                        </div>
                    </div>

                    <div className="col-start-1 col-span-12 md:col-start-6 md:col-span-7 space-y-4 text-center md:text-start">
                        <h3 className="d2c_section_sub_title">art direction</h3>
                        <p>We develop idea from the scratch under our Art direction, that involve designing and coordinating the visual and aesthetic elements of a project to create a cohesive and compelling visual narrative that effectively communicates the desired message or mood.</p>
                    </div>

                    <div className="col-start-1 col-span-12 md:col-span-7 space-y-4 text-center md:text-start">
                        <h3 className="d2c_section_sub_title">art direction</h3>
                        <p>We develop idea from the scratch under our Art direction, that involve designing and coordinating the visual and aesthetic elements of a project to create a cohesive and compelling visual narrative that effectively communicates the desired message or mood.</p>
                    </div>

                    <div className="col-start-1 col-span-12 md:col-start-8 md:col-span-5">
                        <div className="p-10 relative">
                            <Image 
                                src={ArtistsDoingModel.src} 
                                alt="Artists-doing-touch-ups-model image"
                                width={ArtistsDoingModel.width}
                                height={270}
                                data-aos="fade-in"
                                className="w-full object-cover h-[270px] [box-shadow:rgba(255,252,169,0.3)_6px_6px_10px_0px,_rgba(90,63,255,0.25)_-6px_-6px_10px_0px]"
                            />
                            
                            <Image 
                                src={TopLeftRectengle.src} 
                                alt="Rectangle"
                                width={78}
                                height={78}
                                className="absolute top-0 left-0 max-w-[78px]"
                            />
                            <Image 
                                src={TopRightRectengle.src} 
                                alt="Rectangle"
                                width={78}
                                height={78}
                                className="absolute top-0 right-0 max-w-[78px]"
                            />
                            <Image 
                                src={BottomLeftRectengle.src} 
                                alt="Rectangle"
                                width={78}
                                height={78}
                                className="absolute bottom-0 left-0 max-w-[78px]"
                            />
                            <Image 
                                src={BottomRightRectengle.src} 
                                alt="Rectangle"
                                width={78}
                                height={78}
                                className="absolute bottom-0 right-0 max-w-[78px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutIdea;