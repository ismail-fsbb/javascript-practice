'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import ExpertImage1 from '@/assets/images/Expert-Image-1.jpg';
import ExpertImage2 from '@/assets/images/Expert-Image-2.jpg';
import ExpertImage3 from '@/assets/images/Expert-Image-3.jpg';
import ExpertImage4 from '@/assets/images/Expert-Image-4.jpg';
import ExpertImage5 from '@/assets/images/Expert-Image-5.jpg';
import ExpertImage6 from '@/assets/images/Expert-Image-6.jpg';
import AboutTeamSub from './about-team-sub';

const teamCardItem =[
    {
        image: ExpertImage1.src,
        name: "Jenny Wilson",
        designation: "Editorial Photographer",
    },
    {
        image: ExpertImage2.src,
        name: "Cartier Bresson",
        designation: "Cartier Bresson",
    },
    {
        image: ExpertImage3.src,
        name: "Kristin Watson",
        designation: "Lead Photographer",
    },
    {
        image: ExpertImage4.src,
        name: "Bessie Cooper",
        designation: "Commercial Photographer",
    },
    {
        image: ExpertImage5.src,
        name: "Ralph Edwards",
        designation: "Fashion Photographer",
    },
    {
        image: ExpertImage6.src,
        name: "Jerome Bell",
        designation: "Jr. Photographer",
    },
    {
        image: ExpertImage1.src,
        name: "Tommy Wilson",
        designation: "Jr. Editorial Photographer",
    },
    {
        image: ExpertImage4.src,
        name: "Jenny Sagor",
        designation: "Software Engineer",
    },
]

const AboutTeam = () => {
    return (
        <section>
            <div className="container">
                <h2 className="d2c_section_title text-center pb-8 md:pb-10 lg:pb-16">Our talented creative Experts</h2>
            </div>

            <Swiper
                modules={[Autoplay]}
                className='d2c_team_slider'
                slidesPerView={6}
                loop={true}
                speed={4000}
                autoplay={{
                    delay: 0,
                }}
                spaceBetween={40}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                    1600: {
                        slidesPerView: 5,
                    },
                    1920: {
                        slidesPerView: 6,
                    },
                }}
            >
                {
                    teamCardItem.map((item, index) => (
                        <SwiperSlide key={index}>
                            <AboutTeamSub key={index} teamCard={item}></AboutTeamSub>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {/* <div className="swiper ">
                <div className="swiper-wrapper">
                    
                </div>
            </div> */}
        </section>
    );
};

export default AboutTeam;