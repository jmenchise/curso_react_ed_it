import React, { useState, useEffect } from 'react'
import Input from '../../shared/Input'

const Form = (props) => {

    const {
        initialState,
        inputs,
        formTitle,
        onSubmit,
        toggleEnviado,
        handleText
    } = props
    

    const[form, setForm] = useState(initialState)


    useEffect(() => {
        setForm(initialState)
    }, [initialState])


    const handleChange = e => {
        const{name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = e => {
        onSubmit(e, form);
        toggleEnviado();
    }
    
    return (
        <div>
            <input 
                type="text" onChange={ e => handleText(e.target.value)} 
                placeholder={'Escribí acá el texto a cargar.'}
            />
            <form onSubmit={onSubmit ? e => handleSubmit(e) : null}>
                <h1>{formTitle || 'Titulo'}</h1>
                {inputs?.map(({name, id, type, placeholder, required}) => (
                        <Input
                            key={id}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            required={required}
                            onChange={handleChange}
                        />
                ))}
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Form