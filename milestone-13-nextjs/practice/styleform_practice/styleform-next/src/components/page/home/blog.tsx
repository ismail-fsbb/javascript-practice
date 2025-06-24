
import React from 'react';

import PostImage1 from "@/assets/images/post-image-1.jpg";
import PostImage2 from "@/assets/images/post-image-2.jpg";
import PostImage3 from "@/assets/images/post-image-3.jpg";
import BlogCard from '@/components/shared/blog-card';

const blogCard = [
   {
      image: PostImage1.src,
      title: "The Chaotic & Creative Process of Fashion Photography",
   },
   {
      image: PostImage2.src,
      title: "Rent Jean Legacy's transform your interiors",
   },
   {
      image: PostImage3.src,
      title: "How Fashion Translates Trends to the Masses",
   },
]

const Blog = () => {
    return (
        <section className="py-10 md:py-20">
		<div className="container space-y-10 lg:space-y-16">
			<h2 className="d2c_section_title text-center">Blog & Articles</h2>
			<div className="flex flex-wrap justify-center">
				{
                    blogCard.map((item, index) => (
                        <BlogCard key={index} cardItem={item}></BlogCard>
                    ))
                }
			</div>
		</div>
	</section>
    );
};

export default Blog;