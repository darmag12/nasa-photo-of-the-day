import React from 'react';

const PhotoDisplay = (props) => {
   
    const display = props.photo.media_type === 'image' ? props.photo.url : null;
    return (
        <div>
            <h1>{props.photo.title}</h1>
            
            <img src={display} />
            
            {props.photo.media_type === 'video' ? <iframe title={props.photo.title} width="560" height="315" src={props.photo.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : null }
             <p>{props.photo.explanation}</p>

             </div>
    )
}

export default PhotoDisplay;