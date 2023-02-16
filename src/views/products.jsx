import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Products = () => {
    const navbarItemNames = ['Home', 'Link', 'Disabled'];
    const dropdown = {
        name : 'Video Juegos',
        itemsNames: ['XBOX', 'PLAY STATION', 'PC'],
        showDropdown: true,
    }

    return (
        <>
            <Navbar
                navbarLogoText={'Mercado Libre'}
                navbarItemNames={navbarItemNames}
                searchBar={true}
                showDropdown={dropdown.showDropdown}
                dropdownName={dropdown.name}
                dropdownItemsNames={dropdown.itemsNames}
            />
        </>
    )
}


export default Products;
