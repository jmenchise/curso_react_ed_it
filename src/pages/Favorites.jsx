import React, { useContext } from 'react'
import { ProductsContext } from '../context/ProductsProvider';
import Card from '../components/Card/Card';

const Favorites = () => {
    
    const { favorites, removeFavorites } = useContext(ProductsContext);
    
    return (
        <div className='container d-flex flex-column align-items-center py-3'>
            {favorites.length < 1 ?
                <h1>No hay Favoritos para mostrar</h1>
                : favorites.map((product) => (
                    <Card
                        key={product.id}
                        removeFavorites={removeFavorites}
                        inFavorites
                        {...product}
                    />
                ))}
        </div>
    )
}

export default Favorites