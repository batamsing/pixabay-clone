import React from 'react'
import CardImage from './CardImage'
import Loading from './Loading';
import './Card.css';
import photologo from '../assets/camera-logo.png';
import illustrationlogo from '../assets/brush-logo.png';
import vectorlogo from '../assets/pen-logo.png';
import videologo from '../assets/video-logo.png';
import musiclogo from '../assets/music-logo.webp';
import soundlogo from '../assets/sound-logo.png';
import giflogo from '../assets/gif-logo.png';

// export const Main = ({images}) => {
  export const Main = (props) => {

const createColumns = (numColumns) => {
    const columns = Array.from({ length: numColumns }, (_, columnIndex) => (
      <div className="gallery-column" key={columnIndex}>
        {props.images.map((image, index) => (
          index % numColumns === columnIndex && (
            <CardImage
                key={index}
                image={image}
            />
          )
        ))}
      </div>
    ));

    return columns;
  };

  return (
    <div className='main-container'>
        <div className='display-f categorie-btn-container'>
          <button className='btn-categorie'><span>Home</span></button>
          <button className='btn-categorie'><img className='btn-icon' src={photologo}/><span>Photos</span></button>
          <button className='btn-categorie'><img className='btn-icon' src={illustrationlogo}/><span>Illustrations</span></button>
          <button className='btn-categorie'><img className='btn-icon' src={vectorlogo}/><span>Vectors</span></button>
          <button className='btn-categorie'><img className='btn-icon' src={videologo}/><span>Videos</span></button>
          <button className='btn-categorie'><img className='btn-icon' src={musiclogo}/><span>Music</span></button>
          <button className='btn-categorie'><img className='btn-icon' src={soundlogo}/><span>Sound Effects</span></button>
          <button className='btn-categorie'><img className='btn-icon' src={giflogo}/><span>GIFs</span></button>
        </div>

        <div className='select-type-image display-f'>
            <button name='iphone wallpaper'>iphone wallpaper</button>
            <button name='new year'>new year</button>
            <button name='background'>background</button>
            <button name='sky'>sky</button>
            <button name='winter'>winter</button>
            <button name='birds'>birds</button>
            <button name='food'>food</button>
            <button name='cat'>cat</button>
            <button name='love'>love</button>
            <button name='forest'>forest</button>
            <button name='computer'>computer</button>
        </div>

        {/* {props.isLoading ?
          <Loading /> : 
          <div className="gallery-container">
            {createColumns(4)}
          </div> } */}

          
          <div className="gallery-container" style={{justifyContent:'center'}}>
            {props.isLoading ? <Loading /> : createColumns(4)}
          </div> 

        {/* <div className="gallery-container">
            {createColumns(4)}
        </div> */}

        <div className='gallery-footer display-f justify-content-c position-abs'>
            <button className='btn btn-load-more'>Discover more</button>
        </div>
    </div>
  );
}
