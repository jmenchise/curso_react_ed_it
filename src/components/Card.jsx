import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {

    const {image, name, version, price, year, id, hideButton} = props;

    const navigate = useNavigate()

    const handleNavigate = () => navigate(`/detail/${id}`)

    return (
        <div className="card mx-2" style={{width: '18rem'}}>
            <img src={image} className="card-img-top w-50 h-50 mx-auto" alt='celu-image' />
            <div className="card-body">
                <h5 className="card-title">Modelo: {name}</h5>
                <h6 className="fs-4 text-center">Version: {version}</h6>
                <p className="card-text">
                    Precio: {price}
                </p>
                <div>
                    <span>Año: {year}</span>
                </div>
                {
                    !hideButton &&
                    <button className="btn btn-primary" onClick={handleNavigate}>
                        Más Info
                    </button>
                }
            </div>
        </div>
    )
}

export default Card 