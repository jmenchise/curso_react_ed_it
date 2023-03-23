import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {

    const {navbarName, routes} = props;
    
    return (
        <nav className="navbar navbar-light bg-light">
            <div className='d-flex px-3'>
                <p className="navbar-brand">{navbarName}</p>
                <div className='d-flex justify-content-around'>
                    {routes.map(({name, path}, index) =>(
                        <NavLink 
                            className={'nav-link'}
                            key={index} 
                            to={path}
                        >
                            {name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar