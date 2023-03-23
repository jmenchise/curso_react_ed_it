import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import { EcommerceContext } from '../context/EcommerceProvider'

const ProductDetail = () => {

    const {products} = useContext(EcommerceContext);
    const {id} = useParams();
    const product = products.find(product => product.id === id);
    
    return (
        <div>
            <Card {...product} hideButton={true}/>
        </div>
    )
}

export default ProductDetail