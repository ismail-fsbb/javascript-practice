import React from 'react';
import Image from 'next/image';

import amazingImage1 from "@/assets/images/Camera-Icon.png";
import amazingImage2 from "@/assets/images/End-Line.png";
import amazingImage3 from "@/assets/images/Idea-Icon.png";
import amazingImage4 from "@/assets/images/Event-Icon.png";

export default function Amazing() {
	const amazingContents = [
		{
			image: amazingImage1,
			title: "Photo Shooting",
			description1: "Where fashions meets artistry. Here, each design tells a story of innovation, elegance, and individuality.",
			description2: "Where fashions meets artistry. Here, each design tells a story of innovation"
		},
		{
			image: amazingImage3,
			title: "Photo Concept",
			description1: "From timeless classics to bold trends, style evolves with every season, shaping the way we express.",
			description2: "Whether it's the elegance of a tailored suit, the effortless charm of street wear"
		},
		{
			image: amazingImage4,
			title: "Branding Event",
			description1: "Fashion is more than just clothing; it's a statement, a reflection of personality, culture, and creativity.",
			description2: "Where fashions meets artistry. Here, each design tells a story of innovation"
		}
	];

	const commonColClass = "col-span-12 md:col-span-6 lg:col-span-4 space-y-3";
	const columnStartClasses = [
		"col-start-1",
		"md:col-start-7 lg:col-start-5",
		"md:col-start-4 lg:col-start-9"
	];

	return (
		<section>
			<div className="container space-y-10 lg:space-y-16">
				<h2 className="d2c_section_title text-center">Get Amazing things</h2>
				<div className="grid grid-cols-12 gap-6 xl:gap-10">
					{amazingContents.map((item, index) => (
						<div key={index} className={`${columnStartClasses[index]} ${commonColClass}`} data-aos="fade-up">
							<div className="flex items-center gap-8 mb-8">
								<div>
									<div className="w-[80px] h-[80px] lg:w-14 lg:h-14 xl:w-[112px] xl:h-[112px] rounded-md bg-white shadow-1 flex items-center justify-center p-4 lg:p-3 xl:p-4">
										<Image
											src={item.image}
											width={item.image.width}
											height={item.image.height}
											className="filter-7"
											alt={item.title}
										/>
									</div>
								</div>
								<div>
									<h3 className="d2c_section_sub_title">{item.title}</h3>
								</div>
							</div>
							<p>{item.description1}</p>
							<p>{item.description2}</p>
							<Image
								src={amazingImage2}
								width={amazingImage2.width}
								height={amazingImage2.height}
								className="w-full"
								alt="End Line"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
