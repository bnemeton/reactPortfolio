import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="nav nav-tabs">
            <div className="nav-item about">
            <a className="nav-link" href="/about">
                About
            </a>
            </div>
            <div className="nav-item portfolio">
            <a className="nav-link" href="/portfolio">
                Portfolio
            </a>
            </div>
            <div className="nav-item contact">
            <a className="nav-link" href="/contact">
                Contact
            </a>
            </div>
            
        </nav>
    )
}
export default Navbar