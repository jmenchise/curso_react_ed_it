import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'

const EcommerceLayout = () => {

    const routes = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Carrito',
            path: '/cart'
        },

    ]
    
    
    return (
        <div>
            <Navbar 
                navbarName={'Celu Store'}
                routes={routes}
            />
            <Outlet/>
        </div>
    )
}

export default EcommerceLayout