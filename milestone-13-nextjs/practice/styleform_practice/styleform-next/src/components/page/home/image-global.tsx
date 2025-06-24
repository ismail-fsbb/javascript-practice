import React from 'react';
import Image from 'next/image';

interface ImageGlobalType {
    image: string;
}

interface ImageGlobalProps {
    imageGlobal: ImageGlobalType;
}

const ImageGlobal = ({ imageGlobal }: ImageGlobalProps) => {
    return (
        <div className="swiper-slide">
            <Image 
                src={imageGlobal.image} 
                alt="Model Image"
                width={500}
                height={750}
                className="w-full"
                data-aos="fade-up" 
                data-aos-delay="100"
            />
        </div>
    );
};

export default ImageGlobal;