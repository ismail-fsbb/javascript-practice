import React from 'react';
import aboutImage from "../../../public/assets/images/about-couple-blue.png";
import Image from 'next/image';

export default function About() {
    return (
        <section>
		<div className="container">
			<div className="grid lg:grid-cols-2 gap-5 items-center">
				<div className="space-y-6 pr-5">
					<h2 className="d2c_section_title no-animation">styleform about</h2>
					<p>Welcome Styleform, where fashion meets artistry. Here, each design tells a story of innovation, elegance, and individuality.</p>
					<p>Styleform, we believe in crafting pieces that resonate with timeless beauty while embracing contemporary trends. Our journey is fuelled by passion, precision, & vision redefine style.</p>

					<div className="flex gap-5">
						<div>
							<div className="d2c_small_rounded_shape filter-custom-4"></div>
						</div>
						<div>
							<h4 className="text-shadow-5 text-xl font-bold leading-none mb-2">Design Philosophy</h4>
							<p>Styleform celebrates the fusion of art and fashion, blending modern trends with timeless elegance.</p>
						</div>
					</div>

					<div className="flex gap-5">
						<div>
							<div className="d2c_small_rounded_shape filter-custom-4"></div>
						</div>
						<div>
							<h4 className="text-shadow-5 text-xl font-bold leading-none mb-2">Design Philosophy</h4>
							<p>Styleform celebrates the fusion of art and fashion, blending modern trends with timeless elegance.</p>
						</div>
					</div>

				</div>
				<div className="bg-about bg-cover bg-no-repeat rounded-[40px] flex justify-center pt-20">
                <Image
                    src={aboutImage.src}
                    alt="Couple Model"
                    layout="intrinsic"
                    width={aboutImage.width}
                    height={aboutImage.height}
                    className="filter-custom-3"
                    data-aos="fade-in"
                />

				</div>
			</div>
		</div>
	</section>
    );
}