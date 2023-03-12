import React from 'react'
import { useNavigate } from 'react-router-dom'

const CartDetail = (props) => {


    const {img, nombre} = props

    const navigate = useNavigate()
    
    return (
        <div>
            <button className='btn btn-danger' onClick={() => navigate(-1)}>Atras</button>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>{nombre}</h2>
            </div>
        </div>
    )
}

export default CartDetail