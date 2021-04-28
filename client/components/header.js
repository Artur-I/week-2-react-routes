import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="flex justify-around">
      <div id="repository-name">
        {props.user}
      </div>
      <div id="go-back">
        <Link to="/">Back to Search</Link>
      </div>
      <div id="go-repository-list">
        <Link to={`/${props.user}`}>Back to Repositories</Link>
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
