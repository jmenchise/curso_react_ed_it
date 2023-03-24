import React from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCounter from './ItemCounter';

const Card = (props) => {

    const {image, name, version, price, year, id, hideButton} = props;
    const navigate = useNavigate()
    const handleNavigate = () => navigate(`/detail/${id}`)

    return (
        <div className="card mx-2" style={{width: '18rem'}}>
            <img src={image || 'img'} className="card-img-top w-50 h-50 mx-auto" alt='imagen' />
            <div className="card-body">
                <h5 className="card-title">Modelo: {name || 'Name'}</h5>
                <h6 className="fs-4 text-center">Version: {version || 'Version'}</h6>
                <p className="card-text">
                    Precio: {price || 'Price'}
                </p>
                <div>
                    <span>Año: {year || 'Year'}</span>
                </div>
                {
                    !hideButton &&
                    <button className="btn btn-primary" onClick={handleNavigate}>
                        Más Info
                    </button>
                }
            </div>
            {hideButton && <ItemCounter product = {props}/>}
        </div>
    )
}

export default Card 