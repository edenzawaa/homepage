import React from 'react';
import '../index.css';
import Navigation from './Navigation';
import photo from './resources/model2-removebg.png';
import About from './About';



import {Link} from 'react-router-dom';
import Button from '../element components/Button';
import Carousel from '../element components/Carousel';
import photo1 from './resources/ChatGPT Image May 25, 2025, 08_55_20 PM.png';
import photo2 from './resources/model1.jpeg';




const Home = () => {
    return (
        <div id='Home'>
            <Navigation />
            <div className='home-container'>
                
                <div className='special-gothic-expanded-one-regular' id='home-text'>
                    <h1>Discover our latest collection of sustainable fashion. Shop now and make a difference!</h1>
                    <p>Elevate your style with our latest clothing catalog—where fashion meets versatility. Whether you're dressing up or keeping it casual, our collection offers timeless designs, premium fabrics, and effortless comfort for every occasion. Find your perfect fit and make a statement with confidence</p>
                    <div id='buttons-container'>
                        <button><Link to='/shop'>Shop Now!</Link></button>
                    </div>
                </div>
                <img src={photo} alt='Home Page Image' className='home-image'/> 

            </div>
            <div id='Home-section-info'>
                <Carousel photo1={photo1} photo2={photo2} />
            </div>
        </div>

    );
  };
  
export default Home;

