import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Nosotros from '../pages/Nosotros'
import Contacto from '../pages/Contacto'
import Navbar from '../components/Navbar/Navbar'
import DetailPage from '../pages/DetailPage'


const Rutas = () => {

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
    
    return (
        <BrowserRouter>
            <Navbar
                navbarItemNames={navbarItemNames}
                searchBar={true}
                showDropdown={dropdown.showDropdown}
                dropdownName={dropdown.name}
                dropdownItemsNames={dropdown.itemsNames}
            />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/nosotros' element={<Nosotros/>} />
                <Route path='/contacto' element={<Contacto/>} />
                <Route path='/detail/:id' element={<DetailPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas