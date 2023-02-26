import React, {useEffect, useState} from 'react'
import Cart from './Cart/Cart'

const ProductsContainer = () => {
    const superHeroes = [
        {
            id: 1,
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Superman_S_symbol.svg/1200px-Superman_S_symbol.svg.png',
            title: 'Superman',
            description: 'DC Super Heroe',
            comics: 'DC'
        },
        {
            id: 2,
            img: 'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/3e5a7-logo-de-batman-png-free.png?resize=700%2C700&ssl=1',
            title: 'Batman',
            description: 'DC Super Heroe',
            comics: 'DC'
        },
        {
            id: 3,
            img: 'http://businessyield.com/wp-content/uploads/2022/11/iron-man-logo.png',
            title: 'Iron Man',
            description: 'Marvel Super Heroe',
            comics: 'Marvel'
        }

    ]

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