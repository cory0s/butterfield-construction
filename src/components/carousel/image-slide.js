import React from 'react';
// import Cat from '../../../content/images/cat.jpg';
import Cat from '../../../content/images/cat.jpg';
let cat = '../../../content/images/cat.jpg';

const ImageSlide = ({url}) => {
    let style = {
        backgroundImage: "url(" +Cat+ ")",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };

      return(
          <div className="image-slide" style={style}>
          </div>
      )
}

export default ImageSlide;