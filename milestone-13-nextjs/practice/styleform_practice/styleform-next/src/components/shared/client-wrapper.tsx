'use client'
import React, { ReactNode, useEffect, useRef } from 'react';
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import Preloader from "@/components/shared/preloader";
import AOSInit from "@/components/shared/aos-init";
import ScrollButton from "@/components/shared/scroll-button";
import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

interface ClientWrapperProps {
    children: ReactNode;
}

const ClientWrapper = ({ children }: ClientWrapperProps) => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    let pathname = usePathname();
    if (pathname !== '/' && pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
    }

    const handleNavClick = (currentLink: string) => {
        if (preloaderRef.current && currentLink != pathname) {
            preloaderRef.current.style.opacity = '1';
            preloaderRef.current.style.display = 'flex';
        }
    };

    const handleRouteChange = () => {
        if (preloaderRef.current) {
            preloaderRef.current.style.opacity = '1';
            preloaderRef.current.style.display = 'flex';

            if (preloaderRef.current) {
                preloaderRef.current.style.opacity = '0';
                setTimeout(() => {
                    if (preloaderRef.current) {
                        preloaderRef.current.style.display = 'none';
                    }
                }, 600);
            }
        }
    };

    useEffect(() => {
        handleRouteChange();
    }, [pathname]);
    return (
        <div>
            <Preloader preloaderRef={preloaderRef} />
            <Header handleNavClick={handleNavClick} />
            <AOSInit />
            {children}
            <ScrollButton />
            <Footer />
            <Toaster />
        </div>
    );
};

export default ClientWrapper;