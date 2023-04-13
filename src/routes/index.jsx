import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EcommerceLayout from './EcommerceLayout'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import ProductForm from '../pages/ProductForm'
import ProductsProvider from '../context/ProductsProvider'
import ProductEdit from '../pages/ProductEdit'


const Index = () => {
    return (
        <ProductsProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<EcommerceLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='favorites' element={<Favorites/>}/>
                        <Route path='product/form' element={<ProductForm/>}/>
                        <Route path='product/edit/:id'element={<ProductEdit/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ProductsProvider>
    )
}

export default Index