import React from 'react';
import searchlogo from '../assets/search.jpg';
import logo from '../assets/logo-long.png';

export const Header = (props) => {
    const [text, setText] = React.useState('');

    const handleInputChange = (e) => setText(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault();
        props.searchText(text);
        props.setImagesNull();
        document.getElementById('searchInput').blur();
    }

  return (
    <div className='header-container'>
        <header className='navbar-header justify-sb'>
            <img src={logo} alt='logo' className='logo' />
            <nav className='navbar'>
                <ul>
                    <li>Explore</li>
                    <li>Log In</li>
                    <li>Upload</li>
                </ul>
            </nav>
        </header>
        <div className='header max-w700'>
            <h1>Stunning royalty-free images & royalty-free stock</h1>
            <p>Over 4.3 million+ high quality stock images, videos and music shared by our
                talented community.
            </p>
            <form className='search-container rounded-high no-outline' onSubmit={onSubmit}>
                <img src={searchlogo} className='search-logo' />
                <input
                    type='text'
                    id='searchInput'
                    onChange={handleInputChange}
                    placeholder='Search images'
                    className='search-input'
                    value={text}
                />
            </form>
        </div>
        <div className='header-footer justify-sb margin-t30'>
                <p>Read more about the Content Liscense</p>
                <p>Free image by TheWorldOfPicture</p>
            </div>
    </div>
  )
}
