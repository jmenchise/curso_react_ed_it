import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsProvider'
import Card from '../components/Card/Card';

const Home = () => {

    const { products, deleteProduct, favorites, addFavorites, removeFavorites } = useContext(ProductsContext);
    
    return (
        <div className='container d-flex flex-column align-items-center py-3'>
            {products?.map((product) => (
                <Card 
                    key={product.id}
                    favorites={favorites}
                    addFavorites={addFavorites}
                    removeFavorites={removeFavorites}
                    deleteProduct={deleteProduct}
                    {...product}
                />
            ))}
        </div>
    )
}

export default Home