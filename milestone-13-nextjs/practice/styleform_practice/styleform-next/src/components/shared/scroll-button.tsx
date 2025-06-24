'use client'
import React, { useEffect } from 'react';
import { FaAngleUp } from "react-icons/fa6";

const ScrollButton = () => {
    useEffect(() => {
        const scrollFunction = () => {
            const scrollBtn = document.getElementById("scrollBtn");
            if (scrollBtn) {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    scrollBtn.classList.add("show");
                } else {
                    scrollBtn.classList.remove("show");
                }
            }
        };

        window.addEventListener("scroll", scrollFunction);

        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div id="scrollBtn">
            <button onClick={scrollToTop} className="d2c_scroll_btn cursor-pointer">
                <FaAngleUp />
            </button>
        </div>
    );
};

export default ScrollButton;