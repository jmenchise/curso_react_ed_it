import React from "react";
import {NavLink} from 'react-router-dom'

const NavbarItem = (props) => {
    const {itemName, path} = props;

    const activeStyle = {color: 'red', border: '2px, solid, red'}

    return (
        <li className="nav-item">
            <NavLink style={({isActive}) => isActive ? activeStyle : undefined } to={path} className='nav-link'>{itemName}</NavLink>
        </li>
    )
}

export default NavbarItem