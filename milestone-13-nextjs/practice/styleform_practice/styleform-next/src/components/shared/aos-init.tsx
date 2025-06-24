'use client'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInit = () => {
    useEffect(() => {
        const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, .d2c_award_card, .bg-cta-1, .shadow-gallery-image, .d2c_logo_wrapper, .d2c_social_link");

        elements.forEach(el => {
            if (el.classList.contains("no-animation")) {
                el.removeAttribute("data-aos");
                return;
            }

            const animations = ["fade-up", "fade-right", "fade-left"];
            let applied = false;

            animations.forEach(anim => {
                if (el.classList.contains(anim)) {
                    el.setAttribute("data-aos", anim);
                    applied = true;
                }
            });

            if (!applied) {
                el.setAttribute("data-aos", "fade-up");
            }
        });

        
        setTimeout(() => {
            AOS.init({
                mirror: true,
                once: false,
                delay: 0,
                duration: 700,
                offset: 20,
            });

            
            document.querySelectorAll('[data-aos]').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                    el.classList.add("aos-animate");
                }
            });
        }, 100);
    }, []);

    return null;
};

export default AOSInit;