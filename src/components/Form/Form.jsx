import React from 'react'
import Input from '../../shared/Input'
import useForm from '../../hooks/useForm';
import { defineInputType, defineIsDisabled } from '../../helper';

const Form = (props) => {

    
    const {
        initialState,
        buttonText = 'submit',
        buttonClassName = 'btn btn-primary w-100',
        toEdit
    } = props;

    const { form, handleChange, handleSubmit } = useForm(initialState);


    return (
        <form onSubmit={e => handleSubmit(e, toEdit)} className='w-50 mx-auto' autoComplete='off'>
            {
                Object.entries(form).map(([key, value]) => (
                    <Input
                        key={key}
                        name={key}
                        value={value}
                        type={defineInputType(key)}
                        onChange={handleChange}
                        disabled={defineIsDisabled(key)}
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