import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardImageType {
    cardItem: {
        image: string;
        title: string;
    };
}


const BlogCard = ({ cardItem }: BlogCardImageType) => {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <Link href="/blogs/details" className="block space-y-7">
                <div className="shadow-blog-image">
                    <Image 
                        src={cardItem.image} 
                        alt="Post Image"
                        width={500}
                        height={300}
                        className="w-full h-auto mix-blend-luminosity"
                    />
                </div>
                <h5 className="d2c_blog_title">{cardItem.title}</h5>
            </Link>
        </div>
    );
};

export default BlogCard;