import React from 'react';
import './Card.css';
import favouriteicon from'../assets/favourite-logo.png';
import collectionicon from '../assets/collection-logo.png';

const CardImage = ({image}) => {
  const tags = image.tags.split(",");
  console.log(tags);
  return (
    <div className='gallery-image card'>
      <img src={image.webformatURL} className='gallery-image' />
      <div className='add-container position-abs display-f tags'>
        
      </div>
      <div className='tags-container position-abs display-f tags'>
        {tags.map(tag => {
          return <a key={tag} className="tag">{tag}{' '}</a>;
      })}
      </div>
    </div>

      // {/* <div className='card'>
          
      //     <h3>Image Title</h3>
      // </div> */}
    
  )
}

export default CardImage