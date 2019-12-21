import React from 'react'
import '../NavBar/NavBar.scss'
import logo from '../../img/logo.png'

export default function NavBar() {
    return (
        <nav className="navbar">
      <img src={logo} alt="Lori logo" className="logo"/>
      <ul className="nav-links">
      <li><a href="/" className="nav-link">home</a></li>
      <li><a href="/" className="nav-link">about</a></li>
      <li><a href="/" className="nav-link active">tours</a></li>
      </ul>

        </nav>
    )
}
