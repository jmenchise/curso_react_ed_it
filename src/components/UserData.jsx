import React from 'react';
import {useSelector} from 'react-redux';

const UserData = () => {

    const user = useSelector(state => state.user);

    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.userName}</h1>
            <h1>{user.password}</h1>
        </div>
    )
}

export default UserData