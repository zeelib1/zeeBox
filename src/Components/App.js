import React, { Component } from "react";
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search'

class App extends Component {
state = {
         id: null,
         artistName : '',
         genres:[],
         images:[],
         tracks:[],
         followers:null
        };

componentDidMount() {
    this.searchArtist('Bob Dylan')
}

searchArtist =  artistQuery => {

    new Promise((resolve, reject) => {
      const artistData =  fetch(`https://spotify-api-wrapper.appspot.com/artist/${artistQuery}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.artists.total > 0){
                
            
            this.setState({
                id:data.artists.items[0].id,
                artistName:data.artists.items[0].name,
                genres:data.artists.items[0].genres,
                images:data.artists.items[0].images,
                followers:data.artists.items[0].followers.total,
                
            })
        }
        });
        resolve(artistData);
    }).then(()=> {

    fetch(`https://spotify-api-wrapper.appspot.com/artist/${this.state.id}/top-tracks`)
    .then(res => res.json())
    .then(data => this.setState({
        ...this.state,
        tracks:data
    }))
    }).catch(error => console.log(error));
   

}

 

    render() {
        return (
            <div>
                <h2>Zee's Music Box</h2>
            <Search searchArtist={this.searchArtist} />
            <Artist artist={this.state} /> 
            <Tracks tracks = {this.state.tracks.tracks} />               
            </div>
        );
    }
}

export default App;