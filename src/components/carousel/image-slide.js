const ImageSlide = ({url}) => {
    const style = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };

      return(
          <div className="image-slide" style={style}>
          </div>
      )
}

export default ImageSlide;