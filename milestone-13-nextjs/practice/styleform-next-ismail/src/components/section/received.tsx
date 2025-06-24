import React from 'react';
import Image from 'next/image';
import receivedIcon1 from "../../../public/assets/images/Award-Icon-1.png";
import receivedIcon2 from "../../../public/assets/images/Award-Icon-2.png";
import receivedIcon3 from "../../../public/assets/images/Award-Icon-3.png";
import receivedIcon4 from "../../../public/assets/images/Award-Icon-3.png";


export default function Received() {
    const receivedContents = [
        {
            icon: receivedIcon1.src,
            title: "Best Emerging Designer 2024 Fashion Critics Awards",
        },
        {
            icon: receivedIcon2.src,
            title: "Featured in Top 10 Designers of the Year – Elle",
        },
        {
            icon: receivedIcon3.src,
            title: "Winner of Sustainable Fashion Design Award",
        },
        {
            icon: receivedIcon4.src,
            title: "Sustainable Fashion Pioneer Green Threads Awards",
        }
    ];
  return (
    <section>
		<div className="container space-y-10 lg:space-y-16">
			<h2 className="d2c_section_sub_title text-center">Honors Styleform received</h2>

			<div className="d2c_awards_wrapper">
                {receivedContents.map((item, index) => (
                    <div key={index} className="d2c_award_card">
                        <Image
                            src={item.icon}
                            alt="Award Icon"
                            layout="intrinsic"
                            width={receivedIcon1.width}
                            height={receivedIcon1.height}
                            className="d2c_award_icon max-w-[114px] mx-auto"
                            data-aos="fade-in"
                        />
                        <h4 className="d2c_award_card_title">{item.title}</h4>
                    </div>
                ))}
			</div>
		</div>
	</section>
  )
}