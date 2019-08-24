const Arrow = ({direction, clickFunction, glyph}) => {
    const style = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      };

      return(
          <div 
          className={`arrow ${direction}`}
          onClick={clickFunction}>
            {glyph}
          </div>
      )
}

export default Arrow;