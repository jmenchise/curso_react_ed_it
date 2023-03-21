import React, { useState } from 'react'
import { useParams, useSearchParams, Navigate} from 'react-router-dom'
import CartDetail from '../components/Cart/CartDetail'
import { superHeroes } from '../data'


const DetailPage = () => {

    const { id } = useParams();

    const superHeroe = superHeroes.find((heroe) => heroe.id === id);

    const [SearchParams, setSearchParams] = useSearchParams();
    const [findSuperHeroe, setFindSuperHeroe] = useState(true)
    console.log('SearchParams:', SearchParams.get('q'));
    
    // const redirectPage = () => {
    //     setTimeout(() => {
    //         setFindSuperHeroe(!findSuperHeroe);
    //     }, 3000);
    // }


    if (superHeroe) {
        return (
            <div>
                <CartDetail
                    img={superHeroe.img}
                    nombre={superHeroe.title}
                />
            </div>
        )
    } else {
        // redirectPage();
        return(
            <div>
                <h1>El artículo no existe.</h1>
                {!findSuperHeroe && <Navigate to={'/'}/>}
            </div>
        )
    }
}

export default DetailPage