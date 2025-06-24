'use client'
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/logo/logo.png';
import { usePathname } from 'next/navigation';

interface HeaderProps {
    handleNavClick: (currentLink: string) => void;
}

const Header = ({ handleNavClick }: HeaderProps) => {
    let pathname = usePathname();
    if (pathname !== '/' && pathname.endsWith('/')) {
        pathname = pathname.slice(0, -1);
    }
    const [isNavOpen, setIsNavOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const closeNav = () => setIsNavOpen(false);

    useEffect(() => {
        const setNavbarBackground = () => {
            const navbar = document.getElementById("navbar");
            if (navbar) {
                navbar.style.backgroundColor = window.scrollY > 0 ? "#12398D" : "transparent";
            }
        };

        window.addEventListener("scroll", setNavbarBackground);
        window.addEventListener("resize", setNavbarBackground);
        setNavbarBackground();

        return () => {
            window.removeEventListener("scroll", setNavbarBackground);
            window.removeEventListener("resize", setNavbarBackground);
        };
    }, []);

    // Hide mobile nav on desktop resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                closeNav();
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close mobile nav when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                closeNav();
            }
        };

        if (isNavOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isNavOpen]);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/blogs', label: 'Blog' },
    ];

    return (
        <header className="sticky top-0 w-full z-50" id="navbar">
            <nav className="d2c_navbar">
                <div className="mr-auto flex justify-between items-center gap-3 lg:gap-6">
                    <div className="flex items-center gap-4 justify-between md:justify-baseline flex-wrap w-full container">
                        {/* Logo */}
                        <div className="md:mr-5">
                            <Link onClick={() => handleNavClick('/')} href="/" id="home-link">
                                <Image
                                    src={Logo.src}
                                    alt="StyleForm logo"
                                    width={235}
                                    height={60}
                                    priority
                                    className="max-w-[235px] xl:max-w-[235px] [filter:drop-shadow(0px_12px_4px_#1F51BE)_drop-shadow(0px_-10px_2px_rgba(255,255,255,0.13))]"
                                />
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <div className="hidden lg:flex space-x-10 d2c_navigation ml-auto" id="d2c_nav_link_wrapper">
                            {navLinks.map(link => (
                                <Link
                                    key={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    href={link.href}
                                    className={`nav_link nav_link_Small ${pathname === link.href ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Contact Button */}
                        <div className="hidden md:block ml-auto lg:ml-5">
                            <Link onClick={() => handleNavClick('/contact')} href="/contact" className="d2c_btn">
                                Contact
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={toggleNav}
                                id="mobile-menu-btn" 
                                className="text-light-blue border-light-blue focus:outline-none transition-all duration-500 d2c_navigation cursor-pointer"
                            >
                                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <div
                ref={mobileMenuRef}
                id="mobile-menu"
                className={`bg-primary fixed top-0 right-0 h-screen w-64 z-50 transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-500 ease-in-out`}
            >
                <div className="p-6 pt-4 w-full">
                    <div className="flex justify-end items-center">
                        <button
                            onClick={toggleNav}
                            id="close-drawer-btn"
                            className="text-light-blue focus:outline-none rounded border border-light-blue cursor-pointer"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Nav Links */}
                    <div id="mobile-nav-links" className="mt-6 grid grid-cols-1 gap-3">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                onClick={() => {
                                    handleNavClick(link.href);
                                    closeNav();
                                }}
                                href={link.href}
                                className={`nav_link nav_link_Small ${pathname === link.href ? 'active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;