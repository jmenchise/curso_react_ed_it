import React, { useContext, useState } from 'react'
import { EcommerceContext } from '../context/EcommerceProvider';

const ItemCount = (props) => {

    const {product} = props;
    const {addToCart} = useContext(EcommerceContext);
    const [count, setCount] = useState(1);
    const handleAdd = () => setCount(count + 1);
    const handleSubstract = () => count > 1 && setCount(count -1);
    
    return (
        <div>
            <div className='container d-flex justify-content-between'>
                <button onClick={handleSubstract} className='btn btn-warning fs-6'>
                    -1
                </button>
                <h6 >Cantidad: {count}</h6>
                <button onClick={handleAdd} className='btn btn-warning fs-6'>
                    +1
                </button>
            </div>
            <button 
                className='btn btn-primary mx-auto my-4'
                onClick={() => addToCart({...product, count})}
            >
                Agregar al Carrito
            </button>
        </div>
    )
}

export default ItemCount