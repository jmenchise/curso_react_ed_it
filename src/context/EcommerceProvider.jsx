import { createContext, useState } from 'react'

export const EcommerceContext = createContext('')

const EcommerceProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const products = [
        {
            id: '1',
            image: 'https://http2.mlstatic.com/D_NQ_NP_605126-MLM51559383638_092022-O.webp',
            name: 'Iphone',
            version: '14 Pro Max',
            price: 400000,
            year: 2023
        },
        {
            id: '2',
            image: 'https://http2.mlstatic.com/D_NQ_NP_816480-MLA47777273514_102021-O.webp',
            name: 'Iphone',
            version: '13 Pro Max',
            price: 300000,
            year: 2022
        },
        {
            id: '3',
            image: 'https://http2.mlstatic.com/D_NQ_NP_989311-MLA31922400058_082019-O.webp',
            name: 'Samsung',
            version: 'A 50',
            price: 160000,
            year: 2019
        },
    ]
    const nombreDelProfe = 'Hovha';
    const saludar = () => console.log('Hola mundo');
    const addToCart = product => setCart([...cart, product])
    
    console.log('cart:', cart)

    
    return (
        <EcommerceContext.Provider value={{
            products,
            nombreDelProfe,
            saludar,
            cart,
            addToCart
        }}>
            {children}
        </EcommerceContext.Provider>
    )
}

export default EcommerceProvider