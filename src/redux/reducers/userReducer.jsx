import { types } from "../types/user.types"

const initialState = {
    name: 'Joan',
    userName: 'Joan-react',
    password: 'react2023',
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case types.CHANGE_NAME:
            return { 
                ...state, 
                name: 'Pepe'
            }

        default:
            return state
    }
}

export default userReducer;