import React, { useContext } from 'react'
import Input from '../../shared/Input'
import useForm from '../../hooks/useForm';
import { defineInputType } from '../../helper';
import { ProductsContext } from '../../context/ProductsProvider';

const Form = (props) => {

    const { saveProduct } = useContext(ProductsContext);
    
    const {
        initialState,
        buttonText = 'submit',
        buttonClassName = 'btn btn-primary w-100' 
    } = props;

    const { form, setform, handleChange } = useForm(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        saveProduct(form);
        setform(initialState);
    }

    return (
        <form onSubmit={handleSubmit} className='w-50 mx-auto' autoComplete='off'>
            {
                Object.entries(form).map(([key, value]) => (
                    <Input
                        key={key}
                        name={key}
                        value={value}
                        type={defineInputType(key)}
                        onChange={handleChange}
                    />
                ))
            }
            <button
                type="submit"
                className={buttonClassName}
            >
                {buttonText}
            </button>
        </form>
    )
}

export default Form