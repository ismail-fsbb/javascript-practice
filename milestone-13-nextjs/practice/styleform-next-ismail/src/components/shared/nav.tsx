import React from "react"
import Image from "next/image"
import logoImage from "@/assets/images/logo/logo.png";

export default function Nav() {
  return (
    <header className="sticky top-0 w-full" id="navbar">
        <nav className="d2c_navbar">
            <div className="mr-auto flex justify-between items-center gap-3 lg:gap-6">
                <div className="flex items-center gap-4 justify-between md:justify-baseline flex-wrap w-full container">
                    <div className="md:mr-5">
                        <a href="/" id="home-link">
                            <Image 
                                src={logoImage.src} 
                                width={logoImage.width}
                                height={logoImage.height}
                                alt="Logo" 
                                className="max-w-[235px] xl:max-w-[235px] [filter:drop-shadow(0px_12px_4px_#1F51BE)_drop-shadow(0px_-10px_2px_rgba(255,255,255,0.13))]" 
                            />
                        </a>
                    </div>
                    <div className="hidden lg:flex space-x-10 d2c_navigation ml-auto" id="d2c_nav_link_wrapper">
                        <a href="#" className="nav_link nav_link_Small active">Home</a>
                        <a href="#" className="nav_link nav_link_Small">About</a>
                        <a href="#" className="nav_link nav_link_Small">Gallery</a>
                        <a href="#" className="nav_link nav_link_Small">Blog</a>
                    </div>

                    <div className="hidden md:block ml-auto lg:ml-5">
                        <a href="./pages/contact.html" className="d2c_btn">
                            Contact
                        </a>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button id="mobile-menu-btn" className="text-light-blue border-light-blue focus:outline-none transition-all duration-500 d2c_navigation">
                            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                
            </div>
        </nav>

        
        <div id="mobile-menu" className="hidden bg-primary absolute right-3 left-3 z-50 top-2 border rounded border-primary">
            <div className="block lg:hidden p-6 pt-4 w-full">
                <div className="flex justify-end items-center">
                    <button id="close-drawer-btn" className="text-light-blue focus:outline-none rounded">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                
                <div id="mobile-nav-links" className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-1 gap-x-4"></div>
            </div>
        </div>
    </header>
  )
}