import ClientWrapper from '@/components/shared/client-wrapper';
import React from 'react';
import BlogContent from './blog-content';
import BlogDetailsCards from './blog-details-cards';

const BlogDetailsIndex = () => {
    return (
        <ClientWrapper>
            <BlogContent />
            <BlogDetailsCards />
        </ClientWrapper>
    );
};

export default BlogDetailsIndex;