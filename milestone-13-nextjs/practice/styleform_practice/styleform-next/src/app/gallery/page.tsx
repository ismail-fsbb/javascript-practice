import React from 'react';
import GalleryIndex from '@/components/page/gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Gallery - Styleform Premium Fashion Website NextJS Template",
};

const page = () => {
    return (
        <GalleryIndex />
    );
};

export default page;