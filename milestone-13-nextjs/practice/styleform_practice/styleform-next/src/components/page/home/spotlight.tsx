'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';
import videoThumbnail from '@/assets/images/Video-thumbnail.jpg';

const Spotlight = () => {
    useEffect(() => {
        const playVideo = (videoId: string, thumbnailId: string, playButtonId: string) => {
            const thumbnail = document.getElementById(thumbnailId);
            const playButton = document.getElementById(playButtonId);
            const videoElement = document.getElementById(videoId) as HTMLIFrameElement;

            if (thumbnail && playButton && videoElement) {
                thumbnail.style.display = 'none';
                playButton.style.display = 'none';

                const videoSrc = videoElement.src;
                const autoplaySrc = videoSrc.includes('?') ?
                    videoSrc + "&autoplay=1" :
                    videoSrc + "?autoplay=1";

                videoElement.src = autoplaySrc;
                videoElement.style.display = 'block';
            }
        };

        const thumbnail = document.getElementById('thumbnail1');
        if (thumbnail) {
            thumbnail.addEventListener('click', () => {
                playVideo('video1', 'thumbnail1', 'playButton1');
            });
        }

        // Cleanup event listener
        return () => {
            const thumbnail = document.getElementById('thumbnail1');
            if (thumbnail) {
                thumbnail.removeEventListener('click', () => {
                    playVideo('video1', 'thumbnail1', 'playButton1');
                });
            }
        };
    }, []);

    return (
        <section>
            <div className="container space-y-10 lg:space-y-16">
                <h2 className="d2c_section_title text-center">In the Spotlight</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-6 items-center">
                    <div className="space-y-4 text-center lg:text-left">
                        <h3 className="d2c_section_sub_title mb-10">Styleform redefines elegance through innovation</h3>
                        <p>This tagline reflects Styleform&apos;s identity as a brand that merges timeless elegance with cutting-edge design techniques.</p>
                        <p>It suggests a commitment to pushing boundaries in fashion while maintaining a sophisticated aesthetic.</p>
                    </div>

                    <div className="shadow-4 rounded-lg" data-aos="fade-up">
                        <div id="videoContainer" className="video-container rounded-lg h-[300px] md:h-[450px]">
                            <iframe
                                id="video1"
                                className="video-iframe rounded-lg w-full h-full border-0 hidden object-cover"
                                src="https://www.youtube.com/embed/Ty28DJrUaMs?si=IHlmrcxWgcCNn0yb"
                                allowFullScreen
                            ></iframe>
                            <Image
                                id="thumbnail1"
                                className="rounded-lg cursor-pointer h-[300px] md:h-[450px] w-full object-cover"
                                src={videoThumbnail.src}
                                alt="Custom Thumbnail"
                                width={800}
                                height={450}
                                priority
                            />
                            <div id="playButton1" className="play-button"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Spotlight;