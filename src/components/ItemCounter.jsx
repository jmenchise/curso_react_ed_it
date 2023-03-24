import React, { useContext } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider';
import useCounter from '../hooks/useCounter';

const ItemCounter = (props) => {

    const {addToCart, findProductInCart } = useContext(EcommerceContext);
    const {product,noAddToCartBtn, productCount } = props;
    const {count, handleAdd, handleSubstract, handleRedirect} = useCounter(productCount);
    
    return (
        <div>
            <div className='container d-flex justify-content-between'>
                <button onClick={handleSubstract} className='btn btn-warning fs-6'>
                    -1
                </button>
                <h6 >Cantidad: {count}</h6>
                <button onClick={handleAdd} className='btn btn-warning fs-6'>
                    +1
                </button>
            </div>
            {!noAddToCartBtn && !findProductInCart(product.id) && 
                <button
                    className='btn btn-primary mx-auto my-4'
                    onClick={() => addToCart({...product, count})}
                >
                    Agregar al Carrito
                </button>
            }
            {findProductInCart(product.id) && 
                <button
                    onClick={handleRedirect}
                    className='btn btn-success mx-auto my-4'
                >
                    Terminar la compra
                </button>
            }
        </div>
    )
}

export default ItemCounter