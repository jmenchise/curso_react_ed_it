import React from 'react'
import defaultImg from '../../assets/logo192.png'
import Button from '../../shared/Button'

const Cart = (props) => {
    const {img, title, description, buttonName, buttonClassName} = props
    
    const handleClick = () => alert('Se hizo click')

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={img || defaultImg} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title || 'Default Title'}</h5>
                <p className="card-text">{description || 'Lorem Ipsum'}</p>
                <Button 
                    className={buttonClassName}
                    buttonText={buttonName}
                    // disabled
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export default Cart