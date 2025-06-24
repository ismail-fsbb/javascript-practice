import React from 'react';

import postImage1 from '@/assets/images/post-image-1.jpg';
import postImage2 from '@/assets/images/post-image-2.jpg';
import postImage3 from '@/assets/images/post-image-3.jpg';
import postImage4 from '@/assets/images/post-image-4.jpg';
import postImage5 from '@/assets/images/post-image-5.jpg';
import postImage6 from '@/assets/images/post-image-6.jpg';
import postImage7 from '@/assets/images/post-image-7.jpg';
import postImage8 from '@/assets/images/post-image-8.jpg';
import postImage9 from '@/assets/images/post-image-9.jpg';
import postImage10 from '@/assets/images/post-image-10.jpg';
import postImage11 from '@/assets/images/post-image-11.jpg';
import postImage12 from '@/assets/images/post-image-12.jpg';

import BlogCard from '@/components/shared/blog-card';

const blogCards = [
    {
        image: postImage1.src,
        title: "The Chaotic & Creative Process of Fashion Photography"
    },
    {
        image: postImage2.src,
        title: "Rent Jean Legacy's transform your interiors"
    },
    {
        image: postImage3.src,
        title: "How Fashion Translates Trends to the Masses"
    },
    {
        image: postImage4.src,
        title: "10 Trends to Watch in Modern Studio Design"
    },
    {
        image: postImage5.src,
        title: "The Power of Details: How Accessories Define a Look"
    },
    {
        image: postImage6.src,
        title: "How to Blend Timeless Elegance with Modern Trends"
    },
    {
        image: postImage7.src,
        title: "How Fabric Shapes the Story of Every Design"
    },
    {
        image: postImage8.src,
        title: "Dressing for Confidence: The Psychology of Fashion Choices"
    },
    {
        image: postImage9.src,
        title: "Runway Diaries: Highlights from Our Latest Showcase"
    },
    {
        image: postImage10.src,
        title: "Choosing the Perfect Palette for Your Wardrobe"
    },
    {
        image: postImage11.src,
        title: "The Role of Texture in Modern Fashion Design"
    },
    {
        image: postImage12.src,
        title: "How Street Style Influences High-Fashion Designs"
    }
]

const BlogAll = () => {
    return (
        <section className="py-6 md:py-10 xl:py-20">
            <div className="container">
                <div className="flex flex-wrap">
                    {
                        blogCards.map((item, index) => (
                            <BlogCard key={index} cardItem={item}></BlogCard>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default BlogAll;