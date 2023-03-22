import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const MainLayoutRoutes = (props) => {
    
    
    const { user = false, title, navbarItemNames } = props;
    
    
    return (
        <div>
            <>
                <h1>{title}</h1>
                <Navbar
                    navbarItemNames={navbarItemNames || [
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
                        },
                        {
                            itemName: 'Basket',
                            path: '/basket'
                        },
                        {
                            itemName: 'NFL',
                            path: '/nfl'
                        }
                    ]}
                    searchBar={true}
                />
                
                {!user && <Navigate to={'/login'}/>}
                {user && <Outlet/>}

            </>
        </div>
    )
}

export default MainLayoutRoutes