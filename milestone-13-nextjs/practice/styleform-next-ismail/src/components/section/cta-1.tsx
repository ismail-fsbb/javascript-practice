import React from 'react';
import ctaImage from "@/assets/images/CTA-model-image.png";
import Image from 'next/image';

export default function Cta1() {
    return (
        <section className="p-5">
		<div className="bg-white/10 rounded-[10px] shadow-4 pt-20 max-w-full xl:max-w-[1460px] mx-auto" data-aos="fade-up">
			<div className="container">
				<div className="grid grid-cols-12 gap-6 items-center">
					<div className="col-start-1 col-span-12 md:col-span-7 space-y-4 pb-20 text-center md:text-left">
						<h2 className="d2c_section_title">Do You want to be a Model?</h2>
						<p>Where fashions meets artistry. Here, each design tells a story of innovation, elegance, and individuality.</p>
						<a href="#" className="d2c_btn mt-6">
							Contact us
						</a>
					</div>
	
					<div className="col-start-1 col-span-12 md:col-start-8 md:col-span-5 flex justify-end h-full">
                        <Image src={ctaImage.src} width={ctaImage.width}
                    height={ctaImage.height} className="filter-6" alt="ctaImage" />
					</div>
				</div>
			</div>
			
		</div>
	 </section>
    )
}