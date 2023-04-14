import React from 'react'

const Input = (props) => {

    const {name, type = 'text', value, onChange, } = props;
    
    return (
        <div>
            <label>{name}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input