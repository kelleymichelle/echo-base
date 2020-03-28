import './VideoDetail.css'
import React from 'react';

const VideoDetail = ({video}) => {
if(!video) {
    return <div>Waiting for Selection</div>
}

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <>
        <div class="embed-responsive embed-responsive-21by9" style={{marginLeft: '2em'}}>
            <div style={{margin: '5%'}}>
                <iframe style={{maxWidth: '640px', maxHeight: '360px', margin: '0px'}} className="embed-responsive-item" title="videoplayer" src={videoSrc} gesture="media" allow="encrypted-media" allowfullscreen/>
            </div>
            
        </div>
        <div className="video-details" style={{marginTop: '5%', marginLeft: '2em'}}>
            <h5>{video.snippet.title}</h5>
            <p>{video.snippet.description}</p>
        </div>
    </>
    )
}

export default VideoDetail;