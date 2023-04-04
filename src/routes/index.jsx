import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EcommerceLayout from './EcommerceLayout'
import Home from '../pages/Home'
import WishList from '../pages/WishList'
import ProductForm from '../pages/ProductForm'
import ProductsProvider from '../context/ProductsProvider'


const Index = () => {
    return (
        <ProductsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<EcommerceLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='wishlist' element={<WishList/>}/>
                        <Route path='product/form' element={<ProductForm/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ProductsProvider>
    )
}

export default Index