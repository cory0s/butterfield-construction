import PropTypes from "prop-types"
import React from "react"
import Nav from './nav/nav'

const Header = ({ siteTitle }) => (
  <header>
    <div class="header-wrapper">
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
