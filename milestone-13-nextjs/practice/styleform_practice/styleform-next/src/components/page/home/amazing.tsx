
import React from 'react';

import CameraIcon from '@/assets/images/Camera-Icon.png';
import IdeaIcon from '@/assets/images/Idea-Icon.png';
import EventIcon from '@/assets/images/Event-Icon.png';
import AmazingSub from './amazing-sub';


const amazingCards = [
    {
        iconImage: CameraIcon.src,
        title: 'Photo Shooting',
        description: ["Where fashions meets artistry. Here, each design tells a story of innovation, elegance, and individuality.", "Where fashions meets artistry. Here, each design tells a story of innovation"],
    },
    {
        iconImage: IdeaIcon.src,
        title: 'Photo Concept',
        description: ["From timeless classics to bold trends, style evolves with every season, shaping the way we express.", "Whether it's the elegance of a tailored suit, the effortless charm of street wear"],
    },
    {
        iconImage: EventIcon.src,
        title: 'Branding event',
        description: ["Fashion is more than just clothing; it's a statement, a reflection of personality, culture, and creativity.", "Where fashions meets creativity. Here, each design tells a story of innovation"],
    },
]

const Amazing = () => {
    return (
        <section>
            <div className="container space-y-10 lg:space-y-16">
                <h2 className="d2c_section_title text-center">Get Amazing things</h2>
                <div className="flex flex-wrap justify-center">
                    {
                        amazingCards.map((card, index) =>
                            (
                                <AmazingSub amazinCard={card} key={index}></AmazingSub>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Amazing;