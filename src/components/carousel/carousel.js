import React from 'react';
import ImageSlide from './image-slide';
import Arrow from './arrow';

class Carousel extends React.Component{
    
    constructor(props){
        super(props);
        
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previouSlide.bind(this);
        this.state = {
            currentIndex: 0,
        };
    }

    previousSlide(){
        let finalIndex = imgUrls.length - 1;
        let { currentIndex } = this.state;
        let reset = currentIndex === 0;
        let index = reset ? finalIndex : currentIndex - 1;

        this.setState({
            currentIndex: index
        })
    }

    nextSlide(){
        let finalIndex = imgUrls.length - 1;
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
                <ImageSlide url={imgUrls[this.state.currentIndex]}/>
                <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9664;" />/>
            </div>
        )
    }

}

export default Carousel;