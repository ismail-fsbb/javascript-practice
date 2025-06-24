import React from 'react';
import BlogIndex from '@/components/page/blogs';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blogs - Styleform Premium Fashion Website NextJS Template",
};
const page = () => {
    return (
        <BlogIndex />
    );
};

export default page;