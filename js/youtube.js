// youtube.js

const channelId = 'UCeJ73ymlLhLctITwdi9iCVw';
let currentVideoId;
const output = document.getElementById('youtube');

// fetch(
//     `https://www.googleapis.com/youtube/v3/search?key=${
//         youtubeKey
//     }&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
// )
//     .then(raw => raw.json())
//     .then(res => {
//         buildVideoThumbnails(res.items);
//     });

const buildVideoThumbnails = (videos) => {
    const list = document.createElement('div');
    list.classList.add('list');
    videos.forEach(video => {
        const thumbnail = document.createElement('div');
        thumbnail.classList.add('thumbnail');
        thumbnail.style.backgroundImage = `url(${video.snippet.thumbnails.medium.url})`;
        thumbnail.style.height = `${video.snippet.thumbnails.medium.height / 2}px`;
        thumbnail.style.width = `${video.snippet.thumbnails.medium.width / 2}px`;
        thumbnail.addEventListener('click', changeVideo(video.id.videoId));
        list.appendChild(thumbnail);
    });

    output.appendChild(list);
}

const changeVideo = (newVideoId) => () => {
    currentVideoId = newVideoId;
    updateVideoPlayer();
}

const createVideoPlayer = () => {
    const player = document.createElement('iframe');
    player.id = 'youtube-player';
    player.width = '100%';
    player.height = '400';
    player.frameborder = '0';
    player.allow = 'autoplay; encrypted-media';
    player.allowfullscreen = true;

    output.appendChild(player);
}

const updateVideoPlayer = () => {
    const player = document.getElementById('youtube-player');
    if (player) {
        player.src = `https://www.youtube-nocookie.com/embed/${currentVideoId}?rel=0`;
    } else {
        createVideoPlayer();
        updateVideoPlayer();
    }
}

const setInitialVideo = (videos) => {
    currentVideoId = videos[0].id.videoId;
}

const setSectionHeading = (data) => {
    const headLink = document.createElement('a');
    headLink.href = `https://www.youtube.com/channel/${channelId}`;
    headLink.target = '_blank';
    const icon = document.createElement('i');
    icon.classList.add('fab', 'fa-2x', 'fa-youtube');
    headLink.appendChild(icon);

    const heading = document.createElement('h1');
    heading.textContent = `/ ${data.items[0].snippet.channelTitle}`;
    headLink.appendChild(heading);

    output.appendChild(headLink);
}

setInitialVideo(mockYoutubeData.items);
setSectionHeading(mockYoutubeData);
createVideoPlayer();
updateVideoPlayer();
buildVideoThumbnails(mockYoutubeData.items);