import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import './App.css'
import RebelLogo from './rebellogo.png'
import Footer from './Footer'


class App extends React.Component {

    state = {
        videos: [], 
        selectedVideo: null
    }

    //sets default video(term) when page first loads
    componentDidMount() {
        this.onTermSubmit('cute kittens')
    }

    onTermSubmit = term => {
        console.log(term)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=10&q=${term}&safeSearch=moderate&key=AIzaSyDYcxst_BpKCqQLWlfIDv_-KzTjoK6Iep8`)
          .then(response => response.json())
          .then(result => 
            // console.log(result)
            this.setState({
              videos: result.items,
              selectedVideo: result.items[0]
            })
            )
        }

    onVideoSelect = (video) => {
        // console.log(video)
        this.setState({selectedVideo: video})

    }

    render() {
        return (
            <>
            <div className="jumbotron">
                <img alt="rebel logo" src={RebelLogo} width="10%"/>
                <h1 >Ekko Base</h1>
            </div>
                <SearchBar className="search" onTermSubmit={this.onTermSubmit} />
                
                <div className="d-flex flex-row justify-content-around">
                    <div className="">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="">
                        <VideoList 
                            onVideoSelect={this.onVideoSelect} 
                            videos={this.state.videos}
                        />
                    </div>   
                </div>
                <Footer/>
        </>
        )
    }
}

export default App;
