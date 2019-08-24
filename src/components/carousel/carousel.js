import React from 'react';
import ImageSlide from './image-slide';
import Arrow from './arrow';

class Carousel extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
        };
    }

    render(){
        return(
            <div className="carousel">
                <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />/>
                <ImageSlide url={imgUrl}/>
                <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9664;" />/>
            </div>
        )
    }

}

export default Carousel;