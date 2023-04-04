import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Spinner from '../components/Spinner'

const EcommerceLayout = () => {
    
    
    return (
        <div>
            <Navbar/>
            <Spinner/>
            <Outlet/>
        </div>
        
    )
}

export default EcommerceLayout