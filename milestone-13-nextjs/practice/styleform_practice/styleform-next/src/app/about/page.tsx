import AboutIndex from '@/components/page/about';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About - Styleform Premium Fashion Website NextJS Template",
};
const page = () => {
    return (
        <AboutIndex />
    );
};

export default page;