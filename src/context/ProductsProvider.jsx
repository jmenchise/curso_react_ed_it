import React, { createContext, useEffect } from 'react'
import useLayout from '../hooks/useLayout';
import useProducts from '../hooks/useProducts';
import useWishList from '../hooks/useWishList';

export const ProductsContext = createContext('');

const ProductsProvider = ({children}) => {

    const { loading } = useLayout();
    const { products, getProducts } = useProducts();
    const  { wishList, getWishList } = useWishList();
    
    useEffect(() => {
        getProducts();
        getWishList();
        // eslint-disable-next-line
    }, [])
    
    
    return (
        <ProductsContext.Provider value={{
            loading,
            products,
            wishList,
            getProducts,
            getWishList
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider