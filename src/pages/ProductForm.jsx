import React from 'react'
import Form from '../components/Form/Form'

const ProductForm = () => {

    const initialState = {
        nombre: '',
        marca: '',
        modelo: '',
        precio: ''
    }
    
    return (
        <div className='container d-flex flex-column align-items-center my-5'>
            <Form buttonText={'Agregar Producto'} initialState={initialState}/>
        </div>
    )
}

export default ProductForm