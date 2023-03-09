import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'


const Header = () => {

  const location = useLocation()
  const [link,setLink] = useState(location?.pathname)

  return (
    <div className="navbar-top">
        <div>
            {/* <img src={logo} alt="" /> */}
            <h2>logo here</h2>
        </div>
        <div className="navbar-collapse">
            <ul className='nav-list'>
              <li><Link className={link === "/" ? "nav-item active" : "nav-item"} to={"/"}>Home</Link> </li>
              <li><Link className={link === "/techer" ? "nav-item active" : "nav-item"} to={"/techer"}>Techear</Link> </li>
              <li><Link className={link === "/about" ? "nav-item active" : "nav-item"} to={"/about"}>About</Link> </li>
              <li><Link className={link === "/blog" ? "nav-item active" : "nav-item"} to={"/blog"}>Blog</Link> </li>
              <li><Link className={link === "/contact" ? "nav-item active" : "nav-item"} to={"/contact"}>Contact</Link> </li>
            </ul>
        </div>


        
    </div>
  )
}

export default Header