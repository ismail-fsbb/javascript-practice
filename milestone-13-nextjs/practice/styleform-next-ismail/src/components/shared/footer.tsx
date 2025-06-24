import React from "react";
import Image from 'next/image';
import Link from "next/link";
import footerLogo from "../../../public/assets/images/logo/footer-logo.png";

export default function Footer() {
  return (
    <footer>
        <div className="border-y border-white/15">
            <div className="container">
                <div className="grid grid-cols-12 gap-6 lg:gap-10 md:divide-x md:divide-white/15">
                    <div className="col-start-1 col-span-12 md:col-span-6 space-y-5 d2c_footer_content pb-0 md:py-10 lg:py-14 md:pr-10">
                        <a href="./index.html" className="inline-flex justify-center md:justify-start w-full md:w-fit">
                            <Image 
                                src={footerLogo.src} 
                                width={footerLogo.width}
                                height={footerLogo.height}
                                alt="Logo" 
                                className="d2c_footer_logo" 
                            />
                        </a>
                        <p className="d2c_description no-animation">Stay up to date on the latest features & releases by joining our newsletter</p>
                        <form className="mt-3 md:mt-6 space-y-3 md:space-y-8">
                            <div>
                                <input type="email" className="form-control" placeholder="Enter your email" required />
                            </div>
            
                            <button type="submit" className="d2c_btn mt-4 w-full md:w-fit">
                                send now
                            </button>
                        </form>
                    </div>
                    <div className="col-start-1 col-span-6 md:col-start-7 md:col-span-3 space-y-6 md:space-y-12 xl:space-y-20 d2c_footer_content ">
                        <h3 className="d2c_footer_title no-animation">Content</h3>
                        <ul className="list-none list-outside space-y-2">
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                            <li>
                                <Link href="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/blogs">Blog</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-start-7 col-span-6 md:col-start-10 md:col-span-3 space-y-6 md:space-y-12 xl:space-y-20 d2c_footer_content ">
                        <h3 className="d2c_footer_title no-animation">Follow</h3>
                        <ul className="list-none list-outside space-y-2">
                            <li>
                                <Link href="#">X</Link>
                            </li>
                            <li>
                                <Link href="#">Facebook</Link>
                            </li>
                            <li>
                                <Link href="#">Instagram</Link>
                            </li>
                            <li>
                                <Link href="#">Youtube</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <p className="py-4 text-center text-shadow-1 no-animation">All rights reserved <span className="font-bold">by DesignToCodes</span></p>
        </div>
    </footer>
  )
}