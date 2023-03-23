import React from 'react'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import EcommerceLayout from './EcommerceLayout'



const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<EcommerceLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='detail/:id' element={<ProductDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default index