import React, { createContext } from 'react'
import useLayout from '../hooks/useLayout';
import useProducts from '../hooks/useProducts';
import useFavorites from '../hooks/useFavorites';

export const ProductsContext = createContext('');

const ProductsProvider = ({children}) => {

    const { loading } = useLayout();
    const { products, getProducts, saveProduct, putProduct, deleteProduct } = useProducts();
    const { favorites, getFavorites, addFavorites, removeFavorites } = useFavorites();
    
    // useEffect(() => {
    //     getProducts();
    //     getFavorites();
    //     // eslint-disable-next-line
    // }, [])
    
    
    return (
        <ProductsContext.Provider value={{
            loading,
            products,
            favorites,
            getProducts,
            saveProduct,
            putProduct,
            deleteProduct,
            getFavorites,
            addFavorites,
            removeFavorites
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider