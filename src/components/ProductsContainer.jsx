import { React, useContext } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider'
import Card from './Card'

const ProductsContainer = () => {

    const {products, nombreDelProfe, saludar} = useContext(EcommerceContext);

        
    
    return (
        <div className='container-fluid d-flex p-3'>
            {products.map((product) => (
                <Card
                    key={product.id}
                    {...product}
                    // hideButton
                />
            ))}
        </div>
    )
}

export default ProductsContainer