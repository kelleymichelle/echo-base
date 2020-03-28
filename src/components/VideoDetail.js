import './VideoDetail.css'
import React from 'react';

const VideoDetail = ({video}) => {
if(!video) {
    return <div>Waiting for Selection</div>
}

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div class="embed-responsive embed-responsive-21by9" style={{marginLeft: '2em'}}>
            <div className="ui embed" style={{padding: '5%'}}>
                <iframe style={{maxWidth: '640px', maxHeight: '360px', margin: '0px'}} class="embed-responsive-item" title="videoplayer" src={videoSrc} gesture="media" allow="encrypted-media" allowfullscreen/>
            </div>
            <div className="ui segment video-details">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;