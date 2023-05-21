import { useState } from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

const UserData = () => {

    const user = useSelector(state => state.user);
    const [edit, setEdit] = useState(false);
    const handleEdit = () => setEdit(!edit);

    return (
        <div>
            <h1>Nombre: {user.name}</h1>
            <h1>Usuario: {user.userName}</h1>
            <h1>Password: {user.password}</h1>
            {!edit ?
                <button onClick={handleEdit}> click aquí para editar el usuario</button>
                : <>
                    <Form user={user} handleEdit={handleEdit} />
                    <button onClick={handleEdit}> cancelar</button>
                </>
            }
        </div>
    )
}

export default UserData