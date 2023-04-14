import React from 'react'
import Input from '../shared/Input';
import { useDispatch } from 'react-redux';
import { changeValue } from '../redux/actions/userActions'; 

const Form = (props) => {

    const { user, handleEdit } = props;
    const dispatch = useDispatch();

    const handleChange = e => {
        const {name, value} = e.target;
        dispatch(changeValue({
            ...user,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(changeValue(user));
        console.log('user:', user);
        handleEdit();
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} autoComplete='off'>
                {
                    Object.entries(user).map(([key, value])=> (
                        <Input
                            key={key}
                            name={key}
                            value={value}
                            onChange={handleChange}
                        />
                    ))
                }
                <button type='submit'> Editar Usuario</button>
            </form>
        </div>
    )
}

export default Form