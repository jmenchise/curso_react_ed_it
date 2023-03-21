import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const MainLayoutRoutes = (props) => {
    
    
    const navbarItemNames = [
        {
            itemName: 'Home',
            path: '/'
        },
        {
            itemName: 'Nosotros',
            path: '/nosotros'
        },
        {
            itemName: 'Contacto',
            path: '/contacto'
        }
    ];

    const dropdown = {
        name : 'Video Juegos',
        itemsNames: ['XBOX', 'PLAY STATION', 'PC'],
        showDropdown: true,
    }

    const { user= false } = props;
    
    
    return (
        <div>
            <>
                <Navbar
                    navbarItemNames={navbarItemNames}
                    searchBar={true}
                    showDropdown={dropdown.showDropdown}
                    dropdownName={dropdown.name}
                    dropdownItemsNames={dropdown.itemsNames}
                />

                

                <Outlet/>
            </>
        </div>
    )
}

export default MainLayoutRoutes