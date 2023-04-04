import React from 'react'
import { navLinks } from './config'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand" href="#">Navbar</span>
                <button
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navLinks.map(({name, path}, index) => (
                            <NavLink 
                                className={'nav-link'}
                                key={index}
                                to={path}
                            >
                                {name}
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar