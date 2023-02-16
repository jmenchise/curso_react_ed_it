import React from "react";

const NavbarItem = (props) => {
    const {itemName} = props;

    return (
        <li className="nav-item">
            <a className="nav-link">{itemName}</a>
        </li>
    )
}

export default NavbarItem