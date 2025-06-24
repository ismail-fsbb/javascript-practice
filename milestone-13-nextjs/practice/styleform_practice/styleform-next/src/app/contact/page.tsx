import React from 'react';
import ContactMain from '../../components/page/contact/contact-main';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact - Styleform Premium Fashion Website NextJS Template",
};
const page = () => {
    return (
        <>
            <ContactMain />
        </>
    );
};

export default page;