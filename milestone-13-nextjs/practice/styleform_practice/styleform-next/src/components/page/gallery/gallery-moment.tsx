'use client'
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import React from 'react';
import Image from 'next/image';

import GalleryImage12 from '@/assets/images/gallery-image/Gallery-Image-12.jpg';
import GalleryImage13 from '@/assets/images/gallery-image/Gallery-Image-13.jpg';
import GalleryImage14 from '@/assets/images/gallery-image/Gallery-Image-14.jpg';
import GalleryImage15 from '@/assets/images/gallery-image/Gallery-Image-15.jpg';
import GalleryImage16 from '@/assets/images/gallery-image/Gallery-Image-16.jpg';
import GalleryImage17 from '@/assets/images/gallery-image/Gallery-Image-17.jpg';
import GalleryImage18 from '@/assets/images/gallery-image/Gallery-Image-18.jpg';
import GalleryImage19 from '@/assets/images/gallery-image/Gallery-Image-19.jpg';
import GalleryImage20 from '@/assets/images/gallery-image/Gallery-Image-20.jpg';

const GalleryMoment = () => {
    return (
        <section>
            <div className="container space-y-10 lg:space-y-16">
                <h2 className="d2c_section_title text-center">Capture moments</h2>
                
                <div className="App">
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames="grid grid-cols-4 grid-rows-5 gap-4 gap-md-6 h-[400px] md:h-[800px] xl:h-[1400px]"
                    >
                        <a href={GalleryImage12.src} className="col-span-2 row-span-2">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage12.src}
                                alt="Gallery Image 12"
                                width={800}
                                height={600}
                                priority
                            />
                        </a>
                        <a href={GalleryImage16.src} className="col-start-1 row-start-3">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage16.src}
                                alt="Gallery Image 16"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage13.src} className="row-span-2 col-start-3 row-start-1">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage13.src}
                                alt="Gallery Image 13"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage14.src} className="col-start-4 row-start-1">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage14.src}
                                alt="Gallery Image 14"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage15.src} className="col-start-4 row-start-2">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage15.src}
                                alt="Gallery Image 15"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage17.src} className="col-span-2 row-start-3">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage17.src}
                                alt="Gallery Image 17"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage19.src} className="col-span-3 row-span-2 col-start-1 row-start-4">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage19.src}
                                alt="Gallery Image 19"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage18.src} className="row-span-2 col-start-4 row-start-3">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage18.src}
                                alt="Gallery Image 18"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage20.src} className="col-start-4 row-start-5">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage20.src}
                                alt="Gallery Image 20"
                                width={800}
                                height={600}
                            />
                        </a>
                    </LightGallery>
                </div>
            </div>
        </section>
    );
};

export default GalleryMoment;