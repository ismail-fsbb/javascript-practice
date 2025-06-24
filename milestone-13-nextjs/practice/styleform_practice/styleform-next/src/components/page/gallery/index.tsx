import ClientWrapper from '@/components/shared/client-wrapper';
import React from 'react';
import GalleryMoment from './gallery-moment';
import GalleryFashion from './gallery-fashion';
import GalleryVideo from './gallery-video';

const GalleryIndex = () => {
    return (
        <ClientWrapper>
            <GalleryMoment />
            <GalleryFashion />
            <GalleryVideo />
        </ClientWrapper>
    );
};

export default GalleryIndex;