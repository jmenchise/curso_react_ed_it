import React, { useContext } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider'

const CartContainer = () => {

    const {cart} = useContext(EcommerceContext);
    return (
        <div>
            {!cart.length ? <h1>Carrito Vacío</h1> : cart.map(product => (
                <>
                    <div className='d-flex card'>
                        <span>Nombre: {product.name}</span>
                        <span>${product.price}</span>
                        <span>Cantidad: {product.count}</span>
                    </div>
                </>
            ))}
        </div>
    )
}

export default CartContainer