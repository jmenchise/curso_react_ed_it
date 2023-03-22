import React from "react";
import NavbarItem from "./NavbarItem";
import SearchBar from "./SearchBar";

const Navbar = (props) => {
    const {
        navbarLogoText,
        navbarItemNames,
        searchBar
    } = props;
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">{navbarLogoText}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navbarItemNames?.map(({itemName, path}, index) => 
                            <NavbarItem 
                                key={index}
                                itemName={itemName}
                                path={path}
                            />
                        )}
                    </ul>
                    { searchBar && <SearchBar/> }
                </div>
            </div>
        </nav>
    )
}

export default Navbar