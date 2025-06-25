import React from "react"
import Image from 'next/image';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import GalleryImage1 from '@/assets/images/gallery-image/Gallery-Image-1.jpg';
import GalleryImage5 from '@/assets/images/gallery-image/Gallery-Image-5.jpg';
import GalleryImage6 from '@/assets/images/gallery-image/Gallery-Image-6.jpg';
import GalleryImage2 from '@/assets/images/gallery-image/Gallery-Image-2.jpg';
import GalleryImage7 from '@/assets/images/gallery-image/Gallery-Image-7.jpg';
import GalleryImage3 from '@/assets/images/gallery-image/Gallery-Image-3.jpg';
import GalleryImage8 from '@/assets/images/gallery-image/Gallery-Image-8.jpg';
import GalleryImage4 from '@/assets/images/gallery-image/Gallery-Image-4.jpg';
import GalleryImage9 from '@/assets/images/gallery-image/Gallery-Image-9.jpg';
import GalleryImage10 from '@/assets/images/gallery-image/Gallery-Image-10.jpg';
import GalleryImage11 from '@/assets/images/gallery-image/Gallery-Image-11.jpg';

export default function Gallery() {
    return (
        <section>
		<div className="container space-y-10 lg:space-y-16">
			<h2 className="d2c_section_title text-center">Gallery</h2>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 xl:gap-6">
				
				<div className="space-y-4 xl:space-y-6">
					<div className="shadow-gallery-image">
						<a data-fancybox="gallery" className="block w-full h-[250px] md:h-[165px] lg:h-[240px] bg-cover bg-center bg-no-repeat transition-all mix-blend-luminosity" 
							href="./public/assets/images/gallery-image/Gallery-Image-1.jpg" style="background-image: url('./public/assets/images/gallery-image/Gallery-Image-1.jpg');">
						</a>
					</div>
					<div className="shadow-gallery-image">
						<a data-fancybox="gallery" className="block w-full h-[250px] md:h-[165px] lg:h-[270px] bg-cover bg-center bg-no-repeat transition-all" 
							href="./public/assets/images/gallery-image/Gallery-Image-5.jpg" style="background-image: url('./public/assets/images/gallery-image/Gallery-Image-5.jpg');">
						</a>
					</div>
					<div className="shadow-gallery-image">
						<a data-fancybox="gallery" className="block w-full h-[250px] md:h-[165px] lg:h-[250px] bg-cover bg-center bg-no-repeat transition-all" href="./public/assets/images/gallery-image/Gallery-Image-6.jpg" style="background-image: url('./public/assets/images/gallery-image/Gallery-Image-6.jpg');">
						</a>
					</div>
				</div>
				
				<div className="space-y-4 xl:space-y-6">
					<div className="shadow-gallery-image">
						<a data-fancybox="gallery" className="block w-full h-[250px] md:h-[255px] lg:h-[449px] bg-cover bg-center bg-no-repeat transition-all shadow-gallery-image mix-blend-luminosity" href="./public/assets/images/gallery-image/Gallery-Image-2.jpg" style="background-image: url('./public/assets/images/gallery-image/Gallery-Image-2.jpg');">
						</a>
					</div>
					<div className="shadow-gallery-image">
						<a data-fancybox="gallery" className="block w-full h-[250px] md:h-[255px] lg:h-[335px] bg-cover bg-center bg-no-repeat transition-all 	shadow-gallery-image mix-blend-luminosity" href="./public/assets/images/gallery-image/Gallery-Image-7.jpg" style="background-image: url('./public/assets/images/gallery-image/Gallery-Image-7.jpg');">
						</a>
					</div>
				</div>
				
				<div className="space-y-4 xl:space-y-6">
					<div className="shadow-gallery-image">
						<a data-fancybox="gallery" className="block w-full h-[250px] md:h-[255px] lg:h-[335px] bg-cover bg-center bg-no-repeat transition-all 	shadow-gallery-image mix-blend-luminosity" href="./public/assets/images/gallery-image/Gallery-Image-3.jpg" style="background-image: url('./public/assets/images/gallery-image/Gallery-Image-3.jpg');">
						</a>
					</div>
					<div className="shadow-gallery-image">
						<a data-fancybox="gallery" className="block w-full h-[250px] md:h-[255px] lg:h-[449px] bg-cover bg-center bg-no-repeat transition-all 	shadow-gallery-image mix-blend-luminosity" href="./public/assets/images/gallery-image/Gallery-Image-8.jpg" style="background-image: url('./public/assets/images/gallery-image/Gallery-Image-8.jpg');">
						</a>
					</div>
				</div>
				
				<div className="space-y-4 xl:space-y-6">
					<div className="shadow-gallery-image">
						<a data-fancybox="gallery" className="block w-full h-[250px] md:h-[120px] lg:h-[184px] bg-cover bg-center bg-no-repeat transition-all 	shadow-gallery-image mix-blend-luminosity" href="./public/assets/images/gallery-image/Gallery-Image-4.jpg" style="background-image: url('./public/assets/images/gallery-image/Gallery-Image-4.jpg');">
						</a>
					</div>
					<div className="shadow-gallery-image">
						<a data-fancybox="gallery" className="block w-full h-[250px] md:h-[120px] lg:h-[184px] bg-cover bg-center bg-no-repeat transition-all 	shadow-gallery-image mix-blend-luminosity" href="./public/assets/images/gallery-image/Gallery-Image-9.jpg" style="background-image: url('./public/assets/images/gallery-image/Gallery-Image-9.jpg');">
						</a>
					</div>
					<div className="shadow-gallery-image">
						<a data-fancybox="gallery" className="block w-full h-[250px] md:h-[120px] lg:h-[184px] bg-cover bg-center bg-no-repeat transition-all 	shadow-gallery-image mix-blend-luminosity" href="./public/assets/images/gallery-image/Gallery-Image-10.jpg" style="background-image: url('./public/assets/images/gallery-image/Gallery-Image-10.jpg');">
						</a>
					</div>
					<div className="shadow-gallery-image">
						<a data-fancybox="gallery" className="block w-full h-[250px] md:h-[120px] lg:h-[184px] bg-cover bg-center bg-no-repeat transition-all 	shadow-gallery-image mix-blend-luminosity" href="./public/assets/images/gallery-image/Gallery-Image-11.jpg" style="background-image: url('./public/assets/images/gallery-image/Gallery-Image-11.jpg');">
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
}