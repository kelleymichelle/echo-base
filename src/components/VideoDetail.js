import './VideoDetail.css'
import React from 'react';

const VideoDetail = ({video}) => {
if(!video) {
    return <div>Waiting for Selection</div>
}

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe title="videoplayer" src={videoSrc} width="640" height="360"/>
            </div>
            <div className="ui segment video-details">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;