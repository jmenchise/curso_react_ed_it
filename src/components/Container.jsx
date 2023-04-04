import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsProvider'



const Container = () => {

    const { products, loading } = useContext(ProductsContext);
    
    
    return (
        <div>Container</div>
    )
}

export default Container