import React from 'react';
import ImageSlide from './image-slide';
import Arrow from './arrow';
import imgUrls from './images';
import './carousel.scss';

import Cat from '../../../content/images/cat.jpg';
import Bus from '../../../content/images/bus.jpg';
import Hero from '../../../content/images/hero-image.jpg'

const images = [
    '../../../content/images/bus.jpg',
    '../../../content/images/cat.jpg'
];

class Carousel extends React.Component{
    
    constructor(props){
        super(props);
        
        this.nextSlide = this.nextSlide;
        this.previousSlide = this.previouSlide;
        this.state = {
            currentIndex: 0,
        };
    }

    previousSlide(){
        let finalIndex = images.length - 1;
        let { currentIndex } = this.state;
        let reset = currentIndex === 0;
        let index = reset ? finalIndex : currentIndex - 1;

        this.setState({
            currentIndex: index
        })
    }

    nextSlide(){
        let finalIndex = images.length - 1;
        let { currentIndex } = this.state;
        let reset = currentIndex === finalIndex;
        let index = reset ? 0 : currentIndex + 1;

        this.setState({
            currentIndex: index
        })
    }

    render(){
        return(
            <div className="carousel">
                <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />/>
                <ImageSlide url={images[this.state.currentIndex]}/>
                <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9664;" />/>
            </div>
        )
    }

}

export default Carousel;