import React from 'react'
import { AiFillHeart, AiOutlineHeart, AiFillDelete, AiFillEdit }  from 'react-icons/ai';
import { isItemExist } from '../../helper';
import { useNavigate } from 'react-router-dom';



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
        removeFavorites,
        deleteProduct
    } = props;

    const navigate = useNavigate();

    const handleDelete = id => {
        deleteProduct(id);
        alert('Producto eliminado con éxito!');
    }
    
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
                    <div>
                        <span onClick={() => addFavorites({ id, nombre, marca, modelo, precio })} role='button' className='fs-3'>
                            <AiOutlineHeart />
                        </span>
                        <span onClick={() => navigate(`product/edit/${id}`)} role='button' className='fs-3'>
                            <AiFillEdit />
                        </span>
                        <span onClick={() => handleDelete(id)} role='button' className='fs-3 text-danger'>
                            <AiFillDelete />
                        </span>
                    </div>
                )}
                {inFavorites && (
                    <span onClick={() => removeFavorites(id)} role='button' className='fs-3 text-danger'>
                        <AiFillDelete />
                    </span>
                )}
            </div>
        </div>
    );
}

export default Card