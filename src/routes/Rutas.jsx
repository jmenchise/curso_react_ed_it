import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nosotros from '../pages/Nosotros'
import Contacto from '../pages/Contacto'
import DetailPage from '../pages/DetailPage'
import MainLayoutRoutes from './layout/MainLayoutRoutes'
import Home from '../pages/Home'


const Rutas = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayoutRoutes/>}>
                    <Route index element={<Home/>}/>
                    <Route path='nosotros' element={<Nosotros/>} />
                    <Route path='contacto' element={<Contacto/>} />
                    <Route path='detail/:id' element={<DetailPage/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas