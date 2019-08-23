import PropTypes from "prop-types"
import React from "react"
import Nav from './nav/nav'
import Logo from './logo/logo'

const Header = ({ siteTitle }) => (
  <header>
    <div class="header-wrapper">
      <Logo />
      <Nav />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
