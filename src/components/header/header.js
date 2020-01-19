// import PropTypes from "prop-types"
import React from "react"
import Nav from '../nav/nav'
import Logo from '../logo/logo'

import './header.scss'

class Header extends React.Component{

  constructor(props){
    super(props);
    this.state={
      color: null
    }
  }

  listenScrollEvent = e => {
    if (window.scrollY > 100) {
      this.setState({color: '#c2cad0'})
    } else {
      this.setState({color: null})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render(){
    return(
      <header>
        <div className="header-wrapper" style={{background:this.state.color}}>
          <Logo />
          <Nav />
        </div>
      </header>
    )
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
