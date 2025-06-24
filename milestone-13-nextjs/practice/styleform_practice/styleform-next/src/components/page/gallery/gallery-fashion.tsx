'use client'
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import React from 'react';
import Image from 'next/image';

import GalleryImage21 from '@/assets/images/gallery-image/Gallery-Image-21.jpg';
import GalleryImage22 from '@/assets/images/gallery-image/Gallery-Image-22.jpg';
import GalleryImage23 from '@/assets/images/gallery-image/Gallery-Image-23.jpg';
import GalleryImage24 from '@/assets/images/gallery-image/Gallery-Image-24.jpg';
import GalleryImage25 from '@/assets/images/gallery-image/Gallery-Image-25.jpg';
import GalleryImage26 from '@/assets/images/gallery-image/Gallery-Image-26.jpg';
import GalleryImage27 from '@/assets/images/gallery-image/Gallery-Image-27.jpg';
import GalleryImage28 from '@/assets/images/gallery-image/Gallery-Image-28.jpg';

const GalleryFashion = () => {
    return (
        <section className="pt-5">
            <div className="container space-y-10 lg:space-y-16">
                <h2 className="d2c_section_title text-center">Fashion capture</h2>

                <div className="App">
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames="grid grid-cols-12 grid-rows-4 gap-4 gap-md-6 h-[300px] md:h-[500px] xl:h-[1000px]"
                    >
                        <a href={GalleryImage21.src} className="col-span-5 row-span-2">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage21.src}
                                alt="Gallery Image 21"
                                width={800}
                                height={600}
                                priority
                            />
                        </a>
                        <a href={GalleryImage23.src} className="col-span-3 col-start-1 row-start-3">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage23.src}
                                alt="Gallery Image 23"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage24.src} className="col-span-3 col-start-1 row-start-4">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage24.src}
                                alt="Gallery Image 24"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage25.src} className="col-span-3 row-span-2 col-start-4 row-start-3">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage25.src}
                                alt="Gallery Image 25"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage26.src} className="col-span-3 row-span-2 col-start-7 row-start-3">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage26.src}
                                alt="Gallery Image 26"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage27.src} className="col-span-3 col-start-10 row-start-3">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage27.src}
                                alt="Gallery Image 27"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage28.src} className="col-span-3 col-start-10 row-start-4">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage28.src}
                                alt="Gallery Image 28"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage22.src} className="col-span-7 row-span-2 col-start-6 row-start-1">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage22.src}
                                alt="Gallery Image 22"
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

export default GalleryFashion;