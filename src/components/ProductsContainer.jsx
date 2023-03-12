import React, {useEffect, useState} from 'react'
import Cart from './Cart/Cart'
import { superHeroes } from '../data';


const ProductsContainer = () => {

    const [products, setProducts] = useState(superHeroes);
    const [click, setClick] = useState(false) 


    useEffect(() => {
        // Cuando el componente está construído y listo (Mount);
        console.log('Se cargó completamente el componente');
        
        return () => {
            // cuando el componente se destruye. (Dismount)
            console.log('Se destruyó el componente');
        }
        // en los corchetes, suceden los cambios (Change)
    }, [click])


    console.log('se ejecutó este console.log, pero el HTML no está cargado.');


    return (
        <>
            {products.map(({ id, img, title, description, comics }) => (
                <Cart
                    id={id}
                    key={id}
                    img={img}
                    title={title}
                    description={description}
                    buttonName={'Mas Info'}
                    buttonClassName={comics === 'DC' ? 'btn btn-outline-warning' : 'btn btn-danger'}
                />
            ))}
            <button onClick={() => {setClick(!click)}}>Click</button>
        </>
    )
}

export default ProductsContainer