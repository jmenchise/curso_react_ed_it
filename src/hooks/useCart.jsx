import { useState } from 'react'

const useCart = () => {
    const [cart, setCart] = useState([]);
    const addToCart = product => setCart([...cart, product]);
    const removeToCart = id => setCart(cart.filter(product => product.id !== id));
    const findProductInCart = id => cart.some(product => product.id === id);
    
    return {
        cart,
        addToCart,
        removeToCart,
        findProductInCart
    }
}

export default useCart