import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeUserSelect, emptyValues, resetValues } from './userSilce';
import { getAllUsers } from './userAPI';

const User = () => {

    const { users, loading, error } = useSelector(makeUserSelect);
    console.log('users:', users);
    const dispatch = useDispatch();

    const initialUsers = [{
        name: 'Profe',
        email: 'profe@profe.com',
        password: '1234!'
    }]

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <>
            <div>
                {error && <h1>Error 404</h1>}
                {loading && <h1>Cargando...</h1>}
                {!loading && users?.map(({ name, email, password }, index) => (
                    <React.Fragment key={index}>
                        <h1>Nombre: {name}</h1>
                        <h1>Email: {email}</h1>
                        <h1>Password: {password}</h1>
                    </React.Fragment>
                ))}
            </div>
            <div>
                <button onClick={() => dispatch(emptyValues())}>
                    Vaciar campos
                </button>
                <button onClick={() => dispatch(resetValues(initialUsers))}>
                    Reestablecer campos
                </button>
            </div>
        </>
    )
}

export default User