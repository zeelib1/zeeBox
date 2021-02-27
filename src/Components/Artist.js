import React from 'react';

const Artist = ({artist}) => {
    if (!artist) return null;
    return (
        
        <div>
        <h3>{artist.artistName}</h3> 
        <p>{artist.genres.join(',')}</p> 
        <p>{artist.followers}</p>
        <img
         src={artist.images[0] && artist.images[0].url}
          alt='artist-profile'
          style={{
              width:200,
              height:200,
              borderRadius:100,
              objectFit:'cover'            
            }}

          /> 
        </div>
       
    );
}


export default Artist;