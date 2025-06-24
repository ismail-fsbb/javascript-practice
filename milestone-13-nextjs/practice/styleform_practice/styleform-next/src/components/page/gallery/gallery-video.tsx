'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import VideoThumbnail from '@/assets/images/Video-thumbnail-1.jpg';

const GalleryVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsPlaying(true);
    };

    return (
        <section className="pt-5">
            <div className="container space-y-10 lg:space-y-16" data-aos="fade-up">
                <h2 className="d2c_section_title text-center">unique & Immersive works</h2>

                <div className="video-container rounded-lg h-[300px] md:h-[400px] xl:h-[650px] shadow-4 relative">
                    {!isPlaying ? (
                        <>
                            <Image
                                src={VideoThumbnail}
                                alt="Video Thumbnail"
                                className="rounded-lg cursor-pointer h-full w-full object-cover"
                                fill
                                onClick={handlePlayVideo}
                                priority
                            />
                            <div className="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        </>
                    ) : (
                        <iframe
                            className="video-iframe rounded-lg w-full h-full border-0"
                            src="https://www.youtube.com/embed/4-LKUbTmTU0?si=AWI9xACBUbadCwib"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </div>
        </section>
    );
};

export default GalleryVideo;