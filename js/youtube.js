// youtube.js

const channelId = 'UCeJ73ymlLhLctITwdi9iCVw';
const currentVideoId;
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
        // thumbnail.style.backgroundImage = video.snippet.thumbnails.medium.url;
        const anchor = document.createElement('a');
        anchor.textContent = video.snippet.title;
        anchor.href = `https://www.youtube.com/watch?v=${video.id.videoId}`

        thumbnail.appendChild(anchor);
        list.appendChild(thumbnail);
    });

    output.appendChild(list);
}

buildVideoThumbnails(mockYoutubeData.items);