import React from 'react'
import VideoItem from './VideoItem';
import './VideoList.css'

const VideoList = ({videos, onVideoSelect }) => {
    // props.videos
    const renderedList = videos.map(video => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    })

    return <div className="video-list scrollbar" id="style-2">
        {renderedList}
        </div>
}

export default VideoList;