import React from 'react';
import Image from 'next/image';

interface TeamCard {
    image: string;
    name: string;
    designation: string;
}

interface AboutTeamSubProps {
    teamCard: TeamCard;
}

const AboutTeamSub = ({ teamCard }: AboutTeamSubProps) => {
    return (
        <div className="swiper-slide py-10">
            <div className="d2c_team_card" data-aos="fade-up">
                <div className="d2c_team_image_wrapper relative">
                    <Image 
                        src={teamCard.image} 
                        alt="Expert image"
                        width={500}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                    <div className="bg-primary/15 absolute inset-0"></div>
                </div>
                <div className="text-center py-5">
                    <h4 className="d2c_expert_name">{teamCard.name}</h4>
                    <p className="d2c_expert_designation">{teamCard.designation}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutTeamSub;