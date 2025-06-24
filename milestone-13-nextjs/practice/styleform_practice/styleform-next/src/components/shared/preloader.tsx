'use client'
import React from 'react';
import Image from 'next/image';
import Logo from '@/assets/images/logo/logo.png';

interface PreloaderProps {
    preloaderRef: React.RefObject<HTMLDivElement | null>;
}

const Preloader = ({preloaderRef} : PreloaderProps) => {
    return (
        <div
            ref={preloaderRef}
            className="preloader h-full fixed w-full bg-primary transition duration-300 flex items-center justify-center z-100"
        >
            <div>
                <Image 
                    src={Logo.src} 
                    alt="Logo"
                    width={300}
                    height={80}
                    priority
                    className="max-w-[300px]"
                />
                <div className="d2c_loader mx-auto"></div>
            </div>
        </div>
    );
};

export default Preloader;