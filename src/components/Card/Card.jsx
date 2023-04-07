import React from 'react'
import { AiFillHeart, AiOutlineHeart, AiFillDelete }  from 'react-icons/ai';
import { isItemExist } from '../../helper';



const Card = (props) => {

    const { 
        nombre,
        id,
        marca,
        modelo,
        precio,
        favorites,
        inFavorites,
        addFavorites,
        removeFavorites 
    } = props;

    return (
        <div className="card w-75 my-3">
            <div className="card-body">
                {nombre}
            </div>
            <div className="card-body">
                {marca}
            </div>
            <div className="card-body">
                {modelo}
            </div>
            <div className="card-body">
                {precio}
            </div>
            <div className='d-flex justify-content-end mx-3'>
                {!inFavorites && isItemExist(id, favorites) && (
                    <span role='button' className='fs-3'>
                        <AiFillHeart />
                    </span>
                )}
                {!inFavorites && !isItemExist(id, favorites) && (
                    <span onClick={() => addFavorites({id, nombre, marca, modelo, precio})} role='button' className='fs-3'>
                        <AiOutlineHeart />
                    </span>
                )}
                {inFavorites && (
                    <span onClick={() => removeFavorites(id)} role='button' className='fs-3 text-danger'>
                        <AiFillDelete />
                    </span>
                )}
            </div>
        </div>
    )
}

export default Card