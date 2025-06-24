import React from 'react';
import Image from 'next/image';
import endLine from '@/assets/images/End-Line.png';

interface AmazinCard {
    iconImage: string;
    title: string;
}

interface AmazingSubProps {
    amazinCard: AmazinCard;
}

const AmazingSub = ({ amazinCard }: AmazingSubProps) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-3 space-y-3" data-aos="fade-up">
            <div className="flex items-center gap-8 mb-8">
                <div>
                    <div className="w-[80px] h-[80px] lg:w-14 lg:h-14 xl:w-[112px] xl:h-[112px] rounded-md bg-white shadow-1 flex items-center justify-center p-4 lg:p-3 xl:p-4">
                        <Image 
                            src={amazinCard.iconImage} 
                            alt="Camera"
                            width={80}
                            height={80}
                            className="filter-7"
                        />
                    </div>
                </div>
                <div>
                    <h3 className="d2c_section_sub_title">{amazinCard.title}</h3>
                </div>
            </div>
            <p>Where fashions meets artistry. Here, each design tells a story of innovation, elegance, and individuality.</p>
            <p>Where fashions meets artistry. Here, each design tells a story of innovation</p>

            <Image 
                src={endLine.src} 
                alt="End Line"
                width={endLine.width}
                height={endLine.height}
                className="w-full"
            />
        </div>
    );
};

export default AmazingSub;