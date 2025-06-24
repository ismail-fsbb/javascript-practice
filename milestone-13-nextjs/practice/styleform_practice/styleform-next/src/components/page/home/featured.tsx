import React from 'react';
import Image from 'next/image';

import AwardIcon1 from '@/assets/images/Award-Icon-1.png';
import AwardIcon2 from '@/assets/images/Award-Icon-2.png';
import AwardIcon3 from '@/assets/images/Award-Icon-3.png';
import AwardIcon4 from '@/assets/images/Award-Icon-4.png';

const Featured = () => {
    return (
        <section>
            <div className="container space-y-10 lg:space-y-16">
                <h2 className="d2c_section_sub_title text-center">Honors Styleform received</h2>

                <div className="d2c_awards_wrapper">
                    <div className="d2c_award_card">
                        <Image
                            src={AwardIcon1.src}
                            alt="Award Icon"
                            width={AwardIcon1.width}
                            height={AwardIcon1.height}
                            className="d2c_award_icon max-w-[114px] mx-auto"
                        />
                        <h4 className="d2c_award_card_title">Best Emerging Designer 2024 Fashion Critics Awards</h4>
                    </div>

                    <div className="d2c_award_card">
                        <Image
                            src={AwardIcon2.src}
                            alt="Award Icon"
                            width={AwardIcon2.width}
                            height={AwardIcon2.height}
                            className="d2c_award_icon max-w-[114px] mx-auto"
                        />
                        <h4 className="d2c_award_card_title">Featured in Top 10 Designers of the Year - Elle</h4>
                    </div>

                    <div className="d2c_award_card">
                        <Image
                            src={AwardIcon3.src}
                            alt="Award Icon"
                            width={AwardIcon3.width}
                            height={AwardIcon3.height}
                            className="d2c_award_icon max-w-[114px] mx-auto"
                        />
                        <h4 className="d2c_award_card_title">Winner of Sustainable Fashion Design Award</h4>
                    </div>

                    <div className="d2c_award_card">
                        <Image
                            src={AwardIcon4.src}
                            alt="Award Icon"
                            width={AwardIcon4.width}
                            height={AwardIcon4.height}
                            className="d2c_award_icon max-w-[114px] mx-auto"
                        />
                        <h4 className="d2c_award_card_title">Sustainable Fashion Pioneer Green Threads Awards</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;