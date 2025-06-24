import React from 'react';
import About from "@/components/page/home/about";
import Amazing from "@/components/page/home/amazing";
import Blog from "@/components/page/home/blog";
import BrandLogo from "@/components/page/home/brand-logo";
import Contact from "@/components/page/home/contact";
import Cta from "@/components/shared/cta";
import CtaTwo from "@/components/page/home/cta-two";
import Featured from "@/components/page/home/featured";
import Gallery from "@/components/page/home/gallery";
import Hero from "@/components/page/home/hero";
import ImageSlider from "@/components/page/home/image-slider";
import Spotlight from "@/components/page/home/spotlight";
import Testimonial from "@/components/page/home/testimonial";
import ClientWrapper from "@/components/shared/client-wrapper";

const HomeIndex = () => {
    return (
        <ClientWrapper>
            <Hero />
            <ImageSlider />
            <About />
            <Amazing />
            <Cta />
            <Gallery />
            <Spotlight />
            <Featured />
            <BrandLogo />
            <CtaTwo />
            <Testimonial />
            <Blog />
            <Contact />
        </ClientWrapper>
    );
};

export default HomeIndex;