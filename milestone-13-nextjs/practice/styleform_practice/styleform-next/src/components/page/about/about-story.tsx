import React from 'react';
import Image from 'next/image';

import FemaleModel from '@/assets/images/female-model.png';

const AboutStory = () => {
    return (
        <section className="pt-10">
            <div className="container space-y-10 lg:space-y-16">
                <h2 className="d2c_section_title text-center">Styleform Story</h2>

                <div className="grid grid-cols-12 gap-4 lg:gap-12 items-center">
                    <div className="col-start-1 col-span-12 lg:col-span-4 shadow-4 rounded-lg block md:hidden lg:block">
                        <div>
                            <Image 
                                src={FemaleModel.src} 
                                alt="Female Model"
                                width={FemaleModel.width}
                                height={FemaleModel.height}
                                className="mix-blend-luminosity w-full rounded-lg"
                                priority
                            />
                        </div>
                    </div>

                    <div className="col-start-1 col-span-12 lg:col-start-5 lg:col-span-8 space-y-6">
                        <p className='text-center lg:text-left'>We were born from a passion for redefining fashion through creativity and innovation. What started as a dream to make clothing more than just fabric has evolved into a platform where art and fashion converge</p>
                        <p className='text-center lg:text-left'>Share how the brand started-whether it was inspired by a pivotal moment, personal experience, or a love for design.</p>
                        <div className="grid md:grid-cols-2 gap-10 mt-10">
                            <div className="px-6 py-8 bg-white/6 shadow-story-card space-y-8 rounded-lg" data-aos="fade-up">
                                <div>
                                    <div className="flex gap-5">
                                        <div className="d2c_small_rounded_shape filter-custom-4"></div>
                                        <div>
                                            <h4 className="text-shadow-5 text-xl font-bold leading-none mb-2">Vision</h4>
                                        </div>
                                    </div>
                                    <p>To empower individuals by crafting designs that embody individuality and timeless elegance.</p>
                                </div>

                                <div>
                                    <div className="flex gap-5">
                                        <div className="d2c_small_rounded_shape filter-custom-4"></div>
                                        <div>
                                            <h4 className="text-shadow-5 text-xl font-bold leading-none mb-2">Vision</h4>
                                        </div>
                                    </div>
                                    <p>To empower individuals by crafting designs that embody individuality and timeless elegance.</p>
                                </div>
                            </div>

                            <div className="px-6 py-8 bg-white/6 shadow-story-card space-y-6  rounded-lg" data-aos="fade-up">
                                <div className="space-y-8">
                                    <h4 className="text-shadow-5 text-xl font-bold leading-none mb-2">Milestones</h4>
                                    <p>Key moments in the journey of Styleform</p>
                                    <ul className="list-disc list-inside">
                                        <li>The year of establishment.</li>
                                        <li>First major breakthrough</li>
                                        <li>Participation in prestigious events</li>
                                        <li>Awards or recognition achieved along the way.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;