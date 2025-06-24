// video js
document.addEventListener('DOMContentLoaded', function() {
    function playVideo(videoId, thumbnailId, playButtonId) {

        document.getElementById(thumbnailId).style.display = 'none';

        document.getElementById(playButtonId).style.display = 'none';

        var videoElement = document.getElementById(videoId);

        var videoSrc = videoElement.src;
        var autoplaySrc = videoSrc.includes('?') ? videoSrc + "&autoplay=1" : videoSrc + "?autoplay=1";

        videoElement.src = autoplaySrc;

        videoElement.style.display = 'block';
    }
    document.getElementById('thumbnail1').addEventListener('click', function() {
        playVideo('video1', 'thumbnail1', 'playButton1');
    });

});