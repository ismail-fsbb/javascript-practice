import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import FeatureImage from '@/assets/images/feature-image.jpg';

const BlogContent = () => {
    return (
        <section className="pb-0">
            <div className="container space-y-10">
                <h2 className="text-2xl-1 md:text-[38px] lg:text-5xl xl:text-6xl-1 md:w-[90%] text-shadow-3 font-bold uppercase">Electric lamp illuminates modern domestic Studio</h2>
                <div className="[box-shadow:rgba(76,205,226,0.5)_6px_6px_20px_0px,_rgba(196,72,255,0.5)_-6px_-6px_20px_0px] py-[100px] md:py-[200px] xl:py-[300px] relative h-full">
                    <Image 
                        src={FeatureImage.src} 
                        alt="Feature image"
                        fill
                        priority
                        sizes="100vw"
                        className="mix-blend-luminosity absolute inset-0 -z-10 object-cover"
                    />
                </div>

                <div className="space-y-6 w-full lg:w-[95%] xl:w-[85%] mx-auto d2c_blog_content">
                    <p>Every piece at Styleform begins as more than just a design—it starts as an idea, a story waiting to be told through fabric, texture, and silhouette. In this blog, we take you behind the scenes of how our latest collection came to life, from inspiration to the final reveal.</p>

                    <div>
                        <h4 className="d2c_content_title">1. Inspiration</h4>
                        <p>The collection draws from the vibrant energy of urban landscapes and the fluidity of natural elements. Merging sharp architectural lines with soft, flowing textures, the designs embody a harmonious blend of contrasts.</p>
                    </div>

                    <div>
                        <h4 className="d2c_content_title">2. Concept Development</h4>
                        <p>The creative process begins with brainstorming sessions, mood boards, and sketching. &ldquo;We wanted to create something that speaks to individuality while maintaining the elegance our brand is known for,&rdquo; says our lead designer.</p>
                    </div>

                    <div>
                        <h4 className="d2c_content_title">3. Material Selection</h4>
                        <p>Choosing the right materials is crucial. For this collection, we opted for sustainable fabrics like organic silk &amp; recycled polyester, ensuring each piece aligns with our eco-conscious philosophy.</p>
                    </div>

                    <div>
                        <h4 className="d2c_content_title">4. Design Process</h4>
                        <p>From preliminary sketches to detailed illustrations, each design goes through multiple iterations. 3D modeling tools and hand-sewn prototypes are used to perfect every detail. &ldquo;It&apos;s about finding that perfect balance between functionality and artistry,&rdquo; explains one of our pattern makers.</p>
                    </div>

                    <div>
                        <h4 className="d2c_content_title">Conclusion</h4>
                        <p>Crafting a collection is not just about the final product; it&apos;s about the journey, the passion, and the attention to detail at every stage. At Styleform, each design reflects our mission to create fashion that resonates on a personal and universal level.</p>
                        <p>&ldquo;Fashion is an evolving dialogue between the designer and the wearer,&rdquo; concludes the blog.</p>
                    </div>
                </div>
            </div>

            <div className="mt-10 border-y border-white/15 py-6 md:py-8 xl:py-12">
                <div className="container">
                    <div className="flex items-center gap-4 w-full lg:w-[95%] xl:w-[85%] mx-auto">
                        <h4 className="d2c_content_title mb-0">share:</h4>
                        <div className="space-x-4">
                            <Link href="#" className="d2c_social_link">
                                <FaFacebookF />
                            </Link>
                            <Link href="#" className="d2c_social_link">
                                <FaLinkedinIn />
                            </Link>
                            <Link href="#" className="d2c_social_link">
                                <FaXTwitter />
                            </Link>
                            <Link href="#" className="d2c_social_link">
                                <FaInstagram />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogContent;