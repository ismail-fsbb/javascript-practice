import ClientWrapper from '@/components/shared/client-wrapper';
import React from 'react';
import AboutHero from './about-hero';
import AboutStory from './about-story';
import Cta from '@/components/shared/cta';
import AboutIdea from './about-idea';
import AboutTeam from './about-team';

const AboutIndex = () => {
    return (
        <ClientWrapper>
            <AboutHero />
            <AboutStory />
            <Cta />
            <AboutIdea />
            <AboutTeam />
        </ClientWrapper>
    );
};

export default AboutIndex;