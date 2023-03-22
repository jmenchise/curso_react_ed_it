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
                <Route path='/' element={<MainLayoutRoutes user={true}/>}>
                    <Route index element={<Home/>}/>
                    <Route path='nosotros' element={<Nosotros/>} />
                    <Route path='contacto' element={<Contacto/>} />
                    <Route path='detail/:id' element={<DetailPage/>} />
                    <Route 
                        path='basket/'
                        element={
                            <MainLayoutRoutes
                                user={true}
                                navbarItemNames={[
                                    {
                                        itemName: 'Inicio',
                                        path: '/basket'
                                    },
                                    {
                                        itemName: 'Remeras',
                                        path: '/basket/remeras'
                                    },
                                    {
                                        itemName: 'Guantes',
                                        path: '/basket/guantes'
                                    },
                                    {
                                        itemName: 'Pelotas',
                                        path: '/basket/pelotas'
                                    }
                                ]}
                            />
                        }
                    >
                        <Route index element={<h1>Bienvenido a Basquet</h1>}/>
                        <Route path='remeras' element={<h1>Seccion de Remeras</h1>} />
                        <Route path='guantes' element={<h1>Seccion de Guantes</h1>} />
                        <Route path='pelotas' element={<h1>Seccion de Pelotas</h1>} />
                    </Route>
                    <Route 
                        path='nfl/'
                        element={
                            <MainLayoutRoutes
                                user={true}
                                navbarItemNames={[
                                    {
                                        itemName: 'Inicio',
                                        path: '/nfl'
                                    },
                                    {
                                        itemName: 'Cascos',
                                        path: '/nfl/cascos'
                                    },
                                    {
                                        itemName: 'Camisetas',
                                        path: '/nfl/camisetas'
                                    },
                                    {
                                        itemName: 'Pelotas',
                                        path: '/nfl/pelotas'
                                    }
                                ]}
                            />
                        }
                    >
                        <Route index element={<h1>Bienvenido a NFL</h1>}/>
                        <Route path='cascos' element={<h1>Seccion de Cascos</h1>} />
                        <Route path='camisetas' element={<h1>Seccion de Camisetas</h1>} />
                        <Route path='pelotas' element={<h1>Seccion de Pelotas</h1>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas