import React from 'react'
import { capitalizeFirstLetter } from '../helper'

const Input = (props) => {

    const {name, type='text', value, onChange, disabled} = props
    
    return (
        <div className="mb-3">
            <label className="form-label">{capitalizeFirstLetter(name)}</label>
            <input 
                value={value}
                onChange={onChange} 
                type={type} 
                className="form-control"
                name={name}
                disabled={disabled}
            />
        </div>
    )
}

export default Input