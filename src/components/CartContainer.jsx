import React, { useContext } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider'
import ItemCounter from './ItemCounter'

const CartContainer = () => {

    const {cart, removeToCart} = useContext(EcommerceContext);

    
    return (
        <div>
            {!cart.length ? <h1>Carrito Vacío</h1> : cart.map(product => (
                <>
                    <div className='d-flex card'>
                        <span>Nombre: {product.name} {product.version}</span>
                        <span>${product.price}</span>
                        <span>Cantidad: {product.count}</span>
                        {/* <ItemCounter 
                            key={product.id}
                            productCount={product.count}
                            noAddToCartBtn={true}
                        /> */}
                        <button className='btn btn-danger'
                            onClick={() => removeToCart(product.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                </>
            ))}
        </div>
    )
}

export default CartContainer