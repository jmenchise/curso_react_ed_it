import React from 'react'
import NavbarItem from './NavbarItem'

const Dropdown = (props) => {
    const{dropdownName, dropdownItemsNames} = props

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {dropdownName}
            </a>
            <ul className="dropdown-menu">
                {
                    dropdownItemsNames?.length > 0 && dropdownItemsNames.map(itemName =>
                        <NavbarItem itemName={itemName}/>
                    )
                }
            </ul>
        </li>
    )
}

export default Dropdown