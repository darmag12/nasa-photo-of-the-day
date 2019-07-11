import React from 'react';


const PhotoDisplay = (props) => {
   
    const display = props.photo.media_type === 'image' ? props.photo.url : null;
    // console.log(props.photo.url)
    return (
        <div>
            <h2>{props.photo.title}</h2>
            
            {/* <img width='70%' height='400' src={display} alt=''/> */}
            
            {props.photo.media_type === 'video' ? <iframe title={props.photo.title} width="70%" height="400" src={props.photo.url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> : <img width='70%' height='400' src={display} alt=''/> }
            
             <p>{props.photo.explanation}</p>

             </div>
    )
}

export default PhotoDisplay;