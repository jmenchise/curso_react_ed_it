import React, { useContext } from 'react'
import Form from '../components/Form/Form'
import { Navigate, useParams } from 'react-router-dom'
import { findItemInArray } from '../helper'
import { ProductsContext } from '../context/ProductsProvider'

const ProductEdit = () => {

    const { products } = useContext(ProductsContext);
    const { id } = useParams();
    
    return (
        <div className='container d-flex flex-column align-items-center my-5'>
            <h1>Editar Producto</h1>
            {findItemInArray(id, products) ?
                <Form toEdit buttonText={'Editar Producto'} initialState={findItemInArray(id, products) || {}}/>
            : <Navigate to={'/'} />
            }
        </div>
    )
}

export default ProductEdit