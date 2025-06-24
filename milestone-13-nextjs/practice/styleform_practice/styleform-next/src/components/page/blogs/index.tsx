import ClientWrapper from '@/components/shared/client-wrapper';
import React from 'react';
import BlogHero from './blog-hero';
import BlogAll from './blog-all';

const BlogIndex = () => {
    return (
        <ClientWrapper>
            <BlogHero />
            <BlogAll />
        </ClientWrapper>
    );
};

export default BlogIndex;