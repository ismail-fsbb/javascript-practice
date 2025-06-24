'use client'

import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import React from 'react';
import Image from 'next/image';
import GalleryImage1 from '@/assets/images/gallery-image/Gallery-Image-1.jpg';
import GalleryImage5 from '@/assets/images/gallery-image/Gallery-Image-5.jpg';
import GalleryImage6 from '@/assets/images/gallery-image/Gallery-Image-6.jpg';
import GalleryImage2 from '@/assets/images/gallery-image/Gallery-Image-2.jpg';
import GalleryImage7 from '@/assets/images/gallery-image/Gallery-Image-7.jpg';
import GalleryImage3 from '@/assets/images/gallery-image/Gallery-Image-3.jpg';
import GalleryImage8 from '@/assets/images/gallery-image/Gallery-Image-8.jpg';
import GalleryImage4 from '@/assets/images/gallery-image/Gallery-Image-4.jpg';
import GalleryImage9 from '@/assets/images/gallery-image/Gallery-Image-9.jpg';
import GalleryImage10 from '@/assets/images/gallery-image/Gallery-Image-10.jpg';
import GalleryImage11 from '@/assets/images/gallery-image/Gallery-Image-11.jpg';

const Gallery = () => {
    return (
        <section>
            <div className="container space-y-10 lg:space-y-16">
                <h2 className="d2c_section_title text-center">Gallery</h2>
                <div className="App">
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames="grid grid-cols-1 md:grid-cols-4 md:grid-rows-12 gap-4 gap-md-6"
                    >
                        <a href={GalleryImage1.src} className="md:row-span-4">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage1.src}
                                alt="Gallery Image 1"
                                width={800}
                                height={600}
                                priority
                            />
                        </a>
                        <a href={GalleryImage5.src} className="md:row-span-4 md:col-start-1 md:row-start-5">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage5.src}
                                alt="Gallery Image 5"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage6.src} className="md:row-span-4 md:col-start-1 md:row-start-9">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage6.src}
                                alt="Gallery Image 6"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage2.src} className="md:row-span-7 md:col-start-2 md:row-start-1">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage2.src}
                                alt="Gallery Image 2"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage7.src} className="md:row-span-5 md:col-start-2 md:row-start-8">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage7.src}
                                alt="Gallery Image 7"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage3.src} className="md:row-span-5 md:col-start-3 md:row-start-1">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage3.src}
                                alt="Gallery Image 3"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage8.src} className="md:row-span-7 md:col-start-3 md:row-start-6">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage8.src}
                                alt="Gallery Image 8"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage4.src} className="md:row-span-3 md:col-start-4 md:row-start-1">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage4.src}
                                alt="Gallery Image 4"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage9.src} className="md:row-span-3 md:col-start-4 md:row-start-4">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage9.src}
                                alt="Gallery Image 9"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage10.src} className="md:row-span-3 md:col-start-4 md:row-start-7">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage10.src}
                                alt="Gallery Image 10"
                                width={800}
                                height={600}
                            />
                        </a>
                        <a href={GalleryImage11.src} className="md:row-span-3 md:col-start-4 md:row-start-10">
                            <Image
                                className="h-full w-full object-cover shadow-gallery-image"
                                src={GalleryImage11.src}
                                alt="Gallery Image 11"
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

export default Gallery;