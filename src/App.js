import React, { useEffect, useState } from 'react';
import {Header} from './components/Header';
import {Main} from './components/Main';
import Article from './components/Article';
import Footer from './components/Footer'
import './App.css';

function App() {
  const [term, setTerm] = useState('flowers');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState('true');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
          setImages(data.hits);
          setIsLoading(false);
        })
        .catch(err => console.log(err))
  }, [term]);

console.log(images)

  function setImagesNull() {
    setImages([]);
    setIsLoading('true');
  }
  return (
    <div className="App">
      <Header
        searchText={(text)=>setTerm(text)}
        setImagesNull={setImagesNull}
      />
      {!isLoading && images.length === 0 && <h1 className='no-images-header'>No images found</h1>}
      {/* {isLoading ? <Loading /> : <Main images={images} />} */}
      <Main
        images={images}
        isLoading={isLoading}
      />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
