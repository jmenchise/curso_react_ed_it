import React from 'react'
import { useParams, useSearchParams} from 'react-router-dom'
import CartDetail from '../components/Cart/CartDetail'
import { superHeroes } from '../data'


const DetailPage = () => {

    const { id } = useParams();

    const superHeroe = superHeroes.find((heroe) => heroe.id === id);

    const [SearchParams, setSearchParams] = useSearchParams();
    console.log('SearchParams:', SearchParams.get('q'));
    


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
        return(
            <div>
                <h1>El artículo no existe.</h1>
            </div>
        )
    }
}

export default DetailPage