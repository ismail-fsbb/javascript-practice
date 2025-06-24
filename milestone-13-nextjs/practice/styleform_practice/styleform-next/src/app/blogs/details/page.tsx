import React from 'react';
import BlogDetailsIndex from '@/components/page/blog-details';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Details - Styleform Premium Fashion Website NextJS Template",
};
const page = () => {
    return (
        <BlogDetailsIndex />
    );
};

export default page;